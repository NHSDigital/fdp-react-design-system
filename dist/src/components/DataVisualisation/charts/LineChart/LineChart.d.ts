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
    /** Explicit x-axis tick values (dates); overrides automatic ticks. */
    xTickValues?: (Date | string | number)[];
    /** Convenience flag: when true, x-axis ticks align exactly to the unique set of data point x values (sorted). Ignored if xTickValues supplied. */
    alignXTicksToData?: boolean;
    /** Announce focused point changes via an aria live region (default true). Requires TooltipProvider higher in tree for focus changes; safe no-op otherwise. */
    announceFocus?: boolean;
    /** Show floating tooltip overlay (circle + label). Defaults true. */
    showTooltipOverlay?: boolean;
    /** Pad the x-domain by half a step on each side so edge points (focus ring) are fully visible (default true). */
    padXDomain?: boolean;
    /** Enable wrap-around keyboard navigation for points & series (Arrow keys wrap). */
    wrapAroundNav?: boolean;
    /** Opt-in: enable built-in keyboard navigation handler (Arrow/Home/End/Escape). Default false for explicit adoption. */
    keyboardNav?: boolean;
    /** Presentation of hidden series: 'remove' (default, series omitted) or 'fade' (dim visually, non-interactive). */
    visibilityMode?: 'remove' | 'fade';
    /** When true and some series are hidden, recompute y-domain using only visible series. */
    recomputeYDomainOnHidden?: boolean;
    /** Custom stroke width for all series (passed to LineSeriesPrimitive). */
    strokeWidth?: number;
    /** Enable / disable curve smoothing (monotoneX). Default true. */
    smooth?: boolean;
}
export declare const LineChart: React.FC<LineChartProps>;
export default LineChart;
