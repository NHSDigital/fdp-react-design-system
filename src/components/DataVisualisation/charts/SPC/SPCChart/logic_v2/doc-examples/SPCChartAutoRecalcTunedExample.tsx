import * as React from "react";
import { SPCChart } from "../../SPCChart";
import { ImprovementDirection, ChartType } from "../../types";

/**
 * Tuned auto-recalc example (XmR, lower is better). Uses longer run and larger deltaSigma.
 */
export const SPCChartAutoRecalcTunedExample: React.FC = () => {
	const base = [30, 29, 31, 30, 29, 30, 31];
	const shifted = [26, 25, 25, 24, 25, 24, 24, 23];
	const series = [...base, ...shifted].map((y, i) => ({
		x: new Date(2025, 1, i + 1),
		y,
	}));

	return (
		<SPCChart
			input={{ data: series }}
			engine={{
				chartType: ChartType.XmR,
				metricImprovement: ImprovementDirection.Down,
				autoRecalc: { enabled: true, shiftLength: 7, deltaSigma: 0.75 },
			}}
				ui={{ overlays: { partitionMarkers: true } }}
			enableRules
			a11y={{ label: "Auto-recalc tuned example" }}
		/>
	);
};

export default SPCChartAutoRecalcTunedExample;
