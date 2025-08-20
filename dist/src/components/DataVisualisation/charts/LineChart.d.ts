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
export interface LineChartProps {
    series: LineSeries[];
    height?: number;
    yLabel?: string;
    ariaLabel?: string;
    showPoints?: boolean;
    focusablePoints?: boolean;
    /** Palette selection: 'categorical' (default 12‑colour data-viz set) or 'region' (maps series id to region tokens if possible) */
    palette?: 'categorical' | 'region';
    /** Optional date tick label formatter (defaults locale month short + day) */
    dateFormatter?: (d: Date) => string;
    /** Optional y-value tick formatter */
    valueFormatter?: (n: number) => string;
}
export declare const LineChart: React.FC<LineChartProps>;
export default LineChart;
