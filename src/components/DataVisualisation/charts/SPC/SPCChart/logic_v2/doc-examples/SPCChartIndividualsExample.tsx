import * as React from 'react';
import { SPCChart } from '../../SPCChart';
import { ImprovementDirection, ChartType } from '../../types';

/**
 * v2-backed Individuals (XmR) example with rule detection.
 */
export const SPCChartIndividualsExample: React.FC = () => {
  const weeklyValues = [
    18, 22, 21, 19, 23, 24, 20, 22, 21, 25,
    23, 22, 24, 21, 20, 19, 22, 23, 21, 22,
  ].map((y, i) => ({ x: new Date(2025, 0, i + 1), y }));

  return (
    <SPCChart
      data={weeklyValues}
      chartType={ChartType.XmR}
      metricImprovement={ImprovementDirection.Down}
      enableRules
      showIcons={false}
      ariaLabel="Individuals chart with rules"
    />
  );
};

export default SPCChartIndividualsExample;
