import * as React from 'react';
import { SPCChart } from '../../SPCChart';
import { ImprovementDirection, ChartType } from '../../types';

/**
 * v2-backed rare event examples for T and G charts.
 */
export const SPCChartRareEventExample: React.FC = () => {
  const daysBetween = [12, 8, 5, 16, 20, 11, 7, 22, 14, 9, 18, 25, 10, 6].map((y, i) => ({ x: i, y }));
  const unitsBetween = [4, 3, 7, 2, 6, 8, 5, 9, 3, 10, 7, 11].map((y, i) => ({ x: i, y }));

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section>
        <h4 style={{ margin: '0 0 8px' }}>T chart (time between events)</h4>
        <SPCChart
          data={daysBetween}
          chartType={ChartType.T}
          metricImprovement={ImprovementDirection.Up}
          enableRules
          ariaLabel="Time between events (T chart)"
        />
      </section>

      <section>
        <h4 style={{ margin: '0 0 8px' }}>G chart (count between events)</h4>
        <SPCChart
          data={unitsBetween}
          chartType={ChartType.G}
          metricImprovement={ImprovementDirection.Up}
          enableRules
          ariaLabel="Count between events (G chart)"
        />
      </section>
    </div>
  );
};

export default SPCChartRareEventExample;
