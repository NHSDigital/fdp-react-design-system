import { describe, it, expect } from "vitest";
import { buildSpc } from "../spc";
import { ChartType, ImprovementDirection } from "../spcConstants";

// Dataset copied from SPCChart.healthcare.stories.tsx (ED 4h compliance)
const ed4hValues = [
	69, 70, 68, 71, 70, 69, 70, 69, 71, 70, 68, 69, 78, 79, 80, 81, 79, 78, 82,
	81, 80, 79, 81, 80,
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
