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
    /** Explicit per-bar width override (px). If provided, inference is skipped (continuous scales). For band scales this is clamped to available slot. */
    barWidth?: number;
    /** Adaptive mode: dynamically fill available step width up to an occupancy factor, ignoring widthFactor when continuous. */
    adaptive?: boolean;
    /** Fraction (0-1] of the step (distance to next category midpoint) to occupy as total group width in adaptive mode. Default 0.9 */
    adaptiveGroupOccupancy?: number;
    /** Presentation for hidden series (consistency with line). */
    visibilityMode?: 'remove' | 'fade';
    /** Color assignment mode: by entire series (default) or per category (datum index within a single series). */
    colorMode?: 'series' | 'category';
}
/** Low-level primitive for vertical bars (time / ordinal X via ScaleContext time scale). */
export declare const BarSeriesPrimitive: React.FC<BarSeriesPrimitiveProps>;
export default BarSeriesPrimitive;
