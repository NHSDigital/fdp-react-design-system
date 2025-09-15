import * as React from "react";
import { VariationState } from "../charts/SPC/SPCIcons/SPCConstants";
import { ChartType, ImprovementDirection } from "../charts/SPC/SPCChart/logic/spcConstants";
import type { SPCSparkProps } from "../charts/SPC/SPCSpark/SPCSpark.types";
export interface UseSpcInput {
    values: Array<number | null>;
    x?: Array<string | number | Date>;
    chartType?: ChartType;
    metricImprovement?: ImprovementDirection;
    /** When true, run the SQL-compatibility wrapper (post-hoc directional pruning) for parity with SPCChart's `useSqlCompatEngine`. */
    useSqlCompatEngine?: boolean;
    showLimits?: boolean;
    showLimitBand?: boolean;
    showInnerBands?: boolean;
    showMean?: boolean;
    autoClassify?: boolean;
}
export interface UseSpcResult {
    sparkProps: Pick<SPCSparkProps, "data" | "showMean" | "showLimits" | "showLimitBand" | "showInnerBands" | "metricImprovement" | "variationState" | "centerLine" | "controlLimits" | "pointSignals" | "autoClassify" | "onClassification">;
    /** Inline style variables for MetricCard background and accent colour */
    metricCardStyle: React.CSSProperties;
    /** Latest SPC state (Improving/Concern/Common/No‑Judgement) */
    latestState: VariationState | null;
}
/**
 * useSpc – derive SPC-backed visual props for SPCSpark and SPCMetricCard from raw values.
 * It runs the full SPC engine for consistent classification and also computes a colour to
 * tint the MetricCard background/accent based on the latest point’s state.
 */
export declare function useSpc(input: UseSpcInput): UseSpcResult;
export default useSpc;
