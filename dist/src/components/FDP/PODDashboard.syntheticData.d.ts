/**
 * Synthetic data generator for POD Dashboard metrics
 * Based on POD.csv metrics with national, regional, and ICB dimensions
 */
import { ImprovementDirection } from "../DataVisualisation/charts/SPC";
import { MetricPolarity } from "../DataVisualisation/charts/SPC/icons";
export type OrgLevel = "National" | "Region" | "ICB";
export interface PODMetric {
    id: string;
    level: OrgLevel;
    orgCode: string;
    orgName: string;
    theme: string;
    metricName: string;
    polarity: MetricPolarity;
    improvementDirection: ImprovementDirection;
    unit: string;
    target?: number;
    dates: string[];
    values: Array<number | null>;
}
/**
 * Generate synthetic data for all metrics with national, regional, and ICB breakdown
 */
export declare const generatePODMetrics: () => PODMetric[];
