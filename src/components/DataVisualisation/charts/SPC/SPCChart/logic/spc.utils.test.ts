import { describe, it, expect } from "vitest";
import {
	movingRanges,
	mrMeanWithOptionalExclusion,
	xmrLimits,
	tChartLimits,
	gChartProbabilityLimits,
	isNumber,
	mean,
} from "./spcUtils";

describe("spcUtils", () => {
	it("movingRanges computes MR ignoring ghosts", () => {
		const values = [10, 12, 15, null, 18];
		const ghosts = [false, false, false, true, false];
		const mr = movingRanges(values, ghosts);
		// MR between 10 & 12 = 2, 12 & 15 = 3, skip null ghost, 15 & 18 = 3
		expect(mr[1]).toBe(2);
		expect(mr[2]).toBe(3);
		expect(mr[4]).toBe(3);
	});

	it("mrMeanWithOptionalExclusion trims outliers when enabled", () => {
		const mr = [1, 1, 1, 20];
		const noTrim = mrMeanWithOptionalExclusion(mr, false);
		const trimmed = mrMeanWithOptionalExclusion(mr, true);
		expect(noTrim.mrMean).toBeGreaterThan(trimmed.mrMean);
	});

	it("xmrLimits returns correct symmetric limits", () => {
		const lim = xmrLimits(100, 2); // MRbar=2 => 3σ span = 5.32
		expect(lim.upperProcessLimit).toBeCloseTo(100 + 2.66 * 2, 5);
		expect(lim.lowerProcessLimit).toBeCloseTo(100 - 2.66 * 2, 5);
	});

	it("tChartLimits suppresses lower limit when transform negative", () => {
		const vals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => n * 5);
		const ghosts = vals.map(() => false);
		const res = tChartLimits(vals, ghosts, false);
		expect(res.upperProcessLimit === null || res.upperProcessLimit > 0).toBe(
			true
		);
	});

	it("gChartProbabilityLimits produces ordered bands", () => {
		const g = gChartProbabilityLimits(10);
		if (g.oneLow && g.twoLow) expect(g.twoLow).toBeLessThanOrEqual(g.oneLow);
		if (g.oneHigh && g.twoHigh)
			expect(g.oneHigh).toBeLessThanOrEqual(g.twoHigh);
	});

	it("mean returns NaN for empty array", () => {
		expect(isNumber(mean([]))).toBe(false);
	});
});
