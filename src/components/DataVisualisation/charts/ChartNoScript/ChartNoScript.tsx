import * as React from 'react';
import clsx from 'clsx';
import '../../DataVisualisation.scss';
import { default as Table } from '../../../Tables/Table';
import type { TableProps } from '../../../Tables/Table.types';

export interface ChartNoScriptProps {
  /** Accessible title for the chart (mirrors ChartContainer usage) */
  title: string;
  /** Short description or summary of what the chart shows */
  description?: string;
  /** Source string (optional) */
  source?: string;
  /** Data table fallback props (passed to internal Table component). Provide at least rows + head OR caption. */
  table: TableProps;
  /** Optional className for outer wrapper */
  className?: string;
  /** Optional id to stabilise aria attributes */
  id?: string;
  /** Message shown above table when scripting disabled / prior to hydration */
  message?: string;
  /** If true, always show fallback (useful for forcing SSR mode in tests) */
  forceFallback?: boolean;
}

/**
 * ChartNoScript provides an SSR-friendly static fallback for chart content.
 * It renders a figure with a table (data) wrapped in a <noscript> block for browsers
 * with JavaScript disabled. During hydration it can also reveal a progressive
 * enhancement message until the real interactive chart mounts.
 * Usage notes:
 * - Pass structured data via `table` (TableProps). For responsive stacking, set `responsive: true`.
 * - For panel styling, include `panel: true` and optional `panelClasses` inside `table` prop.
 * - After your interactive chart hydrates, add the class `.fdp-chart--enhanced` to the wrapping figure
 *   (or an ancestor) to hide the static fallback table (`[data-fallback-table]`).
 */
export const ChartNoScript: React.FC<ChartNoScriptProps> = ({
  title,
  description,
  source,
  table,
  className,
  id,
  message = 'Interactive chart loading…',
  forceFallback = false
}) => {
  const figureId = React.useId();
  const resolvedId = id || figureId;
  const descId = description ? `${resolvedId}-desc` : undefined;
  const sourceId = source ? `${resolvedId}-src` : undefined;

  // We rely on absence of window during SSR. forceFallback allows tests to simulate.
  const isHydrated = typeof window !== 'undefined' && !forceFallback;

  return (
    <figure
      id={resolvedId}
      className={clsx('fdp-chart fdp-chart--noscript', className)}
      aria-labelledby={`${resolvedId}-title`}
      aria-describedby={clsx(descId, sourceId)}
      data-component="ChartNoScript"
    >
      <header className="fdp-chart__header">
        <h3 id={`${resolvedId}-title`} className="fdp-chart__title">{title}</h3>
      </header>
      {description && (
        <p id={descId} className="fdp-chart__description">{description}</p>
      )}
      {/* Progressive enhancement message (hidden after hydration handled by caller) */}
      {!isHydrated && (
        <div className="fdp-chart__loading" role="status" aria-live="polite">{message}</div>
      )}
      <div className="fdp-chart__fallback" role="group" aria-label={title}>
        {/* noscript ensures content visible with JS disabled */}
        <noscript>
          <div className="fdp-chart__noscript-wrapper">
            <Table {...table} />
          </div>
        </noscript>
        {/* Also render table immediately for SSR for SEO / immediate access; hide via CSS when interactive chart replaces */}
        <div className="fdp-chart__table" data-fallback-table>
          <Table {...table} />
        </div>
      </div>
      {(source) && (
        <figcaption className="fdp-chart__caption">
          {source && (
            <small id={sourceId} className="fdp-chart__source">Source: {source}</small>
          )}
        </figcaption>
      )}
    </figure>
  );
};

export default ChartNoScript;
