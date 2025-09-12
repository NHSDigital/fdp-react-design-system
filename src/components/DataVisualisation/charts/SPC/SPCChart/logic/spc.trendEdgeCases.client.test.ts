import { describe, it, expect } from "vitest";
import { buildSpc } from "./spc";
import { ChartType, ImprovementDirection, VariationIcon } from "./spcConstants";

const toRows = (vals: number[]) => vals.map((v, i) => ({ x: i + 1, value: v }));

describe("SPC trend side gating – additional edge cases", () => {
	it("Up direction: long increasing trend entirely below (elevated) mean produces no premature Improvement", () => {
		// Mean artificially raised by large later high phase.
		// First 6 points strictly increasing but all < mean; they should NOT be Improvement.
		const values = [40, 41, 42, 43, 44, 45, 140, 141, 142, 143, 144, 145];
		const { rows } = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: toRows(values),
			settings: { enableFourOfFiveRule: false, minimumPoints: 12 },
		});
		const globalMean = rows[0].mean; // mean now present due to lowered minimumPoints
		// Early monotonic window length = specialCauseTrendPoints (default 6)
		for (let i = 0; i < 6; i++) {
			const r = rows[i]!;
			expect(globalMean).not.toBeNull();
			expect(r.value! < (globalMean as number)).toBe(true);
			expect(r.specialCauseTrendUp).toBe(true);
			expect(r.variationIcon).not.toBe(VariationIcon.Improvement); // gating should block
		}
		// Later high phase points should get Improvement due to shiftHigh (all above mean) or trend
		const anyImprovementHigh = rows
			.slice(6)
			.some((r) => r.variationIcon === VariationIcon.Improvement);
		expect(anyImprovementHigh).toBe(true);
	});

	it("Up direction: increasing trend crossing mean – only post-cross points can be Improvement", () => {
		// Design: early moderate values + later very high values -> mean sits between phases.
		// First 6 points increasing but below mean; next 6 points increasing and above mean.
		const values = [60, 61, 62, 63, 64, 65, 90, 91, 92, 93, 94, 95];
		const { rows } = buildSpc({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Up,
			data: toRows(values),
			settings: { enableFourOfFiveRule: false, minimumPoints: 12 },
		});
		const meanVal = rows[0].mean!;
		// Determine crossing index (first value > mean)
		const crossing = rows.findIndex(
			(r) => r.value !== null && r.mean !== null && r.value > r.mean
		);
		expect(crossing).toBeGreaterThan(0);
		// All points before crossing should not be Improvement
		for (let i = 0; i < crossing; i++) {
			const r = rows[i]!;
			expect(r.value! < meanVal).toBe(true);
			if (r.specialCauseTrendUp) {
				expect(r.variationIcon).not.toBe(VariationIcon.Improvement);
			}
		}
		// Some points after crossing should be Improvement (shift/trend cluster)
		const postImprovement = rows
			.slice(crossing)
			.some((r) => r.variationIcon === VariationIcon.Improvement);
		expect(postImprovement).toBe(true);
	});
});
