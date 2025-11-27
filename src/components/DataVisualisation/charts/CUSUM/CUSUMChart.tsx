import * as React from 'react';
import { ChartRoot, useChartContext } from '../../core/ChartRoot';
import ScaleContext, { useScaleContext, LineScalesProvider } from '../../core/ScaleContext';
import { createXTimeScale, createYLinearScale } from '../../utils/scales';
import Axis from '../Axis/Axis';
import GridLines from '../GridLines/GridLines';
import LineSeriesPrimitive from '../../series/LineSeriesPrimitive';
import TooltipOverlay from '../../primitives/TooltipOverlay';
import { TooltipProvider } from '../../core/TooltipContext';
import VisuallyHiddenLiveRegion from '../../primitives/VisuallyHiddenLiveRegion';
import AlertMarkers from '../../primitives/AlertMarkers';
import { pickSeriesColor } from '../../utils/colors';

export interface CUSUMDatum { x: Date | number | string; y: number; }
export interface CUSUMSeries { id: string; data: CUSUMDatum[]; label?: string; }

export interface CUSUMChartProps {
  series: CUSUMSeries; // single input series for v1
  targetMean?: number; // μ0; if omitted, computed from series
  sigma?: number;      // σ; if omitted, computed from series (sample std dev)
  k?: number;          // reference value; default 0.5 * sigma (half-sigma shift detection)
  h?: number;          // decision interval (alert threshold); default 5 * sigma
  sided?: 'two' | 'upper' | 'lower'; // which cusums to compute; default 'two'
  resetAtZero?: boolean; // apply max(0, S) for one-sided; default true
  higherIsBetter?: boolean; // affects colouring of alerts; default true
  height?: number;
  ariaLabel?: string;
}

function stats(values: number[]) {
  const n = values.length;
  const mean = n ? values.reduce((a, b) => a + b, 0) / n : 0;
  const variance = n > 1 ? values.reduce((a, b) => a + (b - mean) ** 2, 0) / (n - 1) : 0;
  const sd = Math.sqrt(variance);
  return { mean, sd };
}

type CusumResult = {
  sPlus: { x: Date; y: number }[];
  sMinus: { x: Date; y: number }[];
  alerts: { x: Date; type: 'upper' | 'lower' }[];
  k: number;
  h: number;
};

function computeCUSUM(series: CUSUMSeries, opts: Required<Pick<CUSUMChartProps, 'targetMean'|'sigma'|'k'|'h'|'sided'|'resetAtZero'>>) : CusumResult {
  const parseX = (v: Date | number | string) => (v instanceof Date ? v : new Date(v));
  const xs = series.data.map(d => parseX(d.x));
  const ys = series.data.map(d => d.y);
  const μ0 = opts.targetMean;
  // opts.sigma available if scaling required in future variants
  const k = opts.k;
  const h = opts.h;
  const reset = !!opts.resetAtZero;
  let sPlus = 0;
  let sMinus = 0;
  const outPlus: { x: Date; y: number }[] = [];
  const outMinus: { x: Date; y: number }[] = [];
  const alerts: { x: Date; type: 'upper' | 'lower' }[] = [];
  for (let i = 0; i < ys.length; i++) {
    const x = xs[i];
    const y = ys[i];
    const z = y - μ0; // deviation from target
    // Standard CUSUM (scaled in raw units); k and h are also in raw units
    if (opts.sided !== 'lower') {
      sPlus = (reset ? Math.max(0, sPlus + (z - k)) : sPlus + (z - k));
      outPlus.push({ x, y: sPlus });
      if (sPlus > h) alerts.push({ x, type: 'upper' });
    }
    if (opts.sided !== 'upper') {
      sMinus = (reset ? Math.max(0, sMinus + (-z - k)) : sMinus + (-z - k));
      outMinus.push({ x, y: -sMinus }); // plot negative direction for clarity
      if (sMinus > h) alerts.push({ x, type: 'lower' });
    }
  }
  return { sPlus: outPlus, sMinus: outMinus, alerts, k, h };
}

const InternalCUSUMChart: React.FC<CUSUMChartProps> = ({
  series,
  targetMean,
  sigma,
  k,
  h,
  sided = 'two',
  resetAtZero = true,
  higherIsBetter = true,
  ariaLabel = 'CUSUM chart',
}) => {
  const ctx = useChartContext();
  // useScaleContext is used later to decide whether to wrap with custom scales
  const parseX = React.useCallback((d: CUSUMDatum) => (d.x instanceof Date ? d.x : new Date(d.x)), []);
  const ys = React.useMemo(() => series.data.map(d => d.y), [series]);
  const baseStats = React.useMemo(() => stats(ys), [ys]);
  const μ0 = targetMean ?? baseStats.mean;
  const σ = sigma ?? (baseStats.sd || 1);
  const _k = k ?? 0.5 * σ;  // half-sigma shift sensitivity by default
  const _h = h ?? 5 * σ;    // typical starting point; tune per use case

  const cusum = React.useMemo(() => computeCUSUM(series, {
    targetMean: μ0,
    sigma: σ,
    k: _k,
    h: _h,
    sided,
    resetAtZero,
  }), [series, μ0, σ, _k, _h, sided, resetAtZero]);

  // Scales over cusum values
  const allCusumPoints = React.useMemo(() => [...cusum.sPlus, ...cusum.sMinus], [cusum]);
  const xScale = React.useMemo(() => {
    if (!ctx) return null as any;
    const points = series.data.map(d => ({ x: parseX(d) } as any));
    return createXTimeScale(points, (d: any) => d.x, [0, ctx.innerWidth]);
  }, [ctx, series, parseX]);
  const yScale = React.useMemo(() => {
    if (!ctx) return null as any;
    return createYLinearScale(allCusumPoints as any, (d: any) => d.y, [ctx.innerHeight, 0]);
  }, [ctx, allCusumPoints]);

  const colorPlus = pickSeriesColor(0);
  const colorMinus = pickSeriesColor(1);
  const markers = cusum.alerts.map(a => ({
    x: series.data.find(d => (d.x instanceof Date ? d.x : new Date(d.x)).getTime() === a.x.getTime())?.x ?? a.x,
    label: a.type === 'upper' ? 'CUSUM upper alarm' : 'CUSUM lower alarm',
    status: a.type === (higherIsBetter ? 'upper' : 'lower') ? 'warning' as const : 'info' as const,
  }));

  const content = (
    <TooltipProvider>
      <div className="fdp-cusum-chart" role="group" aria-label={ariaLabel}>
        <svg width={ctx?.width ?? 0} height={ctx?.height ?? 0} role="img">
          <g transform={`translate(${ctx?.margin.left ?? 0},${ctx?.margin.top ?? 0})`}>
            <Axis type="x" />
            <Axis type="y" />
            <GridLines axis="y" />
            {/* Decision interval guides */}
            <g aria-hidden>
              <line x1={0} x2={ctx?.innerWidth ?? 0} y1={yScale(_h)} y2={yScale(_h)} stroke="var(--nhs-fdp-color-grey-4,#aeb7bd)" strokeDasharray="6 4" />
              <line x1={0} x2={ctx?.innerWidth ?? 0} y1={yScale(-_h)} y2={yScale(-_h)} stroke="var(--nhs-fdp-color-grey-4,#aeb7bd)" strokeDasharray="6 4" />
            </g>
            {/* CUSUM lines */}
            {sided !== 'lower' && (
              <LineSeriesPrimitive
                series={{ id: 'CUSUM+', data: cusum.sPlus.map(p => ({ x: p.x, y: p.y })) } as any}
                seriesIndex={0}
                palette="categorical"
                showPoints={false}
                focusablePoints={false}
                focusIndex={-1}
                parseX={(d) => (d.x instanceof Date ? d.x : new Date(d.x))}
                strokeWidth={2}
                colors={[colorPlus]}
              />
            )}
            {sided !== 'upper' && (
              <LineSeriesPrimitive
                series={{ id: 'CUSUM-', data: cusum.sMinus.map(p => ({ x: p.x, y: p.y })) } as any}
                seriesIndex={1}
                palette="categorical"
                showPoints={false}
                focusablePoints={false}
                focusIndex={-1}
                parseX={(d) => (d.x instanceof Date ? d.x : new Date(d.x))}
                strokeWidth={2}
                colors={[colorMinus]}
              />
            )}
            {markers.length > 0 && (
              <AlertMarkers points={markers as any} shape="diamond" size={4} />
            )}
            <TooltipOverlay />
          </g>
        </svg>
        <VisuallyHiddenLiveRegion />
      </div>
    </TooltipProvider>
  );

  // If scales exist in context, just render content
  if (useScaleContext()) return content;
  if (!xScale || !yScale) return content;
  const value = { xScale, yScale, getXTicks: (c = 6) => xScale.ticks(c), getYTicks: (c = 5) => yScale.ticks(c) } as any;
  return <ScaleContext.Provider value={value}>{content}</ScaleContext.Provider>;
};

export const CUSUMChart: React.FC<CUSUMChartProps> = (props) => {
  const ctx = useChartContext();
  if (ctx) {
    return useScaleContext() ? (
      <InternalCUSUMChart {...props} />
    ) : (
      <LineScalesProvider series={[props.series] as any} innerWidth={ctx.innerWidth} innerHeight={ctx.innerHeight}>
        <InternalCUSUMChart {...props} />
      </LineScalesProvider>
    );
  }
  return (
    <ChartRoot height={props.height ?? 240} ariaLabel={props.ariaLabel} margin={{ bottom: 48, left: 56, right: 16, top: 12 }}>
      <InternalCUSUMChart {...props} />
    </ChartRoot>
  );
};

export default CUSUMChart;
