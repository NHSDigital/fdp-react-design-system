import { mean } from "./spcUtils";

// Raw variation icon and reason literals to avoid importing enums
export type VariationIconRaw = "improvement" | "concern" | "neither" | "suppressed" | "none";
export type BaselineReasonRaw = "shift" | "trend" | "point";

export interface BaselineSuggestionRaw {
	index: number;
	reason: BaselineReasonRaw;
	score: number;
	deltaMean: number;
	oldMean: number;
	newMean: number;
	window: [number, number];
}

export interface BaselineRowMinimal {
	value: number | null;
	partitionId: number;
	variationIcon: VariationIconRaw;
	mean: number | null;
	upperProcessLimit: number | null;
}

export function computeBaselineSuggestionsRaw(
	rows: BaselineRowMinimal[],
	params: {
		W: number; // stability window length
		minGap: number;
		minDeltaSigma: number;
		scoreThreshold: number;
		// candidate triggers provided as booleans on each row (side-specific to detect rising edges correctly)
		isShiftUpAt: (i: number) => boolean;
		isShiftDownAt: (i: number) => boolean;
		isTrendUpAt: (i: number) => boolean;
		isTrendDownAt: (i: number) => boolean;
		isSingleUpAt: (i: number) => boolean;
		isSingleDownAt: (i: number) => boolean;
		// optional: run lengths (unused currently, kept for potential future heuristics)
		shiftRunLength?: number;
		trendRunLength?: number;
	}
): BaselineSuggestionRaw[] {
	const {
		W,
		minGap,
		minDeltaSigma,
		scoreThreshold,
		isShiftUpAt,
		isShiftDownAt,
		isTrendUpAt,
		isTrendDownAt,
		isSingleUpAt,
		isSingleDownAt,
	} = params;
	const suggestions: BaselineSuggestionRaw[] = [];

	// Track last manual baseline boundary using partitionId changes
	let lastBaselineIndex = 0; // treat start as baseline
	for (let i = 0; i < rows.length; i++) {
		const r = rows[i];
		// Update lastBaselineIndex when partition boundary encountered
		if (i > 0 && rows[i - 1].partitionId !== r.partitionId) {
			lastBaselineIndex = i;
		}
		const wasShiftUp = i > 0 && isShiftUpAt(i - 1);
		const wasShiftDown = i > 0 && isShiftDownAt(i - 1);
		const wasTrendUp = i > 0 && isTrendUpAt(i - 1);
		const wasTrendDown = i > 0 && isTrendDownAt(i - 1);
		const wasSingleUp = i > 0 && isSingleUpAt(i - 1);
		const wasSingleDown = i > 0 && isSingleDownAt(i - 1);
		const isShiftUp = isShiftUpAt(i);
		const isShiftDown = isShiftDownAt(i);
		const isTrendUp = isTrendUpAt(i);
		const isTrendDown = isTrendDownAt(i);
		const isSingleUp = isSingleUpAt(i);
		const isSingleDown = isSingleDownAt(i);
		const candidates: { reason: BaselineReasonRaw; index: number }[] = [];
		if (isShiftUp && !wasShiftUp) candidates.push({ reason: 'shift', index: i });
		if (isShiftDown && !wasShiftDown) candidates.push({ reason: 'shift', index: i });
		if (isTrendUp && !wasTrendUp) candidates.push({ reason: 'trend', index: i });
		if (isTrendDown && !wasTrendDown) candidates.push({ reason: 'trend', index: i });
		if (isSingleUp && !wasSingleUp) candidates.push({ reason: 'point', index: i });
		if (isSingleDown && !wasSingleDown) candidates.push({ reason: 'point', index: i });

		for (const c of candidates) {
			if (c.index - lastBaselineIndex < minGap) continue;
			const oldStart = Math.max(0, c.index - W);
			const oldEnd = c.index - 1;
			if (oldEnd - oldStart + 1 < W) continue;
			const newStart = c.index;
			const newEnd = c.index + W - 1;
			if (newEnd >= rows.length) continue;
			const oldVals = rows
				.slice(oldStart, oldEnd + 1)
				.map((rw) => rw.value)
				.filter(
					(v): v is number => typeof v === "number" && Number.isFinite(v)
				);
			const newVals = rows
				.slice(newStart, newEnd + 1)
				.map((rw) => rw.value)
				.filter(
					(v): v is number => typeof v === "number" && Number.isFinite(v)
				);
			if (oldVals.length < W || newVals.length < W) continue;
			// Sigma estimate from candidate row limits
			const cand = rows[c.index];
			let sigma: number | null = null;
			if (
				typeof cand.upperProcessLimit === "number" &&
				typeof cand.mean === "number"
			) {
				const span = cand.upperProcessLimit - cand.mean;
				if (span > 0) sigma = span / 3;
			}
			if (!sigma || sigma <= 0) continue;
			const oldMean = mean(oldVals);
			const newMean = mean(newVals);
			const deltaMean = newMean - oldMean;
			if (Math.abs(deltaMean) < minDeltaSigma * sigma) continue;
			// Stability: count concern icons only in the new window
			const newRows = rows.slice(newStart, newEnd + 1);
			const concernCount = newRows.filter(
				(rw) => rw.variationIcon === "concern"
			).length;
			if (concernCount > 1) continue;
			// Variance scoring bonus
			const variance = (arr: number[]) => {
				const m = mean(arr);
				return arr.length
					? arr.reduce((a, b) => a + (b - m) * (b - m), 0) / arr.length
					: 0;
			};
			const oldVar = variance(oldVals);
			const newVar = variance(newVals);
			let scoreBase =
				c.reason === "shift" ? 90 : c.reason === "trend" ? 70 : 60;
			if (newVar < oldVar) scoreBase += 10;
			scoreBase -= concernCount * 15;
			if (scoreBase < scoreThreshold) continue;
			const existing = suggestions.find((s) => s.index === c.index);
			if (existing) {
				const priority = (reason: BaselineReasonRaw) =>
					reason === "shift" ? 3 : reason === "trend" ? 2 : 1;
				if (
					priority(c.reason) > priority(existing.reason) ||
					scoreBase > existing.score
				) {
					existing.reason = c.reason;
					existing.score = scoreBase;
					existing.deltaMean = deltaMean;
					existing.oldMean = oldMean;
					existing.newMean = newMean;
					existing.window = [newStart, newEnd];
				}
			} else {
				suggestions.push({
					index: c.index,
					reason: c.reason,
					score: scoreBase,
					deltaMean,
					oldMean,
					newMean,
					window: [newStart, newEnd],
				});
			}
		}
	}
	suggestions.sort((a, b) => a.index - b.index);
	return suggestions;
}

export default { computeBaselineSuggestionsRaw };
