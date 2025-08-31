import * as React from 'react';
export interface BarDatum {
    x: Date | string | number;
    y: number;
}
export interface BarSeries {
    id: string;
    data: BarDatum[];
    color?: string;
    label?: string;
    barWidth?: number;
}
export interface BarSeriesPrimitiveProps {
    series: BarSeries;
    seriesIndex: number;
    seriesCount: number;
    palette: 'categorical' | 'region';
    /** Provide parseX so callers can reuse memoised function across series */
    parseX: (d: BarDatum) => Date;
    /** All series in the grouped chart (used for global x step inference on continuous scales to avoid overlap). */
    allSeries?: BarSeries[];
    /** Focusable bars (keyboard tab). For large sets you may disable. */
    focusable?: boolean;
    /** Width fill factor inside inferred step (0..1) */
    widthFactor?: number;
    /** Gap (px) between grouped bars (apportioned inside step) */
    groupGap?: number;
    /** Dynamic gap ratio (gap = barWidth * gapRatio) for grouped bars. Overrides static groupGap when provided. Default 0.15 */
    gapRatio?: number;
    /** Explicit per-bar width override (px). If provided, inference is skipped (continuous scales). For band scales this is clamped to available slot. */
    barWidth?: number;
    /** Adaptive mode: dynamically fill available step width up to an occupancy factor, ignoring widthFactor when continuous. */
    adaptive?: boolean;
    /** Fraction (0-1] of the step (distance to next category midpoint) to occupy as total group width in adaptive mode. Default 0.9 */
    adaptiveGroupOccupancy?: number;
    /** Minimum bar width (px) for continuous scales. If the inferred uniform bar width would be smaller and it is possible to satisfy the constraint within slot bounds, it will be raised to this value. (No effect for band scales or when explicit barWidth provided.) */
    minBarWidth?: number;
    /** Presentation for hidden series (consistency with line). */
    visibilityMode?: 'remove' | 'fade';
    /** Color assignment mode: by entire series (default) or per category (datum index within a single series). */
    colorMode?: 'series' | 'category';
    /** Optional stacked data: for a stacked vertical bar each datum gets y0,y1 absolute values (pre-normalised if percent). Mutually exclusive with grouped multi-series at same x (i.e., set seriesCount=1 for stacked multi-layer). */
    stacked?: {
        y0: number;
        y1: number;
    }[];
    /** If true, renders stacked segments individually instead of grouping across series. Provided mainly for future extension (multi-encoded). */
    stackedMode?: boolean;
    /** Apply vertical gradient wash (solid at top -> transparent at baseline). Default true. */
    gradientFill?: boolean;
    /** When gradientFill is true, match stroke to primary bar colour. If false, fall back to token/dark stroke. Default true. */
    gradientStrokeMatch?: boolean;
}
/** Low-level primitive for vertical bars (time / ordinal X via ScaleContext time scale). */
export declare const BarSeriesPrimitive: React.FC<BarSeriesPrimitiveProps>;
export default BarSeriesPrimitive;
