import * as React from "react";
import { type MetricCardProps } from "./MetricCard";
import { ImprovementDirection } from "../../charts/SPC/engine";
export interface SPCMetricCardProps extends Omit<MetricCardProps, "visual"> {
    /** Sparkline data points (value series) */
    sparkData: Array<{
        value: number | null;
        date?: string | number | Date;
    }>;
    /** Directionality for interpretation (prefer MetricPolarity; legacy support for enum/string union) */
    direction?: ImprovementDirection;
    /** Show mean and control limits */
    showMean?: boolean;
    showLimits?: boolean;
    showLimitBand?: boolean;
    /** Show 1σ/2σ inner bands when available (engine-provided) */
    showInnerBands?: boolean;
    /** Cap rendered points (thinning strategy is stride by default) */
    maxPoints?: number;
    /** Automatically derive the headline value from the final data point (default true). */
    autoValue?: boolean;
    /** Automatically derive the delta from recent points (default true). */
    autoDelta?: boolean;
    /** Automatically derive metadata like "Latest: Aug 2025" from dates (default true). */
    autoMetadata?: boolean;
    /** If provided and unit not already set, render values with this unit (e.g. "%", "ms"). */
    defaultUnit?: string;
    /** Treat data as a known regular interval when dates are absent or partial. */
    intervalHint?: "hourly" | "daily" | "weekly" | "monthly" | "quarterly" | "annually";
    /** Starting date used with intervalHint to synthesise dates when none are provided. */
    startDate?: string | number | Date;
    /** Configure how delta is calculated. */
    deltaConfig?: {
        /** Strategy for baseline comparison. */
        strategy?: "previous" | "n-points" | "year-over-year";
        /** Number of periods back when using n-points (default 1). */
        n?: number;
        /** When true, compute delta as absolute difference in unit; when false and unit is '%', still renders with '%' suffix (percentage points). Default: true. */
        absolute?: boolean;
        /** Skip nulls when seeking the baseline point (default true). */
        skipNulls?: boolean;
    };
}
/**
 * SPCMetricCard – specialised MetricCard for healthcare quality dashboards.
 * Embeds an SPCSpark below the headline value and wires SPC defaults.
 */
export declare const SPCMetricCard: React.FC<SPCMetricCardProps>;
export default SPCMetricCard;
