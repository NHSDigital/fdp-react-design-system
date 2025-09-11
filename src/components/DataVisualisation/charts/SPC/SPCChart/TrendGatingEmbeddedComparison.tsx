import React, { useState } from 'react';
import { SPCChart, ImprovementDirection, TrendVisualMode } from './SPCChart';
import { metricLookup } from './test-data/parsedDataset';
import { ChartContainer } from '../../ChartContainer';
import { Radios } from '../../../../index';

/**
 * Renders side-by-side ungated vs gated visuals sharing a single direction control (Up/Down/Neither).
 * Used by Trend Gating Rationale MDX so both charts stay in sync.
 */
export const TrendGatingEmbeddedComparison: React.FC = () => {
  const metricKey = 'Special cause - High is good';
  const data = (metricLookup as any)[metricKey] || [];
  const [dir, setDir] = useState<ImprovementDirection>(ImprovementDirection.Up);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    switch (val) {
      case 'up':
        setDir(ImprovementDirection.Up);
        break;
      case 'down':
        setDir(ImprovementDirection.Down);
        break;
      default:
        setDir(ImprovementDirection.Neither);
        break;
    }
  };
  const radioValue =
    dir === ImprovementDirection.Up
      ? 'up'
      : dir === ImprovementDirection.Down
      ? 'down'
      : 'neither';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ margin: '0 0 12px', display: 'flex', justifyContent: 'center' }}>
        <Radios
          name="trend-gating-comparison-direction"
          value={radioValue}
          onChange={handleChange}
          inline
          options={[
            { value: 'up', text: 'High is good' },
            { value: 'down', text: 'Low is good' },
            { value: 'neither', text: 'Neither' },
          ]}
        />
      </div>
      <div aria-live="polite" style={{ textAlign: 'center', marginTop: -8, color: '#666', fontSize: 12 }}>
        Direction: {radioValue === 'up' ? 'High is good' : radioValue === 'down' ? 'Low is good' : 'Neither'}
      </div>

      <div style={{ width: '100%' }}>
        <h4>Ungated visuals (default)</h4>
        <ChartContainer title={undefined as any} source="CSV dummy dataset">
          <SPCChart
            data={data}
            metricImprovement={dir}
            enableRules
            showPoints
            trendVisualMode={TrendVisualMode.Ungated}
            narrationContext={{ measureName: metricKey }}
            gradientSequences
          />
        </ChartContainer>
      </div>

      <div style={{ width: '100%' }}>
        <h4>Gated visuals</h4>
        <ChartContainer title={undefined as any} source="CSV dummy dataset">
          <SPCChart
            data={data}
            metricImprovement={dir}
            enableRules
            showPoints
            trendVisualMode={TrendVisualMode.Gated}
            narrationContext={{ measureName: metricKey }}
            gradientSequences
          />
        </ChartContainer>
      </div>
    </div>
  );
};

export default TrendGatingEmbeddedComparison;
