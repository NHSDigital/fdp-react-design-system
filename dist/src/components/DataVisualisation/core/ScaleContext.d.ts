import * as React from 'react';
export interface ScaleContextValue {
    xScale: any;
    yScale: any;
    getXTicks: (count?: number) => Date[];
    getYTicks: (count?: number) => number[];
}
declare const ScaleContext: React.Context<ScaleContextValue | null>;
export declare const useScaleContext: () => ScaleContextValue | null;
export interface LineScalesProviderProps<Datum extends {
    x: any;
    y: number;
}> {
    series: {
        data: Datum[];
    }[];
    /** Explicit inner width; if omitted, derived from ChartRoot context (if available) */
    innerWidth?: number;
    /** Explicit inner height; if omitted, derived from ChartRoot context (if available) */
    innerHeight?: number;
    parseX?: (d: Datum) => Date;
    children: React.ReactNode;
    xTickCount?: number;
    yTickCount?: number;
    /** Optional explicit y domain override (e.g. stacked totals). */
    yDomain?: [number, number];
    /** Inner padding (px) to leave between axis and plotted points — improves hover targets near edges. Default: 6px */
    xPadding?: number;
    yPadding?: number;
}
export declare const LineScalesProvider: <Datum extends {
    x: any;
    y: number;
}>({ series, innerWidth: innerWidthProp, innerHeight: innerHeightProp, parseX: parseXProp, children, xTickCount, yTickCount, yDomain, xPadding, yPadding }: LineScalesProviderProps<Datum>) => import("react/jsx-runtime").JSX.Element;
export default ScaleContext;
