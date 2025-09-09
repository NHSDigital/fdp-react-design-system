// React import omitted (automatic JSX runtime)
import type { Meta, StoryObj } from '@storybook/react';
import { SPCSpark } from './SPCSpark';
import { VariationState } from '../SPCIcons/SPCConstants';

const meta: Meta<typeof SPCSpark> = {
  title: 'Data Visualisation/SPC/SPCSpark',
  component: SPCSpark,
  decorators: [
    (Story) => (
      <div style={{ fontFamily: 'Frutiger W01, Frutiger, Arial, sans-serif', display: 'inline-block' }}>
        <Story />
      </div>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof SPCSpark>;

const sampleData = Array.from({length: 20}).map((_,i)=>({ value: Math.round(60 + Math.sin(i/2)*10 + (i>14? 8:0)) }));
// Deterministic stable series for Common Cause visuals (perfectly flat)
const stableCommonCauseData = Array.from({ length: 20 }).map(() => ({ value: 60 }));

export const Basic: Story = {
  args: {
    data: sampleData,
    variationState: VariationState.SpecialCauseImproving,
    direction: 'higher',
    showMean: true,
  }
};

export const CommonCause: Story = {
  args: {
  data: stableCommonCauseData,
    variationState: VariationState.CommonCause,
    showMean: true,
  }
};

export const WithLatestMarker: Story = {
  args: {
    data: sampleData,
    variationState: VariationState.SpecialCauseDeteriorating,
    direction: 'lower',
    showLatestMarker: true,
  gradientWash: true,
  }
};

export const Dense: Story = {
  args: {
    data: Array.from({length:40}).map((_,i)=>({ value: 50 + Math.sin(i/3)*5 })),
    variationState: VariationState.SpecialCauseNoJudgement,
    direction: 'higher',
  showLimits: true,
  }
};

// Reuse a 40-point synthetic series for per-point signal colouring example
const denseData = Array.from({length:40}).map((_,i)=>({ value: 50 + Math.sin(i/4)*6 + Math.cos(i/5)*3 }));

export const ColouredPoints: Story = {
  name: 'Per-point signal colouring',
  args: {
  data: denseData,
  autoClassify: true,
  showMean: true,
  showLimits: true,
  showLimitBand: true,
  colorPointsBySignal: true,
  },
};

// Thinning examples
const longData = Array.from({length:180}).map((_,i)=>({ value: 120 + Math.sin(i/8)*15 + Math.cos(i/3)*5 }));

// Limits + shaded band
export const WithLimitBand: Story = {
  args: {
    data: sampleData,
    variationState: VariationState.CommonCause,
    showMean: true,
    showLimits: true,
    showLimitBand: true,
  }
};

export const ThinningStride: Story = {
  args: {
    data: longData,
    variationState: VariationState.CommonCause,
    showMean: true,
    maxPoints: 40,
    thinningStrategy: 'stride',
  }
};

export const ThinningRDP: Story = {
  args: {
    data: longData,
    variationState: VariationState.CommonCause,
    showMean: true,
    maxPoints: 40,
    thinningStrategy: 'rdp',
  }
};
