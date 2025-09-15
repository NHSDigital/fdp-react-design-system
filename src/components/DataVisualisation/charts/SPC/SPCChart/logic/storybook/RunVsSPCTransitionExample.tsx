import * as React from "react";
import RunChart, { type RunSeries, RunChartColor } from "../../../../RunChart/RunChart";
import SPCChart from "../../SPCChart";
import { ImprovementDirection } from "../spcConstants";

const makeSeries = () => {
	const base = 35;
	// Synthetic weekly wait times with mild natural variation and a small late shift
	const full = Array.from({ length: 24 }).map((_, i) => {
		const wobble = ((i * 7) % 11) - 5; // deterministic-ish small swings
		const drift = i > 15 ? 3 : 0; // slight upward shift after point 15
		return { x: new Date(2025, 0, i + 1), y: base + wobble + drift };
	});
	const early = full.slice(0, 9);
	const runSeries: RunSeries[] = [{ id: "wait", data: early }];
	return { runSeries, spcData: full };
};

export default function RunVsSPCTransitionExample() {
	const { runSeries, spcData } = React.useMemo(makeSeries, []);
	return (
		<div
			style={{
				display: "grid",
				gap: 16,
				gridTemplateColumns: "1fr",
				maxWidth: 900,
			}}
		>
			<section>
				<h4 style={{ margin: "0 0 8px" }}>Run chart (early phase: 9 points)</h4>
				<RunChart
					series={runSeries}
					yLabel="Minutes"
					showMedian
					ariaLabel="Wait time run chart (early)"
					strokeWidth={2}
					smooth={false}
							lineColor={RunChartColor.NHSBlue}
				/>
				<p style={{ marginTop: 8 }}>
					Median baseline only; treat patterns as provisional until more points
					accumulate.
				</p>
			</section>
			<section>
				<h4 style={{ margin: "12px 0 8px" }}>SPC (establishing limits)</h4>
				<SPCChart
					data={spcData}
					metricImprovement={ImprovementDirection.Down}
					showZones
					enableRules
					showIcons
					ariaLabel="Wait time SPC chart (establishing)"
				/>
				<p style={{ marginTop: 8 }}>
					Same metric with more observations. Control limits and rule
					classification are now meaningful.
				</p>
			</section>
		</div>
	);
}
