import { SPCVariationIcon, SPCAssuranceIcon, AssuranceResult, Direction } from "../../icons";
import type { EngineRowUI } from "../SPCChart.types";
import { ImprovementDirection, VariationIcon, AssuranceIcon } from "../types";
import { SpcEmbeddedIconVariant } from "../SPCChart.constants";
import { VariationIcon as V2VariationIcon } from "../logic_v2/types";

export function buildEmbeddedIcon(args: {
  show: boolean;
  rowsForUi: EngineRowUI[] | null;
  minPoints?: number | null;
  metricImprovement: ImprovementDirection;
  variant: SpcEmbeddedIconVariant;
  runLength?: number;
}) {
  const { show, rowsForUi, minPoints, metricImprovement, variant, runLength } = args;
  if (!show || !rowsForUi?.length) return null;

  const engineRows = rowsForUi as EngineRowUI[];
  const min = typeof minPoints === "number" && !isNaN(minPoints) ? minPoints : 13;
  const nonGhostCount = engineRows.filter((r) => !r.data.ghost && r.data.value != null).length;
  if (nonGhostCount < min) return null;

  // find last non-ghost data row
  let lastIdx = -1;
  for (let i = engineRows.length - 1; i >= 0; i--) {
    const r = engineRows[i];
    if (r && r.data.value != null && !r.data.ghost) {
      lastIdx = i;
      break;
    }
  }
  if (lastIdx === -1) return null;
  const lastRow = engineRows[lastIdx];

  const variation = lastRow.classification?.variation as VariationIcon | undefined;
  const assuranceRaw = lastRow.classification?.assurance as AssuranceIcon | undefined;
  const hasNeutralSpecialCause =
    variation === VariationIcon.Neither && !!lastRow.classification?.neutralSpecialCauseValue;

  const assuranceRenderStatus: AssuranceResult =
    assuranceRaw === AssuranceIcon.Pass ? AssuranceResult.Pass :
    assuranceRaw === AssuranceIcon.Fail ? AssuranceResult.Fail :
    AssuranceResult.Uncertain;

  // Determine icon orientation (trend) for special neutral
  let trend: Direction | undefined = undefined;
  if (variation === VariationIcon.Suppressed) {
    const singleHigh = !!lastRow.rules.singlePoint.up;
    const singleLow = !!lastRow.rules.singlePoint.down;
    if (metricImprovement === ImprovementDirection.Up) {
      if (singleHigh) trend = Direction.Higher;
      else if (singleLow) trend = Direction.Lower;
    } else if (metricImprovement === ImprovementDirection.Down) {
      if (singleLow) trend = Direction.Lower;
      else if (singleHigh) trend = Direction.Higher;
    } else {
      trend = Direction.Higher;
    }
  } else if (variation === VariationIcon.Neither && hasNeutralSpecialCause) {
    const anyHighSide =
      lastRow.rules.singlePoint.up ||
      lastRow.rules.twoOfThree.up ||
      lastRow.rules.fourOfFive.up ||
      lastRow.rules.shift.up ||
      lastRow.rules.trend.up;
    const anyLowSide =
      lastRow.rules.singlePoint.down ||
      lastRow.rules.twoOfThree.down ||
      lastRow.rules.fourOfFive.down ||
      lastRow.rules.shift.down ||
      lastRow.rules.trend.down;
    if (anyHighSide && !anyLowSide) trend = Direction.Higher;
    else if (anyLowSide && !anyHighSide) trend = Direction.Lower;
    else trend = Direction.Higher;
  }

  // Polarity inferred for data attributes
  // Not currently used in rendering
  // Left as-is to mirror original SPCChart semantics
  const iconSize = 80;

  const highSideSignal =
    lastRow.rules.singlePoint.up ||
    lastRow.rules.twoOfThree.up ||
    lastRow.rules.fourOfFive.up ||
    lastRow.rules.shift.up ||
    lastRow.rules.trend.up;
  const lowSideSignal =
    lastRow.rules.singlePoint.down ||
    lastRow.rules.twoOfThree.down ||
    lastRow.rules.fourOfFive.down ||
    lastRow.rules.shift.down ||
    lastRow.rules.trend.down;

  // Map UI variation to engine variant for SPCVariationIcon payload
  let variationEngine: V2VariationIcon = V2VariationIcon.CommonCause;
  if (variation === VariationIcon.Improvement) variationEngine = V2VariationIcon.ImprovementHigh;
  else if (variation === VariationIcon.Concern) variationEngine = V2VariationIcon.ConcernHigh;
  else if (variation === VariationIcon.Neither) {
    if (hasNeutralSpecialCause) {
      if (trend === Direction.Lower || (lowSideSignal && !highSideSignal))
        variationEngine = V2VariationIcon.NeitherLow;
      else variationEngine = V2VariationIcon.NeitherHigh;
    } else {
      variationEngine = V2VariationIcon.CommonCause;
    }
  }

  return (
    <div key={`embedded-icon-${lastIdx}`} style={{ display: "flex", gap: 12, marginRight: 16 }}>
      <div className="fdp-spc-chart__embedded-icon" data-variation={String(variation)} data-trend={trend ? String(trend) : "none"} style={{ width: iconSize, height: iconSize }}>
        <SPCVariationIcon
          dropShadow={false}
          data={{
            variationIcon: variationEngine,
            improvementDirection: metricImprovement,
            specialCauseNeutral: hasNeutralSpecialCause,
            highSideSignal,
            lowSideSignal,
            ...(trend ? { trend } : {}),
          }}
          // Letter semantics remain parity with SPCChart
          letterMode={metricImprovement === ImprovementDirection.Neither ? "Direction" as any : "Polarity" as any}
          size={iconSize}
          variant={variant}
          runLength={variant === SpcEmbeddedIconVariant.TriangleWithRun ? runLength : undefined}
        />
      </div>
      <div className="fdp-spc-chart__embedded-assurance-icon" data-assurance={String(assuranceRaw)} style={{ width: iconSize, height: iconSize }}>
        <SPCAssuranceIcon status={assuranceRenderStatus} size={iconSize} dropShadow={false} />
      </div>
    </div>
  );
}
