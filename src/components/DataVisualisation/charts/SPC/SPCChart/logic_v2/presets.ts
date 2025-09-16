import { ImprovementDirection, MetricConflictRule, TrendSegmentationStrategy, TrendSegmentationMode, type SpcSettingsV26a } from "./types";

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

// Conflict-focused preset for datasets with trend/mean crossings.
// Uses segmentation with CrossingAfterUnfavourable and keeps other parity defaults.
export function withConflictPresetV26(overrides?: SpcSettingsV26a): SpcSettingsV26a {
	return withParityV26({
		trendSegmentationMode: TrendSegmentationMode.AutoWhenConflict,
		trendSegmentationStrategy: TrendSegmentationStrategy.CrossingAfterUnfavourable,
		// Keep strict SQL pruning semantics by default; allow caller to opt into stronger levers below
		preferTrendWhenConflict: false,
		trendDominatesHighlightedWindow: false,
		...(overrides ?? {}),
	});
}

// Direction-aware conflict preset that auto-chooses the safest behaviour per improvement direction:
//  - Up ("High is good"): prefer improvement override and implicitly disable segmentation via engine gating
//  - Down ("Low is good"): keep segmentation enabled with CrossingAfterUnfavourable (works for dataset parity)
//  - Neither: fall back to generic conflict preset defaults
// Overrides are applied last so callers (e.g. Storybook controls) can still force a specific behaviour.
export function withConflictPresetAutoV26(
	metricImprovement: ImprovementDirection,
	overrides?: SpcSettingsV26a
): SpcSettingsV26a {
	switch (metricImprovement) {
		case ImprovementDirection.Up:
			return withConflictPresetV26({
				// Engine will gate segmentation off when this is true
				preferImprovementWhenConflict: true,
				trendSegmentationMode: TrendSegmentationMode.Off,
				...(overrides ?? {}),
			});
		case ImprovementDirection.Down:
			return withConflictPresetV26({
				// Keep segmentation to resolve cross-mean runs for low-is-good datasets
				preferImprovementWhenConflict: false,
				trendSegmentationMode: TrendSegmentationMode.AutoWhenConflict,
				trendSegmentationStrategy: TrendSegmentationStrategy.CrossingAfterUnfavourable,
				...(overrides ?? {}),
			});
		default:
			return withConflictPresetV26({ ...(overrides ?? {}) });
	}
}

export default { PARITY_V26, withParityV26, withConflictPresetV26, withConflictPresetAutoV26 };
