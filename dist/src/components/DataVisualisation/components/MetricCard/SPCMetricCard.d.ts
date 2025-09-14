import * as React from "react";
import { type MetricCardProps } from "./MetricCard";
import { ImprovementDirection } from "../../charts/SPC/SPCChart/logic/spcConstants";
export interface SPCMetricCardProps extends Omit<MetricCardProps, "visual"> {
    /** Sparkline data points (value series) */
    sparkData: Array<{
        value: number | null;
    }>;
    /** Directionality for interpretation (prefer MetricPolarity; legacy support for enum/string union) */
    direction?: ImprovementDirection;
    /** Show mean and control limits */
    showMean?: boolean;
    showLimits?: boolean;
    showLimitBand?: boolean;
    /** Show 1σ/2σ inner bands when available (engine-provided) */
    showInnerBands?: boolean;
    /** Auto classify last state from spark values */
    autoClassify?: boolean;
    /** Cap rendered points (thinning strategy is stride by default) */
    maxPoints?: number;
}
/**
 * SPCMetricCard – specialised MetricCard for healthcare quality dashboards.
 * Embeds an SPCSpark below the headline value and wires SPC defaults.
 */
export declare const SPCMetricCard: React.FC<SPCMetricCardProps>;
export default SPCMetricCard;
