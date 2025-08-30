import * as React from 'react';
import '../../DataVisualisation.scss';
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
export declare const MetricCard: React.FC<MetricCardProps>;
export default MetricCard;
