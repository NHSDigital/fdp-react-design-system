import { VariationIcon } from "../../types";
/**
 * Map a VariationIcon to colour metadata used in Storybook.
 *
 * Contract
 * - Input: VariationIcon emitted by logic_v2 (per row for convenience)
 * - Output: A token-like name and hex string for visual tables/tests
 * - Stability: Storybook-only. Centralised to avoid drift. We will later
 *   align to official NHS design tokens and expose the token names directly.
 *
 * Colour semantics (as requested):
 * - Concern → orange
 * - Improvement → blue
 * - Neutral special cause → purple
 * - Common cause → grey
 *
 * Note: High/Low side does not affect colour; category determines colour.
 */
export declare const ICON_COLOURS: {
    readonly improvement: "#00B0F0";
    readonly concern: "#E46C0A";
    readonly neutralSpecialCause: "#490092";
    readonly commonCause: "#A6A6A6";
};
export type IconColourName = keyof typeof ICON_COLOURS;
export declare function iconToName(icon: VariationIcon): IconColourName;
export declare function iconMeta(icon: VariationIcon): {
    name: IconColourName;
    hex: string;
};
/**
 * Back-compat helper: returns only the hex colour for an icon.
 */
export declare function iconToHex(icon: VariationIcon): string;
declare const _default: {
    iconToHex: typeof iconToHex;
    iconMeta: typeof iconMeta;
    iconToName: typeof iconToName;
    ICON_COLOURS: {
        readonly improvement: "#00B0F0";
        readonly concern: "#E46C0A";
        readonly neutralSpecialCause: "#490092";
        readonly commonCause: "#A6A6A6";
    };
};
export default _default;
