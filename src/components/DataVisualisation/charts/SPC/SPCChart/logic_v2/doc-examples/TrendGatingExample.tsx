import * as React from 'react';
import { SPCChart } from '../../SPCChart';
import { ImprovementDirection, ChartType } from '../../types';
import { TrendVisualMode } from '../../SPCChart';

/**
 * Visual-only trend side-gating example: Ungated vs Gated colours.
 * Classification is always side-gated; this only affects rendering.
 */
export const TrendGatingExample: React.FC = () => {
  // Construct a series that starts below its overall mean and increases monotonically
  // for a while before crossing the mean. With metricImprovement.Up (higher is better),
  // the early rising points are not yet on the favourable side.
  const series = [
    6, 7, 8, 9, 10, 11, // early monotonic rise; first points below mean
    12, 13, 12, 11, 12, 13,
  ].map((y, i) => ({ x: i, y }));

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section>
        <h4 style={{ margin: '0 0 8px' }}>Ungated (default): early monotonic coloured by direction</h4>
        <SPCChart
          data={series}
          chartType={ChartType.XmR}
          metricImprovement={ImprovementDirection.Up}
          gradientSequences
          // Lower minimumPoints so visuals chart-level eligibility is more likely across the example
          settings={{ minimumPoints: 6 }}
          trendVisualMode={TrendVisualMode.Ungated}
          enableRules
          ariaLabel="Trend colours ungated"
        />
      </section>
      <section>
        <h4 style={{ margin: '0 0 8px' }}>Gated: early monotonic remains neutral until favourable side</h4>
        <SPCChart
          data={series}
          chartType={ChartType.XmR}
          metricImprovement={ImprovementDirection.Up}
          gradientSequences
          settings={{ minimumPoints: 6 }}
          trendVisualMode={TrendVisualMode.Gated}
          enableRules
          ariaLabel="Trend colours gated"
        />
      </section>
    </div>
  );
};

export default TrendGatingExample;
