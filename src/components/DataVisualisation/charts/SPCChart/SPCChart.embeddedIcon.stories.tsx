import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SPCChart, type SPCDatum, ImprovementDirection } from './SPCChart';
import { ChartContainer } from '../..';

const meta: Meta<typeof SPCChart> = {
  title: 'Data Visualisation/SPC/Embedded Icon Variants',
  component: SPCChart,
};
export default meta;
type Story = StoryObj<typeof SPCChart>;

// Helper to create deterministic sequences
const makeBase = (len = 20, base = 50): SPCDatum[] => {
  const start = Date.now() - (len - 1) * 24 * 3600 * 1000;
  return Array.from({ length: len }, (_, i) => ({ x: new Date(start + i * 24 * 3600 * 1000), y: base + Math.round(Math.sin(i / 3) * 2) }));
};

export const EmbeddedIconVariants: Story = {
  render: () => {
    // Common-cause chart (grey)
    const common = makeBase(18, 50);

    // Improvement (H) — create a sustained upward shift by raising the last 6 points
    const improving = makeBase(18, 50).map((d) => ({ ...d }));
    // Raise the last 6 points to produce a clear improving special-cause signal
    for (let i = Math.max(0, improving.length - 6); i < improving.length; i++) {
      improving[i].y += 12;
    }

    // Concern (L) — inject a low outlier at the final point
    const concern = makeBase(18, 50).map((d) => ({ ...d }));
    concern[concern.length - 1].y -= 18;

    // No-judgement (SpecialCauseNoJudgement) — create an ambiguous arrow by forcing conflicting signals
    const noJudgement = makeBase(18, 50).map((d) => ({ ...d }));
    // create two signals around the end so engine may return a SpecialCauseNoJudgement mapping
    noJudgement[noJudgement.length - 2].y += 12;
    noJudgement[noJudgement.length - 1].y -= 12;

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.25rem' }}>
        <ChartContainer title="Common cause (grey)" description="No special cause at final point">
          <SPCChart data={common} announceFocus metricImprovement={ImprovementDirection.Neither} />
        </ChartContainer>
        <ChartContainer title="Improving (H / blue)" description="Final point is a high outlier (improvement)">
          <SPCChart data={improving} announceFocus metricImprovement={ImprovementDirection.Up} />
        </ChartContainer>
        <ChartContainer title="Concern (L / orange)" description="Final point is a low outlier (concern)">
          <SPCChart data={concern} announceFocus metricImprovement={ImprovementDirection.Up} />
        </ChartContainer>
        <ChartContainer title="No judgement (purple)" description="Conflicting signals around the final point">
          <SPCChart data={noJudgement} announceFocus metricImprovement={ImprovementDirection.Up} />
        </ChartContainer>
      </div>
    );
  }
};
