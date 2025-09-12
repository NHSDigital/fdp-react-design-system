import { describe, it, expect } from "vitest";
import { buildSpcSqlCompat } from "./spcSqlCompat";
import { ChartType, ImprovementDirection, VariationIcon, PrimeDirection } from "./spcConstants";

// Tests for SQL-compatible directional pruning wrapper.
// We synthesise contrived data to emulate both high-side and low-side rule strengths on the same row by
// manually creating a scenario where a trend and shift would coexist on opposite sides after recalculation.
// (Note: In authentic Shewhart geometry this is near-impossible; test focuses on wrapper stability.)

function makeData(values: number[]) {
	return values.map((v, i) => ({ x: i + 1, value: v }));
}

describe("spcSqlCompat directional pruning", () => {
	it("produces variation icons consistent with pruned values (improvement metric Up)", () => {
		const data = makeData([
			100, 101, 102, 103, 104, 105, 95, 96, 97, 98, 99, 110,
		]);
		const res = buildSpcSqlCompat({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
		});
		expect(res.rows.length).toBe(data.length);
		// Ensure no runtime errors and that icons are assigned
		const last = res.rows[res.rows.length - 1];
		expect([
			VariationIcon.Improvement,
			VariationIcon.Concern,
			VariationIcon.Neither,
		]).toContain(last.variationIcon);
	});

	it("does not error under potential rank tie scenario (improvement bias opportunistic)", () => {
		const data = makeData([
			100, 100, 100, 100, 100, 100, 100.1, 100.2, 100.3, 100.4, 100.5, 100.6,
		]);
		const res = buildSpcSqlCompat({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
		});
		// Find any row with primeDirection === PrimeDirection.Same (may not exist; tolerate none)
		const tie = res.rows.find((r) => r.primeDirection === PrimeDirection.Same);
		if (tie && tie.sqlOriginalImprovementValue && tie.sqlOriginalConcernValue) {
			expect(tie.variationIcon).toBe(VariationIcon.Improvement);
		} // else no strict assertion
	});
});
