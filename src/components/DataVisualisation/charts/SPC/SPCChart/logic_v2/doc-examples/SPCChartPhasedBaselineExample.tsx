import * as React from 'react';
import { SPCChart } from '../../SPCChart';
import { ChartType, ImprovementDirection } from '../../types';

/**
 * v2-backed phased baseline example with manual baselines.
 */
export const SPCChartPhasedBaselineExample: React.FC = () => {
  const monthly = [
    42, 39, 41, 40, 38, 43, 37, 39, 40, 41, 38, 40, // baseline 1
    35, 34, 33, 36, 35, 34, 33, 32, 34, 33, 35, 34, // phase 2
  ].map((y, i) => ({ x: new Date(2025, i, 1), y }));

  const baselines = monthly.map((_, i) => (i === 12 ? true : undefined));

  return (
    <SPCChart
      data={monthly}
      chartType={ChartType.XmR}
      metricImprovement={ImprovementDirection.Down}
      baselines={baselines}
      enableRules
      ariaLabel="Phased baseline SPC chart"
    />
  );
};

export default SPCChartPhasedBaselineExample;
