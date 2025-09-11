import { buildSpc, ChartType, ImprovementDirection, SpcSettings, SpcRow, SpcRuleId, PrimeDirection, PruningMode } from './spc';
export interface BuildSpcSqlCompatArgs {
    chartType: ChartType;
    metricImprovement: ImprovementDirection;
    data: {
        x: string | number | Date;
        value?: number | null;
        ghost?: boolean;
        baseline?: boolean;
        target?: number;
    }[];
    settings?: SpcSettings;
}
export interface SpcSqlCompatRow extends SpcRow {
    primeDirection?: PrimeDirection;
    primeRank?: number;
    primeRuleId?: SpcRuleId;
    /** Indicates pruning strategy used on this row */
    pruningMode?: PruningMode;
    sqlOriginalImprovementValue?: number | null;
    sqlOriginalConcernValue?: number | null;
    sqlPruned?: boolean;
}
export interface SpcSqlCompatResult {
    rows: SpcSqlCompatRow[];
    warnings: ReturnType<typeof buildSpc>["warnings"];
}
export declare function sqlDirectionalPrune(row: SpcSqlCompatRow, metricImprovement: ImprovementDirection): void;
export declare function buildSpcSqlCompat(args: BuildSpcSqlCompatArgs): SpcSqlCompatResult;
