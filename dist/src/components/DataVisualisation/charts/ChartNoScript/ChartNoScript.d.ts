import * as React from 'react';
import '../../DataVisualisation.scss';
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
export declare const ChartNoScript: React.FC<ChartNoScriptProps>;
export default ChartNoScript;
