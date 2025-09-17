import * as React from 'react';
import { SPCChart } from '../../SPCChart';
import { ImprovementDirection, ChartType } from '../../types';

/**
 * v2-backed stable process example (target outside capability band).
 */
export const SPCChartStableWaitTimeExample: React.FC = () => {
  const waitTimes = [
    36, 37, 34, 35, 33, 39, 31, 34, 38, 35,
    32, 36, 37, 33, 34, 35, 36, 31, 37, 34,
    33, 35, 36, 34, 32, 38, 37, 33, 34, 35,
  ].map((y, i) => ({ x: new Date(2025, 0, i + 1), y }));

  return (
    <SPCChart
      data={waitTimes}
      metricImprovement={ImprovementDirection.Down}
      chartType={ChartType.XmR}
      targets={Array.from({ length: waitTimes.length }, () => 20)}
      showZones
      enableRules
      showIcons={false}
      processLineWidth={2}
      ariaLabel="Clinic wait time SPC chart"
    />
  );
};

export default SPCChartStableWaitTimeExample;
