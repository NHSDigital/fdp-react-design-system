import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { SPCChart } from "../../SPCChart";
import Table from "../../../../../../Tables/Table";
import { Button } from "../../../../../../Button";
import { Select } from "../../../../../../Select/Select";
import { Checkbox } from "../../../../../../Checkbox";
import { Input } from "../../../../../../Input";
import { Grid, Row, Column, GridWidth } from "../../../../../../Grid";
import { Label } from "../../../../../../Label";
import { Hint } from "../../../../../../Hint";
import { InsetText } from "../../../../../../InsetText";
import { buildVisualsForScenario, VisualsScenario } from "../presets";
import { buildSpcV26aWithVisuals } from "../engine";
import { SpcVisualCategory, TrendVisualMode } from "../postprocess/visualCategories";
import { ChartType, ImprovementDirection, type SpcRowV2 } from "../types";
import {
	ChartType as V1ChartType,
	ImprovementDirection as V1ImprovementDirection,
} from "../../types";
import { Heading } from "../../../../../../Heading";

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

/**
 * Interactive demo for SPC v2 Visual Scenarios.
 *
 * - The chart uses the selected VisualsScenario via the component prop.
 * - The table shows engine-derived visuals computed by buildVisualsForScenario for the same series.
 * - We keep the chart "engine-true" and let the scenario adjust visuals only (rules/rows unchanged).
 */
export const SPCVisualsScenarioToggleDemo: React.FC = () => {
	// Dataset pattern: upward or downward crossing sequences
	const [pattern, setPattern] = useState<"Upward" | "Downward">("Upward");
	const [crossingStyle, setCrossingStyle] = useState<"Immediate shift" | "Gradual trend" | "Minimal nudge">(
		"Immediate shift"
	);
	const [datasetType, setDatasetType] = useState<
		"Favourable crossing" | "Weak/no change" | "Regression"
	>("Favourable crossing");
	const [direction, setDirection] = useState(ImprovementDirection.Up);
	const [scenario, setScenario] = useState<VisualsScenario>(VisualsScenario.None);
	const [minPoints, setMinPoints] = useState(12);
	const [syncDir, setSyncDir] = useState(true);
	const [baselineAtBoundary, setBaselineAtBoundary] = useState(true);
	const [showPartitionMarkers, setShowPartitionMarkers] = useState(true);
	const [showUpgradeStrip, setShowUpgradeStrip] = useState(true);

	// Auto-sync direction to pattern if enabled
	useEffect(() => {
		if (!syncDir) return;
		setDirection(pattern === "Upward" ? ImprovementDirection.Up : ImprovementDirection.Down);
	}, [pattern, syncDir]);

	// Craft sequences with clear favourable crossings and controllable consolidation style
	const series = useMemo(() => {
		// We keep 11 points of pre‑boundary stability, then switch behaviour.
		// baselineIndex anchors any explicit baseline we set (first point of new partition)
		const before = pattern === "Upward"
			? [10.8, 10.9, 10.85, 10.88, 10.86, 10.9, 10.87, 10.89, 10.85, 10.88, 10.9]
			: [11.3, 11.25, 11.28, 11.26, 11.27, 11.24, 11.26, 11.25, 11.27, 11.26, 11.25];

		let after: number[];
		if (datasetType === "Favourable crossing") {
			switch (crossingStyle) {
				case "Immediate shift":
					after = pattern === "Upward"
						? [11.15, 11.2, 11.22, 11.24, 11.26, 11.28, 11.3, 11.31, 11.3]
						: [11.05, 10.98, 10.95, 10.92, 10.9, 10.88, 10.86, 10.85, 10.86];
					break;
				case "Gradual trend":
					after = pattern === "Upward"
						? [10.95, 11.0, 11.05, 11.1, 11.15, 11.2, 11.22, 11.25, 11.26]
						: [11.15, 11.1, 11.05, 11.0, 10.96, 10.93, 10.9, 10.88, 10.87];
					break;
				case "Minimal nudge":
				default:
					after = pattern === "Upward"
						? [10.93, 10.96, 10.99, 11.02, 11.04, 11.06, 11.07, 11.08, 11.09]
						: [11.1, 11.08, 11.06, 11.04, 11.02, 11.0, 10.99, 10.98, 10.97];
			}
		} else if (datasetType === "Weak/no change") {
			// Post-baseline barely moves; should minimize overlay upgrades.
			after = pattern === "Upward"
				? [10.91, 10.92, 10.9, 10.91, 10.92, 10.9, 10.91, 10.92, 10.91]
				: [11.24, 11.23, 11.25, 11.24, 11.23, 11.24, 11.25, 11.24, 11.24];
		} else {
			// Regression: small favourable move, then revert past the baseline in the unfavourable direction.
			after = pattern === "Upward"
				? [10.98, 11.02, 11.0, 10.95, 10.92, 10.9, 10.88, 10.86, 10.85]
				: [11.12, 11.06, 11.08, 11.12, 11.16, 11.2, 11.23, 11.25, 11.26];
		}

		const vals = before.concat(after);
		return vals.map((y, i) => ({ x: i, y }));
	}, [pattern, crossingStyle, datasetType]);

	// Explicit baseline at the boundary to make scenario overlays visible
	const baselineIndex = 11; // first point of the new partition
	const baselines = useMemo(() => {
		if (!baselineAtBoundary) return undefined;
		return Array.from({ length: series.length }, (_, i) => (i === baselineIndex ? true : undefined));
	}, [series.length, baselineAtBoundary]);

	// Compute visuals via v2 helper for the comparison table
	const { visuals, rows, upgradedIndices } = useMemo(() => {
		const input = series.map((d) => ({
			x: d.x,
			value: d.y,
			ghost: false,
			baseline: baselines?.[d.x] ?? false,
			target: null,
		}));
		const args = {
			chartType: ChartType.XmR,
			metricImprovement: direction,
			data: input,
			settings: { minimumPoints: minPoints },
		} as const;
		const scen = buildVisualsForScenario(args, scenario, {
			trendVisualMode: TrendVisualMode.Ungated,
			enableNeutralNoJudgement: true,
		});
		// Base visuals without boundary overlay for teaching comparison
		const base = buildSpcV26aWithVisuals(args, {
			trendVisualMode: TrendVisualMode.Ungated,
			enableNeutralNoJudgement: true,
		});
		const isNeutral = (c: SpcVisualCategory) =>
			c === SpcVisualCategory.Common || c === SpcVisualCategory.NoJudgement;
		const isDirectional = (c: SpcVisualCategory) =>
			c === SpcVisualCategory.Improvement || c === SpcVisualCategory.Concern;
		const upgrades = scen.visuals
			.map((v, i) => (isNeutral(base.visuals[i]!) && isDirectional(v) ? i : -1))
			.filter((i) => i >= 0);
		return { visuals: scen.visuals, rows: scen.rows, upgradedIndices: upgrades };
	}, [series, baselines, direction, scenario, minPoints]);

	const scenarioInfo = (s: VisualsScenario): { explanation: string; qi: string } => {
		switch (s) {
			case VisualsScenario.None:
				return {
					explanation: "No boundary-window overlay. Visual categories derive solely from rules.",
					qi: "Keep outputs purely rule-based for audit/neutral reporting.",
				};
			case VisualsScenario.RecalcCrossingShift:
				return {
					explanation:
						"RecalcCrossingShift — preWindow: 2, postWindow: 4, prePolarity: 'Same'. Highlights quick consolidation immediately after new baseline.",
					qi: "Useful to show rapid impact of an intervention when step-change is expected.",
				};
			case VisualsScenario.RecalcCrossingTrend:
				return {
					explanation:
						"RecalcCrossingTrend — preWindow: 1, postWindow: 5, prePolarity: 'Same'. Allows a few post-recalc points to establish trend.",
					qi: "Good when improvement emerges over several points (adoption curves, pathway bedding-in).",
				};
			case VisualsScenario.RecalcCrossingTwoSigma:
				return {
					explanation:
						"RecalcCrossingTwoSigma — preWindow: 1, postWindow: 1, prePolarity: 'Same'. Minimal, conservative overlay.",
					qi: "Minimizes false positives when variability is high or signals are borderline.",
				};
			case VisualsScenario.RecalculationsRecalculated:
				return {
					explanation:
						"RecalculationsRecalculated — very light-touch; clears the point before the first boundary to Common for clarity.",
					qi: "Pairs with a narrative that limits were recalculated and visuals are reset without over-claiming change.",
				};
			case VisualsScenario.BaselinesRecalculated:
				return {
					explanation:
						"BaselinesRecalculated — anchors to explicit baselines; sets directionOverride; defers post-baseline colouring to dataset policy.",
					qi: "Best for formal reporting where curated baselines govern the story.",
				};
			default:
				return { explanation: "", qi: "" };
		}
	};

	return (
		<Grid>
			{/* Row: Scenario construction controls */}
			<Row style={{ rowGap: 8, columnGap: 16 }}>
				<Column width={GridWidth.Full}>
					<Heading level={4}>Scenario Construction</Heading>
				</Column>
			</Row>
			<Row style={{ rowGap: 8, columnGap: 16 }}>
				<Column width={GridWidth.OneThird}>
					<Label size="s" htmlFor="spc-viz-dataset">Dataset preset</Label>
					<Hint id="hint-spc-viz-dataset">
						Choose a micro-dataset pattern to illustrate a teaching scenario (not real data).
					</Hint>
					<Select
						id="spc-viz-dataset"
						name="spc-viz-dataset"
						ariaLabel="Dataset"
						describedBy="hint-spc-viz-dataset"
						value={datasetType}
						onChange={(e) => setDatasetType(e.target.value as any)}
					>
						<Select.Option value="Favourable crossing">Favourable crossing</Select.Option>
						<Select.Option value="Weak/no change">Weak/no change</Select.Option>
						<Select.Option value="Regression">Regression</Select.Option>
					</Select>
				</Column>
				<Column width={GridWidth.OneThird}>
					<Label size="s" htmlFor="spc-viz-pattern">Crossing direction</Label>
					<Hint id="hint-spc-viz-pattern">
						Direction of the shift relative to the baseline. QI: sets whether higher or lower values are favourable.
					</Hint>
					<Select
						id="spc-viz-pattern"
						name="spc-viz-pattern"
						ariaLabel="Pattern"
						describedBy="hint-spc-viz-pattern"
						value={pattern}
						onChange={(e) => setPattern(e.target.value as "Upward" | "Downward")}
					>
						<Select.Option value="Upward">Upward crossing</Select.Option>
						<Select.Option value="Downward">Downward crossing</Select.Option>
					</Select>
				</Column>
				<Column width={GridWidth.OneThird}>
					<Label size="s" htmlFor="spc-viz-crossing">Consolidation style</Label>
					<Hint id="hint-spc-viz-crossing">
						Stat: defines how quickly points consolidate after boundary. QI: fast consolidation often indicates effective intervention.
					</Hint>
					<Select
						id="spc-viz-crossing"
						name="spc-viz-crossing"
						ariaLabel="Crossing style"
						describedBy="hint-spc-viz-crossing"
						value={crossingStyle}
						onChange={(e) => setCrossingStyle(e.target.value as any)}
					>
						<Select.Option value="Immediate shift">Immediate shift</Select.Option>
						<Select.Option value="Gradual trend">Gradual trend</Select.Option>
						<Select.Option value="Minimal nudge">Minimal nudge</Select.Option>
					</Select>
				</Column>
			</Row>
			{/* Row: Policy overlays & direction */}
			<Row style={{ rowGap: 8, columnGap: 16 }}>
				<Column width={GridWidth.Full}>
					<Heading level={4}>Policy Overlays</Heading>
				</Column>
			</Row>
			<Row style={{ rowGap: 8, columnGap: 32 }}>
				<Column width={GridWidth.OneThird}>
					<Label size="s" htmlFor="spc-viz-direction">Improvement direction</Label>
					<Hint id="hint-spc-viz-direction">
						Stat: defines favourable polarity for signals. QI: align with clinical goal (e.g., higher vaccination uptake = Up).
					</Hint>
					<Select
						id="spc-viz-direction"
						name="spc-viz-direction"
						ariaLabel="Direction"
						describedBy="hint-spc-viz-direction"
						value={direction}
						onChange={(e) => setDirection(e.target.value as ImprovementDirection)}
					>
						<Select.Option value={ImprovementDirection.Up}>Up (high is good)</Select.Option>
						<Select.Option value={ImprovementDirection.Down}>Down (low is good)</Select.Option>
						<Select.Option value={ImprovementDirection.Neither}>Neither</Select.Option>
					</Select>
				</Column>
				<Column width={GridWidth.OneThird}>
					<Label size="s" htmlFor="spc-viz-scenario">Visual scenario</Label>
					<Hint id="hint-spc-viz-scenario">
						Overlay upgrades neutral visuals near boundaries. QI: communicates intended narrative without altering engine rules.
					</Hint>
					<Select
						id="spc-viz-scenario"
						name="spc-viz-scenario"
						ariaLabel="Scenario"
						describedBy="hint-spc-viz-scenario"
						value={scenario}
						onChange={(e) => setScenario(e.target.value as unknown as VisualsScenario)}
					>
						<Select.Option value={VisualsScenario.None}>None</Select.Option>
						<Select.Option value={VisualsScenario.RecalcCrossingShift}>RecalcCrossingShift</Select.Option>
						<Select.Option value={VisualsScenario.RecalcCrossingTrend}>RecalcCrossingTrend</Select.Option>
						<Select.Option value={VisualsScenario.RecalcCrossingTwoSigma}>RecalcCrossingTwoSigma</Select.Option>
						<Select.Option value={VisualsScenario.RecalculationsRecalculated}>RecalculationsRecalculated</Select.Option>
						<Select.Option value={VisualsScenario.BaselinesRecalculated}>BaselinesRecalculated</Select.Option>
					</Select>
				</Column>
				<Column width={GridWidth.OneThird}>
					<div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
						<Button onClick={() => setScenario(VisualsScenario.None)}>Reset</Button>
					</div>
				</Column>
			</Row>
			<Row>
				<Column>
				<SPCChart
					input={{ data: series, baselines }}
					engine={{
						chartType: V1ChartType.XmR,
						metricImprovement: toV1Dir(direction),
						settings: { minimumPoints: minPoints } as any,
					}}
					ui={{
						axes: { alwaysShowZeroY: false },
						visuals: {
							showPoints: true,
							gradientSequences: true,
							rules: { enableRules: true },
						},
						overlays: { partitionMarkers: showPartitionMarkers }
					}}
					visualsScenario={scenario}
					container={{ height: 240 }}
					a11y={{ label: "Visual scenarios demo chart" }}
				/>

				{/* Upgraded-indices highlight band */}
				{showUpgradeStrip && (
					<div style={{ marginTop: 6 }}>
						<div
							role="img"
							aria-label="Upgraded indices band"
							style={{
								display: "grid",
								gridTemplateColumns: `repeat(${series.length}, 1fr)`,
								gap: 1,
								width: "100%",
								height: 8,
								borderRadius: 4,
								background: "#eef2f7",
								padding: 1,
							}}
						>
							{series.map((_, i) => {
								const isUpgraded = upgradedIndices.includes(i);
								return (
									<div
										key={i}
										style={{
											width: "100%",
											height: "100%",
											borderRadius: 2,
											background: isUpgraded ? "#ffd24d" : "transparent",
										}}
									/>
								);
							})}
						</div>
						<div className="nhsuk-body" style={{ marginTop: 4, color: "#667085" }}>
							Highlighted positions indicate indices upgraded by the selected scenario overlay
							(neutral → directional) relative to base visuals.
						</div>
					</div>
				)}
				</Column>
			</Row>
			{/* Scenario details as inset text */}
			<Row>
				<Column>
					<InsetText>
						<p><strong>Scenario info</strong></p>
						<p><strong>Explanation:</strong> {scenarioInfo(scenario).explanation}</p>
						<p style={{ marginTop: 4 }}><strong>QI insight:</strong> {scenarioInfo(scenario).qi}</p>
						<p style={{ marginTop: 4 }}>
							Tip: Differences are most visible when a recalculation boundary is present. Enabling
							<strong> Mark baseline at crossing</strong> anchors the boundary at point {baselineIndex}.
						</p>
					</InsetText>
				</Column>
			</Row>
			{/* Row: Context toggles (baseline + direction sync) */}
			<Row style={{ rowGap: 8, columnGap: 16, marginBottom: 16 }}>
				<Column width={GridWidth.Full}>
					<Heading level={4}>Context Toggles</Heading>
				</Column>
			</Row>
			<Row style={{ rowGap: 8 }}>
				<Column width={GridWidth.OneHalf}>
					<Label size="s" htmlFor="spc-viz-syncdir">Direction sync</Label>
					<Hint id="hint-spc-viz-syncdir">Keeps improvement direction aligned to crossing direction for clearer teaching demos.</Hint>
					<Checkbox id="spc-viz-syncdir" checked={syncDir} onChange={(c) => setSyncDir(c)} attributes={{ 'aria-describedby': 'hint-spc-viz-syncdir' }}>
						Auto-sync direction to pattern
					</Checkbox>
				</Column>
				<Column width={GridWidth.OneHalf}>
					<Label size="s" htmlFor="spc-viz-baseline">Baseline anchor</Label>
					<Hint id="hint-spc-viz-baseline">Marks a recalculation boundary at the crossing to make overlay effects deterministic.</Hint>
					<Checkbox id="spc-viz-baseline" checked={baselineAtBoundary} onChange={(c) => setBaselineAtBoundary(c)} attributes={{ 'aria-describedby': 'hint-spc-viz-baseline' }}>
						Mark baseline at crossing
					</Checkbox>
				</Column>
			</Row>
			{/* Row: Visual aids (partitions + upgrade band) */}
			<Row style={{ rowGap: 8 }}>
				<Column width={GridWidth.OneHalf}>
					<Label size="s" htmlFor="spc-viz-partitions">Partition markers</Label>
					<Hint id="hint-spc-viz-partitions">Shows recalculation boundaries to contextualise post-change visuals.</Hint>
					<Checkbox id="spc-viz-partitions" checked={showPartitionMarkers} onChange={(c) => setShowPartitionMarkers(c)} attributes={{ 'aria-describedby': 'hint-spc-viz-partitions' }}>
						Show partition markers
					</Checkbox>
				</Column>
				<Column width={GridWidth.OneHalf}>
					<Label size="s" htmlFor="spc-viz-upgrades">Upgraded indices band</Label>
					<Hint id="hint-spc-viz-upgrades">Highlights points upgraded by the overlay (neutral → directional) to aid explanation.</Hint>
					<Checkbox id="spc-viz-upgrades" checked={showUpgradeStrip} onChange={(c) => setShowUpgradeStrip(c)} attributes={{ 'aria-describedby': 'hint-spc-viz-upgrades' }}>
						Highlight upgraded indices
					</Checkbox>
				</Column>
			</Row>
			{/* Row: Engine settings */}
			<Row>
				<Column>
					<Label size="s" htmlFor="spc-viz-minpoints">Minimum points</Label>
					<Hint id="hint-spc-viz-minpoints">Stat: minimum observations required to compute stable limits. QI: prevents over-claiming with very short series.</Hint>
					<Input
						id="spc-viz-minpoints"
						name="spc-viz-minpoints"
						type="number"
						min={6}
						max={20}
						step={1}
						width="3"
						describedBy="hint-spc-viz-minpoints"
						value={String(minPoints)}
						onChange={(e) => setMinPoints(parseInt((e.target as HTMLInputElement).value || "12", 10))}
					/>
				</Column>
			</Row>
			{/* Mini overlay inspector */}
			<Row>
				<Column>
					{/* Summary of upgrades */}
					<InsetText>
						<p><strong>Overlay Upgrades</strong></p>
						{upgradedIndices.length
						? `Indices upgraded from neutral → directional: ${upgradedIndices.join(", ")}`
						: "No upgrades for this combination (base visuals match scenario visuals near the boundary)."}
					</InsetText>
				</Column>
			</Row>
			<Row>
				<Column>
					<Table
				caption="Visual categories under selected scenario"
				visuallyHiddenCaption
				responsive
				firstCellIsHeader={false}
				columns={[
					{ key: "i", title: "Index" },
					{ key: "value", title: "Value", format: "numeric" },
					{ key: "eligible", title: "Eligible" },
					{ key: "category", title: "Visual category" },
				]}
				data={rows.map((r: SpcRowV2, i: number) => ({
					i,
					value: r.value,
					eligible:
						typeof r.mean === "number" && Number.isFinite(r.mean) ? "Yes" : "No",
					category: String(visuals[i]),
				}))}
					/>
				</Column>
			</Row>
		</Grid>
	);
};

export default SPCVisualsScenarioToggleDemo;
