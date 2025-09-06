import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SPCChart, ImprovementDirection } from "./SPCChart";
import { ChartContainer } from "../../ChartContainer.tsx";
import { resolvedSpcTestCases, mapDirection } from "./test-data/spcTestCases";

/**
 * NOTE: Storybook cannot statically analyse dynamically-created exports (e.g. mutating the exports object).
 * We therefore map the structured test case catalogue to a lookup and expose one static named export per case
 * (similar to the dataset stories file). This makes the stories reliably visible in the sidebar.
 */
const meta: Meta = {
	title: "Data Visualisation/SPC/Manual Test Cases",
	parameters: {
		docs: {
			description: {
				component:
					"Structured SPC scenarios derived from the XmR testing specification. Each story renders a chart with the values sourced from the canonical CSV test dataset (or explicit inline values). Optional expectations (limits, colours) are asserted in automated tests.",
			},
		},
	},
};
export default meta;

type Story = StoryObj;

const caseLookup = resolvedSpcTestCases.reduce<
	Record<string, (typeof resolvedSpcTestCases)[number]>
>((acc, c) => {
	acc[c.title] = c;
	return acc;
}, {});

function buildStory(title: string): Story {
	let tc = caseLookup[title];
	// Provide alias variants that reuse the base dataset but apply different settings heuristically
	if (!tc && title === 'Recalculations (recalculated)') {
		const base = caseLookup['Recalculations / Baselines'];
		if (base) {
			// Shallow clone with same values
			tc = { ...base, title } as any;
		}
	}
	const dir = mapDirection(tc?.direction);
	return {
		name: title,
		render: () => {
			if (!tc) return <div>Missing test case: {title}</div>;
			return (
				<ChartContainer
					title={tc.title}
					description={`Points: ${tc.values.length}`}
					source={
						(tc as any).sourceMetric
							? `Dataset metric: ${tc.sourceMetric}`
							: "Dataset metric"
					}
				>
					{(() => {
						// Configure heuristic & auto recalculation settings mirroring dataset stories
						const title = tc.title;
						const isRecalcFamily = title.startsWith('Recalculations') || title.startsWith('Baselines') || title.startsWith('Special cause crossing recalculations');
						const isOriginal = title === 'Baselines (original)' || title === 'Recalculations / Baselines';
							const isShifted = title === 'Baselines (shifted)';
							const isBaselineShifted = title === 'Baselines (shifted)';
						const isLateConcerns = title === 'Recalculations (late concerns)';
						const isRecalculated = title === 'Recalculations (recalculated)';
						const settings = isRecalcFamily ? {
							// Auto recalculation drives partition (baseline) insertion for recalculated & shifted variants
							...((isRecalculated || isShifted) ? {
								autoRecalculateAfterShift: true,
								autoRecalculateDeltaSigma: 0.5,
								// comparative baseline emulation removed
							} : {}),
							...(isOriginal ? {
								// Original baseline: colour first phase as concern, later as improvement, no auto recalculation
								// comparative baseline emulation removed
							} : {}),
							...(isLateConcerns ? {
								// comparative baseline emulation removed
							} : {}),
							...(isShifted ? {
								// comparative baseline emulation removed
							} : {}),
							...(isBaselineShifted ? {
								// Invert tail to mark last 15 as concern per expectations
								// comparative baseline emulation removed
							} : {}),
						} : { };
						return (
					<SPCChart
						data={tc.values.map((y, i) => ({ x: new Date(2024, 0, i + 1), y }))}
						metricImprovement={dir as ImprovementDirection}
						announceFocus
						narrationContext={{ measureName: tc.title }}
						targets={tc.target ? [tc.target] : []}
						gradientSequences={true}
							showPoints
							enableRules
							settings={settings as any}
						// settings={{
						// 	specialCauseShiftPoints
						// }}
					/>
						);
					})()}
				</ChartContainer>
			);
		},
	};
}

// Static named exports (keep in sync with spcTestCases.ts entries)
export const Number_of_points_12 = buildStory("Number of points - 12");
export const Number_of_points_13 = buildStory("Number of points - 13");
export const Process_limits_15 = buildStory("Process limits - 15");
export const Process_limits_10 = buildStory("Process limits - 10");
export const Special_cause_high = buildStory("Special cause - High is good");
export const Special_cause_low = buildStory("Special cause - Low is good");
export const Special_cause_neither = buildStory("Special cause - Neither");
export const Special_cause_single_point_ends = buildStory(
	"Special cause - single point - ends"
);
export const Special_cause_single_point_middle = buildStory(
	"Special cause - single point - middle"
);
export const Special_cause_shift_ends = buildStory(
	"Special cause - shift - ends"
);
export const Special_cause_shift_middle = buildStory(
	"Special cause - shift - middle"
);
export const Special_cause_trend_no_pauses = buildStory(
	"Special cause - trend - no pauses"
);
export const Special_cause_trend_pauses = buildStory(
	"Special cause - trend - pauses"
);
export const Special_cause_two_sigma_1 = buildStory(
	"Special cause - two-sigma - 1"
);
export const Special_cause_two_sigma_2 = buildStory(
	"Special cause - two-sigma - 2"
);
export const Special_cause_two_sigma_3 = buildStory(
	"Special cause - two-sigma - 3"
);
export const Special_cause_conflict_high = buildStory("Special cause conflict - High is good");
export const Special_cause_conflict_low = buildStory("Special cause conflict - Low is good");
export const Recalculations_Baselines = buildStory(
	"Recalculations / Baselines"
);
export const Recalculations_recalculated = buildStory(
	"Recalculations (recalculated)"
);
export const Recalculations_late_concerns = buildStory(
	"Recalculations (late concerns)"
);
export const Baselines_original = buildStory("Baselines (original)");
export const Baselines_shifted = buildStory("Baselines (shifted)");
export const Special_cause_crossing_recalculations_and_baselines_shift =
	buildStory("Special cause crossing recalculations and baselines - shift");
export const Special_cause_crossing_recalculations_and_baselines_trend =
	buildStory("Special cause crossing recalculations and baselines - trend");
export const Special_cause_crossing_recalculations_and_baselines_two_sigma =
	buildStory("Special cause crossing recalculations and baselines - two-sigma");
export const Summary_icons_assurance = buildStory("Summary icons - assurance");
export const Summary_icons_assurance_too_few_points = buildStory(
	"Summary icons - assurance - too few points"
);
export const Summary_icons_variation_1 = buildStory(
	"Summary icons - variation - 1"
);
export const Summary_icons_variation_2 = buildStory(
	"Summary icons - variation - 2"
);
export const Summary_icons_variation_3 = buildStory(
	"Summary icons - variation - 3"
);
export const Summary_icons_variation_too_few_points = buildStory(
	"Summary icons - variation - too few points"
);
export const Special_cause_low_is_good_variant = buildStory(
	"Special cause (low is good variant)"
);
export const Special_cause_neither_variant = buildStory(
	"Special cause (neither variant)"
);
