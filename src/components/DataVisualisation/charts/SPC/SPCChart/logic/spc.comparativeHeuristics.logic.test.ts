import { describe, it, expect } from "vitest";
import { buildSpc } from "./spc";
import { ImprovementDirection, ChartType } from "./spcConstants";
/** Utility to build simple XmR rows */
function makeData(levels: number[]): { x: number; value: number }[] {
	return levels.map((v, i) => ({ x: i + 1, value: v }));
}

// Dataset: 10 low, 10 high (clear 2-phase process) – enables both early low shift and later high shift.
const twoPhaseValues = [
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10, // early phase
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20,
	20, // later favourable shift
];

describe("buildSpc – heuristics removed (rule-only)", () => {
	it("retains both early low and later high shift flags without heuristic suppression", () => {
		const res = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: makeData(twoPhaseValues),
		});
		const earlyLow = res.rows
			.slice(0, 6)
			.filter((r) => r.specialCauseShiftDown).length;
		const lateHigh = res.rows
			.slice(10)
			.filter((r) => r.specialCauseShiftUp).length;
		expect(earlyLow).toBeGreaterThan(0);
		expect(lateHigh).toBeGreaterThan(0);
	});
});
