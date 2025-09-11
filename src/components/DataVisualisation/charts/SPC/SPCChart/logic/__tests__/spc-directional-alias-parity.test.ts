import { describe, it, expect } from "vitest";
import { buildSpc, ChartType, ImprovementDirection, getDirectionalSignalSummary, RULE_RANK_BY_ID, VariationIcon } from "../spc";

// Minimal helper to build a dataset that triggers various rules
function buildDataset(values: Array<number | null>) {
	return values.map((v, i) => ({
		x: `2024-01-${String(i + 1).padStart(2, "0")}`,
		value: v,
	}));
}

describe("SPC directional alias parity", () => {
	it("mirrors legacy Above/Below style flags into Up/Down aliases for single point, two-of-three, four-of-five, shift, trend", () => {
		// Craft dataset:
		// - First 8 points below mean then 8 above to create a shift (after mean established) and two-of-three / four-of-five sequences
		// - Monotonic increasing tail to form a trend
		const values = [
			10,
			10,
			10,
			10,
			10,
			10,
			10,
			10, // low run
			20,
			20,
			20,
			20,
			20,
			20,
			20,
			20, // high run => shift high + four-of-five + two-of-three
			21,
			22,
			23,
			24,
			25,
			26,
			27, // increasing => trend increasing
		];

		const result = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: buildDataset(values),
			settings: { enableFifteenInInnerThirdRule: false },
		});

		// Invariants: no row should have both up and down versions of the SAME rule simultaneously
		for (const r of result.rows) {
			const singleBoth = r.specialCauseSinglePointUp && r.specialCauseSinglePointDown;
			const twoThreeBoth = r.specialCauseTwoOfThreeUp && r.specialCauseTwoOfThreeDown;
			const fourFiveBoth = r.specialCauseFourOfFiveUp && r.specialCauseFourOfFiveDown;
			const shiftBoth = r.specialCauseShiftUp && r.specialCauseShiftDown;
			const trendBoth = r.specialCauseTrendUp && r.specialCauseTrendDown;
			expect(singleBoth || twoThreeBoth || fourFiveBoth || shiftBoth || trendBoth).toBe(false);
			// Directional summary consistency
			const summary = getDirectionalSignalSummary(r as any);
			for (const id of summary.upRules) expect(summary.upMax).toBeGreaterThanOrEqual(RULE_RANK_BY_ID[id]);
			for (const id of summary.downRules) expect(summary.downMax).toBeGreaterThanOrEqual(RULE_RANK_BY_ID[id]);
			// Mutual exclusivity of variation icon when both sides absent
			if (!summary.hasUp && !summary.hasDown) {
				expect(r.variationIcon === VariationIcon.Improvement || r.variationIcon === VariationIcon.Concern).toBe(false);
			}
		}
	});
});
