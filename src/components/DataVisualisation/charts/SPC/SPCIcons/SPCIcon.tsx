import React, { useId, useMemo } from "react";
import { tokenColour, getGradientOpacities } from "./tokenUtils";
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

// Token utilities now sourced from shared tokenUtils module.
// Import VariationIcon enum from SPC engine to permit direct usage with icon component.
// Updated: point to advanced SPC engine (legacy ../../xmr/spc path removed during refactor)
import { VariationIcon as SpcEngineVariationIcon, ImprovementDirection } from "../engine";
// Also accept UI-level VariationIcon (Improvement/Concern/Neither/Suppressed)
import { VariationIcon as UiVariationIcon } from "../SPCChart/types";
import { SpcEmbeddedIconVariant, LetterMode, SpcLetterGlyph } from "../SPCChart/SPCChart.constants";

// Friendly alias exported for consumers who want to pass just the engine icon key
export type SpcEngineIconPayload = {
	variationIcon: SpcEngineVariationIcon;
	trend?: Direction;
	polarity?: MetricPolarity;
};

// (Removed duplicate local colour system; rely on canonical palette & helpers from SPCConstants.)

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
/**
 * @deprecated Use engine-aligned payload: { variationIcon, improvementDirection, specialCauseNeutral?, trend? }
 * Retained temporarily for backward compatibility. Will be removed in a future minor version once downstream usages migrate.
 */
export interface SpcVariationPayload {
	state: VariationState;
	trend?: Direction; // explicitly choose geometry (higher/lower)
	polarity?: MetricPolarity;
}

// New: direct engine variation icon payload (maps engine-level VariationIcon enum to a state)
export interface SpcVariationEngineIconPayload {
	variationIcon: SpcEngineVariationIcon | UiVariationIcon;
	trend?: Direction; // orientation override
	polarity?: MetricPolarity; // optional explicit polarity
	improvementDirection?: ImprovementDirection; // engine-style polarity input (preferred over polarity when provided)
	specialCauseNeutral?: boolean; // distinguishes neutral special-cause (purple) from common cause when variationIcon === Neither
	highSideSignal?: boolean; // optional side hint for neutral special-cause arrow orientation
	lowSideSignal?: boolean; // optional side hint for neutral special-cause arrow orientation
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
/**
 * @deprecated Supply engine payload instead. If you still need automatic letter orientation, pass improvementDirection and omit trend.
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
/**
 * @deprecated Parsimonious form superseded by engine payload. Prefer { variationIcon, improvementDirection, specialCauseNeutral }.
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
const resolveStateAndLayout = (
	input: SpcVariationInput
): {
	state: VariationState;
	direction: Direction;
	polarity: MetricPolarity;
} => {
	// Runtime deprecation warning (fires once) for legacy payloads (state / judgement forms)
	const emitDeprecation = () => {
		if (!(globalThis as any).__spcIconDeprecationEmitted) {
			console.warn(
				"[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
			);
			(globalThis as any).__spcIconDeprecationEmitted = true;
		}
	};
	// Engine/UI VariationIcon mapping support
	if ((input as SpcVariationEngineIconPayload).variationIcon !== undefined) {
		const eng = input as SpcVariationEngineIconPayload;
		// Determine polarity preference: improvementDirection overrides explicit polarity prop.
		let polarity: MetricPolarity | undefined = undefined;
		if (eng.improvementDirection !== undefined) {
			polarity =
				eng.improvementDirection === ImprovementDirection.Up
					? MetricPolarity.HigherIsBetter
					: eng.improvementDirection === ImprovementDirection.Down
						? MetricPolarity.LowerIsBetter
						: MetricPolarity.ContextDependent;
		} else if (eng.polarity) {
			polarity = eng.polarity;
		}
		// Map variation icon (supports both UI-level and engine-level enums) to internal state
		let state: VariationState;
		const rawIcon = (eng as any).variationIcon as any;
		if (
			rawIcon === UiVariationIcon.Improvement ||
			rawIcon === UiVariationIcon.Concern ||
			rawIcon === UiVariationIcon.Neither ||
			rawIcon === UiVariationIcon.Suppressed
		) {
			// UI-level icon mapping
			if (rawIcon === UiVariationIcon.Improvement) state = VariationState.SpecialCauseImproving;
			else if (rawIcon === UiVariationIcon.Concern) state = VariationState.SpecialCauseDeteriorating;
			else if (rawIcon === UiVariationIcon.Neither) state = VariationState.CommonCause;
			else /* Suppressed */ state = VariationState.SpecialCauseNoJudgement;
		} else {
			// Engine-level icon mapping (High/Low/CommonCause)
			switch (eng.variationIcon) {
				case SpcEngineVariationIcon.ImprovementHigh:
				case SpcEngineVariationIcon.ImprovementLow:
					state = VariationState.SpecialCauseImproving; break;
				case SpcEngineVariationIcon.ConcernHigh:
				case SpcEngineVariationIcon.ConcernLow:
					state = VariationState.SpecialCauseDeteriorating; break;
				case SpcEngineVariationIcon.NeitherHigh:
				case SpcEngineVariationIcon.NeitherLow:
					state = eng.specialCauseNeutral
						? VariationState.SpecialCauseNoJudgement
						: VariationState.CommonCause; break;
				case SpcEngineVariationIcon.CommonCause:
					state = VariationState.CommonCause; break;
				default:
					state = VariationState.SpecialCauseNoJudgement; break;
			}
		}
		let direction: Direction | undefined = eng.trend as Direction | undefined;
		if (!direction) {
			if (state === VariationState.SpecialCauseImproving) {
				direction = polarity === MetricPolarity.LowerIsBetter ? Direction.Lower : Direction.Higher;
			} else if (state === VariationState.SpecialCauseDeteriorating) {
				direction = polarity === MetricPolarity.LowerIsBetter ? Direction.Higher : Direction.Lower;
			} else if (state === VariationState.SpecialCauseNoJudgement) {
				// Prefer explicit side hints when supplied
				if (eng.highSideSignal && !eng.lowSideSignal) direction = Direction.Higher;
				else if (eng.lowSideSignal && !eng.highSideSignal) direction = Direction.Lower;
				else direction = Direction.Higher; // fallback
			} else {
				// Common cause: pick provided trend if any, otherwise neutral default
				direction = Direction.Higher;
			}
		}
		return { state, direction, polarity: polarity ?? MetricPolarity.ContextDependent };
	}
	// Legacy explicit state payload
	if ((input as SpcVariationPayload).state !== undefined) {
		emitDeprecation();
		const v1 = input as SpcVariationPayload;
		let direction: Direction | undefined = v1.trend as Direction | undefined;
		if (
			!direction &&
			(v1.state === VariationState.SpecialCauseImproving ||
				v1.state === VariationState.SpecialCauseDeteriorating) &&
			v1.polarity
		) {
			if (v1.state === VariationState.SpecialCauseImproving) {
				direction =
					v1.polarity === MetricPolarity.LowerIsBetter
						? Direction.Lower
						: Direction.Higher;
			} else {
				direction =
					v1.polarity === MetricPolarity.LowerIsBetter
						? Direction.Higher
						: Direction.Lower;
			}
		}
		if (!direction) {
			if (v1.state === VariationState.SpecialCauseImproving)
				direction = Direction.Higher;
			else if (v1.state === VariationState.SpecialCauseDeteriorating)
				direction = Direction.Lower;
			else direction = Direction.Higher;
		}
		return {
			state: v1.state,
			direction,
			polarity: v1.polarity ?? MetricPolarity.ContextDependent,
		};
	}
	// Derivation payload based on judgement + polarity
	const v2 = input as SpcVariationDerivePayload;
	emitDeprecation();
	const map: Record<VariationJudgement, VariationState> = {
		[VariationJudgement.Improving]: VariationState.SpecialCauseImproving,
		[VariationJudgement.Deteriorating]:
			VariationState.SpecialCauseDeteriorating,
		[VariationJudgement.No_Judgement]: VariationState.SpecialCauseNoJudgement,
		[VariationJudgement.None]: VariationState.CommonCause,
	};
	const state = map[v2.judgement];
	let direction: Direction;
	if (v2.judgement === VariationJudgement.Improving) {
		direction =
			v2.polarity === MetricPolarity.LowerIsBetter
				? Direction.Lower
				: Direction.Higher;
	} else if (v2.judgement === VariationJudgement.Deteriorating) {
		direction =
			v2.polarity === MetricPolarity.LowerIsBetter
				? Direction.Higher
				: Direction.Lower;
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
	measureName?: string; // e.g. "Emergency department 4h performance"
	datasetContext?: string; // e.g. "Monthly trust-wide data"
	organisation?: string; // e.g. "University Hospital A"
	timeframe?: string; // e.g. "Jan 2024 – Jul 2025"
	additionalNote?: string; // free-form note (intervention, caveat)
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
	return parts.filter(Boolean).join(" ");
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
	/** When true, apply a diagonal (top-left -> bottom-right) colour wash instead of solid white interior. */
	gradientWash?: boolean;
}

export interface SPCVariationIconProps extends SpcIconBaseProps {
	data: SpcVariationInput;
}

export interface SpcAssuranceIconProps extends SpcIconBaseProps {
	data: SpcAssurancePayload;
}

export interface SpcIconsProps {
	variation: SPCVariationIconProps["data"];
	assurance: SpcAssuranceIconProps["data"];
	size?: number;
	ariaLabel?: string; // combined label for the pair
}

// Derive an H/L direction from the SPC state for backward compatibility.
// Improving states imply movement upwards; deteriorating states imply downwards.
// For states without an inherent judgement (common cause or no judgement),
// return null to allow callers to specify their own direction.

export interface SPCVariationIconPropsAlt extends SPCVariationIconProps {
	variant?: SpcEmbeddedIconVariant;
	runLength?: number;
	/** How to derive H/L when shown (default: direction). */
	letterMode?: LetterMode;
	/** Explicit override for the letter (takes precedence). Use '' to suppress. */
	letterOverride?: SpcLetterGlyph;
}
// (imports consolidated above)

// Shared defs (filter + gradient) helper to avoid repetition across variants
const buildDefs = (
	colourHex: string,
	shadowId: string,
	washId: string,
	dropShadow: boolean,
	gradientWash: boolean,
	stops: Array<{ offset: string; opacity: string }>
) => (
	<defs>
		{dropShadow && (
			<filter id={shadowId} filterUnits="objectBoundingBox">
				<feGaussianBlur stdDeviation="3" />
				<feOffset dx="0" dy="15" result="blur" />
				<feFlood floodColor="rgb(150,150,150)" floodOpacity="1" />
				<feComposite in2="blur" operator="in" result="colorShadow" />
				<feComposite in="SourceGraphic" in2="colorShadow" operator="over" />
			</filter>
		)}
		{gradientWash && (
			<linearGradient id={washId} x1="0%" y1="0%" x2="100%" y2="100%">
				{stops.map((s) => (
					<stop
						key={s.offset}
						offset={s.offset}
						stopColor={colourHex}
						stopOpacity={parseFloat(s.opacity)}
					/>
				))}
			</linearGradient>
		)}
	</defs>
);

export const SPCVariationIcon = ({
	data,
	size = 44,
	ariaLabel,
	showLetter = true,
	dropShadow = true,
	gradientWash = false,
	variant = SpcEmbeddedIconVariant.Classic,
	runLength = 0,
	// Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
	letterMode = LetterMode.Polarity,
	letterOverride,
	...rest
}: SPCVariationIconPropsAlt & Record<string, unknown>) => {
	const shadowId = useId();
	const washId = useId();
	// Gradient opacities (classic + triangle variants)
	const {
		start: gradStart,
		mid: gradMid,
		end: gradEnd,
		triStart: triGradStart,
		triMid: triGradMid,
		triEnd: triGradEnd,
	} = getGradientOpacities();

	// Resolve semantic state + layout once
	const { state, direction, polarity } = useMemo(
		() => resolveStateAndLayout(data as SpcVariationInput),
		[data]
	);
	const colour = useMemo(() => getVariationColour(state), [state]);
	const judgement = useMemo(() => getVariationTrend(state), [state]);
	const showLetterForJudgement =
		judgement === VariationJudgement.Improving ||
		judgement === VariationJudgement.Deteriorating;
	let letter = "";
	
	if (showLetter && showLetterForJudgement) {
		if (letterMode === LetterMode.Polarity) {
			if (polarity === MetricPolarity.HigherIsBetter) letter = "H";
			else if (polarity === MetricPolarity.LowerIsBetter) letter = "L";
			else letter = "";
		} else {
			letter = direction === Direction.Higher ? "H" : "L";
		}
	}
	
	if (letterOverride !== undefined) letter = letterOverride;
	const isSpecial = state !== VariationState.CommonCause;
	const isNoJudgement = state === VariationState.SpecialCauseNoJudgement;
	const neutralGrey = tokenColour("common-cause", "#A6A6A6");
	const pointColour = isSpecial ? colour.hex : neutralGrey;
	const points: Point[] = useMemo(
		() => computePointPositions(state, direction),
		[state, direction]
	);
	const aria =
		ariaLabel ||
		`${colour.label}${
			letter ? (direction === Direction.Higher ? " – Higher" : " – Lower") : ""
		}`;
	const ariaDescription = deriveVariationAriaDescription(
		data as SpcVariationInput
	);

	// --- Triangle with run rendering (new) ---
	if (variant === SpcEmbeddedIconVariant.TriangleWithRun) {
		// Short triangle with run indicator (five small circles)
		const triSize = 100;
		const centerX = 150;
		const centerY = 140;
		const upTriangle = [
			[centerX, centerY - triSize / 2],
			[centerX - triSize / 2, centerY + triSize / 2],
			[centerX + triSize / 2, centerY + triSize / 2],
		];
		const downTriangle = [
			[centerX, centerY + triSize / 2],
			[centerX - triSize / 2, centerY - triSize / 2],
			[centerX + triSize / 2, centerY - triSize / 2],
		];
		// flatLine intentionally omitted — rendered as a short line when needed directly in JSX
		let shape: React.ReactNode = null;
		// Orientation now driven by inferred direction (not raw improving/deteriorating state) so
		// "improving" with LowerIsBetter shows a downward triangle and "deteriorating" with LowerIsBetter shows upward.
		if (
			state === VariationState.SpecialCauseImproving ||
			state === VariationState.SpecialCauseDeteriorating
		) {
			shape = (
				<polygon
					points={(direction === Direction.Higher ? upTriangle : downTriangle)
						.map((p) => p.join(","))
						.join(" ")}
					fill={colour.hex}
					stroke={colour.hex}
					strokeWidth={6}
					transform={
						direction === Direction.Higher
							? "translate(0, -8)"
							: "translate(0, 15)"
					}
				/>
			);
		} else if (state === VariationState.SpecialCauseNoJudgement) {
			shape = (
				<polygon
					points={
						direction === Direction.Higher
							? upTriangle.map((p) => p.join(",")).join(" ")
							: downTriangle.map((p) => p.join(",")).join(" ")
					}
					fill={colour.hex}
					stroke={colour.hex}
					strokeWidth={6}
					transform={
						direction === Direction.Higher
							? "translate(0,-7)"
							: "translate(0,14)"
					}
				/>
			);
		}
		// Run circles
		const runLen = Math.max(0, Math.min(5, Math.floor(runLength || 0)));
		const runY = state === VariationState.CommonCause ? 160 : direction === Direction.Higher ? 220 : 70;
		const runRadius = 10;
		const runGap = 26;
		const runStartX = centerX - 2 * runGap;
		const runColor = state === VariationState.SpecialCauseImproving
				? tokenColour("improvement", "#00B0F0")
				: state === VariationState.SpecialCauseDeteriorating
					? tokenColour("concern", "#E46C0A")
					: neutralGrey;
		const runCircles = Array.from({ length: 5 }).map((_, i) => {
		const filled = (state === VariationState.SpecialCauseImproving ||
				state === VariationState.SpecialCauseDeteriorating) &&
				i >= 5 - runLen;
			const fill = filled ? runColor : neutralGrey;
			return (
				<circle
					key={i}
					cx={runStartX + i * runGap}
					cy={runY}
					r={runRadius}
					fill={fill}
					stroke={fill}
					strokeWidth={1}
				/>
			);
		});
		const defs = buildDefs(
			colour.hex,
			shadowId,
			washId,
			dropShadow,
			gradientWash,
			[
				{ offset: "0%", opacity: triGradStart },
				{ offset: "75%", opacity: triGradMid },
				{ offset: "100%", opacity: triGradEnd },
			]
		);
		// Keep common cause visually consistent regardless of supplied direction by fixing transform.
		const groupTransform =
			state === VariationState.CommonCause
			? "translate(0,-10)" // mimic the higher layout centring
			: direction === Direction.Higher
			? "translate(0,-10)"
			: "translate(0,25)";
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
				{defs}
				<circle
					stroke="none"
					fill={gradientWash ? `url(#${washId})` : "#ffffff"}
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
				<g transform={groupTransform}>
					{shape}
					{letter && (
						<text
							fill="#fff"
							fontFamily="'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif"
							fontWeight="bold"
							fontSize={64}
							x="150"
							y={direction === Direction.Higher ? 155 : 145}
							textAnchor="middle"
							dominantBaseline="middle"
						>
							{letter}
						</text>
					)}
					{runCircles}
				</g>
			</svg>
		);
	}

	// --- Alternative triangle rendering ---
	if (variant === SpcEmbeddedIconVariant.Triangle) {
		// Triangle geometry
		// Upward triangle: base at bottom, tip at top
		// Downward triangle: base at top, tip at bottom
		// Centered at (150,150), size ~120px
		const triSize = 150;
		const centerX = 150;
		const centerY = 150;
		const upTriangle = [
			[centerX, centerY - triSize / 2],
			[centerX - triSize / 2, centerY + triSize / 2],
			[centerX + triSize / 2, centerY + triSize / 2],
		];
		const downTriangle = [
			[centerX, centerY + triSize / 2],
			[centerX - triSize / 2, centerY - triSize / 2],
			[centerX + triSize / 2, centerY - triSize / 2],
		];
		// Flat line for neither
		const flatLine = [
			[centerX - triSize / 2, centerY + triSize / 2],
			[centerX + triSize / 2, centerY + triSize / 2],
		];
		let shape: React.ReactNode = null;
		// Orientation now driven by direction (not state) for the same semantic reason as triangleWithRun.
		if (
			state === VariationState.SpecialCauseImproving ||
			state === VariationState.SpecialCauseDeteriorating
		) {
			shape = (
				<polygon
					points={(direction === Direction.Higher ? upTriangle : downTriangle)
						.map((p) => p.join(","))
						.join(" ")}
					fill={colour.hex}
					stroke={colour.hex}
					strokeWidth={8}
					transform={
						direction === Direction.Higher
							? "translate(0, -10)"
							: "translate(0, 10)"
					}
				/>
			);
		} else if (state === VariationState.SpecialCauseNoJudgement) {
			// Up or down triangle, no letter
			shape = (
				<polygon
					points={
						direction === Direction.Higher
							? upTriangle.map((p) => p.join(",")).join(" ")
							: downTriangle.map((p) => p.join(",")).join(" ")
					}
					fill={colour.hex}
					stroke={colour.hex}
					strokeWidth={8}
					transform={
						direction === Direction.Higher
							? "translate(0, -15)"
							: "translate(0, 15)"
					}
				/>
			);
		} else if (state === VariationState.CommonCause) {
			// Flat line
			shape = (
				<line
					x1={flatLine[0][0]}
					y1={flatLine[0][1]}
					x2={flatLine[1][0]}
					y2={flatLine[1][1]}
					stroke={colour.hex}
					strokeWidth={32}
					strokeLinecap="square"
					transform="translate(0, -75)"
				/>
			);
		}
		const defs = buildDefs(
			colour.hex,
			shadowId,
			washId,
			dropShadow,
			gradientWash,
			[
				{ offset: "0%", opacity: triGradStart },
				{ offset: "65%", opacity: triGradMid },
				{ offset: "100%", opacity: triGradEnd },
			]
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
				{defs}
				<circle
					stroke="none"
					fill={gradientWash ? `url(#${washId})` : "#ffffff"}
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
				{shape}
				{letter &&
					(state === VariationState.SpecialCauseImproving ||
						state === VariationState.SpecialCauseDeteriorating) && (
						<text
							fill="#fff"
							fontFamily="'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif"
							fontWeight="bold"
							fontSize={100}
							x="150"
							y={direction === Direction.Higher ? "170" : "140"}
							textAnchor="middle"
							dominantBaseline="middle"

						>
							{letter}
						</text>
					)}
			</svg>
		);
	}

	// --- Default/classic rendering ---
	const defs = buildDefs(
		colour.hex,
		shadowId,
		washId,
		dropShadow,
		gradientWash,
		[
			{ offset: "0%", opacity: gradStart },
			{ offset: "65%", opacity: gradMid },
			{ offset: "100%", opacity: gradEnd },
		]
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
			{defs}
			<circle
				stroke="none"
				fill={gradientWash ? `url(#${washId})` : "#ffffff"}
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
					<tspan x="120" y={direction === Direction.Lower ? "340" : "155"}>
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
							stroke={neutralGrey}
							strokeWidth={12}
							strokeLinecap="round"
							strokeLinejoin="round"
							opacity={0.9}
							d={`M ${points.map((p) => `${p.cx} ${p.cy}`).join(" L ")}`}
						/>
					)}
					{/* Data points (last two coloured when judgement positive or negative) */}
					{points.map((p: Point, i: number) => {
						const specialIdx = i >= points.length - 2 && isSpecial; // last two
						const fill = specialIdx ? pointColour : neutralGrey;
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

SPCVariationIcon.displayName = "SPCVariationIcon";
