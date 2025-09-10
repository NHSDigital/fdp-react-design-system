import { buildSpc, ChartType, ImprovementDirection, SpcSettings, SpcRow, SpcRuleId } from "./spc";
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
    disableTrendSideGating?: boolean;
}
export interface SpcSqlCompatRow extends SpcRow {
    primeDirection?: PrimeDirection;
    primeRank?: number;
    primeRuleId?: SpcRuleId;
    sqlOriginalImprovementValue?: number | null;
    sqlOriginalConcernValue?: number | null;
    sqlPruned?: boolean;
}
export interface SpcSqlCompatResult {
    rows: SpcSqlCompatRow[];
    warnings: ReturnType<typeof buildSpc>["warnings"];
}
export declare enum PrimeDirection {
    Upwards = "Upwards",
    Downwards = "Downwards",
    Same = "Same"
}
export declare function sqlDirectionalPrune(row: SpcSqlCompatRow, metricImprovement: ImprovementDirection): void;
export declare function buildSpcSqlCompat(args: BuildSpcSqlCompatArgs): SpcSqlCompatResult;
