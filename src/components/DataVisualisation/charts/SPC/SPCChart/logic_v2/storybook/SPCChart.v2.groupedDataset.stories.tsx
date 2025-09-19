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
import { SpcVisualCategory } from "../postprocess/visualCategories";
import {
	ChartType,
	ImprovementDirection,
	type SpcSettingsV26a,
	TrendSegmentationMode,
	TrendSegmentationStrategy,
} from "../types.ts";
import { computeTrendSegments, chooseSegmentsForHighlight, TrendDirection } from "../postprocess/trendSegments";
import { withParityV26, withConflictPresetAutoV26, VisualsScenario, buildVisualsForScenario } from "../presets";
import { SPCChart } from "../../SPCChart";
import { iconToHex } from "./data/variationIconColours";
import { ImprovementDirection as V1ImprovementDirection, ChartType as V1ChartType } from "../../types";
import { deriveDirectionFromDataset } from "../utils/direction";

const metricOptions = getMetricOptions();
const METRIC_STORAGE_KEY = "spc.v2.metric";
const DIRECTION_STORAGE_PREFIX = "spc.v2.direction:";
const BASE_MINIMUM_POINTS = 12;

// Map a UI-agnostic visual category to the canonical hex used in tables
function visualCategoryToHex(cat: SpcVisualCategory): string {
	switch (cat) {
		case SpcVisualCategory.Improvement:
			return "#00B0F0"; // blue
		case SpcVisualCategory.Concern:
			return "#E46C0A"; // orange
		case SpcVisualCategory.NoJudgement:
			return "#490092"; // purple
		default:
			return "#A6A6A6"; // grey (common)
	}
}

const meta: Meta = {
	title: "Data Visualisation/SPC/v2/Test dataset",
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
		conflictPreset: { control: { type: "boolean" } },
		autoConflictMode: { control: { type: "boolean" } },
		preferImprovementWhenConflict: { control: { type: "boolean" } },
		preferTrendWhenConflict: { control: { type: "boolean" } },
		trendDominatesHighlightedWindow: { control: { type: "boolean" } },
	},
	args: {
		showTable: true,
		parityMode: false,
		conflictPreset: true,
		autoConflictMode: true,
		// Conflict levers default to auto via preset; omit to let auto-preset decide based on direction
	},
};
export default meta;

type Story = StoryObj<{
	showTable?: boolean;
	parityMode?: boolean;
	conflictPreset?: boolean;
	autoConflictMode?: boolean;
	preferImprovementWhenConflict?: boolean;
	preferTrendWhenConflict?: boolean;
	trendDominatesHighlightedWindow?: boolean;
}>;

// Use ImprovementDirection enum directly in state/UI

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
	name: "Playground",
	render: (
		{
			showTable,
			parityMode,
			conflictPreset = false,
			autoConflictMode = true,
			preferImprovementWhenConflict,
			preferTrendWhenConflict,
			trendDominatesHighlightedWindow,
		},
		_context
	) => {
		// Internal metric state with browser persistence
		const [metric, setMetric] = useState<string>(() => {
			try {
				if (typeof window !== "undefined") {
					const saved = window.localStorage.getItem(METRIC_STORAGE_KEY);
					if (saved && metricOptions.includes(saved)) return saved;
				}
			} catch {}
			return metricOptions[0] ?? "";
		});
		const grp = findGroup(metric)!;

		// Persist metric on change (SSR-safe)
		useEffect(() => {
			try {
				if (typeof window !== "undefined") {
					if (metric && metricOptions.includes(metric)) {
						window.localStorage.setItem(METRIC_STORAGE_KEY, metric);
					} else {
						window.localStorage.removeItem(METRIC_STORAGE_KEY);
					}
				}
			} catch {}
		}, [metric]);

		// Derive improvement direction using shared utility (prevents drift between stories and tests)
		const derivedDirection: ImprovementDirection = grp
			? deriveDirectionFromDataset(grp.metric, grp.improvement)
			: ImprovementDirection.Neither;
		const getDirKey = (m: string) =>
			`${DIRECTION_STORAGE_PREFIX}${encodeURIComponent(m)}`;
		// Effective improvement direction (can be derived or user-overridden)
		const [direction, setDirection] =
			useState<ImprovementDirection>(derivedDirection);

		// When metric changes, refresh direction from storage or fall back to derived, then persist
		useEffect(() => {
			try {
				if (typeof window !== "undefined" && grp) {
					const saved = window.localStorage.getItem(getDirKey(metric));
					if (
						saved === ImprovementDirection.Up ||
						saved === ImprovementDirection.Down ||
						saved === ImprovementDirection.Neither
					) {
						setDirection(saved as ImprovementDirection);
					} else {
						setDirection(derivedDirection);
						window.localStorage.setItem(getDirKey(metric), derivedDirection);
					}
				}
			} catch {}
		}, [metric, grp, derivedDirection]);

		// Persist direction whenever it changes
		useEffect(() => {
			try {
				if (typeof window !== "undefined" && grp) {
					window.localStorage.setItem(getDirKey(metric), direction);
				}
			} catch {}
		}, [direction, metric, grp]);

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

		// visualsScenario mapping from metric for boundary-window presets
		const norm = (s: string) => s.replace(/\s*\(v2 engine\)\s*$/i, "");
		const metricKey = norm(grp.metric);
		let visualsScenario: VisualsScenario = VisualsScenario.None;
		if (metricKey === "Recalculations - Recalculated") {
			visualsScenario = VisualsScenario.RecalculationsRecalculated;
		} else if (metricKey === "Baselines - Recalculated") {
			visualsScenario = VisualsScenario.BaselinesRecalculated;
		} else if (
			metricKey.startsWith("Special cause crossing recalculations - shift")
		) {
			visualsScenario = VisualsScenario.RecalcCrossingShift;
		} else if (
			metricKey.startsWith("Special cause crossing recalculations - trend")
		) {
			visualsScenario = VisualsScenario.RecalcCrossingTrend;
		} else if (
			metricKey.startsWith("Special cause crossing recalculations - two-sigma")
		) {
			visualsScenario = VisualsScenario.RecalcCrossingTwoSigma;
		}

		const settings = useMemo<SpcSettingsV26a>(() => {
			if (parityMode) return withParityV26();
			if (conflictPreset) {
				// Direction-aware default that avoids manual switch flipping between High/Low is good datasets
				if (autoConflictMode) {
					return withConflictPresetAutoV26(direction, {
						trendSegmentationMode: TrendSegmentationMode.AutoWhenConflict,
					});
				}
				// Advanced overrides path — allow manual levers to take effect
				const presetOverrides: SpcSettingsV26a = {
					trendSegmentationMode: TrendSegmentationMode.AutoWhenConflict,
				};
				if (typeof preferImprovementWhenConflict === "boolean") {
					presetOverrides.preferImprovementWhenConflict =
						preferImprovementWhenConflict;
				}
				if (typeof preferTrendWhenConflict === "boolean") {
					presetOverrides.preferTrendWhenConflict = preferTrendWhenConflict;
				}
				if (typeof trendDominatesHighlightedWindow === "boolean") {
					presetOverrides.trendDominatesHighlightedWindow =
						trendDominatesHighlightedWindow;
				}
				return withConflictPresetAutoV26(direction, presetOverrides);
			}
			// Default playground path: apply improvement override by default
			// For the specific High-is-good conflict dataset, this eliminates early mismatches.
			// Engine gating will disable segmentation automatically under this flag.
			const base: SpcSettingsV26a = {
				minimumPoints: BASE_MINIMUM_POINTS,
				preferImprovementWhenConflict: true,
			};
			return base;
		}, [
			parityMode,
			conflictPreset,
			autoConflictMode,
			direction,
			preferImprovementWhenConflict,
			preferTrendWhenConflict,
			trendDominatesHighlightedWindow,
		]);

		const effectiveMinimumPoints =
			settings.minimumPoints ?? BASE_MINIMUM_POINTS;

		// Build SPC rows via v2 engine
		const rows = useMemo(() => {
			const input = data.map((d, i) => ({
				x: d.x,
				value: d.value,
				ghost: false,
				baseline: !!baselines?.[i],
				target: null,
			}));
			return buildSpcV26a({
				chartType: ChartType.XmR,
				metricImprovement: direction,
				data: input,
				settings,
			}).rows;
		}, [data, baselines, direction, settings]);

		// Prepare merged table rows and mismatch count (expected vs computed by engine visuals)
		const mergedRows = useMemo(() => {
			const nonGhostCount = rows.filter((r) => !r.ghost).length;
			const chartEligible = nonGhostCount >= effectiveMinimumPoints;

			// Build visuals using engine presets (includes boundary-window overlays for relevant scenarios)
			const visuals = (() => {
				try {
					const input = data.map((d, i) => ({
						x: d.x,
						value: d.value,
						ghost: false,
						baseline: !!baselines?.[i],
						target: null,
					}));
					const { visuals } = buildVisualsForScenario(
						{
							chartType: ChartType.XmR,
							metricImprovement: direction,
							data: input,
							settings,
						} as any,
						visualsScenario
					);
					return visuals as SpcVisualCategory[];
				} catch {
					return [] as SpcVisualCategory[];
				}
			})();

			return rows
				.filter((r) => !r.ghost)
				.map((r, i) => {
					const date = new Date(r.x as any).toLocaleDateString("en-GB");
					const value = r.value;
					const expectedHex = String(
						(grp.data[i] && (grp.data[i] as any).colour) || ""
					);
					const computedHex = visualCategoryToHex(
						visuals[i] ?? SpcVisualCategory.Common
					);
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
		}, [
			rows,
			grp,
			effectiveMinimumPoints,
			data,
			baselines,
			direction,
			settings,
			visualsScenario,
		]);

		const mismatchCount = useMemo(
			() => mergedRows.filter((r) => !r.match).length,
			[mergedRows]
		);
		// Diagnostic logging for the tricky dataset to help tune segmentation/pruning
		useEffect(() => {
			if (metric !== "Special cause conflict - High is good") return;
			try {
				const strategy =
					settings.trendSegmentationStrategy ??
					TrendSegmentationStrategy.CrossingAfterUnfavourable;
				const runs = computeTrendSegments(rows);
				const highlights = chooseSegmentsForHighlight(runs, {
					metricImprovement: direction,
					strategy,
				});
				const allowUp = new Set<number>();
				const allowDown = new Set<number>();
				for (const seg of highlights) {
					for (let k = seg.start; k <= seg.end; k++) {
						if (seg.trendDirection === TrendDirection.Up) allowUp.add(k);
						else allowDown.add(k);
					}
				}
				const eligible = rows.map(
					(r) => !r.ghost && typeof r.mean === "number"
				);
				const report = rows
					.map((r, i) => {
						const expectedHex = String(
							(grp.data[i] && (grp.data[i] as any).colour) || ""
						);
						const computedHex = iconToHex(r.variationIcon);
						const mismatch = expectedHex && expectedHex !== computedHex;
						return {
							i,
							eligible: eligible[i],
							expected: expectedHex,
							got: computedHex,
							spUp: r.singlePointUp,
							spDn: r.singlePointDown,
							tsUp: r.twoSigmaUp,
							tsDn: r.twoSigmaDown,
							shUp: r.shiftUp,
							shDn: r.shiftDown,
							trUp: r.trendUp,
							trDn: r.trendDown,
							allowUp: allowUp.has(i),
							allowDn: allowDown.has(i),
							prime: r.primeDirection,
							impVal: r.specialCauseImprovementValue,
							conVal: r.specialCauseConcernValue,
							mismatch,
						};
					})
					.filter((row) => row.eligible && row.expected); // focus on eligible rows with dataset colours

				console.groupCollapsed(
					"[SPC v2 diag] Special cause conflict - High is good"
				);
				console.log(
					"Segmentation mode:",
					settings.trendSegmentationMode ?? "(default)"
				);
				console.log("Strategy:", String(strategy));
				console.log("Highlighted segments:", highlights);
				console.table?.(report.filter((r) => r.mismatch));
				console.groupEnd();
			} catch (e) {
				console.warn("[SPC v2 diag] Failed to log diagnostics:", e);
			}
		}, [metric, rows, settings, direction, grp]);

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
							Derived: <strong>{derivedDirection}</strong>
							{direction !== derivedDirection
								? ` (overridden → ${direction})`
								: ""}
						</p>
						<Select
							name="direction"
							id="spc-direction-select"
							ariaLabel="Improvement direction"
							aria-describedby="spc-direction-hint"
							value={direction === derivedDirection ? "" : direction}
							onChange={(e: any) => {
								const next = e?.target?.value as string;
								if (!next) {
									setDirection(derivedDirection);
									return;
								}
								if (
									next === ImprovementDirection.Up ||
									next === ImprovementDirection.Down ||
									next === ImprovementDirection.Neither
								) {
									setDirection(next as ImprovementDirection);
								}
							}}
						>
							<option value="">(Derived: {derivedDirection})</option>
							<option value={ImprovementDirection.Up}>Up</option>
							<option value={ImprovementDirection.Down}>Down</option>
							<option value={ImprovementDirection.Neither}>Neither</option>
						</Select>
					</div>
				</div>
				{conflictPreset && autoConflictMode && (
					<div
						role="note"
						style={{
							marginBottom: 12,
							padding: 8,
							border: "1px solid #d9d9d9",
							borderRadius: 4,
							background: "#fafafa",
							color: "#333",
							fontSize: 13,
						}}
					>
						<strong>Auto conflict preset:</strong> Using direction-aware
						settings. For "High is good" the engine prefers improvement and
						disables trend segmentation; for "Low is good" segmentation is
						enabled with CrossingAfterUnfavourable. Manual overrides are ignored
						while Auto is on.
					</div>
				)}
				{conflictPreset &&
					!autoConflictMode &&
					settings?.preferImprovementWhenConflict && (
						<div
							role="note"
							style={{
								marginBottom: 12,
								padding: 8,
								border: "1px solid #d9d9d9",
								borderRadius: 4,
								background: "#fafafa",
								color: "#333",
								fontSize: 13,
							}}
						>
							<strong>Conflict override active:</strong> When "Prefer
							improvement on conflict" is enabled, the engine disables trend
							segmentation. As a result, "Prefer trend on conflict" and "Trend
							dominates highlighted window" have no effect.
						</div>
					)}
				<ChartContainer
					title={`${grp.metric} (v2 engine)`}
					description={`Points: ${rows.length}`}
					source="Fictive NHS Testing Dataset"
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
						input={{ data: data.map((d) => ({ x: d.x, y: d.value })), baselines }}
						engine={{ chartType: V1ChartType.XmR, metricImprovement: toV1Dir(direction), settings }}
						a11y={{ announceFocus: false }}
						visualsEngine={{ scenario: visualsScenario as any }}
						ui={{ visuals: { showPoints: true, gradientSequences: true, rules: { enableRules: true } } }}
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
