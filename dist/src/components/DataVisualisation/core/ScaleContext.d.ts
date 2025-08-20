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
}
export declare const LineScalesProvider: <Datum extends {
    x: any;
    y: number;
}>({ series, innerWidth: innerWidthProp, innerHeight: innerHeightProp, parseX: parseXProp, children, xTickCount, yTickCount }: LineScalesProviderProps<Datum>) => import("react/jsx-runtime").JSX.Element;
export default ScaleContext;
