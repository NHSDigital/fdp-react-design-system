import type { Meta, StoryObj } from "@storybook/react";
import { SPCMetricCard } from "../../index";
import { SPCChart, ImprovementDirection } from "../../charts/SPC/SPCChart/SPCChart";
import { ChartType } from "../../charts/SPC/SPCChart/logic/spcConstants";
import { MetricPolarity } from "../../charts/SPC/SPCIcons/SPCConstants";

const meta: Meta<typeof SPCMetricCard> = {
	title: "Data Visualisation/SPC/SPCMetricCard",
	component: SPCMetricCard,
	parameters: {
		docs: {
			description: {
				component:
					"A specialised MetricCard that embeds an SPCSpark for compact SPC visualisation with sensible defaults for healthcare KPIs.",
			},
		},
	},
};
export default meta;

type Story = StoryObj<typeof SPCMetricCard>;

const wrap = (vals: number[]) => vals.map((v) => ({ value: v }));

export const ED4h: Story = {
	name: "A&E 4-hour performance",
	args: {
		label: "A&E 4-hour performance",
		value: "80.0%",
		metadata: "Latest: Aug 2025",
		delta: { value: 1.6, isPercent: true, period: "this month" },
		sparkData: wrap([
			69, 70, 68, 71, 70, 69, 70, 69, 71, 70, 68, 69, 78, 79, 80, 81, 79, 78,
			82, 81, 80, 79, 81, 80,
		]),
		direction: ImprovementDirection.Up,
		showLimits: true,
		showLimitBand: false,
	},
		render: (args) => {
			const data = (args.sparkData ?? []).map((p: any, i: number) => ({ x: i + 1, y: Number(p?.value ?? 0) }));
			
			return (
				<div style={{ display: "grid", gap: 16 }}>
					<SPCMetricCard {...args} />
					<SPCChart data={data} chartType={ChartType.XmR} metricImprovement={args.direction} gradientSequences />
				</div>
			);
		},
};

export const BedOccupancy: Story = {
	name: "Bed occupancy",
	args: {
		label: "Bed occupancy",
		value: "86.0%",
		metadata: "Acute providers",
		delta: { value: -0.8, isPercent: true, period: "vs last month" },
		variant: "secondary",
		sparkData: wrap([
			88, 87, 86, 85, 86, 87, 88, 89, 90, 88, 87, 86, 85, 84, 85, 86, 87, 86,
			85, 84, 83, 84, 85, 86,
		]),
		direction: ImprovementDirection.Down,
		showLimits: true,
		showLimitBand: false,
	},
		render: (args) => {
			const data = (args.sparkData ?? []).map((p: any, i: number) => ({ x: i + 1, y: Number(p?.value ?? 0) }));
			
			return (
				<div style={{ display: "grid", gap: 16 }}>
					<SPCMetricCard {...args} />
					<SPCChart data={data} chartType={ChartType.XmR} metricImprovement={args.direction} gradientSequences />
				</div>
			);
		},
};

export const RTTBacklog: Story = {
	name: "RTT backlog",
	args: {
		label: "RTT backlog",
		value: "73.0%",
		metadata: "Completed within 18 weeks",
		delta: { value: 1.2, isPercent: true, period: "vs last month" },
		sparkData: wrap([
			84, 83.2, 82.4, 82.1, 81.9, 81.3, 80.7, 80.2, 79.8, 79.1, 78.6, 78.1,
			77.9, 77.5, 77.2, 76.9, 76.3, 75.8, 75.1, 74.8, 74.1, 73.9, 73.4, 73.0,
		]),
		direction: ImprovementDirection.Up,
		showLimits: true,
		showLimitBand: false,
	},
		render: (args) => {
			const data = (args.sparkData ?? []).map((p: any, i: number) => ({ x: i + 1, y: Number(p?.value ?? 0) }));
			
			return (
				<div style={{ display: "grid", gap: 16 }}>
					<SPCMetricCard {...args} />
					<SPCChart data={data} chartType={ChartType.XmR} metricImprovement={args.direction} gradientSequences />
				</div>
			);
		},
};

// Helpers for engine-driven grey and purple outcomes

export const GreyCommonCause: Story = {
	name: "Grey – Common cause",
	args: {
		label: "Diagnostics turn-around",
		value: "50",
		metadata: "Stable process",
		status: "neutral",
		sparkData: wrap(
			Array.from({ length: 28 }).map((_, i) => 50 + (i % 2 === 0 ? 0.5 : -0.5))
		),
		direction: ImprovementDirection.Neither,
		showLimits: true,
		showLimitBand: true,
		showInnerBands: true,
	},
		render: (args) => {
			const data = (args.sparkData ?? []).map((p: any, i: number) => ({ x: i + 1, y: Number(p?.value ?? 0) }));
			
			return (
				<div style={{ display: "grid", gap: 16 }}>
					<SPCMetricCard {...args} />
					<SPCChart data={data} chartType={ChartType.XmR} metricImprovement={args.direction} gradientSequences />
				</div>
			);
		},
};

export const SqlCompatComparison: Story = {
	name: "SQL-compat vs Base comparison",
	args: {
		label: "ED 4h (comparison)",
		value: "80.0%",
		metadata: "Latest: Aug 2025",
		sparkData: wrap([
			69, 70, 68, 71, 70, 69, 70, 69, 71, 70, 68, 69, 78, 79, 80, 81, 79, 78,
			82, 81, 80, 79, 81, 80,
		]),
		direction: ImprovementDirection.Up,
		showLimits: true,
		showLimitBand: false,
	},
	render: (args) => {
		const data = (args.sparkData ?? []).map((p: any, i: number) => ({ x: i + 1, y: Number(p?.value ?? 0) }));
		return (
			<div style={{ display: "grid", gap: 16 }}>
				<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
					<div>
						<div style={{ fontWeight: 600, marginBottom: 4 }}>Base engine</div>
						<SPCMetricCard {...args} useSqlCompatEngine={false} />
					</div>
					<div>
						<div style={{ fontWeight: 600, marginBottom: 4 }}>SQL-compat engine</div>
						<SPCMetricCard {...args} useSqlCompatEngine={true} />
					</div>
				</div>
				<SPCChart data={data} chartType={ChartType.XmR} metricImprovement={args.direction} gradientSequences useSqlCompatEngine={true} />
			</div>
		);
	},
};

// (Removed) Purple stories
