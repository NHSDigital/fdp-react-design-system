import type { Meta, StoryObj } from '@storybook/react';
import { SPCChart, ImprovementDirection } from './SPCChart';
import { ChartContainer } from '../../..';
import { ChartType } from './logic/spc';

const meta: Meta<typeof SPCChart> = {
	title: 'Data Visualisation/SPC/Rule Clash Examples',
	component: SPCChart,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: 'Rule Clash examples for testing gradient sequence logic. These charts test various special cause rule combinations and their gradient rendering behavior.',
			},
		},
	},
	argTypes: {
		gradientSequences: {
			control: 'boolean',
			description: 'Enable gradient background sequences',
		},
	},
};

export default meta;
type Story = StoryObj<typeof SPCChart>;

// Helper to convert lightweight month/value objects to SPCChart datapoints
const toData = (series: { x: string; y: number }[]) =>
	series.map((p) => ({ x: new Date(p.x), y: p.y }));

const baseProps = {
	chartType: ChartType.XmR,
	metricImprovement: ImprovementDirection.Down,
	unit: "%",
	announceFocus: false,
	gradientSequences: true,
	height: 300,
};

// Chart 1 Data - Trend: a run of 6/7 points or more all consecutively
const chart1Data = [
	{ x: "2022-01", y: 3.53 },
	{ x: "2022-02", y: 3.96 },
	{ x: "2022-03", y: 4.54 },
	{ x: "2022-04", y: 4.94 },
	{ x: "2022-05", y: 5.15 },
	{ x: "2022-06", y: 5.73 },
	{ x: "2022-07", y: 5.85 },
	{ x: "2022-08", y: 5.64 },
	{ x: "2022-09", y: 4.11 },
	{ x: "2022-10", y: 5.15 },
	{ x: "2022-11", y: 4.94 },
	{ x: "2022-12", y: 5.76 },
	{ x: "2023-01", y: 4.51 },
	{ x: "2023-02", y: 5.76 },
	{ x: "2023-03", y: 5.15 },
	{ x: "2023-04", y: 5.64 },
];

// Chart 2 Data - Shift: a run of 6/7 points or more above or below the mean
const chart2Data = [
	{ x: "2022-01", y: 4.95 },
	{ x: "2022-02", y: 5.0 },
	{ x: "2022-03", y: 5.6 },
	{ x: "2022-04", y: 5.5 },
	{ x: "2022-05", y: 5.7 },
	{ x: "2022-06", y: 5.5 },
	{ x: "2022-07", y: 5.4 },
	{ x: "2022-08", y: 5.3 },
	{ x: "2022-09", y: 4.1 },
	{ x: "2022-10", y: 4.9 },
	{ x: "2022-11", y: 4.8 },
	{ x: "2022-12", y: 5.5 },
	{ x: "2023-01", y: 4.1 },
	{ x: "2023-02", y: 5.3 },
	{ x: "2023-03", y: 4.9 },
	{ x: "2023-04", y: 5.3 },
];

// Chart 3 Data - 2/3: where there are 2 out of 3 points outside either the upper or lower control limits
const chart3Data = [
	{ x: "2022-01", y: 3.52 },
	{ x: "2022-02", y: 3.91 },
	{ x: "2022-03", y: 4.5 },
	{ x: "2022-04", y: 3.46 },
	{ x: "2022-05", y: 5.12 },
	{ x: "2022-06", y: 5.71 },
	{ x: "2022-07", y: 5.77 },
	{ x: "2022-08", y: 5.6 },
	{ x: "2022-09", y: 4.14 },
	{ x: "2022-10", y: 5.12 },
	{ x: "2022-11", y: 4.91 },
	{ x: "2022-12", y: 5.71 },
	{ x: "2023-01", y: 4.5 },
	{ x: "2023-02", y: 6.87 }, // High cluster starts
	{ x: "2023-03", y: 6.51 },
	{ x: "2023-04", y: 6.78 },
];

// Chart 4 Data - Single point: any single point outside the process limits
const chart4Data = [
	{ x: "2022-01", y: 5.0 },
	{ x: "2022-02", y: 5.07 },
	{ x: "2022-03", y: 5.8 },
	{ x: "2022-04", y: 5.5 },
	{ x: "2022-05", y: 5.2 },
	{ x: "2022-06", y: 5.15 },
	{ x: "2022-07", y: 5.6 },
	{ x: "2022-08", y: 4.5 },
	{ x: "2022-09", y: 4.07 },
	{ x: "2022-10", y: 4.9 },
	{ x: "2022-11", y: 4.8 },
	{ x: "2022-12", y: 9 }, // Single high outlier
	{ x: "2023-01", y: 4.6 },
	{ x: "2023-02", y: 5.2 },
	{ x: "2023-03", y: 5.07 },
	{ x: "2023-04", y: 5.54 },
];

// Chart 5 Data - Multiple Rules Example
const chart5Data = [
	{ x: "2022-01", y: 6.6 },
	{ x: "2022-02", y: 4.8 },
	{ x: "2022-03", y: 6.6 },
	{ x: "2022-04", y: 4.0 },
	{ x: "2022-05", y: 4.2 },
	{ x: "2022-06", y: 4.4 },
	{ x: "2022-07", y: 7.0 },
	{ x: "2022-08", y: 8.9 },
	{ x: "2022-09", y: 8.5 },
	{ x: "2022-10", y: 8.1 },
	{ x: "2022-11", y: 7.7 },
	{ x: "2022-12", y: 7.3 },
	{ x: "2023-01", y: 6.9 },
	{ x: "2023-02", y: 7.6 },
	{ x: "2023-03", y: 5.2 },
	{ x: "2023-04", y: 3.8 },
];

export const RuleClashChart1: Story = {
	name: 'Rule Clash Chart 1 - Trend',
	args: {
		data: toData(chart1Data),
		...baseProps,
		targets: Array(chart1Data.length).fill(4.0),
		ariaLabel: 'Rule Clash Chart 1 - Trend pattern',
	},
	parameters: {
		docs: {
			description: {
				story: 'Trend: a run of 6/7 points or more all consecutively. Gradual increase through mid‑2022 with a local dip at 2022‑09 then recovery. Expected gradients: mostly grey with potential orange sections for sustained trends.',
			},
		},
	},
	render: (args) => (
		<ChartContainer
			title="Rule Clash Chart 1 - Trend Pattern"
			description="Testing gradient sequences for trend rule triggers"
			source="Monthly staff sickness data"
		>
			<SPCChart {...args} />
		</ChartContainer>
	),
};

export const RuleClashChart2: Story = {
	name: 'Rule Clash Chart 2 - Shift',
	args: {
		data: toData(chart2Data),
		...baseProps,
		targets: Array(chart2Data.length).fill(4.0),
		ariaLabel: 'Rule Clash Chart 2 - Shift pattern',
	},
	parameters: {
		docs: {
			description: {
				story: 'Shift: a run of 6/7 points or more above or below the mean. Mostly stable mid‑5% band with brief deterioration signals around 2022‑11 to 2023‑01. Expected gradients: should start with grey for first two common points, then orange for the deterioration period.',
			},
		},
	},
	render: (args) => (
		<ChartContainer
			title="Rule Clash Chart 2 - Shift Pattern"
			description="Testing gradient sequences for shift rule triggers"
			source="Monthly staff sickness data"
		>
			<SPCChart {...args} />
		</ChartContainer>
	),
};

export const RuleClashChart3: Story = {
	name: 'Rule Clash Chart 3 - 2/3 Rule',
	args: {
		data: toData(chart3Data),
		...baseProps,
		targets: Array(chart3Data.length).fill(4.0),
		ariaLabel: 'Rule Clash Chart 3 - 2/3 rule pattern',
	},
	parameters: {
		docs: {
			description: {
				story: '2/3 Rule: where there are 2 out of 3 points outside either the upper or lower control limits. Upward shift after early low baseline; later cluster (2023‑02 onwards) may generate both shift and 2-of-3 near limit rules. Expected gradients: mostly grey with orange gradient only for the final high cluster.',
			},
		},
	},
	render: (args) => (
		<ChartContainer
			title="Rule Clash Chart 3 - 2/3 Rule Pattern"
			description="Testing gradient sequences for 2/3 rule triggers"
			source="Monthly staff sickness data"
		>
			<SPCChart {...args} />
		</ChartContainer>
	),
};

export const RuleClashChart4: Story = {
	name: 'Rule Clash Chart 4 - Single Point',
	args: {
		data: toData(chart4Data),
		...baseProps,
		targets: Array(chart4Data.length).fill(4.0),
		ariaLabel: 'Rule Clash Chart 4 - Single point pattern',
	},
	parameters: {
		docs: {
			description: {
				story: 'Single Point: any single point outside the process limits. Early higher values taper, mid-period dip, partial recovery with a single high outlier at 2022-12 (value: 9). Expected gradients: should be completely grey since the single outlier should be absorbed into common cause for gradient purposes.',
			},
		},
	},
	render: (args) => (
		<ChartContainer
			title="Rule Clash Chart 4 - Single Point Pattern"
			description="Testing gradient sequences for single point outlier absorption"
			source="Monthly staff sickness data"
		>
			<SPCChart {...args} />
		</ChartContainer>
	),
};

export const RuleClashChart5: Story = {
	name: 'Rule Clash Chart 5 - Multiple Rules',
	args: {
		data: toData(chart5Data),
		...baseProps,
		targets: Array(chart5Data.length).fill(4.0),
		ariaLabel: 'Rule Clash Chart 5 - Multiple rules pattern',
	},
	parameters: {
		docs: {
			description: {
				story: 'Multiple Rules: alternating high/low extremes then prolonged high plateau and subsequent decline. Expect multiple rule triggers: early point-beyond-3σ, later run above mean, then potential downward trend. Expected gradients: complex pattern with multiple colored sequences for sustained patterns.',
			},
		},
	},
	render: (args) => (
		<ChartContainer
			title="Rule Clash Chart 5 - Multiple Rules Pattern"
			description="Testing gradient sequences for complex multi-rule scenarios"
			source="Monthly staff sickness data"
		>
			<SPCChart {...args} />
		</ChartContainer>
	),
};
