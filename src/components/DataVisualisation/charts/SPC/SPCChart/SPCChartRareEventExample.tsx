import { SPCChart } from "./SPCChart";
import { ChartType, ImprovementDirection } from "./logic/spcConstants";

/**
 * Live implementation of the "Rare event (T chart)" usage example.
 * Data represent days between rare events (higher is better in this scenario).
 */
export const SPCChartRareEventExample = () => {
	// Synthetic gaps (days between events) with some variability
	const daysBetweenEvents = [
		12, 9, 15, 8, 11, 14, 10, 16, 9, 13, 15, 11, 17, 12, 14,
	].map((y, i) => ({ x: new Date(2025, 0, i + 1), y }));

	return (
		<SPCChart
			data={daysBetweenEvents}
			chartType={ChartType.T}
			metricImprovement={ImprovementDirection.Up}
			enableRules
			ariaLabel="Rare event T chart example"
			gradientSequences
		/>
	);
};

export default SPCChartRareEventExample;
