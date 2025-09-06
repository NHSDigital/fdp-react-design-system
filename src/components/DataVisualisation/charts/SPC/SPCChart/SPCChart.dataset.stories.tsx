import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SPCChart, ImprovementDirection } from './SPCChart';
import { ChartContainer } from '../../ChartContainer.tsx';
import { metricLookup } from './test-data/parsedDataset';

const meta: Meta = {
	title: 'Data Visualisation/SPC/Dataset',
	parameters: {
		docs: { description: { component: `Dataset-driven SPC Examples\n\nThis suite renders one SPC chart per metric parsed from the test CSV. It exercises:\n- Parsing & date handling\n- Minimum point suppression of limits (<13)\n- Independent partition / baseline recalculation\n- Special cause scenarios (single point, shift, trend, two-sigma patterns, conflicts)\n- Variation vs assurance icon logic (including insufficient data)\n- Edge conditions: too few points, conflicting rules, recalculations crossing signals\n- Ghost/baseline handling where present\nKeyboard + tooltip behaviour is consistent across all charts.` } }
	},
	argTypes: {
		improvementDirection: {
			control: { type: 'radio' },
			options: ['neither','higher','lower'],
			description: 'Direction considered an improvement for variation & assurance logic.'
		}
	},
	args: { improvementDirection: 'neither' }
};
export default meta;

type Story = StoryObj<{ improvementDirection: 'neither' | 'higher' | 'lower' }>;

// Helper to build a story
function story(metric: string): Story {
	// Look up dataset; allow variant stories to alias an existing base metric
	let data = (metricLookup as any)[metric];
	if (!data) {
		// Reuse base dataset for recalculated / shifted variants
		if (metric === 'Recalculations (recalculated)' || metric === 'Baselines (shifted)') {
			data = (metricLookup as any)['Recalculations / Baselines'];
		}
	}

	// Infer a default improvement direction from the metric name (user can still override via controls)
	const nameLower = metric.toLowerCase();
	const inferredArgDir: 'neither' | 'higher' | 'lower' = nameLower.includes('high is good')
		? 'higher'
		: nameLower.includes('low is good')
			? 'lower'
			: 'neither';
  const storySpecific: Record<string,string> = {
	'Number of points - 12': 'Exactly 12 points: below minimum; no limits or icons expected.',
	'Number of points - 13': 'Threshold case: limits appear once the 13th valid point arrives.',
	'Process limits - 15': 'Stable series with sufficient points to display limits & zones.',
	'Process limits - 10': 'Too few points (10) so limits suppressed – tests suppression logic.',
	'Special cause - High is good': 'Contains at least one classic special-cause point beyond limit.',
	'Special cause - Low is good': 'Contains at least one classic special-cause point below limit.',
	'Special cause - Neither': 'Contains at least one classic special-cause point within limits.',
	'Special cause - single point - ends': 'Terminal outlier to exercise single-point above/below detection at end.',
	'Special cause - single point - middle': 'Mid-series outlier ensuring internal single-point detection.',
	'Special cause - shift - ends': 'Shift sequence occurs near the end boundary.',
	'Special cause - shift - middle': 'Shift sequence embedded mid-series.',
	'Special cause - trend - no pauses': 'Monotonic increasing/decreasing run with no interruptions.',
	'Special cause - trend - pauses': 'Trend containing small plateaus (tests permissible pauses).',
	'Special cause - two-sigma - 1': 'Pattern meeting 2 of 3 beyond ±2σ (scenario variant 1).',
	'Special cause - two-sigma - 2': 'Second variant for 2 of 3 beyond ±2σ rule.',
	'Special cause - two-sigma - 3': 'Third variant for 2 of 3 beyond ±2σ rule.',
	'Special cause conflict - High is good': 'Deliberate conflicting signals to test conflict handling & precedence.',
	'Special cause conflict - Low is good': 'Deliberate conflicting signals to test conflict handling & precedence.',
	'Recalculations / Baseline': 'Introduces baseline splits causing new partitions & limit recalculation.',
	'Special cause crossing recalculations and baselines - shift': 'Shift spanning a recalculation/baseline boundary.',
	'Special cause crossing recalculations and baselines - trend': 'Trend spanning a baseline causing partition transition.',
	'Special cause crossing recalculations and baselines - two-sigma': 'Two-sigma pattern across a recalculation boundary.',
	'Summary icons - assurance': 'Assurance icon (target pass/fail) scenarios with sufficient points.',
	'Summary icons - assurance - too few points': 'Target present but insufficient data so assurance suppressed.',
	'Summary icons - variation - 1': 'Variation icon example (case 1).',
	'Summary icons - variation - 2': 'Variation icon example (case 2).',
	'Summary icons - variation - 3': 'Variation icon example (case 3).',
	'Summary icons - variation - too few points': 'Variation classification suppressed due to insufficient data.'
  };
	return {
		name: metric,
		args: { improvementDirection: inferredArgDir },
		parameters: {
			docs: { description: { story: storySpecific[metric] || 'Dataset scenario.' } }
		},
			render: ({ improvementDirection = 'neither' }) => {
			const dir = improvementDirection === 'higher' ? ImprovementDirection.Up : improvementDirection === 'lower' ? ImprovementDirection.Down : ImprovementDirection.Neither;
			// Inject comparative heuristic settings for recalculation/baseline scenarios so Storybook matches test expectations
			const comparativeScenario = metric.startsWith('Recalculations') || metric.startsWith('Baseline') || metric.startsWith('Baselines');
			const lateConcerns = metric.includes('late concerns');
			const shifted = metric.includes('(shifted)');
			const original = metric.includes('(original)') || metric === 'Recalculations / Baselines';
			const baselinesShifted = metric === 'Baselines (shifted)';
			const recalculated = metric.includes('(recalculated)');
			// Baseline vs recalculated behaviour:
			//  - Original (baseline) variant: NO auto recalculation & NO comparative retrospective relabelling (shows initial baseline limits only)
			//  - Recalculated variant: enable autoRecalculateAfterShift + comparative emulation to recolour early phase as concern & later as improvement
			const settings = comparativeScenario ? {
				...(recalculated ? {
					autoRecalculateAfterShift: true,
					autoRecalculateDeltaSigma: 0.5,
					// comparative baseline emulation removed
				} : {}),
				...(original ? {
					// Original baseline view: show early phase as concern and later as improvement (no auto recalculation)
					// comparative baseline emulation removed
				} : {}),
				...(lateConcerns ? {
					// comparative baseline emulation removed
				} : {}),
				...(shifted ? {
					// comparative baseline emulation removed
				} : {}),
				...(baselinesShifted ? {
					// For Baselines (shifted) expected tail concerns: invert tail concern points
					// comparative baseline emulation removed
				} : {}),
			} : { };
			return (
				<ChartContainer title={metric} description={`Points: ${data.length}`} source="CSV dataset">
					<SPCChart
						data={data}
						announceFocus
						metricImprovement={dir}
						narrationContext={{ measureName: metric }}
						settings={settings as any}
						showPoints
						enableRules
						gradientSequences={true}
					/>
				</ChartContainer>
			);
		}
	};
}

export const Number_of_points_12 = story('Number of points - 12');
export const Number_of_points_13 = story('Number of points - 13');
export const Process_limits_15 = story('Process limits - 15');
export const Process_limits_10 = story('Process limits - 10');
export const Special_cause_high = story('Special cause - High is good');
export const Special_cause_low = story('Special cause - Low is good');
export const Special_cause_neither = story('Special cause - Neither');
export const Special_cause_single_point_ends = story('Special cause - single point - ends');
export const Special_cause_single_point_middle = story('Special cause - single point - middle');
export const Special_cause_shift_ends = story('Special cause - shift - ends');
export const Special_cause_shift_middle = story('Special cause - shift - middle');
export const Special_cause_trend_no_pauses = story('Special cause - trend - no pauses');
export const Special_cause_trend_pauses = story('Special cause - trend - pauses');
export const Special_cause_two_sigma_1 = story('Special cause - two-sigma - 1');
export const Special_cause_two_sigma_2 = story('Special cause - two-sigma - 2');
export const Special_cause_two_sigma_3 = story('Special cause - two-sigma - 3');
export const Special_cause_conflict_high = story('Special cause conflict - High is good');
export const Special_cause_conflict_low = story('Special cause conflict - Low is good');
export const Recalculations_Baselines = story('Recalculations / Baselines');
export const Recalculations_recalculated = story('Recalculations (recalculated)');
export const Special_cause_crossing_recalculations_and_baselines_shift = story('Special cause crossing recalculations and baselines - shift');
export const Special_cause_crossing_recalculations_and_baselines_trend = story('Special cause crossing recalculations and baselines - trend');
export const Special_cause_crossing_recalculations_and_baselines_two_sigma = story('Special cause crossing recalculations and baselines - two-sigma');
export const Summary_icons_assurance = story('Summary icons - assurance');
export const Summary_icons_assurance_too_few_points = story('Summary icons - assurance - too few points');
export const Summary_icons_variation_1 = story('Summary icons - variation - 1');
export const Summary_icons_variation_2 = story('Summary icons - variation - 2');
export const Summary_icons_variation_3 = story('Summary icons - variation - 3');
export const Summary_icons_variation_too_few_points = story('Summary icons - variation - too few points');
