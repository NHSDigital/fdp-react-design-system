import { SpcRowV2 } from "./types";
export interface DetectorConfig {
    shiftPoints: number;
    trendPoints: number;
    twoSigmaIncludeAboveThree?: boolean;
}
export declare function detectRulesInPartition(rows: SpcRowV2[], cfg: DetectorConfig): void;
