import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LineChart, ChartContainer, type LineSeries } from './index';
import { Legend } from './primitives/Legend';
import { assignSeriesColors } from './utils/colors';

const meta: Meta = { title: 'Data Visualisation/Utilities/Legend', component: Legend };
export default meta;

type Story = StoryObj<typeof Legend>;

const series: LineSeries[] = Array.from({ length: 5 }).map((_, i) => ({
  id: `series-${i+1}`,
  label: `Series ${i+1}`,
  data: Array.from({ length: 10 }).map((__, j) => ({ x: new Date(Date.now() - (9-j)*86400000), y: Math.round(40 + Math.random()*30) }))
}));

export const Categorical: Story = {
  render: () => (
    <div>
      <ChartContainer title="Example with legend" description="Demonstrates legend swatches" source="Synthetic data">
        <>
          <Legend items={series.map(s => ({ id: s.id, label: s.label || s.id }))} />
          <LineChart series={series} yLabel="Value" />
        </>
      </ChartContainer>
    </div>
  )
};

// Explicit region ids (must stay kebab-case to resolve region token colours) with human-readable labels
const regionMeta: Array<{ id: string; label: string }> = [
  { id: 'north-east', label: 'North East' },
  { id: 'north-west', label: 'North West' },
  { id: 'east-of-england', label: 'East of England' },
  { id: 'midlands', label: 'Midlands' },
  { id: 'london', label: 'London' },
  { id: 'south-west', label: 'South West' },
  { id: 'south-east', label: 'South East' }
];
// Generate synthetic region series; colour mapping is driven solely by id when palette="region"
const regionSeries: LineSeries[] = regionMeta.map(r => ({
  id: r.id,
  label: r.label,
  data: Array.from({ length: 8 }).map((_, j) => ({
    x: new Date(Date.now() - (7 - j) * 86400000),
    y: Math.round(20 + Math.random() * 50)
  }))
}));

export const Region: Story = {
  render: () => (
    <ChartContainer title="Region legend" description="Region palette mapping" source="Synthetic data">
      <>
        <Legend
          items={regionSeries.map(s => ({ id: s.id, label: s.label || s.id }))}
          palette="region"
        />
        <LineChart series={regionSeries} palette="region" yLabel="Value" />
      </>
    </ChartContainer>
  )
};

export const Interactive: Story = {
  render: () => {
    const localSeries = series; // reuse existing
    const [hidden, setHidden] = React.useState<string[]>([]);
  // Assign stable colours once so index-based reordering after filtering does not change colours
  const colouredSeries = React.useMemo(() => assignSeriesColors(localSeries), [localSeries]);
  const visibleSeries = colouredSeries.filter(s => !hidden.includes(s.id));
    return (
      <ChartContainer title="Interactive legend" description="Click swatches to hide/show series" source="Synthetic data">
        <>
          <Legend
      items={colouredSeries.map(s => ({ id: s.id, label: s.label || s.id, color: s.color }))}
            interactive
            hiddenIds={hidden}
            onVisibilityChange={(_v: string[], h: string[]) => setHidden(h)}
          />
          <LineChart series={visibleSeries} yLabel="Value" />
        </>
      </ChartContainer>
    );
  }
};
