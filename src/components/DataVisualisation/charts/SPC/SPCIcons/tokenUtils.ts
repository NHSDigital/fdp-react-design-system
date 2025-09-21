// Shared token lookup utilities for SPC icons.
let spcTokenRoot: Record<string, any> | null = null;
try {
	// Dynamic require to avoid breaking SSR if tokens file not present at runtime.
	// @ts-ignore - compiled artifact path resolved post-build
	const tokens = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json");
	spcTokenRoot = tokens?.color?.["data-viz"]?.spc || null;
} catch {
	// Swallow – fall back to provided colour fallbacks.
}

export const tokenColour = (key: string, fallback: string): string => {
	if (!spcTokenRoot) return fallback;
	const parts = key.split(".");
	let current: any = spcTokenRoot;
	for (const p of parts) {
		if (current == null) break;
		current = current[p];
	}
	const val = current;
	if (val == null) return fallback;
	if (typeof val === "string" || typeof val === "number") return String(val);
	if (val.$value != null) return String(val.$value);
	if (val.value != null) return String(val.value);
	return fallback;
};

export const getGradientOpacities = () => ({
	// Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
	start: tokenColour("gradient.stop.start-opacity", "0.12"),
	mid: tokenColour("gradient.stop.mid-opacity", "0.03"),
	end: tokenColour("gradient.stop.end-opacity", "0"),
	triStart: tokenColour(
		"gradient.stop.triangle-start-opacity",
		tokenColour("gradient.stop.start-opacity", "0.12")
	),
	triMid: tokenColour(
		"gradient.stop.triangle-mid-opacity",
		tokenColour("gradient.stop.mid-opacity", "0.03")
	),
	triEnd: tokenColour(
		"gradient.stop.triangle-end-opacity",
		tokenColour("gradient.stop.end-opacity", "0")
	),
});

// Centralised mapping from enums to token names and fallbacks to avoid scattered string literals
import { VariationIcon as UiVariationIcon } from "../SPCChart/types";
import { VariationState } from "./SPCConstants";

export const SPC_TOKEN_KEYS = {
	improvement: "improvement",
	concern: "concern",
	noJudgement: "no-judgement",
	common: "common-cause",
} as const;

export const SPC_FALLBACK_HEX = {
	improvement: "#00B0F0",
	concern: "#E46C0A",
	noJudgement: "#490092",
	common: "#A6A6A6",
} as const;

export const colourImprovement = () => tokenColour(SPC_TOKEN_KEYS.improvement, SPC_FALLBACK_HEX.improvement);
export const colourConcern = () => tokenColour(SPC_TOKEN_KEYS.concern, SPC_FALLBACK_HEX.concern);
export const colourNoJudgement = () => tokenColour(SPC_TOKEN_KEYS.noJudgement, SPC_FALLBACK_HEX.noJudgement);
export const colourCommon = () => tokenColour(SPC_TOKEN_KEYS.common, SPC_FALLBACK_HEX.common);

/** Map UI VariationIcon to token colour */
export function colourForSignal(icon: UiVariationIcon | null | undefined): string {
	switch (icon) {
		case UiVariationIcon.Improvement:
			return colourImprovement();
		case UiVariationIcon.Concern:
			return colourConcern();
		case UiVariationIcon.Neither:
		case UiVariationIcon.Suppressed:
		default:
			return colourCommon();
	}
}

/** Map series-level VariationState to token colour used for series strokes/bands */
export function colourForState(state: VariationState | null | undefined): string {
	switch (state) {
		case VariationState.SpecialCauseImproving:
			return colourImprovement();
		case VariationState.SpecialCauseDeteriorating:
			return colourConcern();
		case VariationState.SpecialCauseNoJudgement:
			return colourNoJudgement();
		case VariationState.CommonCause:
		default:
			return colourCommon();
	}
}

