import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { SPCChart, ImprovementDirection } from "./SPCChart";
import { ChartContainer } from "../../ChartContainer.tsx";
// Import grouped JSON produced by tools/spc-csv-to-json.mjs
import grouped from "./test-data/Test Data.grouped.json";
import { SpcEmbeddedIconVariant } from "./SPCChart.constants.ts";
import Table from "../../../../Tables/Table";
type Group = {
	metric: string;
	improvement?: "up" | "down" | "neither" | "";
	data: { date: string; value: number; colour: string; judgement: string }[];
};

const groups = grouped as unknown as Group[];
const metricOptions = groups.map((g) => g.metric);

function toDir(value: "neither" | "up" | "down"): ImprovementDirection {
	switch (value) {
		case "up":
			return ImprovementDirection.Up;
		case "down":
			return ImprovementDirection.Down;
		default:
			return ImprovementDirection.Neither;
	}
}

const meta: Meta = {
	title: "Data Visualisation/SPC/v1/Grouped dataset (JSON)",
	parameters: {
		docs: {
			description: {
				component:
					"Dataset-driven SPC Playground backed by the grouped JSON export. Switch metric, improvement direction, and embedded icon variant.",
			},
		},
	},
	argTypes: {
		metric: {
			control: { type: "select" },
			options: metricOptions,
			description: "Select a dataset metric from the grouped JSON.",
		},
		improvementDirection: {
			control: { type: "radio" },
			options: ["neither", "up", "down"],
			description:
				"Direction considered an improvement for variation & assurance logic.",
		},
		embeddedIconVariant: {
			control: { type: "radio" },
			options: ["classic", "triangle", "triangleWithRun"],
			description: "Embedded variation icon style.",
		},
		embeddedIconRunLength: {
			control: { type: "number" },
			description: "Run length (only shown when variant is triangleWithRun).",
			if: { arg: "embeddedIconVariant", eq: "triangleWithRun" },
		},
	},
	args: {
		metric: metricOptions[0],
		improvementDirection: "neither",
		embeddedIconVariant: "classic",
		embeddedIconRunLength: 3,
	},
};
export default meta;

type Story = StoryObj<{
	metric: string;
	improvementDirection: "neither" | "up" | "down";
	embeddedIconVariant?: "classic" | "triangle" | "triangleWithRun";
	embeddedIconRunLength?: number;
}>;

export const GroupedDataset: Story = {
	name: "Playground (grouped JSON)",
	render: (
		{
			metric,
			improvementDirection,
			embeddedIconVariant,
			embeddedIconRunLength,
		},
		context
	) => {
		const { updateArgs } = (context || {}) as any;
		const grp = groups.find((g) => g.metric === metric) || groups[0];
		const data = grp.data.map(({ date, value }) => ({
			x: new Date(date),
			y: value,
		}));

		// Apply a manual baseline (recalculation) for the specific "Recalculations - Recalculated" metric
		// Place the baseline at index 15 (0-based: the 16th point)
		let baselines: (boolean | null | undefined)[] | undefined;
		if (grp.metric === "Recalculations - Recalculated" || grp.metric.startsWith("Special cause crossing recalculations")) {
			baselines = new Array(data.length).fill(undefined);
			const baselineIndex = Math.min(15, Math.max(0, data.length - 1));
			baselines[baselineIndex] = true;
		}
		const displayMetric = grp.metric;
		// Prefer the dataset's declared improvement direction when present
		const datasetDirKey = grp.improvement;
		const effectiveDirKey: "neither" | "up" | "down" =
			datasetDirKey === "up" ||
			datasetDirKey === "down" ||
			datasetDirKey === "neither"
				? datasetDirKey
				: improvementDirection;
		const dir = toDir(effectiveDirKey);

		// Keep the control UI in sync: when selecting a metric with an explicit improvement,
		// update the improvementDirection arg so the control reflects it.
		useEffect(() => {
			const canUpdate = typeof updateArgs === "function";
			if (canUpdate && (datasetDirKey === "up" || datasetDirKey === "down" || datasetDirKey === "neither")) {
				if (improvementDirection !== datasetDirKey) {
					try {
						updateArgs({ improvementDirection: datasetDirKey });
					} catch {
						// ignore if not supported in this build context
					}
				}
			}
			// Only react to metric changes and the dataset-declared direction
		}, [metric, datasetDirKey]);

		return (
			<>
			<div style={{ maxWidth: 420, marginBottom: 16 }}>
				<Select
					name="metric"
					id="spc-metric-select"
					label="Metric"
					hint="Choose a metric from the grouped dataset"
					value={metric}
					onChange={(e: any) => {
									const next = e?.target?.value;
									if (next && typeof updateArgs === "function") {
													updateArgs({ metric: next });
									}
					}}
				>
					{metricOptions.map((m) => (
									<option key={m} value={m}>
													{m}
									</option>
					))}
				</Select>
			</div>
			<ChartContainer
				title={displayMetric}
				description={`Points: ${data.length}`}
				source="Grouped JSON dataset"
				showTableToggle
				initiallyShowTable
				tabularData={
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
										<span
											style={{
												display: "inline-flex",
												alignItems: "center",
												gap: 8,
											}}
										>
											<span
												aria-label={`colour swatch ${hex}`}
												title={hex}
												style={{
													display: "inline-block",
													width: 14,
													height: 14,
													borderRadius: 3,
													background: hex,
													border: "1px solid #ccc",
												}}
											/>
											<span>{hex}</span>
										</span>
									),
								}),
							},
						]}
						data={grp.data.map((d) => ({
							date: new Date(d.date).toLocaleDateString("en-GB"),
							value: d.value,
							colour: d.colour,
						}))}
					/>
				}
			>
				<SPCChart
					data={data}
					baselines={baselines}
					showPartitionMarkers={!!baselines}
					announceFocus
					metricImprovement={dir}
					narrationContext={{ measureName: displayMetric }}
					showPoints
					enableRules
					embeddedIconVariant={embeddedIconVariant as SpcEmbeddedIconVariant}
					embeddedIconRunLength={embeddedIconRunLength}
					gradientSequences
					settings={{ minimumPointsPartition: 12, autoRecalculateAfterShift: false,  baselineSuggest: false }}
				/>
				</ChartContainer>
				</>
		);
	},
};
