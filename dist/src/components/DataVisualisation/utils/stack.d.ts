/** Stacking utilities for area & bar charts.
 * Pure helpers so they can be unit tested without React.
 */
export interface StackInputDatum {
    x: Date | string | number;
    y: number;
}
export interface StackSeries<T extends StackInputDatum = StackInputDatum> {
    id: string;
    data: T[];
}
export type StackedDatum<T extends StackInputDatum = StackInputDatum> = T & {
    /** lower y (baseline) */ y0: number; /** upper y */
    y1: number;
};
export interface StackedSeries<T extends StackInputDatum = StackInputDatum> extends StackSeries<T> {
    stacked: StackedDatum<T>[];
    totalAtX?: (index: number) => number;
}
export interface StackOptions {
    /** Treat negative and positive separately (diverging) */
    separateNegative?: boolean;
    /** Fill gaps (missing x across series) with y=0 entries */
    normaliseDomains?: boolean;
    /** Optional custom key extractor for x grouping (stringify fallback) */
    keyFn?: (x: StackInputDatum['x']) => string;
}
/**
 * stackSeries – naive vertical stacking (simple sum accumulation).
 * Assumes all series share the same ordered x domain; can optionally normalise.
 */
export declare function stackSeries<T extends StackInputDatum = StackInputDatum>(series: StackSeries<T>[], opts?: StackOptions): StackedSeries<T>[];
/** Simple 100% normalisation (each x total -> 1). */
export declare function normaliseStack<T extends StackInputDatum = StackInputDatum>(stacked: StackedSeries<T>[]): StackedSeries<T>[];
