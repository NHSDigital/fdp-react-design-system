import * as React from 'react';
import ChartRoot from './core/ChartRoot';
import { LineScalesProvider, useScaleContext } from './core/ScaleContext';
import { BandScalesProvider } from './core/BandScalesProvider';
import { useChartContext } from './core/ChartRoot';
import Axis from './primitives/Axis';
import GridLines from './primitives/GridLines';
import Legend from './primitives/Legend';
import { TooltipProvider } from './core/TooltipContext';
import TooltipOverlay from './primitives/TooltipOverlay';
import VisuallyHiddenLiveRegion from './primitives/VisuallyHiddenLiveRegion';
import { BarSeriesPrimitive, type BarSeries } from './series/BarSeriesPrimitive';

// Consolidated BarChart stories under a single category (removed extra Basic level)
export default { title: 'Data Visualisation/BarChart' };

// Simple (non-grouped) single-series categorical bar chart
export const SimpleBars = () => {
  const series: CatSeries[] = React.useMemo(() => [makeCatSeries('values')], []);
  const parseX = React.useCallback(() => new Date(Date.now()), []); // dummy date
  return (
    <ChartRoot height={280} ariaLabel="Simple bar chart" margin={{ left: 56, bottom: 56, right: 16, top: 12 }}>
      <BandScalesProvider series={series as any}>
        <TooltipProvider>
          <SimpleInnerBars series={series as any} parseX={parseX as any} />
          <VisuallyHiddenLiveRegion />
        </TooltipProvider>
      </BandScalesProvider>
    </ChartRoot>
  );
};

SimpleBars.parameters = {
  docs: { description: { story: 'Single-series categorical bar chart (no grouping).' } }
};

// InnerBars variant for single-series with category coloring
const SimpleInnerBars: React.FC<{ series: BarSeries[]; parseX: (d:any)=>Date }> = ({ series, parseX }) => {
  const scaleCtx = useScaleContext();
  const dims = useChartContext();
  if (!scaleCtx || !dims) return null;
  return (
    <svg width={dims.width} height={dims.height} role="img">
      <g transform={`translate(${dims.margin.left},${dims.margin.top})`}>
        <Axis type="x" />
        <Axis type="y" />
        <GridLines axis="y" />
        {series.map((s, i) => (
          <BarSeriesPrimitive
            key={s.id}
            series={s}
            seriesIndex={i}
            seriesCount={1}
            palette="categorical"
            parseX={parseX}
            colorMode="category"
          />
        ))}
        <TooltipOverlay />
      </g>
    </svg>
  );
};

const makeSeries = (id: string, start: Date, points: number): BarSeries => {
  const data = Array.from({ length: points }).map((_, i) => ({
    x: new Date(start.getTime() + i * 24 * 3600 * 1000),
    y: Math.round(Math.random() * 100)
  }));
  return { id, label: id, data };
};

export const GroupedBarsTemporal = () => {
  const series: BarSeries[] = React.useMemo(() => [
    makeSeries('alpha', new Date('2025-01-01'), 7),
    makeSeries('beta', new Date('2025-01-01'), 7),
    makeSeries('gamma', new Date('2025-01-01'), 7)
  ], []);
  const parseX = React.useCallback((d: { x: Date | string | number }) => d.x instanceof Date ? d.x : new Date(d.x), []);
  return (
    <ChartRoot height={320} ariaLabel="Grouped bar chart example" margin={{ left: 56, bottom: 48, right: 16, top: 12 }}>
      <LineScalesProvider series={series} parseX={parseX as any}>
        <TooltipProvider>
          <InnerBars series={series} parseX={parseX} />
          <Legend items={series.map(s => ({ id: s.id, label: s.label || s.id }))} interactive />
          <VisuallyHiddenLiveRegion />
        </TooltipProvider>
      </LineScalesProvider>
    </ChartRoot>
  );
};

const InnerBars: React.FC<{ series: BarSeries[]; parseX: (d: any) => Date }> = ({ series, parseX }) => {
  const scaleCtx = useScaleContext();
  const dims = useChartContext();
  if (!scaleCtx || !dims) return null;
  // Mirror LineChart structure: outer svg sized to full chart, translated inner group for margins.
  return (
    <svg width={dims.width} height={dims.height} role="img">
      <g transform={`translate(${dims.margin.left},${dims.margin.top})`}>
        <Axis type="x" />
        <Axis type="y" />
        <GridLines axis="y" />
        {series.map((s, i) => (
          <BarSeriesPrimitive
            key={s.id}
            series={s}
            seriesIndex={i}
            seriesCount={series.length}
            palette="categorical"
            parseX={parseX}
            adaptive
            adaptiveGroupOccupancy={0.8}
            groupGap={4}
            allSeries={series}
          />
        ))}
        <TooltipOverlay />
      </g>
    </svg>
  );
};

GroupedBarsTemporal.parameters = {
  docs: { description: { story: 'Basic grouped bar chart built from primitives (time-scale driven width inference).' } }
};

// Categorical (band) scale variant
interface CatDatum { x: string; y: number }
interface CatSeries { id: string; label?: string; data: CatDatum[] }

const categories = ['Alpha','Beta','Gamma','Delta','Epsilon','Zeta','Eta'];

const makeCatSeries = (id: string): CatSeries => ({
  id,
  label: id,
  data: categories.map(c => ({ x: c, y: Math.round(Math.random()*100) }))
});

export const GroupedBarsCategorical = () => {
  const series: CatSeries[] = React.useMemo(() => [
    makeCatSeries('series A'),
    makeCatSeries('series B'),
    makeCatSeries('series C')
  ], []);
  // parseX still returns Date for compatibility for tooltip registration; for categorical we fabricate epoch offsets or just date now.
  const parseX = React.useCallback(() => new Date(Date.now()), []); // dummy date (band scale doesn't use it)
  return (
    <ChartRoot height={320} ariaLabel="Grouped categorical bar chart" margin={{ left: 56, bottom: 56, right: 16, top: 12 }}>
      <BandScalesProvider series={series as any}>
        <TooltipProvider>
          <InnerBars series={series as any} parseX={parseX as any} />
          {/* InnerBars passes allSeries internally above for grouped categorical too */}
          <Legend items={series.map(s => ({ id: s.id, label: s.label || s.id }))} interactive />
          <VisuallyHiddenLiveRegion />
        </TooltipProvider>
      </BandScalesProvider>
    </ChartRoot>
  );
};

GroupedBarsCategorical.parameters = {
  docs: { description: { story: 'Grouped bars using a categorical band scale (even spacing, string labels).' } }
};
