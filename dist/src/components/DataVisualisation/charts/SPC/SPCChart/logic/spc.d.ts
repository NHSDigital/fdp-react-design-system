/**
 * Chart type meanings (high‑level):
 *  XmR (Individuals & Moving Range):
 *    - Use for a continuous measurement per period (e.g. % compliance, rate, time, count when roughly normal).
 *    - Centre line = mean of individual values; sigma estimated from average moving range (MRbar).
 *    - Control limits = mean ± 2.66 * MRbar (3σ); 1σ/2σ bands are proportional fractions (1/3, 2/3 of 2.66).
 *
 *  T chart (Time‑between events):
 *    - Use when data are elapsed time between rare events (positive, skewed).
 *    - Applies power transform y = t^0.2777 to stabilise variance; runs an XmR on y; then back‑transforms limits.
 *    - Lower limit suppressed if back‑transform would fall ≤ 0 (time cannot be negative).
 *
 *  G chart (Count between events):
 *    - Use when data record the number of opportunities/units between rare events (geometric behaviour).
 *    - No moving range; limits derived directly from geometric distribution quantiles around the mean count.
 *    - Provides probability‑based 1σ/2σ/3σ style bands using inverse CDF (no MR / d2 constants involved).
 */
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
    None = "none"
}
export declare enum SpcRuleId {
    SinglePoint = "single_point",
    TwoSigma = "two_sigma",
    Shift = "shift",
    Trend = "trend"
}
export declare const RULE_PRECEDENCE: SpcRuleId[];
export declare const RULE_RANK_BY_ID: Record<SpcRuleId, number>;
export declare const RULE_LABEL: Record<SpcRuleId, string>;
export interface SpcRuleMetadataEntry {
    id: SpcRuleId;
    rank: number;
    label: string;
}
export declare const RULE_METADATA: Record<SpcRuleId, SpcRuleMetadataEntry>;
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
export interface SpcInputRow {
    x: string | number | Date;
    value?: number | null;
    ghost?: boolean;
    baseline?: boolean;
    target?: number;
}
export interface SpcSettings {
    excludeMovingRangeOutliers?: boolean;
    specialCauseShiftPoints?: number;
    specialCauseTrendPoints?: number;
    enableFourOfFiveRule?: boolean;
    precedenceStrategy?: PrecedenceStrategy;
    /** @deprecated Use emergingGraceEnabled */
    emergingDirectionGrace?: boolean;
    /** @deprecated Use trendFavourableSideOnly */
    trendSideGatingEnabled?: boolean;
    emergingGraceEnabled?: boolean;
    trendFavourableSideOnly?: boolean;
    minimumPoints?: number;
    minimumPointsWarning?: boolean;
    minimumPointsPartition?: number;
    maximumPointsPartition?: number | null;
    maximumPoints?: number | null;
    pointConflictWarning?: boolean;
    variationIconConflictWarning?: boolean;
    nullValueWarning?: boolean;
    targetSuppressedWarning?: boolean;
    ghostOnRareEventWarning?: boolean;
    partitionSizeWarnings?: boolean;
    baselineSpecialCauseWarning?: boolean;
    maximumPointsWarnings?: boolean;
    assuranceCapabilityMode?: boolean;
    transitionBufferPoints?: number;
    /** @deprecated Use collapseWeakerClusterRules */
    collapseClusterRules?: boolean;
    collapseWeakerClusterRules?: boolean;
    enableFifteenInInnerThirdRule?: boolean;
    baselineSuggest?: boolean;
    baselineSuggestMinDeltaSigma?: number;
    baselineSuggestStabilityPoints?: number;
    baselineSuggestMinGap?: number;
    baselineSuggestScoreThreshold?: number;
    autoRecalculateAfterShift?: boolean;
    autoRecalculateShiftLength?: number;
    autoRecalculateDeltaSigma?: number;
    conflictPrecedenceMode?: ConflictPrecedenceMode;
}
export interface SpcSettingsV2 extends Omit<SpcSettings, 'emergingDirectionGrace' | 'trendSideGatingEnabled' | 'collapseClusterRules'> {
    emergingGraceEnabled?: boolean;
    trendFavourableSideOnly?: boolean;
    collapseWeakerClusterRules?: boolean;
}
type AnySpcSettings = SpcSettings | SpcSettingsV2;
export interface BuildSpcArgs {
    chartType: ChartType;
    metricImprovement: ImprovementDirection;
    data: SpcInputRow[];
    settings?: AnySpcSettings;
}
export interface SpcRow {
    rowId: number;
    x: string | number | Date;
    value: number | null;
    ghost: boolean;
    partitionId: number;
    pointRank: number;
    mean: number | null;
    mr: number | null;
    mrMean: number | null;
    mrUcl: number | null;
    upperProcessLimit: number | null;
    lowerProcessLimit: number | null;
    upperTwoSigma: number | null;
    upperOneSigma: number | null;
    lowerOneSigma: number | null;
    lowerTwoSigma: number | null;
    /** Target value for this row (if provided in input). Exposed for rendering reference lines. */
    target: number | null;
    /** Fifteen consecutive points within inner third (±1σ) with at least one on each side of mean */
    specialCauseFifteenInnerThird: boolean;
    /**
     * Unified directional aliases (Up/Down) for all special cause rule flags.
     * These replace the legacy Above/Below/High/Low/Increasing/Decreasing fields (removed in vNEXT breaking change).
     */
    specialCauseSinglePointUp: boolean;
    specialCauseSinglePointDown: boolean;
    specialCauseTwoOfThreeUp: boolean;
    specialCauseTwoOfThreeDown: boolean;
    specialCauseFourOfFiveUp: boolean;
    specialCauseFourOfFiveDown: boolean;
    specialCauseShiftUp: boolean;
    specialCauseShiftDown: boolean;
    specialCauseTrendUp: boolean;
    specialCauseTrendDown: boolean;
    variationIcon: VariationIcon;
    assuranceIcon: AssuranceIcon;
    upperBaseline: number | null;
    lowerBaseline: number | null;
    movingRangeHighPointValue: number | null;
    ghostValue: number | null;
    ghostFlag: boolean;
    specialCauseImprovementValue: number | null;
    specialCauseConcernValue: number | null;
    specialCauseNeitherValue: number | null;
    /** Raw rule-based special cause tags (orthodox flags; snake_case) for audit trail */
    ruleTags?: SpcRawRuleTag[];
    conflictPrimeDirection?: PrimeDirection;
    conflictResolvedByRuleId?: SpcRuleId;
    conflictResolvedRank?: number;
    conflictResolved?: boolean;
    /** @deprecated Use improvementValueBeforePruning (Phase 2 rename) */
    originalSpecialCauseImprovementValue?: number | null;
    /** @deprecated Use concernValueBeforePruning (Phase 2 rename) */
    originalSpecialCauseConcernValue?: number | null;
    /** @deprecated Use improvementValueBeforePruning (added Phase 2). Getter provided for forward compatibility. */
    improvementValueBeforePruning?: number | null;
    /** @deprecated Use concernValueBeforePruning (added Phase 2). Getter provided for forward compatibility. */
    concernValueBeforePruning?: number | null;
    /** Pruning mode applied (if any). Undefined when no pruning semantics applied. */
    pruningMode?: PruningMode;
}
export declare enum SpcWarningSeverity {
    Info = "info",
    Warning = "warning",
    Error = "error"
}
export declare enum SpcWarningCategory {
    Config = "config",
    Data = "data",
    Limits = "limits",
    SpecialCause = "special_cause",
    Baseline = "baseline",
    Logic = "logic",
    Target = "target",
    Ghost = "ghost",
    Partition = "partition"
}
export declare enum SpcWarningCode {
    UnknownChartType = "unknown_chart_type",
    InsufficientPointsGlobal = "insufficient_points_global",
    VariationConflictRow = "variation_conflict_row",
    NullValuesExcluded = "null_values_excluded",
    TargetIgnoredRareEvent = "target_ignored_rare_event",
    GhostRowsRareEvent = "ghost_rows_rare_event",
    InsufficientPointsPartition = "insufficient_points_partition",
    BaselineWithSpecialCause = "baseline_with_special_cause",
    PartitionCapApplied = "partition_cap_applied",
    GlobalCapApplied = "global_cap_applied"
}
export interface SpcWarning {
    code: SpcWarningCode;
    message: string;
    severity?: SpcWarningSeverity;
    category?: SpcWarningCategory;
    context?: Record<string, unknown>;
}
export interface SpcResult {
    rows: SpcRow[];
    warnings: SpcWarning[];
    /** Optional heuristic suggestions for candidate new baseline starting points (phase changes) */
    suggestedBaselines?: Array<{
        index: number;
        reason: BaselineSuggestionReason;
        score: number;
        deltaMean: number;
        oldMean: number;
        newMean: number;
        window: [number, number];
    }>;
}
export declare function getDirectionalSignalSummary(row: SpcRow): {
    upRules: SpcRuleId[];
    downRules: SpcRuleId[];
    upMax: number;
    downMax: number;
    hasUp: boolean;
    hasDown: boolean;
};
export declare enum BaselineSuggestionReason {
    Shift = "shift",
    Trend = "trend",
    Point = "point"
}
/** Compute moving range array relative to previous NON-GHOST, within a partition */
/** Iterative single-pass outlier exclusion for MR using UCL = 3.267 * MRbar (1 iteration) */
/** Build sigma/limit lines given mean and MRbar for XmR */
export declare function normaliseSpcSettings(user?: AnySpcSettings): SpcSettings;
export declare function buildSpc(args: BuildSpcArgs): SpcResult;
declare const _default: {
    buildSpc: typeof buildSpc;
};
export default _default;
