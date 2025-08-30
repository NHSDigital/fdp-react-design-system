import * as React from 'react';
import LineChart, { type LineChartProps, type LineSeries } from './charts/LineChart/LineChart';
import Legend, { type LegendProps } from './charts/Legend/Legend';
import { assignSeriesColors } from './utils/colors';

export interface FilterableLineChartProps extends Omit<LineChartProps, 'series'> {
  series: LineSeries[];
  legendPosition?: 'top' | 'bottom';
  initialHiddenIds?: string[];
  hiddenIds?: string[];
  onHiddenChange?: (hiddenIds: string[], visibleIds: string[]) => void;
  legendProps?: Omit<LegendProps, 'items' | 'interactive' | 'hiddenIds' | 'onVisibilityChange'>;
  assignColors?: boolean;
}

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

  const legendItems = React.useMemo(() => coloured.map(s => ({ id: s.id, label: s.label || s.id, color: s.color })), [coloured]);

  const chartEl = <LineChart {...lineChartProps} series={visibleSeries} palette={palette} />;
  const legendEl = (
    <Legend
      {...legendProps}
      palette={palette}
      items={legendItems}
      interactive
      hiddenIds={Array.from(hiddenSet)}
      onVisibilityChange={(visible, hidden) => handleVisibilityChange(visible, hidden)}
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
