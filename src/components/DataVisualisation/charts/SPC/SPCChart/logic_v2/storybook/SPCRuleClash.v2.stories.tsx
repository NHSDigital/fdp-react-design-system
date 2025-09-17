import type { Meta, StoryObj } from "@storybook/react";
import { useMemo } from "react";
import { ChartContainer } from "../../../../ChartContainer";
import { SPCChart } from "../../SPCChart";
import { withParityV26 } from "../presets";
import { ImprovementDirection as V2ImprovementDirection } from "../types";
import {
	ImprovementDirection as V1ImprovementDirection,
	ChartType as V1ChartType,
} from "../../types";

function months(count: number, startISO = "2023-01-01"): Date[] {
	const start = new Date(startISO + "T00:00:00Z");
	return Array.from(
		{ length: count },
		(_, i) => new Date(start.getFullYear(), start.getMonth() + i, 1)
	);
}

function toV1Dir(value: V2ImprovementDirection): V1ImprovementDirection {
	switch (value) {
		case V2ImprovementDirection.Up:
			return V1ImprovementDirection.Up;
		case V2ImprovementDirection.Down:
			return V1ImprovementDirection.Down;
		default:
			return V1ImprovementDirection.Neither;
	}
}

const meta: Meta = {
	title: "Data Visualisation/SPC/v2/Rule clash examples",
	parameters: {
		docs: {
			description: {
				component:
					"Illustrative SPC v2 examples for common rule clash scenarios. Uses SQL-parity settings (chart-level eligibility, backfill, two-of-three includes >3σ).",
			},
		},
	},
};
export default meta;

type Story = StoryObj<Record<string, never>>;

// 1) Trend: monotonic run >= 6 with a small dip breaking shift
export const Chart1Trend: Story = {
	name: "Chart 1 – Trend",
	render: () => {
		const vals = [
			50, 50.2, 50.1, 50.3, 50.2, 50.1, 50.2, 50.3, 50.4, 50.5, 50.6, 50.7,
			50.8, 50.9, 50.7, 50.8, 50.9, 51.0, 51.1, 51.2, 51.0, 51.1, 51.2, 51.3,
		];
		const dates = useMemo(() => months(vals.length), [vals.length]);
		const series = useMemo(
			() => vals.map((y, i) => ({ x: dates[i], y })),
			[dates, vals]
		);
		const settings = useMemo(() => withParityV26({ minimumPoints: 12 }), []);
		const direction = V2ImprovementDirection.Up; // higher is better

		return (
			<ChartContainer
				title="Rule clash – Trend (monotonic)"
				description="Gradual increase with a local dip; trend expected to dominate; shift resets at dip."
				source="Synthetic"
			>
				<SPCChart
					data={series}
					chartType={V1ChartType.XmR}
					metricImprovement={toV1Dir(direction)}
					enableRules
					showPoints
					gradientSequences
					settings={settings as any}
					alwaysShowZeroY={false}
				/>
			</ChartContainer>
		);
	},
};

// 2) Shift: sustained run below mean; some near-limit points
export const Chart2Shift: Story = {
	name: "Chart 2 – Shift",
	render: () => {
		const vals = [
			5.2,
			5.1,
			5.0,
			5.2,
			5.1,
			5.0,
			5.2,
			5.1,
			5.0,
			5.2,
			5.1,
			5.0, // baseline around 5.1
			4.7,
			4.8,
			4.7,
			4.6,
			4.7,
			4.6,
			4.7,
			4.6,
			4.7,
			4.6,
			4.7,
			4.6, // run below mean (>=6)
		];
		const dates = useMemo(() => months(vals.length), [vals.length]);
		const series = useMemo(
			() => vals.map((y, i) => ({ x: dates[i], y })),
			[dates, vals]
		);
		const settings = useMemo(() => withParityV26({ minimumPoints: 12 }), []);
		const direction = V2ImprovementDirection.Down; // lower is better

		return (
			<ChartContainer
				title="Rule clash – Shift (run one side)"
				description="Sustained run below mean; any isolated outliers should not override shift."
				source="Synthetic"
			>
				<SPCChart
					data={series}
					chartType={V1ChartType.XmR}
					metricImprovement={toV1Dir(direction)}
					enableRules
					showPoints
					gradientSequences
					settings={settings as any}
					alwaysShowZeroY={false}
				/>
			</ChartContainer>
		);
	},
};

// 3) Two-of-three >= 2σ: cluster near lower limit competing with shift
export const Chart3TwoOfThree: Story = {
	name: "Chart 3 – Two-of-three",
	render: () => {
		const vals = [
			9.2,
			9.1,
			9.2,
			9.1,
			9.2,
			9.1,
			9.2,
			9.1,
			9.2,
			9.1,
			9.2,
			9.1, // stable baseline
			8.7,
			8.8,
			8.6, // cluster near lower bound (2-of-3)
			8.9,
			8.8,
			8.7,
			8.8,
			8.7,
			8.8,
			8.7,
			8.8, // lingering low band
		];
		const dates = useMemo(() => months(vals.length), [vals.length]);
		const series = useMemo(
			() => vals.map((y, i) => ({ x: dates[i], y })),
			[dates, vals]
		);
		const settings = useMemo(() => withParityV26({ minimumPoints: 12 }), []);
		const direction = V2ImprovementDirection.Down; // lower is better; cluster is favourable

		return (
			<ChartContainer
				title="Rule clash – Two-of-three (>=2σ)"
				description="Near-limit cluster may co-occur with shift; precedence favours sustained change when present."
				source="Synthetic"
			>
				<SPCChart
					data={series}
					chartType={V1ChartType.XmR}
					metricImprovement={toV1Dir(direction)}
					enableRules
					showPoints
					gradientSequences
					settings={settings as any}
					alwaysShowZeroY={false}
				/>
			</ChartContainer>
		);
	},
};

// 4) Single point beyond 3σ
export const Chart4SinglePoint: Story = {
	name: "Chart 4 – Single point",
	render: () => {
		const vals = [
			86,
			87,
			86,
			87,
			86,
			87,
			86,
			87,
			86,
			87,
			86,
			87, // stable high baseline
			95, // single high outlier
			86,
			87,
			86,
			87,
			86,
			87,
			86,
			87,
			86,
			87,
			86, // revert to baseline
		];
		const dates = useMemo(() => months(vals.length), [vals.length]);
		const series = useMemo(
			() => vals.map((y, i) => ({ x: dates[i], y })),
			[dates, vals]
		);
		const settings = useMemo(() => withParityV26({ minimumPoints: 12 }), []);
		const direction = V2ImprovementDirection.Up; // higher is better

		return (
			<ChartContainer
				title="Rule clash – Single point (>3σ)"
				description="Isolated beyond-limit point amid stability; only the outlier should colour."
				source="Synthetic"
			>
				<SPCChart
					data={series}
					chartType={V1ChartType.XmR}
					metricImprovement={toV1Dir(direction)}
					enableRules
					showPoints
					gradientSequences
					settings={settings as any}
					alwaysShowZeroY={false}
				/>
			</ChartContainer>
		);
	},
};

// 5) Multiple rules over time: early outlier, later high shift, then downward trend
export const Chart5MultipleRules: Story = {
	name: "Chart 5 – Multiple rules",
	render: () => {
		const vals = [
			50,
			50,
			50,
			50,
			50,
			50,
			62, // early high outlier
			51,
			52,
			53,
			54,
			55,
			56,
			57, // rise towards new level
			58,
			58,
			58,
			58,
			58,
			58,
			58, // plateau (shift above mean)
			57,
			56,
			55,
			54,
			53,
			52,
			51, // later downward trend
		];
		const dates = useMemo(() => months(vals.length), [vals.length]);
		const series = useMemo(
			() => vals.map((y, i) => ({ x: dates[i], y })),
			[dates, vals]
		);
		const settings = useMemo(() => withParityV26({ minimumPoints: 12 }), []);
		const direction = V2ImprovementDirection.Up; // higher is better – later decline is unfavourable

		return (
			<ChartContainer
				title="Rule clash – Multiple rules over time"
				description="Sequencing: early outlier, mid-series shift, later opposing trend. Narrative should emphasise most recent sustained pattern."
				source="Synthetic"
			>
				<SPCChart
					data={series}
					chartType={V1ChartType.XmR}
					metricImprovement={toV1Dir(direction)}
					enableRules
					showPoints
					gradientSequences
					settings={settings as any}
					alwaysShowZeroY={false}
				/>
			</ChartContainer>
		);
	},
};
