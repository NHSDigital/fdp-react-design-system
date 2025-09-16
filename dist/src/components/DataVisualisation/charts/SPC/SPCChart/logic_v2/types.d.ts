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
    preferImprovementWhenConflict?: boolean;
    chartLevelEligibility?: boolean;
}
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
    settings?: SpcSettingsV26a;
}
export interface SpcResultV2 {
    rows: SpcRowV2[];
}
