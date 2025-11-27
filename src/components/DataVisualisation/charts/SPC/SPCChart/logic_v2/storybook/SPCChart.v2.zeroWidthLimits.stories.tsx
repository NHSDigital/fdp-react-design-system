import type { Meta, StoryObj } from "@storybook/react";
import { useMemo } from "react";
import { ChartContainer } from "../../../../ChartContainer";
import Table from "../../../../../../Tables/Table";
import { SPCChart } from "../../SPCChart";
import { buildSpcV26a } from "../engine";
import { withParityV26 } from "../presets";
import { ChartType, ImprovementDirection } from "../types";
import { ImprovementDirection as V1ImprovementDirection, ChartType as V1ChartType } from "../../types";

// Helper to map v2 enum to v1 for SPCChart props
function toV1Dir(value: ImprovementDirection): V1ImprovementDirection {
	switch (value) {
		case ImprovementDirection.Up: return V1ImprovementDirection.Up;
		case ImprovementDirection.Down: return V1ImprovementDirection.Down;
		default: return V1ImprovementDirection.Neither;
	}
}

const meta: Meta = {
	title: "Data Visualisation/SPC/v2/Zero-width XmR limits",
	parameters: {
		docs: {
			description: {
				component:
					"Demonstrates XmR behaviour when a partition is perfectly flat (MR̄=0). Limits collapse to the mean (UCL=LCL=center) and 1σ/2σ bands also collapse to the center line.",
			},
		},
		metricContext: { improvement: "neither" },
	},
};
export default meta;

// Build a short series: first partition has variation, then a baseline, then flat values
function makeZeroWidthSeries() {
	const start = new Date(2024, 0, 1);
	const points: { x: Date; y: number }[] = [];
	for (let i = 0; i < 8; i++) points.push({ x: new Date(start.getFullYear(), start.getMonth() + i, 1), y: 50 + Math.sin(i) });
	// Baseline at index 8
	for (let i = 8; i < 16; i++) points.push({ x: new Date(start.getFullYear(), start.getMonth() + i, 1), y: 42 });
	return points;
}

type Story = StoryObj<{ parityMode?: boolean; showTable?: boolean; }>; 

export const ZeroWidthLimits: Story = {
	name: "Zero-width limits (flat partition)",
	args: { parityMode: false, showTable: true },
	render: ({ parityMode, showTable }) => {
		const series = useMemo(() => makeZeroWidthSeries(), []);
		const rows = useMemo(() => {
			const input = series.map((d, i) => ({
				x: d.x,
				value: d.y,
				ghost: false,
				baseline: i === 8, // start flat partition here
				target: null as number | null,
			}));
			const baseSettings = { minimumPoints: 6 };
			const settings = parityMode ? withParityV26(baseSettings) : baseSettings;
			return buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Neither, data: input, settings }).rows;
		}, [parityMode, series]);

		// Show computed limits for last two points (in the flat partition)
		const tail = rows.filter(r => !r.ghost && r.value !== null).slice(-2);
		const table = showTable ? (
			<Table
				caption="Computed limits on flat partition"
				visuallyHiddenCaption
				firstCellIsHeader={false}
				columns={[
					{ key: "date", title: "Date" },
					{ key: "value", title: "Value", format: "numeric" },
					{ key: "mean", title: "Mean", format: "numeric" },
					{ key: "lcl", title: "LCL", format: "numeric" },
					{ key: "ucl", title: "UCL", format: "numeric" },
					{ key: "oneL", title: "-1σ", format: "numeric" },
					{ key: "oneH", title: "+1σ", format: "numeric" },
					{ key: "twoL", title: "-2σ", format: "numeric" },
					{ key: "twoH", title: "+2σ", format: "numeric" },
				]}
				data={tail.map(r => ({
					date: new Date(r.x as any).toLocaleDateString("en-GB"),
					value: r.value,
					mean: r.mean,
					lcl: r.lowerProcessLimit,
					ucl: r.upperProcessLimit,
					oneL: r.lowerOneSigma,
					oneH: r.upperOneSigma,
					twoL: r.lowerTwoSigma,
					twoH: r.upperTwoSigma,
				}))}
			/>
		) : undefined;

		return (
			<ChartContainer
				title="XmR: Zero-width limits on flat partition"
				description="After the baseline, the series is perfectly flat (MR̄=0) so all bands collapse to the center line."
				source="Synthetic"
				showTableToggle
				initiallyShowTable={!!showTable}
				tabularData={table}
			>
				<SPCChart
					input={{ data: series }}
					engine={{
						chartType: V1ChartType.XmR,
						metricImprovement: toV1Dir(ImprovementDirection.Neither),
						settings: { minimumPoints: 6 } as any,
					}}
					ui={{
						visuals: {
							showPoints: true,
							gradientSequences: true,
							rules: { enableRules: true },
						},
						overlays: { partitionMarkers: true },
					}}
				/>
			</ChartContainer>
		);
	},
};
