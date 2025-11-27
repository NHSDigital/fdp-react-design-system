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
export const ICON_COLOURS = {
	improvement: "#00B0F0", // blue
	concern: "#E46C0A", // orange
	neutralSpecialCause: "#490092", // purple
	commonCause: "#A6A6A6", // grey
} as const;

export type IconColourName = keyof typeof ICON_COLOURS;

export function iconToName(icon: VariationIcon): IconColourName {
	switch (icon) {
		case VariationIcon.ImprovementHigh:
		case VariationIcon.ImprovementLow:
			return "improvement";
		case VariationIcon.ConcernHigh:
		case VariationIcon.ConcernLow:
			return "concern";
		case VariationIcon.NeitherHigh:
		case VariationIcon.NeitherLow:
			return "neutralSpecialCause";
		default:
			return "commonCause";
	}
}

export function iconMeta(icon: VariationIcon): { name: IconColourName; hex: string } {
	const name = iconToName(icon);
	return { name, hex: ICON_COLOURS[name] };
}

/**
 * Back-compat helper: returns only the hex colour for an icon.
 */
export function iconToHex(icon: VariationIcon): string {
	return iconMeta(icon).hex;
}

export default { iconToHex, iconMeta, iconToName, ICON_COLOURS };
