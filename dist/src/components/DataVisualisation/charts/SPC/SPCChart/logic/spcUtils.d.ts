export declare const isNumber: (v: unknown) => v is number;
export declare const sum: (arr: number[]) => number;
export declare const mean: (arr: number[]) => number;
export declare function movingRanges(values: (number | null)[], ghosts: boolean[]): (number | null)[];
export declare function mrMeanWithOptionalExclusion(mr: (number | null)[], excludeOutliers: boolean): {
    mrMean: number;
    mrUcl: number;
};
export declare function xmrLimits(centerMean: number, mrMeanVal: number): {
    upperProcessLimit: number | null;
    lowerProcessLimit: number | null;
    upperTwoSigma: number | null;
    lowerTwoSigma: number | null;
    upperOneSigma: number | null;
    lowerOneSigma: number | null;
};
export declare const toTTransformed: (t: number | null) => number | null;
export declare const fromTTransformed: (y: number | null) => number | null;
export declare function geomInvCdfReal(q: number, p: number): number;
export declare function gChartProbabilityLimits(gMean: number): {
    cl: number | null;
    lcl: number | null;
    ucl: number | null;
    oneLow: number | null;
    oneHigh: number | null;
    twoLow: number | null;
    twoHigh: number | null;
};
export declare function tChartLimits(tValues: (number | null)[], ghosts: boolean[], excludeOutliers: boolean): {
    center: number | null;
    upperProcessLimit: number | null;
    lowerProcessLimit: number | null;
    upperTwoSigma: number | null;
    lowerTwoSigma: number | null;
    upperOneSigma: number | null;
    lowerOneSigma: number | null;
    mr: (number | null)[];
    mrMean: number | null;
    mrUcl: number | null;
};
