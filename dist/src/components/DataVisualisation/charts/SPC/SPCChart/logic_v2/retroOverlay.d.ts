import { ImprovementDirection, SpcRowV2, VariationIcon } from "./types";
export interface RetroOverlayOptions {
    enableShift?: boolean;
}
/**
 * Compute a "teaching view" overlay that retro-colours pre-eligibility points
 * that sit on the same side of the mean as a later confirmed shift run.
 *
 * Notes and constraints (to preserve SQL parity):
 * - Engine rows remain unchanged; callers should only use these icons for
 *   visuals. The default engine `variationIcon` is still the source of truth
 *   for parity and testing.
 * - Only shift runs are backfilled; single-point and two-of-three are not
 *   retro-coloured.
 * - Backfill stops at the first eligible row in the partition; we never paint
 *   into rows where the engine would not have had limits yet.
 */
export declare function computeRetroShiftOverlay(rows: SpcRowV2[], metricImprovement: ImprovementDirection, opts?: RetroOverlayOptions): Array<VariationIcon | null>;
declare const _default: {
    computeRetroShiftOverlay: typeof computeRetroShiftOverlay;
};
export default _default;
