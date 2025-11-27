import * as React from "react";
import { SPCChart } from "../../SPCChart";
import { ImprovementDirection, ChartType } from "../../types";

/**
 * Basic auto-recalc example (XmR, higher is better). Series contains a clear upward shift.
 */
export const SPCChartAutoRecalcBasicExample: React.FC = () => {
	const base = [20, 21, 19, 20, 20, 21, 19, 20, 20, 21, 19, 20];
	const shifted = [25, 26, 26, 25, 27, 26, 25, 26];
	const series = [...base, ...shifted].map((y, i) => ({
		x: new Date(2025, 0, i + 1),
		y,
	}));

	return (
		<SPCChart
			input={{ data: series }}
			engine={{
				chartType: ChartType.XmR,
				metricImprovement: ImprovementDirection.Up,
				autoRecalc: { enabled: true },
			}}
				ui={{ overlays: { partitionMarkers: true } }}
			enableRules
			a11y={{ label: "Auto-recalc basic example" }}
		/>
	);
};

export default SPCChartAutoRecalcBasicExample;
