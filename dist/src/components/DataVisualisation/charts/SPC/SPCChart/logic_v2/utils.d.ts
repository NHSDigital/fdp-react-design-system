export declare function isNumber(n: unknown): n is number;
export declare function mean(nums: number[]): number;
export declare function movingRanges(values: (number | null | undefined)[], ghosts: boolean[]): (number | null)[];
export declare function mrMeanWithOptionalExclusion(mr: (number | null)[], excludeOutliers: boolean): {
    mrMean: number;
    mrUcl: number;
};
export declare function xmrLimits(center: number, mrMean: number): {
    upperProcessLimit: null;
    lowerProcessLimit: null;
    upperTwoSigma: null;
    lowerTwoSigma: null;
    upperOneSigma: null;
    lowerOneSigma: null;
} | {
    upperProcessLimit: number;
    lowerProcessLimit: number;
    upperTwoSigma: number;
    lowerTwoSigma: number;
    upperOneSigma: number;
    lowerOneSigma: number;
};
