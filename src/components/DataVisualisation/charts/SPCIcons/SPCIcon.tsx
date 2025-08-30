import { useId, useMemo } from "react";
import {
	computePointPositions,
	Direction,
	getVariationColour,
	getVariationTrend,
	MetricPolarity,
	Point,
	VariationJudgement,
	VariationState,
} from "./SPCConstants";
// Import VariationIcon enum from SPC engine to permit direct usage with icon component.
// Updated: point to advanced SPC engine (legacy ../../xmr/spc path removed during refactor)
import { VariationIcon as SpcEngineVariationIcon } from "../SPCChart/logic/spc";

// Friendly alias exported for consumers who want to pass just the engine icon key
export type SpcEngineIconPayload = { variationIcon: SpcEngineVariationIcon; trend?: Direction; polarity?: MetricPolarity };

// --- Variation colour system -------------------------------------------------
// Primary brand‑aligned palette for SPC variation states.
// stroke: ring / outline; fill: interior glyph colour. In most cases we use the same.
// You can extend each entry later with lighter/darker ramps if needed for backgrounds.
export interface VariationColourDef {
	hex: string; // canonical colour
	stroke?: string; // optional override for stroke (defaults to hex)
	fill?: string; // optional override for fill (defaults to hex)
	label: string; // human readable label
	description: string; // semantic description for tooltips / a11y
	text?: string; // recommended contrasting text colour
	judgement?: VariationJudgement; // variation judgement
}

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
		hex: "#E46C0A",
		judgement: VariationJudgement.Deteriorating,
		label: "Special Cause (Deteriorating)",
		description:
			"Deteriorating variation detected (special cause) relative to baseline.",
	},
	[VariationState.SpecialCauseImproving]: {
		hex: "#00B0F0",
		judgement: VariationJudgement.Improving,
		label: "Special Cause (Improving)",
		description:
			"Improving variation detected (special cause) relative to baseline.",
	},
	[VariationState.CommonCause]: {
		hex: "#A6A6A6",
		judgement: VariationJudgement.None,
		label: "Common Cause",
		description: "Common cause variation only – no special cause detected.",
	},
	[VariationState.SpecialCauseNoJudgement]: {
		hex: "#490092",
		judgement: VariationJudgement.No_Judgement,
		label: "Special Cause (No Judgement)",
		description:
			"Special cause detected without assigning improving/deteriorating judgement.",
	},
};

// Augment each with contrast text colour lazily
Object.values(VARIATION_COLOURS).forEach((def) => {
	if (!def.text) def.text = pickTextColour(def.hex);
});

// --- Point layout system ----------------------------------------------------
// We render five recent data points; their vertical positions vary with state + direction
// Coordinates are in icon space (300x300). We preserve r=16.
// Chosen layouts (provided examples):
// - special cause (current "higher" pattern)       : existing original coordinates
// - special cause ("lower" pattern)                : alternate set provided
// - common cause (neutral variation)               : all grey positions provided
// - special cause no judgement uses direction to choose between higher/lower layout

/**
 * Payload driving the variation icon.
 *
 * The `state` determines the SPC classification (special cause improving/deteriorating,
 * common cause or special cause with no judgement) and therefore the colour.
 * The optional `trend/direction` explicitly controls whether the variation is moving
 * higher or lower relative to the baseline. This allows all eight logical
 * permutations (state × trend) to be specified directly. When omitted,
 * a trend will be derived for special cause improving/deteriorating states
 * only; other states will default to 'higher'.
 *
 * `polarity` is retained for alt‑text copy but has no effect on colour or
 * letter rendering.
 */
export interface SpcVariationPayload {
	state: VariationState;
	trend?: Direction; // explicitly choose geometry (higher/lower)
	polarity?: MetricPolarity;
}

// New: direct engine variation icon payload (maps engine-level VariationIcon enum to a state)
export interface SpcVariationEngineIconPayload {
	variationIcon: SpcEngineVariationIcon;
	trend?: Direction; // required for neutral/none if you want lower layout
	polarity?: MetricPolarity;
}

/**
 * V2 (derivable) payload – supply semantic "what we know" and let the icon infer "how to draw".
 *
 * Inputs
 *  - judgement: SPC variation judgement at the most recent point.
 *      * improving        -> maps to VariationState.SpecialCauseImproving (special cause, positive)
 *      * deteriorating    -> maps to VariationState.SpecialCauseDeteriorating (special cause, negative)
 *      * no_judgement     -> maps to VariationState.SpecialCauseNoJudgement (special cause detected but cannot label direction)
 *      * none             -> maps to VariationState.CommonCause (no special cause)
 *  - polarity: MetricPolarity describing whether higher values are desirable, lower are desirable, or it is context dependent.
 *  - trend (optional): Explicit geometric direction (higher / lower). Only used / needed when the judgement itself does
 *    not imply a direction (no_judgement, none) OR when inference would be ambiguous (e.g. polarity context dependent).
 *
 * Derivation Logic (implemented in resolveStateAndLayout):
 *  1. State mapping is direct from judgement (see above).
 *  2. Direction inference:
 *      a. If judgement is Improving:
 *           - If polarity === LowerIsBetter, a reduction is desirable so the trend is considered Lower.
 *           - Otherwise (HigherIsBetter or ContextDependent), assume Higher.
 *      b. If judgement is Deteriorating:
 *           - If polarity === LowerIsBetter, an increase is undesirable -> direction inferred Higher.
 *           - Otherwise, inferred Lower.
 *      c. If judgement is No_Judgement or None:
 *           - We cannot infer reliably; use provided trend prop or fall back to Higher as a neutral default.
 *  3. Polarity is carried through for potential use in externally generated aria text / tooltips but does not
 *     currently alter colour once state is fixed (colour is keyed solely by final VariationState).
 *
 * Rendering Effects of Derived Values:
 *  - state selects the colour (ring, letter, special glyph) via getVariationColour(state).
 *  - direction selects which set of 5 point coordinates are used (higher vs lower layout) via computePointPositions.
 *  - letter (H / L) is only rendered when judgement is Improving or Deteriorating; it reflects the final direction.
 *  - SpecialCauseNoJudgement renders the purple arrow glyph; direction rotates / orients that glyph.
 *  - CommonCause (state = common cause) suppresses letter and arrow; all points render grey and the ring is grey.
 *  - Special cause states colour the last two data points; common cause keeps all points grey.
 *
 * When to Provide trend explicitly:
 *  - Always for judgement = No_Judgement or None (otherwise a default of Higher is applied which may misrepresent geometry).
 *  - Optionally for Improving/Deteriorating if you wish to override the inferred direction (rare; would make semantics inconsistent).
 *
 * Examples:
 *  { judgement: Improving, polarity: HigherIsBetter } -> state special_cause_improving, direction higher, letter H
 *  { judgement: Improving, polarity: LowerIsBetter }  -> state special_cause_improving, direction lower,  letter L
 *  { judgement: Deteriorating, polarity: HigherIsBetter } -> state special_cause_deteriorating, direction lower,  letter L
 *  { judgement: Deteriorating, polarity: LowerIsBetter }  -> state special_cause_deteriorating, direction higher, letter H
 *  { judgement: No_Judgement, polarity: HigherIsBetter, trend: Lower } -> state special_cause_no_judgement, direction lower, arrow rotated, no letter
 *  { judgement: None, polarity: ContextDependent, trend: Higher } -> state common_cause, direction higher, grey ring, no letter
 */
export interface SpcVariationDerivePayload {
	judgement: VariationJudgement;
	polarity: MetricPolarity;
	trend?: Direction; // required when judgement is no_judgement/none OR polarity is context_dependent
}

export type SpcVariationInput =
	| SpcVariationPayload
	| SpcVariationDerivePayload
	| SpcVariationParsimonious
	| SpcVariationEngineIconPayload;

/**
 * Strict, parsimonious V2 shape — requires orientation when judgement is neutral
 * or when polarity is context-dependent. This enforces compile-time clarity.
 */
export type SpcVariationParsimonious =
	| {
		judgement: VariationJudgement.Improving;
		polarity: MetricPolarity.HigherIsBetter | MetricPolarity.LowerIsBetter;
	  }
	| {
		judgement: VariationJudgement.Deteriorating;
		polarity: MetricPolarity.HigherIsBetter | MetricPolarity.LowerIsBetter;
	  }
	| {
		judgement: VariationJudgement.No_Judgement;
		polarity: MetricPolarity;
		trend: Direction;
	  }
	| {
		judgement: VariationJudgement.None;
		polarity: MetricPolarity;
		trend: Direction;
	  };

export interface SpcVariationAltIconProps extends SpcIconBaseProps {
	data: SpcVariationParsimonious;
}

/**
 * Normalise either V1 (state/layout) or V2 (judgement+polarity) into { state, layout, polarity } for rendering.
 */
const resolveStateAndLayout = (input: SpcVariationInput): {
	state: VariationState;
	direction: Direction;
	polarity: MetricPolarity;
} => {
	// Engine VariationIcon mapping support
	if ((input as SpcVariationEngineIconPayload).variationIcon !== undefined) {
		const eng = input as SpcVariationEngineIconPayload;
		const mapping: Record<SpcEngineVariationIcon, VariationState> = {
			[SpcEngineVariationIcon.Improvement]: VariationState.SpecialCauseImproving,
			[SpcEngineVariationIcon.Concern]: VariationState.SpecialCauseDeteriorating,
			[SpcEngineVariationIcon.Neither]: VariationState.CommonCause,
			[SpcEngineVariationIcon.None]: VariationState.SpecialCauseNoJudgement,
		};
		const state = mapping[eng.variationIcon];
		const direction = (eng.trend ?? (state === VariationState.SpecialCauseImproving
			? Direction.Higher
			: state === VariationState.SpecialCauseDeteriorating
			? Direction.Lower
			: Direction.Higher)) as Direction;
		return { state, direction, polarity: eng.polarity ?? MetricPolarity.ContextDependent };
	}
	// Legacy explicit state payload
	if ((input as SpcVariationPayload).state !== undefined) {
		const v1 = input as SpcVariationPayload;
		let inferred: Direction | undefined;
		if (v1.state === VariationState.SpecialCauseImproving) inferred = Direction.Higher;
		else if (v1.state === VariationState.SpecialCauseDeteriorating) inferred = Direction.Lower;
		const direction = (v1.trend ?? inferred ?? Direction.Higher) as Direction;
		return { state: v1.state, direction, polarity: v1.polarity ?? MetricPolarity.ContextDependent };
	}
	// Derivation payload based on judgement + polarity
	const v2 = input as SpcVariationDerivePayload;
	const map: Record<VariationJudgement, VariationState> = {
		[VariationJudgement.Improving]: VariationState.SpecialCauseImproving,
		[VariationJudgement.Deteriorating]: VariationState.SpecialCauseDeteriorating,
		[VariationJudgement.No_Judgement]: VariationState.SpecialCauseNoJudgement,
		[VariationJudgement.None]: VariationState.CommonCause,
	};
	const state = map[v2.judgement];
	let direction: Direction;
	if (v2.judgement === VariationJudgement.Improving) {
		direction = v2.polarity === MetricPolarity.LowerIsBetter ? Direction.Lower : Direction.Higher;
	} else if (v2.judgement === VariationJudgement.Deteriorating) {
		direction = v2.polarity === MetricPolarity.LowerIsBetter ? Direction.Higher : Direction.Lower;
	} else {
		direction = (v2.trend ?? Direction.Higher) as Direction;
	}
	return { state, direction, polarity: v2.polarity };
};

/**
 * Derive a rich, sentence‑level aria description for assistive tech.
 * This version aligns with MDC accessibility and NHS style.
 */
export interface VariationNarrativeContext {
	measureName?: string;         // e.g. "Emergency department 4h performance"
	datasetContext?: string;      // e.g. "Monthly trust-wide data"
	organisation?: string;        // e.g. "University Hospital A"
	timeframe?: string;           // e.g. "Jan 2024 – Jul 2025"
	additionalNote?: string;      // free-form note (intervention, caveat)
}

export function deriveVariationAriaDescription(
	input: SpcVariationInput,
	context?: VariationNarrativeContext
): string {
	const { state, direction, polarity } = resolveStateAndLayout(input);
	const judgement = getVariationTrend(state);

	// Use plain-English SPC phrasing: sustained run above/below the mean
	const sideWord = direction === Direction.Higher ? "above" : "below";
	const trendWord = direction === Direction.Higher ? "upwards" : "downwards";

	const polarityClause = (() => {
		switch (polarity) {
			case MetricPolarity.HigherIsBetter:
				return "For this measure, higher values are better.";
			case MetricPolarity.LowerIsBetter:
				return "For this measure, lower values are better.";
			default:
				return "Direction of improvement is context dependent.";
		}
	})();

	const base = (() => {
		switch (judgement) {
			case VariationJudgement.Improving:
				return `Special cause improvement: recent data show a sustained run ${sideWord} the mean (unlikely due to random variation).`;
			case VariationJudgement.Deteriorating:
				return `Special cause deterioration: recent data show a sustained run ${sideWord} the mean (unlikely due to random variation).`;
			case VariationJudgement.No_Judgement:
				return `Special cause detected (no value judgement): recent data show a change in level, trending ${trendWord}.`;
			case VariationJudgement.None:
			default:
				return `Common cause variation: points vary randomly around the mean; no special cause detected.`;
		}
	})();
	const parts = [
		base,
		polarityClause,
		context?.measureName ? `Measure: ${context.measureName}.` : null,
		context?.datasetContext ? `${context.datasetContext}.` : null,
		context?.organisation ? `Organisation: ${context.organisation}.` : null,
		context?.timeframe ? `Timeframe: ${context.timeframe}.` : null,
		context?.additionalNote ? context.additionalNote : null,
	];
	return parts.filter(Boolean).join(' ');
}

/** Assurance states – SPC‑based likelihood to meet target consistently. */
export type AssuranceState = "likely" | "unlikely" | "uncertain";

export interface SpcAssurancePayload {
	state: AssuranceState; // No RAG colours; neutral glyphs.
	targetLabel?: string; // e.g., "95% within 4h"
}

/** Shared visual props */
export interface SpcIconBaseProps {
	size?: number; // px; default 44. Consider 32–44 for dense tables.
	ariaLabel?: string; // override accessible label
	showLetter?: boolean; // default true — render H/L
	dropShadow?: boolean; // default true – apply outer circle shadow
}

export interface SpcVariationIconProps extends SpcIconBaseProps {
	data: SpcVariationInput;
}

export interface SpcAssuranceIconProps extends SpcIconBaseProps {
	data: SpcAssurancePayload;
}

export interface SpcIconsProps {
	variation: SpcVariationIconProps["data"];
	assurance: SpcAssuranceIconProps["data"];
	size?: number;
	ariaLabel?: string; // combined label for the pair
}

// Derive an H/L direction from the SPC state for backward compatibility.
// Improving states imply movement upwards; deteriorating states imply downwards.
// For states without an inherent judgement (common cause or no judgement),
// return null to allow callers to specify their own direction.

export const SpcVariationIcon = ({
	data,
	size = 44,
	ariaLabel,
	showLetter = true,
	dropShadow = true,
	...rest
}: SpcVariationIconProps & Record<string, unknown>) => {
	// Generate a unique ID for the shadow filter to avoid conflicts in the DOM
	const shadowId = useId();
	const { state, direction } = resolveStateAndLayout(data as SpcVariationInput);
	const colour = getVariationColour(state);
	const judgement = getVariationTrend(state);
	const showLetterForJudgement =
		judgement === VariationJudgement.Improving ||
		judgement === VariationJudgement.Deteriorating;
	const letter =
		showLetter && showLetterForJudgement
			? direction === Direction.Higher
				? "H"
				: "L"
			: "";
	const isSpecial = state !== VariationState.CommonCause;
	const isNoJudgement = state === VariationState.SpecialCauseNoJudgement;
	const pointColour = isSpecial ? colour.hex : "#A6A6A6";
	// Fallback to 'higher' when trend is null; ensures stable layouts.
	const points: Point[] = useMemo(
		() => computePointPositions(state, direction),
		[state, direction]
	);
	// Build aria label.  Always mention the state label; append direction when present.
	const aria =
		ariaLabel ||
		`${colour.label}${
			letter ? (direction === Direction.Higher ? " – Higher" : " – Lower") : ""
		}`;
	const ariaDescription = deriveVariationAriaDescription(
		data as SpcVariationInput
	);

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 300 300"
			role="img"
			aria-label={aria}
			aria-description={ariaDescription}
			{...rest}
		>
			{ dropShadow && (
				<defs>
					<filter id={shadowId} filterUnits="objectBoundingBox">
						<feGaussianBlur stdDeviation="3" />
						<feOffset dx="0" dy="15" result="blur" />
						<feFlood floodColor="rgb(150,150,150)" floodOpacity="1" />
						<feComposite in2="blur" operator="in" result="colorShadow" />
						<feComposite in="SourceGraphic" in2="colorShadow" operator="over" />
					</filter>
				</defs>
			)}
			<circle
				stroke="none"
				fill="#ffffff"
				{...(dropShadow ? { filter: `url(#${shadowId})` } : {})}
				cx="150"
				cy="150"
				r="120"
			/>
			<circle
				stroke={colour.hex}
				strokeWidth={15}
				strokeMiterlimit={10}
				fill="none"
				cx="150"
				cy="150"
				r="120"
			/>
			{letter && (
				<text
					fill={colour.hex}
					fontFamily="Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif"
					fontWeight="bold"
					fontSize={176}
					transform="translate(86.67, 54) scale(0.5, 0.5)"
					textAnchor="end"
				>
					<tspan x="120" y={direction === Direction.Lower ? "325" : "156"}>
						{letter}
					</tspan>
				</text>
			)}
			{/* Special Cause (No Judgement) arrow glyph: vertical arrow indicating orientation.
		  Up (layout Higher) shows arrow pointing up; Down (layout Lower) rotates 90°. */}
			{isNoJudgement ? (
				<path
					aria-hidden="true"
					fillRule="evenodd"
					stroke="none"
					fill={colour.hex}
					{...(direction === Direction.Lower
						? { transform: "rotate(90 150 150)" }
						: { transform: "translate(-5 0) rotate(0 150 150)" })}
					d="M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
				/>
			) : (
				<>
					{/* Trend path connecting the five point centres */}
					{points.length === 5 && (
						<path
							aria-hidden="true"
							fill="none"
							stroke="#A6A6A6"
							strokeWidth={12}
							strokeLinecap="round"
							strokeLinejoin="round"
							opacity={0.9}
							d={`M ${points.map((p) => `${p.cx} ${p.cy}`).join(" L ")}`}
						/>
					)}
					{/* Data points (last two coloured when judgement positive or negative) */}
					{ points.map((p: Point, i: number) => {
						const specialIdx = i >= points.length - 2 && isSpecial; // last two
						const fill = specialIdx ? pointColour : "#A6A6A6";
						const stroke = fill;
						return (
							<circle
								key={i}
								stroke={stroke}
								strokeWidth={2}
								strokeMiterlimit={10}
								fill={fill}
								cx={p.cx}
								cy={p.cy}
								r={16}
							/>
						);
					})}
				</>
			)}
		</svg>
	);
};

SpcVariationIcon.displayName = "SpcVariationIcon";
