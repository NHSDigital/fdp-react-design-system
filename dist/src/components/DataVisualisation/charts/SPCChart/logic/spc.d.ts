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
export type ChartType = "XmR" | "T" | "G";
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
    /** Suppress isolated favourable single 3σ point without corroboration. Default: true */
    suppressIsolatedFavourablePoint?: boolean;
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
}
export interface SpcWarning {
    code: string;
    message: string;
    severity?: 'info' | 'warning' | 'error';
    category?: 'config' | 'data' | 'limits' | 'special_cause' | 'baseline' | 'logic' | 'target' | 'ghost' | 'partition';
    context?: Record<string, unknown>;
}
export interface SpcResult {
    rows: SpcRow[];
    warnings: SpcWarning[];
}
export declare function buildSpc(args: BuildSpcArgs): SpcResult;
declare const _default: {
    buildSpc: typeof buildSpc;
};
export default _default;
