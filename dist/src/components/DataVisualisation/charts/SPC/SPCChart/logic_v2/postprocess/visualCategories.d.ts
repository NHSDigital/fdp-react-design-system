import { ImprovementDirection, SpcRowV2 } from "../types";
export declare enum SpcVisualCategory {
    Common = "Common",
    Improvement = "Improvement",
    Concern = "Concern",
    NoJudgement = "NoJudgement"
}
export type TrendVisualMode = "Ungated" | "Gated";
export interface VisualCategoryOptions {
    metricImprovement: ImprovementDirection;
    trendVisualMode?: TrendVisualMode;
    enableNeutralNoJudgement?: boolean;
}
/**
 * Compute per-point visual categories from engine rows.
 *
 * Rules
 * - If both upAny and downAny → Improvement (prefer improvement in conflict)
 * - Else honour engine VariationIcon for improvement/concern
 * - Else when VariationIcon is a Neither* and any special-cause fired:
 *   - Ungated: colour directionally by metricImprovement and side
 *   - Otherwise: NoJudgement when enabled
 * - Else Common
 */
export declare function computeSpcVisualCategories(rows: ReadonlyArray<SpcRowV2>, opts: VisualCategoryOptions): SpcVisualCategory[];
declare const _default: {
    computeSpcVisualCategories: typeof computeSpcVisualCategories;
    SpcVisualCategory: typeof SpcVisualCategory;
};
export default _default;
