import {
	BuildArgsV2,
	ConflictStrategy,
	ImprovementDirection,
	MetricConflictRule,
	TrendSegmentationStrategy,
	TrendSegmentationMode,
	SpcResultV2,
	SpcRowV2,
	VariationIcon,
} from "./types";
import { computePartitionLimits } from "./limits";
import { detectRulesInPartition } from "./detector";
import { applySqlPruning, deriveOriginalCandidates } from "./conflict";
import { computeTrendSegments, chooseSegmentsForHighlight } from "./postprocess/trendSegments";
import { computeSpcVisualCategories, SpcVisualCategory } from "./postprocess/visualCategories";
import { computeBoundaryWindowCategories, BoundaryWindowsOptions } from "./postprocess/boundaryWindows";
import { isNumber } from "./utils";
import { normaliseSpcSettingsV2 } from "./normaliser";

// Build an SPC result aligned to SQL v2.6a, focusing on XmR.
// Mirrors SQL steps but emits per-row icons; dataset parity compares the last non-ghosted row.
export function buildSpcV26a(args: BuildArgsV2): SpcResultV2 {
	const { chartType, metricImprovement, data } = args;

	// There is a legacy flat settings file and a new structured one; normalise to the flat form
	const settings = normaliseSpcSettingsV2(args.settings);

	// Consolidate with defaults derived from NHSE SQL v2.6a and Making Data Count guidance
	const s = {
		minimumPoints: 13,
		shiftPoints: 6,
		trendPoints: 6,
		excludeMovingRangeOutliers: false,
		metricConflictRule: MetricConflictRule.Improvement,
		trendAcrossPartitions: false,
		twoSigmaIncludeAboveThree: false,
		enableFourOfFiveRule: false,
		preferImprovementWhenConflict: false,
		conflictStrategy: ConflictStrategy.SqlPrimeThenRule,
		ruleHierarchy: undefined,
		chartLevelEligibility: false,
		trendFavourableSegmentation: false,
		trendSegmentationMode: TrendSegmentationMode.Off,
		trendSegmentationStrategy: TrendSegmentationStrategy.CrossingAfterUnfavourable,
		trendDominatesHighlightedWindow: false,
		...settings,
	};

	// Resolve legacy boolean to mode if provided explicitly in settings
	const resolvedMode: TrendSegmentationMode =
		settings?.trendSegmentationMode ||
		(settings?.trendFavourableSegmentation === true
			? TrendSegmentationMode.Always
			: settings?.trendFavourableSegmentation === false
			? TrendSegmentationMode.Off
			: s.trendSegmentationMode!);

	// Canonical rows — ensure predictable structure and types used throughout the build
	const canon = data.map((d, i) => ({
		rowId: i + 1,
		x: d.x,
		value: isNumber(d.value) ? d.value! : null,
		ghost: !!d.ghost,
		baseline: !!d.baseline,
		target: isNumber(d.target) ? d.target! : null,
	}));

	// Partitioning — split series at baseline markers (inclusive), calculations occur within these partitions
	const partitions: (typeof canon)[] = [];
	let cur: typeof canon = [];
	for (const r of canon) {
		if (r.baseline && cur.length) {
			partitions.push(cur);
			cur = [];
		}
		cur.push(r);
	}
	if (cur.length) partitions.push(cur);

	const out: SpcRowV2[] = [];

	// Global gating for trend segmentation: when preferImprovementWhenConflict is enabled,
	// we disable trend segmentation to better match datasets that expect improvement-side dominance
	// without segment masking side-effects around the mean crossings.
	const segmentationEnabled =
		(s.trendFavourableSegmentation || resolvedMode !== TrendSegmentationMode.Off) &&
		!s.preferImprovementWhenConflict;

	// Determine chart-level eligibility when enabled: count all non-ghost, valued points across the chart
	const totalEligiblePoints = canon.filter((r) => !r.ghost && isNumber(r.value)).length;
	const chartEligible = !!s.chartLevelEligibility && totalEligiblePoints >= (s.minimumPoints!);
	let partitionId = 0;
	for (const part of partitions) {
		partitionId++;
		const values = part.map((p) => p.value);
		const ghosts = part.map((p) => p.ghost);

		// Eligibility: gate control lines per-row within each partition based on pointRank
		// A row becomes eligible when there are at least `minimumPoints` non-ghost, valued points in its partition up to and including that row.
		// This ensures that control lines are only drawn when there is sufficient data.
		const lim = computePartitionLimits(
			chartType,
			values,
			ghosts,
			!!s.excludeMovingRangeOutliers
		);

		// Build rows with limits and eligibility
		const withLines: SpcRowV2[] = part.map((r, i) => {
			const pointRank =
				!r.ghost && isNumber(r.value)
					? values.slice(0, i + 1).filter((v, j) => !ghosts[j] && isNumber(v)).length
					: 0;
			const eligibleHere = chartEligible ? true : pointRank >= (s.minimumPoints!);
			return {
			rowId: r.rowId,
			x: r.x,
			value: isNumber(r.value) ? r.value : null,
			ghost: r.ghost,
			partitionId,
			pointRank,
			mean: (eligibleHere || chartEligible) && isNumber(lim.mean) ? lim.mean : null,
			upperProcessLimit: (eligibleHere || chartEligible) ? lim.upperProcessLimit : null,
			lowerProcessLimit: (eligibleHere || chartEligible) ? lim.lowerProcessLimit : null,
			upperTwoSigma: (eligibleHere || chartEligible) ? lim.upperTwoSigma : null,
			lowerTwoSigma: (eligibleHere || chartEligible) ? lim.lowerTwoSigma : null,
			upperOneSigma: (eligibleHere || chartEligible) ? lim.upperOneSigma : null,
			lowerOneSigma: (eligibleHere || chartEligible) ? lim.lowerOneSigma : null,
			// rules
			singlePointUp: false,
			singlePointDown: false,
			twoSigmaUp: false,
			twoSigmaDown: false,
			fourOfFiveUp: false,
			fourOfFiveDown: false,
			shiftUp: false,
			shiftDown: false,
			trendUp: false,
			trendDown: false,
			// candidates
			specialCauseImprovementValue: null,
			specialCauseConcernValue: null,
			variationIcon: VariationIcon.CommonCause,
		};
		});

		// Pass 1: single 3-sigma — mark any point beyond upper/lower process limits
		for (const row of withLines) {
			if (
				row.ghost ||
				!isNumber(row.value) ||
				row.mean === null
			)
				continue;
			if (
				isNumber(row.upperProcessLimit) &&
				row.value! > row.upperProcessLimit!
			)
				row.singlePointUp = true;
			if (
				isNumber(row.lowerProcessLimit) &&
				row.value! < row.lowerProcessLimit!
			)
				row.singlePointDown = true;
		}

		// Pass 2: patterns — shift, two-of-three, strict monotonic trend (per-partition)
		detectRulesInPartition(withLines, {
			shiftPoints: s.shiftPoints!,
			trendPoints: s.trendPoints!,
			twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree,
			enableFourOfFiveRule: !!s.enableFourOfFiveRule,
		});

		// Optional post-detection step: trend favourable segmentation to resolve cross-mean conflicts
		const maybeApplySegmentation = (rows: SpcRowV2[]) => {
			// Determine if this partition has any potential conflicts (both sides active on any row)
			const hasConflict = rows.some((r) =>
				(r.singlePointUp || r.twoSigmaUp || r.shiftUp || r.trendUp) &&
				(r.singlePointDown || r.twoSigmaDown || r.shiftDown || r.trendDown)
			);
			if (
				resolvedMode === TrendSegmentationMode.Off ||
				(resolvedMode === TrendSegmentationMode.AutoWhenConflict && !hasConflict)
			) {
				return;
			}
			// Apply segmentation to determine favourable trend segments to highlight
			// and use these to mask out trend flags that are not part of a highlighted segment.
			// This ensures that only rules aligned with the favourable trend segments can survive pruning.
			// Note: this does not affect the base rule flags, only whether they can survive pruning.
			// This means that the visual categories (which are computed later) may still show
			const runs = computeTrendSegments(rows);

			// Choose segments to highlight based on the configured strategy
			// (this also filters out short segments that do not meet the trendPoints threshold)
			const highlights = chooseSegmentsForHighlight(runs, {
				metricImprovement,
				strategy: s.trendSegmentationStrategy,
			});

			// Build directional allow masks so a row can only retain the trend flag
			// corresponding to the highlighted segment's direction it belongs to.
			const allowUp = new Set<number>();
			const allowDown = new Set<number>();
			for (const seg of highlights) {
				for (let k = seg.start; k <= seg.end; k++) {
					if (seg.trendDirection === "Up") allowUp.add(k);
					else allowDown.add(k);
				}
			}

			// Mask out trend flags that are not part of a highlighted segment
			// (other rule flags are unaffected)
			rows.forEach((row, idx) => {
				// Recode trend flags to only keep those explicitly allowed by highlighted segments
				row.trendUp = allowUp.has(idx) ? row.trendUp : false;
				row.trendDown = allowDown.has(idx) ? row.trendDown : false;
				// Optional: let trend dominate inside highlighted window by clearing opposite-side non-trend flags
				if (s.trendDominatesHighlightedWindow) {
					if (allowUp.has(idx)) {
						// Inside an upward trend segment: drop down-side non-trend rules
						row.singlePointDown = false;
						row.twoSigmaDown = false;
						row.shiftDown = false;
					} else if (allowDown.has(idx)) {
						// Inside a downward trend segment: drop up-side non-trend rules
						row.singlePointUp = false;
						row.twoSigmaUp = false;
						row.shiftUp = false;
					}
				}
			});
		};

		// Apply segmentation if enabled and there is any conflict to resolve
		// (otherwise segmentation is skipped to avoid unnecessary side-effects)
		if (segmentationEnabled) {
			maybeApplySegmentation(withLines);
		}

		// Candidate formation and pruning for all rows (engine v2.6a parity)
		for (const row of withLines) {
			// Skip ghost rows and those without a valid value/mean
			// (these remain as CommonCause with no candidates)
			if (row.ghost || !isNumber(row.value) || row.mean === null) {
				out.push(row);
				continue;
			}

			// Derive original candidates from unpruned rule flags
			// (these are later pruned to yield the final candidates)
			// Note: for Neither metrics, candidates are still derived but not used in pruning
			// as NeitherHigh/NeitherLow icons are determined directly from rule flags.
			const { aligned, opposite } = deriveOriginalCandidates(
				row,
				metricImprovement
			);
			row.specialCauseImprovementValue = aligned ? row.value! : null;
			row.specialCauseConcernValue = opposite ? row.value! : null;
			
					if (metricImprovement === ImprovementDirection.Neither) {
						// Neither semantics: high-side rules -> NeitherHigh, low-side rules -> NeitherLow, else CommonCause
						const highSide = row.singlePointUp || row.twoSigmaUp || row.shiftUp || row.trendUp;
						const lowSide = row.singlePointDown || row.twoSigmaDown || row.shiftDown || row.trendDown;
						row.variationIcon = highSide ? VariationIcon.NeitherHigh : lowSide ? VariationIcon.NeitherLow : VariationIcon.CommonCause;
					} else {
						// Up/Down metrics: apply SQL-style pruning and then set icon via pruning outcome
						applySqlPruning(row, metricImprovement, s.metricConflictRule!, s.preferImprovementWhenConflict === true, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === true);
					}
			
			out.push(row);
		}
	}

	// Optional global trend detection across partitions (SQL v2.2+):
	if (s.trendAcrossPartitions) {
		// Build a flat, ordered index of all non-ghost, valued rows
		const all = out.map((r, i) => ({ idx: i, r })).filter(({ r }) => !r.ghost && isNumber(r.value));
		if (all.length >= s.trendPoints!) {
			for (let w = 0; w <= all.length - s.trendPoints!; w++) {
				const win = all.slice(w, w + s.trendPoints!).map((p) => p.idx);
				const seq = win.map((i) => out[i]);
				if (!seq.every((row) => isNumber(row.value))) continue;
				let inc = true;
				let dec = true;
				for (let k = 1; k < seq.length; k++) {
					if (!(seq[k].value! > seq[k - 1].value!)) inc = false;
					if (!(seq[k].value! < seq[k - 1].value!)) dec = false;
					if (!inc && !dec) break;
				}
				if (inc) win.forEach((i) => (out[i].trendUp = true));
				if (dec) win.forEach((i) => (out[i].trendDown = true));
			}
		}
	}

	// If global trend flags were added post hoc, re-apply pruning to stabilise variationIcon with updated rule flags
	if (s.trendAcrossPartitions) {
		// Optional: apply favourable trend segmentation across the whole series
		if (segmentationEnabled) {
			const hasConflict = out.some((r) =>
				(r.singlePointUp || r.twoSigmaUp || r.shiftUp || r.trendUp) &&
				(r.singlePointDown || r.twoSigmaDown || r.shiftDown || r.trendDown)
			);
			if (
				resolvedMode === TrendSegmentationMode.Always ||
				(resolvedMode === TrendSegmentationMode.AutoWhenConflict && hasConflict)
			) {
			const runs = computeTrendSegments(out);
			const highlights = chooseSegmentsForHighlight(runs, { metricImprovement, strategy: s.trendSegmentationStrategy });
			const allowUp = new Set<number>();
			const allowDown = new Set<number>();
			for (const seg of highlights) {
				for (let k = seg.start; k <= seg.end; k++) {
					if (seg.trendDirection === "Up") allowUp.add(k); else allowDown.add(k);
				}
			}
			out.forEach((row, idx) => {
				row.trendUp = allowUp.has(idx) ? row.trendUp : false;
				row.trendDown = allowDown.has(idx) ? row.trendDown : false;
				if (s.trendDominatesHighlightedWindow) {
					if (allowUp.has(idx)) {
						row.singlePointDown = false;
						row.twoSigmaDown = false;
						row.shiftDown = false;
					} else if (allowDown.has(idx)) {
						row.singlePointUp = false;
						row.twoSigmaUp = false;
						row.shiftUp = false;
					}
				}
			});
			}
		}
		for (const row of out) {
			if (row.ghost || !isNumber(row.value) || row.mean === null) continue;
			if (metricImprovement === ImprovementDirection.Neither) continue;
			// Recompute candidates from updated flags
			const { aligned, opposite } = deriveOriginalCandidates(row, metricImprovement);
			row.specialCauseImprovementValue = aligned ? row.value! : null;
			row.specialCauseConcernValue = opposite ? row.value! : null;
			// Re-apply pruning to stabilise outcome
			applySqlPruning(row, metricImprovement, s.metricConflictRule!, s.preferImprovementWhenConflict === true, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === true);
		}
	}

	return { rows: out };
}

export default { buildSpcV26a };

// Engine-owned visuals API: compute UI-agnostic visual categories with optional boundary-window upgrades
export function buildSpcV26aWithVisuals(
	args: BuildArgsV2,
	visuals?: {
		trendVisualMode?: "Ungated" | "Gated";
		enableNeutralNoJudgement?: boolean;
		boundaryWindows?: (BoundaryWindowsOptions & { directionOverride?: ImprovementDirection });
	}
): { rows: SpcRowV2[]; visuals: SpcVisualCategory[] } {
	const res = buildSpcV26a(args);
	const base = computeSpcVisualCategories(res.rows, {
		metricImprovement: args.metricImprovement,
		trendVisualMode: visuals?.trendVisualMode ?? "Ungated",
		enableNeutralNoJudgement: visuals?.enableNeutralNoJudgement ?? true,
	});

	const bw = visuals?.boundaryWindows;
	if (!bw || bw.mode !== "RecalcCrossing") return { rows: res.rows, visuals: base };

	const dir = bw.directionOverride ?? args.metricImprovement;
	const win = computeBoundaryWindowCategories(res.rows, dir, bw);

	// Overlay upgrade: only promote Common/NoJudgement to Improvement/Concern as per window categories
	const overlay: SpcVisualCategory[] = base.map((cat, i) => {
		const w = win[i];
		if (cat === SpcVisualCategory.Common || cat === SpcVisualCategory.NoJudgement) {
			if (w === SpcVisualCategory.Improvement) return SpcVisualCategory.Improvement;
			if (w === SpcVisualCategory.Concern) return SpcVisualCategory.Concern;
		}
		return cat;
	});
	return { rows: res.rows, visuals: overlay };
}

// Intentionally not re-exporting SpcVisualCategory here; canonical path is via postprocess/visualCategories (barrel re-exports)
