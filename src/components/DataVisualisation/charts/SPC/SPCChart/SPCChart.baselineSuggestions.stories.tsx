import React, { useState, useMemo } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SPCChart, ImprovementDirection } from "./SPCChart";
import { ChartType } from "./types";
// Updated relative path after introducing SPC nesting structure
import { ChartContainer } from "../../ChartContainer";

// Simple synthetic series with a shift after point 14 to trigger baseline suggestion.
function makeSeries() {
	const start = new Date("2024-01-01T00:00:00Z");
	const data = Array.from({ length: 30 }, (_, i) => {
		const x = new Date(start.getFullYear(), start.getMonth() + i, 1);
		let base = 50 + Math.sin(i / 3) * 0.6; // mild common cause noise
		if (i >= 14) base += 8; // upward shift
		return { x, y: Number(base.toFixed(2)) };
	});
	return data;
}

const meta: Meta = {
	title: "Data Visualisation/SPC/v1/DEPRECATED - baselineSuggestions (use Dataset)",
	tags: ["hidden"],
	parameters: {
		docs: {
			description: {
				component:
					"This story has been retired. Use the consolidated v1/Dataset story.",
			},
		},
	},
};

export default meta;

type Story = StoryObj;

export const ShiftExample: Story = {
	name: "Shift example",
	render: () => {
		const data = useMemo(() => makeSeries(), []);
		const [baselines, setBaselines] = useState<Array<boolean | undefined>>(() =>
			Array(data.length).fill(undefined)
		);
		// Build matching length target just for completeness (not required)
		const targets = useMemo(() => Array(data.length).fill(55), [data.length]);
		const applyBaseline = (idx: number) => {
			setBaselines((b) => {
				if (b[idx]) return b; // already applied
				const clone = b.slice();
				clone[idx] = true;
				return clone;
			});
		};
		const resetBaselines = () => setBaselines(Array(data.length).fill(undefined));
		return (
			<ChartContainer
				title="Baseline suggestion (shift)"
				description="Upward shift after point 14 – heuristic should propose new baseline around that point"
				source="Synthetic"
			>
				<div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
					<SPCChart
						data={data}
						chartType={ChartType.XmR}
						metricImprovement={ImprovementDirection.Up}
						enableRules
						targets={targets}
						baselines={baselines}
						settings={{ baselineSuggest: true }}
						narrationContext={{
							measureName: "Synthetic metric",
							timeframe: "30 months",
						}}
						gradientSequences
					/>
					<SuggestionInspector
						data={data}
						baselines={baselines}
						onApply={applyBaseline}
						onReset={resetBaselines}
					/>
				</div>
			</ChartContainer>
		);
	},
};

// Lightweight inspector component that re-runs the engine to extract suggestions and renders annotations + list.
import { buildSpc } from "./logic/spc";

interface InspectorProps {
	data: { x: Date; y: number }[];
	baselines: (boolean | undefined)[];
	onApply: (idx: number) => void;
	onReset: () => void;
}
const SuggestionInspector: React.FC<InspectorProps> = ({
	data,
	baselines,
	onApply,
	onReset,
}) => {
	const engine = buildSpc({
		chartType: ChartType.XmR,
		metricImprovement: ImprovementDirection.Up,
		data: data.map((d) => ({ x: d.x, value: d.y, baseline: undefined })),
		settings: { baselineSuggest: true },
	});
	const suggestions = (engine.suggestedBaselines || []).filter(
		(s) => !baselines[s.index]
	); // filter out already applied
	return (
		<div
			style={{
				marginTop: 8,
				border: "1px solid #d8dde0",
				borderRadius: 4,
				padding: 12,
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<h4 style={{ margin: "0 0 8px 0" }}>Baseline suggestions</h4>
				<button
					type="button"
					onClick={onReset}
					style={{ fontSize: 12, padding: "4px 8px" }}
				>
					Reset baselines
				</button>
			</div>
			{suggestions.length === 0 && (
				<p style={{ margin: 0 }}>No (remaining) suggestions.</p>
			)}
			{suggestions.length > 0 && (
				<table
					style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}
				>
					<thead>
						<tr style={{ textAlign: "left" }}>
							<th
								style={{ borderBottom: "1px solid #ccc", padding: "4px 4px" }}
							>
								Index
							</th>
							<th
								style={{ borderBottom: "1px solid #ccc", padding: "4px 4px" }}
							>
								Reason
							</th>
							<th
								style={{ borderBottom: "1px solid #ccc", padding: "4px 4px" }}
							>
								Score
							</th>
							<th
								style={{ borderBottom: "1px solid #ccc", padding: "4px 4px" }}
							>
								ΔMean
							</th>
							<th
								style={{ borderBottom: "1px solid #ccc", padding: "4px 4px" }}
							>
								Window
							</th>
							<th
								style={{ borderBottom: "1px solid #ccc", padding: "4px 4px" }}
							>
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{suggestions.map((s) => (
							<tr key={s.index}>
								<td style={{ padding: "4px 4px" }}>{s.index + 1}</td>
								<td style={{ padding: "4px 4px" }}>
									<code>{s.reason}</code>
								</td>
								<td style={{ padding: "4px 4px" }}>{s.score}</td>
								<td style={{ padding: "4px 4px" }}>
									{s.deltaMean.toFixed(2)}
									<br />
									<small>
										{s.oldMean.toFixed(2)} → {s.newMean.toFixed(2)}
									</small>
								</td>
								<td style={{ padding: "4px 4px" }}>
									{s.window[0] + 1}–{s.window[1] + 1}
								</td>
								<td style={{ padding: "4px 4px" }}>
									<button
										type="button"
										onClick={() => onApply(s.index)}
										style={{ fontSize: 12, padding: "4px 8px" }}
									>
										Apply
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
			<p style={{ fontSize: 11, marginTop: 8, lineHeight: 1.4 }}>
				Applying adds a baseline flag at the suggested point and re-renders.
				Suggestions recompute and any at applied indices are removed. Reset
				clears all applied baselines.
			</p>
		</div>
	);
};
