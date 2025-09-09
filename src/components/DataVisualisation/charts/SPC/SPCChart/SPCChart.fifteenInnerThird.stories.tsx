import { Meta, StoryObj } from '@storybook/react';
import SPCChart from './SPCChart';
import { ChartType, ImprovementDirection } from './logic/spc';

const meta: Meta<typeof SPCChart> = {
  title: 'Data Visualisation/SPC/Rules/Fifteen Inner Third',
  component: SPCChart,
};
export default meta;

type Story = StoryObj<typeof SPCChart>;

// Dataset similar to test: baseline establishing limits then 15 inner-third mixed points
const baseline = [50.4, 49.8, 50.2, 50.1, 49.9, 50.3, 50.05, 49.95, 50.15, 49.85, 50.25, 49.9];
const stable = [50.08,49.96,50.07,49.97,50.09,49.95,50.1,49.94,50.11,49.93,50.07,49.99,50.06,49.98,50.05];
const values = [...baseline, ...stable];
const data = values.map((v,i)=> ({ x: i+1, y: v }));

export const Enabled: Story = {
  args: {
    chartType: ChartType.XmR,
    metricImprovement: ImprovementDirection.Up,
    data,
    settings: { enableFifteenInInnerThirdRule: true, specialCauseShiftPoints: 8, specialCauseTrendPoints: 6 },
  }
};

export const Disabled: Story = {
  args: {
    chartType: ChartType.XmR,
    metricImprovement: ImprovementDirection.Up,
    data,
    settings: { enableFifteenInInnerThirdRule: false },
  }
};
