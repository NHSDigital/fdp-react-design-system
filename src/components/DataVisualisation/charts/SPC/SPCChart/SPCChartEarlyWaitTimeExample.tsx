import { SPCChart } from './SPCChart';
import { ImprovementDirection } from './logic/spc';

/**
 * Live rendering of the early (run-chart only) wait time example.
 * Demonstrates behaviour with too few points for stable SPC limits.
 */
export const SPCChartEarlyWaitTimeExample = () => {
  const earlyWaitTimes = [36, 32, 28, 30, 27, 25, 29, 31, 26].map((y, i) => ({
    x: new Date(2025, 0, i + 1),
    y,
  }));

  return (
    <SPCChart
      data={earlyWaitTimes}
      metricImprovement={ImprovementDirection.Down}
      // Constant target (numeric array aligns with current targets prop typing)
      targets={new Array(earlyWaitTimes.length).fill(20)}
      enableRules
      ariaLabel="Clinic wait time run chart (early phase example)"
    />
  );
};

export default SPCChartEarlyWaitTimeExample;