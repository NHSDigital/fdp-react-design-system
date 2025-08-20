import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChartRoot, LineScalesProvider, Axis, GridLines, TooltipProvider, TooltipOverlay, AreaSeriesPrimitive, LineSeriesPrimitive, Legend, type AreaSeries } from './index';
import { useChartContext } from './core/ChartRoot';
import { useScaleContext } from './core/ScaleContext';
import VisuallyHiddenLiveRegion from './primitives/VisuallyHiddenLiveRegion';

const meta: Meta = {
  title: 'Data Visualisation/AreaChart'
};
export default meta;

type Story = StoryObj;

interface Datum { x: Date; y: number }

// Simple generator
const makeSeries = (id: string, points: number, amp = 60): AreaSeries => ({
  id,
  label: id,
  data: Array.from({ length: points }).map((_, i) => ({
    x: new Date(Date.now() - (points - 1 - i) * 86400000),
    y: Math.round(20 + Math.random() * amp)
  }))
});

export const BasicArea: Story = {
  render: () => {
    const series: AreaSeries[] = React.useMemo(() => [
      makeSeries('alpha', 14, 50),
      makeSeries('beta', 14, 70),
      makeSeries('gamma', 14, 40)
    ], []);
    const parseX = React.useCallback((d: any) => d.x instanceof Date ? d.x : new Date(d.x), []);
    return (
      <ChartRoot height={320} ariaLabel="Area chart example" margin={{ left: 56, bottom: 48, right: 16, top: 12 }}>
        <LineScalesProvider series={series as any} parseX={parseX}>
          <TooltipProvider>
            <InnerArea series={series} parseX={parseX} />
            <Legend items={series.map(s => ({ id: s.id, label: s.label || s.id }))} />
            <VisuallyHiddenLiveRegion />
          </TooltipProvider>
        </LineScalesProvider>
      </ChartRoot>
    );
  }
};

// Reusable inner renderer (mirrors Bar/Compositional patterns)
const InnerArea: React.FC<{ series: AreaSeries[]; parseX: (d: Datum) => Date }> = ({ series, parseX }) => {
  const dims = useChartContext();
  const scaleCtx = useScaleContext();
  if (!dims || !scaleCtx) return null;
  return (
    <svg width={dims.width} height={dims.height} role="img">
      <g transform={`translate(${dims.margin.left},${dims.margin.top})`}>
        <Axis type="x" />
        <Axis type="y" />
        <GridLines axis="y" />
        {/* Areas (render first) */}
        {series.map((s, i) => (
          <AreaSeriesPrimitive
            key={s.id}
            series={s as any}
            seriesIndex={i}
            palette="categorical"
			parseX={parseX as any}
			smooth={false}
          />
        ))}
        {/* Optional line overlays for clarity */}
        {series.map((s, i) => (
          <LineSeriesPrimitive
            key={s.id + '-line'}
            series={s as any}
            seriesIndex={i}
            palette="categorical"
            showPoints={false}
            focusablePoints={false}
            focusIndex={-1}
			parseX={parseX as any}
			strokeWidth={2}
			smooth={false}
          />
        ))}
        <TooltipOverlay />
      </g>
    </svg>
  );
};

BasicArea.parameters = {
  docs: { description: { story: 'Basic multi-series area chart using AreaSeriesPrimitive with line overlays.' } }
};
