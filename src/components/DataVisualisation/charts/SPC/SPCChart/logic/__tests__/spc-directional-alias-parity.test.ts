import { describe, it, expect } from "vitest";
import { buildSpc } from "../spc";

// Minimal helper to build a dataset that triggers various rules
function buildDataset(values: Array<number | null>) {
	return values.map((v, i) => ({
		id: String(i + 1),
		value: v,
		date: `2024-01-${String(i + 1).padStart(2, "0")}`,
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
			chartType: "p", // any valid chart type - assume 'p' exists in ChartType enum
			metricImprovement: "increase", // ImprovementDirection increase
			data: buildDataset(values),
			settings: { enableFifteenInInnerThirdRule: false },
		} as any); // cast for test brevity if string enums differ

		for (const r of result.rows) {
			// Single point
			expect(r.specialCauseSinglePointUp).toBe(r.specialCauseSinglePointAbove);
			expect(r.specialCauseSinglePointDown).toBe(
				r.specialCauseSinglePointBelow
			);
			// Two of three
			expect(r.specialCauseTwoOfThreeUp).toBe(r.specialCauseTwoOfThreeAbove);
			expect(r.specialCauseTwoOfThreeDown).toBe(r.specialCauseTwoOfThreeBelow);
			// Four of five
			expect(r.specialCauseFourOfFiveUp).toBe(r.specialCauseFourOfFiveAbove);
			expect(r.specialCauseFourOfFiveDown).toBe(r.specialCauseFourOfFiveBelow);
			// Shift
			expect(r.specialCauseShiftUp).toBe(r.specialCauseShiftHigh);
			expect(r.specialCauseShiftDown).toBe(r.specialCauseShiftLow);
			// Trend
			expect(r.specialCauseTrendUp).toBe(r.specialCauseTrendIncreasing);
			expect(r.specialCauseTrendDown).toBe(r.specialCauseTrendDecreasing);
		}
	});
});
