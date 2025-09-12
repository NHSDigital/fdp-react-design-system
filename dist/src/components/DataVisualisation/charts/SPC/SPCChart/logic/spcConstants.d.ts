export declare enum ChartType {
    XmR = "XmR",
    T = "T",
    G = "G"
}
export declare enum ImprovementDirection {
    Up = "Up",
    Down = "Down",
    Neither = "Neither"
}
export declare enum VariationIcon {
    Improvement = "improvement",
    Concern = "concern",
    Neither = "neither",
    /** Preferred identifier for no‑judgement/suppressed cases. */
    Suppressed = "suppressed"
}
export declare enum SpcRuleId {
    SinglePoint = "single_point",
    TwoSigma = "two_sigma",
    Shift = "shift",
    Trend = "trend"
}
export declare const RULE_PRECEDENCE: SpcRuleId[];
export declare const RULE_RANK_BY_ID: Record<SpcRuleId, number>;
/**
 * @deprecated Use `RULE_METADATA[id].label` or `RULES_IN_RANK_ORDER` instead.
 */
export declare const RULE_LABEL: Record<SpcRuleId, string>;
export declare enum SpcRuleCategory {
    Point = "point",
    Cluster = "cluster",
    Sustained = "sustained"
}
export interface SpcRuleMetadataEntry {
    id: SpcRuleId;
    rank: number;
    label: string;
    category: SpcRuleCategory;
    participatesInRanking: boolean;
}
export declare const RULE_METADATA: Record<SpcRuleId, SpcRuleMetadataEntry>;
export declare const RULES_IN_RANK_ORDER: SpcRuleMetadataEntry[];
export declare enum Side {
    Up = "up",
    Down = "down"
}
export declare enum SpcRawRuleTag {
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
    FifteenInnerThird = "fifteen_inner_third"
}
export declare const RAW_TAG_TO_RULE_ID: Partial<Record<SpcRawRuleTag, SpcRuleId>>;
export declare enum AssuranceIcon {
    Pass = "pass",
    Fail = "fail",
    None = "none"
}
export declare enum BaselineSuggestionReason {
    Shift = "shift",
    Trend = "trend",
    Point = "point"
}
export declare enum PrecedenceStrategy {
    Legacy = "legacy",
    DirectionalFirst = "directional_first"
}
export declare enum ConflictPrecedenceMode {
    None = "none",
    SqlRankingV26a = "sql_ranking_v2_6a"
}
export declare enum PrimeDirection {
    Upwards = "Upwards",
    Downwards = "Downwards",
    Same = "Same"
}
export declare enum PruningMode {
    Sql = "sql",
    Conflict = "conflict"
}
export declare enum SpcRowAliasField {
    ImprovementValueBeforePruning = "improvementValueBeforePruning",
    ConcernValueBeforePruning = "concernValueBeforePruning"
}
