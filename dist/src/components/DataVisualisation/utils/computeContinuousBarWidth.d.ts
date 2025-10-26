import { BarSeries } from '../series/BarSeriesPrimitive';
export interface ComputeBarWidthOptions {
    parseX: (d: any) => Date;
    /** Explicit per-bar width (px). Falls back to 20 */
    barWidth?: number;
    /** Gap between bars within a group */
    groupGap?: number;
    /** Total groups occupancy factor (groupWidth = step * widthFactor) */
    widthFactor?: number;
    /** Minimum inner plotting width (excluding margins) */
    minInnerWidth?: number;
    /** Minimum visual bar width before we trigger horizontal expansion (auto scroll). Default 8. */
    minBarWidth?: number;
    /** Left/right margins for total width calculation */
    marginLeft?: number;
    marginRight?: number;
    /** Series count displayed at each x (for grouped mode). For stacked we pass 1. */
    seriesCount?: number;
}
/**
 * Derive an inner width so that continuous (time) bars achieve the desired per-bar width
 * without compression. Uses median time step to infer center-to-center spacing.
 */
export declare function computeContinuousBarChartTotalWidth(series: BarSeries[], opts: ComputeBarWidthOptions): number;
