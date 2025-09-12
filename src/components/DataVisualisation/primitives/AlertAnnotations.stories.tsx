import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ChartRoot,
  LineScalesProvider,
  Axis,
  GridLines,
  LineSeriesPrimitive,
  AlertBand,
  AlertThreshold,
  AlertMarkers,
} from '..';

type Story = StoryObj;

const meta: Meta = {
  title: 'Data Visualisation/Guides/Alert Annotations/Stories',
  parameters: {
    docs: {
      description: {
        component:
          'Stories showing AlertBand, AlertThreshold and AlertMarkers composed with a simple line chart using current scales.',
      },
    },
  },
};

export default meta;

function genSeries(days = 30, base = 80) {
  const data = Array.from({ length: days }).map((_, i) => ({
    x: new Date(2025, 0, i + 1),
    y: base + Math.round(Math.random() * 40),
  }));
  return [{ id: 'admissions', data }];
}

export const LineWithAlerts: Story = {
  name: 'Line + Threshold + Band + Markers',
  render: () => {
    const series = genSeries(30, 80);
    return (
      <ChartRoot height={300} ariaLabel="Admissions with target and alerts">
        <LineScalesProvider series={series}>
          <svg width="100%" height="100%" role="img">
            <g transform={`translate(56,12)`}>
              <Axis type="x" />
              <Axis type="y" label="Count" />
              <GridLines axis="y" />
              {/* Shaded OK band (80–100) */}
              <AlertBand orientation="horizontal" from={80} to={100} status="ok" opacity={0.1} />
              {/* Threshold at 120 (warning) */}
              <AlertThreshold orientation="horizontal" value={120} status="warning" label="Threshold 120" />
              {/* Markers */}
              <AlertMarkers
                shape="triangle"
                points={[
                  { x: new Date(2025, 0, 7), status: 'critical', label: 'Spike' },
                  { x: new Date(2025, 0, 18), status: 'warning' },
                ]}
              />
              <LineSeriesPrimitive series={series[0]} seriesIndex={0} showPoints parseX={(d: any) => d.x} />
            </g>
          </svg>
        </LineScalesProvider>
      </ChartRoot>
    );
  },
};

export const VerticalThresholdAndBand: Story = {
  name: 'Vertical threshold and band',
  render: () => {
    const series = genSeries(30, 60);
    const start = new Date(2025, 0, 10);
    const end = new Date(2025, 0, 15);
    return (
      <ChartRoot height={280} ariaLabel="Window of interest with vertical annotations">
        <LineScalesProvider series={series}>
          <svg width="100%" height="100%" role="img">
            <g transform={`translate(56,12)`}>
              <Axis type="x" />
              <Axis type="y" label="Count" />
              <GridLines axis="y" />
              <AlertBand orientation="vertical" from={start} to={end} status="info" opacity={0.12} />
              <AlertThreshold orientation="vertical" value={start} status="info" label="Start" />
              <AlertThreshold orientation="vertical" value={end} status="info" label="End" />
              <LineSeriesPrimitive series={series[0]} seriesIndex={0} showPoints parseX={(d: any) => d.x} />
            </g>
          </svg>
        </LineScalesProvider>
      </ChartRoot>
    );
  },
};

