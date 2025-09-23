import type { Meta, StoryObj } from '@storybook/react';
import { BrandThemeProvider } from '../../themes/BrandThemeProvider';
import { PatternBanner } from './PatternBanner';
import type { PatternBannerProps } from './PatternBanner.types';

const meta: Meta<PatternBannerProps> = {
  title: 'FDP/Experimental/PatternBanner',
  component: PatternBanner,
  args: {
    height: 420,
    density: 18,
    neighbors: 1,
    connectorWidth: 0.6,
    feature: (
      <div style={{ background: 'rgba(0,0,0,0.6)', color: '#fff', padding: 24, borderRadius: 8 }}>
        <h2 style={{ margin: 0 }}>Feature box</h2>
        <p style={{ margin: 0 }}>Text content will go here.</p>
      </div>
    )
  },
  parameters: { layout: 'fullscreen' }
};
export default meta;

export const Default: StoryObj<PatternBannerProps> = {
  render: (args) => (
    <BrandThemeProvider brand="fdp" scope="local">
      <PatternBanner {...args} />
    </BrandThemeProvider>
  )
};
