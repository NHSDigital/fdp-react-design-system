import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useEffect } from "react";
import { ChartContainer } from "../../../../ChartContainer";
import Table from "../../../../../../Tables/Table";
import { getMetricOptions, findGroup, normaliseSeries, deriveBaselines } from "./data/groupedDataset";
import { buildSpcV26a } from "../engine.ts";
import { ChartType, ImprovementDirection } from "../types.ts";
import { withParityV26 } from "../presets";
import { SPCChart } from "../../SPCChart";
import { ImprovementDirection as V1ImprovementDirection, ChartType as V1ChartType } from "../../logic/spcConstants";

const metricOptions = getMetricOptions();

const meta: Meta = {
	title: "Data Visualisation/SPC/v2/Test dataset (JSON)",
	parameters: {
		docs: {
			description: {
				component:
					"Dataset-driven SPC v2 Playground (logic_v2). Uses the grouped JSON dataset, computes limits and icons via the new engine, and renders a simple table for expected colours.",
			},
		},
	},
	argTypes: {
		metric: { control: { type: "select" }, options: metricOptions },
		improvementDirection: { control: { type: "radio" }, options: ["neither", "up", "down"] },
		showTable: { control: { type: "boolean" } },
		parityMode: { control: { type: "boolean" } },
	},
	args: {
		metric: metricOptions[0] ?? "",
		improvementDirection: "neither",
		showTable: true,
		parityMode: false,
	},
};
export default meta;

type Story = StoryObj<{
	metric: string;
	improvementDirection: "neither" | "up" | "down";
	showTable?: boolean;
	parityMode?: boolean;
}>;

function toDir(value: "neither" | "up" | "down"): ImprovementDirection {
	switch (value) {
		case "up": return ImprovementDirection.Up;
		case "down": return ImprovementDirection.Down;
		default: return ImprovementDirection.Neither;
	}
}

function toV1Dir(value: ImprovementDirection): V1ImprovementDirection {
	switch (value) {
		case ImprovementDirection.Up: return V1ImprovementDirection.Up;
		case ImprovementDirection.Down: return V1ImprovementDirection.Down;
		default: return V1ImprovementDirection.Neither;
	}
}

export const GroupedDatasetV2: Story = {
	name: "Playground (grouped JSON)",
	render: ({ metric, improvementDirection, showTable, parityMode }, context) => {
		const { updateArgs } = (context || {}) as any;
	const grp = findGroup(metric)!;

		// Guard: if dataset failed to load, render a helpful message
	if (!grp || !Array.isArray(grp.data)) {
			return (
				<ChartContainer
					title="SPC v2 Playground (dataset unavailable)"
					description={`Metrics loaded: ${metricOptions.length}`}
					source="Grouped JSON dataset"
				>
					<div style={{ color: '#a33' }}>
						Dataset could not be loaded. Please check the import path for "Test Data.grouped.json" and rebuild Storybook.
					</div>
				</ChartContainer>
			);
		}

	const { data } = normaliseSeries(grp);

		// Apply a manual baseline (recalculation) for the specific "Recalculations - Recalculated" metric
		// Place the baseline at index 15 (0-based: the 16th point)
		const baselines = deriveBaselines(grp, data.length);

		// Prefer dataset direction where present
	const datasetDirKey = grp.improvement;
		const effectiveDirKey: "neither" | "up" | "down" =
			datasetDirKey === "up" || datasetDirKey === "down" || datasetDirKey === "neither"
				? datasetDirKey
				: improvementDirection;
	const dir = toDir(effectiveDirKey);

		useEffect(() => {
			const canUpdate = typeof updateArgs === "function";
			if (canUpdate && (datasetDirKey === "up" || datasetDirKey === "down" || datasetDirKey === "neither")) {
				if (improvementDirection !== datasetDirKey) {
					try { updateArgs({ improvementDirection: datasetDirKey }); } catch {}
				}
			}
		}, [metric, datasetDirKey]);

		// Build SPC rows via v2 engine
		const rows = useMemo(() => {
			const input = data.map((d) => ({ x: d.x, value: d.value, ghost: false, baseline: false, target: null }));
			const baseSettings = { minimumPoints: 12 };
			const settings = parityMode ? withParityV26(baseSettings) : baseSettings;
			return buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: dir, data: input, settings }).rows;
		}, [data, dir]);

		// Basic rendering: the expected colour table from dataset

			return (
				<>
					<ChartContainer
						title={`${grp.metric} (v2 engine)`}
						description={`Points: ${rows.length}`}
						source="Fictive NHS Testing Dataset"
						showTableToggle
						initiallyShowTable={!!showTable}
						tabularData={
							showTable ? (
								<Table
									caption="Expected colours"
									visuallyHiddenCaption
									responsive
									firstCellIsHeader={false}
									columns={[
										{ key: "date", title: "Date" },
										{ key: "value", title: "Value", format: "numeric" },
										{
											key: "colour",
											title: "Expected colour",
											render: (hex: string) => ({
												node: (
													<span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
														<span
															aria-label={`colour swatch ${hex}`}
															title={hex}
															style={{ display: 'inline-block', width: 14, height: 14, borderRadius: 3, background: hex, border: '1px solid #ccc' }}
														/>
														<span>{hex}</span>
													</span>
												),
											}),
										},
									]}
									data={grp.data.map((d) => ({
										date: new Date(d.date).toLocaleDateString('en-GB'),
										value: d.value,
										colour: d.colour,
									}))}
								/>
							) : undefined
						}
					>
						<SPCChart
							data={data.map(d => ({ x: d.x, y: d.value }))}
							chartType={V1ChartType.XmR}
							metricImprovement={toV1Dir(dir)}
							enableRules
							showPoints
							gradientSequences
							baselines={baselines}
							announceFocus={false}
						/>
					</ChartContainer>
					<div style={{ display: 'grid', gap: 6 }}>
						{/* <div><strong>Last judgement (v2):</strong> {last?.variationIcon}</div> */}
						<div style={{ fontSize: 12 }}>Metrics available: {metricOptions.length}</div>
						<div style={{ fontSize: 12, color: '#666' }}>
							This v2 playground uses the new engine (logic_v2) and renders the SPCChart visual to help compare expected colours from the dataset with the engine’s judgement.
						</div>
					</div>
				</>
			);
	},
};
