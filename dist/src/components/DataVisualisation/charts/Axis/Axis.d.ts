import * as React from "react";
export interface AxisProps {
    type: "x" | "y";
    scale?: any;
    tickCount?: number;
    /** Explicit tick values; if provided overrides tickCount/ticks() generation */
    tickValues?: any[];
    formatTick?: (v: any) => string;
    label?: string;
    offset?: number;
    className?: string;
    /** Minimum pixel spacing between adjacent tick labels (x axis only). If labels would overlap, intermediate ticks are dropped. Default 0 (no filtering). */
    minLabelSpacing?: number;
    /** Truncate tick label text to this many characters (adds ellipsis). Full value kept in <title> for tooltip/a11y. */
    maxTickLabelLength?: number;
    /** Auto-compute a reasonable minLabelSpacing based on average label length if explicit minLabelSpacing not provided. */
    autoMinLabelSpacing?: boolean;
    /** Rotate x-axis tick labels (degrees). Negative leans left, positive right. */
    labelAngle?: number;
    /** If true, split labels containing \n into multiple tspans (multi-line). */
    allowLabelWrap?: boolean;
    /** Preset date/time formatting helper (applies only if formatTick not provided). */
    tickFormatPreset?: "dayShortMonth" | "dayShortMonthYear" | "shortMonth" | "shortMonthYear" | "hourMinute";
    /** y-axis only: show a small zig-zag break at the bottom and a fixed "0" label to indicate the axis is condensed and does not include zero. */
    showZeroAxisBreak?: boolean;
    /** y-axis only: visual gap in pixels below the plotting area used for the break indicator (does not affect scale). Default 32. */
    zeroAxisBreakGapPx?: number;
    /** y-axis only: extra buffer above the break gap where ticks are suppressed (px). Default 12. */
    zeroAxisBreakTickBufferPx?: number;
}
export declare const Axis: React.FC<AxisProps>;
export default Axis;
