import * as React from 'react';
export interface AxisProps {
    type: 'x' | 'y';
    scale?: any;
    tickCount?: number;
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
    tickFormatPreset?: 'dayShortMonth' | 'dayShortMonthYear' | 'shortMonth' | 'shortMonthYear' | 'hourMinute';
}
export declare const Axis: React.FC<AxisProps>;
export default Axis;
