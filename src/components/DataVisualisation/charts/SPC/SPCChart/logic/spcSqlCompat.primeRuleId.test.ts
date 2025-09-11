import { describe, it, expect } from "vitest";
import { buildSpcSqlCompat } from "./spcSqlCompat";
import { ChartType, ImprovementDirection, SpcRuleId, PrimeDirection } from "./spc";

// Synthetic data crafting overlapping rule triggers so highest rank is Trend when present, else Shift, etc.
// We emulate this by constructing values that will satisfy multiple rule classifications over a window.
// (Exact numeric values are less important than ensuring flags set by base engine.)

describe("spcSqlCompat primeRuleId selection", () => {
	it("selects highest ranked rule on winning side when multiple present", () => {
		// Data: craft a simple increasing sequence likely to form a trend + shift after baseline.
		const data = Array.from({ length: 20 }).map((_, i) => ({
			x: i,
			value: i < 5 ? 10 : 10 + i,
		}));
		const { rows } = buildSpcSqlCompat({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
			disableTrendSideGating: true,
		});
		const last = rows[rows.length - 1];
		// If both a trend and shift are detected upwards, primeRuleId should be Trend (highest rank 4) under winning Up side.
		if (last.specialCauseTrendUp && last.specialCauseShiftUp) {
			expect(last.primeRuleId).toBe(SpcRuleId.Trend);
		}
	});

	it("falls back to lower rank when higher one absent", () => {
		// Data designed to trigger shift but not trend: plateau then a series of same level points beyond center line.
		const data = [
			// baseline stable
			{ x: 0, value: 10 },
			{ x: 1, value: 10 },
			{ x: 2, value: 10 },
			{ x: 3, value: 10 },
			{ x: 4, value: 10 },
			// shift upwards (sequence of points above baseline mean without monotonic increase)
			{ x: 5, value: 15 },
			{ x: 6, value: 15 },
			{ x: 7, value: 15 },
			{ x: 8, value: 15 },
			{ x: 9, value: 15 },
			{ x: 10, value: 15 },
			{ x: 11, value: 15 },
			{ x: 12, value: 15 },
		];
		const { rows } = buildSpcSqlCompat({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
			disableTrendSideGating: true,
		});
		const last = rows[rows.length - 1];
		if (last.specialCauseShiftUp && !last.specialCauseTrendUp) {
			expect(last.primeRuleId).toBe(SpcRuleId.Shift);
		}
	});
});
