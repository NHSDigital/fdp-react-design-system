import * as React from 'react';
export interface ChartDimensions {
    width: number;
    height: number;
    innerWidth: number;
    innerHeight: number;
    margin: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    ref: React.RefObject<HTMLDivElement | null>;
}
export declare function useChartDimensions(initial?: Partial<ChartDimensions['margin']>): ChartDimensions;
