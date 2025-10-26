export type RunRuleEvent = {
    type: 'shift' | 'trendUp' | 'trendDown';
    index: number;
};
/**
 * Very small, provisional run-chart rule hints.
 * - shift: N consecutive points on the same side of the overall median (default N=6)
 * - trendUp / trendDown: N strictly increasing / decreasing consecutive points (default N=6)
 * Returns the index of the last point in each detected window to place a marker near the event.
 */
export declare function detectRunRuleEvents(values: number[], opts?: {
    shiftLen?: number;
    trendLen?: number;
}): RunRuleEvent[];
