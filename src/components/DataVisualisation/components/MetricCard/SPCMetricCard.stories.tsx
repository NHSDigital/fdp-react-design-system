import type { Meta, StoryObj } from "@storybook/react";
import { SPCMetricCard } from "../../index";
import { SPCChart } from "../../charts/SPC/SPCChart/SPCChart";
import { ChartType, ImprovementDirection } from "../../charts/SPC/engine";

const meta: Meta<typeof SPCMetricCard> = {
	title: "Data Visualisation/SPC/SPC MetricCard",
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

// Build Dates for SPCChart from story args: prefer explicit sparkData.date; otherwise synthesize via intervalHint + startDate
function buildDates(args: any): (Date | undefined)[] | undefined {
	const sd = args.sparkData as Array<{ value: number; date?: Date | string | number }> | undefined;
	if (!sd || !sd.length) return undefined;
	const withDates = sd.some((p) => p && p.date != null);
	if (withDates) {
		return sd.map((p) => (p?.date ? new Date(p.date as any) : undefined));
	}
	const hint: string | undefined = args.intervalHint;
	const startRaw: Date | string | number | undefined = args.startDate as any;
	if (!hint || !startRaw) return undefined;
	const start = new Date(startRaw as any);
	if (Number.isNaN(start.valueOf())) return undefined;
	const arr: (Date | undefined)[] = new Array(sd.length);
	const d = new Date(start);
	for (let i = 0; i < sd.length; i++) {
		arr[i] = new Date(d);
		switch (hint) {
			case "hourly": d.setHours(d.getHours() + 1); break;
			case "daily": d.setDate(d.getDate() + 1); break;
			case "weekly": d.setDate(d.getDate() + 7); break;
			case "monthly": d.setMonth(d.getMonth() + 1); break;
			case "quarterly": d.setMonth(d.getMonth() + 3); break;
			case "annually": d.setFullYear(d.getFullYear() + 1); break;
			default: break;
		}
	}
	return arr;
}

export const ED4h: Story = {
	name: "A&E 4-hour performance",
	args: {
		label: "A&E 4-hour performance",
		// value/delta/metadata will be auto-derived
		intervalHint: "monthly",
		startDate: new Date(2023, 0, 1),
		sparkData: wrap([
			69, 70, 68, 71, 70, 69, 70, 69, 71, 70, 68, 69, 78, 79, 80, 81, 79, 78,
			82, 81, 80, 79, 81, 80,
		]),
		direction: ImprovementDirection.Up,
		showLimits: true,
		showLimitBand: false,
	},
		render: (args) => {
			const dates = buildDates(args);
			const data = (args.sparkData ?? []).map((p: any, i: number) => ({ x: dates?.[i] ?? (i + 1), y: Number(p?.value ?? 0) }));
			
			return (
				<div style={{ display: "grid", gap: 16 }}>
					<SPCMetricCard {...args} />
					<SPCChart
						input={{ data }}
						engine={{ chartType: ChartType.XmR, metricImprovement: args.direction }}
						ui={{ visuals: { gradientSequences: true }, axes: { alwaysShowZeroY: false } }}
					/>
				</div>
			);
		},
};

export const BedOccupancy: Story = {
	name: "Bed occupancy",
	args: {
		label: "Bed occupancy",
		// value/delta auto; keep custom metadata subtitle
		metadata: "Acute providers",
		intervalHint: "monthly",
		startDate: new Date(2023, 0, 1),
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
			const dates = buildDates(args);
			const data = (args.sparkData ?? []).map((p: any, i: number) => ({ x: dates?.[i] ?? (i + 1), y: Number(p?.value ?? 0) }));
			
			return (
				<div style={{ display: "grid", gap: 16 }}>
					<SPCMetricCard {...args} />
					<SPCChart
						input={{ data }}
						engine={{ chartType: ChartType.XmR, metricImprovement: args.direction }}
						ui={{ visuals: { gradientSequences: true }, axes: { alwaysShowZeroY: false } }}
					/>
				</div>
			);
		},
};

export const RTTBacklog: Story = {
	name: "RTT backlog",
	args: {
		label: "RTT backlog",
		metadata: "Completed within 18 weeks",
		intervalHint: "monthly",
		startDate: new Date(2023, 0, 1),
		// Example: compare to 3 months ago
		deltaConfig: { strategy: "n-points", n: 3 },
		sparkData: wrap([
			84, 83.2, 82.4, 82.1, 81.9, 81.3, 80.7, 80.2, 79.8, 79.1, 78.6, 78.1,
			77.9, 77.5, 77.2, 76.9, 76.3, 75.8, 75.1, 74.8, 74.1, 73.9, 73.4, 73.0,
		]),
		direction: ImprovementDirection.Up,
		showLimits: true,
		showLimitBand: false,
	},
		render: (args) => {
			const dates = buildDates(args);
			const data = (args.sparkData ?? []).map((p: any, i: number) => ({ x: dates?.[i] ?? (i + 1), y: Number(p?.value ?? 0) }));
			
			return (
				<div style={{ display: "grid", gap: 16 }}>
					<SPCMetricCard {...args} />
					<SPCChart
						input={{ data }}
						engine={{ chartType: ChartType.XmR, metricImprovement: args.direction }}
						ui={{ visuals: { gradientSequences: true }, axes: { alwaysShowZeroY: false } }}
					/>
				</div>
			);
		},
};

// Helpers for engine-driven grey and purple outcomes

export const GreyCommonCause: Story = {
	name: "Grey – Common cause",
	args: {
		label: "Diagnostics turn-around",
		// Auto value/metadata from synthetic monthly start
		metadata: "Stable process",
		intervalHint: "monthly",
		startDate: new Date(2023, 0, 1),
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
			const dates = buildDates(args);
			const data = (args.sparkData ?? []).map((p: any, i: number) => ({ x: dates?.[i] ?? (i + 1), y: Number(p?.value ?? 0) }));
			
			return (
				<div style={{ display: "grid", gap: 16 }}>
					<SPCMetricCard {...args} />
					<SPCChart
						input={{ data }}
						engine={{ chartType: ChartType.XmR, metricImprovement: args.direction }}
						ui={{ visuals: { gradientSequences: true }, axes: { alwaysShowZeroY: false } }}
					/>
				</div>
			);
		},
};

// SQL-compat comparison story removed: SPC runs base engine only; see engine-level guide for SQL parity analysis.

// (Removed) Purple stories

export const YearOverYear: Story = {
	name: "Year-over-year delta (annual)",
	args: {
		label: "A&E waits (Year on Year)",
		intervalHint: "annually",
		// Annual points (one per year) to demonstrate YoY matching exactly year-to-year
		sparkData: Array.from({ length: 8 }).map((_, i) => {
			const year = 2018 + i;
			const drift = (year - 2018) * 1.2; // gentle improvement each year
			const noise = ((i % 2 === 0 ? 1 : -1) * 0.7); // tiny alternating noise
			return {
				value: Math.round((70 + drift + noise) * 10) / 10,
				date: new Date(year, 0, 1),
			};
		}),
		direction: ImprovementDirection.Up,
		deltaConfig: { strategy: "year-over-year" },
		showLimits: true,
		showLimitBand: false,
	},
	render: (args) => {
		const dates = buildDates(args);
		const data = (args.sparkData ?? []).map((p: any, i: number) => ({ x: dates?.[i] ?? (i + 1), y: Number(p?.value ?? 0) }));
		return (
			<div style={{ display: "grid", gap: 16 }}>
				<SPCMetricCard {...args} />
				<SPCChart
					input={{ data }}
					engine={{ chartType: ChartType.XmR, metricImprovement: args.direction }}
					ui={{ visuals: { gradientSequences: true }, axes: { alwaysShowZeroY: false } }}
				/>
			</div>
		);
	},
};

export const MillisecondsAbsolute: Story = {
	name: "Non-percent unit (ms) absolute delta",
	args: {
		label: "API latency",
		defaultUnit: "ms",
		intervalHint: "weekly",
		startDate: new Date(2025, 0, 1),
		sparkData: Array.from({ length: 16 }).map((_, i) => ({ value: 120 + (i % 4 === 0 ? 20 : -5) })),
		direction: ImprovementDirection.Down, // lower is better
		deltaConfig: { strategy: "n-points", n: 4, absolute: true }, // compare to 4 weeks ago in ms
		showLimits: true,
		showLimitBand: false,
	},
	render: (args) => {
		const dates = buildDates(args);
		const data = (args.sparkData ?? []).map((p: any, i: number) => ({ x: dates?.[i] ?? (i + 1), y: Number(p?.value ?? 0) }));
		return (
			<div style={{ display: "grid", gap: 16 }}>
				<SPCMetricCard {...args} />
				<SPCChart
					input={{ data }}
					engine={{ chartType: ChartType.XmR, metricImprovement: args.direction }}
					ui={{ visuals: { gradientSequences: true } }}
				/>
			</div>
		);
	},
};
