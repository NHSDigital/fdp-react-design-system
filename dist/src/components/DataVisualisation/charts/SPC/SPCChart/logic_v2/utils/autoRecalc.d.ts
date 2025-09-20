import { ChartType, ImprovementDirection, SpcInputRowV2 } from "../types";
export type AutoRecalcArgsV2 = {
    metricImprovement: ImprovementDirection;
    chartType: ChartType;
    shiftLength?: number;
    deltaSigma?: number;
    minGap?: number;
};
/**
 * Compute the 0-based index in the original rows where a synthetic baseline should be inserted
 * based on a sustained favourable shift. XmR only; returns null for other chart types or when
 * insufficient evidence. Ghost and non-numeric values are ignored for windowing and MR.
 */
export declare function findAutoRecalcBaselineIndexV2(rows: ReadonlyArray<SpcInputRowV2>, args: AutoRecalcArgsV2): number | null;
/**
 * Returns a shallow-copied rows array with baseline=true at the computed index (if any).
 */
export declare function autoInsertBaselinesV2(rows: ReadonlyArray<SpcInputRowV2>, args: AutoRecalcArgsV2): SpcInputRowV2[];
