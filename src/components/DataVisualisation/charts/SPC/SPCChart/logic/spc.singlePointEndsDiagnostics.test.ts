import { buildSpc } from "./spc";
import { ImprovementDirection, ChartType } from "./spcConstants";
import { resolvedSpcTestCases } from "../test-data/spcTestCases";

describe("single point ends diagnostics", () => {
	it("logs row data", () => {
		const tc = resolvedSpcTestCases.find(
			(t) => t.title === "Special cause - single point - ends"
		);
		expect(tc).toBeTruthy();
		if (!tc) return;
		const data = tc.values.map((v, i) => ({ x: i + 1, value: v }));
		const res = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
		});
		const rows = res.rows
			.filter((r) => !r.ghost)
			.map((r) => ({
				i: r.rowId,
				v: r.value,
				mean: r.mean,
				ucl: r.upperProcessLimit,
				lcl: r.lowerProcessLimit,
				two3A: r.specialCauseTwoOfThreeUp,
				two3B: r.specialCauseTwoOfThreeDown,
				singleAbove: r.specialCauseSinglePointUp,
				singleBelow: r.specialCauseSinglePointDown,
				shiftHigh: r.specialCauseShiftUp,
				shiftLow: r.specialCauseShiftDown,
				trendInc: r.specialCauseTrendUp,
				trendDec: r.specialCauseTrendDown,
				icon: r.variationIcon,
			}));
		if (process.env.SPC_DEBUG) {
			console.log("SINGLE_POINT_ENDS_ROWS", rows);
		}
	});
});
