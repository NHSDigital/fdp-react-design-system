import * as React from "react";
import type { AlertStatus } from "./AlertThreshold";
export interface AlertMarkerPoint {
    x: Date | number | string;
    y?: number;
    status?: AlertStatus;
    label?: string;
}
export interface AlertMarkersProps {
    points: AlertMarkerPoint[];
    shape?: "triangle" | "diamond" | "dot";
    size?: number;
}
/** Paints alert markers at specified points using the current scales. */
export declare const AlertMarkers: React.FC<AlertMarkersProps>;
export default AlertMarkers;
