import * as React from "react";
import type { AlertStatus } from "./AlertThreshold";
export interface AlertBandProps {
    orientation?: "horizontal" | "vertical";
    from: number | Date;
    to: number | Date;
    status?: AlertStatus;
    fill?: string;
    opacity?: number;
    /** Optional rounded corners radius */
    rx?: number;
}
/** Shaded band across a value range (y or x). Renders inside plot <g>. */
export declare const AlertBand: React.FC<AlertBandProps>;
export default AlertBand;
