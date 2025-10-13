import * as React from "react";
import { ChartRoot, useChartContext } from "../../core/ChartRoot";
import ScaleContext, { useScaleContext } from "../../core/ScaleContext";
import Axis from "../Axis/Axis";
import GridLines from "../GridLines/GridLines";
import TooltipOverlay from "../../primitives/TooltipOverlay";
import { TooltipProvider } from "../../core/TooltipContext";
import VisuallyHiddenLiveRegion from "../../primitives/VisuallyHiddenLiveRegion";
import { createXTimeScale } from "../../utils/scales";
import { getCategoricalPalette } from "../../utils/colors";

export type Interval = {
  id: string;
  label?: string;
  start: Date | number | string;
  end?: Date | number | string;
  group?: string;
  category?: string;
  href?: string;
  color?: string;
  ariaLabel?: string;
  meta?: Record<string, unknown>;
};

export interface PriestleyTimelineProps {
  data: Interval[];
  xDomain?: [Date | number | string, Date | number | string];
  rowHeight?: number; // px
  rowGap?: number; // px
  barRadius?: number; // px
  showNowMarker?: boolean;
  now?: Date | number | string;
  gridLines?: boolean;
  ariaLabel?: string;
  getBarLabel?: (d: Interval) => string;
  onBarClick?: (d: Interval) => void;
  onBarKeyDown?: (e: React.KeyboardEvent, d: Interval) => void;
  height?: number; // fallback when ChartRoot not in context
  showInlineLabels?: boolean; // render simple labels inside bars
  labelColor?: string; // colour for inline labels
  enableKeyboardNav?: boolean; // roving tabindex + arrow navigation (default true)
}

// Utility: normalise to timestamp
const toTs = (v: Date | number | string | undefined): number | undefined =>
  v === undefined ? undefined : v instanceof Date ? v.getTime() : new Date(v).getTime();

type Lane = { end: number };

// Greedy lane packing by start time (stable): assigns a vertical lane index to each interval
function packIntervals(intervals: Interval[]): number[] {
  const items = intervals
    .map((d, i) => ({ i, start: toTs(d.start)!, end: toTs(d.end) ?? Number.POSITIVE_INFINITY }))
    .sort((a, b) => a.start - b.start || a.i - b.i);
  const lanes: Lane[] = [];
  const laneByIndex: number[] = new Array(intervals.length).fill(0);
  for (const it of items) {
    let placed = false;
    for (let li = 0; li < lanes.length; li++) {
      if (it.start >= lanes[li].end) {
        lanes[li].end = it.end;
        laneByIndex[it.i] = li;
        placed = true;
        break;
      }
    }
    if (!placed) {
      lanes.push({ end: it.end });
      laneByIndex[it.i] = lanes.length - 1;
    }
  }
  return laneByIndex;
}

const OpenCap: React.FC<{ x: number; y: number; h: number }> = ({ x, y, h }) => (
  <g aria-hidden>
    <line x1={x - 4} x2={x} y1={y + 1} y2={y + 1} stroke="#4c6272" strokeWidth={1} />
    <line x1={x - 4} x2={x} y1={y + h - 2} y2={y + h - 2} stroke="#4c6272" strokeWidth={1} />
  </g>
);

const PriestleyTimelineInner: React.FC<PriestleyTimelineProps> = ({
  data,
  rowHeight = 24,
  rowGap = 4,
  barRadius = 2,
  // future: support alternate stacking strategies (currently greedy pack)
  showNowMarker = true,
  now,
  gridLines = true,
  ariaLabel = "Priestley timeline",
  getBarLabel,
  onBarClick,
  onBarKeyDown,
  showInlineLabels = false,
  labelColor,
  enableKeyboardNav = true,
}) => {
  const ctx = useChartContext();
  const height = ctx?.innerHeight ?? 0;
  const scaleCtx = useScaleContext();
  const xScale = (scaleCtx?.xScale as any) ?? null;
  const [d0, d1] = (xScale?.domain?.() ?? []) as [Date, Date];
  const domain: [number, number] = d0 && d1 ? [d0.getTime(), d1.getTime()] : [Date.now() - 86400000 * 30, Date.now()];
  const rectRefs = React.useRef<Array<SVGRectElement | null>>([]);
  const [focusedIndex, setFocusedIndex] = React.useState<number>(0);

  const laneIndices = React.useMemo(() => packIntervals(data), [data]);
  const laneCount = React.useMemo(
    () => (laneIndices.length ? Math.max(...laneIndices) + 1 : 0),
    [laneIndices]
  );
  const starts = React.useMemo(() => data.map((d) => toTs(d.start) || 0), [data]);
  const orderByTime = React.useMemo(() =>
    starts
      .map((s, i) => ({ i, s }))
      .sort((a, b) => a.s - b.s || a.i - b.i)
      .map((o) => o.i),
  [starts]);
  const laneBuckets = React.useMemo(() => {
    const buckets = new Map<number, number[]>();
    for (let i = 0; i < laneIndices.length; i++) {
      const lane = laneIndices[i] ?? 0;
      if (!buckets.has(lane)) buckets.set(lane, []);
      buckets.get(lane)!.push(i);
    }
    // sort each bucket by start time
    for (const [lane, arr] of buckets) {
      arr.sort((a, b) => (starts[a] - starts[b]) || (a - b));
      buckets.set(lane, arr);
    }
    return buckets;
  }, [laneIndices, starts]);
  const focusBar = (idx: number) => {
    setFocusedIndex(idx);
    const el = rectRefs.current[idx];
    if (el) {
      // Focus on next tick to ensure tabIndex updates
      requestAnimationFrame(() => el.focus());
    }
  };
  const moveByTime = (current: number, dir: -1 | 1) => {
    const pos = orderByTime.indexOf(current);
    if (pos === -1) return;
    const nextPos = Math.max(0, Math.min(orderByTime.length - 1, pos + dir));
    focusBar(orderByTime[nextPos]);
  };
  const moveWithinLane = (current: number, dir: -1 | 1) => {
    const lane = laneIndices[current] ?? 0;
    const arr = laneBuckets.get(lane) || [];
    const p = arr.indexOf(current);
    if (p === -1) return;
    const nextP = Math.max(0, Math.min(arr.length - 1, p + dir));
    focusBar(arr[nextP]);
  };
  const totalRowsPx = laneCount * rowHeight + Math.max(0, laneCount - 1) * rowGap;
  const yOffset = Math.max(0, (height - totalRowsPx) / 2);

  const pal = getCategoricalPalette();

  const idBase = React.useId();
  const nowTs = toTs(now) ?? Date.now();

  return (
    <TooltipProvider>
      <div className="fdp-priestley-timeline" role="group" aria-label={ariaLabel}>
        <svg width={ctx?.width ?? 0} height={ctx?.height ?? 0} role="img">
          <g transform={`translate(${ctx?.margin.left ?? 0},${ctx?.margin.top ?? 0})`}>
            <Axis type="x" />
            {gridLines && <GridLines axis="x" />}
            {/* Now marker */}
            {showNowMarker && (
              <g aria-hidden>
                <line
                  x1={xScale(new Date(nowTs))}
                  x2={xScale(new Date(nowTs))}
                  y1={0}
                  y2={height}
                  stroke="var(--nhs-fdp-color-grey-4,#aeb7bd)"
                  strokeDasharray="4 4"
                />
              </g>
            )}
            {/* Bars */}
            {data.map((d, i) => {
              const s = toTs(d.start)!;
              const e = toTs(d.end);
              const x1 = xScale(new Date(s));
              const x2 = xScale(new Date(e ?? domain[1]));
              const lane = laneIndices[i] ?? 0;
              const y = yOffset + lane * (rowHeight + rowGap);
              const w = Math.max(1, x2 - x1);
              const fill = d.color || pal[i % pal.length];
              const labelText = getBarLabel
                ? getBarLabel(d)
                : (d.label ? `${d.label}, ` : "") +
                  (e
                    ? `${new Date(s).toLocaleDateString()} to ${new Date(e).toLocaleDateString()}`
                    : `since ${new Date(s).toLocaleDateString()}`);
              const a11y = d.ariaLabel || labelText;
              const commonProps = {
                role: d.href || onBarClick ? "button" : undefined,
                tabIndex: (enableKeyboardNav ? (i === focusedIndex ? 0 : -1) : 0) as 0 | -1,
                "aria-label": a11y,
                onKeyDown: (ev: React.KeyboardEvent) => {
                  if (enableKeyboardNav) {
                    switch (ev.key) {
                      case 'ArrowLeft':
                        ev.preventDefault();
                        moveByTime(i, -1);
                        break;
                      case 'ArrowRight':
                        ev.preventDefault();
                        moveByTime(i, +1);
                        break;
                      case 'ArrowUp':
                        ev.preventDefault();
                        moveWithinLane(i, -1);
                        break;
                      case 'ArrowDown':
                        ev.preventDefault();
                        moveWithinLane(i, +1);
                        break;
                      case 'Home':
                        ev.preventDefault();
                        focusBar(orderByTime[0]);
                        break;
                      case 'End':
                        ev.preventDefault();
                        focusBar(orderByTime[orderByTime.length - 1]);
                        break;
                      case ' ':
                      case 'Enter':
                        if (onBarClick) {
                          ev.preventDefault();
                          onBarClick(d);
                        }
                        break;
                    }
                  }
                  onBarKeyDown?.(ev, d);
                },
                onClick: () => onBarClick?.(d),
              } as const;
              return (
                <g key={d.id ?? `${idBase}-${i}`} className="fdp-priestley-interval">
                  <rect
                    ref={(el) => (rectRefs.current[i] = el)}
                    x={x1}
                    y={y}
                    width={w}
                    height={rowHeight}
                    rx={barRadius}
                    ry={barRadius}
                    fill={fill}
                    {...(commonProps as any)}
                  />
                  {/* open cap if no end */}
                  {e === undefined && <OpenCap x={x2} y={y} h={rowHeight} />}
                  {showInlineLabels && (d.label || d.category) && (
                    <text
                      x={x1 + 4}
                      y={y + rowHeight * 0.65}
                      fontSize={12}
                      fill={labelColor || 'var(--nhs-fdp-color-text,#0b0c0c)'}
                    >
                      {d.label || d.category}
                    </text>
                  )}
                </g>
              );
            })}
            <TooltipOverlay />
          </g>
        </svg>
        <VisuallyHiddenLiveRegion />
      </div>
    </TooltipProvider>
  );
};

export const PriestleyTimeline: React.FC<PriestleyTimelineProps> = (props) => {
  const WithScale: React.FC<PriestleyTimelineProps> = (pp) => {
    const ctx = useChartContext();
    const width = ctx?.innerWidth ?? 0;
    const allTs = React.useMemo(() => {
      const xs = pp.data.flatMap((d) => [toTs(d.start)!, toTs(d.end) ?? undefined]).filter(Boolean) as number[];
      const nowTs = toTs(pp.now) ?? Date.now();
      if (pp.xDomain) {
        const a = toTs(pp.xDomain[0])!; const b = toTs(pp.xDomain[1])!; return [Math.min(a,b), Math.max(a,b)];
      }
      if (!xs.length) return [nowTs - 86400000 * 30, nowTs];
      const min = Math.min(...xs);
      const max = Math.max(...xs.concat(pp.showNowMarker ? [nowTs] : []));
      const pad = Math.max(1, Math.round((max - min) * 0.04));
      return [min - pad, max + pad];
    }, [pp.data, pp.xDomain, pp.now, pp.showNowMarker]);
    const xScale = React.useMemo(() => {
      return createXTimeScale(
        [{ x: new Date(allTs[0]) }, { x: new Date(allTs[1]) }] as any,
        (d: any) => d.x,
        [0, width]
      ).domain([new Date(allTs[0]), new Date(allTs[1])]);
    }, [allTs, width]);
    const value = React.useMemo(
      () => ({
        xScale,
        yScale: (y: number) => y,
        getXTicks: (c = 6) => xScale.ticks(c),
        getYTicks: () => [] as any,
      }),
      [xScale]
    );
    return (
      <ScaleContext.Provider value={value as any}>
        <PriestleyTimelineInner {...pp} />
      </ScaleContext.Provider>
    );
  };
  const ctx = useChartContext();
  if (ctx) return <WithScale {...props} />;
  return (
    <ChartRoot height={props.height ?? 240} ariaLabel={props.ariaLabel} margin={{ bottom: 40, left: 16, right: 16, top: 12 }}>
      <WithScale {...props} />
    </ChartRoot>
  );
};

export default PriestleyTimeline;
