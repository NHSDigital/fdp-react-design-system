import * as React from 'react';
import '../DataVisualisation.scss';
export interface ChartContainerProps {
    title: string;
    description?: string;
    source?: string;
    children: React.ReactNode;
    width?: number | string;
    height?: number;
    className?: string;
    id?: string;
    tabularData?: React.ReactNode;
    showTableToggle?: boolean;
    onToggleTable?: () => void;
    initiallyShowTable?: boolean;
}
/**
 * Accessible chart wrapper providing figure/figcaption semantics and optional
 * table toggle pattern for data transparency.
 */
export declare const ChartContainer: React.FC<ChartContainerProps>;
export default ChartContainer;
