import * as React from 'react';
import LineChart, { type LineChartProps, type LineSeries } from '../LineChart/LineChart';
import Legend, { type LegendProps, type LegendItem } from '../Legend/Legend';
import { assignSeriesColors } from '../../utils/colors';

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
export const FilterableLineChart: React.FC<FilterableLineChartProps> = ({
  series,
  legendPosition = 'top',
  initialHiddenIds = [],
  hiddenIds,
  onHiddenChange,
  legendProps,
  assignColors = true,
  palette = 'categorical',
  ...lineChartProps
}) => {
  const coloured = React.useMemo(() => assignColors ? assignSeriesColors(series, { palette }) : series, [series, assignColors, palette]);
  const controlled = hiddenIds !== undefined;
  const [internalHidden, setInternalHidden] = React.useState<Set<string>>(new Set(initialHiddenIds));
  const hiddenSet = controlled ? new Set(hiddenIds) : internalHidden;
  const visibleSeries = React.useMemo(() => coloured.filter(s => !hiddenSet.has(s.id)), [coloured, hiddenSet]);

  const handleVisibilityChange = React.useCallback((_visibleIds: string[], nextHiddenIds: string[]) => {
    if (!controlled) setInternalHidden(new Set(nextHiddenIds));
    const visibleIds = coloured.filter(s => !nextHiddenIds.includes(s.id)).map(s => s.id);
    onHiddenChange?.(nextHiddenIds, visibleIds);
  }, [controlled, coloured, onHiddenChange]);

  const legendItems: LegendItem[] = React.useMemo(() => coloured.map(s => ({ id: s.id, label: s.label || s.id, color: s.color })), [coloured]);

  const chartEl = <LineChart {...lineChartProps} series={visibleSeries} palette={palette} />;
  const legendEl = (
    <Legend
      {...legendProps}
      palette={palette}
      items={legendItems}
      interactive
      hiddenIds={Array.from(hiddenSet)}
      onVisibilityChange={handleVisibilityChange}
    />
  );
  return (
    <div className="fdp-filterable-line-chart">
      {legendPosition === 'top' && legendEl}
      {chartEl}
      {legendPosition === 'bottom' && legendEl}
    </div>
  );
};

export default FilterableLineChart;
