import * as React from 'react';
import { createLinePath } from '../utils/scales';
import { pickSeriesColor, pickRegionColor } from '../utils/colors';
import { useScaleContext } from '../core/ScaleContext';
import { useVisibility } from '../core/VisibilityContext';
import { useTooltipContext } from '../core/TooltipContext';
import { area as d3Area, curveMonotoneX } from 'd3-shape';

export interface AreaDatum { x: Date | string | number; y: number; }
export interface AreaSeries { id: string; data: AreaDatum[]; color?: string; label?: string; }

export interface AreaSeriesPrimitiveProps {
  series: AreaSeries;
  seriesIndex: number;
  palette: 'categorical' | 'region';
  focusablePoints?: boolean; // reserved for future parity with line points
  focusIndex?: number; // reserved for future keyboard focus impl
  parseX: (d: AreaDatum) => Date;
  /** If true, draws only the area fill (no outline). Default renders both. */
  areaOnly?: boolean;
  /** Hidden presentation mirrors LineSeriesPrimitive behaviour. */
  visibilityMode?: 'remove' | 'fade';
  /** Optional baseline (y value) for stacked / diverging future use. Defaults to 0. */
  baselineY?: number;
  /** Enable curve smoothing (monotoneX). Defaults to true. */
  smooth?: boolean;
}

/** Renders an area under a line (baseline -> series y). Provides tooltip registration like LineSeriesPrimitive. */
export const AreaSeriesPrimitive: React.FC<AreaSeriesPrimitiveProps> = ({
  series,
  seriesIndex,
  palette,
  parseX,
  areaOnly = false,
  visibilityMode = 'remove',
  baselineY = 0,
  smooth = true
}) => {
  const scaleCtx = useScaleContext();
  if (!scaleCtx) return null;
  const { xScale, yScale } = scaleCtx;
  const visibility = useVisibility();
  const isHidden = visibility?.isHidden(series.id) ?? false;
  const faded = isHidden && visibilityMode === 'fade';
  if (isHidden && visibilityMode === 'remove') return null;
  const tooltip = useTooltipContext();

  React.useEffect(() => {
    if (!tooltip) return;
    const normalized = series.data.map(d => ({ x: parseX(d), y: d.y }));
    tooltip.registerSeries(series.id, normalized);
    return () => tooltip.unregisterSeries(series.id);
  }, [tooltip, series.id, series.data, parseX]);

  const color = series.color || (palette === 'region' ? pickRegionColor(series.id, seriesIndex) : pickSeriesColor(seriesIndex));

  // Build area + optional line with smoothing toggle.
  const linePath = React.useMemo(() => createLinePath(series.data, d => xScale(parseX(d)), d => yScale(d.y), { smooth }), [series.data, xScale, yScale, parseX, smooth]);
  const areaPath = React.useMemo(() => {
    const gen = d3Area<AreaDatum>()
      .x(d => xScale(parseX(d)))
      .y0(() => yScale(baselineY))
      .y1(d => yScale(d.y));
    if (smooth) gen.curve(curveMonotoneX);
    return gen(series.data) || '';
  }, [series.data, xScale, yScale, parseX, baselineY, smooth]);

  return (
    <g className="fdp-area-series" data-series={series.id} opacity={faded ? 0.25 : 1} aria-hidden={faded ? true : undefined}>
      <path d={areaPath} fill={color} fillOpacity={0.25} stroke="none" />
      {!areaOnly && <path d={linePath} fill="none" stroke={color} strokeWidth={1} />}
    </g>
  );
};

export default AreaSeriesPrimitive;
