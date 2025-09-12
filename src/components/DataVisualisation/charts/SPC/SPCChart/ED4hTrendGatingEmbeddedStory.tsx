import React from "react";
import { SPCChart, ImprovementDirection, TrendVisualMode } from "./SPCChart";
import { ChartContainer } from "../../ChartContainer";

// Simple embedded chart using the ED 4h compliance dataset used in tests
// Side-gating enabled (default): early trend points on the adverse side render neutral (purple)
export const ED4hTrendGatingEmbedded: React.FC = () => {
	const start = new Date("2023-01-01T00:00:00Z");
	const values = [
		69, 70, 68, 71, 70, 69, 70, 69, 71, 70, 68, 69, 78, 79, 80, 81, 79, 78, 82,
		81, 80, 79, 81, 80,
	];
	const data = values.map((v, i) => ({
		x: new Date(start.getFullYear(), start.getMonth() + i, 1),
		y: v,
	}));
	const titleUngated = "ED 4h compliance (base)";
	const titleGated = "ED 4h compliance (sql)";

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
			<ChartContainer
				title={titleUngated}
				source="Synthetic monthly series (for docs)"
			>
				<SPCChart
					data={data}
					metricImprovement={ImprovementDirection.Up}
					enableRules
					showPoints
					trendVisualMode={TrendVisualMode.Ungated}
					useSqlCompatEngine={false}
					narrationContext={{ measureName: titleUngated, measureUnit: "%" }}
					gradientSequences
				/>
			</ChartContainer>

			<ChartContainer
				title={titleGated}
				source="Synthetic monthly series (for docs)"
			>
				<SPCChart
					data={data}
					metricImprovement={ImprovementDirection.Up}
					enableRules
					showPoints
					trendVisualMode={TrendVisualMode.Gated}
					useSqlCompatEngine={true}
					narrationContext={{ measureName: titleGated, measureUnit: "%" }}
					gradientSequences
				/>
			</ChartContainer>
		</div>
	);
};

export default ED4hTrendGatingEmbedded;
