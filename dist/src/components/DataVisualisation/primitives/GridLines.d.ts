import * as React from 'react';
export interface GridLinesProps {
    axis?: 'x' | 'y';
    tickCount?: number;
    stroke?: string;
    dasharray?: string;
    className?: string;
}
export declare const GridLines: React.FC<GridLinesProps>;
export default GridLines;
