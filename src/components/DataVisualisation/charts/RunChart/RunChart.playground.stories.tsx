import type { Meta, StoryObj } from '@storybook/react';
import { ChartRoot } from '../../core/ChartRoot';
import RunChart, { type RunSeries, RunChartColor } from './RunChart';

const meta: Meta<typeof RunChart> = {
  title: 'Data Visualisation/RunChart/Playground',
  component: RunChart,
  argTypes: {
    lineColor: {
      control: 'select',
      options: Object.keys(RunChartColor),
      mapping: RunChartColor,
    },
    smooth: { control: 'boolean' },
    strokeWidth: { control: { type: 'number', min: 1, max: 6, step: 1 } },
    showRunRulesHints: { control: 'boolean' },
    showMedian: { control: 'boolean' },
    gradientFills: { control: 'boolean' },
  },
};
export default meta;

const mkSeries = (): RunSeries[] => [{
  id: 'metric',
  data: Array.from({ length: 18 }).map((_, i) => ({ x: new Date(2025, 0, i + 1), y: 50 + (i > 10 ? 3 : 0) + ((i*7)%9 - 4) }))
}];

type Story = StoryObj<typeof RunChart>;

export const Playground: Story = {
  args: {
    lineColor: RunChartColor.NHSBlue,
    smooth: true,
    strokeWidth: 2,
    showRunRulesHints: true,
    showMedian: true,
    gradientFills: true,
  },
  render: (args) => (
    <ChartRoot height={260} ariaLabel="Run chart playground">
      <RunChart {...args} series={mkSeries()} yLabel="Value" />
    </ChartRoot>
  )
};
