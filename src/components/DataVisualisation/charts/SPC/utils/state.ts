// Shared SPC state helpers to keep mapping logic DRY across hooks, stories, and components.
// Publicly exported via the SPC barrel for reuse by consumers (e.g., dashboards) without deep imports.

import { VariationState } from "../SPCIcons/SPCConstants";
import { VariationIcon } from "../engine";

/** Map engine VariationIcon to VariationState used by icons and narration */
export function mapIconToVariation(
	icon?: VariationIcon | null
): VariationState | null {
	switch (icon) {
		case VariationIcon.ImprovementHigh:
		case VariationIcon.ImprovementLow:
			return VariationState.SpecialCauseImproving;
		case VariationIcon.ConcernHigh:
		case VariationIcon.ConcernLow:
			return VariationState.SpecialCauseDeteriorating;
		case VariationIcon.NeitherHigh:
		case VariationIcon.NeitherLow:
			return VariationState.SpecialCauseNoJudgement;
		case VariationIcon.CommonCause:
			return VariationState.CommonCause;
		default:
			return null;
	}
}

/** Whether a VariationIcon represents a special-cause data point */
export function isSpecialCauseIcon(icon?: VariationIcon | null): boolean {
	return (
		icon === VariationIcon.ImprovementHigh ||
		icon === VariationIcon.ImprovementLow ||
		icon === VariationIcon.ConcernHigh ||
		icon === VariationIcon.ConcernLow ||
		icon === VariationIcon.NeitherHigh ||
		icon === VariationIcon.NeitherLow
	);
}
