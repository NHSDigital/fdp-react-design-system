import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LineChart, ChartContainer, type LineSeries } from '../../index';
import { Legend } from './Legend';
import { assignSeriesColors } from '../../utils/colors';
import { generatePattern, patternDataUrl } from '../../utils/patterns';

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

const severityItems = [
  { id: 'low', label: 'Low' },
  { id: 'moderate', label: 'Moderate' },
  { id: 'high', label: 'High' },
  { id: 'critical', label: 'Critical' }
];

export const Severity: Story = {
  render: () => (
    <div>
      <ChartContainer title="Severity legend" description="Semantic severity palette" source="Tokens only">
        <Legend items={severityItems} palette="severity" />
      </ChartContainer>
    </div>
  )
};

const orgLevelItems = [
  { id: 'trust', label: 'Trust' },
  { id: 'ambulance', label: 'Ambulance' },
  { id: 'icb', label: 'ICB' },
  { id: 'region', label: 'Region' }
];

export const OrgLevel: Story = {
  render: () => (
    <div>
      <ChartContainer title="Org level legend" description="Organisational level palette" source="Tokens only">
  <Legend items={orgLevelItems} palette={"org-level" as any} />
      </ChartContainer>
    </div>
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

// Palette Explorer – shows all palettes with strokes
export const PaletteExplorer: Story = {
  render: () => {
    const categorical = assignSeriesColors(Array.from({ length: 12 }).map((_, i) => ({ id: `cat-${i+1}`, label: `Cat ${i+1}` })), { palette: 'categorical' });
    const region = assignSeriesColors(regionSeries.map(r => ({ id: r.id, label: r.label || r.id })), { palette: 'region' });
    const severityLegend = severityItems;
    const orgLevelLegend = orgLevelItems;
    return (
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))' }}>
        <ChartContainer title="Categorical" description="Base 12 + optimised ordering" source="Tokens">
          <Legend items={categorical.map(c => ({ id: c.id, label: c.label, color: (c as any).color }))} />
        </ChartContainer>
        <ChartContainer title="Region" description="Geographic mapping" source="Tokens">
          <Legend items={region.map(c => ({ id: c.id, label: c.label }))} palette="region" />
        </ChartContainer>
        <ChartContainer title="Severity" description="Semantic levels" source="Tokens">
          <Legend items={severityLegend} palette="severity" />
        </ChartContainer>
        <ChartContainer title="Org Level" description="Structural hierarchy" source="Tokens">
          <Legend items={orgLevelLegend} palette={"org-level" as any} />
        </ChartContainer>
      </div>
    );
  }
};

// Combined Colour + Pattern for colour vision deficiency support
export const ColourAndPattern: Story = {
  render: () => {
    const base = assignSeriesColors(Array.from({ length: 6 }).map((_, i) => ({ id: `series-${i+1}`, label: `Series ${i+1}` })));
    const patternKinds = ['diagonal','rev-diagonal','dot','zigzag','checker','ring'] as const;
    const items = base.map((s, i) => {
      const pattern = generatePattern(patternKinds[i % patternKinds.length] as any, { size: 8 });
      return { id: s.id, label: s.label || s.id, color: (s as any).color, patternDataUrl: patternDataUrl(pattern) };
    });
    return (
      <ChartContainer title="Colour + Pattern" description="Dual encoding improves distinguishability for users with colour vision deficiency. Patterns are optional and should be used sparingly – reserve for critical distinctions." source="Utility">
        <Legend items={items} />
      </ChartContainer>
    );
  }
};

// Sequential and Diverging scale demos
import { createSequentialColorScale, createDivergingColorScale } from '../../utils/colors';

export const SequentialScaleDemo: Story = {
  render: () => {
    const scale = createSequentialColorScale({ domain: [0,100], steps: 9, baseColor: '#005eb8' });
    const swatches = Array.from({ length: 9 }).map((_, i) => ({ value: i*(100/8), color: scale(i*(100/8)) }));
    return (
      <ChartContainer title="Sequential scale" description="Lab interpolation" source="Utility">
        <div style={{ display: 'flex', gap: 4 }}>
          {swatches.map(s => <div key={s.value} title={String(Math.round(s.value))} style={{ background: s.color, width: 32, height: 32, border: '1px solid #ccc' }} />)}
        </div>
      </ChartContainer>
    );
  }
};

export const DivergingScaleDemo: Story = {
  render: () => {
    const scale = createDivergingColorScale({ domain: [-50,0,50], stepsPerSide: 4 });
    const swatches = Array.from({ length: 9 }).map((_, i) => {
      const v = -50 + (i*(100/8));
      return { value: v, color: scale(v) };
    });
    return (
      <ChartContainer title="Diverging scale" description="Negative ↔ Positive" source="Utility">
        <div style={{ display: 'flex', gap: 4 }}>
          {swatches.map(s => <div key={s.value} title={String(Math.round(s.value))} style={{ background: s.color, width: 32, height: 32, border: '1px solid #ccc' }} />)}
        </div>
      </ChartContainer>
    );
  }
};
