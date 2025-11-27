import * as React from "react";
export interface LineDatum {
    x: Date | string | number;
    y: number;
}
export interface LineSeries {
    id: string;
    data: LineDatum[];
    color?: string;
    label?: string;
}
export interface LineSeriesPrimitiveProps {
    series: LineSeries;
    seriesIndex: number;
    palette: "categorical" | "region";
    showPoints: boolean;
    focusablePoints: boolean;
    focusIndex: number;
    /** Provide parseX to avoid reallocation across series */
    parseX: (d: LineDatum) => Date;
    /** Presentation for hidden series (inherited via LineChart). */
    visibilityMode?: "remove" | "fade";
    /** Custom stroke width for the series line (defaults to 1). */
    strokeWidth?: number;
    /** Enable curve smoothing (monotoneX). Defaults to true. */
    smooth?: boolean;
    /** Optional gradient fill id (linearGradient) for subtle wash under line. */
    gradientFillId?: string;
    /** Optional explicit colour palette overriding default pickSeriesColor / pickRegionColor logic.
     *  Precedence: series.color > colors[seriesIndex] > internal palette pickers. */
    colors?: string[];
}
/** Low-level renderer for a single line series (no axes, assumes ScaleContext present). */
export declare const LineSeriesPrimitive: React.FC<LineSeriesPrimitiveProps>;
export default LineSeriesPrimitive;
