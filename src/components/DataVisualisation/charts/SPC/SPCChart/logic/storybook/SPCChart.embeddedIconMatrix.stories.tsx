import type { Meta, StoryObj } from "@storybook/react";
import { SPCChart, type SPCDatum, ImprovementDirection } from "../../SPCChart.tsx";
import { ChartContainer } from "../../../../ChartContainer.tsx";

const meta: Meta<typeof SPCChart> = {
	title: "Data Visualisation/SPC/v1/SPC Icons/Embedded Icon Matrix",
	component: SPCChart,
	includeStories: [],
	parameters: {
		docs: {
			description: {
				story:
					"Matrix of embedded variation icon outcomes rendered via SPC engine (Improvement, Concern, Suppressed/No Judgement, Common Cause). Ensures correct colour (blue/orange/purple/grey) and letter (H/L) mapping.",
			},
		},
	},
};
export default meta;
type Story = StoryObj<typeof SPCChart>;

type Builder = {
	label: string;
	description: string;
	data: SPCDatum[];
	improvement: ImprovementDirection;
};

const makeStable = (len = 18, base = 50): SPCDatum[] => {
	// Deterministic base date to avoid story variability across runs
	const start = new Date("2024-01-01T00:00:00Z").getTime();
	return Array.from({ length: len }, (_, i) => ({
		x: new Date(start + i * 86400000),
		y: base, // perfectly flat baseline to eliminate special-cause risk
	}));
};

// Scenarios
const common: Builder = {
	label: "Common Cause (grey)",
	description: "No special cause signals; variation icon = neither (grey)",
	data: makeStable(),
	improvement: ImprovementDirection.Neither,
};

const improvement: Builder = (() => {
	const d = makeStable();
	// Create upward shift (last 6 points high) to exceed shift rule and avoid suppression
	for (let i = d.length - 6; i < d.length; i++) d[i].y += 8;
	return {
			label: "Improvement (blue H)",
			description:
				"High-side special cause (sustained shift) – improvement. Letters reflect polarity (H = Higher is better).",
		data: d,
		improvement: ImprovementDirection.Up,
	} as Builder;
})();

const concern: Builder = (() => {
	const d = makeStable();
	// Single low outlier (unfavourable) will classify as concern
	d[d.length - 1].y -= 10;
	return {
			label: "Concern (orange H)",
			description:
				"Low-side special cause (single point). Letters reflect polarity, not side (H = Higher is better metric).",
		data: d,
		improvement: ImprovementDirection.Up,
	} as Builder;
})();

const suppressed: Builder = (() => {
	const d = makeStable();
	// Large single high outlier (favourable) – now classifies directly as Improvement (blue), suppression removed
	d[d.length - 1].y += 40;
	return {
			label: "Favourable special cause (blue H)",
			description:
				"Isolated high favourable point classifies directly as improvement (suppression removed).",
		data: d,
		improvement: ImprovementDirection.Up,
	} as Builder;
})();

const suppressedDown: Builder = (() => {
	const d = makeStable();
	// Large single low outlier (favourable because Lower is Better) – classifies as Improvement (blue)
	d[d.length - 1].y -= 40;
	return {
			label: "Favourable special cause (Down metric, blue L)",
			description:
				"Isolated low favourable point (Lower is better) classifies as improvement (blue). Letter reflects polarity (L).",
		data: d,
		improvement: ImprovementDirection.Down,
	} as Builder;
})();

export const EmbeddedIconMatrix: Story = {
	render: () => {
		const scenarios = [
			common,
			improvement,
			concern,
			suppressed,
			suppressedDown,
		];
		return (
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
					gap: 20,
				}}
			>
				{scenarios.map((s) => (
					<ChartContainer
						key={s.label}
						title={s.label}
						description={s.description}
					>
						<SPCChart
							data={s.data}
							metricImprovement={s.improvement}
							showEmbeddedIcon
							showIcons={false}
							announceFocus
						/>
					</ChartContainer>
				))}
			</div>
		);
	},
};
