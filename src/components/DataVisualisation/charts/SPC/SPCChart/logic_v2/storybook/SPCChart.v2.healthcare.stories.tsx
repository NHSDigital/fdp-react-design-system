import type { Meta, StoryObj } from "@storybook/react";
import { useMemo } from "react";
import { ChartContainer } from "../../../../ChartContainer";
import Table from "../../../../../../Tables/Table";
import { SPCChart } from "../../SPCChart";
import { buildSpcV26a } from "../engine";
import { withParityV26 } from "../presets";
import { ChartType, ImprovementDirection, VariationIcon } from "../types";
import {
	ImprovementDirection as V1ImprovementDirection,
	ChartType as V1ChartType,
} from "../../logic/spcConstants";
import {
	datasetOptions as getDatasetOptions,
	findDataset,
	months,
	toV2Dir,
} from "./data/healthcareDatasets";

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

const options = getDatasetOptions();

const meta: Meta = {
	title: "Data Visualisation/SPC/v2/Healthcare (v2 engine)",
	parameters: {
		docs: {
			description: {
				component:
					"Healthcare datasets rendered with SPC v2 engine (XmR parity). Select a dataset to compute limits and icons via logic_v2 and render an SPCChart for visual review.",
			},
		},
	},
	argTypes: {
		dataset: { control: { type: "select" }, options },
		showLastJudgement: { control: { type: "boolean" } },
		parityMode: { control: { type: "boolean" } },
		showTable: { control: { type: "boolean" } },
	},
	args: {
		dataset: options[0],
		showLastJudgement: true,
		parityMode: false,
		showTable: true,
	},
};

export default meta;

type Story = StoryObj<{
	dataset: string;
	showLastJudgement?: boolean;
	parityMode?: boolean;
	showTable?: boolean;
}>;

function iconToHex(icon: VariationIcon): string {
	switch (icon) {
		case VariationIcon.ImprovementHigh:
		case VariationIcon.ImprovementLow:
			return "#2e7d32"; // positive (green)
		case VariationIcon.ConcernHigh:
		case VariationIcon.ConcernLow:
			return "#00B0F0"; // negative (NHS red)
		case VariationIcon.NeitherHigh:
		case VariationIcon.NeitherLow:
			return "#490092"; // neutral special-cause (amber)
		default:
			return "#A6A6A6"; // common cause (grey)
	}
}

export const HealthcarePlaygroundV2: Story = {
	name: "Playground (healthcare datasets)",
	render: ({ dataset, showLastJudgement, parityMode, showTable }) => {
		const def = findDataset(dataset);
		const dates = months(def.values.length);
		const series = dates.map((x, i) => ({ x, y: def.values[i] }));

		const rows = useMemo(() => {
			const input = series.map((d) => ({
				x: d.x,
				value: d.y,
				ghost: false,
				baseline: false,
				target: null,
			}));
			const baseSettings = { minimumPoints: 12 };
			const settings = parityMode ? withParityV26(baseSettings) : baseSettings;
			return buildSpcV26a({
				chartType: ChartType.XmR,
				metricImprovement: toV2Dir(def.direction),
				data: input,
				settings,
			}).rows;
		}, [dataset, parityMode]);

		const last = rows.filter((r) => !r.ghost && r.value !== null).pop();

		// Compose optional expected-colour table derived from the engine's VariationIcon
		const table = showTable ? (
			<Table
				caption="Computed expected colours (v2)"
				visuallyHiddenCaption
				responsive
				firstCellIsHeader={false}
				columns={[
					{ key: "date", title: "Date" },
					{ key: "value", title: "Value", format: "numeric" },
					{ key: "icon", title: "Icon" },
					{
						key: "colour",
						title: "Colour",
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
				data={rows
					.filter((r) => !r.ghost)
					.map((r) => ({
						date: new Date(r.x as any).toLocaleDateString("en-GB"),
						value: r.value,
						icon: String(r.variationIcon),
						colour: iconToHex(r.variationIcon),
					}))}
			/>
		) : undefined;

		return (
			<>
				<ChartContainer
					title={`${def.name} (v2 engine)`}
					description={`Points: ${rows.length}`}
					source="Synthetic"
					showTableToggle
					initiallyShowTable={!!showTable}
					tabularData={table}
				>
					<SPCChart
						data={series}
						chartType={V1ChartType.XmR}
						metricImprovement={toV1Dir(toV2Dir(def.direction))}
						enableRules
						showPoints
						gradientSequences
						announceFocus={false}
						unit={def.unit}
					/>
				</ChartContainer>
				<div style={{ fontSize: 12, color: "#666" }}>
					{showLastJudgement ? (
						<span>
							Last judgement (v2):{" "}
							<strong>{String(last?.variationIcon ?? "-")}</strong>
						</span>
					) : null}
				</div>
			</>
		);
	},
};
