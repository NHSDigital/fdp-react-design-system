import * as React from 'react';
import { type LineChartProps, type LineSeries } from '../LineChart/LineChart';
import { type LegendProps } from '../Legend/Legend';
export interface FilterableLineChartProps extends Omit<LineChartProps, 'series'> {
    /** Raw input series (colours will be assigned for stability unless assignColors=false) */
    series: LineSeries[];
    /** Place legend above (default) or below the chart */
    legendPosition?: 'top' | 'bottom';
    /** Initial hidden ids (uncontrolled mode) */
    initialHiddenIds?: string[];
    /** Controlled hidden ids */
    hiddenIds?: string[];
    /** Callback when hidden set changes (visible provided for convenience) */
    onHiddenChange?: (hiddenIds: string[], visibleIds: string[]) => void;
    /** Merge props into the internal Legend (items/interactive/hiddenIds/onVisibilityChange managed internally) */
    legendProps?: Omit<LegendProps, 'items' | 'interactive' | 'hiddenIds' | 'onVisibilityChange'>;
    /** Assign stable colours automatically (default true). If false, existing series.color values used/fallback to palette index order. */
    assignColors?: boolean;
}
/** Convenience wrapper wiring an interactive Legend to a LineChart with built-in series filtering & stable colour assignment. */
export declare const FilterableLineChart: React.FC<FilterableLineChartProps>;
export default FilterableLineChart;
