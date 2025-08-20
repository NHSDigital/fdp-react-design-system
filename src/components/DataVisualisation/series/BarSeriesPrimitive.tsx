import * as React from 'react';
import { useScaleContext } from '../core/ScaleContext';
import { useVisibility } from '../core/VisibilityContext';
import { useTooltipContext } from '../core/TooltipContext';
import { useChartContext } from '../core/ChartRoot';
import { pickSeriesColor, pickRegionColor, pickSeriesStroke, pickRegionStroke } from '../utils/colors';

export interface BarDatum { x: Date | string | number; y: number; }
export interface BarSeries { id: string; data: BarDatum[]; color?: string; label?: string; barWidth?: number; }

export interface BarSeriesPrimitiveProps {
  series: BarSeries;
  seriesIndex: number;
  seriesCount: number; // total number of bar series rendered in the group (for width partitioning)
  palette: 'categorical' | 'region';
  /** Provide parseX so callers can reuse memoised function across series */
  parseX: (d: BarDatum) => Date;
  /** All series in the grouped chart (used for global x step inference on continuous scales to avoid overlap). */
  allSeries?: BarSeries[];
  /** Focusable bars (keyboard tab). For large sets you may disable. */
  focusable?: boolean;
  /** Width fill factor inside inferred step (0..1) */
  widthFactor?: number;
  /** Gap (px) between grouped bars (apportioned inside step) */
  groupGap?: number;
  /** Explicit per-bar width override (px). If provided, inference is skipped (continuous scales). For band scales this is clamped to available slot. */
  barWidth?: number;
  /** Adaptive mode: dynamically fill available step width up to an occupancy factor, ignoring widthFactor when continuous. */
  adaptive?: boolean;
  /** Fraction (0-1] of the step (distance to next category midpoint) to occupy as total group width in adaptive mode. Default 0.9 */
  adaptiveGroupOccupancy?: number;
  /** Presentation for hidden series (consistency with line). */
  visibilityMode?: 'remove' | 'fade';
  /** Color assignment mode: by entire series (default) or per category (datum index within a single series). */
  colorMode?: 'series' | 'category';
}

/** Low-level primitive for vertical bars (time / ordinal X via ScaleContext time scale). */
export const BarSeriesPrimitive: React.FC<BarSeriesPrimitiveProps> = ({
  series,
  seriesIndex,
  seriesCount,
  palette,
  parseX,
  focusable = true,
  widthFactor = 0.8,
  groupGap = 2,
  barWidth,
  adaptive = false,
  adaptiveGroupOccupancy = 0.9,
  visibilityMode = 'remove'
  , colorMode = 'series'
  , allSeries
}) => {
  const scaleCtx = useScaleContext();
  const chartDims = useChartContext();
  if (!scaleCtx || !chartDims) return null;
  const { xScale, yScale } = scaleCtx;
  const visibility = useVisibility();
  const isHidden = visibility?.isHidden(series.id) ?? false;
  const faded = isHidden && visibilityMode === 'fade';
  if (isHidden && visibilityMode === 'remove') return null;
  const tooltip = useTooltipContext();

  // Register for tooltip nearest lookup (treat bar top as focus coordinate)
  React.useEffect(() => {
    if (!tooltip) return;
    const normalized = series.data.map(d => ({ x: parseX(d), y: d.y }));
    tooltip.registerSeries(series.id, normalized);
    return () => tooltip.unregisterSeries(series.id);
  }, [tooltip, series.id, series.data, parseX]);

  // Support band scale (categorical) if present, else fall back to pixel inference on continuous scale
  const isBandScale = typeof (xScale as any).bandwidth === 'function';
  const bandwidth = isBandScale ? (xScale as any).bandwidth() : undefined;
  const inferredPixelWidth = React.useMemo(() => {
    if (bandwidth != null) return bandwidth; // band scale already encodes step
    // Use global x positions across all series if provided for consistent grouping width
    const sourceSeries = allSeries && allSeries.length ? allSeries : [series];
    const posSet: number[] = [];
    sourceSeries.forEach(s => {
      s.data.forEach(d => {
        const v = xScale(parseX(d));
        if (Number.isFinite(v)) posSet.push(v);
      });
    });
    const pxPositions = posSet.sort((a,b)=>a-b);
    if (pxPositions.length <= 1) return 40; // fallback width for single bar
    const diffs: number[] = [];
    for (let i=1;i<pxPositions.length;i++) diffs.push(pxPositions[i]-pxPositions[i-1]);
    diffs.sort((a,b)=>a-b);
    const median = diffs[Math.floor(diffs.length/2)] || 40;
    return median * widthFactor;
  }, [series.data, allSeries, xScale, parseX, widthFactor, bandwidth]);

  // Group width = total width occupied by all bars in a group plus base single bar width candidate
    const { groupTotalWidth, basePerBar } = React.useMemo(() => {
    // Band scale: derived from bandwidth then optional override (clamped)
    if (isBandScale) {
      const bw = inferredPixelWidth; // bandwidth
      const autoPerBar = Math.max(1, (bw - groupGap * (seriesCount - 1)) / seriesCount);
      const explicit = series.barWidth ?? barWidth;
      let finalPerBar = explicit ? Math.min(explicit, bw) : autoPerBar;
      if (adaptive) {
        const targetGroup = bw * Math.min(1, Math.max(0.05, adaptiveGroupOccupancy));
        const adaptedPerBar = Math.max(1, (targetGroup - groupGap * (seriesCount - 1)) / seriesCount);
        finalPerBar = explicit ? Math.min(finalPerBar, adaptedPerBar) : adaptedPerBar;
      }
  const total = finalPerBar * seriesCount + groupGap * (seriesCount - 1);
  return { groupTotalWidth: total, basePerBar: finalPerBar };
    }
    // Continuous scale: explicit override first
    const explicit = series.barWidth ?? barWidth;
    // Compute base auto width from inferredPixelWidth (median diff * widthFactor already baked into inferredPixelWidth)
    const maxAutoPer = Math.max(1, (inferredPixelWidth - groupGap * (seriesCount - 1)) / seriesCount);
    if (adaptive) {
      // Recompute step using nearest neighbor distance across global positions for tighter occupancy
      const sourceSeries = allSeries && allSeries.length ? allSeries : [series];
      const positions: number[] = [];
      sourceSeries.forEach(s => s.data.forEach(d => {
        const v = xScale(parseX(d)); if (Number.isFinite(v)) positions.push(v);
      }));
      positions.sort((a,b)=>a-b);
      const diffs: number[] = [];
      for (let i=1;i<positions.length;i++) diffs.push(positions[i]-positions[i-1]);
      diffs.sort((a,b)=>a-b);
      const step = diffs[Math.floor(diffs.length/2)] || inferredPixelWidth;
      const targetGroup = step * Math.min(1, Math.max(0.05, adaptiveGroupOccupancy));
      const adaptivePer = Math.max(1, (targetGroup - groupGap * (seriesCount - 1)) / seriesCount);
      const finalPer = explicit ? Math.min(explicit, adaptivePer) : adaptivePer;
      const total = finalPer * seriesCount + groupGap * (seriesCount - 1);
        return { groupTotalWidth: total, basePerBar: finalPer };
    }
    if (explicit) {
      const finalPer = Math.min(explicit, maxAutoPer);
      const total = finalPer * seriesCount + groupGap * (seriesCount - 1);
        return { groupTotalWidth: total, basePerBar: finalPer };
    }
    const total = maxAutoPer * seriesCount + groupGap * (seriesCount - 1);
      return { groupTotalWidth: total, basePerBar: maxAutoPer };
  }, [isBandScale, inferredPixelWidth, groupGap, seriesCount, barWidth, series.barWidth, adaptive, adaptiveGroupOccupancy, allSeries, xScale, parseX]);
  // Precompute global centers for continuous scale once
  const globalCenters = React.useMemo(() => {
    if (isBandScale) return [] as number[];
    const pts: number[] = [];
    const src = allSeries && allSeries.length ? allSeries : [series];
    src.forEach(s => s.data.forEach(pt => {
      const v = xScale(parseX(pt));
      if (Number.isFinite(v)) pts.push(v);
    }));
    pts.sort((a,b)=>a-b);
    return Array.from(new Set(pts));
  }, [isBandScale, allSeries, series, xScale, parseX]);
  // Compute uniform bar width for continuous scale (cap by smallest available span among groups)
  const uniformContinuousBarWidth = React.useMemo(() => {
    if (isBandScale) return undefined;
    if (!globalCenters.length) return basePerBar;
    // Compute steps between centers
    const steps: number[] = [];
    for (let i=1;i<globalCenters.length;i++) steps.push(globalCenters[i]-globalCenters[i-1]);
    steps.sort((a,b)=>a-b);
    const medianStep = steps.length ? steps[Math.floor(steps.length/2)] : basePerBar * seriesCount + groupGap * (seriesCount - 1);
    // Pseudo neighbours for edges so outer spans resemble internal spacing
    const pseudoFirstPrev = globalCenters[0] - medianStep;
    const pseudoLastNext = globalCenters[globalCenters.length-1] + medianStep;
    const localSpans: number[] = [];
    for (let i=0;i<globalCenters.length;i++) {
      const c = globalCenters[i];
      const prev = i>0 ? globalCenters[i-1] : pseudoFirstPrev;
      const next = i<globalCenters.length-1 ? globalCenters[i+1] : pseudoLastNext;
      const leftBound = (prev + c)/2;
      const rightBound = (c + next)/2;
      localSpans.push(Math.max(1, rightBound - leftBound));
    }
    const minLocalSpan = Math.min(...localSpans);
    // Target group width tries to occupy occupancy * medianStep, but cannot exceed any local span
    const desiredGroupWidth = medianStep * Math.min(1, Math.max(0.05, adaptiveGroupOccupancy));
    const finalGroupWidth = Math.min(desiredGroupWidth, minLocalSpan - 0.5, groupTotalWidth);
    const per = Math.max(1, (finalGroupWidth - groupGap * (seriesCount - 1)) / seriesCount);
    return Math.min(per, basePerBar);
  }, [isBandScale, globalCenters, basePerBar, groupTotalWidth, seriesCount, groupGap, adaptiveGroupOccupancy]);
  // innerWidth not needed after uniform span logic (bounds derived from midpoints)

  const baseSeriesColor = series.color || (palette === 'region' ? pickRegionColor(series.id, seriesIndex) : pickSeriesColor(seriesIndex));
  const baseSeriesStroke = palette === 'region' ? pickRegionStroke(series.id, seriesIndex) : pickSeriesStroke(seriesIndex);
  const baselineY = Number.isFinite(yScale(0)) ? yScale(0) : yScale.range()[0];

  return (
    <g className="fdp-bar-series" data-series={series.id} opacity={faded ? 0.25 : 1} aria-hidden={faded ? true : undefined}>
      {series.data.map((d, di) => {
        const rawX = parseX(d);
        const xPos = isBandScale ? xScale(d.x as any) : xScale(rawX);
        // For band scale we can position directly within the band; else group logic with inferred group width
        let barX: number;
        let barWidth: number;
        if (isBandScale) {
          const groupWidth = inferredPixelWidth; // == bandwidth
            const available = groupWidth - (seriesCount - 1) * groupGap;
            barWidth = Math.max(1, available / seriesCount);
            barX = xPos + seriesIndex * (barWidth + groupGap);
        } else {
          const xCenter = xPos; // continuous scale center for group
          const centerIndex = globalCenters.indexOf(xCenter);
          // Recompute bounds using pseudo spacing like in uniform width calc for consistent edge gaps
          let prevCenter = centerIndex > 0 ? globalCenters[centerIndex - 1] : (globalCenters[0] - (uniformContinuousBarWidth! * seriesCount + groupGap * (seriesCount - 1)) / Math.max(0.05, adaptiveGroupOccupancy));
          let nextCenter = centerIndex < globalCenters.length -1 ? globalCenters[centerIndex + 1] : (globalCenters[globalCenters.length -1] + (uniformContinuousBarWidth! * seriesCount + groupGap * (seriesCount - 1)) / Math.max(0.05, adaptiveGroupOccupancy));
          const leftBound = (prevCenter + xCenter)/2;
          const rightBound = (xCenter + nextCenter)/2;
          const per = uniformContinuousBarWidth ?? basePerBar;
          const totalGroup = per * seriesCount + groupGap * (seriesCount - 1);
          let groupLeft = xCenter - totalGroup / 2;
          if (groupLeft < leftBound) groupLeft = leftBound;
          if (groupLeft + totalGroup > rightBound) groupLeft = Math.max(leftBound, rightBound - totalGroup);
          barX = groupLeft + seriesIndex * (per + groupGap);
          barWidth = per;
        }
        const barCenterX = barX + (barWidth / 2);
        const valueY = yScale(d.y);
        const y = Math.min(baselineY, valueY);
        const height = Math.abs(baselineY - valueY);
        const isFocused = !faded && tooltip?.focused?.seriesId === series.id && tooltip.focused.index === di;
        const onEnter = () => {
          if (!tooltip || faded) return;
          tooltip.setFocused({ seriesId: series.id, index: di, x: rawX as any, y: d.y, clientX: barCenterX, clientY: valueY });
        };
        const onLeave = () => {
          if (tooltip?.focused?.seriesId === series.id && tooltip.focused.index === di) tooltip.clear();
        };
        return (
          <rect
            key={di}
            x={barX}
            y={y}
            width={barWidth}
            height={height || 1} // ensure minimal visibility for zero-height
            fill={colorMode === 'category' ? (palette === 'region' ? pickRegionColor(String(d.x), di) : pickSeriesColor(di)) : baseSeriesColor}
            stroke={isFocused ? 'var(--nhs-fdp-color-primary-yellow, #ffeb3b)' : (colorMode === 'category' ? (palette === 'region' ? pickRegionStroke(String(d.x), di) : pickSeriesStroke(di)) : baseSeriesStroke)}
            strokeWidth={isFocused ? 2 : 1}
            className="fdp-bar"
            tabIndex={faded || !focusable ? -1 : 0}
            role="graphics-symbol"
            aria-label={`${series.label || series.id} ${rawX instanceof Date ? rawX.toDateString() : rawX} value ${d.y}`}
            onMouseEnter={onEnter}
            onFocus={onEnter}
            onMouseLeave={onLeave}
            onBlur={onLeave}
          />
        );
      })}
    </g>
  );
};

export default BarSeriesPrimitive;
