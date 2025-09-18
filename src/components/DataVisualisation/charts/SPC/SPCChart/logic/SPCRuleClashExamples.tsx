import SPCChart from "../SPCChart";
import { ImprovementDirection, ChartType } from "../../engine";
import { ChartContainer } from "../../../..";

// Helper to convert lightweight month/value objects to SPCChart datapoints
const toData = (series: { x: string; y: number }[]) =>
	series.map((p) => ({ x: new Date(p.x), y: p.y }));

const chart1 = [
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

const chart2 = [
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

const chart3 = [
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
	{ x: "2023-02", y: 6.87 },
	{ x: "2023-03", y: 6.51 },
	{ x: "2023-04", y: 6.78 },
];

const chart4 = [
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
	{ x: "2022-12", y: 9 },
	{ x: "2023-01", y: 4.6 },
	{ x: "2023-02", y: 5.2 },
	{ x: "2023-03", y: 5.07 },
	{ x: "2023-04", y: 5.54 },
];

const chart5 = [
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

const baseProps = {
	chartType: ChartType.XmR,
	metricImprovement: ImprovementDirection.Down as const,
	unit: "%",
	announceFocus: false,
	gradientSequences: true,
};

export const RuleClashChartOne = () => (
	<ChartContainer
		title="Staff Sickness - starting 01/01/22"
		description=""
		source="Monthly data"
	>
		<div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
			<SPCChart
				data={toData(chart1)}
				{...baseProps}
				targets={Array(chart1.length).fill(4.0)}
			/>
		</div>
	</ChartContainer>
);

export const RuleClashChartTwo = () => (
	<ChartContainer
		title="Staff Sickness - starting 01/01/22"
		description="Stable band with slight mid dip"
		source="Monthly data"
	>
		<SPCChart
			data={toData(chart2)}
			{...baseProps}
			targets={Array(chart2.length).fill(4.0)}
		/>
	</ChartContainer>
);

export const RuleClashChartThree = () => (
	<ChartContainer
		title="Staff Sickness - starting 01/01/22"
		description="Upward shift with elevated cluster"
		source="Monthly data"
	>
		<SPCChart
			data={toData(chart3)}
			{...baseProps}
			targets={Array(chart3.length).fill(4.0)}
		/>
	</ChartContainer>
);

export const RuleClashChartFour = () => (
	<ChartContainer
		title="Staff Sickness - starting 01/01/22"
		description="Early high taper then partial recovery"
		source="Monthly data"
	>
		<SPCChart
			data={toData(chart4)}
			{...baseProps}
			targets={Array(chart4.length).fill(4.0)}
		/>
	</ChartContainer>
);

export const RuleClashChartFive = () => (
	<>
		<ChartContainer
			title="Staff Sickness - starting 01/01/22"
			description="Alternating extremes then plateau and decline"
			source="Approximate monthly data"
		>
			<SPCChart
				data={toData(chart5)}
				{...baseProps}
				targets={Array(chart5.length).fill(4.0)}
			/>
		</ChartContainer>
	</>
);

export const allRuleClashCharts = {
	RuleClashChartOne,
	RuleClashChartTwo,
	RuleClashChartThree,
	RuleClashChartFour,
	RuleClashChartFive,
};

export default allRuleClashCharts;
