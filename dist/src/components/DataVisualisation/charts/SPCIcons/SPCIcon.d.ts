import { Direction, MetricPolarity, VariationJudgement, VariationState } from "./SPCConstants";
import { VariationIcon as SpcEngineVariationIcon } from "../SPCChart/logic/spc";
export type SpcEngineIconPayload = {
    variationIcon: SpcEngineVariationIcon;
    trend?: Direction;
    polarity?: MetricPolarity;
};
export interface VariationColourDef {
    hex: string;
    stroke?: string;
    fill?: string;
    label: string;
    description: string;
    text?: string;
    judgement?: VariationJudgement;
}
export declare const VARIATION_COLOURS: Record<VariationState, VariationColourDef>;
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
    trend?: Direction;
    polarity?: MetricPolarity;
}
export interface SpcVariationEngineIconPayload {
    variationIcon: SpcEngineVariationIcon;
    trend?: Direction;
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
    trend?: Direction;
}
export type SpcVariationInput = SpcVariationPayload | SpcVariationDerivePayload | SpcVariationParsimonious | SpcVariationEngineIconPayload;
/**
 * Strict, parsimonious V2 shape — requires orientation when judgement is neutral
 * or when polarity is context-dependent. This enforces compile-time clarity.
 */
export type SpcVariationParsimonious = {
    judgement: VariationJudgement.Improving;
    polarity: MetricPolarity.HigherIsBetter | MetricPolarity.LowerIsBetter;
} | {
    judgement: VariationJudgement.Deteriorating;
    polarity: MetricPolarity.HigherIsBetter | MetricPolarity.LowerIsBetter;
} | {
    judgement: VariationJudgement.No_Judgement;
    polarity: MetricPolarity;
    trend: Direction;
} | {
    judgement: VariationJudgement.None;
    polarity: MetricPolarity;
    trend: Direction;
};
export interface SpcVariationAltIconProps extends SpcIconBaseProps {
    data: SpcVariationParsimonious;
}
/**
 * Derive a rich, sentence‑level aria description for assistive tech.
 * This version aligns with MDC accessibility and NHS style.
 */
export interface VariationNarrativeContext {
    measureName?: string;
    datasetContext?: string;
    organisation?: string;
    timeframe?: string;
    additionalNote?: string;
}
export declare function deriveVariationAriaDescription(input: SpcVariationInput, context?: VariationNarrativeContext): string;
/** Assurance states – SPC‑based likelihood to meet target consistently. */
export type AssuranceState = "likely" | "unlikely" | "uncertain";
export interface SpcAssurancePayload {
    state: AssuranceState;
    targetLabel?: string;
}
/** Shared visual props */
export interface SpcIconBaseProps {
    size?: number;
    ariaLabel?: string;
    showLetter?: boolean;
    dropShadow?: boolean;
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
    ariaLabel?: string;
}
export interface SpcVariationIconPropsAlt extends SpcVariationIconProps {
    variant?: 'classic' | 'triangle' | 'triangleWithRun';
    runLength?: number;
}
export declare const SpcVariationIcon: {
    ({ data, size, ariaLabel, showLetter, dropShadow, variant, runLength, ...rest }: SpcVariationIconPropsAlt & Record<string, unknown>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
