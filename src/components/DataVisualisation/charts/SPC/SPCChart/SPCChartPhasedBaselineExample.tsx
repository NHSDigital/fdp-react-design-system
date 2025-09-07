import { SPCChart } from "./SPCChart";
import { ImprovementDirection } from "./logic/spc";

/**
 * Live implementation of the "Phased baseline" usage example.
 * Demonstrates a shift after month 12 with a second baseline flag.
 */
export const SPCChartPhasedBaselineExample = () => {
	// 24 monthly values with a clear improvement (lower is better) after month 12.
	// Phase 1 (indices 0–11): mean ~46–47. Phase 2 (indices 12–23): mean ~35–36.
	const monthlyValues = [
		// Baseline phase (~46–47)
		47, 46, 48, 45, 47, 46, 45, 48, 47, 46, 45, 47,
		// Improved phase (~35–36)
		38, 37, 36, 35, 37, 36, 34, 35, 36, 34, 35, 34,
	].map((y, i) => ({ x: new Date(2023, i, 1), y }));

	// Baseline flags: true at index 0 and index 12 to start new partitions (boolean[])
	const baselines = monthlyValues.map((_, i) => (i === 0 || i === 12) ? true : undefined);

	// Constant target (40). Phase 1 mostly above (not capable), Phase 2 comfortably below (improved capability)
	const targets = new Array(monthlyValues.length).fill(40);

	return (
		<SPCChart
			data={monthlyValues}
			baselines={baselines}
			targets={targets}
			metricImprovement={ImprovementDirection.Down}
			enableRules
			ariaLabel="Phased baseline SPC example"
			gradientSequences
		/>
	);
};

export default SPCChartPhasedBaselineExample;
