import { describe, it, expect } from "vitest";
import { buildSpc } from "../spc";
import { ChartType, ImprovementDirection } from "../spcConstants";

// Dataset copied from SPCChart.healthcare.stories.tsx (ED 4h compliance)
// Datasets (kept local; if updated in chart stories, mirror here)
const ed4hValues = [
	69, 70, 68, 71, 70, 69, 70, 69, 71, 70, 68, 69, 78, 79, 80, 81, 79, 78, 82,
	81, 80, 79, 81, 80,
];
const losValues = [
	7.4, 7.5, 7.6, 7.3, 7.4, 7.5, 7.2, 7.3, 7.1, 7.2, 7.0, 7.1, 6.8, 6.7, 6.6,
	6.5, 6.4, 6.3, 6.2, 6.1, 6.2, 6.0, 6.1, 6.0,
];
const readmitValues = [
	9.1, 9.0, 9.2, 9.3, 9.1, 9.0, 9.2, 9.3, 9.1, 9.0, 9.2, 9.1, 9.4, 9.6, 9.5,
	9.2, 9.3, 9.1, 9.0, 9.2, 9.1, 9.0, 9.1, 9.0,
];
const handHygieneValues = [
	86, 87, 85, 88, 87, 86, 87, 88, 86, 87, 88, 87, 92, 93, 94, 92, 93, 94, 93,
	92, 85, 93, 94, 93,
];
const fallsValues = [
	5.8, 5.9, 5.7, 5.8, 5.9, 5.6, 5.7, 5.5, 5.6, 5.4, 5.5, 5.3, 5.2, 5.1, 5.0,
	4.9, 5.6, 4.8, 4.7, 4.6, 4.5, 4.4, 4.5, 4.3,
];
const medErrorGaps = [
	3, 4, 2, 5, 4, 3, 4, 5, 4, 3, 6, 7, 8, 9, 7, 10, 12, 14, 15, 6, 20, 9, 18, 7,
];
const pressureUlcerCounts = [
	8, 7, 9, 8, 7, 10, 9, 8, 11, 9, 12, 13, 14, 15, 13, 16, 18, 19, 17, 20, 5, 21,
	22, 23,
];
const rttValues = [
	76, 79.7, 76.2, 74.4, 74.5, 74.2, 75.2, 75.8, 74.9, 75.0, 74.8, 74.9, 79, 81,
	80.7, 81.2, 81, 80.8, 81, 81.3, 81.6, 82, 83.2, 84.5, 84,
];

function toRows() {
	const start = new Date("2023-01-01T00:00:00Z");
	return ed4hValues.map((v, i) => ({
		x: new Date(start.getFullYear(), start.getMonth() + i, 1),
		value: v,
	}));
}

describe("ED4H classification regression guard", () => {
	it("does not classify pre-shift adverse-side trend points as improvement", () => {
		const result = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: toRows(),
			settings: { enableFourOfFiveRule: false },
		});
		const shiftHigh = result.rows.map((r) => r.specialCauseShiftUp);
		const shiftLow = result.rows.map((r) => r.specialCauseShiftDown);
		const twoOfThreeHigh = result.rows.map((r) => r.specialCauseTwoOfThreeUp);
		const twoOfThreeLow = result.rows.map((r) => r.specialCauseTwoOfThreeDown);
		const trendInc = result.rows.map((r) => r.specialCauseTrendUp);
		const trendDec = result.rows.map((r) => r.specialCauseTrendDown);
		const mean = result.rows.find((r) => r.mean !== null)?.mean ?? null;
		// Provide a compact object per row for easier terminal diffing if needed
		const summary = result.rows.map((r, i) => ({
			i,
			v: r.value,
			mean: r.mean,
			aboveMean:
				r.mean !== null && r.value !== null ? r.value > r.mean : undefined,
			icon: r.variationIcon,
			sh: shiftHigh[i],
			sl: shiftLow[i],
			t2h: twoOfThreeHigh[i],
			t2l: twoOfThreeLow[i],
			trI: trendInc[i],
			trD: trendDec[i],
		}));
		// Expectation: first 12 points are below global mean – should never produce Improvement
		// even if a monotonic increasing trend segment begins while still below mean.
		const firstImprovementIndex = summary.findIndex(
			(r) => r.icon === "improvement"
		);
		// If improvement appears before index 12, flag failure so we can investigate.
		if (firstImprovementIndex !== -1 && firstImprovementIndex < 12) {
			// Provide debug output in assertion message
			throw new Error(
				"Unexpected early improvement at index " +
					firstImprovementIndex +
					"\n" +
					JSON.stringify(summary, null, 2)
			);
		}
		// Basic sanity expectations
		expect(mean).not.toBeNull();
		expect(summary.length).toBe(ed4hValues.length);
	});
});
