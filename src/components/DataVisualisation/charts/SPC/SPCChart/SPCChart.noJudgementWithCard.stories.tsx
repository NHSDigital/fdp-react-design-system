import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
	SPCChart,
	type SPCDatum,
	ImprovementDirection,
	SequenceTransition,
	TrendVisualMode,
} from "./SPCChart";
import { ChartType } from "./logic/spcConstants";
import { ChartContainer } from "../../ChartContainer.tsx";
// Import MetricCard from the components barrel to avoid deep relative paths
import { SPCMetricCard } from "../../../../";

const meta: Meta<typeof SPCChart> = {
	title: "Data Visualisation/SPC/SPCMetricCard/No judgement + Metric card",
	component: SPCChart,
	parameters: {
		docs: {
			description: {
				component:
					"Individuals (XmR) with a neutral special-cause (No judgement) scenario: a few final points sit above the mean triggering a rule without a declared improvement/concern polarity. Displays both the full SPCChart and an SPCMetricCard using the same data.",
			},
		},
	},
};
export default meta;

type Story = StoryObj<typeof SPCChart>;

// Neutral special-cause: mostly stable series around 50, then a short sequence above the mean near the upper bands
const makeNeutralSCData = (): SPCDatum[] => {
	const points: SPCDatum[] = [];
	for (let i = 0; i < 22; i++) {
		const base = 50;
		const jitter = i % 2 === 0 ? 0.5 : -0.5;
		points.push({ x: i + 1, y: base + jitter });
	}
	// Three points above the mean that should push towards a neutral special-cause (2-of-3 near limit style)
	points.push({ x: 23, y: 55.5 });
	points.push({ x: 24, y: 56.2 });
	points.push({ x: 25, y: 55.9 });
	return points;
};

export const NoJudgementWithMetricCard: Story = {
	name: "No judgement context with MetricCard",
	parameters: {
		docs: {
			description: {
				story:
					"Shows a No judgement (purple) context: SPCChart with metricImprovement set to Neither and final points above the mean, plus an SPCMetricCard fed the same series so the spark and card accent align.",
			},
		},
	},
	render: () => {
		const data = React.useMemo(() => makeNeutralSCData(), []);
		const sparkData = React.useMemo(
			() => data.map((d) => ({ value: d.y })),
			[data]
		);

		return (
			<div style={{ display: "grid", gap: 16 }}>
				<div style={{ maxWidth: 420 }}>
					<SPCMetricCard
						label="Neutral special cause"
						value="—"
						metadata="Last 25 periods"
						status="neutral"
						variant="default"
						sparkData={sparkData}
						direction={ImprovementDirection.Neither}
						showLimits
						showLimitBand
						showInnerBands
					/>
				</div>
				<ChartContainer
					title="SPC Individuals – No judgement"
					description="Neutral special-cause with last few points above mean"
					source="Synthetic data"
				>
					<SPCChart
						data={data}
						chartType={ChartType.XmR}
						metricImprovement={ImprovementDirection.Neither}
						gradientSequences
						sequenceTransition={SequenceTransition.Slope}
						trendVisualMode={TrendVisualMode.Gated}
						announceFocus
						unit=""
					/>
				</ChartContainer>
			</div>
		);
	},
};
