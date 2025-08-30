import * as React from 'react';
export interface AreaDatum {
    x: Date | string | number;
    y: number;
}
export interface AreaSeries {
    id: string;
    data: AreaDatum[];
    color?: string;
    label?: string;
}
export interface AreaSeriesPrimitiveProps {
    series: AreaSeries;
    seriesIndex: number;
    palette: 'categorical' | 'region';
    focusablePoints?: boolean;
    focusIndex?: number;
    parseX: (d: AreaDatum) => Date;
    /** If true, draws only the area fill (no outline). Default renders both. */
    areaOnly?: boolean;
    /** Hidden presentation mirrors LineSeriesPrimitive behaviour. */
    visibilityMode?: 'remove' | 'fade';
    /** Optional baseline (y value) for stacked / diverging future use. Defaults to 0. */
    baselineY?: number;
    /** Enable curve smoothing (monotoneX). Defaults to true. */
    smooth?: boolean;
    /** Optional stacked data providing per-datum y0/y1 (overrides baselineY & raw y). Length must match series.data. */
    stacked?: {
        y0: number;
        y1: number;
    }[];
}
/** Renders an area under a line (baseline -> series y). Provides tooltip registration like LineSeriesPrimitive. */
export declare const AreaSeriesPrimitive: React.FC<AreaSeriesPrimitiveProps>;
export default AreaSeriesPrimitive;
