import * as React from 'react';
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
    palette: 'categorical' | 'region';
    showPoints: boolean;
    focusablePoints: boolean;
    focusIndex: number;
    /** Provide parseX to avoid reallocation across series */
    parseX: (d: LineDatum) => Date;
}
/** Low-level renderer for a single line series (no axes, assumes ScaleContext present). */
export declare const LineSeriesPrimitive: React.FC<LineSeriesPrimitiveProps>;
export default LineSeriesPrimitive;
