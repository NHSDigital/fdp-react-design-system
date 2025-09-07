import { SPCChart } from './SPCChart';
import { ImprovementDirection } from './logic/spc';

/**
 * Live rendering of the stable wait time SPC example shown in the documentation code block.
 * Mirrors the snippet so readers can see a working chart directly below the example code.
 */
export const SPCChartStableWaitTimeExample = () => {
  // Synthetic weekly wait time series (~35 mean, natural variation)
  const waitTimes = [
    36, 37, 34, 35, 33, 39, 31, 34, 38, 35,
    32, 36, 37, 33, 34, 35, 36, 31, 37, 34,
    33, 35, 36, 34, 32, 38, 37, 33, 34, 35,
  ].map((y, i) => ({ x: new Date(2025, 0, i + 1), y }));

  return (
    <SPCChart
      data={waitTimes}
      metricImprovement={ImprovementDirection.Down} // lower wait time is better
  // Targets prop currently typed as number[]; using constant target value 20 matching docs narrative
  targets={new Array(waitTimes.length).fill(20)}
      showZones
      enableRules
      showIcons
      processLineWidth={2}
      ariaLabel="Clinic wait time SPC chart (stable example)"
    />
  );
};

export default SPCChartStableWaitTimeExample;