import type { Meta, StoryObj } from "@storybook/react";
import {
	buildSpcV26a,
	ChartType,
	ImprovementDirection,
	withParityV26,
	toTimeBetweenEvents,
	toCountBetweenEvents,
} from "../";

const meta: Meta = {
	title: "Data Visualisation/SPC/v2/Preprocess (T & G adapters)",
	parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {
	render: () => {
		// Synthetic event dates (daily)
		const dates = ["2025-09-01", "2025-09-02", "2025-09-05", "2025-09-09"].map(
			(d) => ({ x: d + "T00:00:00Z" })
		);
		const tSeries = toTimeBetweenEvents(dates);

		// Synthetic daily hits for G (boolean/number)
		const hits = [
			{ x: 1, occurred: 0 },
			{ x: 2, occurred: 1 },
			{ x: 3, occurred: 0 },
			{ x: 4, occurred: 0 },
			{ x: 5, occurred: 2 },
		];
		const gSeries = toCountBetweenEvents(hits);

		// For demonstration, we run XmR over these derived series (parity preset)
		const tRes = buildSpcV26a({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Neither,
			data: tSeries,
			settings: withParityV26({ minimumPoints: 3 }),
		});
		const gRes = buildSpcV26a({
			chartType: ChartType.XmR,
			metricImprovement: ImprovementDirection.Neither,
			data: gSeries,
			settings: withParityV26({ minimumPoints: 3 }),
		});

		return (
			<div style={{ maxWidth: 800 }}>
				<h3>T preprocess → intervals</h3>
				<pre>{JSON.stringify(tSeries, null, 2)}</pre>
				<h4>XmR over intervals (for parity illustration)</h4>
				<pre>{JSON.stringify(tRes.rows.slice(-3), null, 2)}</pre>
				<hr />
				<h3>G preprocess → count between events</h3>
				<pre>{JSON.stringify(gSeries, null, 2)}</pre>
				<h4>XmR over counts (for parity illustration)</h4>
				<pre>{JSON.stringify(gRes.rows.slice(-3), null, 2)}</pre>
				<p style={{ marginTop: 8 }}>
					Note: The engine currently focuses on XmR. These adapters simply shape
					event data into interval/count series to aid parity examples and
					future T/G implementations. Parity stories for T/G will be added next.
				</p>
			</div>
		);
	},
};
