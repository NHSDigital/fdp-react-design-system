import * as React from 'react';
import { SPCChart } from '../../SPCChart';
import { ImprovementDirection, ChartType } from '../../types';

/**
 * v2-backed example: early run-chart phase transitioning into SPC as points accumulate.
 * Uses v2 visuals under the hood (SPCChart default) – no story-level overrides.
 */
export const RunVsSPCTransitionExample: React.FC = () => {
  // 10 early points (run phase), then extend to 24 (maturing SPC)
  const early = [36, 32, 28, 30, 27, 25, 29, 31, 26, 28];
  const later = [30, 33, 35, 32, 31, 34, 33, 35, 36, 34, 33, 35, 34, 32];
  const series = [...early, ...later].map((y, i) => ({ x: new Date(2025, 0, i + 1), y }));

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section>
        <h4 style={{ margin: '0 0 8px' }}>Early phase (run-chart only)</h4>
        <SPCChart
          data={early.map((y, i) => ({ x: new Date(2025, 0, i + 1), y }))}
          metricImprovement={ImprovementDirection.Down}
          chartType={ChartType.XmR}
          enableRules
          showIcons={false}
          ariaLabel="Early phase run-chart"
        />
      </section>

      <section>
        <h4 style={{ margin: '0 0 8px' }}>Maturing SPC (limits establish as data grows)</h4>
        <SPCChart
          data={series}
          metricImprovement={ImprovementDirection.Down}
          chartType={ChartType.XmR}
          enableRules
          showIcons={false}
          ariaLabel="Maturing SPC chart"
        />
      </section>
    </div>
  );
};

export default RunVsSPCTransitionExample;
