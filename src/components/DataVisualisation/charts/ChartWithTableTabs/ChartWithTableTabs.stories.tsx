import type { Meta, StoryObj } from '@storybook/react';
import { ChartWithTableTabs, LineChart, type LineSeries } from '../../index';
import Table from '../../../Tables/Table';

const meta: Meta = {
  title: 'Data Visualisation/ChartWithTableTabs',
  component: ChartWithTableTabs
};
export default meta;

interface StoryArgs {
  disableTabs?: boolean;
}

type Story = StoryObj<StoryArgs>;

const series: LineSeries[] = [
  {
    id: 'admissions',
    label: 'Admissions',
    data: Array.from({ length: 14 }).map((_, i) => ({
      x: new Date(Date.now() - (13 - i) * 86400000),
      y: Math.round(50 + Math.random() * 40)
    }))
  },
  {
    id: 'discharges',
    label: 'Discharges',
    data: Array.from({ length: 14 }).map((_, i) => ({
      x: new Date(Date.now() - (13 - i) * 86400000),
      y: Math.round(40 + Math.random() * 35)
    }))
  }
];

const table = (
  <Table
    caption="Admissions data"
    head={[{ text: 'Date' }, { text: 'Admissions', format: 'numeric' }]}
    rows={series[0].data.map(d => ([
      { text: new Date(d.x).toLocaleDateString() },
      { text: String(d.y), format: 'numeric' }
    ]))}
    responsive
  />
);

export const Basic: Story = {
  args: { disableTabs: false },
  render: (args) => (
    <ChartWithTableTabs
      title="Admissions"
      description="Chart and data table"
      source="Example synthetic data"
      chart={<LineChart series={series} yLabel="Count" smooth={false} />}
      table={table}
      disableTabs={args.disableTabs}
    />
  )
};

export const AutoTableWithAlignmentAndDownload: Story = {
  args: { disableTabs: false },
  render: (args) => (
    <ChartWithTableTabs
      title="Admissions vs Discharges"
      description="Auto-generated multi-series table with alignment and CSV download"
      source="Example synthetic data"
      chart={<LineChart series={series} yLabel="Count" smooth={false} />}
      autoTableFromSeries={series}
      columnAlign={['left', 'right', 'right']}
      enableDownload
      disableTabs={args.disableTabs}
    />
  )
};
