import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FilterableLineChart, ChartContainer, type LineSeries } from '../../index';

const meta: Meta = { title: 'Data Visualisation/LineChart/Filterable', component: FilterableLineChart };
export default meta;

type Story = StoryObj<typeof FilterableLineChart>;

const makeSeries = (n: number): LineSeries[] => Array.from({ length: n }).map((_, i) => ({
  id: `series-${i+1}`,
  label: `Series ${i+1}`,
  data: Array.from({ length: 14 }).map((__, j) => ({ x: new Date(Date.now() - (13-j)*86400000), y: Math.round(20 + Math.random()*60) }))
}));

export const Basic: Story = {
  render: () => (
    <ChartContainer title="Filterable Line Chart" description="Built-in legend-driven filtering" source="Synthetic data">
      <FilterableLineChart series={makeSeries(6)} yLabel="Value" />
    </ChartContainer>
  )
};

export const RegionPalette: Story = {
  render: () => {
    const regions: LineSeries[] = [
      'North East','North West','East of England','Midlands','London','South West','South East'
    ].map(label => ({
      id: label.toLowerCase().replace(/[^a-z0-9]+/g,'-'),
      label,
      data: Array.from({ length: 10 }).map((_, j) => ({ x: new Date(Date.now() - (9-j)*86400000), y: Math.round(10 + Math.random()*50) }))
    }));
    return (
      <ChartContainer title="Filterable (Region palette)" description="Region token colours with filtering" source="Synthetic data">
        <FilterableLineChart series={regions} palette="region" yLabel="Value" />
      </ChartContainer>
    );
  }
};

export const Controlled: Story = {
  render: () => {
    const s = makeSeries(4);
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
