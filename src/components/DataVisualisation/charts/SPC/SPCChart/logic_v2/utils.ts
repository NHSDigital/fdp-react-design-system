// A small helper to check a value is a proper finite number.
import { MR_UCL_FACTOR, XMR_THREE_SIGMA_FACTOR } from "./constants";

export function isNumber(n: unknown): n is number {
	return typeof n === "number" && !Number.isNaN(n);
}

// Arithmetic mean of a numeric array. Returns 0 when empty to avoid NaN.
export function mean(nums: number[]): number {
	return nums.reduce((a, b) => a + b, 0) / (nums.length || 1);
}

// Compute moving ranges against the previous non-ghosted numeric value, returning null when not applicable.
export function movingRanges(
	values: (number | null | undefined)[],
	ghosts: boolean[]
): (number | null)[] {
	const mr: (number | null)[] = new Array(values.length).fill(null);
	let lastIdx: number | null = null;
	for (let i = 0; i < values.length; i++) {
		const v = values[i];
		if (ghosts[i] || !isNumber(v)) continue;
		if (lastIdx !== null) {
			const prev = values[lastIdx];
			if (isNumber(prev)) mr[i] = Math.abs(v - prev);
		}
		lastIdx = i;
	}
	return mr;
}

// Compute MR mean with an optional single-pass exclusion of values above the UCL (3.267 * MRbar),
// mirroring the SQL behaviour when moving range outlier removal is enabled.
export function mrMeanWithOptionalExclusion(
	mr: (number | null)[],
	excludeOutliers: boolean
): { mrMean: number; mrUcl: number } {
	const vals = mr.filter(isNumber) as number[];
	if (!vals.length) return { mrMean: NaN, mrUcl: NaN };
	let arr = vals.slice();
	if (excludeOutliers) {
		const meanMr = mean(arr);
		const ucl = MR_UCL_FACTOR * meanMr; // standard MR UCL
		arr = arr.filter((v) => v <= ucl);
	}
	const mrMean = mean(arr);
	return { mrMean, mrUcl: MR_UCL_FACTOR * mrMean };
}

// Given a centre line and MR mean, return standard XmR limits and 1σ/2σ bands.
export function xmrLimits(center: number, mrMean: number) {
	// When mrMean is 0 (flat series), produce zero-width limits at the center line
	// instead of nulls so partitions with no variation still render control lines.
	if (!isNumber(center) || !isNumber(mrMean)) {
		return {
			upperProcessLimit: null,
			lowerProcessLimit: null,
			upperTwoSigma: null,
			lowerTwoSigma: null,
			upperOneSigma: null,
			lowerOneSigma: null,
		};
	}
	const threeSigma = XMR_THREE_SIGMA_FACTOR * mrMean;
	const twoSigma = (2 / 3) * threeSigma;
	const oneSigma = (1 / 3) * threeSigma;
	return {
		upperProcessLimit: center + threeSigma,
		lowerProcessLimit: center - threeSigma,
		upperTwoSigma: center + twoSigma,
		lowerTwoSigma: center - twoSigma,
		upperOneSigma: center + oneSigma,
		lowerOneSigma: center - oneSigma,
	};
}
