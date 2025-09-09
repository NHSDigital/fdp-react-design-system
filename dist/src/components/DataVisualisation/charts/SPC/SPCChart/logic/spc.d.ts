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
export declare enum AssuranceIcon {
    Pass = "pass",
    Fail = "fail",
    None = "none"
}
export declare enum PrecedenceStrategy {
    Legacy = "legacy",
    DirectionalFirst = "directional_first"
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
    /** Enable the four-of-five beyond 1σ rule (not in headline public four rules). Default: false */
    enableFourOfFiveRule?: boolean;
    /** Precedence / classification strategy. legacy = original side aggregation; directional_first = favour directionally consistent emerging improvement & apply grace. Default: 'legacy' */
    precedenceStrategy?: PrecedenceStrategy;
    /** When using directional_first, enable early neutralisation (downgrade Concern -> Neither) for near-complete (N-1) favourable monotonic runs before the formal trend rule fires. */
    emergingDirectionGrace?: boolean;
    /** Trend side-gating: when true, only count trend flags (increasing/decreasing) towards signals on the favourable side of the mean. When false, trend flags contribute irrespective of side (restores pre-gating behaviour). Default: true */
    trendSideGatingEnabled?: boolean;
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
    /** Capability mode: classify assurance by full process band vs target. Default: true */
    assuranceCapabilityMode?: boolean;
    /** Points difference buffer when resolving simultaneous opposing sustained indications */
    transitionBufferPoints?: number;
    /** Collapse lower-severity cluster rules (2-of-3 vs 4-of-5) keeping only strongest */
    collapseClusterRules?: boolean;
    /** Enable detection of stability: fifteen consecutive points within inner one-third band (|value-mean| < 1σ) with mixture (not all on one side). Default: false */
    enableFifteenInInnerThirdRule?: boolean;
    /** Enable heuristic baseline (phase) change suggestions */
    baselineSuggest?: boolean;
    /** Minimum change in mean (in sigma units) between old & new stable windows */
    baselineSuggestMinDeltaSigma?: number;
    /** Points required in stability window after candidate change */
    baselineSuggestStabilityPoints?: number;
    /** Minimum non-ghost points since previous accepted (or initial) baseline */
    baselineSuggestMinGap?: number;
    /** Minimum score threshold (0-100) for emitting suggestion */
    baselineSuggestScoreThreshold?: number;
    /** Option C: Comparative baseline emulation. When true, a later favourable sustained shift can retrospectively label earlier stable points as concern relative to new level (or invert behaviour). */
    /** When true, automatically insert a recalculation (new partition) after a confirmed sustained shift so centre line & limits step without needing explicit baselines array. */
    autoRecalculateAfterShift?: boolean;
    /** Minimum sustained shift length required to trigger auto recalculation (defaults to specialCauseShiftPoints). */
    autoRecalculateShiftLength?: number;
    /** Require the post-shift window mean to differ from pre-shift mean by at least this many sigma to trigger auto recalculation. Default 0.5 */
    autoRecalculateDeltaSigma?: number;
}
export interface BuildSpcArgs {
    chartType: ChartType;
    metricImprovement: ImprovementDirection;
    data: SpcInputRow[];
    settings?: SpcSettings;
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
    specialCauseSinglePointAbove: boolean;
    specialCauseSinglePointBelow: boolean;
    specialCauseTwoOfThreeAbove: boolean;
    specialCauseTwoOfThreeBelow: boolean;
    specialCauseFourOfFiveAbove: boolean;
    specialCauseFourOfFiveBelow: boolean;
    specialCauseShiftHigh: boolean;
    specialCauseShiftLow: boolean;
    specialCauseTrendIncreasing: boolean;
    specialCauseTrendDecreasing: boolean;
    /** Fifteen consecutive points within inner third (±1σ) with at least one on each side of mean */
    specialCauseFifteenInnerThird: boolean;
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
    ruleTags?: string[];
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
export declare enum BaselineSuggestionReason {
    Shift = "shift",
    Trend = "trend",
    Point = "point"
}
export declare function buildSpc(args: BuildSpcArgs): SpcResult;
declare const _default: {
    buildSpc: typeof buildSpc;
};
export default _default;
