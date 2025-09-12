import { describe, it, expect } from "vitest";
import spcModule from "./spc";
import { ImprovementDirection, ChartType } from "./spcConstants";

describe("SPC null and ghost handling (XmR)", () => {
	it("excludes nulls from mean and emits null_values_excluded warning; ghost points included in output but not MR calc", () => {
		const raw = [10, null, 11, 10, 9, 10, 11, 10, 9, 10, 11, 10, 9, 10, 11]; // 15 slots (1 null) -> 14 numeric
		const data = raw.map((v, i) => ({
			x: i + 1,
			value: v as number | null,
			ghost: i === 4,
		})); // ghost one value (excluded)
		const { rows, warnings } = spcModule.buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
		});
		const mean = rows[rows.length - 1]!.mean; // may be null if still below threshold (should not be now)
		const nonNullNonGhostValues = raw.filter(
			(v, i) => v != null && i !== 4
		) as number[];
		const expectedMean =
			nonNullNonGhostValues.reduce((a, b) => a + b, 0) /
			nonNullNonGhostValues.length;
		if (mean !== null) {
			expect(Math.abs(mean - expectedMean)).toBeLessThan(1e-9);
		} else {
			throw new Error("Mean unexpectedly null with sufficient valid points");
		}
		expect(warnings.some((w) => w.code === "null_values_excluded")).toBe(true);
		expect(warnings.some((w) => w.code === "ghost_rows_rare_event")).toBe(
			false
		);
	});
});
