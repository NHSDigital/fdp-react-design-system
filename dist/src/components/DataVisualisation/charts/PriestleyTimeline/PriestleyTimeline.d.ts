import * as React from "react";
export type Interval = {
    id: string;
    label?: string;
    start: Date | number | string;
    end?: Date | number | string;
    group?: string;
    category?: string;
    href?: string;
    color?: string;
    ariaLabel?: string;
    meta?: Record<string, unknown>;
};
export interface PriestleyTimelineProps {
    data: Interval[];
    xDomain?: [Date | number | string, Date | number | string];
    rowHeight?: number;
    rowGap?: number;
    barRadius?: number;
    showNowMarker?: boolean;
    now?: Date | number | string;
    gridLines?: boolean;
    ariaLabel?: string;
    getBarLabel?: (d: Interval) => string;
    onBarClick?: (d: Interval) => void;
    onBarKeyDown?: (e: React.KeyboardEvent, d: Interval) => void;
    height?: number;
    showInlineLabels?: boolean;
    labelColor?: string;
    enableKeyboardNav?: boolean;
}
export declare const PriestleyTimeline: React.FC<PriestleyTimelineProps>;
export default PriestleyTimeline;
