// React import omitted (automatic JSX runtime)
import type { Meta, StoryObj } from '@storybook/react';
import { ChartRoot, LineScalesProvider, Axis, GridLines, type LineSeries } from '../../';

const meta: Meta<typeof GridLines> = {
  title: 'Data Visualisation/Utilities/GridLines',
  component: GridLines,
  parameters: {
    docs: {
      description: {
        component: 'GridLines hardening scenarios: horizontal (y) and vertical (x) lines, custom tickCount, and dashed styling.'
      }
    }
  }
};
export default meta;
type Story = StoryObj<typeof GridLines>;

const mkSeries = (n = 16): LineSeries[] => [{ id: 's1', label: 'S1', data: Array.from({ length: n }).map((_, i) => ({ x: new Date(Date.now() - (n-1-i)*86400000), y: 40 + (i%6)*8 })) }];

export const HorizontalY: Story = {
  render: () => {
    const series = mkSeries();
    return (
      <ChartRoot height={220} ariaLabel="GridLines Y">
        <LineScalesProvider series={series}>
          <g>
            <Axis type="x" />
            <Axis type="y" />
            <GridLines axis="y" tickCount={6} />
          </g>
        </LineScalesProvider>
      </ChartRoot>
    );
  }
};

export const VerticalX: Story = {
  render: () => {
    const series = mkSeries();
    return (
      <ChartRoot height={220} ariaLabel="GridLines X">
        <LineScalesProvider series={series}>
          <g>
            <Axis type="x" />
            <Axis type="y" />
            <GridLines axis="x" tickCount={8} />
          </g>
        </LineScalesProvider>
      </ChartRoot>
    );
  }
};

export const CustomStyle: Story = {
  render: () => {
    const series = mkSeries();
    return (
      <ChartRoot height={220} ariaLabel="GridLines custom">
        <LineScalesProvider series={series}>
          <g>
            <Axis type="x" />
            <Axis type="y" />
            <GridLines axis="y" stroke="#c8d8eb" dasharray="4 4" />
          </g>
        </LineScalesProvider>
      </ChartRoot>
    );
  }
};
