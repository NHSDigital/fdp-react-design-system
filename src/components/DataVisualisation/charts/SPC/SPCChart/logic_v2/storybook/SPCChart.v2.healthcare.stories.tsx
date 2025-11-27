import type { Meta, StoryObj } from "@storybook/react";
import { useMemo } from "react";
import { ChartContainer } from "../../../../ChartContainer";
import Table from "../../../../../../Tables/Table";
import { SPCChart } from "../../SPCChart";
import { buildSpcV26a } from "../engine";
import { withParityV26 } from "../presets";
import { ChartType, ImprovementDirection } from "../types";
import { ImprovementDirection as V1ImprovementDirection, ChartType as V1ChartType } from "../../types";
import {
	datasetOptions as getDatasetOptions,
	findDataset,
	months,
	toV2Dir,
} from "./data/healthcareDatasets";
import { iconToHex } from "./data/variationIconColours";

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

export const HealthcarePlaygroundV2: Story = {
	name: "Playground (healthcare datasets)",
	render: ({ dataset, showLastJudgement, parityMode, showTable }) => {
		const def = findDataset(dataset);
		const dates = useMemo(() => months(def.values.length), [def.values.length]);
		const series = useMemo(
			() => def.values.map((value, i) => ({ x: dates[i], y: value })),
			[dates, def]
		);
		const improvement = useMemo(() => toV2Dir(def.direction), [def.direction]);
		const v1Improvement = useMemo(() => toV1Dir(improvement), [improvement]);
		// Shared settings used for both rows and the SPCChart to keep visuals consistent
		const baseSettings = useMemo(() => ({ minimumPoints: 12 }), []);
		const settings = useMemo(
			() => (parityMode ? withParityV26(baseSettings) : baseSettings),
			[parityMode, baseSettings]
		);
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
				metricImprovement: improvement,
				data: input,
				settings,
			}).rows;
		}, [series, improvement, settings]);

		const nonGhostRows = useMemo(() => rows.filter((r) => !r.ghost), [rows]);
		const last = nonGhostRows.filter((r) => r.value !== null).pop();
		const pointCount = nonGhostRows.length;
		const improvementSummary = useMemo(() => {
			switch (improvement) {
				case ImprovementDirection.Up:
					return "Higher is better";
				case ImprovementDirection.Down:
					return "Lower is better";
				default:
					return "No polarity (neutral metric)";
			}
		}, [improvement]);

		// Compose optional expected-colour table derived from the engine's VariationIcon (polarity-aware)
		const table = showTable ? (
			<Table
				caption="Computed expected colours (v2)"
				visuallyHiddenCaption
				responsive
				firstCellIsHeader={false}
				columns={[
					{ key: "index", title: "Index" },
					{ key: "date", title: "Date" },
					{ key: "value", title: "Value", format: "numeric" },
					{ key: "icon", title: "Icon" },
					{
						key: "eligible",
						title: "Eligible",
						render: (isEligible: boolean) => ({ node: <span>{isEligible ? "Yes" : "No"}</span> }),
					},
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
				data={nonGhostRows.map((r, i) => ({
						index: i,
						date: new Date(r.x as any).toLocaleDateString("en-GB"),
						value: r.value,
						icon: String(r.variationIcon),
						eligible: typeof r.mean === "number" && Number.isFinite(r.mean),
						colour: iconToHex(r.variationIcon),
					}))}
			/>
		) : undefined;

		const paritySummary = parityMode ? "Parity preset (SQL v2.6a)" : "Base engine";

		return (
			<>
				<ChartContainer
					title={`${def.name} (v2 engine)`}
					description={`${def.description} • ${pointCount} points • ${improvementSummary}`}
					source="Synthetic"
					showTableToggle
					initiallyShowTable={!!showTable}
					tabularData={table}
				>
					<SPCChart
						input={{ data: series }}
						engine={{ chartType: V1ChartType.XmR, metricImprovement: v1Improvement, settings: settings as any }}
						a11y={{ announceFocus: false, unit: def.unit }}
						ui={{ visuals: { showPoints: true, gradientSequences: true, rules: { enableRules: true } } }}
					/>
				</ChartContainer>
				<div style={{ display: "grid", gap: 4, fontSize: 12, color: "#666" }}>
					<div>
						<strong>Dataset:</strong> {def.name} — {def.unit ? `${def.unit} • ` : ""}
						{paritySummary}
					</div>
					<div>
						<strong>Direction:</strong> {improvementSummary}
						{showLastJudgement ? (
							<>
								{" • "}
								<strong>Last judgement:</strong> {String(last?.variationIcon ?? "-")}
							</>
						) : null}
					</div>
				</div>
			</>
		);
	},
};
