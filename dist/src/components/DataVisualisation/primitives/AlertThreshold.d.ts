import * as React from "react";
export type AlertStatus = "ok" | "warning" | "critical" | "info";
export interface AlertThresholdProps {
    /** Orientation of the threshold: horizontal (y=value) or vertical (x=value). Default 'horizontal'. */
    orientation?: "horizontal" | "vertical";
    /** Numeric y-value for horizontal line or Date/number x-value for vertical line. */
    value: number | Date;
    /** Optional text label rendered near the end of the line. */
    label?: string;
    /** Semantic status influences default colour. */
    status?: AlertStatus;
    /** Explicit stroke colour to override status default. */
    color?: string;
    /** Dashed line style (default true). */
    dashed?: boolean;
    /** Stroke width (px). Default 2. */
    strokeWidth?: number;
}
/** Draws a threshold line across the plot area using current scales. */
export declare const AlertThreshold: React.FC<AlertThresholdProps>;
export default AlertThreshold;
