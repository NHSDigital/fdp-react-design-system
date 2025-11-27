import * as React from 'react';
import { type ChartDimensions } from '../hooks/useChartDimensions';
export interface ChartRootProps {
    /** Explicit height (px). Width is responsive to parent unless set via style */
    height?: number;
    /** Override margins (top,right,bottom,left) */
    margin?: Partial<ChartDimensions['margin']>;
    /** Optional explicit width; otherwise flex/parent controlled */
    width?: number | string;
    className?: string;
    children: React.ReactNode;
    role?: string;
    ariaLabel?: string;
}
interface ChartContextValue extends ChartDimensions {
}
export declare function useChartContext(): ChartContextValue | null;
export declare const ChartRoot: React.FC<ChartRootProps>;
export default ChartRoot;
