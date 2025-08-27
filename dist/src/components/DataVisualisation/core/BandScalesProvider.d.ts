import * as React from 'react';
export interface BandDatum {
    x: string;
    y: number;
}
export interface BandSeries {
    data: BandDatum[];
}
export interface BandScalesProviderProps {
    series: BandSeries[];
    innerWidth?: number;
    innerHeight?: number;
    paddingInner?: number;
    paddingOuter?: number;
    children: React.ReactNode;
    yTickCount?: number;
}
export declare const BandScalesProvider: React.FC<BandScalesProviderProps>;
export default BandScalesProvider;
