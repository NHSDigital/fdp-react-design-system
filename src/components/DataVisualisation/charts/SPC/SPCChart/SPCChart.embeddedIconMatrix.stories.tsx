import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SPCChart, type SPCDatum, ImprovementDirection } from './SPCChart';
import { ChartContainer } from '../../ChartContainer.tsx';

const meta: Meta<typeof SPCChart> = {
  title: 'Data Visualisation/SPC/Embedded Icon Matrix',
  component: SPCChart,
  parameters: { docs: { description: { story: 'Matrix of embedded variation icon outcomes rendered via SPC engine (Improvement, Concern, Suppressed/No Judgement, Common Cause). Ensures correct colour (blue/orange/purple/grey) and letter (H/L) mapping.' } } }
};
export default meta;
type Story = StoryObj<typeof SPCChart>;

type Builder = { label: string; description: string; data: SPCDatum[]; improvement: ImprovementDirection };

const makeStable = (len = 18, base = 50): SPCDatum[] => {
  const start = Date.now() - (len - 1) * 86400000;
  return Array.from({ length: len }, (_, i) => ({ x: new Date(start + i * 86400000), y: base + Math.sin(i / 3) * 0.5 }));
};

// Scenarios
const common: Builder = {
  label: 'Common Cause (grey)',
  description: 'No special cause signals; variation icon = neither',
  data: makeStable(),
  improvement: ImprovementDirection.Neither
};

const improvement: Builder = (() => {
  const d = makeStable();
  // Create upward shift (last 6 points high) to exceed shift rule and avoid suppression
  for (let i = d.length - 6; i < d.length; i++) d[i].y += 8;
  return {
    label: 'Improvement (blue H)',
    description: 'High-side special cause (shift) – improvement',
    data: d,
    improvement: ImprovementDirection.Up
  } as Builder;
})();

const concern: Builder = (() => {
  const d = makeStable();
  // Single low outlier (unfavourable) will classify as concern
  d[d.length - 1].y -= 10;
  return {
    label: 'Concern (orange L)',
    description: 'Low-side special cause (single point)',
    data: d,
    improvement: ImprovementDirection.Up
  } as Builder;
})();

const suppressed: Builder = (() => {
  const d = makeStable();
  // Large single high outlier (favourable) to trigger isolated 3σ and suppression -> VariationIcon.None (purple)
  d[d.length - 1].y += 40;
  return {
    label: 'Suppressed favourable (purple)',
    description: 'Isolated high favourable point suppressed (no judgement)',
    data: d,
    improvement: ImprovementDirection.Up
  } as Builder;
})();

const suppressedDown: Builder = (() => {
  const d = makeStable();
  // Large single low outlier (favourable because Lower is Better) to trigger suppression
  d[d.length - 1].y -= 40;
  return {
    label: 'Suppressed favourable (Down metric, purple)',
    description: 'Isolated low favourable point suppressed (no judgement)',
    data: d,
    improvement: ImprovementDirection.Down
  } as Builder;
})();

export const EmbeddedIconMatrix: Story = {
  render: () => {
  const scenarios = [common, improvement, concern, suppressed, suppressedDown];
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 20 }}>
        {scenarios.map(s => (
          <ChartContainer key={s.label} title={s.label} description={s.description}>
            <SPCChart data={s.data} metricImprovement={s.improvement} showEmbeddedIcon showIcons={false} announceFocus />
          </ChartContainer>
        ))}
      </div>
    );
  }
};
