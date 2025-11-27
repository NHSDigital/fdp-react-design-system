import { ConflictStrategy, ImprovementDirection, MetricConflictRule, PrimeDirection, SpcRowV2, SpcRuleId } from "./types";
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
export declare function applySqlPruning(row: SpcRowV2, metric: ImprovementDirection, metricConflictRule: MetricConflictRule, preferImprovementWhenConflict?: boolean, conflictStrategy?: ConflictStrategy, ruleHierarchy?: SpcRuleId[], preferTrendWhenConflict?: boolean): {
    originalImprovement: number | null;
    originalConcern: number | null;
};
export declare function resolveConflict(args: {
    row: SpcRowV2;
    metric: ImprovementDirection;
    metricConflictRule: MetricConflictRule;
    preferImprovementWhenConflict?: boolean;
    preferTrendWhenConflict?: boolean;
    primeDirection?: PrimeDirection;
    conflictStrategy?: ConflictStrategy;
    ruleHierarchy?: SpcRuleId[];
}): void;
export declare function computeSideFlags(row: SpcRowV2): {
    upAny: boolean;
    downAny: boolean;
};
export declare function hasDirectionalConflict(row: SpcRowV2): boolean;
