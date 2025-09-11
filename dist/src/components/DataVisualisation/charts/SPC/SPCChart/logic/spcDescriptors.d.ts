import { VariationIcon, AssuranceIcon, SpcRow } from "./spc";
export declare enum SpcRuleId {
    SinglePointUp = "singlePointUp",
    SinglePointDown = "singlePointDown",
    TwoOfThreeUp = "twoOfThreeUp",
    TwoOfThreeDown = "twoOfThreeDown",
    FourOfFiveUp = "fourOfFiveUp",
    FourOfFiveDown = "fourOfFiveDown",
    ShiftUp = "shiftUp",
    ShiftDown = "shiftDown",
    TrendUp = "trendUp",
    TrendDown = "trendDown"
}
export interface SpcRuleGlossaryEntry {
    /** Short label suitable for dense tooltip list */
    tooltip: string;
    /** Longer narration fragment (not full sentence) used when assembling live region text */
    narration: string;
}
export declare const ruleGlossary: Record<SpcRuleId, SpcRuleGlossaryEntry>;
/** Extract the triggered rule identifiers for a given SPC row */
export declare function extractRuleIds(row: SpcRow | undefined | null): SpcRuleId[];
/** Standardised human readable label for variation classification */
export declare function variationLabel(icon: VariationIcon | undefined): string | null;
/** Human readable assurance (target) classification */
export declare function assuranceLabel(icon: AssuranceIcon | undefined): string | null;
/** Zone classification given mean + sigma + value */
export declare function zoneLabel(mean: number | null | undefined, sigma: number, value: number): string | null;
export declare const VARIATION_COLOR_TOKENS: Record<VariationIcon, {
    token: string;
    hex: string;
}>;
export declare function getVariationColorToken(icon: VariationIcon | undefined): string;
export declare function getVariationColorHex(icon: VariationIcon | undefined): string;
