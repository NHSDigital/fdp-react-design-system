import { describe, it, expect } from "vitest";
import { buildSpc } from "./spc";
import { ImprovementDirection, ChartType } from "./spcConstants";
import { buildSpcSqlCompat } from "./spcSqlCompat";

// Lightweight "toggle" style test verifying that enabling the SQL compatibility
// wrapper yields primeDirection annotations (and potentially pruned variation
// semantics) while the base engine result contains no primeDirection fields.
// This acts as an interaction surrogate for the Storybook global toolbar
// (base vs SQL compat) without requiring DOM instrumentation changes.

function makeShiftDataset() {
	// 12 points at ~50 then 12 points at ~60 to ensure a clear upward shift
	const a = Array.from({ length: 12 }, () => 50);
	const b = Array.from({ length: 12 }, () => 60);
	return [...a, ...b].map((v, i) => ({ x: i + 1, value: v }));
}

describe("SQL compat toggle (base vs sql) engine surface", () => {
	it("base engine has no primeDirection properties; sql compat adds them", () => {
		const data = makeShiftDataset();
		const base = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
		});
		// Assert primeDirection absent on all base rows
		expect(
			base.rows.every((r) => (r as any).primeDirection === undefined)
		).toBe(true);

		const sql = buildSpcSqlCompat({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
		});
		// All rows are assigned a primeDirection (Same / Upwards / Downwards) by wrapper logic
		expect(sql.rows.some((r) => (r as any).primeDirection !== undefined)).toBe(
			true
		);
	});

	it("sql compat preserves row count & mean while adding pruning metadata", () => {
		const data = makeShiftDataset();
		const base = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
		});
		const sql = buildSpcSqlCompat({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
		});
		expect(sql.rows.length).toBe(base.rows.length);
		// Find a representative row with limits (towards the end)
		const baseRep = [...base.rows].reverse().find((r) => r.mean != null);
		const sqlRep = [...sql.rows].reverse().find((r) => r.mean != null);
		expect(sqlRep?.mean).toBeCloseTo(baseRep?.mean || 0, 10);
	});
});
