import * as React from 'react';
export interface CUSUMDatum {
    x: Date | number | string;
    y: number;
}
export interface CUSUMSeries {
    id: string;
    data: CUSUMDatum[];
    label?: string;
}
export interface CUSUMChartProps {
    series: CUSUMSeries;
    targetMean?: number;
    sigma?: number;
    k?: number;
    h?: number;
    sided?: 'two' | 'upper' | 'lower';
    resetAtZero?: boolean;
    higherIsBetter?: boolean;
    height?: number;
    ariaLabel?: string;
}
export declare const CUSUMChart: React.FC<CUSUMChartProps>;
export default CUSUMChart;
