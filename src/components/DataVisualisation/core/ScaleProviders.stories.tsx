// React import omitted (automatic JSX runtime)
import type { Meta, StoryObj } from '@storybook/react';
import { ChartRoot, LineScalesProvider, Axis, GridLines, type LineSeries } from '../';

const meta: Meta<typeof LineScalesProvider> = {
  title: 'Data Visualisation/Utilities/Scale Providers',
  component: LineScalesProvider,
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates yDomain override and inner padding options on LineScalesProvider.'
      }
    }
  }
};
export default meta;
type Story = StoryObj<typeof LineScalesProvider>;

const mkSeries = (n = 12): LineSeries[] => [{ id: 's1', label: 'S1', data: Array.from({ length: n }).map((_, i) => ({ x: new Date(Date.now() - (n-1-i)*86400000), y: 50 + Math.sin(i/2)*10 })) }];

export const WithYDomain: Story = {
  render: () => {
    const series = mkSeries();
    return (
      <ChartRoot height={220} ariaLabel="yDomain override">
        <LineScalesProvider series={series} yDomain={[0, 100]}>
          <g>
            <Axis type="x" />
            <Axis type="y" />
            <GridLines axis="y" />
          </g>
        </LineScalesProvider>
      </ChartRoot>
    );
  }
};

export const WithPadding: Story = {
  render: () => {
    const series = mkSeries();
    return (
      <ChartRoot height={220} ariaLabel="scale padding">
        <LineScalesProvider series={series} xPadding={24} yPadding={24}>
          <g>
            <Axis type="x" />
            <Axis type="y" />
            <GridLines axis="y" />
          </g>
        </LineScalesProvider>
      </ChartRoot>
    );
  }
};
