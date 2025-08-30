import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChartRoot, LineScalesProvider, Axis, GridLines, TooltipProvider, TooltipOverlay, AreaSeriesPrimitive, LineSeriesPrimitive, Legend, type AreaSeries, useTooltipContext } from '../../index';
import { stackSeries, normaliseStack } from '../../utils/stack';
import { useChartContext } from '../../core/ChartRoot';
import { useScaleContext } from '../../core/ScaleContext';
import VisuallyHiddenLiveRegion from '../../primitives/VisuallyHiddenLiveRegion';

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
  {/* Grid lines below data */}
  <GridLines axis="y" />
  {/* Areas (render below axes so axes sit on top) */}
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
  {/* Axes drawn last so tick labels sit atop fills */}
  <Axis type="x" />
  <Axis type="y" />
        <TooltipOverlay />
      </g>
    </svg>
  );
};

BasicArea.parameters = {
  docs: { description: { story: 'Basic multi-series area chart using AreaSeriesPrimitive with line overlays.' } }
};

export const Stacked: Story = {
  render: () => {
    const series: AreaSeries[] = Array.from({ length: 3 }).map((_, si) => ({
      id: `s${si+1}`,
      data: Array.from({ length: 10 }).map((__, j) => ({ x: new Date(Date.now() - (9-j)*86400000), y: Math.round(5 + Math.random()*20) }))
    }));
    const stacked = stackSeries(series as any);
    const totals = stacked[0].stacked.map((_, i) => stacked.reduce((sum,s) => sum + (s.stacked[i].y1 - s.stacked[i].y0), 0));
    const yMax = Math.max(...totals);
    const parseX = (d: any) => d.x as Date;
    // Derive ChartRoot margin (re-use Basic area margins for visual parity)
    const margin = { left: 56, bottom: 48, right: 16, top: 12 };
    const StackedInner: React.FC = () => {
      const dims = useChartContext();
      const scaleCtx = useScaleContext();
      if (!dims || !scaleCtx) return null;
      return (
        <svg width={dims.width} height={dims.height} role="img">
          <g transform={`translate(${dims.margin.left},${dims.margin.top})`}>
            <GridLines axis="y" />
            {stacked.map((s, i) => (
              <AreaSeriesPrimitive
                key={s.id}
                series={{ id: s.id, data: s.stacked.map(d => ({ x: d.x, y: d.y1 - d.y0 })) }}
                stacked={s.stacked.map(d => ({ y0: d.y0, y1: d.y1 }))}
                seriesIndex={i}
                palette="categorical"
                parseX={parseX}
                smooth={false}
              />
            ))}
            <Axis type="x" />
            <Axis type="y" />
            <TooltipOverlay />
          </g>
        </svg>
      );
    };
    return (
      <ChartRoot width={720} height={320} ariaLabel="Stacked area chart" margin={margin}>
        <LineScalesProvider series={stacked.map(s => ({ data: s.stacked.map(d => ({ x: d.x, y: d.y1 })) })) as any} parseX={parseX} yDomain={[0, yMax]}>
          <TooltipProvider>
            <StackedInner />
            <Legend items={stacked.map(s => ({ id: s.id, label: s.id }))} />
            <VisuallyHiddenLiveRegion />
          </TooltipProvider>
        </LineScalesProvider>
      </ChartRoot>
    );
  },
  name: 'Stacked Areas',
  parameters: { docs: { description: { story: 'Stacked area chart using stackSeries utility (simple cumulative stacking).' } } }
};

export const StackedPercent: Story = {
  render: () => {
    const series: AreaSeries[] = Array.from({ length: 4 }).map((_, si) => ({
      id: `p${si+1}`,
      data: Array.from({ length: 12 }).map((__, j) => ({ x: new Date(Date.now() - (11-j)*86400000), y: Math.round(5 + Math.random()*30) }))
    }));
    // Absolute stacking first
    const stackedAbs = stackSeries(series as any);
    // Clone shallow to avoid mutating original reference outside (normaliseStack mutates in place)
    const stacked = normaliseStack(stackedAbs.map(s => ({ ...s, stacked: s.stacked.map(d => ({ ...d })) })) as any);
    const parseX = (d: any) => d.x as Date;
    const margin = { left: 56, bottom: 48, right: 16, top: 12 };
    const PercentTooltipOverlay: React.FC = () => {
      const tooltip = useTooltipContext();
      const chart = useChartContext();
      if (!tooltip || !chart || !tooltip.focused) return null;
      const { focused } = tooltip;
      const { innerWidth, innerHeight } = chart;
      const clampX = Math.min(Math.max(focused.clientX, 0), innerWidth);
      const clampY = Math.min(Math.max(focused.clientY, 0), innerHeight);
      const bgX = clampX + 8;
      const bgY = clampY - 8;
      // Determine index by matching date
      const idx = stacked[0].stacked.findIndex(d => (d.x as any).getTime() === (focused.x as Date).getTime());
      const rows = stacked.map((s,i) => {
        const absSeg = stackedAbs[i].stacked[idx];
        const pctSeg = s.stacked[idx];
        if (!absSeg || !pctSeg) return `${s.id}: –`;
        const absVal = absSeg.y1 - absSeg.y0;
        const pctVal = (pctSeg.y1 - pctSeg.y0) * 100;
        return `${s.id}: ${absVal} (${pctVal.toFixed(0)}%)`;
      });
      const dateLabel = (focused.x as Date).toDateString();
      const content = [dateLabel, ...rows];
      const lineHeight = 16;
      const maxChars = content.reduce((m,s)=>Math.max(m,s.length),0);
      const width = Math.max(120, maxChars * 6.4 + 16);
      const height = lineHeight * content.length + 8;
      return (
        <g className="fdp-tooltip-layer" pointerEvents="none">
          <rect x={bgX} y={bgY - height} rx={4} ry={4} width={width} height={height} fill="#212b32" opacity={0.92} />
          {content.map((t,i) => (
            <text key={i} x={bgX + 8} y={bgY - height + 6 + lineHeight*(i+0.7)} fill="#fff" fontSize={12}>{t}</text>
          ))}
        </g>
      );
    };
    const PercentInner: React.FC = () => {
      const dims = useChartContext();
      const scaleCtx = useScaleContext();
      if (!dims || !scaleCtx) return null;
      return (
        <svg width={dims.width} height={dims.height} role="img">
          <g transform={`translate(${dims.margin.left},${dims.margin.top})`}>
            <GridLines axis="y" />
            {stacked.map((s, i) => (
              <AreaSeriesPrimitive
                key={s.id}
                series={{ id: s.id, data: s.stacked.map(d => ({ x: d.x, y: d.y1 - d.y0 })) }}
                stacked={s.stacked.map(d => ({ y0: d.y0, y1: d.y1 }))}
                seriesIndex={i}
                palette="categorical"
                parseX={parseX}
                smooth={false}
              />
            ))}
            <Axis type="x" />
            <Axis type="y" formatTick={(v:any)=>`${Math.round(v*100)}%`} />
            <PercentTooltipOverlay />
          </g>
        </svg>
      );
    };
    return (
      <ChartRoot width={760} height={320} ariaLabel="100 percent stacked area chart" margin={margin}>
        <LineScalesProvider series={stacked.map(s => ({ data: s.stacked.map(d => ({ x: d.x, y: d.y1 })) })) as any} parseX={parseX} yDomain={[0, 1]}>
          <TooltipProvider>
            <PercentInner />
            <Legend items={stacked.map(s => ({ id: s.id, label: s.id }))} />
            <VisuallyHiddenLiveRegion />
          </TooltipProvider>
        </LineScalesProvider>
      </ChartRoot>
    );
  },
  name: 'Stacked Areas (Percent)',
  parameters: { docs: { description: { story: '100% stacked area chart (each time slice sums to 100%). Using normaliseStack utility.' } } }
};

export const StackedToggle: Story = {
  render: () => {
    const [mode, setMode] = React.useState<'absolute' | 'percent'>('absolute');
    const series: AreaSeries[] = Array.from({ length: 3 }).map((_, si) => ({
      id: `t${si+1}`,
      data: Array.from({ length: 14 }).map((__, j) => ({ x: new Date(Date.now() - (13-j)*86400000), y: Math.round(5 + Math.random()*25) }))
    }));
    const stackedAbs = stackSeries(series as any);
    const totals = stackedAbs[0].stacked.map((_, i) => stackedAbs.reduce((sum,s) => sum + (s.stacked[i].y1 - s.stacked[i].y0), 0));
    const yMax = Math.max(...totals);
    const stackedPercent = normaliseStack(stackedAbs.map(s => ({ ...s, stacked: s.stacked.map(d => ({ ...d })) })) as any);
    const parseX = (d:any) => d.x as Date;
    const margin = { left: 56, bottom: 48, right: 16, top: 12 };
    const activeStack = mode === 'absolute' ? stackedAbs : stackedPercent;
    const yDomain = mode === 'absolute' ? [0, yMax] : [0,1];
    const ToggleTooltip: React.FC = () => {
      const tooltip = useTooltipContext();
      const chart = useChartContext();
      if (!tooltip || !chart || !tooltip.focused) return null;
      const { focused } = tooltip;
      const { innerWidth, innerHeight } = chart;
      const xDate = focused.x as Date;
      const idx = activeStack[0].stacked.findIndex(d => (d.x as any).getTime() === xDate.getTime());
      const clampX = Math.min(Math.max(focused.clientX, 0), innerWidth);
      const clampY = Math.min(Math.max(focused.clientY, 0), innerHeight);
      const bgX = clampX + 8; const bgY = clampY - 8;
      const absAtIndex = stackedAbs.map(s => s.stacked[idx]).map(seg => seg ? (seg.y1 - seg.y0) : 0);
      const totalAbs = absAtIndex.reduce((a,b)=>a+b,0) || 1;
      const rows = activeStack.map((s,i) => {
        const seg = s.stacked[idx];
        if (!seg) return `${s.id}: –`;
        const val = seg.y1 - seg.y0;
        if (mode === 'absolute') return `${s.id}: ${val}`;
        const absVal = absAtIndex[i];
        const pct = (val)*100; // val is already ratio in percent mode
        return `${s.id}: ${absVal} (${pct.toFixed(0)}%)`;
      });
      const content = [xDate.toDateString(), ...(mode==='absolute' ? rows : rows)];
      const lineHeight = 16;
      const maxChars = content.reduce((m,s)=>Math.max(m,s.length),0);
      const width = Math.max(120, maxChars * 6.2 + 16);
      const height = lineHeight * content.length + 8;
      return (
        <g className="fdp-tooltip-layer" pointerEvents="none">
          <rect x={bgX} y={bgY - height} rx={4} ry={4} width={width} height={height} fill="#212b32" opacity={0.9} />
          {content.map((t,i) => (
            <text key={i} x={bgX + 8} y={bgY - height + 6 + lineHeight*(i+0.7)} fill="#fff" fontSize={12}>{t}</text>
          ))}
        </g>
      );
    };
    const ToggleInner: React.FC = () => {
      const dims = useChartContext();
      const scaleCtx = useScaleContext();
      if (!dims || !scaleCtx) return null;
      return (
        <svg width={dims.width} height={dims.height} role="img">
          <g transform={`translate(${dims.margin.left},${dims.margin.top})`}>
            <GridLines axis="y" />
            {activeStack.map((s,i) => (
              <AreaSeriesPrimitive
                key={s.id}
                series={{ id: s.id, data: s.stacked.map(d => ({ x: d.x, y: d.y1 - d.y0 })) }}
                stacked={s.stacked.map(d => ({ y0: d.y0, y1: d.y1 }))}
                seriesIndex={i}
                palette="categorical"
                parseX={parseX}
                smooth={false}
              />
            ))}
            <Axis type="x" />
            <Axis type="y" formatTick={mode==='percent' ? (v:any)=>`${Math.round(v*100)}%` : undefined} />
            <ToggleTooltip />
          </g>
        </svg>
      );
    };
    return (
      <ChartRoot width={780} height={340} ariaLabel="Stacked area chart with percent toggle" margin={margin}>
        <div style={{ display:'flex', gap:8, padding:'4px 0 8px 56px' }}>
          <button type="button" onClick={()=>setMode('absolute')} disabled={mode==='absolute'} aria-pressed={mode==='absolute'}>Absolute</button>
          <button type="button" onClick={()=>setMode('percent')} disabled={mode==='percent'} aria-pressed={mode==='percent'}>Percent</button>
        </div>
        <LineScalesProvider series={activeStack.map(s => ({ data: s.stacked.map(d => ({ x: d.x, y: d.y1 })) })) as any} parseX={parseX} yDomain={yDomain as any}>
          <TooltipProvider>
            <ToggleInner />
            <Legend items={activeStack.map(s => ({ id: s.id, label: s.id }))} />
            <VisuallyHiddenLiveRegion />
          </TooltipProvider>
        </LineScalesProvider>
      </ChartRoot>
    );
  },
  name: 'Stacked Areas (Toggle Absolute/Percent)',
  parameters: { docs: { description: { story: 'Interactive story demonstrating toggle between absolute and 100% stacking modes with tooltips adapting.' } } }
};
