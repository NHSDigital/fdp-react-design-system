import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { ChartType, ImprovementDirection } from "../types";
import { withParityV26 } from "../presets";

function inputWithBaseline(values: number[], baselineIndex: number) {
	const start = new Date(2024, 0, 1);
	return values.map((v, i) => ({
		x: new Date(start.getFullYear(), start.getMonth() + i, 1),
		value: v,
		ghost: false,
		baseline: i === baselineIndex,
		target: null as number | null,
	}));
}

describe("parity: trend can span partitions", () => {
	it("detects a strictly increasing run of length 6 that crosses a baseline", () => {
		// Two partitions with a baseline placed in the middle of a monotonic increasing run.
		const head = [10.0, 10.1, 10.2];
		const tail = [10.3, 10.4, 10.5];
		const series = head.concat(tail);
		const baselineAt = head.length - 1; // baseline at index 2 (0-based), splitting after 3rd point
		const rows = buildSpcV26a({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: inputWithBaseline(series, baselineAt),
			settings: withParityV26({ minimumPoints: 6 }),
		}).rows;

		// Expect trendUp true across the entire 6-point window, even though it spans the baseline
		const incFlags = rows.filter((r) => !r.ghost).map((r) => r.trendUp);
		expect(incFlags.filter(Boolean).length).toBeGreaterThanOrEqual(6);
	});
});
