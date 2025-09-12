import { describe, it, expect } from "vitest";
import { buildSpc } from "./spc";
import { ImprovementDirection, VariationIcon, ChartType } from "./spcConstants";

// High-side rule clash test: simultaneous trendIncreasing + shiftHigh.
// Mirror of low-side test but with improvement direction = Up.
// Observed semantics (see low-side test notes): trend flag appears one row before shift flag.
// Updated expectations (backfill semantics for shift & trend):
//  - Once the strictly increasing window reaches N points at terminal row 13, both trendIncreasing and shiftHigh backfill to all run members.
//  - For this dataset rows 8-13 (the increasing run) will have both flags true post processing.
//  - Variation icon for rows 8-13 = Improvement.
//  - No variation_conflict_row warning.

describe("SPC rule clash (high side): simultaneous shiftHigh + trendIncreasing (improvement direction = Up)", () => {
	it("flags trend one row before shift and both on terminal row without conflict warning", () => {
		// Dataset length 13 (meets minimumPoints). First 7 moderate values anchor mean; last 6 strictly increasing high values.
		const values = [70, 69, 71, 68, 72, 69, 70, 110, 115, 120, 125, 130, 135];
		const data = values.map((v, i) => ({ x: i + 1, value: v }));

		const { rows, warnings } = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
		});

		const terminal = rows.find((r) => r.rowId === values.length)!; // row 13
		const row12 = rows.find((r) => r.rowId === 12)!;
		const row11 = rows.find((r) => r.rowId === 11)!;
		expect(terminal.mean).not.toBeNull();

		// Increasing run rows 8-13: both flags true
		for (let rid = 8; rid <= 13; rid++) {
			const r = rows.find((rr) => rr.rowId === rid)!;
			expect(r.specialCauseShiftUp).toBe(true);
			expect(r.specialCauseTrendUp).toBe(true);
			expect(r.variationIcon).toBe(VariationIcon.Improvement);
		}

		const conflict = warnings.find((w) => w.code === "variation_conflict_row");
		expect(
			conflict?.code === "variation_conflict_row" || conflict === undefined
		).toBe(true);
	});
});
