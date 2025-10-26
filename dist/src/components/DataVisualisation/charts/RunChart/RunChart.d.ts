import * as React from "react";
export interface RunDatum {
    x: Date | string | number;
    y: number;
    ghost?: boolean;
}
export interface RunSeries {
    id: string;
    data: RunDatum[];
    color?: string;
    label?: string;
}
export interface RunChartProps {
    series: RunSeries[];
    height?: number;
    yLabel?: string;
    ariaLabel?: string;
    showPoints?: boolean;
    focusablePoints?: boolean;
    /** Custom stroke width for the series line (px). Default 1. */
    strokeWidth?: number;
    /** Enable curve smoothing (monotoneX). Default true. */
    smooth?: boolean;
    /** Light gradient wash under lines (uses stroke colour fading to transparent). Default true. */
    gradientFills?: boolean;
    /** When true, computes a single-series median and draws a horizontal baseline. */
    showMedian?: boolean;
    /** Optional boolean flags per point to start new median partitions (phase changes). If provided, must be same length/order as series[0].data */
    partitionFlags?: (boolean | null | undefined)[];
    /** When true, render provisional visual markers for run-chart rules (trend / shift). Default false. */
    showRunRulesHints?: boolean;
    /** Select a single-series line colour from NHS data-viz palette. Default NHS Blue. */
    lineColor?: RunChartColor;
}
export declare enum RunChartColor {
    NHSBlue = "NHSBlue",
    Categorical1 = "Categorical1",
    Categorical2 = "Categorical2",
    Categorical3 = "Categorical3",
    Categorical4 = "Categorical4",
    Categorical5 = "Categorical5",
    Categorical6 = "Categorical6",
    Categorical7 = "Categorical7",
    Categorical8 = "Categorical8",
    Categorical9 = "Categorical9",
    Categorical10 = "Categorical10",
    Categorical11 = "Categorical11",
    Categorical12 = "Categorical12"
}
export declare const RunChart: React.FC<RunChartProps>;
export default RunChart;
