import { describe, it, expect } from "vitest";
import { buildSpc } from "../spc";
import { buildSpcSqlCompat } from "../spcSqlCompat";
import { ChartType, ImprovementDirection } from "../spcConstants";

// Simple synthetic helper
const seq = (n: number, f: (i: number) => number) =>
	Array.from({ length: n }, (_, i) => ({ x: i + 1, value: f(i) }));

describe("SPC invariants", () => {
	it("never produces simultaneous Up & Down flags for same rule on a row (base engine)", () => {
		const data = seq(60, (i) =>
			i < 20 ? 100 + (i % 3) : i < 40 ? 110 + (i % 2) : 90 + (i % 4)
		); // mixed phases
		const { rows } = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
		});
		for (const r of rows) {
			expect(
				!(r.specialCauseSinglePointUp && r.specialCauseSinglePointDown)
			).toBe(true);
			expect(
				!(r.specialCauseTwoOfThreeUp && r.specialCauseTwoOfThreeDown)
			).toBe(true);
			expect(
				!(r.specialCauseFourOfFiveUp && r.specialCauseFourOfFiveDown)
			).toBe(true);
			expect(!(r.specialCauseShiftUp && r.specialCauseShiftDown)).toBe(true);
			expect(!(r.specialCauseTrendUp && r.specialCauseTrendDown)).toBe(true);
		}
	});

	it("backfilled shift flags form contiguous runs of length >= configured N", () => {
		const data = seq(50, (i) => (i < 15 ? 100 : i < 30 ? 110 : 95 + (i % 3))); // includes a high shift then regression
		const shiftPoints = 6;
		const { rows } = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
			settings: { specialCauseShiftPoints: shiftPoints },
		});
		const flagged = rows
			.filter((r) => r.specialCauseShiftUp)
			.map((r) => r.rowId);
		if (flagged.length === 0) return; // nothing to assert
		// Identify contiguous segments
		let segment: number[] = [];
		const segments: number[][] = [];
		for (let i = 0; i < flagged.length; i++) {
			if (i === 0 || flagged[i] === flagged[i - 1] + 1)
				segment.push(flagged[i]);
			else {
				segments.push(segment);
				segment = [flagged[i]];
			}
		}
		if (segment.length) segments.push(segment);
		// Every segment length must be >= shiftPoints (no partial backfill)
		segments.forEach((seg) =>
			expect(seg.length).toBeGreaterThanOrEqual(shiftPoints)
		);
	});

	it("SQL wrapper does not alter base variationIcon when no pruning occurs", () => {
		const data = seq(40, (i) =>
			i < 10
				? 100 + (i % 2)
				: i < 20
					? 102 + (i % 3)
					: i < 30
						? 98 + (i % 2)
						: 101 + (i % 4)
		);
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
		expect(base.rows.length).toBe(sql.rows.length);
		for (let i = 0; i < base.rows.length; i++) {
			// If sqlPruned not set, variationIcon should match
			if (!sql.rows[i].sqlPruned) {
				expect(sql.rows[i].variationIcon).toBe(base.rows[i].variationIcon);
			}
		}
	});
});
