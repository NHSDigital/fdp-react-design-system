/**
 * Decide if the y-axis zero break should be shown and compute clamped slot and total reserved pixels.
 * - Preserves true y-domain (range-only lift)
 * - Clamps reserved space relative to inner height to avoid dominating short charts
 */
export declare function useZeroAxisBreak(yDomain: [number, number] | undefined, chartHeight: number | undefined, options?: {
    maxFraction?: number;
}): {
    readonly show: boolean;
    readonly slotPx: number;
    readonly totalReservedPx: number;
};
