import * as React from "react";
export interface GridLinesProps {
    axis?: "x" | "y";
    tickCount?: number;
    stroke?: string;
    dasharray?: string;
    className?: string;
    /** y-axis only: when true, skip grid lines inside the visual break gap above the x-axis. */
    showZeroAxisBreak?: boolean;
    /** y-axis only: size of the break gap in pixels (used only when showZeroAxisBreak=true). */
    zeroAxisBreakGapPx?: number;
    /** y-axis only: extra buffer above the gap to suppress the first gridline (px). */
    zeroAxisBreakTickBufferPx?: number;
}
export declare const GridLines: React.FC<GridLinesProps>;
export default GridLines;
