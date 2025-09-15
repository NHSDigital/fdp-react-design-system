import { ChartType } from "./types";
export declare function computePartitionLimits(chartType: ChartType, values: (number | null)[], ghosts: boolean[], excludeMovingRangeOutliers: boolean): {
    mean: number;
    mr: (number | null)[];
    mrMean: number;
    mrUcl: number;
    upperProcessLimit: number | null;
    lowerProcessLimit: number | null;
    upperTwoSigma: number | null;
    lowerTwoSigma: number | null;
    upperOneSigma: number | null;
    lowerOneSigma: number | null;
};
