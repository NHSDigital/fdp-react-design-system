// Simple three‑state assurance enum
export enum AssuranceResult {
	Pass = "pass",
	Fail = "fail",
	Uncertain = "uncertain",
}

// Pull canonical SPC palette from engine logic (source of truth)
import { VARIATION_COLOR_TOKENS } from "../SPCChart/logic/spcDescriptors";

// Default colours aligned to variation icon palette
export const DEFAULT_COLOURS: Record<AssuranceResult, string> = {
	[AssuranceResult.Pass]: "#00B0F0", // blue
	[AssuranceResult.Fail]: "#E46C0A", // orange
	[AssuranceResult.Uncertain]: "#A6A6A6", // grey
};

// Default letters to show for each state
export const DEFAULT_LETTERS: Record<AssuranceResult, string> = {
	[AssuranceResult.Pass]: "P",
	[AssuranceResult.Fail]: "F",
	[AssuranceResult.Uncertain]: "?",
};

// Metric polarity tells us if "higher" is good or bad for interpretation text.
export enum MetricPolarity {
	HigherIsBetter = "higher_is_better",
	LowerIsBetter = "lower_is_better",
	ContextDependent = "context_dependent",
}

// Orientation / geometry (was TrendDirection / Layout earlier)
export enum Direction {
	Higher = "higher",
	Lower = "lower",
}

export enum VariationJudgement {
	Improving = "improving",
	Deteriorating = "deteriorating",
	No_Judgement = "no_judgement",
	None = "none",
}

export enum VariationState {
	SpecialCauseImproving = "special_cause_improving",
	SpecialCauseDeteriorating = "special_cause_deteriorating",
	CommonCause = "common_cause",
	SpecialCauseNoJudgement = "special_cause_no_judgement",
}

export interface VariationColourDef {
	hex: string;
	stroke?: string;
	fill?: string;
	label: string;
	description: string;
	text?: string;
	judgement?: VariationJudgement;
}

// Geometry constants (legacy 300x300 artboard)
export const ICON_VIEWBOX = "0 0 300 300";
export const ICON_SIZE = 300; // default px
export const ICON_CX = 150;
export const ICON_CY = 150;
export const ICON_R = 113.25;
export const POINT_RADIUS = 16;

// Base polygon path currently used for No Judgement glyph (points upward by default)
export const NO_JUDGEMENT_GLYPH_PATH =
	"M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42";

// Accessible text colour picker (simple luminance threshold)
const pickTextColour = (hex: string) => {
	const c = hex.replace("#", "");
	const r = parseInt(c.slice(0, 2), 16) / 255;
	const g = parseInt(c.slice(2, 4), 16) / 255;
	const b = parseInt(c.slice(4, 6), 16) / 255;
	const srgb = [r, g, b].map((v) =>
		v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
	);
	const L = 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
	return L < 0.55 ? "#ffffff" : "#212b32";
};

export const VARIATION_COLOURS: Record<VariationState, VariationColourDef> = {
	[VariationState.SpecialCauseDeteriorating]: {
		hex: VARIATION_COLOR_TOKENS.concern.hex,
		judgement: VariationJudgement.Deteriorating,
		label: "Special Cause (Deteriorating)",
		description:
			"Deteriorating variation detected (special cause) relative to baseline.",
	},
	[VariationState.SpecialCauseImproving]: {
		hex: VARIATION_COLOR_TOKENS.improvement.hex,
		judgement: VariationJudgement.Improving,
		label: "Special Cause (Improving)",
		description:
			"Improving variation detected (special cause) relative to baseline.",
	},
	[VariationState.CommonCause]: {
		hex: VARIATION_COLOR_TOKENS.neither.hex,
		judgement: VariationJudgement.None,
		label: "Common Cause",
		description: "Common cause variation only – no special cause detected.",
	},
	[VariationState.SpecialCauseNoJudgement]: {
		hex: VARIATION_COLOR_TOKENS.none.hex,
		judgement: VariationJudgement.No_Judgement,
		label: "Special Cause (No Judgement)",
		description:
			"Special cause detected without assigning improving/deteriorating judgement.",
	},
};

Object.values(VARIATION_COLOURS).forEach((def) => {
	if (!def.text) def.text = pickTextColour(def.hex);
});

export const getVariationColour = (state: VariationState) =>
	VARIATION_COLOURS[state];
export const getVariationTrend = (state: VariationState): VariationJudgement =>
	VARIATION_COLOURS[state].judgement || VariationJudgement.None;

export interface Point {
	cx: number;
	cy: number;
}

export const POINT_LAYOUTS = {
	special: {
		higher: [
			{ cx: 77.5, cy: 158.5 },
			{ cx: 114, cy: 175 },
			{ cx: 150.5, cy: 158.5 },
			{ cx: 188, cy: 125 },
			{ cx: 225, cy: 137 },
		],
		lower: [
			{ cx: 77.5, cy: 139.5 },
			{ cx: 114, cy: 124.5 },
			{ cx: 150.5, cy: 139.5 },
			{ cx: 188, cy: 175.5 },
			{ cx: 224.5, cy: 162 },
		],
	},
	common: [
		{ cx: 76.5, cy: 149.5 },
		{ cx: 113, cy: 179.5 },
		{ cx: 149.5, cy: 117 },
		{ cx: 187, cy: 171 },
		{ cx: 223.5, cy: 158 },
	],
} as const;

export function computePointPositions(
	state: VariationState,
	direction: Direction
): Point[] {
	let src;
	if (state === VariationState.CommonCause) src = POINT_LAYOUTS.common;
	else
		src =
			POINT_LAYOUTS.special[direction === Direction.Lower ? "lower" : "higher"];
	return src.map((p) => ({ ...p }));
}

// Narrow type for example payloads (matches derivation form accepted by SPCVariationIcon)
interface VariationExampleData {
	judgement: VariationJudgement;
	polarity: MetricPolarity;
	trend?: Direction; // only required for No_Judgement / None examples
}

export const variationExamples: {
	id: string;
	label: string;
	data: VariationExampleData;
}[] = [
	{
		id: "improve-higher",
		label: "Improving (Higher is Better) – Trend is Higher",
		data: {
			judgement: VariationJudgement.Improving,
			polarity: MetricPolarity.HigherIsBetter,
		},
	},
	{
		id: "improve-lower",
		label: "Improving (Lower is Better) – Trend is Lower",
		data: {
			judgement: VariationJudgement.Improving,
			polarity: MetricPolarity.LowerIsBetter,
		},
	},
	{
		id: "deteriorate-higher",
		label: "Deteriorating (Higher is Better) – Trend is Lower",
		data: {
			judgement: VariationJudgement.Deteriorating,
			polarity: MetricPolarity.HigherIsBetter,
		},
	},
	{
		id: "deteriorate-lower",
		label: "Deteriorating (Lower is Better) – Trend is Higher",
		data: {
			judgement: VariationJudgement.Deteriorating,
			polarity: MetricPolarity.LowerIsBetter,
		},
	},
	{
		id: "no-judgement-higher",
		label: "Special Cause (No Judgement) – Trend is Higher",
		data: {
			judgement: VariationJudgement.No_Judgement,
			polarity: MetricPolarity.ContextDependent,
			trend: Direction.Higher,
		},
	},
	{
		id: "no-judgement-lower",
		label: "Special Cause (No Judgement) – Lower",
		data: {
			judgement: VariationJudgement.No_Judgement,
			polarity: MetricPolarity.ContextDependent,
			trend: Direction.Lower,
		},
	},
	{
		id: "common-cause-higher",
		label: "Common Cause – Higher layout",
		data: {
			judgement: VariationJudgement.None,
			polarity: MetricPolarity.HigherIsBetter,
			trend: Direction.Higher,
		},
	},
	{
		id: "common-cause-lower",
		label: "Common Cause – Lower layout",
		data: {
			judgement: VariationJudgement.None,
			polarity: MetricPolarity.HigherIsBetter,
			trend: Direction.Lower,
		},
	},
];

export const assuranceExamples = [
	{
		id: "assurance-pass",
		label: "Assurance Pass",
		status: AssuranceResult.Pass,
	},
	{
		id: "assurance-fail",
		label: "Assurance Fail",
		status: AssuranceResult.Fail,
	},
	{
		id: "assurance-uncertain",
		label: "Assurance Uncertain",
		status: AssuranceResult.Uncertain,
	},
];

// Compatibility re-exports: canonical tokens & helpers live in SPCChart logic; re-export here for older imports
export { VARIATION_COLOR_TOKENS } from "../SPCChart/logic/spcDescriptors";
export {
	getVariationColorToken,
	getVariationColorHex,
} from "../SPCChart/logic/spcDescriptors";
export type { VariationIcon } from "../SPCChart/logic/spc";
