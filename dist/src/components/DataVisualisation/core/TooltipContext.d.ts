import * as React from 'react';
export interface TooltipDatum {
    seriesId: string;
    index: number;
    x: Date;
    y: number;
    clientX: number;
    clientY: number;
}
export interface TooltipContextValue {
    focused: TooltipDatum | null;
    setFocused: (d: TooltipDatum | null) => void;
    /** All series points sharing the focused x (including focused point) when multiple series align. Length 0 when no focus, 1 when single. */
    aggregated: TooltipDatum[];
    /** Programmatic focus of nearest datum to given SVG plot coordinates (already in inner coordinate space). */
    focusNearest: (plotX: number, plotY: number) => void;
    /** Clear current focus */
    clear: () => void;
    /** Register series data for nearest-point lookup */
    registerSeries: (seriesId: string, data: {
        x: Date;
        y: number;
    }[]) => void;
    unregisterSeries: (seriesId: string) => void;
    /** Move focus to next point in same series */
    focusNextPoint: () => void;
    /** Move focus to previous point in same series */
    focusPrevPoint: () => void;
    /** Cycle to next series at same index (if exists) */
    focusNextSeries: () => void;
    /** Cycle to previous series at same index (if exists) */
    focusPrevSeries: () => void;
    /** Jump to first point in current (or first) series */
    focusFirstPoint: () => void;
    /** Jump to last point in current (or first) series */
    focusLastPoint: () => void;
}
declare const TooltipContext: React.Context<TooltipContextValue | null>;
export declare const useTooltipContext: () => TooltipContextValue | null;
interface TooltipProviderProps {
    children: React.ReactNode;
    /** Maximum pixel distance to accept a nearest match (otherwise focus cleared) */
    maxDistance?: number;
    /** Allow wrap-around when navigating past start/end of points or series */
    wrapAround?: boolean;
}
/** Shared tooltip / focus context: unifies pointer & keyboard focus of a single datum across chart primitives. */
export declare const TooltipProvider: React.FC<TooltipProviderProps>;
export default TooltipContext;
