import * as React from "react";
import { SPCChart } from "../../SPCChart";
import { ImprovementDirection, ChartType } from "../../types";

/**
 * Auto-recalc with minGap enforcement (XmR, higher is better). Multiple shifts; minGap avoids rapid re-partitioning.
 */
export const SPCChartAutoRecalcMinGapExample: React.FC = () => {
	const part1 = [15, 16, 15, 16, 15, 16];
	const part2 = [20, 21, 20, 21, 20, 21];
	const part3 = [24, 25, 24, 25, 24, 25];
	const series = [...part1, ...part2, ...part3].map((y, i) => ({
		x: new Date(2025, 2, i + 1),
		y,
	}));

	return (
		<SPCChart
			input={{ data: series }}
			engine={{
				chartType: ChartType.XmR,
				metricImprovement: ImprovementDirection.Up,
				autoRecalc: { enabled: true, minGap: 10 },
			}}
				ui={{ overlays: { partitionMarkers: true } }}
			enableRules
			a11y={{ label: "Auto-recalc minGap example" }}
		/>
	);
};

export default SPCChartAutoRecalcMinGapExample;
