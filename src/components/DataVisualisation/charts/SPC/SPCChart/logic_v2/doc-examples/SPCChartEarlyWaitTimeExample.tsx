import * as React from 'react';
import { SPCChart } from '../../SPCChart';
import { ImprovementDirection, ChartType } from '../../types';

/**
 * v2-backed early phase example (too few points for SPC limits).
 */
export const SPCChartEarlyWaitTimeExample: React.FC = () => {
  const earlyWaitTimes = [36, 32, 28, 30, 27, 25, 29, 31, 26].map((y, i) => ({ x: new Date(2025, 0, i + 1), y }));
  return (
    <SPCChart
      data={earlyWaitTimes}
      metricImprovement={ImprovementDirection.Down}
      chartType={ChartType.XmR}
      enableRules
      ariaLabel="Early run-chart example"
    />
  );
};

export default SPCChartEarlyWaitTimeExample;
