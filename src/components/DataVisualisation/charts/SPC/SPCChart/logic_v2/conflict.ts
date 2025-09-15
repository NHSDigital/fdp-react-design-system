import {
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
	metricConflictRule: MetricConflictRule
) {
	// Get directional summary (also sets row.primeDirection)
	const { up, dn, upMax, dnMax, primeDirection } = getDirectionalSummary(row);
	row.primeDirection = primeDirection;
	const originalImprovement = row.specialCauseImprovementValue;
	const originalConcern = row.specialCauseConcernValue;

	// If both candidates exist, prune one side based on primeDirection and metricConflictRule
	if (
		row.specialCauseImprovementValue !== null &&
		row.specialCauseConcernValue !== null
	) {
		// Prime direction wins
		if (primeDirection === PrimeDirection.Upwards) {

			// Upwards prime - remove Down candidate
			if (metric === ImprovementDirection.Up) 
				row.specialCauseConcernValue = null;
			else if (metric === ImprovementDirection.Down)
				row.specialCauseImprovementValue = null;
			
		// No prime direction (tie) - use metricConflictRule to decide	
		} else if (primeDirection === PrimeDirection.Downwards) {
			if (metric === ImprovementDirection.Up)
				row.specialCauseImprovementValue = null;
			else if (metric === ImprovementDirection.Down)
				row.specialCauseConcernValue = null;

		// Tie - no prime direction - use metricConflictRule to decide
		} else {
			if (metricConflictRule === MetricConflictRule.Improvement)
				row.specialCauseConcernValue = null;
			else row.specialCauseImprovementValue = null;
		}
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
