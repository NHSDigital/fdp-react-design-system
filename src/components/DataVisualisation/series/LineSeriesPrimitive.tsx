import * as React from 'react';
import { createLinePath } from '../utils/scales';
import { pickSeriesColor, pickRegionColor, pickSeriesStroke, pickRegionStroke } from '../utils/colors';
import { useScaleContext } from '../core/ScaleContext';
import { useVisibility } from '../core/VisibilityContext';
import { useTooltipContext } from '../core/TooltipContext';

export interface LineDatum { x: Date | string | number; y: number; }
export interface LineSeries { id: string; data: LineDatum[]; color?: string; label?: string; }

export interface LineSeriesPrimitiveProps {
  series: LineSeries;
  seriesIndex: number;
  palette: 'categorical' | 'region';
  showPoints: boolean;
  focusablePoints: boolean;
  focusIndex: number;
  /** Provide parseX to avoid reallocation across series */
  parseX: (d: LineDatum) => Date;
  /** Presentation for hidden series (inherited via LineChart). */
  visibilityMode?: 'remove' | 'fade';
  /** Custom stroke width for the series line (defaults to 1). */
  strokeWidth?: number;
  /** Enable curve smoothing (monotoneX). Defaults to true. */
  smooth?: boolean;
}

/** Low-level renderer for a single line series (no axes, assumes ScaleContext present). */
export const LineSeriesPrimitive: React.FC<LineSeriesPrimitiveProps> = ({
  series,
  seriesIndex,
  palette,
  showPoints,
  focusablePoints,
  focusIndex,
  parseX,
  visibilityMode = 'remove',
  strokeWidth = 1,
  smooth = true
}) => {
  const scaleCtx = useScaleContext();
  if (!scaleCtx) return null; // safeguard
  const { xScale, yScale } = scaleCtx;
  const visibility = useVisibility();
  const isHidden = visibility?.isHidden(series.id) ?? false;
  const faded = isHidden && visibilityMode === 'fade';
  if (isHidden && visibilityMode === 'remove') {
    return null;
  }
  const tooltip = useTooltipContext();

  // Register series with tooltip context for nearest-point computation
  React.useEffect(() => {
    if (!tooltip) return;
    const normalized = series.data.map(d => ({ x: parseX(d), y: d.y }));
    tooltip.registerSeries(series.id, normalized);
    return () => tooltip.unregisterSeries(series.id);
  }, [tooltip, series.id, series.data, parseX]);
  const path = React.useMemo(() => createLinePath(series.data, d => xScale(parseX(d)), d => yScale(d.y), { smooth }), [series.data, xScale, yScale, parseX, smooth]);
  const color = series.color || (palette === 'region' ? pickRegionColor(series.id, seriesIndex) : pickSeriesColor(seriesIndex));
  const stroke = palette === 'region' ? pickRegionStroke(series.id, seriesIndex) : pickSeriesStroke(seriesIndex);

  return (
    <g className="fdp-line-series" data-series={series.id} opacity={faded ? 0.25 : 1} aria-hidden={faded ? true : undefined}>
  <path d={path} fill="none" stroke={color} strokeWidth={strokeWidth} role="presentation" />
      {showPoints && series.data.map((d, di) => {
        const cx = xScale(parseX(d));
        const cy = yScale(d.y);
        const tabIndex = focusablePoints ? 0 : -1;
        const isFocusedPoint = !faded && ((focusablePoints && di === focusIndex) || (tooltip?.focused?.seriesId === series.id && tooltip.focused.index === di));
        const handleEnter = () => {
          if (tooltip && !faded) {
            tooltip.setFocused({ seriesId: series.id, index: di, x: parseX(d), y: d.y, clientX: cx, clientY: cy });
          }
        };
        const handleLeave = () => {
          if (tooltip && tooltip.focused?.seriesId === series.id && tooltip.focused.index === di) tooltip.clear();
        };
        return (
          <circle
            key={di}
            cx={cx}
            cy={cy}
            r={isFocusedPoint ? 5 : 3.5}
            stroke={isFocusedPoint ? 'var(--nhs-fdp-color-primary-yellow, #ffeb3b)' : stroke}
            strokeWidth={isFocusedPoint ? 2 : 1}
            fill={color}
            className="fdp-line-point"
            tabIndex={faded ? -1 : tabIndex}
            aria-label={`${series.label || series.id} ${parseX(d).toDateString()} value ${d.y}`}
            data-series={series.id}
            data-index={di}
            onMouseEnter={handleEnter}
            onFocus={handleEnter}
            onMouseLeave={handleLeave}
            onBlur={handleLeave}
          />
        );
      })}
    </g>
  );
};

export default LineSeriesPrimitive;
