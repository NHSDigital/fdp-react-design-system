import { describe, it, expect } from "vitest";
import { VariationIcon } from "../types";
import {
	iconToHex,
	iconMeta,
	iconToName,
	ICON_COLOURS,
} from "../storybook/data/variationIconColours";

// Snapshot-style assertions for the centralised icon→colour mapping.
// Low-risk guard to avoid accidental drift until tokens are wired.

describe("iconToHex", () => {
	it("maps Improvement icons to blue", () => {
		expect(iconToHex(VariationIcon.ImprovementHigh)).toBe("#00B0F0");
		expect(iconToHex(VariationIcon.ImprovementLow)).toBe("#00B0F0");
	});

	it("maps Concern icons to orange", () => {
		expect(iconToHex(VariationIcon.ConcernHigh)).toBe("#E46C0A");
		expect(iconToHex(VariationIcon.ConcernLow)).toBe("#E46C0A");
	});

	it("maps Neither icons to purple", () => {
		expect(iconToHex(VariationIcon.NeitherHigh)).toBe("#490092");
		expect(iconToHex(VariationIcon.NeitherLow)).toBe("#490092");
	});

	it("maps CommonCause to grey", () => {
		expect(iconToHex(VariationIcon.CommonCause)).toBe("#A6A6A6");
	});

	it("returns token-like metadata via iconMeta/iconToName", () => {
		expect(iconToName(VariationIcon.ConcernHigh)).toBe("concern");
		expect(iconMeta(VariationIcon.ConcernHigh)).toEqual({
			name: "concern",
			hex: ICON_COLOURS.concern,
		});

		expect(iconToName(VariationIcon.ImprovementLow)).toBe("improvement");
		expect(iconMeta(VariationIcon.ImprovementLow)).toEqual({
			name: "improvement",
			hex: ICON_COLOURS.improvement,
		});

		expect(iconToName(VariationIcon.NeitherHigh)).toBe("neutralSpecialCause");
		expect(iconMeta(VariationIcon.NeitherHigh)).toEqual({
			name: "neutralSpecialCause",
			hex: ICON_COLOURS.neutralSpecialCause,
		});

		expect(iconToName(VariationIcon.CommonCause)).toBe("commonCause");
		expect(iconMeta(VariationIcon.CommonCause)).toEqual({
			name: "commonCause",
			hex: ICON_COLOURS.commonCause,
		});
	});
});
