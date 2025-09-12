import type { Meta, StoryObj } from '@storybook/react';
import { SPCChart } from './SPCChart';
import { ChartType, ImprovementDirection } from './logic/spcConstants';
import { SpcWarningSeverity } from './logic/spc';

const meta: Meta = {
  title: 'Data Visualisation/SPC/Diagnostics',
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates the diagnostics (warnings) panel with full and filtered output.'
      }
    }
  }
};
export default meta;

type Story = StoryObj;

// Create small datasets / settings that intentionally trigger multiple warnings
function makeData(points: number, base = 50) {
  return Array.from({ length: points }, (_, i) => ({ x: i + 1, y: base + (Math.sin(i/2)*0.5) }));
}

export const AllWarnings: Story = {
  name: 'All warnings',
  render: () => {
    const data = makeData(8); // below default minimum (13) for stability
    // Add a baseline very early that may coincide with special cause once rules fire later in larger datasets
    return (
      <div style={{ maxWidth: 760 }}>
        <SPCChart
          data={data}
          chartType={ChartType.XmR}
          metricImprovement={ImprovementDirection.Up}
          enableRules
          showIcons
          showWarningsPanel
          settings={{
            minimumPointsWarning: true,
            partitionSizeWarnings: true,
            nullValueWarning: true,
            maximumPointsWarnings: true,
          }}
        />
      </div>
    );
  }
};

export const FilteredWarnings: Story = {
  name: 'Filtered (Warnings & Errors only)',
  render: () => {
    const data = makeData(8);
    return (
      <div style={{ maxWidth: 760 }}>
        <SPCChart
          data={data}
            chartType={ChartType.XmR}
            metricImprovement={ImprovementDirection.Up}
            enableRules
            showWarningsPanel
            warningsFilter={{ severities: [SpcWarningSeverity.Warning] }}
            settings={{
              minimumPointsWarning: true,
              partitionSizeWarnings: true,
              nullValueWarning: true,
            }}
        />
      </div>
    );
  }
};
