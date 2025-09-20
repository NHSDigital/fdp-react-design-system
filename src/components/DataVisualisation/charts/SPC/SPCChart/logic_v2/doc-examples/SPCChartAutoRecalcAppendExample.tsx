import * as React from "react";
import { SPCChart } from "../../SPCChart";
import { ImprovementDirection, ChartType } from "../../types";
import { Button } from "../../../../../../Button";
import { Select } from "../../../../../../Select/Select";
import { Grid, Row, Column, GridWidth } from "../../../../../../Grid";
import { Label } from "../../../../../../Label";

// Deterministic small noise by index for visual variety without randomness flakiness
function noiseAt(i: number): number {
	const pattern = [0, 0.3, -0.2, 0.15, -0.1, 0.25];
	return pattern[i % pattern.length];
}

function buildInitialSeries(): { x: Date; y: number }[] {
	const n = 10; // short baseline to start
	const start = new Date(2025, 0, 1);
	const out: { x: Date; y: number }[] = [];
	for (let i = 0; i < n; i++) {
		const d = new Date(start);
		d.setDate(d.getDate() + i);
		out.push({ x: d, y: 20 + noiseAt(i) });
	}
	return out;
}

export const SPCChartAutoRecalcAppendExample: React.FC = () => {
	const [series, setSeries] = React.useState(() => buildInitialSeries());
	const [direction, setDirection] = React.useState<ImprovementDirection>(
		ImprovementDirection.Up
	);

	const appendBaselineLike = React.useCallback(() => {
		setSeries((prev) => {
			const i = prev.length;
			const lastDate = prev[prev.length - 1]?.x as Date;
			const nextDate = new Date(lastDate);
			nextDate.setDate(nextDate.getDate() + 1);
			return [...prev, { x: nextDate, y: 20 + noiseAt(i) }];
		});
	}, []);

	const appendShiftedLike = React.useCallback(() => {
		setSeries((prev) => {
			const i = prev.length;
			const lastDate = prev[prev.length - 1]?.x as Date;
			const nextDate = new Date(lastDate);
			nextDate.setDate(nextDate.getDate() + 1);
			return [...prev, { x: nextDate, y: 27 + noiseAt(i) }];
		});
	}, []);

	const reset = React.useCallback(() => setSeries(buildInitialSeries()), []);

	return (
		<Grid>
			<Row style={{ marginBottom: 32 }}>
				<Column width={GridWidth.OneThird}>
					<Label htmlFor="spc-auto-recalc-direction" size="s">Good is:</Label>
					<Select
						id="spc-auto-recalc-direction"
						name="spc-auto-recalc-direction"
						ariaLabel="Improvement direction"
						value={direction}
						onChange={(e) => setDirection(e.target.value as ImprovementDirection)}
						options={[
							{ value: ImprovementDirection.Up, text: "Up" },
							{ value: ImprovementDirection.Down, text: "Down" },
							{ value: ImprovementDirection.Neither, text: "Neither" },
						]}
					/>
				</Column>
				<Column width={GridWidth.TwoThirds} style={{ textAlign: "right" }}>
					<Button variant="secondary" onClick={appendBaselineLike} style={{ marginRight: 8 }}>
						Append baseline-like
					</Button>
					<Button variant="secondary" onClick={appendShiftedLike} style={{ marginRight: 8 }}>
						Append shifted-like
					</Button>
					<Button variant="primary" onClick={reset}>
						Reset
					</Button>
				</Column>
			</Row>
			<Row>
				<Column>
					<SPCChart
						input={{ data: series }}
						engine={{
							chartType: ChartType.XmR,
							metricImprovement: direction,
							autoRecalc: { enabled: true, shiftLength: 6, deltaSigma: 0.5 },
						}}
						ui={{
							overlays: { partitionMarkers: true },
							visuals: { showZones: true, showPoints: true },
							warnings: { show: true },
							axes: { alwaysShowZeroY: false },
							
						}}
						enableRules
						a11y={{ label: "Auto-recalc interactive append example" }}
					/>
				</Column>
			</Row>
			<Row>
				<Column>
					<p style={{ marginTop: 16, opacity: 0.85 }}>
						Tip: Append several shifted-like points to form a sustained favourable
						run; when evidence crosses the configured thresholds, a baseline will be
						inserted (see partition markers).
					</p>
				</Column>
			</Row>
		</Grid>
	);
};

export default SPCChartAutoRecalcAppendExample;
