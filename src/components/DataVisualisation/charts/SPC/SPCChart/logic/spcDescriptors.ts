import { VariationIcon, AssuranceIcon, SpcRow } from "./spc";

// Stable identifiers for rule flags mapped from SpcRow boolean properties (enum for stronger typing)
export enum SpcRuleId {
	SinglePointAbove = 'singlePointAbove',
	SinglePointBelow = 'singlePointBelow',
	TwoOfThreeAbove = 'twoOfThreeAbove',
	TwoOfThreeBelow = 'twoOfThreeBelow',
	FourOfFiveAbove = 'fourOfFiveAbove',
	FourOfFiveBelow = 'fourOfFiveBelow',
	ShiftHigh = 'shiftHigh',
	ShiftLow = 'shiftLow',
	TrendIncreasing = 'trendIncreasing',
	TrendDecreasing = 'trendDecreasing'
}

export interface SpcRuleGlossaryEntry {
	/** Short label suitable for dense tooltip list */
	tooltip: string;
	/** Longer narration fragment (not full sentence) used when assembling live region text */
	narration: string;
}

	export const ruleGlossary: Record<SpcRuleId, SpcRuleGlossaryEntry> = {
		[SpcRuleId.SinglePointAbove]: {
		tooltip: "Single point above upper control limit",
		narration: "Single point beyond a control limit",
	},
		[SpcRuleId.SinglePointBelow]: {
		tooltip: "Single point below lower control limit",
		narration: "Single point beyond a control limit",
	},
		[SpcRuleId.TwoOfThreeAbove]: {
		tooltip: "Two of three points beyond +2σ",
		narration: "Two of three points beyond two sigma (same side)",
	},
		[SpcRuleId.TwoOfThreeBelow]: {
		tooltip: "Two of three points beyond -2σ",
		narration: "Two of three points beyond two sigma (same side)",
	},
		[SpcRuleId.FourOfFiveAbove]: {
		tooltip: "Four of five points beyond +1σ",
		narration: "Four of five points beyond one sigma (same side)",
	},
		[SpcRuleId.FourOfFiveBelow]: {
		tooltip: "Four of five points beyond -1σ",
		narration: "Four of five points beyond one sigma (same side)",
	},
		[SpcRuleId.ShiftHigh]: {
		tooltip: "Shift: run of points above centre line",
		narration: "Shift (run on one side of mean)",
	},
		[SpcRuleId.ShiftLow]: {
		tooltip: "Shift: run of points below centre line",
		narration: "Shift (run on one side of mean)",
	},
		[SpcRuleId.TrendIncreasing]: {
		tooltip: "Trend: consecutive increasing points",
		narration: "Trend (consecutive increases)",
	},
		[SpcRuleId.TrendDecreasing]: {
		tooltip: "Trend: consecutive decreasing points",
		narration: "Trend (consecutive decreases)",
	},
};

/** Extract the triggered rule identifiers for a given SPC row */
export function extractRuleIds(row: SpcRow | undefined | null): SpcRuleId[] {
	if (!row) return [];
	const ids: SpcRuleId[] = [];
	if (row.specialCauseSinglePointAbove) ids.push(SpcRuleId.SinglePointAbove);
	if (row.specialCauseSinglePointBelow) ids.push(SpcRuleId.SinglePointBelow);
	if (row.specialCauseTwoOfThreeAbove) ids.push(SpcRuleId.TwoOfThreeAbove);
	if (row.specialCauseTwoOfThreeBelow) ids.push(SpcRuleId.TwoOfThreeBelow);
	if (row.specialCauseFourOfFiveAbove) ids.push(SpcRuleId.FourOfFiveAbove);
	if (row.specialCauseFourOfFiveBelow) ids.push(SpcRuleId.FourOfFiveBelow);
	if (row.specialCauseShiftHigh) ids.push(SpcRuleId.ShiftHigh);
	if (row.specialCauseShiftLow) ids.push(SpcRuleId.ShiftLow);
	if (row.specialCauseTrendIncreasing) ids.push(SpcRuleId.TrendIncreasing);
	if (row.specialCauseTrendDecreasing) ids.push(SpcRuleId.TrendDecreasing);
	return ids;
}

/** Standardised human readable label for variation classification */
export function variationLabel(icon: VariationIcon | undefined): string | null {
	switch (icon) {
		case VariationIcon.Improvement:
			return "Improvement signal";
		case VariationIcon.Concern:
			return "Concern signal";
		case VariationIcon.Neither:
			return "Common cause variation";
		case VariationIcon.None:
			return null; // suppressed / not enough data
		default:
			return null;
	}
}

/** Human readable assurance (target) classification */
export function assuranceLabel(icon: AssuranceIcon | undefined): string | null {
	switch (icon) {
		case AssuranceIcon.Pass:
			return "Target met";
		case AssuranceIcon.Fail:
			return "Target not met";
		default:
			return null;
	}
}

/** Zone classification given mean + sigma + value */
export function zoneLabel(
	mean: number | null | undefined,
	sigma: number,
	value: number
): string | null {
	if (mean == null || !Number.isFinite(sigma) || sigma <= 0) return null;
	const z = Math.abs((value - mean) / sigma);
	if (z < 1) return "Within 1σ";
	if (z < 2) return "Between 1–2σ";
	if (z < 3) return "Between 2–3σ";
	return "Beyond 3σ";
}

// ------------------------- Shared visual tokens (source of truth) -------------------------
// Canonical mapping of engine variation icons -> CSS token (with fallback hex).
export const VARIATION_COLOR_TOKENS: Record<
	VariationIcon,
	{ token: string; hex: string }
> = {
	improvement: {
		token: "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)",
		hex: "#00B0F0",
	},
	concern: {
		token: "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)",
		hex: "#E46C0A",
	},
	none: {
		token: "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)",
		hex: "#490092",
	},
	neither: {
		token: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
		hex: "#A6A6A6",
	},
};

export function getVariationColorToken(
	icon: VariationIcon | undefined
): string {
	if (!icon) return VARIATION_COLOR_TOKENS.neither.token;
	return (
		VARIATION_COLOR_TOKENS[icon]?.token ?? VARIATION_COLOR_TOKENS.neither.token
	);
}

export function getVariationColorHex(icon: VariationIcon | undefined): string {
	if (!icon) return VARIATION_COLOR_TOKENS.neither.hex;
	return (
		VARIATION_COLOR_TOKENS[icon]?.hex ?? VARIATION_COLOR_TOKENS.neither.hex
	);
}
