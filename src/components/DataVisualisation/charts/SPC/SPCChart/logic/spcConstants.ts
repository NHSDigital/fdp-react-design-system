// Centralised SPC engine constants, enums, and registry metadata

// Chart types supported by the SPC engine
export enum ChartType {
	XmR = "XmR",
	T = "T",
	G = "G",
}

// Core enums to share with UI/icon layers
export enum ImprovementDirection {
	Up = "Up",
	Down = "Down",
	Neither = "Neither",
}

export enum VariationIcon {
	Improvement = "improvement",
	Concern = "concern",
	Neither = "neither",
	/**
	 * @deprecated Use `Suppressed`. Will be removed in Phase 4.
	 */
	None = "none",
	/** Preferred identifier for no‑judgement/suppressed cases. */
	Suppressed = "suppressed",
}

// Stable identifiers for rule categories used in ranking / conflict metadata
export enum SpcRuleId {
	SinglePoint = "single_point",
	TwoSigma = "two_sigma",
	Shift = "shift",
	Trend = "trend",
}

// Stable ordered precedence list (index +1 gives rank)
export const RULE_PRECEDENCE: SpcRuleId[] = [
	SpcRuleId.SinglePoint,
	SpcRuleId.TwoSigma,
	SpcRuleId.Shift,
	SpcRuleId.Trend,
];

// Derive rank map from RULE_PRECEDENCE (1-based)
export const RULE_RANK_BY_ID: Record<SpcRuleId, number> =
	RULE_PRECEDENCE.reduce(
		(acc, id, i) => {
			acc[id] = i + 1;
			return acc;
		},
		{} as Record<SpcRuleId, number>
	);

// Human friendly labels (retained for backward compatibility)
/**
 * @deprecated Use `RULE_METADATA[id].label` or `RULES_IN_RANK_ORDER` instead.
 */
export const RULE_LABEL: Record<SpcRuleId, string> = {
	[SpcRuleId.SinglePoint]: "Single point beyond process limit",
	[SpcRuleId.TwoSigma]: "Two of three beyond 2σ on one side",
	[SpcRuleId.Shift]: "Sustained shift (run)",
	[SpcRuleId.Trend]: "Monotonic trend",
};

// Unified rule metadata registry
export enum SpcRuleCategory {
	Point = "point",
	Cluster = "cluster",
	Sustained = "sustained",
}

export interface SpcRuleMetadataEntry {
	id: SpcRuleId;
	rank: number;
	label: string;
	category: SpcRuleCategory;
	participatesInRanking: boolean;
}

const RULE_CATEGORY: Record<SpcRuleId, SpcRuleCategory> = {
	[SpcRuleId.SinglePoint]: SpcRuleCategory.Point,
	[SpcRuleId.TwoSigma]: SpcRuleCategory.Cluster,
	[SpcRuleId.Shift]: SpcRuleCategory.Sustained,
	[SpcRuleId.Trend]: SpcRuleCategory.Sustained,
};

export const RULE_METADATA: Record<SpcRuleId, SpcRuleMetadataEntry> =
	RULE_PRECEDENCE.reduce(
		(acc, id, index) => {
			acc[id] = {
				id,
				rank: index + 1,
				label: RULE_LABEL[id],
				category: RULE_CATEGORY[id],
				participatesInRanking: true,
			};
			return acc;
		},
		{} as Record<SpcRuleId, SpcRuleMetadataEntry>
	);

export const RULES_IN_RANK_ORDER: SpcRuleMetadataEntry[] = RULE_PRECEDENCE.map(
	(id) => RULE_METADATA[id]
);

// Directional side (high vs low) for special-cause classification
export enum Side {
	Up = "up",
	Down = "down",
}

// Raw rule tag identifiers (snake_case) used in ruleTags audit trail
export enum SpcRawRuleTag {
	SinglePointAbove = "single_above",
	SinglePointBelow = "single_below",
	TwoOfThreeAbove = "two_of_three_above",
	TwoOfThreeBelow = "two_of_three_below",
	FourOfFiveAbove = "four_of_five_above",
	FourOfFiveBelow = "four_of_five_below",
	ShiftHigh = "shift_high",
	ShiftLow = "shift_low",
	TrendIncreasing = "trend_inc",
	TrendDecreasing = "trend_dec",
	FifteenInnerThird = "fifteen_inner_third",
}

// Map raw rule tags (side-specific flags) to canonical ranked rule ids
export const RAW_TAG_TO_RULE_ID: Partial<Record<SpcRawRuleTag, SpcRuleId>> = {
	[SpcRawRuleTag.SinglePointAbove]: SpcRuleId.SinglePoint,
	[SpcRawRuleTag.SinglePointBelow]: SpcRuleId.SinglePoint,
	[SpcRawRuleTag.TwoOfThreeAbove]: SpcRuleId.TwoSigma,
	[SpcRawRuleTag.TwoOfThreeBelow]: SpcRuleId.TwoSigma,
	[SpcRawRuleTag.ShiftHigh]: SpcRuleId.Shift,
	[SpcRawRuleTag.ShiftLow]: SpcRuleId.Shift,
	[SpcRawRuleTag.TrendIncreasing]: SpcRuleId.Trend,
	[SpcRawRuleTag.TrendDecreasing]: SpcRuleId.Trend,
	// FourOfFiveAbove / FourOfFiveBelow intentionally omitted from ranking
	// FifteenInnerThird intentionally omitted from ranking
};

export enum AssuranceIcon {
	Pass = "pass",
	Fail = "fail",
	None = "none",
}

// Baseline suggestion trigger reason ordering (string values used in snapshots/docs)
export enum BaselineSuggestionReason {
	Shift = "shift",
	Trend = "trend",
	Point = "point",
}

// Precedence strategies for variation classification
export enum PrecedenceStrategy {
	Legacy = "legacy",
	DirectionalFirst = "directional_first",
}

// Optional conflict precedence mode (SQL v2.6a style ranking)
export enum ConflictPrecedenceMode {
	None = "none",
	SqlRankingV26a = "sql_ranking_v2_6a",
}

// Unified prime direction (used by SQL compatibility & potential conflict pruning metadata)
export enum PrimeDirection {
	Upwards = "Upwards",
	Downwards = "Downwards",
	Same = "Same",
}

// Unified pruning mode enumeration for rows
export enum PruningMode {
	Sql = "sql",
	Conflict = "conflict",
}

// Row alias field names (forward-compatible deprecations / planned renames)
export enum SpcRowAliasField {
	ImprovementValueBeforePruning = "improvementValueBeforePruning",
	ConcernValueBeforePruning = "concernValueBeforePruning",
}
