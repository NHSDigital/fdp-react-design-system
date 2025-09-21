import { ChartType, ImprovementDirection, SpcVisualCategory } from "../engine";
import { VariationIcon as UiVariationIcon } from "../SPCChart/types";
import {
	ChartType as V2ChartType,
	ImprovementDirection as V2ImprovementDirection,
	SpcSettingsV26a as V2Settings,
} from "../SPCChart/logic_v2/types";
import { DEFAULT_MIN_POINTS } from "./constants";

// Typed point signal values based on UI-level VariationIcon enum (subset only)
export type PointSignal =
	| UiVariationIcon.Improvement
	| UiVariationIcon.Concern
	| UiVariationIcon.Neither;

export function visualsToPointSignals(
	visuals: SpcVisualCategory[] | undefined
): Array<PointSignal | null> | undefined {
	if (!visuals || visuals.length === 0) return undefined;
	return visuals.map((c) => {
		switch (c) {
			case SpcVisualCategory.Improvement:
				return UiVariationIcon.Improvement;
			case SpcVisualCategory.Concern:
				return UiVariationIcon.Concern;
			case SpcVisualCategory.NoJudgement:
				return UiVariationIcon.Neither;
			default:
				return null;
		}
	});
}

export function visualsToNeutralFlags(
	visuals: SpcVisualCategory[] | undefined
) {
	if (!visuals || visuals.length === 0) return undefined;
	return visuals.map((c) => c === SpcVisualCategory.NoJudgement);
}

export function toV2Enums(
	chartType: ChartType,
	metricImprovement: ImprovementDirection
) {
	const ct: V2ChartType =
		chartType === ChartType.G
			? V2ChartType.G
			: chartType === ChartType.T
				? V2ChartType.T
				: V2ChartType.XmR;
	const dir: V2ImprovementDirection =
		metricImprovement === ImprovementDirection.Up
			? V2ImprovementDirection.Up
			: metricImprovement === ImprovementDirection.Down
				? V2ImprovementDirection.Down
				: V2ImprovementDirection.Neither;
	return { chartType: ct, metricImprovement: dir };
}

export function toV2Settings(
	effEngineSettings: Partial<V2Settings> | undefined,
	rowsInputMaybeAuto: Array<{
		value?: number | null | undefined;
		ghost?: boolean;
	}>,
	visualsEngineSettings?: Partial<V2Settings>
): Partial<V2Settings> | undefined {
	const min =
		typeof effEngineSettings?.minimumPoints === "number" &&
		!isNaN(effEngineSettings!.minimumPoints!)
			? effEngineSettings!.minimumPoints!
			: DEFAULT_MIN_POINTS;
	const out: Partial<V2Settings> = { minimumPoints: min };
	const eligibleCount = rowsInputMaybeAuto.filter(
		(r) => !r.ghost && typeof r.value === "number"
	).length;
	if (eligibleCount >= min) (out as any).chartLevelEligibility = true;
	if (effEngineSettings?.enableFourOfFiveRule != null)
		(out as any).enableFourOfFiveRule =
			!!effEngineSettings.enableFourOfFiveRule;
	if (visualsEngineSettings) Object.assign(out, visualsEngineSettings);
	return Object.keys(out).length ? out : undefined;
}
