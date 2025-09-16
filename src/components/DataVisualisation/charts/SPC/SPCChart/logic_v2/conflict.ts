import {
	ConflictStrategy,
	ImprovementDirection,
	MetricConflictRule,
	PrimeDirection,
	Side,
	SpcRowV2,
	SpcRuleId,
	VariationIcon,
} from "./types";
import { RULE_RANK_BY_ID } from "./constants";

// Build per-side lists of active rules with numeric rank and compute the prime direction
// by comparing the maximum rank on each side (Up vs Down), mirroring SQL's #ConflictRankingSummary.
export function getDirectionalSummary(row: SpcRowV2) {
	const up: { id: SpcRuleId; rank: number }[] = [];
	const dn: { id: SpcRuleId; rank: number }[] = [];

	// Single point and Two Sigma (separate one-sided flags)
	if (row.singlePointUp)
		up.push({
			id: SpcRuleId.SinglePoint,
			rank: RULE_RANK_BY_ID[SpcRuleId.SinglePoint],
		});
	if (row.singlePointDown)
		dn.push({
			id: SpcRuleId.SinglePoint,
			rank: RULE_RANK_BY_ID[SpcRuleId.SinglePoint],
		});
	if (row.twoSigmaUp)
		up.push({
			id: SpcRuleId.TwoSigma,
			rank: RULE_RANK_BY_ID[SpcRuleId.TwoSigma],
		});
	if (row.twoSigmaDown)
		dn.push({
			id: SpcRuleId.TwoSigma,
			rank: RULE_RANK_BY_ID[SpcRuleId.TwoSigma],
		});
	
	// Shift and Trend (no separate one-sided flags)
	if (row.shiftUp)
		up.push({ id: SpcRuleId.Shift, rank: RULE_RANK_BY_ID[SpcRuleId.Shift] });
	if (row.shiftDown)
		dn.push({ id: SpcRuleId.Shift, rank: RULE_RANK_BY_ID[SpcRuleId.Shift] });
	if (row.trendUp)
		up.push({ id: SpcRuleId.Trend, rank: RULE_RANK_BY_ID[SpcRuleId.Trend] });
	if (row.trendDown)
		dn.push({ id: SpcRuleId.Trend, rank: RULE_RANK_BY_ID[SpcRuleId.Trend] });

	// Determine prime direction by comparing max rank on each side
	const upMax = up.reduce((m, r) => Math.max(m, r.rank), 0);
	const dnMax = dn.reduce((m, r) => Math.max(m, r.rank), 0);
	const primeDirection =
		upMax > dnMax
			? PrimeDirection.Upwards
			: dnMax > upMax
				? PrimeDirection.Downwards
				: PrimeDirection.Same;
	return { up, dn, upMax, dnMax, primeDirection };
}

// Decide whether aligned (improvement side) and opposite (concern side) candidates exist,
// prior to any pruning. Mirrors SQL formation of SpecialCauseImprovementValue/ConcernValue.
export function deriveOriginalCandidates(
	row: SpcRowV2,
	metric: ImprovementDirection
) {
	// Aligned = high side for Up metrics; low side for Down metrics
	const aligned =
		metric === ImprovementDirection.Up
			? row.singlePointUp || row.twoSigmaUp || row.shiftUp || row.trendUp
			: metric === ImprovementDirection.Down
				? row.singlePointDown ||
					row.twoSigmaDown ||
					row.shiftDown ||
					row.trendDown
				: false;
	
	// Opposite = low side for Up metrics; high side for Down metrics
	const opposite =
		metric === ImprovementDirection.Up
			? row.singlePointDown ||
				row.twoSigmaDown ||
				row.shiftDown ||
				row.trendDown
			: metric === ImprovementDirection.Down
				? row.singlePointUp || row.twoSigmaUp || row.shiftUp || row.trendUp
				: false;
	
	return { aligned, opposite };
}

// Apply SQL-like pruning rules when both candidates exist, using primeDirection and metricConflictRule
// to remove one side. Also sets variationIcon to match the remaining candidate(s) and records diagnostics.
export function applySqlPruning(
	row: SpcRowV2,
	metric: ImprovementDirection,
	metricConflictRule: MetricConflictRule,
	preferImprovementWhenConflict = false,
	conflictStrategy?: ConflictStrategy,
	ruleHierarchy?: SpcRuleId[],
	preferTrendWhenConflict = false
) {
	// Get directional summary (also sets row.primeDirection)
	const { up, dn, upMax, dnMax, primeDirection } = getDirectionalSummary(row);
	row.primeDirection = primeDirection;
	const originalImprovement = row.specialCauseImprovementValue;
	const originalConcern = row.specialCauseConcernValue;

	// If both candidates exist, prune one side based on strategy
	if (
		row.specialCauseImprovementValue !== null &&
		row.specialCauseConcernValue !== null
	) {
		resolveConflict({ row, metric, metricConflictRule, preferImprovementWhenConflict, preferTrendWhenConflict, primeDirection, conflictStrategy, ruleHierarchy });
	}

	// Update variation icon to reflect pruned candidates
	if (metric === ImprovementDirection.Up) {
		row.variationIcon =
			row.specialCauseImprovementValue !== null
				? VariationIcon.ImprovementHigh
				: row.specialCauseConcernValue !== null
					? VariationIcon.ConcernLow
					: VariationIcon.CommonCause;
	
	// Down metrics
	} else if (metric === ImprovementDirection.Down) {
		row.variationIcon =
			row.specialCauseImprovementValue !== null
				? VariationIcon.ImprovementLow
				: row.specialCauseConcernValue !== null
					? VariationIcon.ConcernHigh
					: VariationIcon.CommonCause;
		
	// Neither metrics
	} else {
		// Neither not used in SQL conflict pruning branch
		row.variationIcon = VariationIcon.CommonCause;
	}

	// prime rank and winner rule id
	const winningSide =
		row.specialCauseImprovementValue !== null
			? Side.Up
			: row.specialCauseConcernValue !== null
				? Side.Down
				: undefined;
	const winningRank =
		winningSide === Side.Up
			? upMax
			: winningSide === Side.Down
				? dnMax
				: Math.max(upMax, dnMax);
	row.primeRank = winningRank || undefined;
	const winner =
		winningSide === Side.Up
			? up.find((r) => r.rank === winningRank)
			: winningSide === Side.Down
				? dn.find((r) => r.rank === winningRank)
				: undefined;
	row.primeRuleId = winner?.id;

	return { originalImprovement, originalConcern };
}

// General-purpose conflict resolver retaining SQL defaults but enabling alternative strategies.
// When conflictStrategy is not supplied via settings, we infer it from preferImprovementWhenConflict flag
// to preserve existing behaviour.
export function resolveConflict(args: {
	row: SpcRowV2;
	metric: ImprovementDirection;
	metricConflictRule: MetricConflictRule;
	preferImprovementWhenConflict?: boolean;
	preferTrendWhenConflict?: boolean;
	primeDirection?: PrimeDirection;
	conflictStrategy?: ConflictStrategy;
	ruleHierarchy?: SpcRuleId[];
}) {
	const {
		row,
		metric,
		metricConflictRule,
		preferImprovementWhenConflict,
		preferTrendWhenConflict,
		primeDirection = row.primeDirection ?? PrimeDirection.Same,
		conflictStrategy,
		ruleHierarchy,
	} = args;
	// Optional early override: when both candidates exist and a trend flag is present,
	// prefer the trend side over non-trend when requested. This runs before other strategies
	// to emulate story-specific expectations where a selected trend segment dominates.
	if (
		preferTrendWhenConflict &&
		row.specialCauseImprovementValue !== null &&
		row.specialCauseConcernValue !== null
	) {
		const upTrend = !!row.trendUp;
		const downTrend = !!row.trendDown;
		if (metric === ImprovementDirection.Up) {
			if (upTrend && !downTrend) {
				// Keep improvement (high-side trend), drop concern
				row.specialCauseConcernValue = null;
				return;
			}
			if (!upTrend && downTrend) {
				// Keep concern (low-side trend), drop improvement
				row.specialCauseImprovementValue = null;
				return;
			}
		} else if (metric === ImprovementDirection.Down) {
			if (downTrend && !upTrend) {
				// Keep improvement (low-side trend), drop concern (high)
				row.specialCauseConcernValue = null;
				return;
			}
			if (!downTrend && upTrend) {
				// Keep concern (high-side trend), drop improvement
				row.specialCauseImprovementValue = null;
				return;
			}
		}
	}

	// Prefer the explicit flag over strategy to mirror the intended Excel-like override.
	// If callers want a different behaviour, they should omit the flag and supply a strategy.
	const strategy = preferImprovementWhenConflict
		? ConflictStrategy.PreferImprovement
		: conflictStrategy ?? ConflictStrategy.SqlPrimeThenRule;

	if (strategy === ConflictStrategy.PreferImprovement) {
		if (metric === ImprovementDirection.Up) row.specialCauseConcernValue = null;
		else if (metric === ImprovementDirection.Down) row.specialCauseImprovementValue = null;
		return;
	}

	if (strategy === ConflictStrategy.RuleHierarchy) {
		// Determine which side contains the highest-precedence rule given an order (defaults to SQL rank)
		const order: SpcRuleId[] = ruleHierarchy ?? [SpcRuleId.Trend, SpcRuleId.Shift, SpcRuleId.TwoSigma, SpcRuleId.SinglePoint];
		const { up, dn } = getDirectionalSummary(row);
		// Find first rule in order that appears on either side
		for (const rid of order) {
			const upHas = up.some((r) => r.id === rid);
			const dnHas = dn.some((r) => r.id === rid);
			if (upHas && !dnHas) {
				// keep Up side for Up metrics (improvement) else prune accordingly
				if (metric === ImprovementDirection.Up) row.specialCauseConcernValue = null; else row.specialCauseImprovementValue = null;
				return;
			}
			if (dnHas && !upHas) {
				if (metric === ImprovementDirection.Up) row.specialCauseImprovementValue = null; else row.specialCauseConcernValue = null;
				return;
			}
			if (upHas && dnHas) {
				// Both sides contain same highest rule: fall back to MetricConflictRule
				if (metric === ImprovementDirection.Up) {
					if (metricConflictRule === MetricConflictRule.Improvement) row.specialCauseConcernValue = null; else row.specialCauseImprovementValue = null;
				} else if (metric === ImprovementDirection.Down) {
					if (metricConflictRule === MetricConflictRule.Improvement) row.specialCauseConcernValue = null; else row.specialCauseImprovementValue = null;
				}
				return;
			}
		}
		// If nothing matched, default to SQL behaviour
	}

	// Default (SQL parity): PrimeDirection first, then MetricConflictRule only when Same
	if (primeDirection === PrimeDirection.Upwards) {
		if (metric === ImprovementDirection.Up) row.specialCauseConcernValue = null; else if (metric === ImprovementDirection.Down) row.specialCauseImprovementValue = null;
	} else if (primeDirection === PrimeDirection.Downwards) {
		if (metric === ImprovementDirection.Up) row.specialCauseImprovementValue = null; else if (metric === ImprovementDirection.Down) row.specialCauseConcernValue = null;
	} else {
		if (metricConflictRule === MetricConflictRule.Improvement) row.specialCauseConcernValue = null; else row.specialCauseImprovementValue = null;
	}
}

// Convenience helpers for diagnostics and potential UI integration
// Compute whether any upward or downward side rules are present on a row
export function computeSideFlags(row: SpcRowV2): { upAny: boolean; downAny: boolean } {
	const upAny = !!(row.singlePointUp || row.twoSigmaUp || row.shiftUp || row.trendUp);
	const downAny = !!(row.singlePointDown || row.twoSigmaDown || row.shiftDown || row.trendDown);
	return { upAny, downAny };
}

// True when both sides have at least one active rule (pre- or post-pruning agnostic)
export function hasDirectionalConflict(row: SpcRowV2): boolean {
	const { upAny, downAny } = computeSideFlags(row);
	return upAny && downAny;
}
