import { ImprovementDirection, MetricConflictRule, PrimeDirection, SpcRowV2, SpcRuleId } from "./types";
export declare function getDirectionalSummary(row: SpcRowV2): {
    up: {
        id: SpcRuleId;
        rank: number;
    }[];
    dn: {
        id: SpcRuleId;
        rank: number;
    }[];
    upMax: number;
    dnMax: number;
    primeDirection: PrimeDirection;
};
export declare function deriveOriginalCandidates(row: SpcRowV2, metric: ImprovementDirection): {
    aligned: boolean;
    opposite: boolean;
};
export declare function applySqlPruning(row: SpcRowV2, metric: ImprovementDirection, metricConflictRule: MetricConflictRule): {
    originalImprovement: number | null;
    originalConcern: number | null;
};
