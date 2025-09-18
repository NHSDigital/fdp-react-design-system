import {
	isNumber,
	mean,
	movingRanges,
	mrMeanWithOptionalExclusion,
	xmrLimits,
} from "./utils";
import { ChartType } from "./types";
import { T_TRANSFORM_EXP } from "./constants";

// Compute control lines for a single partition based on chart type.
// For v2.6a parity we focus on XmR here; T and G can be added later.
export function computePartitionLimits(
	chartType: ChartType,
	values: (number | null)[],
	ghosts: boolean[],
	excludeMovingRangeOutliers: boolean
) {
	// T chart: transform-positive values with exponent, compute XmR in y-space, back-transform control lines
	if (chartType === ChartType.T) {
		const yVals: (number | null)[] = values.map((v) => (isNumber(v) && v! > 0 ? Math.pow(v!, T_TRANSFORM_EXP) : null));
		const mr = movingRanges(yVals, ghosts);
		const mrStats = mrMeanWithOptionalExclusion(mr, excludeMovingRangeOutliers);
		// Center: mean of eligible transformed values (exclude null/ghost)
		const eligible = yVals.filter((v, i) => !ghosts[i] && isNumber(v)) as number[];
		const centerY = eligible.length ? mean(eligible) : NaN;
		const limY = xmrLimits(centerY, mrStats.mrMean);
		// Back-transform helper
		const inv = (y: number | null) => (isNumber(y) && y! > 0 ? Math.pow(y!, 1 / T_TRANSFORM_EXP) : null);
		const upl = isNumber(limY.upperProcessLimit) ? inv(limY.upperProcessLimit) : null;
		const lpl = isNumber(limY.lowerProcessLimit) && limY.lowerProcessLimit > 0 ? inv(limY.lowerProcessLimit) : null; // suppress when Y-limit <= 0
		const u2 = isNumber(limY.upperTwoSigma) ? inv(limY.upperTwoSigma) : null;
		const l2 = isNumber(limY.lowerTwoSigma) && limY.lowerTwoSigma > 0 ? inv(limY.lowerTwoSigma) : null; // suppress when Y-limit <= 0
		const u1 = isNumber(limY.upperOneSigma) ? inv(limY.upperOneSigma) : null;
		const l1 = isNumber(limY.lowerOneSigma) && limY.lowerOneSigma > 0 ? inv(limY.lowerOneSigma) : null; // suppress when Y-limit <= 0
		return {
			mean: isNumber(centerY) && centerY > 0 ? inv(centerY) : null,
			mr,
			mrMean: mrStats.mrMean,
			mrUcl: mrStats.mrUcl,
			upperProcessLimit: upl,
			lowerProcessLimit: lpl,
			upperTwoSigma: u2,
			lowerTwoSigma: l2,
			upperOneSigma: u1,
			lowerOneSigma: l1,
		};
	}

	if (chartType === ChartType.G) {
		// Geometric distribution based limits for count-between-events (support includes 0)
		// Compute sample mean m from eligible (non-ghost, numeric) counts
		const eligible = values.filter((v, i) => !ghosts[i] && isNumber(v)) as number[];
		const m = eligible.length ? mean(eligible) : NaN;
		// Convert mean to geometric parameter for 0-based support: mean = (1-p)/p => p = 1/(m+1)
		const p = isNumber(m) ? 1 / (m + 1) : NaN;
		// Quantile function for 0-based geometric: Q(q) = ceil(log(1-q)/log(1-p)) - 1
		const qgeom = (q: number) => {
			if (!isNumber(p) || p <= 0 || p >= 1) return NaN;
			const k = Math.ceil(Math.log(1 - q) / Math.log(1 - p)) - 1;
			return Math.max(0, k);
		};
		// Normal 3σ-equivalent tail ~ 0.00135
		const qLower3 = 0.00135;
		const qUpper3 = 1 - 0.00135;
		// 2σ-equivalent tails ~ 0.02275 / 0.97725
		const qLower2 = 0.02275;
		const qUpper2 = 1 - 0.02275;
		// 1σ-equivalent tails ~ 0.158655 / 0.841345
		const qLower1 = 0.158655;
		const qUpper1 = 1 - 0.158655;

		const upl = qgeom(qUpper3);
		const lpl = qgeom(qLower3); // already clamped to >= 0
		const u2 = qgeom(qUpper2);
		const l2 = qgeom(qLower2);
		const u1 = qgeom(qUpper1);
		const l1 = qgeom(qLower1);

		return {
			mean: isNumber(m) ? m : null,
			mr: new Array(values.length).fill(null) as (number | null)[],
			mrMean: NaN,
			mrUcl: NaN,
			upperProcessLimit: isNumber(upl) ? upl : null,
			lowerProcessLimit: isNumber(lpl) ? lpl : null,
			upperTwoSigma: isNumber(u2) ? u2 : null,
			lowerTwoSigma: isNumber(l2) ? l2 : null,
			upperOneSigma: isNumber(u1) ? u1 : null,
			lowerOneSigma: isNumber(l1) ? l1 : null,
		};
	}
	if (chartType !== ChartType.XmR) {
		// Other types not implemented
		return {
			mean: NaN,
			mr: new Array(values.length).fill(null) as (number | null)[],
			mrMean: NaN,
			mrUcl: NaN,
			upperProcessLimit: null as number | null,
			lowerProcessLimit: null as number | null,
			upperTwoSigma: null as number | null,
			lowerTwoSigma: null as number | null,
			upperOneSigma: null as number | null,
			lowerOneSigma: null as number | null,
		};
	}

	const mr = movingRanges(values, ghosts);
	// Raw MR mean/UCL used for determining which value points are excluded from the centre-line
	const mrVals = mr.filter(isNumber) as number[];
	const rawMrMean = mrVals.length ? mean(mrVals) : NaN;
	const rawMrUcl = isNumber(rawMrMean) ? 3.267 * rawMrMean : NaN;

	// Compute centre line: optionally exclude values whose MR exceeds the RAW MR UCL (include first valued point where MR is null)
	let center: number = NaN;
	{
		const eligibleVals = values.reduce<number[]>((acc, v, i) => {
			// Skip ghosts and non-numeric values
			if (ghosts[i] || !isNumber(v)) return acc;
			// If not excluding MR outliers, include directly
			if (!excludeMovingRangeOutliers) {
				acc.push(v as number);
				return acc;
			}
			// Otherwise, include when MR is null (first eligible point) or MR <= raw UCL
			const mri = mr[i];
			if (mri === null || !isNumber(rawMrUcl) || (isNumber(mri) && mri <= rawMrUcl)) {
				acc.push(v as number);
			}
			return acc;
		}, []);
		center = eligibleVals.length ? mean(eligibleVals) : NaN;
	}

	// MR mean used for limits may itself exclude MR outliers (trim then recompute MRbar and UCL)
	const tmp = mrMeanWithOptionalExclusion(mr, excludeMovingRangeOutliers);
	const lim = xmrLimits(center, tmp.mrMean);
	return {
		mean: center,
		mr,
		mrMean: tmp.mrMean,
		mrUcl: tmp.mrUcl,
		...lim,
	};
}
