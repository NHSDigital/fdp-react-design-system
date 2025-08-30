import * as React from 'react';
import clsx from 'clsx';
import '../../DataVisualisation.scss';
import { SummaryCard } from '../../../SummaryCard';

export type MetricStatus = 'positive' | 'negative' | 'warning' | 'neutral';

export interface MetricDelta {
  /** Numeric change (positive, negative or zero). Sign used if direction not supplied. */
  value: number;
  /** Override auto direction (derived from value sign when omitted). */
  direction?: 'up' | 'down' | 'neutral';
  /** Optional accessible label (e.g. "+12% compared to last week"). Auto‑generated if omitted. */
  ariaLabel?: string;
  /** If true, invert meaning (e.g. lower is better) for auto aria text wording. */
  invert?: boolean;
  /** Treat value as percentage and append % sign in visual text (ariaLabel can still override). */
  isPercent?: boolean;
}

export interface MetricCardProps {
  /** Primary textual label (short) */
  label: string;
  /** Value to display (string or number). When number, valueFormatter can adjust. */
  value: string | number;
  /** Unit displayed inline after value (e.g. % or ms) */
  unit?: string;
  /** Optional delta / change indicator */
  delta?: MetricDelta;
  /** Visual status accent (maps to border / colour modifiers) */
  status?: MetricStatus;
  /** Optional little trend sparkline values (reserved – visualisation to follow) */
  trendData?: number[];
  /** Show skeleton / placeholder instead of value */
  loading?: boolean;
  /** Error message overrides normal value layout */
  error?: string;
  /** Format numeric value (before unit). Default: locale string */
  valueFormatter?: (n: number) => string;
  /** Custom class name */
  className?: string;
  /** Stable id (auto generated if omitted) */
  id?: string;
  /** Announce delta changes in live region (polite) */
  announceDelta?: boolean;
}

/**
 * MetricCard presents a headline KPI value with optional delta (change) and severity/status accent.
 * Accessibility:
 * - Wrapper uses role="group" with aria-labelledby referencing the label.
 * - Delta includes an aria-label conveying direction & magnitude; a live region announces updates.
 * - Colour alone isn't relied on: arrow + sign (+/−) supplied; neutral shows a dash.
 * Future:
 * - `trendData` will enable a miniature sparkline beneath or beside the value.
 */
export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  unit,
  delta,
  status = 'neutral',
  trendData,
  loading = false,
  error,
  valueFormatter,
  className,
  id,
  announceDelta = true
}) => {
  const internalId = React.useId();
  const baseId = id || internalId;
  const labelId = `${baseId}-label`;
  const valueId = `${baseId}-value`;
  const deltaId = `${baseId}-delta`;

  const isNumber = typeof value === 'number' && !Number.isNaN(value);
  const formattedValue = loading ? '—' : error ? '' : (isNumber ? (valueFormatter ? valueFormatter(value as number) : (value as number).toLocaleString()) : value);

  let deltaDirection: 'up' | 'down' | 'neutral' | undefined;
  let visualDelta = '';
  let deltaAria = '';
  if (delta && !loading && !error) {
    deltaDirection = delta.direction || (delta.value > 0 ? 'up' : delta.value < 0 ? 'down' : 'neutral');
    const absVal = Math.abs(delta.value);
    const signedDisplay = deltaDirection === 'up' ? `+${absVal}` : deltaDirection === 'down' ? `-${absVal}` : '0';
    const arrow = deltaDirection === 'up' ? '▲' : deltaDirection === 'down' ? '▼' : '–';
    const suffix = delta.isPercent ? '%' : '';
    visualDelta = `${arrow} ${signedDisplay}${suffix}`;
    if (delta.ariaLabel) {
      deltaAria = delta.ariaLabel;
    } else {
      const better = delta.invert ? (deltaDirection === 'down') : (deltaDirection === 'up');
      const dirWord = deltaDirection === 'neutral' ? 'no change' : deltaDirection === 'up' ? 'up' : 'down';
      deltaAria = `${dirWord} ${absVal}${suffix}${deltaDirection === 'neutral' ? '' : better ? ' (improvement)' : ' (worse)'}`;
    }
  }

  const summaryVariant = status === 'positive' ? 'success' : status === 'negative' ? 'error' : status === 'warning' ? 'warning' : undefined;
  // Build title + optional delta inline similar to SummaryCard title spacing
  const titleContent = (
    <>
      <span id={labelId}>{label}</span>
      {delta && !loading && !error && (
        <span
          id={deltaId}
          aria-label={deltaAria}
          className={clsx('nhs-fdp-metric-delta', deltaDirection && `nhs-fdp-metric-delta--${deltaDirection}`)}
          style={{ marginLeft: '0.5rem', fontSize: '0.75em', fontWeight: 500 }}
        >
          {visualDelta}
        </span>
      )}
    </>
  );

  // Subtitle becomes the formatted value (SummaryCard value style). Trend placeholder reserved.
  const subtitleContent = (
    <>
      <span id={valueId} className="nhs-fdp-metric-value">
        {formattedValue}{unit && !loading && !error && <span className="nhs-fdp-metric-unit">{unit}</span>}
      </span>
      {trendData && trendData.length > 0 && (
        <span className="nhs-fdp-metric-trend" aria-hidden="true" />
      )}
      {loading && <span className="nhs-fdp-metric-skeleton" aria-hidden="true" />}
      {error && <span className="nhs-fdp-metric-error" role="alert">{error}</span>}
      {announceDelta && delta && !delta.ariaLabel && !loading && !error && (
        <span className="fdp-visually-hidden" aria-live="polite">{deltaAria}</span>
      )}
    </>
  );

  return (
    <SummaryCard
      className={clsx('nhs-fdp-metric-card-wrapper', className)}
      variant={summaryVariant as any}
      title={titleContent as any}
      value={subtitleContent as any}
      data-component="MetricCard"
    />
  );
};

export default MetricCard;