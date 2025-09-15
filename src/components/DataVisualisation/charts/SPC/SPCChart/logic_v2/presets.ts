import { MetricConflictRule, SpcSettingsV26a } from "./types";

// SQL v2.6 parity preset (with trend across partitions from SQL v2.2 note)
export const PARITY_V26: Readonly<SpcSettingsV26a> = Object.freeze({
	minimumPoints: 13,
	shiftPoints: 6,
	trendPoints: 6,
	excludeMovingRangeOutliers: false,
	metricConflictRule: MetricConflictRule.Improvement,
	trendAcrossPartitions: true,
	twoSigmaIncludeAboveThree: true,
	chartLevelEligibility: true,
});

export function withParityV26(overrides?: SpcSettingsV26a): SpcSettingsV26a {
	return { ...PARITY_V26, ...(overrides ?? {}) };
}

export default { PARITY_V26, withParityV26 };
