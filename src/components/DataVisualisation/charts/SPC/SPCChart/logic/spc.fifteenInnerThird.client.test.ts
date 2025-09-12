import { describe, it, expect } from "vitest";
import { buildSpc } from "./spc";
import { ChartType, ImprovementDirection } from "./spcConstants";

// Construct a series with baseline variability then 15 points tightly within inner third (±1σ)
// Mixture ensured by alternating tiny deltas above/below mean.
function makeSeries() {
	// Baseline to establish mean and MR (approx mean ~50)
	const baseline = [
		50.4, 49.8, 50.2, 50.1, 49.9, 50.3, 50.05, 49.95, 50.15, 49.85, 50.25, 49.9,
	];
	// Stable band points (15) all within anticipated ±1σ (~±0.3 given baseline MR) and alternating sides
	const stable = [
		50.08, 49.96, 50.07, 49.97, 50.09, 49.95, 50.1, 49.94, 50.11, 49.93, 50.07,
		49.99, 50.06, 49.98, 50.05,
	];
	return [...baseline, ...stable];
}

describe("fifteen-in-inner-third rule", () => {
	it("flags all 15 stable inner-third points when enabled", () => {
		const values = makeSeries();
		const data = values.map((v, i) => ({ x: i + 1, value: v }));

		const disabled = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
			settings: { enableFifteenInInnerThirdRule: false },
		});

		const enabled = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data,
			settings: { enableFifteenInInnerThirdRule: true },
		});

		const baselineLen = 12; // first 12 points baseline
		const tail = enabled.rows.slice(baselineLen);

		const enabledFlags = tail.map((r) => r.specialCauseFifteenInnerThird);
		const disabledFlags = disabled.rows
			.slice(baselineLen)
			.map((r) => r.specialCauseFifteenInnerThird);

		expect(enabledFlags.filter(Boolean).length).toBe(15);
		expect(disabledFlags.some(Boolean)).toBe(false);

		// Mixture assurance: ensure at least one above and one below mean among flagged points
		const flagged = tail.filter((r) => r.specialCauseFifteenInnerThird);
		const anyAbove = flagged.some((r) => r.value! > r.mean!);
		const anyBelow = flagged.some((r) => r.value! < r.mean!);
		expect(anyAbove && anyBelow).toBe(true);
	});
});
