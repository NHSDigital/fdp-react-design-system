import * as React from "react";
export interface SimpleBarChartProps {
    data: Record<string, number> | Array<{
        label: string;
        value: number;
    }> | Array<[string, number]>;
    ariaLabel: string;
    width?: number;
    height?: number;
    margin?: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    yLabel?: string;
    palette?: "categorical" | "region";
    colors?: string[];
    colorMode?: "series" | "category";
    groupGap?: number;
    minBarWidth?: number;
    gradient?: boolean;
    opacity?: number;
    flatFillOpacity?: number;
}
declare const SimpleBarChart: React.FC<SimpleBarChartProps>;
export default SimpleBarChart;
