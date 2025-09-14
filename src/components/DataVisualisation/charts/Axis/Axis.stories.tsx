import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChartRoot, LineScalesProvider, Axis, GridLines, type LineSeries } from '../../';

const meta: Meta<typeof Axis> = {
  title: 'Data Visualisation/Utilities/Axis',
  component: Axis,
  parameters: {
    docs: {
      description: {
        component: 'Axis hardening scenarios: long labels, wrap/rotate, auto min spacing, date presets, and explicit tick values.'
      }
    }
  }
};
export default meta;
type Story = StoryObj<typeof Axis>;

const mkSeries = (n = 24): LineSeries[] => [{ id: 's1', label: 'Series 1', data: Array.from({ length: n }).map((_, i) => ({ x: new Date(Date.now() - (n-1-i)*86400000), y: Math.round(50 + Math.random()*30) })) }];

export const Basic: Story = {
  render: () => {
    const series = mkSeries(16);
    return (
      <ChartRoot height={220} ariaLabel="Axis basic">
        <LineScalesProvider series={series}>
          <g>
            <Axis type="x" />
            <Axis type="y" label="Value" />
            <GridLines axis="y" />
          </g>
        </LineScalesProvider>
      </ChartRoot>
    );
  }
};

export const LongLabelsWrapAndRotate: Story = {
  render: () => {
    const n = 10;
    const dates = Array.from({ length: n }).map((_, i) => new Date(2025, 0, i+1));
    const series: LineSeries[] = [{ id: 's1', label: 'S1', data: dates.map((d, i) => ({ x: d, y: 40 + i })) }];
    return (
      <ChartRoot height={240} ariaLabel="Axis long labels">
        <LineScalesProvider series={series}>
          <g>
            <Axis type="x" allowLabelWrap labelAngle={-30} autoMinLabelSpacing maxTickLabelLength={16} />
            <Axis type="y" label="Average Length of Stay (days)" />
            <GridLines axis="y" />
          </g>
        </LineScalesProvider>
      </ChartRoot>
    );
  }
};

export const DatePresetShortMonthYear: Story = {
  render: () => {
    const n = 12;
    const dates = Array.from({ length: n }).map((_, i) => new Date(2025, i, 1));
    const series: LineSeries[] = [{ id: 's1', label: 'S1', data: dates.map((d, i) => ({ x: d, y: 60 + (i%4)*5 })) }];
    return (
      <ChartRoot height={220} ariaLabel="Axis date preset">
        <LineScalesProvider series={series}>
          <g>
            <Axis type="x" tickFormatPreset="shortMonthYear" />
            <Axis type="y" />
            <GridLines axis="y" />
          </g>
        </LineScalesProvider>
      </ChartRoot>
    );
  }
};

export const ExplicitTickValues: Story = {
  render: () => {
    const series = mkSeries(8);
    const s = series[0].data;
    const xTicks = [s[0].x as Date, s[3].x as Date, s[7].x as Date];
    return (
      <ChartRoot height={220} ariaLabel="Axis explicit ticks">
        <LineScalesProvider series={series}>
          <g>
            <Axis type="x" tickValues={xTicks} />
            <Axis type="y" tickValues={[0, 25, 50, 75, 100]} />
            <GridLines axis="y" tickCount={4} />
          </g>
        </LineScalesProvider>
      </ChartRoot>
    );
  }
};
