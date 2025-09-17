import { ImprovementDirection, SpcRowV2 } from "../types";
import { SpcVisualCategory } from "./visualCategories";
export type BoundaryWindowsMode = "Disabled" | "RecalcCrossing";
export interface BoundaryWindowsOptions {
    mode?: BoundaryWindowsMode;
    preWindow?: number;
    postWindow?: number;
    /**
     * Controls the polarity of the pre-window category relative to the post-window.
     * - "Opposite" (default): pre-window uses the opposite category of post-window (contrast around boundary)
     * - "Same": pre-window uses the same category as post-window (uniform window around boundary)
     */
    prePolarity?: "Opposite" | "Same";
    /**
     * Optional explicit boundary indices to use instead of auto-detecting via partitionId changes.
     * Each index should correspond to the first point of a new partition (i.e., the baseline-marked row).
     */
    boundaryIndices?: number[];
}
/**
 * Compute visual categories with optional boundary-aware post-classification adjustments.
 *
 * Behaviour (RecalcCrossing):
 * - Detect each partition boundary (partitionId changes).
 * - Compute mean delta: first non-null mean in new partition minus last non-null mean in previous partition.
 * - Determine favourable direction based on metricImprovement (Up -> delta>0, Down -> delta<0).
 * - Apply small windows around the boundary:
 *   - postWindow points [boundary .. boundary+postWindow-1]: set to Improvement if favourable else Concern
 *   - preWindow points [boundary-preWindow .. boundary-1]: set to the opposite category
 * - Never override existing Improvement/Concern categories from base computation; only upgrade
 *   Common/NoJudgement into the window categories.
 * - If metricImprovement === Neither, or either side has no eligible mean, no adjustments are applied for that boundary.
 */
export declare function computeBoundaryWindowCategories(rows: ReadonlyArray<SpcRowV2>, metricImprovement: ImprovementDirection, options?: BoundaryWindowsOptions): SpcVisualCategory[];
declare const _default: {
    computeBoundaryWindowCategories: typeof computeBoundaryWindowCategories;
};
export default _default;
