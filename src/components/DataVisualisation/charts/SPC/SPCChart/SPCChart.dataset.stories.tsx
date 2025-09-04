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
  const data = metricLookup[metric];
  const storySpecific: Record<string,string> = {
	'Number of points - 12': 'Exactly 12 points: below minimum; no limits or icons expected.',
	'Number of points - 13': 'Threshold case: limits appear once the 13th valid point arrives.',
	'Process limits - 15': 'Stable series with sufficient points to display limits & zones.',
	'Process limits - 10': 'Too few points (10) so limits suppressed – tests suppression logic.',
	'Special cause': 'Contains at least one classic special-cause point beyond limit.',
	'Special cause - single point - ends': 'Terminal outlier to exercise single-point above/below detection at end.',
	'Special cause - single point - middle': 'Mid-series outlier ensuring internal single-point detection.',
	'Special cause - shift - ends': 'Shift sequence occurs near the end boundary.',
	'Special cause - shift - middle': 'Shift sequence embedded mid-series.',
	'Special cause - trend - no pauses': 'Monotonic increasing/decreasing run with no interruptions.',
	'Special cause - trend - pauses': 'Trend containing small plateaus (tests permissible pauses).',
	'Special cause - two-sigma - 1': 'Pattern meeting 2 of 3 beyond ±2σ (scenario variant 1).',
	'Special cause - two-sigma - 2': 'Second variant for 2 of 3 beyond ±2σ rule.',
	'Special cause - two-sigma - 3': 'Third variant for 2 of 3 beyond ±2σ rule.',
	'Special cause conflict': 'Deliberate conflicting signals to test conflict handling & precedence.',
	'Recalculations / Baselines': 'Introduces baseline splits causing new partitions & limit recalculation.',
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
		parameters: {
			docs: { description: { story: storySpecific[metric] || 'Dataset scenario.' } }
		},
		render: ({ improvementDirection = 'neither' }) => {
			const dir = improvementDirection === 'higher' ? ImprovementDirection.Up : improvementDirection === 'lower' ? ImprovementDirection.Down : ImprovementDirection.Neither;
			return (
				<ChartContainer title={metric} description={`Points: ${data.length}`} source="CSV dataset">
					<SPCChart 
						data={data} 
						announceFocus 
						metricImprovement={dir}
						narrationContext={{ measureName: metric }}
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
export const Special_cause = story('Special cause');
export const Special_cause_single_point_ends = story('Special cause - single point - ends');
export const Special_cause_single_point_middle = story('Special cause - single point - middle');
export const Special_cause_shift_ends = story('Special cause - shift - ends');
export const Special_cause_shift_middle = story('Special cause - shift - middle');
export const Special_cause_trend_no_pauses = story('Special cause - trend - no pauses');
export const Special_cause_trend_pauses = story('Special cause - trend - pauses');
export const Special_cause_two_sigma_1 = story('Special cause - two-sigma - 1');
export const Special_cause_two_sigma_2 = story('Special cause - two-sigma - 2');
export const Special_cause_two_sigma_3 = story('Special cause - two-sigma - 3');
export const Special_cause_conflict = story('Special cause conflict');
export const Recalculations_Baselines = story('Recalculations / Baselines');
export const Special_cause_crossing_recalculations_and_baselines_shift = story('Special cause crossing recalculations and baselines - shift');
export const Special_cause_crossing_recalculations_and_baselines_trend = story('Special cause crossing recalculations and baselines - trend');
export const Special_cause_crossing_recalculations_and_baselines_two_sigma = story('Special cause crossing recalculations and baselines - two-sigma');
export const Summary_icons_assurance = story('Summary icons - assurance');
export const Summary_icons_assurance_too_few_points = story('Summary icons - assurance - too few points');
export const Summary_icons_variation_1 = story('Summary icons - variation - 1');
export const Summary_icons_variation_2 = story('Summary icons - variation - 2');
export const Summary_icons_variation_3 = story('Summary icons - variation - 3');
export const Summary_icons_variation_too_few_points = story('Summary icons - variation - too few points');
