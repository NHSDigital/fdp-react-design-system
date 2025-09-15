import { describe, it, expect } from "vitest";
import { xmrLimits, mean, mrMeanWithOptionalExclusion } from "../utils";
import { XMR_THREE_SIGMA_FACTOR, MR_UCL_FACTOR } from "../constants";

const EPS = 1e-10;

function close(a: number, b: number, eps = EPS) {
	expect(Math.abs(a - b)).toBeLessThanOrEqual(eps);
}

describe("XmR limit maths", () => {
	it("computes limits using 2.66*MRbar and derives 1σ/2σ", () => {
		const center = 100;
		const mrbar = 5; // arbitrary
		const {
			upperProcessLimit,
			lowerProcessLimit,
			upperTwoSigma,
			lowerTwoSigma,
			upperOneSigma,
			lowerOneSigma,
		} = xmrLimits(center, mrbar);

		const three = XMR_THREE_SIGMA_FACTOR * mrbar;
		const two = (2 / 3) * three;
		const one = (1 / 3) * three;

		close(upperProcessLimit!, center + three);
		close(lowerProcessLimit!, center - three);
		close(upperTwoSigma!, center + two);
		close(lowerTwoSigma!, center - two);
		close(upperOneSigma!, center + one);
		close(lowerOneSigma!, center - one);
	});

	it("computes MR UCL using 3.267*MRbar (no outlier exclusion)", () => {
		const mr = [1, 2, 3, 4, 5];
		const { mrMean, mrUcl } = mrMeanWithOptionalExclusion(mr, false);
		close(mrUcl, MR_UCL_FACTOR * mrMean);
	});

	it("excludes MR outliers above 3.267*MRbar when enabled", () => {
		const mr = [1, 2, 3, 1000, 4, 5];
		const base = mrMeanWithOptionalExclusion(mr, false);
		const excl = mrMeanWithOptionalExclusion(mr, true);
		// Excluding the huge outlier should reduce MRbar and thus the UCL
		expect(excl.mrMean).toBeLessThan(base.mrMean);
		expect(excl.mrUcl).toBeLessThan(base.mrUcl);
	});

	it("returns zero-width limits when mrMean = 0; returns null when inputs invalid", () => {
		const flat = xmrLimits(100, 0);
		// Zero-width limits at center line for flat series
		expect(flat.upperProcessLimit).toBe(100);
		expect(flat.lowerProcessLimit).toBe(100);
		expect(flat.upperTwoSigma).toBe(100);
		expect(flat.lowerTwoSigma).toBe(100);
		expect(flat.upperOneSigma).toBe(100);
		expect(flat.lowerOneSigma).toBe(100);

		// Invalid center or mrMean yields null bands/limits
		const badCenter = xmrLimits(NaN as any, 5);
		expect(badCenter.upperTwoSigma).toBeNull();
		const badMr = xmrLimits(100, NaN as any);
		expect(badMr.upperProcessLimit).toBeNull();
	});
});
