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
    ImprovementHigh = "ImprovementHigh",// improvement on the high side (metric Up)
    ImprovementLow = "ImprovementLow",// improvement on the low side (metric Down)
    ConcernHigh = "ConcernHigh",// concern on the high side (metric Down)
    ConcernLow = "ConcernLow",// concern on the low side (metric Up)
    NeitherHigh = "NeitherHigh",// neutral with a high-side special cause for Neither metrics
    NeitherLow = "NeitherLow",// neutral with a low-side special cause for Neither metrics
    CommonCause = "CommonCause"
}
export declare enum AssuranceIcon {
    None = "None",
    Pass = "Pass",
    HitOrMiss = "HitOrMiss",
    Fail = "Fail"
}
export declare enum SpcRuleId {
    SinglePoint = "SinglePoint",
    TwoSigma = "TwoSigma",
    Shift = "Shift",
    Trend = "Trend"
}
export declare enum PrimeDirection {
    Upwards = "Upwards",
    Downwards = "Downwards",
    Same = "Same"
}
export declare enum Side {
    Up = "Up",
    Down = "Down"
}
export declare enum MetricConflictRule {
    Improvement = "Improvement",
    Concern = "Concern"
}
export declare enum ConflictStrategy {
    SqlPrimeThenRule = "SqlPrimeThenRule",
    PreferImprovement = "PreferImprovement",
    RuleHierarchy = "RuleHierarchy"
}
export declare enum TrendSegmentationStrategy {
    FavourableSide = "FavourableSide",
    CrossingAfterFavourable = "CrossingAfterFavourable",
    ExtremeFavourable = "ExtremeFavourable",
    FirstFavourable = "FirstFavourable",
    LongestFavourable = "LongestFavourable",
    LastFavourable = "LastFavourable",
    UnfavourableSide = "UnfavourableSide",
    CrossingAfterUnfavourable = "CrossingAfterUnfavourable",
    ExtremeUnfavourable = "ExtremeUnfavourable",
    FirstUnfavourable = "FirstUnfavourable",
    LongestUnfavourable = "LongestUnfavourable",
    LastUnfavourable = "LastUnfavourable"
}
export declare enum TrendSegmentationMode {
    Off = "Off",
    AutoWhenConflict = "AutoWhenConflict",
    Always = "Always"
}
export interface SpcInputRowV2 {
    x: string | number | Date;
    value?: number | null;
    ghost?: boolean;
    baseline?: boolean;
    target?: number | null;
}
export interface SpcSettingsV26a {
    minimumPoints?: number;
    shiftPoints?: number;
    trendPoints?: number;
    excludeMovingRangeOutliers?: boolean;
    metricConflictRule?: MetricConflictRule;
    trendAcrossPartitions?: boolean;
    twoSigmaIncludeAboveThree?: boolean;
    enableFourOfFiveRule?: boolean;
    preferImprovementWhenConflict?: boolean;
    conflictStrategy?: ConflictStrategy;
    preferTrendWhenConflict?: boolean;
    ruleHierarchy?: SpcRuleId[];
    chartLevelEligibility?: boolean;
    trendFavourableSegmentation?: boolean;
    trendSegmentationMode?: TrendSegmentationMode;
    trendDominatesHighlightedWindow?: boolean;
    trendSegmentationStrategy?: TrendSegmentationStrategy;
}
export interface SpcSettingsHierarchical {
    thresholds?: {
        /** Minimum non-ghost points required to enable limits/rules (per partition by default). */
        minimumPoints?: number;
        /** Shift run length (default 6). */
        shiftPoints?: number;
        /** Trend run length (default 6). */
        trendPoints?: number;
        /** Exclude MR outliers when estimating sigma (XmR). */
        excludeMovingRangeOutliers?: boolean;
    };
    eligibility?: {
        /** If true, once chart has >= minimumPoints overall, evaluate across partitions retroactively. */
        chartLevel?: boolean;
    };
    parity?: {
        /** Enable strict trend detection across partitions (SQL v2.2+). */
        trendAcrossPartitions?: boolean;
        /** Count >3σ points toward the two-of-three rule. */
        twoSigmaIncludeAboveThree?: boolean;
        /** Enable optional early-warning rule: 4-of-5 beyond 1σ (excluded from ranking). */
        enableFourOfFiveRule?: boolean;
    };
    conflict?: {
        /** Optimistically keep Improvement when both sides exist (disables trend segmentation). */
        preferImprovementWhenConflict?: boolean;
        /** Prefer the trend side when both sides exist and a trend flag is present after segmentation. */
        preferTrendWhenConflict?: boolean;
        /** Strategy for conflict resolution (default SQL parity). */
        strategy?: ConflictStrategy;
        /** Optional rule precedence order (used with strategy RuleHierarchy). */
        ruleHierarchy?: SpcRuleId[];
        /** Tie-break rule when PrimeDirection is Same. */
        metricRuleOnTie?: MetricConflictRule;
    };
    trend?: {
        segmentation?: {
            /** When to apply favourable-side segmentation. Prefer this over the legacy boolean. */
            mode?: TrendSegmentationMode;
            /** Legacy alias (true -> Always, false -> Off). */
            favourableSegmentation?: boolean;
            /** Strategy to pick which favourable segment(s) to keep. */
            strategy?: TrendSegmentationStrategy;
            /** If true, trend dominates inside its highlighted window. */
            dominatesHighlightedWindow?: boolean;
        };
    };
}
export type SpcSettingsInput = SpcSettingsV26a | SpcSettingsHierarchical;
export interface SpcRowV2 {
    rowId: number;
    x: string | number | Date;
    value: number | null;
    ghost: boolean;
    partitionId: number;
    pointRank: number;
    mean: number | null;
    upperProcessLimit: number | null;
    lowerProcessLimit: number | null;
    upperTwoSigma: number | null;
    lowerTwoSigma: number | null;
    upperOneSigma: number | null;
    lowerOneSigma: number | null;
    singlePointUp: boolean;
    singlePointDown: boolean;
    twoSigmaUp: boolean;
    twoSigmaDown: boolean;
    fourOfFiveUp: boolean;
    fourOfFiveDown: boolean;
    shiftUp: boolean;
    shiftDown: boolean;
    trendUp: boolean;
    trendDown: boolean;
    specialCauseImprovementValue: number | null;
    specialCauseConcernValue: number | null;
    variationIcon: VariationIcon;
    primeDirection?: PrimeDirection;
    primeRank?: number;
    primeRuleId?: SpcRuleId;
}
export interface BuildArgsV2 {
    chartType: ChartType;
    metricImprovement: ImprovementDirection;
    data: SpcInputRowV2[];
    /**
     * Settings may be provided in flat (v2.6a) or hierarchical form. The engine normalises these.
     */
    settings?: SpcSettingsInput;
}
export interface SpcResultV2 {
    rows: SpcRowV2[];
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
