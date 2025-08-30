import * as React from 'react';
import { useScaleContext } from '../../core/ScaleContext';
import { useChartContext } from '../../core/ChartRoot';

export interface AxisProps {
  type: 'x' | 'y';
  scale?: any; // user-supplied override
  tickCount?: number;
  /** Explicit tick values; if provided overrides tickCount/ticks() generation */
  tickValues?: any[];
  formatTick?: (v: any) => string;
  label?: string; // used for y
  offset?: number; // x axis vertical offset (defaults to innerHeight)
  className?: string;
  /** Minimum pixel spacing between adjacent tick labels (x axis only). If labels would overlap, intermediate ticks are dropped. Default 0 (no filtering). */
  minLabelSpacing?: number;
  /** Truncate tick label text to this many characters (adds ellipsis). Full value kept in <title> for tooltip/a11y. */
  maxTickLabelLength?: number;
  /** Auto-compute a reasonable minLabelSpacing based on average label length if explicit minLabelSpacing not provided. */
  autoMinLabelSpacing?: boolean;
  /** Rotate x-axis tick labels (degrees). Negative leans left, positive right. */
  labelAngle?: number;
  /** If true, split labels containing \n into multiple tspans (multi-line). */
  allowLabelWrap?: boolean;
  /** Preset date/time formatting helper (applies only if formatTick not provided). */
  tickFormatPreset?: 'dayShortMonth' | 'dayShortMonthYear' | 'shortMonth' | 'shortMonthYear' | 'hourMinute';
}

export const Axis: React.FC<AxisProps> = ({
  type,
  scale,
  tickCount,
  tickValues,
  formatTick: rawFormatTick,
  label,
  offset,
  className,
  minLabelSpacing,
  maxTickLabelLength,
  autoMinLabelSpacing = type === 'x' ? true : false,
  labelAngle = 0,
  allowLabelWrap = true,
  tickFormatPreset
}) => {
  const scaleCtx = useScaleContext();
  const dims = useChartContext();
  const resolvedScale = scale || (type === 'x' ? scaleCtx?.xScale : scaleCtx?.yScale);
  const defaultCount = tickCount ?? (type === 'x' ? 6 : 5);
  // Derive formatter from preset if provided and no explicit formatter
  const hasUserFormatter = typeof rawFormatTick === 'function';
  const presetFormatter: ((v: any) => string) | undefined = React.useMemo(() => {
    if (hasUserFormatter) return undefined;
    if (!tickFormatPreset) return undefined;
    const dtf = (opts: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat(undefined, opts);
    switch (tickFormatPreset) {
      case 'dayShortMonth':
        return (v: any) => {
          const d = v instanceof Date ? v : new Date(v);
          return `${d.getDate()}\n${dtf({ month: 'short' }).format(d)}`;
        };
      case 'dayShortMonthYear':
        return (v: any) => {
          const d = v instanceof Date ? v : new Date(v);
            return `${d.getDate()}\n${dtf({ month: 'short' }).format(d)} ${d.getFullYear()}`;
        };
      case 'shortMonth':
        return (v: any) => {
          const d = v instanceof Date ? v : new Date(v);
          return dtf({ month: 'short' }).format(d);
        };
      case 'shortMonthYear':
        return (v: any) => {
          const d = v instanceof Date ? v : new Date(v);
          return `${dtf({ month: 'short' }).format(d)} ${d.getFullYear()}`;
        };
      case 'hourMinute':
        return (v: any) => {
          const d = v instanceof Date ? v : new Date(v);
          return dtf({ hour: '2-digit', minute: '2-digit' }).format(d);
        };
      default:
        return undefined;
    }
  }, [hasUserFormatter, tickFormatPreset]);
  let effectiveFormatTick: (v:any)=>string = hasUserFormatter ? (rawFormatTick as (v:any)=>string) : (presetFormatter || ((v: any) => String(v)));
  const ticks: any[] = React.useMemo(() => {
    if (tickValues && Array.isArray(tickValues)) return tickValues;
    if (!resolvedScale) return [];
    if (typeof resolvedScale.ticks === 'function') return resolvedScale.ticks(defaultCount);
    return resolvedScale.domain ? resolvedScale.domain() : [];
  }, [resolvedScale, defaultCount, tickValues]);

  // Auto date formatting heuristic for x-axis when using time scale and no user/preset format provided
  if (type === 'x' && !hasUserFormatter && !tickFormatPreset && ticks.length && ticks.every(t => t instanceof Date)) {
    const first = ticks[0] as Date;
    const last = ticks[ticks.length - 1] as Date;
    const spanMs = last.getTime() - first.getTime();
    const oneDay = 24*3600*1000;
    const oneYear = 365*oneDay;
    const sameYear = first.getFullYear() === last.getFullYear();
    const dtfMonth = new Intl.DateTimeFormat(undefined, { month: 'short' });
    if (spanMs < 2*oneDay) {
      const dtfTime = new Intl.DateTimeFormat(undefined, { hour: '2-digit', minute: '2-digit' });
      effectiveFormatTick = (v:any) => dtfTime.format(v as Date);
    } else if (spanMs < 32*oneDay) {
      // Show day + short month
      effectiveFormatTick = (v:any) => {
        const d = v as Date; return `${d.getDate()} ${dtfMonth.format(d)}`;
      };
    } else if (spanMs < oneYear && sameYear) {
      // Show short month (year implied)
      effectiveFormatTick = (v:any) => dtfMonth.format(v as Date);
    } else if (spanMs < 2*oneYear) {
      // Show short month + year on first month of each year maybe; keep simple: Mon YYYY
      const seenMonths = new Set<number>();
      effectiveFormatTick = (v:any) => {
        const d = v as Date; const key = d.getMonth();
        if (!seenMonths.has(key)) { seenMonths.add(key); }
        return `${dtfMonth.format(d)} ${d.getFullYear()}`;
      };
    } else {
      // Multi-year span – show year only
      effectiveFormatTick = (v:any) => String((v as Date).getFullYear());
    }
  }

  if (!resolvedScale || !dims) return null;

  if (type === 'x') {
    const y = offset ?? dims.innerHeight;
    const isBandScale = typeof (resolvedScale as any).bandwidth === 'function';
    const bandwidth = isBandScale ? (resolvedScale as any).bandwidth() : 0;
    const tickPos = (t: any) => {
      const base = resolvedScale(t);
      return isBandScale ? base + bandwidth / 2 : base;
    };
    // Determine min spacing (auto or explicit)
    let resolvedMinSpacing = minLabelSpacing ?? 0;
    if (autoMinLabelSpacing && (minLabelSpacing === undefined || minLabelSpacing === null)) {
      // Approximate per-label pixel width = avg length * 6 (rough chars * px). Add padding.
      const labels = ticks.map(t => effectiveFormatTick(t).replace(/\n.*/g, '')); // first line only for width
      const avgLen = labels.length ? labels.reduce((a,b)=>a+b.length,0)/labels.length : 0;
      resolvedMinSpacing = Math.max(12, Math.round(avgLen * 6 + 4));
    }
    // Optionally filter ticks to avoid overlap based on pixel distance
  const filteredTicks = React.useMemo(() => {
      // If user supplied explicit tickValues we render them all (no auto thinning) to keep alignment with data points.
      if (tickValues && Array.isArray(tickValues)) return ticks;
      if (resolvedMinSpacing <= 0) return ticks;
      const accepted: any[] = [];
      let lastPos = -Infinity;
      for (const t of ticks) {
    const pos = tickPos(t);
        if (pos - lastPos >= resolvedMinSpacing) {
          accepted.push(t);
          lastPos = pos;
        }
      }
      return accepted;
  }, [ticks, resolvedScale, resolvedMinSpacing, tickValues, isBandScale, bandwidth]);
    return (
  <g className={['fdp-axis','fdp-axis--x', className].filter(Boolean).join(' ')} transform={`translate(0,${y})`} fontFamily="var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))">
        <line x1={0} x2={dims.innerWidth} y1={0} y2={0} stroke="currentColor" />
        {filteredTicks.map((t, i) => {
          const rawLabel = effectiveFormatTick(t);
            const displayLabel = (maxTickLabelLength && rawLabel.length > maxTickLabelLength)
              ? rawLabel.slice(0, Math.max(1, maxTickLabelLength - 1)) + '…'
              : rawLabel;
          const lines = allowLabelWrap ? displayLabel.split(/\n/) : [displayLabel.replace(/\n/g,' ' )];
          const anchor = labelAngle < 0 ? 'end' : labelAngle > 0 ? 'start' : 'middle';
          return (
      <g key={t?.toString?.() || i} transform={`translate(${tickPos(t)},0)`}>
              <line y2={6} stroke="currentColor" />
              <text y={9} textAnchor={anchor} className="fdp-axis__tick" dominantBaseline="hanging" transform={labelAngle ? `rotate(${labelAngle})` : undefined} fontFamily="inherit">
                {lines.map((ln, li) => (
                  <tspan key={li} x={0} dy={li===0?0:'1.1em'}>{ln}</tspan>
                ))}
                {displayLabel !== rawLabel && <title>{rawLabel}</title>}
              </text>
            </g>
          );
        })}
      </g>
    );
  }

  return (
  <g className={['fdp-axis','fdp-axis--y', className].filter(Boolean).join(' ')} fontFamily="var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))">
      {ticks.map((t, i) => {
        const rawLabel = effectiveFormatTick(t);
        const displayLabel = (maxTickLabelLength && rawLabel.length > maxTickLabelLength)
          ? rawLabel.slice(0, Math.max(1, maxTickLabelLength - 1)) + '…'
          : rawLabel;
        const lines = allowLabelWrap ? displayLabel.split(/\n/) : [displayLabel.replace(/\n/g,' ')];
        return (
          <g key={t?.toString?.() || i} transform={`translate(0,${resolvedScale(t)})`}>
            <line x2={-6} stroke="currentColor" />
            <text x={-9} dy="0.32em" textAnchor="end" className="fdp-axis__tick" fontFamily="inherit">
              {lines.map((ln, li) => (
                <tspan key={li} x={-9} dy={li===0?0:'1.1em'}>{ln}</tspan>
              ))}
              {displayLabel !== rawLabel && <title>{rawLabel}</title>}
            </text>
          </g>
        );
      })}
      {label && (
        <text transform="rotate(-90)" x={-dims.innerHeight / 2} y={-dims.margin.left + 12} textAnchor="middle" className="fdp-axis__label" fontFamily="inherit">{label}</text>
      )}
    </g>
  );
};

export default Axis;
