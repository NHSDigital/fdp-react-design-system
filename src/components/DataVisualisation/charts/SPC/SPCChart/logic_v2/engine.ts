import {
	BuildArgsV2,
	ImprovementDirection,
	MetricConflictRule,
	SpcResultV2,
	SpcRowV2,
	VariationIcon,
} from "./types";
import { computePartitionLimits } from "./limits";
import { detectRulesInPartition } from "./detector";
import { applySqlPruning, deriveOriginalCandidates } from "./conflict";
import { isNumber } from "./utils";

// Build an SPC result aligned to SQL v2.6a, focusing on XmR.
// Mirrors SQL steps but emits per-row icons; dataset parity compares the last non-ghosted row.
export function buildSpcV26a(args: BuildArgsV2): SpcResultV2 {
	const { chartType, metricImprovement, data, settings } = args;
	// Consolidate settings with sensible defaults derived from SQL guidance
	const s = {
		minimumPoints: 13,
		shiftPoints: 6,
		trendPoints: 6,
		excludeMovingRangeOutliers: false,
		metricConflictRule: MetricConflictRule.Improvement,
		trendAcrossPartitions: false,
		twoSigmaIncludeAboveThree: false,
		chartLevelEligibility: false,
		...settings,
	};

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

		const lim = computePartitionLimits(
			chartType,
			values,
			ghosts,
			!!s.excludeMovingRangeOutliers
		);

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
			});

		// SQL candidate formation and pruning for all rows (engine v2.6a parity)
		for (const row of withLines) {
			if (row.ghost || !isNumber(row.value) || row.mean === null) {
				out.push(row);
				continue;
			}
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
						applySqlPruning(row, metricImprovement, s.metricConflictRule!);
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

	return { rows: out };
}

export default { buildSpcV26a };
