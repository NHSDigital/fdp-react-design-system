import React from 'react';
/** Row shape accepted for prime direction summarisation. Only rowId and primeDirection are required. */
export interface PrimeDirectionRow {
    rowId: number;
    primeDirection?: string;
    primeRuleId?: string;
    primeRank?: number;
}
export interface PrimeDirectionSummaryProps {
    /** Full set of engine rows (SQL compat wrapper output). */
    rows: PrimeDirectionRow[];
    /** Text used when no primeDirection tagged rows exist. */
    emptyLabel?: string;
    /** Optional override for the accessible label prefix before the list. */
    label?: string;
    /** data-testid for testing */
    'data-testid'?: string;
    /** Inline style override (rare). */
    style?: React.CSSProperties;
}
/**
 * Compact presentational summary of rows carrying a primeDirection annotation.
 * Format: "rowIndex:Direction" comma separated; falls back to `emptyLabel` (default 'none').
 */
export declare const PrimeDirectionSummary: React.FC<PrimeDirectionSummaryProps>;
export default PrimeDirectionSummary;
