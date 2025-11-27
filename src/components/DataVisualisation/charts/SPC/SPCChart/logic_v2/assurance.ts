import { AssuranceIcon, ChartType, ImprovementDirection, SpcRowV2 } from "./types";
import { isNumber } from "./utils";

export function computeAssuranceIconXmR(
	row: SpcRowV2,
	metricImprovement: ImprovementDirection,
	target: number | null | undefined
): AssuranceIcon {
	if (
		!isNumber(target) ||
		row.mean === null ||
		row.upperProcessLimit === null ||
		row.lowerProcessLimit === null
	)
		return AssuranceIcon.None;
	if (metricImprovement === ImprovementDirection.Up) {
		if (target <= row.lowerProcessLimit) return AssuranceIcon.Pass;
		if (target >= row.upperProcessLimit) return AssuranceIcon.Fail;
		return AssuranceIcon.HitOrMiss;
	}
	if (metricImprovement === ImprovementDirection.Down) {
		if (target >= row.upperProcessLimit) return AssuranceIcon.Pass;
		if (target <= row.lowerProcessLimit) return AssuranceIcon.Fail;
		return AssuranceIcon.HitOrMiss;
	}
	return AssuranceIcon.None;
}

// Parity-facing helper: Suppress assurance for T/G and delegate to XmR logic otherwise
export function computeAssuranceIcon(
	chartType: ChartType,
	row: SpcRowV2,
	metricImprovement: ImprovementDirection,
	target: number | null | undefined
): AssuranceIcon {
	if (chartType !== ChartType.XmR) return AssuranceIcon.None;
	return computeAssuranceIconXmR(row, metricImprovement, target);
}
