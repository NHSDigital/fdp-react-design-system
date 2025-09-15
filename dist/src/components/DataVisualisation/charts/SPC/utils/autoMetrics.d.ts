import type { MetricCardProps } from "../../../components/MetricCard/MetricCard";
export type IntervalHint = "hourly" | "daily" | "weekly" | "monthly" | "quarterly" | "annually";
export interface DeltaConfig {
    strategy?: "previous" | "n-points" | "year-over-year";
    n?: number;
    absolute?: boolean;
    skipNulls?: boolean;
}
export interface AutoMetricsInput {
    values: Array<number | null | undefined>;
    dates?: Array<Date | string | number | undefined>;
    intervalHint?: IntervalHint;
    startDate?: Date | string | number;
    providedUnit?: string;
    defaultUnit?: string;
    /** Percent inference heuristic. Default '0-100' (values within 0..100). Use '0-1' for proportion series. */
    percentHeuristic?: "0-100" | "0-1";
    autoValue?: boolean;
    autoDelta?: boolean;
    autoMetadata?: boolean;
    deltaConfig?: DeltaConfig;
}
export interface AutoMetricsResult {
    value?: number;
    unit?: string;
    delta?: MetricCardProps["delta"];
    metadata?: string;
    latestDate?: Date;
    frequency?: IntervalHint;
}
export declare function computeAutoMetrics(input: AutoMetricsInput): AutoMetricsResult;
export default computeAutoMetrics;
