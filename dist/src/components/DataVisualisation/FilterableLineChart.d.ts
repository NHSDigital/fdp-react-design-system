import * as React from 'react';
import { type LineChartProps, type LineSeries } from './charts/LineChart/LineChart';
import { type LegendProps } from './charts/Legend/Legend';
export interface FilterableLineChartProps extends Omit<LineChartProps, 'series'> {
    series: LineSeries[];
    legendPosition?: 'top' | 'bottom';
    initialHiddenIds?: string[];
    hiddenIds?: string[];
    onHiddenChange?: (hiddenIds: string[], visibleIds: string[]) => void;
    legendProps?: Omit<LegendProps, 'items' | 'interactive' | 'hiddenIds' | 'onVisibilityChange'>;
    assignColors?: boolean;
}
export declare const FilterableLineChart: React.FC<FilterableLineChartProps>;
export default FilterableLineChart;
