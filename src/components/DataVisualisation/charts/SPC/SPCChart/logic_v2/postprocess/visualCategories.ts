import { ImprovementDirection, SpcRowV2, VariationIcon } from "../types";

// Engine-level visual categories (UI-agnostic). Keep separate from VariationIcon.
export enum SpcVisualCategory {
  Common = "Common",
  Improvement = "Improvement",
  Concern = "Concern",
  NoJudgement = "NoJudgement",
}

export type TrendVisualMode = "Ungated" | "Gated";

export interface VisualCategoryOptions {
  metricImprovement: ImprovementDirection;
  trendVisualMode?: TrendVisualMode; // default Ungated
  enableNeutralNoJudgement?: boolean; // default true
}

// Derive upAny/downAny flags from a row's directional rule flags
function sideFlags(row: SpcRowV2): { upAny: boolean; downAny: boolean } {
  const upAny = !!(row.singlePointUp || row.twoSigmaUp || row.shiftUp || row.trendUp);
  const downAny = !!(row.singlePointDown || row.twoSigmaDown || row.shiftDown || row.trendDown);
  return { upAny, downAny };
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
export function computeSpcVisualCategories(
  rows: ReadonlyArray<SpcRowV2>,
  opts: VisualCategoryOptions
): SpcVisualCategory[] {
  const metricImprovement = opts.metricImprovement;
  const trendVisualMode: TrendVisualMode = opts.trendVisualMode ?? "Ungated";
  const enableNeutral = opts.enableNeutralNoJudgement ?? true;
  
  return rows.map((row) => {
    if (!row || row.value == null || row.ghost) return SpcVisualCategory.Common;
    const { upAny, downAny } = sideFlags(row);

    // Conflict tie-break: prefer Improvement
    if (upAny && downAny) return SpcVisualCategory.Improvement;

    // Honour engine variation categories first
    switch (row.variationIcon) {
      case VariationIcon.ImprovementHigh:
      case VariationIcon.ImprovementLow:
        return SpcVisualCategory.Improvement;
      case VariationIcon.ConcernHigh:
      case VariationIcon.ConcernLow:
        return SpcVisualCategory.Concern;
      case VariationIcon.NeitherHigh:
      case VariationIcon.NeitherLow: {
        // Neither metric: treat as neutral special-cause; allow ungated directional colour
        if (
          trendVisualMode === "Ungated" &&
          metricImprovement !== ImprovementDirection.Neither
        ) {
          if (upAny && !downAny) {
            return metricImprovement === ImprovementDirection.Up
              ? SpcVisualCategory.Improvement
              : SpcVisualCategory.Concern;
          }
          if (downAny && !upAny) {
            return metricImprovement === ImprovementDirection.Down
              ? SpcVisualCategory.Improvement
              : SpcVisualCategory.Concern;
          }
        }
        return enableNeutral ? SpcVisualCategory.NoJudgement : SpcVisualCategory.Common;
      }
      default:
        return SpcVisualCategory.Common;
    }
  });
}

export default { computeSpcVisualCategories, SpcVisualCategory };
