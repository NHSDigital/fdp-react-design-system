// Assurance icon helper – now returns engine enum (single source of truth via spcConstants)
// Contract:
// - Inputs: metricImprovement, capabilityMode, row value/limits, target
// - Output: AssuranceIcon (Pass | Fail | None) matching existing semantics in spc.ts

import { AssuranceIcon, ImprovementDirection } from "./spcConstants";

// Backward compatible type aliases (prefer importing enums from spcConstants directly)
export type ImprovementDir = ImprovementDirection;
export type AssuranceResult = AssuranceIcon;

export function computeAssuranceIcon(args: {
	metricImprovement: ImprovementDirection;
	capabilityMode: boolean | undefined;
	value: number | null;
	mean: number | null;
	upperProcessLimit: number | null;
	lowerProcessLimit: number | null;
	target: number | null;
}): AssuranceIcon {
	const {
		metricImprovement,
		capabilityMode,
		value,
		mean,
		upperProcessLimit,
		lowerProcessLimit,
		target,
	} = args;

	const isNumber = (v: unknown): v is number =>
		typeof v === "number" && Number.isFinite(v as number);

	if (!isNumber(value) || mean === null || !isNumber(target)) return AssuranceIcon.None;

	if (
		capabilityMode &&
		isNumber(upperProcessLimit) &&
		isNumber(lowerProcessLimit)
	) {
		if (metricImprovement === ImprovementDirection.Up) {
			if (isNumber(lowerProcessLimit) && lowerProcessLimit > target)
				return AssuranceIcon.Pass;
			if (isNumber(upperProcessLimit) && upperProcessLimit < target)
				return AssuranceIcon.Fail;
			return AssuranceIcon.None;
		}
		if (metricImprovement === ImprovementDirection.Down) {
			if (isNumber(upperProcessLimit) && upperProcessLimit < target)
				return AssuranceIcon.Pass;
			if (isNumber(lowerProcessLimit) && lowerProcessLimit > target)
				return AssuranceIcon.Fail;
			return AssuranceIcon.None;
		}
		return AssuranceIcon.None;
	}

	// Fallback: single-point vs target
	if (metricImprovement === ImprovementDirection.Down)
		return value <= target ? AssuranceIcon.Pass : AssuranceIcon.Fail;
	if (metricImprovement === ImprovementDirection.Up)
		return value >= target ? AssuranceIcon.Pass : AssuranceIcon.Fail;
	return AssuranceIcon.None;
}

export default { computeAssuranceIcon };
