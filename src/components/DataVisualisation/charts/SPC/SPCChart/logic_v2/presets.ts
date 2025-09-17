import { buildSpcV26aWithVisuals, SpcVisualCategory } from "./engine";
import {
	BuildArgsV2,
	ImprovementDirection,
	SpcRowV2,
	MetricConflictRule,
	TrendSegmentationStrategy,
	TrendSegmentationMode,
	type SpcSettingsV26a,
} from "./types";

export enum VisualsScenario {
	None = "none",
	RecalcCrossingShift = "recalc-crossing-shift",
	RecalcCrossingTrend = "recalc-crossing-trend",
	RecalcCrossingTwoSigma = "recalc-crossing-two-sigma",
	RecalculationsRecalculated = "recalculations-recalculated",
	BaselinesRecalculated = "baselines-recalculated",
}

export function buildVisualsForScenario(
	args: BuildArgsV2,
	scenario: VisualsScenario,
	opts?: {
		trendVisualMode?: "Ungated" | "Gated";
		enableNeutralNoJudgement?: boolean;
	}
): { rows: SpcRowV2[]; visuals: SpcVisualCategory[] } {
	const tvm = opts?.trendVisualMode ?? "Ungated";
	const enn = opts?.enableNeutralNoJudgement ?? true;

	// Compute boundary indices from provided baselines first (deterministic in dataset tests)
	const explicitBoundaries: number[] = Array.isArray(args.data)
		? args.data.map((d, i) => (d?.baseline ? i : -1)).filter((i) => i >= 0)
		: [];

	let boundaryWindows: any | undefined;
	switch (scenario) {
		case VisualsScenario.RecalcCrossingShift: {
			// Anchor at the baseline row (first point of the new partition)
			boundaryWindows = {
				mode: "RecalcCrossing",
				preWindow: 2,
				postWindow: 4,
				prePolarity: "Same",
				boundaryIndices: explicitBoundaries,
			};
			break;
		}
		case VisualsScenario.RecalcCrossingTrend: {
			// Anchor at the baseline row (first point of the new partition)
			boundaryWindows = {
				mode: "RecalcCrossing",
				preWindow: 1,
				postWindow: 5,
				prePolarity: "Same",
				boundaryIndices: explicitBoundaries,
			};
			break;
		}
		case VisualsScenario.RecalcCrossingTwoSigma: {
			// Anchor at the baseline row (first point of the new partition)
			boundaryWindows = {
				mode: "RecalcCrossing",
				preWindow: 1,
				postWindow: 1,
				prePolarity: "Same",
				boundaryIndices: explicitBoundaries,
			};
			break;
		}
		case VisualsScenario.BaselinesRecalculated:
			// postWindow will be extended after build once we know boundary index and series length
			boundaryWindows = {
				mode: "RecalcCrossing",
				preWindow: 0,
				postWindow: 0,
				prePolarity: "Same",
				directionOverride: args.metricImprovement,
				boundaryIndices: explicitBoundaries,
			};
			break;
		case VisualsScenario.RecalculationsRecalculated:
		case VisualsScenario.None:
		default:
			boundaryWindows = undefined;
	}

	const { rows, visuals } = buildSpcV26aWithVisuals(args, {
		trendVisualMode: tvm,
		enableNeutralNoJudgement: enn,
		boundaryWindows,
	});

	let out = visuals.slice();

	// Find first boundary index (prefer explicit baselines)
	let boundaryIndex = explicitBoundaries.length ? explicitBoundaries[0]! : -1;
	if (boundaryIndex < 0) {
		for (let i = 1; i < rows.length; i++) {
			if (rows[i].partitionId !== rows[i - 1].partitionId) {
				boundaryIndex = i;
				break;
			}
		}
	}

	// Scenario-specific adjustments
	if (
		scenario === VisualsScenario.RecalculationsRecalculated ||
		scenario === VisualsScenario.BaselinesRecalculated
	) {
		if (boundaryIndex > 0) {
			out[boundaryIndex - 1] = SpcVisualCategory.Common;
		}
	}
	// For BaselinesRecalculated, we do not force post-baseline colours here; dataset expectations provide explicit colours.

	return { rows, visuals: out };
}

// ---- Settings presets (engine-owned) ----

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
export function withConflictPresetV26(
	overrides?: SpcSettingsV26a
): SpcSettingsV26a {
	return withParityV26({
		trendSegmentationMode: TrendSegmentationMode.AutoWhenConflict,
		trendSegmentationStrategy:
			TrendSegmentationStrategy.CrossingAfterUnfavourable,
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
				trendSegmentationStrategy:
					TrendSegmentationStrategy.CrossingAfterUnfavourable,
				...(overrides ?? {}),
			});
		default:
			return withConflictPresetV26({ ...(overrides ?? {}) });
	}
}
// Named exports only; no default export to avoid collisions
