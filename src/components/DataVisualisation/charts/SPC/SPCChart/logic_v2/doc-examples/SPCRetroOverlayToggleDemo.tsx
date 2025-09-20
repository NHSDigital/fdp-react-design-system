import * as React from "react";
import { useMemo, useState } from "react";
import { SPCChart } from "../../SPCChart";
import Table from "../../../../../../Tables/Table";
import { Button } from "../../../../../../Button";
import { buildSpcV26a } from "../engine";
import { computeRetroShiftOverlay } from "../retroOverlay";
import { ChartType, ImprovementDirection } from "../types";
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

/**
 * Teaching-view demo for the retro overlay. The chart remains engine-true; the overlay is
 * shown in the table and explanatory text only.
 */
export const SPCRetroOverlayToggleDemo: React.FC = () => {
	// Synthetic series crafted to produce a confirmed shift shortly after eligibility
	const series = useMemo(() => {
		const vals = [
			// Pre-eligibility points on one side of an early mean
			10.8, 10.9, 10.7, 10.85, 10.95, 10.9, 10.8, 10.92, 10.88, 10.91, 10.89,
			10.93,
			// Post-eligibility region with a clear run
			11.0, 11.1, 11.2, 11.15, 11.25, 11.3, 11.35, 11.4,
		];
		return vals.map((y, i) => ({ x: i, y }));
	}, []);

	const [minimumPoints, setMinimumPoints] = useState(12);
	const [direction, setDirection] = useState(ImprovementDirection.Up);
	const [showRetro, setShowRetro] = useState(false);

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
		() => computeRetroShiftOverlay(rows, direction, { enableShift: true }),
		[rows, direction]
	);

	const overlayIdx = overlay
		.map((icon, i) => (icon != null ? i : -1))
		.filter((i) => i >= 0);

	return (
		<div style={{ display: "grid", gap: 16 }}>
			<div
				style={{
					display: "flex",
					gap: 12,
					alignItems: "center",
					flexWrap: "wrap",
				}}
			>
				<Button onClick={() => setShowRetro((s) => !s)}>
					{showRetro ? "Hide teaching overlay" : "Show teaching overlay"}
				</Button>
				<label style={{ display: "flex", alignItems: "center", gap: 6 }}>
					<span>Minimum points:</span>
					<input
						type="number"
						min={6}
						max={20}
						step={1}
						value={minimumPoints}
						onChange={(e) =>
							setMinimumPoints(parseInt(e.currentTarget.value || "12", 10))
						}
						style={{ width: 72 }}
					/>
				</label>
				<label style={{ display: "flex", alignItems: "center", gap: 6 }}>
					<span>Direction:</span>
					<select
						value={direction}
						onChange={(e) => {
							const v = e.target.value as unknown as ImprovementDirection;
							const next =
								v === (ImprovementDirection.Up as unknown as string)
									? ImprovementDirection.Up
									: v === (ImprovementDirection.Down as unknown as string)
										? ImprovementDirection.Down
										: ImprovementDirection.Neither;
							setDirection(next);
						}}
					>
						<option value={ImprovementDirection.Up}>Up (high is good)</option>
						<option value={ImprovementDirection.Down}>
							Down (low is good)
						</option>
						<option value={ImprovementDirection.Neither}>Neither</option>
					</select>
				</label>
			</div>

			{showRetro ? (
				<div style={{ fontSize: 12, color: "#333" }}>
					Teaching overlay ON: pre-eligibility points on the same side as a
					later confirmed shift are annotated in the table below (indices:{" "}
					{overlayIdx.join(", ") || "none"}). The chart remains engine-true.
				</div>
			) : (
				<div style={{ fontSize: 12, color: "#555" }}>
					Teaching overlay OFF: chart and table reflect engine outputs only.
				</div>
			)}

			<div>
				<SPCChart
					input={{ data: series }}
					engine={{
						chartType: V1ChartType.XmR,
						metricImprovement: toV1Dir(direction),
						settings: { minimumPoints } as any,
					}}
					ui={{
						axes: { alwaysShowZeroY: false },
						visuals: {
							showPoints: true,
							gradientSequences: true,
							rules: { enableRules: true },
						},
					}}
					container={{ height: 240 }}
					a11y={{ label: "Retro overlay teaching demo chart" }}
				/>
			</div>

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
					overlay: showRetro && overlay[i] != null ? String(overlay[i]) : "",
				}))}
			/>
		</div>
	);
};

export default SPCRetroOverlayToggleDemo;
