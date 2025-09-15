import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { withParityV26 } from "../presets";
import { ChartType, ImprovementDirection } from "../types";

function asInput(values: number[], baselineIndex: number) {
	return values.map((v, i) => ({
		x: i + 1,
		value: v,
		ghost: false,
		baseline: i === baselineIndex,
		target: null,
	}));
}

describe("logic_v2: baselines → recalculation and partitioned rules", () => {
	it("recalculates mean and limits per partition when a baseline is applied", () => {
		// Two regimes: low then high. Baseline at the first high value.
		const head = Array(6).fill(10);
		const tail = Array(6).fill(18);
		const series = [...head, ...tail];
		const baselineAt = head.length; // split starting at first 18

		const rows = buildSpcV26a({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: asInput(series, baselineAt),
			settings: withParityV26({ minimumPoints: 4 }),
		}).rows;

		const p1 = rows.filter((r) => r.partitionId === 1 && !r.ghost);
		const p2 = rows.filter((r) => r.partitionId === 2 && !r.ghost);

		expect(p1.length).toBe(head.length);
		expect(p2.length).toBe(tail.length);

		const last1 = p1.at(-1)!;
		const last2 = p2.at(-1)!;

		// Means and limits should be present and reflect different regimes
		expect(last1.mean).not.toBeNull();
		expect(last2.mean).not.toBeNull();
		expect(Math.abs((last1.mean as number) - 10)).toBeLessThan(1e-9);
		expect(Math.abs((last2.mean as number) - 18)).toBeLessThan(1e-9);

		expect(last1.upperProcessLimit).not.toBeNull();
		expect(last1.lowerProcessLimit).not.toBeNull();
		expect(last2.upperProcessLimit).not.toBeNull();
		expect(last2.lowerProcessLimit).not.toBeNull();

		// And the limits should differ between partitions
		expect(
			Math.abs(
				(last1.upperProcessLimit as number) -
					(last2.upperProcessLimit as number)
			)
		).toBeGreaterThan(0);
		expect(
			Math.abs(
				(last1.lowerProcessLimit as number) -
					(last2.lowerProcessLimit as number)
			)
		).toBeGreaterThan(0);
	});

	it("does not allow shift/two-of-three windows to cross a baseline boundary (partitioned rules)", () => {
		// Craft values that would only form a shift if windows were allowed to span the baseline.
		// Head: 2 points above an assumed mean; Tail: continues with 2 more. With shiftPoints=4 this would be a shift across the seam.
		const series = [12, 12, /* baseline */ 12, 12];
		const baselineAt = 2;

		const rows = buildSpcV26a({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: asInput(series, baselineAt),
			settings: withParityV26({
				minimumPoints: 2,
				shiftPoints: 4,
				twoSigmaIncludeAboveThree: true,
			}),
		}).rows.filter((r) => !r.ghost);

		const p1 = rows.filter((r) => r.partitionId === 1);
		const p2 = rows.filter((r) => r.partitionId === 2);

		// No partition has 4 points, so a shift cannot be formed if windows are partition-bound.
		expect(p1.some((r) => r.shiftUp || r.shiftDown)).toBe(false);
		expect(p2.some((r) => r.shiftUp || r.shiftDown)).toBe(false);
	});
});
