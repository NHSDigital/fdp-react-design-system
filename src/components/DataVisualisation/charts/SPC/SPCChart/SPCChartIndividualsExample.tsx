import { SPCChart } from './SPCChart';
import { ChartType, ImprovementDirection } from './logic/spcConstants';

/**
 * Live implementation of the "Individuals chart with rule detection" usage example.
 */
export const SPCChartIndividualsExample = () => {
  // Synthetic weekly values (mild natural variation, mean ~50)
  const weeklyValues = Array.from({ length: 30 }, (_, i) => 48 + Math.round(Math.sin(i / 2) * 4) + (i % 5 === 0 ? 2 : 0))
    .map((y, i) => ({ x: new Date(2025, 0, i + 1), y }));

  // Constant target of 20 (typed as number[] per SPCChart targets prop)
  const targets = new Array(weeklyValues.length).fill(20);

  return (
    <SPCChart
      data={weeklyValues}
      chartType={ChartType.XmR}
      metricImprovement={ImprovementDirection.Down}
      enableRules
      gradientSequences
      targets={targets}
      ariaLabel="Individuals SPC example"
    />
  );
};

export default SPCChartIndividualsExample;