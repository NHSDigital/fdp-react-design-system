import type { Meta, StoryObj } from "@storybook/react";
import SPCChart, { ImprovementDirection } from "../../SPCChart";
import { ChartType } from "../../types";

// Simple helper to build a monthly-like sequence with a sustained shift and a small trend
function buildDemoData() {
	const start = new Date(2024, 0, 1);
	const n = 28;
	const data: { x: Date; y: number }[] = [];
	for (let i = 0; i < n; i++) {
		const d = new Date(start);
		d.setMonth(d.getMonth() + i);
		// First half stable around 70 with tiny noise; second half shifted up ~10 with slight upward trend
		const base = i < 12 ? 70 : 80;
		const trend = i >= 16 ? (i - 15) * 0.6 : 0; // gentle trend after the shift
		const noise = i % 2 === 0 ? 0.7 : -0.7;
		data.push({ x: d, y: Math.round((base + trend + noise) * 10) / 10 });
	}
	return data;
}

const meta: Meta<typeof SPCChart> = {
	title: "Data Visualisation/SPC/v2",
	component: SPCChart,
	parameters: {
		docs: {
			description: {
				component:
					"SPC v2 integration example showcasing the Signals Inspector. Use keyboard arrows over the chart area to move focus and see inspector updates.",
			},
		},
		controls: { expanded: true },
	},
};

export default meta;

type Story = StoryObj<typeof SPCChart>;

export const SignalsInspector: Story = {
	name: "Signals inspector (interactive)",
	args: {
		input: { data: buildDemoData() },
		engine: { chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up },
		ui: {
			axes: { alwaysShowZeroY: false, percentScale: false },
			visuals: { gradientSequences: true, showZones: true, showPoints: true, rules: { enableRules: true } },
			warnings: { show: false },
			inspector: { show: true },
		},
	},
	render: (args) => {
		return (
			<div style={{ display: "grid", gap: 12 }}>
				<p style={{ margin: 0 }}>
					Use mouse hover or keyboard arrows (Left/Right) over the chart to move
					focus. The Signals Inspector below mirrors the focused point and lists
					the detected rules.
				</p>
				<SPCChart {...args} />
			</div>
		);
	},
};
