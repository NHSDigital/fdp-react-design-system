import * as React from 'react';
import { createXTimeScale, createYLinearScale } from '../utils/scales';
import { useChartContext } from './ChartRoot';

// Provides d3 x/y scales + tick helpers for time-series line charts (initial scope).
export interface ScaleContextValue {
  xScale: any; // d3 ScaleTime
  yScale: any; // d3 ScaleLinear
  getXTicks: (count?: number) => Date[];
  getYTicks: (count?: number) => number[];
}

const ScaleContext = React.createContext<ScaleContextValue | null>(null);
export const useScaleContext = () => React.useContext(ScaleContext);

export interface LineScalesProviderProps<Datum extends { x: any; y: number }> {
  series: { data: Datum[] }[];
  /** Explicit inner width; if omitted, derived from ChartRoot context (if available) */
  innerWidth?: number; // width excluding margins
  /** Explicit inner height; if omitted, derived from ChartRoot context (if available) */
  innerHeight?: number; // height excluding margins
  parseX?: (d: Datum) => Date; // custom accessor override
  children: React.ReactNode;
  xTickCount?: number; // preferred default counts
  yTickCount?: number;
}

export const LineScalesProvider = <Datum extends { x: any; y: number }>({
  series,
  innerWidth: innerWidthProp,
  innerHeight: innerHeightProp,
  parseX: parseXProp,
  children,
  xTickCount = 6,
  yTickCount = 5
}: LineScalesProviderProps<Datum>) => {
  const chartDims = useChartContext();
  // Prefer explicit values; fallback to chart context; final fallback 0 (will update on re-measure)
  const innerWidth = innerWidthProp ?? chartDims?.innerWidth ?? 0;
  const innerHeight = innerHeightProp ?? chartDims?.innerHeight ?? 0;
  const allData = React.useMemo(() => series.flatMap(s => s.data), [series]);
  const parseX = React.useCallback((d: Datum) => {
    if (parseXProp) return parseXProp(d);
    const raw = (d as any).x;
    return raw instanceof Date ? raw : new Date(raw);
  }, [parseXProp]);

  const xScale = React.useMemo(() => createXTimeScale(allData, parseX as any, [0, innerWidth]), [allData, parseX, innerWidth]);
  const yScale = React.useMemo(() => createYLinearScale(allData, (d: any) => d.y, [innerHeight, 0]), [allData, innerHeight]);

  const value: ScaleContextValue = React.useMemo(() => ({
    xScale,
    yScale,
    getXTicks: (count = xTickCount) => xScale.ticks(count),
    getYTicks: (count = yTickCount) => yScale.ticks(count)
  }), [xScale, yScale, xTickCount, yTickCount]);

  return <ScaleContext.Provider value={value}>{children}</ScaleContext.Provider>;
};

export default ScaleContext;
