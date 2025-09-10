// SQL-compatibility SPC engine wrapper providing explicit per-side rule ranking and directional pruning
// without relying on mutually exclusive side aggregation. This aims to mirror the v2.6a SQL post-processing
// steps (PrimeDirection + pruning) while leveraging the existing orthodox rule detection from buildSpc.

import {
	buildSpc,
	ChartType,
	ImprovementDirection,
	VariationIcon,
	ConflictPrecedenceMode,
	SpcSettings,
	SpcRow,
	SpcRuleId,
	Side,
	RULE_RANK_BY_ID,
} from "./spc";

export interface BuildSpcSqlCompatArgs {
	chartType: ChartType;
	metricImprovement: ImprovementDirection;
	data: {
		x: string | number | Date;
		value?: number | null;
		ghost?: boolean;
		baseline?: boolean;
		target?: number;
	}[];
	settings?: SpcSettings; // honour existing settings (e.g. shift lengths) plus ability to override trend gating
	// When true, disables trend side gating to emulate historical SQL behaviour that counted trends irrespective of side
	disableTrendSideGating?: boolean;
}

export interface SpcSqlCompatRow extends SpcRow {
	primeDirection?: PrimeDirection;
	// Rank chosen (1 single,2 two-sigma,3 shift,4 trend) for the winning side prior to pruning
	primeRank?: number;
	// Winning rule id for transparency
	primeRuleId?: SpcRuleId;
	// Original (pre-pruning) improvement / concern prior to directional pruning
	sqlOriginalImprovementValue?: number | null;
	sqlOriginalConcernValue?: number | null;
	// Indicates pruning was applied (both sides originally populated and one removed)
	sqlPruned?: boolean;
}

export interface SpcSqlCompatResult {
	rows: SpcSqlCompatRow[];
	warnings: ReturnType<typeof buildSpc>["warnings"];
}

// Internal: determine per-side rank catalogue mirroring SQL ordering
export enum PrimeDirection {
	Upwards = 'Upwards',
	Downwards = 'Downwards',
	Same = 'Same'
}

function collectSideRanks(r: SpcRow) {
	const high: { id: SpcRuleId; rank: number }[] = [];
	const low: { id: SpcRuleId; rank: number }[] = [];
	// Helper to push with centralised rank mapping (ensures parity with engine precedence constants)
	const push = (arr: { id: SpcRuleId; rank: number }[], id: SpcRuleId) => {
		arr.push({ id, rank: RULE_RANK_BY_ID[id] });
	};
	if (r.specialCauseSinglePointAbove) push(high, SpcRuleId.SinglePoint);
	if (r.specialCauseSinglePointBelow) push(low, SpcRuleId.SinglePoint);
	if (r.specialCauseTwoOfThreeAbove) push(high, SpcRuleId.TwoSigma);
	if (r.specialCauseTwoOfThreeBelow) push(low, SpcRuleId.TwoSigma);
	if (r.specialCauseShiftHigh) push(high, SpcRuleId.Shift);
	if (r.specialCauseShiftLow) push(low, SpcRuleId.Shift);
	if (r.specialCauseTrendIncreasing) push(high, SpcRuleId.Trend);
	if (r.specialCauseTrendDecreasing) push(low, SpcRuleId.Trend);
	return { high, low };
}

// Exported for unit tests to simulate synthetic clashes
export function sqlDirectionalPrune(
	row: SpcSqlCompatRow,
	metricImprovement: ImprovementDirection
) {
	const { high, low } = collectSideRanks(row);
	const upMax = high.reduce((m, a) => Math.max(m, a.rank), 0);
	const downMax = low.reduce((m, a) => Math.max(m, a.rank), 0);
	let prime: PrimeDirection;
	if (upMax > downMax) prime = PrimeDirection.Upwards;
	else if (downMax > upMax) prime = PrimeDirection.Downwards;
	else prime = PrimeDirection.Same;

	// Establish original candidates (independent of prior variationIcon decision). We treat any high-side signal
	// as a potential Improvement when metricImprovement = Up, and any low-side signal as Improvement when = Down.
	const anyHigh = upMax > 0;
	const anyLow = downMax > 0;
	const originalImprovement =
		(metricImprovement === ImprovementDirection.Up && anyHigh) ||
		(metricImprovement === ImprovementDirection.Down && anyLow)
			? row.value
			: null;
	const originalConcern =
		(metricImprovement === ImprovementDirection.Up && anyLow) ||
		(metricImprovement === ImprovementDirection.Down && anyHigh)
			? row.value
			: null;

	row.sqlOriginalImprovementValue = originalImprovement;
	row.sqlOriginalConcernValue = originalConcern;

	// Apply SQL-like pruning only if both existed
	if (originalImprovement !== null && originalConcern !== null) {
		row.sqlPruned = true;
		if (prime === PrimeDirection.Upwards) {
			if (metricImprovement === ImprovementDirection.Up) {
				// keep improvement, drop concern
			} else if (metricImprovement === ImprovementDirection.Down) {
				row.sqlOriginalImprovementValue = null; // drop improvement (opposite side stronger)
			}
		} else if (prime === PrimeDirection.Downwards) {
			if (metricImprovement === ImprovementDirection.Up) {
				row.sqlOriginalImprovementValue = null; // drop improvement (opposite side stronger)
			} else if (metricImprovement === ImprovementDirection.Down) {
				// keep improvement (downwards favourable)
			}
		} else { // PrimeDirection.Same
			// Same rank strength both sides
			// Bias to improvement framing (prune concern) unless metricImprovement makes that impossible
			if (originalImprovement !== null) {
				row.sqlOriginalConcernValue = null;
			} else if (originalConcern !== null) {
				// No improvement candidate, keep concern only
				row.sqlOriginalImprovementValue = null;
			}
		}
	}

	// Derive variationIcon from pruned values (post pruning semantics):
	if (row.sqlOriginalImprovementValue && !row.sqlOriginalConcernValue) {
		row.variationIcon = VariationIcon.Improvement;
	} else if (!row.sqlOriginalImprovementValue && row.sqlOriginalConcernValue) {
		row.variationIcon = VariationIcon.Concern;
	} else if (!row.sqlOriginalImprovementValue && !row.sqlOriginalConcernValue) {
		row.variationIcon = VariationIcon.Neither;
	} else {
		// Both present (no pruning) only when rank logic leaves them; treat as improvement favourably
		row.variationIcon = VariationIcon.Improvement;
	}

	row.primeDirection = prime; // attach convenience alias names
	row.primeRank = Math.max(upMax, downMax) || undefined;
	// Determine winning side using unified Side enum (Up corresponds to former 'high', Down to 'low').
	const winningSide: Side =
		row.variationIcon === VariationIcon.Concern
			? metricImprovement === ImprovementDirection.Up
				? Side.Down
				: Side.Up
			: metricImprovement === ImprovementDirection.Up
				? Side.Up
				: Side.Down;
	const winnerSet = winningSide === Side.Up ? high : low;
	const top = winnerSet.reduce(
		(best, a) => (!best || a.rank > best.rank ? a : best),
		undefined as { id: SpcRuleId; rank: number } | undefined
	);
	if (top) row.primeRuleId = top.id;
}

export function buildSpcSqlCompat(
	args: BuildSpcSqlCompatArgs
): SpcSqlCompatResult {
	const {
		chartType,
		metricImprovement,
		data,
		settings = {},
		disableTrendSideGating,
	} = args;
	const base = buildSpc({
		chartType,
		metricImprovement,
		data,
		settings: {
			...settings,
			trendSideGatingEnabled: disableTrendSideGating
				? false
				: (settings.trendSideGatingEnabled ?? true),
			conflictPrecedenceMode: ConflictPrecedenceMode.None,
		},
	});
	const rows: SpcSqlCompatRow[] = base.rows.map((r) => ({ ...r }));
	for (const r of rows) {
		sqlDirectionalPrune(r, metricImprovement);
	}
	return { rows, warnings: base.warnings };
}
