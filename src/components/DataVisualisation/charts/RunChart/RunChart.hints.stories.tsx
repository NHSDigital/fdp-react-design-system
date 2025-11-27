import type { Meta, StoryObj } from '@storybook/react';
import { ChartRoot } from '../../core/ChartRoot';
import RunChart, { type RunSeries } from './RunChart';

const meta: Meta<typeof RunChart> = {
  title: 'Data Visualisation/RunChart/Run rules hints',
  component: RunChart,
};
export default meta;

const series: RunSeries[] = [{
  id: 'metric',
  data: [12,13,14,15,16,17,18,19,20,21,22].map((y, i) => ({ x: new Date(2025, 0, i + 1), y }))
}];

export const HintsBasic: StoryObj<typeof RunChart> = {
  render: () => (
    <ChartRoot height={240} ariaLabel="Run chart hints">
      <RunChart series={series} yLabel="Value" showMedian showRunRulesHints />
    </ChartRoot>
  )
};

export const StylingVariants: StoryObj<typeof RunChart> = {
  render: () => (
    <ChartRoot height={240} ariaLabel="Run chart styling">
      <RunChart series={series} yLabel="Value" showMedian showRunRulesHints strokeWidth={2} smooth={false} />
    </ChartRoot>
  )
};
