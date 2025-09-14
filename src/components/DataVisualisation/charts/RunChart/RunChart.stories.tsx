import type { Meta, StoryObj } from '@storybook/react';
import { ChartRoot } from '../../core/ChartRoot';
import RunChart, { type RunSeries } from './RunChart';

const meta: Meta<typeof RunChart> = {
  title: 'Data Visualisation/RunChart',
  component: RunChart,
};
export default meta;

const mkSeries = (): RunSeries[] => [{
  id: 'admissions',
  data: Array.from({ length: 24 }).map((_, i) => ({ x: new Date(2025, 0, i + 1), y: 80 + Math.round(Math.random()*40) }))
}];

export const Basic: StoryObj<typeof RunChart> = {
  render: () => (
    <ChartRoot height={260} ariaLabel="Admissions run chart">
      <RunChart series={mkSeries()} yLabel="Count" showMedian />
    </ChartRoot>
  )
};

export const PartitionedMedian: StoryObj<typeof RunChart> = {
  render: () => {
    const s = mkSeries();
    const partitionFlags = s[0].data.map((_, i) => i === 12 ? true : false);
    return (
      <ChartRoot height={260} ariaLabel="Admissions run chart with phase change">
        <RunChart series={s} yLabel="Count" showMedian partitionFlags={partitionFlags} />
      </ChartRoot>
    );
  }
};
