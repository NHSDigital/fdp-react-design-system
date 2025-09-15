import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useMemo, useState } from "react";
import { ChartContainer } from "../../../../ChartContainer";
import Table from "../../../../../../Tables/Table";
import { Select } from "../../../../../../Select/Select";

import {
	getMetricOptions,
	findGroup,
	normaliseSeries,
	deriveBaselines,
} from "./data/groupedDataset";
import { buildSpcV26a } from "../engine.ts";
import {
	ChartType,
	ImprovementDirection,
	type SpcSettingsV26a,
} from "../types.ts";
import { withParityV26 } from "../presets";
import { SPCChart } from "../../SPCChart";
import { iconToHex } from "./data/variationIconColours";
import {
	ImprovementDirection as V1ImprovementDirection,
	ChartType as V1ChartType,
} from "../../logic/spcConstants";

const metricOptions = getMetricOptions();
const BASE_MINIMUM_POINTS = 12;

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
		// Metric & improvementDirection handled internally now
		showTable: { control: { type: "boolean" } },
		parityMode: { control: { type: "boolean" } },
	},
	args: {
		showTable: true,
		parityMode: false,
	},
};
export default meta;

type Story = StoryObj<{
	showTable?: boolean;
	parityMode?: boolean;
}>;

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

export const GroupedDatasetV2: Story = {
	name: "Playground (grouped JSON)",
	render: ({ showTable, parityMode }, _context) => {
		// Internal metric state
		const [metric, setMetric] = useState<string>(metricOptions[0] ?? "");
		const grp = findGroup(metric)!;
		const mapImprovement = (
			raw: string | undefined
		): "up" | "down" | "neither" => {
			if (!raw) return "neither";
			const norm = raw.toLowerCase();
			if (
				/high is good|higher is good|increase is good|more is good/.test(norm)
			)
				return "up";
			if (
				/low is good|lower is good|decrease is good|fewer is good|less is good/.test(
					norm
				)
			)
				return "down";
			if (norm === "up" || norm === "down" || norm === "neither")
				return norm as any;
			return norm.includes("up")
				? "up"
				: norm.includes("down")
					? "down"
					: "neither";
		};

		const improvementDirection = mapImprovement(grp?.improvement);
		// Manual override (optional). Undefined means "use derived".
		const [overrideDirection, setOverrideDirection] = useState<
			"up" | "down" | "neither" | undefined
		>(undefined);
		// When metric changes, clear override (allow fresh derivation each time)
		useEffect(() => {
			setOverrideDirection(undefined);
		}, [metric]);

		// Guard: if dataset failed to load, render a helpful message
		if (!grp || !Array.isArray(grp.data)) {
			return (
				<ChartContainer
					title="SPC v2 Playground (dataset unavailable)"
					description={`Metrics loaded: ${metricOptions.length}`}
					source="Grouped JSON dataset"
				>
					<div style={{ color: "#a33" }}>
						Dataset could not be loaded. Please check the import path for "Test
						Data.grouped.json" and rebuild Storybook.
					</div>
				</ChartContainer>
			);
		}

		const { data } = normaliseSeries(grp);

		// Apply a manual baseline (recalculation) for the specific "Recalculations - Recalculated" metric
		// Place the baseline at index 15 (0-based: the 16th point)
		const baselines = deriveBaselines(grp, data.length);

		// Direction already normalised in improvementDirection derived earlier
		const datasetDirKey = overrideDirection ?? improvementDirection;
		const dir = toDir(datasetDirKey);

		const settings = useMemo<SpcSettingsV26a>(
			() =>
				parityMode ? withParityV26() : { minimumPoints: BASE_MINIMUM_POINTS },
			[parityMode]
		);
		
		const effectiveMinimumPoints = settings.minimumPoints ?? BASE_MINIMUM_POINTS;

		// Build SPC rows via v2 engine
		const rows = useMemo(() => {
			const input = data.map((d) => ({
				x: d.x,
				value: d.value,
				ghost: false,
				baseline: false,
				target: null,
			}));
			return buildSpcV26a({
				chartType: ChartType.XmR,
				metricImprovement: dir,
				data: input,
				settings,
			}).rows;
		}, [data, dir, settings]);

		// Prepare merged table rows and mismatch count (expected from dataset vs computed by engine)
		const mergedRows = useMemo(() => {
			const nonGhostCount = rows.filter((r) => !r.ghost).length;
			const chartEligible = nonGhostCount >= effectiveMinimumPoints;
			return rows
				.filter((r) => !r.ghost)
				.map((r, i) => {
					const date = new Date(r.x as any).toLocaleDateString("en-GB");
					const value = r.value;
					const expectedHex = String(
						(grp.data[i] && (grp.data[i] as any).colour) || ""
					).toString();
					const computedHex = iconToHex(r.variationIcon);
					const match = expectedHex === computedHex;
					const eligible =
						chartEligible &&
						typeof r.mean === "number" &&
						Number.isFinite(r.mean);
					return {
						index: i,
						date,
						value,
						pointRank: r.pointRank,
						eligible,
						icon: String(r.variationIcon),
						expected: expectedHex,
						computed: computedHex,
						match,
					};
				});
		}, [rows, grp, effectiveMinimumPoints]);

		const mismatchCount = useMemo(
			() => mergedRows.filter((r) => !r.match).length,
			[mergedRows]
		);

		const totalCount = mergedRows.length;

		// Compose a single table merging expected (dataset) vs computed (engine) colours, with a match indicator
		const mergedTable = (
			<Table
				caption="Expected vs computed colours"
				visuallyHiddenCaption
				responsive
				firstCellIsHeader={false}
				columns={[
					{ key: "index", title: "Index" },
					{ key: "date", title: "Date" },
					{ key: "value", title: "Value", format: "numeric" },
					{ key: "icon", title: "Calculated icon" },
					{
						key: "eligible",
						title: "Eligible",
						render: (isEligible: boolean) => ({
							node: <span>{isEligible ? "Yes" : "No"}</span>,
						}),
					},
					{
						key: "expected",
						title: "Expected colour (dataset)",
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
										aria-label={`expected colour swatch ${hex}`}
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
					{
						key: "computed",
						title: "Computed colour (engine)",
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
										aria-label={`computed colour swatch ${hex}`}
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
					{
						key: "match",
						title: "Match",
						render: (isMatch: boolean) => ({
							node: (
								<span
									aria-label={isMatch ? "Match" : "Mismatch"}
									title={isMatch ? "Match" : "Mismatch"}
								>
									{isMatch ? (
										<svg
											className="nhsuk-icon nhsuk-icon__tick"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											aria-hidden="true"
											width="24"
											height="24"
										>
											<path
												strokeWidth="4"
												strokeLinecap="round"
												d="M18.4 7.8l-8.5 8.4L5.6 12"
												stroke="#007f3b"
											/>
										</svg>
									) : (
										<svg
											className="nhsuk-icon nhsuk-icon__cross"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											aria-hidden="true"
											width="24"
											height="24"
										>
											<path
												d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"
												fill="#d5281b"
											/>
											<path
												d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"
												fill="#d5281b"
											/>
										</svg>
									)}
								</span>
							),
						}),
					},
				]}
				data={mergedRows}
			/>
		);

		return (
			<>
				<div
					style={{
						display: "grid",
						gap: 16,
						gridTemplateColumns: "minmax(200px, 1fr) minmax(200px, 1fr)",
						maxWidth: 860,
						marginBottom: 16,
					}}
				>
					<div>
						<label
							htmlFor="spc-metric-select"
							className="nhsuk-label"
							style={{ display: "block", fontWeight: 600 }}
						>
							Metric
						</label>
						<p
							className="nhsuk-hint"
							id="spc-metric-hint"
							style={{ marginTop: 4 }}
						>
							Choose a metric from the grouped dataset
						</p>
						<Select
							name="metric"
							id="spc-metric-select"
							ariaLabel="Metric"
							aria-describedby="spc-metric-hint"
							value={metric}
							onChange={(e: any) => {
								const next = e?.target?.value;
								if (!next) return;
								setMetric(next);
							}}
						>
							{metricOptions.map((m) => (
								<option key={m} value={m}>
									{m}
								</option>
							))}
						</Select>
					</div>
					<div>
						<label
							htmlFor="spc-direction-select"
							className="nhsuk-label"
							style={{ display: "block", fontWeight: 600 }}
						>
							Improvement direction
						</label>
						<p
							className="nhsuk-hint"
							id="spc-direction-hint"
							style={{ marginTop: 4 }}
						>
							Derived: <strong>{improvementDirection}</strong>
							{overrideDirection ? ` (overridden → ${overrideDirection})` : ""}
						</p>
						<Select
							name="direction"
							id="spc-direction-select"
							ariaLabel="Improvement direction"
							aria-describedby="spc-direction-hint"
							value={overrideDirection ?? ""}
							onChange={(e: any) => {
								const next = e?.target?.value;
								if (!next) {
									setOverrideDirection(undefined);
									return;
								}
								setOverrideDirection(next as any);
							}}
						>
							<option value="">(Derived: {improvementDirection})</option>
							<option value="up">up</option>
							<option value="down">down</option>
							<option value="neither">neither</option>
						</Select>
					</div>
				</div>
				<ChartContainer
					title={`${grp.metric} (v2 engine)`}
					description={`Points: ${rows.length}`}
					source="Fictive NHS Testing Dataset"
					showTableToggle
					initiallyShowTable={!!showTable}
					tabularData={
						showTable ? (
							<div style={{ display: "grid", gap: 8 }}>
								<div
									role="status"
									aria-live="polite"
									style={{
										display: "inline-flex",
										alignItems: "center",
										gap: 8,
										fontWeight: 600,
										color: mismatchCount === 0 ? "#007f3b" : "#d5281b",
									}}
								>
									{mismatchCount === 0 ? (
										<svg
											className="nhsuk-icon nhsuk-icon__tick"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											aria-hidden="true"
											width="20"
											height="20"
										>
											<path
												strokeWidth="4"
												strokeLinecap="round"
												d="M18.4 7.8l-8.5 8.4L5.6 12"
												stroke="#007f3b"
											/>
										</svg>
									) : (
										<svg
											className="nhsuk-icon nhsuk-icon__cross"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											aria-hidden="true"
											width="20"
											height="20"
										>
											<path
												d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"
												fill="#d5281b"
											/>
											<path
												d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"
												fill="#d5281b"
											/>
										</svg>
									)}
									{mismatchCount === 0
										? `All ${totalCount} points match expected colours`
										: `${mismatchCount} mismatch${mismatchCount === 1 ? "" : "es"} of ${totalCount} points`}
								</div>
								{mergedTable}
							</div>
						) : undefined
					}
				>
					<SPCChart
						data={data.map((d) => ({ x: d.x, y: d.value }))}
						chartType={V1ChartType.XmR}
						metricImprovement={toV1Dir(dir)}
						enableRules
						showPoints
						gradientSequences
						baselines={baselines}
						announceFocus={false}
					/>
				</ChartContainer>
				<div style={{ display: "grid", gap: 6 }}>
					{/* <div><strong>Last judgement (v2):</strong> {last?.variationIcon}</div> */}
					<div style={{ fontSize: 12 }}>
						Metrics available: {metricOptions.length}
					</div>
					<div style={{ fontSize: 12, color: "#666" }}>
						This v2 playground uses the new engine (logic_v2) and renders the
						SPCChart visual to help compare expected colours from the dataset
						with the engine’s judgement.
					</div>
				</div>
			</>
		);
	},
};
