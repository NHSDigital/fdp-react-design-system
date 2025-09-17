import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { SPCChart, ImprovementDirection, VisualsScenario } from "../../SPCChart.tsx";
import { ChartContainer } from "../../../../ChartContainer.tsx";
// Import grouped JSON produced by tools/spc-csv-to-json.mjs
import grouped from "../../test-data/Test Data.grouped.json";
import { SpcEmbeddedIconVariant } from "./SPCChart.constants.ts";
// For brute-force boundary alignment against expected colours
import { buildVisualsForScenario } from "../../logic_v2/presets";
import { SpcVisualCategory } from "../../logic_v2/engine";
import Table from "../../../../../../Tables/Table.tsx";

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
	// Exclude duplicates: canonical version now lives alongside SPCChart component root.
	includeStories: [],
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

		// Apply a manual baseline (recalculation) for specific metrics only where intended.
		// IMPORTANT: Do NOT set baselines for the "Special cause crossing recalculations" scenarios,
		// as this masks the v2 engine's recalculation behaviour within the chart.
		// Place the baseline at index 15 (0-based: the 16th point) for the explicit recalculation demos.
		let baselines: (boolean | null | undefined)[] | undefined;
		if (
			grp.metric === "Recalculations - Recalculated" ||
			grp.metric === "Baselines - Recalculated"
		) {
			baselines = new Array(data.length).fill(undefined);
			const baselineIndex = Math.min(15, Math.max(0, data.length - 1));
			baselines[baselineIndex] = true;
		}
		// Map metric to visualsScenario for deterministic visuals behaviour
		// Normalise metric labels to ignore optional "(v2 engine)" suffix in grouped dataset
		const norm = (s: string) => s.replace(/\s*\(v2 engine\)\s*$/i, "");
		const metricKey = norm(grp.metric);
		let visualsScenario: VisualsScenario = VisualsScenario.None;
		if (metricKey === "Recalculations - Recalculated") {
			visualsScenario = VisualsScenario.RecalculationsRecalculated;
		} else if (metricKey === "Baselines - Recalculated") {
			visualsScenario = VisualsScenario.BaselinesRecalculated;
		} else if (metricKey.startsWith("Special cause crossing recalculations - shift")) {
			visualsScenario = VisualsScenario.RecalcCrossingShift;
		} else if (metricKey.startsWith("Special cause crossing recalculations - trend")) {
			visualsScenario = VisualsScenario.RecalcCrossingTrend;
		} else if (metricKey.startsWith("Special cause crossing recalculations - two-sigma")) {
			visualsScenario = VisualsScenario.RecalcCrossingTwoSigma;
		}

		// Allow auto recalculation after shift only for the specific shift scenario,
		// so the v2 engine's recalculation is reflected without being blocked by story overrides.
		const autoRecalculateAfterShift =
			visualsScenario === VisualsScenario.RecalcCrossingShift;
		const displayMetric = grp.metric;
		// Prefer the dataset's declared improvement direction when present
		const datasetDirKey = grp.improvement;
		let effectiveDirKey: "neither" | "up" | "down" =
			datasetDirKey === "up" ||
			datasetDirKey === "down" ||
			datasetDirKey === "neither"
				? datasetDirKey
				: improvementDirection;
		// Heuristic: for crossing recalculation scenarios the dataset expectations are directional; if neutral, default to 'up'
		const isCrossScenario =
			visualsScenario === VisualsScenario.RecalcCrossingShift ||
			visualsScenario === VisualsScenario.RecalcCrossingTrend ||
			visualsScenario === VisualsScenario.RecalcCrossingTwoSigma;
		if (isCrossScenario && effectiveDirKey === "neither") {
			effectiveDirKey = "up";
		}
		const dir = toDir(effectiveDirKey);

		// Keep the control UI in sync: when selecting a metric with an explicit improvement,
		// update the improvementDirection arg so the control reflects it.
		useEffect(() => {
			const canUpdate = typeof updateArgs === "function";
			const desired = isCrossScenario && (datasetDirKey == null || datasetDirKey === "") ? "up" : datasetDirKey;
			if (canUpdate && (desired === "up" || desired === "down" || desired === "neither")) {
				if (improvementDirection !== desired) {
					try {
						updateArgs({ improvementDirection: desired });
					} catch {
						// ignore if not supported in this build context
					}
				}
			}
			// Only react to metric changes and the dataset-declared direction
		}, [metric, datasetDirKey, isCrossScenario]);

		// For the three special-cause crossing scenarios, brute-force the most likely baseline
		// index that makes v2 engine visuals align with the dataset's expected colours.
		if (
			visualsScenario === VisualsScenario.RecalcCrossingShift ||
			visualsScenario === VisualsScenario.RecalcCrossingTrend ||
			visualsScenario === VisualsScenario.RecalcCrossingTwoSigma
		) {
			try {
				// Map expected HEX to SpcVisualCategory
				const hexToCat = (hex: string): SpcVisualCategory => {
					switch ((hex || "").toUpperCase()) {
						case "#00B0F0":
							return SpcVisualCategory.Improvement;
						case "#E46C0A":
							return SpcVisualCategory.Concern;
						case "#490092":
							return SpcVisualCategory.NoJudgement;
						default:
							return SpcVisualCategory.Common;
					}
				};
				const expectedCats = grp.data.map((d) => hexToCat(d.colour));
				// Search a reasonable window (cover off-by-one around 15 and fall back to global scan)
				const candidates: number[] = [];
				for (let i = 12; i <= 18; i++) if (i >= 1 && i < data.length) candidates.push(i);
				if (!candidates.length) {
					for (let i = 1; i < data.length; i++) candidates.push(i);
				}
				let bestIdx = -1;
				let bestScore = -1;
				for (const idx of candidates) {
					const bs = new Array(data.length).fill(undefined);
					bs[idx] = true;
					const rowsInput = data.map((d, i) => ({ x: d.x as any, value: d.y, baseline: bs[i] }));
					const v2Dir = effectiveDirKey === "up" ? "Up" : effectiveDirKey === "down" ? "Down" : "Neither";
					const { visuals } = buildVisualsForScenario(
						{ chartType: "XmR" as any, metricImprovement: v2Dir as any, data: rowsInput },
						visualsScenario as any,
						{ trendVisualMode: "Ungated", enableNeutralNoJudgement: true }
					);
					let score = 0;
					for (let i = 0; i < visuals.length && i < expectedCats.length; i++) {
						if (visuals[i] === expectedCats[i]) score++;
					}
					if (score > bestScore) {
						bestScore = score;
						bestIdx = idx;
					}
				}
				if (bestIdx >= 0) {
					baselines = new Array(data.length).fill(undefined);
					baselines[bestIdx] = true;
					try {
						console.debug(
							`[SPC Story] Baseline brute-force for "${displayMetric}" (${visualsScenario}): index=${bestIdx}, score=${bestScore}/${data.length}, candidates=[${candidates.join(", ")}].`
						);
					} catch {}
				}
				else {
					try {
						console.debug(
							`[SPC Story] Baseline brute-force for "${displayMetric}" (${visualsScenario}): no index selected, bestScore=${bestScore}/${data.length}, candidates=[${candidates.join(", ")}].`
						);
					} catch {}
				}
			} catch {
				// non-fatal in story context
			}
		}

		return (
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
					visualsScenario={visualsScenario}
					embeddedIconVariant={embeddedIconVariant as SpcEmbeddedIconVariant}
					embeddedIconRunLength={embeddedIconRunLength}
					gradientSequences
					settings={{ minimumPointsPartition: 12, autoRecalculateAfterShift, baselineSuggest: false }}
				/>
			</ChartContainer>
		);
	},
};
