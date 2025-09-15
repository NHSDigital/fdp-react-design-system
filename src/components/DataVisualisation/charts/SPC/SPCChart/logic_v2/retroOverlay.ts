import { ImprovementDirection, SpcRowV2, VariationIcon } from "./types";
import { isNumber } from "./utils";

export interface RetroOverlayOptions {
	// Currently we only support retro-colouring for confirmed shift runs.
	// Two-of-three and single >3σ are intentionally not backfilled to keep
	// alignment with NHSE SQL semantics for per-row eligibility.
	enableShift?: boolean;
}

function iconFor(
	side: "up" | "down",
	dir: ImprovementDirection
): VariationIcon {
	if (dir === ImprovementDirection.Neither) {
		return side === "up" ? VariationIcon.NeitherHigh : VariationIcon.NeitherLow;
	}
	if (dir === ImprovementDirection.Up) {
		return side === "up"
			? VariationIcon.ImprovementHigh
			: VariationIcon.ConcernLow;
	}
	// dir === Down
	return side === "up"
		? VariationIcon.ConcernHigh
		: VariationIcon.ImprovementLow;
}

/**
 * Compute a "teaching view" overlay that retro-colours pre-eligibility points
 * that sit on the same side of the mean as a later confirmed shift run.
 *
 * Notes and constraints (to preserve SQL parity):
 * - Engine rows remain unchanged; callers should only use these icons for
 *   visuals. The default engine `variationIcon` is still the source of truth
 *   for parity and testing.
 * - Only shift runs are backfilled; single-point and two-of-three are not
 *   retro-coloured.
 * - Backfill stops at the first eligible row in the partition; we never paint
 *   into rows where the engine would not have had limits yet.
 */
export function computeRetroShiftOverlay(
	rows: SpcRowV2[],
	metricImprovement: ImprovementDirection,
	opts?: RetroOverlayOptions
): Array<VariationIcon | null> {
	const { enableShift = true } = opts ?? {};
	const overlay: Array<VariationIcon | null> = Array(rows.length).fill(null);
	if (!enableShift) return overlay;

	// Group indices by partition
	const byPart = new Map<number, number[]>();
	rows.forEach((r, i) => {
		if (!byPart.has(r.partitionId)) byPart.set(r.partitionId, []);
		byPart.get(r.partitionId)!.push(i);
	});

	for (const [, idxs] of byPart) {
		// Identify the first eligible index in this partition
		const firstEligibleIdx = idxs.find((i) => isNumber(rows[i].mean));
		if (firstEligibleIdx == null) continue;

		// Walk through eligible rows to find contiguous shift runs; for each run,
		// extend backwards across pre-eligibility rows that lie on the same side of
		// the mean at the run's start.
		let runStart: number | null = null;
		let runSide: "up" | "down" | null = null;

		const commitRun = (startIdx: number, side: "up" | "down") => {
			// Use the mean at startIdx as the reference; walk backwards to just before
			// the first eligible index, colouring points that lie on the same side.
			const refMean = rows[startIdx].mean!;
			for (let j = startIdx - 1; j >= idxs[0]; j--) {
				const r = rows[j];
				if (r.ghost || !isNumber(r.value)) continue;
				if (j >= firstEligibleIdx) break; // never paint into eligible region
				const sameSide =
					side === "up" ? r.value! > refMean : r.value! < refMean;
				if (!sameSide) break; // stop when side breaks
				overlay[j] = iconFor(side, metricImprovement);
			}
		};

		for (const i of idxs) {
			const r = rows[i];
			const eligible = isNumber(r.mean);
			if (!eligible) continue; // only scan shift runs where engine was eligible

			const up = !!r.shiftUp;
			const down = !!r.shiftDown;
			const side: "up" | "down" | null = up ? "up" : down ? "down" : null;

			if (side) {
				// If we are starting or continuing a run, manage state
				if (runStart == null) {
					runStart = i;
					runSide = side;
				} else if (runSide === side) {
					// continuing same-side run — nothing else to do yet
				} else {
					// side flipped — commit previous run and start new
					commitRun(runStart, runSide!);
					runStart = i;
					runSide = side;
				}
			} else if (runStart != null) {
				// run ended; commit and reset
				commitRun(runStart, runSide!);
				runStart = null;
				runSide = null;
			}
		}

		// Commit trailing run if still open
		if (runStart != null && runSide != null) commitRun(runStart, runSide);
	}

	return overlay;
}

export default { computeRetroShiftOverlay };
