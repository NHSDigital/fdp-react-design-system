import React from 'react';
import { SPCChart } from '../../SPCChart';
import { SpcWarningSeverity } from '../spc';
import { ImprovementDirection } from '../spcConstants';

/**
 * Demonstrates the warnings diagnostics panel with intentionally insufficient
 * points and undersized partitions to surface Warning‑level messages.
 */
const SPCChartWarningsPanelExample: React.FC = () => {
  // Only 8 points (< default minimumPoints 13) to trigger global insufficient points warning (when enabled)
  const raw = [36, 34, 35, 33, 37, 38, 32, 34];
  const data = raw.map((y, i) => ({ x: new Date(2025, 0, i + 1), y }));

  // Two very small partitions: indices 0‑4 and 5‑7 (both below minimumPointsPartition 8)
  // Represented as boolean flags (true = new baseline starts here)
  const baselines = data.map((_, i) => i === 0 || i === 5);

  return (
    <div style={{ maxWidth: 760 }}>
      <SPCChart
        data={data}
        baselines={baselines}
        metricImprovement={ImprovementDirection.Down}
        showWarningsPanel
        warningsFilter={{ severities: [SpcWarningSeverity.Warning, SpcWarningSeverity.Error] }}
        settings={{
          minimumPoints: 13, // keep default explicit for clarity
          minimumPointsWarning: true, // emit global insufficient points warning
          partitionSizeWarnings: true, // emit per-partition size warnings
          minimumPointsPartition: 8,
        }}
        enableRules
        ariaLabel="SPC warnings demonstration chart"
      />
    </div>
  );
};

export default SPCChartWarningsPanelExample;
