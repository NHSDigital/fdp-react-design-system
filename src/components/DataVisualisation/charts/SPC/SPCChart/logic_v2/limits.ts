import {
	isNumber,
	mean,
	movingRanges,
	mrMeanWithOptionalExclusion,
	xmrLimits,
} from "./utils";
import { ChartType } from "./types";

// Compute control lines for a single partition based on chart type.
// For v2.6a parity we focus on XmR here; T and G can be added later.
export function computePartitionLimits(
	chartType: ChartType,
	values: (number | null)[],
	ghosts: boolean[],
	excludeMovingRangeOutliers: boolean
) {
	if (chartType !== ChartType.XmR) {
		// For v2.6a focus, we only implement XmR path now; T/G can be added later if needed
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
		const eligibleVals: number[] = [];
		for (let i = 0; i < values.length; i++) {
			const v = values[i];
			if (ghosts[i] || !isNumber(v)) continue;
			if (!excludeMovingRangeOutliers) {
				eligibleVals.push(v);
				continue;
			}
			const mri = mr[i];
			// Include when MR is null (first point) or MR <= raw UCL
			if (mri === null || !isNumber(rawMrUcl) || (isNumber(mri) && mri <= rawMrUcl)) {
				eligibleVals.push(v);
			}
		}
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
