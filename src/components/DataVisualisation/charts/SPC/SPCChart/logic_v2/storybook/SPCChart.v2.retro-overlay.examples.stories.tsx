import type { Meta, StoryObj } from "@storybook/react";
import { useMemo } from "react";
import Table from "../../../../../../Tables/Table";
import { buildSpcV26a } from "../engine";
import { computeRetroShiftOverlay } from "../retroOverlay";
import { ChartType, ImprovementDirection } from "../types";
import { SPCChart } from "../../SPCChart";
import {
	ChartType as V1ChartType,
	ImprovementDirection as V1ImprovementDirection,
} from "../../types";

function toV1Dir(value: ImprovementDirection): V1ImprovementDirection {
	switch (value) {
		case ImprovementDirection.Up:
			return V1ImprovementDirection.Up;
		case ImprovementDirection.Down:
			return V1ImprovementDirection.Down;
		default:
			return V1ImprovementDirection.Neither;
	}
}

const meta: Meta = {
	title: "Data Visualisation/SPC/v2/Retro overlay (examples)",
	parameters: {
		docs: {
			description: {
				component:
					"Demonstrates the retro overlay as a teaching view. The overlay backfills pre-eligibility points on the same side as a later confirmed shift without changing engine outputs.",
			},
		},
	},
	argTypes: {
		minimumPoints: { control: { type: "number", min: 6, max: 20, step: 1 } },
		direction: {
			control: { type: "radio" },
			options: ["Up", "Down", "Neither"],
			mapping: {
				Up: ImprovementDirection.Up,
				Down: ImprovementDirection.Down,
				Neither: ImprovementDirection.Neither,
			},
		},
		enableShift: { control: { type: "boolean" } },
		showChart: { control: { type: "boolean" } },
	},
	args: {
		minimumPoints: 12,
		direction: ImprovementDirection.Up,
		enableShift: true,
		showChart: true,
	},
};
export default meta;

type Story = StoryObj<{
	minimumPoints: number;
	direction: ImprovementDirection;
	enableShift: boolean;
	showChart?: boolean;
}>;

// Synthetic series crafted to produce a confirmed shift shortly after eligibility,
// with some early pre-eligibility points already on the same side of the mean.
function makeSeries(): { x: number; y: number }[] {
	const series: number[] = [
		// Pre-eligibility region (values clustered slightly above an early mean)
		10.8, 10.9, 10.7, 10.85, 10.95, 10.9, 10.8, 10.92, 10.88, 10.91, 10.89,
		10.93,
		// Post-eligibility region with a clear run on the up side
		11.0, 11.1, 11.2, 11.15, 11.25, 11.3, 11.35, 11.4,
	];
	return series.map((y, i) => ({ x: i, y }));
}

export const ShiftBackfillExample: Story = {
	name: "Shift backfill example",
	render: ({ minimumPoints, direction, enableShift, showChart }) => {
		const series = useMemo(() => makeSeries(), []);

		const rows = useMemo(() => {
			const input = series.map((d) => ({
				x: d.x,
				value: d.y,
				ghost: false,
				baseline: false,
				target: null,
			}));
			return buildSpcV26a({
				chartType: ChartType.XmR,
				metricImprovement: direction,
				data: input,
				settings: { minimumPoints },
			}).rows;
		}, [series, direction, minimumPoints]);

		const overlay = useMemo(
			() => computeRetroShiftOverlay(rows, direction, { enableShift }),
			[rows, direction, enableShift]
		);

		const table = (
			<Table
				caption="Engine vs retro overlay (pre-eligibility backfill)"
				visuallyHiddenCaption
				responsive
				firstCellIsHeader={false}
				columns={[
					{ key: "i", title: "Index" },
					{ key: "value", title: "Value", format: "numeric" },
					{ key: "eligible", title: "Eligible" },
					{ key: "engine", title: "Engine icon" },
					{ key: "overlay", title: "Overlay icon" },
				]}
				data={rows.map((r, i) => ({
					i,
					value: r.value,
					eligible:
						typeof r.mean === "number" && Number.isFinite(r.mean)
							? "Yes"
							: "No",
					engine: String(r.variationIcon),
					overlay: overlay[i] != null ? String(overlay[i]) : "",
				}))}
			/>
		);

		return (
			<div style={{ display: "grid", gap: 16 }}>
				<div style={{ fontSize: 12, color: "#555" }}>
					This example keeps engine outputs intact and shows a separate overlay
					icon for pre-eligibility points that align with a later confirmed
					shift. Toggle minimum points and direction to explore behaviour.
				</div>
				{showChart && (
					<div>
						<SPCChart
							input={{ data: series }}
							engine={{ chartType: V1ChartType.XmR, metricImprovement: toV1Dir(direction), settings: { minimumPoints } as any }}
							ui={{ axes: { alwaysShowZeroY: false }, visuals: { showPoints: true, gradientSequences: true, rules: { enableRules: true } } }}
						/>
					</div>
				)}
				{table}
			</div>
		);
	},
};
