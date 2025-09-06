import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FilterableLineChart, ChartContainer, type LineSeries } from '../../index';
import { day, linearSeries } from '../../stories/utils/deterministic';

const meta: Meta = { title: 'Data Visualisation/LineChart/Filterable', component: FilterableLineChart };
export default meta;

type Story = StoryObj<typeof FilterableLineChart>;

// ---------------------------------------------------------------------------
// Deterministic helpers (mirrors pattern used in main LineChart stories)
// ---------------------------------------------------------------------------
// (helpers now imported from shared deterministic util)

// Primary deterministic dataset generator (replaces random makeSeries)
const makeSeries = (n: number): LineSeries[] => Array.from({ length: n }).map((_, i) => {
  const wobble = [0, 4, -2, 5, -1];
  const values = linearSeries(14, 18 + i * 3, 2 + (i % 3), wobble);
  return {
    id: `series-${i + 1}`,
    label: `Series ${i + 1}`,
    data: values.map((y, j) => ({ x: day(j), y }))
  };
});

export const Basic: Story = {
  render: () => (
    <ChartContainer title="Filterable Line Chart" description="Built-in legend-driven filtering" source="Synthetic data">
      <FilterableLineChart series={makeSeries(6)} yLabel="Value" />
    </ChartContainer>
  )
};

export const RegionPalette: Story = {
  render: () => {
    const regionNames = ['North East','North West','East of England','Midlands','London','South West','South East'];
    const wobble = [0, 5, -3, 4, -2];
    const regions: LineSeries[] = regionNames.map((label, idx) => {
      const base = 22 + idx * 4; // staggered start
      const values = linearSeries(10, base, 1 + (idx % 2), wobble);
      return {
        id: label.toLowerCase().replace(/[^a-z0-9]+/g,'-'),
        label,
        data: values.map((y, j) => ({ x: day(j), y }))
      };
    });
    return (
      <ChartContainer title="Filterable (Region palette)" description="Region token colours with filtering" source="Synthetic data">
        <FilterableLineChart series={regions} palette="region" yLabel="Value" />
      </ChartContainer>
    );
  }
};

export const Controlled: Story = {
  render: () => {
  const s = makeSeries(4); // already deterministic
    const [hidden, setHidden] = React.useState<string[]>([s[2].id]);
    return (
      <ChartContainer title="Controlled hidden state" description="External control of hidden series" source="Synthetic data">
        <>
          <button onClick={() => setHidden(h => h.length ? [] : [s[1].id, s[3].id])} style={{ marginBottom: 8 }}>
            Toggle externally hidden
          </button>
          <FilterableLineChart
            series={s}
            hiddenIds={hidden}
            onHiddenChange={(hid) => setHidden(hid)}
            yLabel="Value"
          />
        </>
      </ChartContainer>
    );
  }
};
