import * as React from 'react';
import { Tabs } from '../../../Tabs/Tabs';
import { Button } from '../../../Button';
import type { TabItem } from '../../../Tabs/Tabs.types';
import { ChartContainer, type ChartContainerProps, type LineSeries } from '../../index';
import Table from '../../../Tables/Table';

export interface ChartWithTableTabsProps extends Omit<ChartContainerProps, 'children' | 'tabularData' | 'showTableToggle'> {
  /** The chart element to render */
  chart: React.ReactNode;
  /** Accessible data table (required for tabs; if omitted tabs are disabled) */
  table?: React.ReactNode;
  /** Provide line series for auto table generation when table not manually supplied */
  autoTableFromSeries?: LineSeries[];
  /** Alignment for auto-generated (and optional consumer provided) table columns.
   * Provide an array matching column order (including Date/time column if auto generated).
   * Values: 'left' | 'center' | 'right'. Missing entries default to 'left'.
   */
  columnAlign?: Array<'left' | 'center' | 'right'>;
  /** Enable CSV download button for auto-generated table */
  enableDownload?: boolean;
  /** Override default generated filename (without extension) */
  downloadFilename?: string;
  /** Label for the chart tab */
  chartTabLabel?: string;
  /** Label for the table tab */
  tableTabLabel?: string;
  /** Start on table instead of chart */
  initialView?: 'chart' | 'table';
  /** Disable tabs and render only the chart (ignores table) */
  disableTabs?: boolean;
  /** Force hide the table even if provided (e.g. embed contexts) */
  hideTable?: boolean;
  /** Pass extra tab items (appended after built-ins) */
  additionalTabs?: TabItem[];
  /** Callback when active tab changes */
  onViewChange?: (view: 'chart' | 'table' | string) => void;
}

/**
 * Wrapper providing NHS/GDS style accessible fallback: a tabset switching between chart and underlying data table.
 * Falls back to a single chart view when table not supplied or tabs disabled.
 */
export const ChartWithTableTabs: React.FC<ChartWithTableTabsProps> = ({
  chart,
  table,
  autoTableFromSeries,
  columnAlign,
  enableDownload = false,
  downloadFilename,
  chartTabLabel = 'Chart',
  tableTabLabel = 'Data table',
  initialView = 'chart',
  disableTabs = false,
  hideTable = false,
  additionalTabs,
  onViewChange,
  title,
  description,
  source,
  width,
  height,
  className,
  id,
  initiallyShowTable,
  ...restContainer
}) => {
  let resolvedTable = table;
  if (!resolvedTable && autoTableFromSeries && autoTableFromSeries.length > 0 && !hideTable) {
  // All columns forced left-aligned (colAlign no longer needed)

    // Build multi-series table: first column Date, subsequent per series
    const heads = [
      { text: 'Date', classes: 'nhsuk-table__header--align-left' },
      ...autoTableFromSeries.map((s) => ({
        text: s.label || s.id,
        classes: 'nhsuk-table__header--align-left'
      }))
    ];

    // Assume all series share x domain; use longest series for rows
    const longest = autoTableFromSeries.reduce((a, b) => (b.data.length > a.data.length ? b : a), autoTableFromSeries[0]);

    const rows = longest.data.map((d, rowIdx) => {
      const dateCell = { text: new Date(d.x as any).toLocaleDateString(), classes: 'nhsuk-table__cell--align-left' };
      const seriesCells = autoTableFromSeries.map((s) => {
        const point = s.data[rowIdx];
        const yVal = point ? point.y : undefined;
        return {
          text: yVal === undefined || yVal === null ? '–' : String(yVal),
          classes: 'nhsuk-table__cell--align-left',
          header: s.label || s.id
        };
      });
      return [dateCell, ...seriesCells];
    });

    const filenameBase = downloadFilename || (title ? title.replace(/[^a-z0-9]+/gi, '-').toLowerCase() : 'chart-data');
    const toCsv = () => {
      const headerLine = heads.map(h => '"' + (h.text || '') + '"').join(',');
      const body = rows.map(r => r.map(c => '"' + (c.text ?? '') + '"').join(',')).join('\n');
      return headerLine + '\n' + body + '\n';
    };
    const handleDownload = () => {
      // Guard for SSR/non-browser environments
      if (typeof window === 'undefined' || typeof document === 'undefined' || typeof URL === 'undefined' || typeof Blob === 'undefined') {
        // Silently no-op server-side; optionally log in dev
        if (process.env.NODE_ENV !== 'production') {
          console.warn('CSV download is only available in the browser environment.');
        }
        return;
      }
      try {
        const blob = new Blob([toCsv()], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = `${filenameBase}.csv`;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } catch (e) {
        console.warn('CSV download failed', e);
      }
    };
    resolvedTable = (
      <div className="fdp-chart__auto-table">
        {enableDownload && (
          <div className="fdp-chart__download-row">
            <Button variant="secondary" onClick={handleDownload} size="small">Download CSV</Button>
          </div>
        )}
        <Table
          caption={`${title} data`}
          head={heads}
          rows={rows}
          responsive
        />
      </div>
    );
  }

  const hasTable = !!resolvedTable && !hideTable;
  const shouldUseTabs = !disableTabs && hasTable;

  if (!shouldUseTabs) {
    return (
      <ChartContainer
        title={title}
        description={description}
        source={source}
        width={width}
        height={height}
        className={className}
        id={id}
        initiallyShowTable={false}
        {...restContainer}
      >
        {chart}
      </ChartContainer>
    );
  }

  const baseTabs: TabItem[] = [
    {
      id: 'chart',
      label: chartTabLabel,
      content: (
        <ChartContainer
          title={title}
          description={description}
          source={source}
          width={width}
          height={height}
          className={className}
          id={id}
          initiallyShowTable={false}
          {...restContainer}
        >
          {chart}
        </ChartContainer>
      )
    },
    {
      id: 'table',
      label: tableTabLabel,
      content: (
        <div className="fdp-chart-table-wrapper" aria-label={`${title} data table`}>
          {resolvedTable}
        </div>
      )
    }
  ];

  const items: TabItem[] = additionalTabs ? [...baseTabs, ...additionalTabs] : baseTabs;

  return (
    <div className="fdp-chart-tabs" data-chart-with-table>
      <Tabs
        items={items}
        defaultActiveTab={initialView}
        onTabChange={(tabId: string) => {
          if (tabId === 'chart' || tabId === 'table') {
            onViewChange?.(tabId);
          } else {
            onViewChange?.(tabId as any);
          }
        }}
      />
    </div>
  );
};

export default ChartWithTableTabs;
