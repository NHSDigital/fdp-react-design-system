import * as React from 'react';
import { createPortal } from 'react-dom';
import { useTooltipContext } from '../../core/TooltipContext';
import { useChartContext } from '../../core/ChartRoot';
import { pickSeriesColor } from '../../utils/colors';
import { VariationIcon, AssuranceIcon } from './logic/spc';

interface SPCTooltipOverlayProps {
  engineRows: any[] | null;
  limits: { mean?: number | null; sigma: number };
  /** Optional callback to produce rich aria / tooltip narrative for a point (index, SPCDatum-like) */
  pointDescriber?: (index: number, d: { x: Date | string | number; y: number }) => string | undefined;
  /** Optional measure name for richer value line e.g. "85 % Hand Washing Compliance" */
  measureName?: string;
  /** Optional unit e.g. '%', 'ms' */
  measureUnit?: string;
  /** Optional date formatter (defaults to toDateString) */
  dateFormatter?: (d: Date) => string;
}

/**
 * SPC specific tooltip overlay enriching the basic overlay with:
 *  - Variation / assurance interpretation (improvement vs concern)
 *  - Specific special-cause rule(s) that triggered for the point
 *  - Zone classification relative to mean (inside 1σ, 1–2σ, 2–3σ, >3σ)
 */
const SPCTooltipOverlay: React.FC<SPCTooltipOverlayProps> = ({ engineRows, limits, pointDescriber, measureName, measureUnit, dateFormatter }) => {
  const tooltip = useTooltipContext();
  const chart = useChartContext();
  if (!tooltip || !chart || !tooltip.focused) return null;
  const { focused } = tooltip;
  const { innerWidth, innerHeight } = chart;
  const clampX = Math.min(Math.max(focused.clientX, 0), innerWidth);
  const clampY = Math.min(Math.max(focused.clientY, 0), innerHeight);

  // We'll render marker in SVG but move rich text into an absolutely positioned HTML portal so it can overflow chart.
  const containerEl = (chart as any).ref?.current as HTMLElement | undefined; // ChartRoot div (position: relative)
  const host = containerEl; // we rely on ChartRoot's positioned container

  // Single series assumption for SPCChart; index aligns with engineRows order used earlier.
  const row = engineRows?.[focused.index];

  // Build rule explanations.
  const rules: string[] = [];
  if (row) {
    if (row.specialCauseSinglePointAbove) rules.push('Single point above upper control limit');
    if (row.specialCauseSinglePointBelow) rules.push('Single point below lower control limit');
    if (row.specialCauseTwoOfThreeAbove) rules.push('Two of three points beyond +2σ');
    if (row.specialCauseTwoOfThreeBelow) rules.push('Two of three points beyond -2σ');
    if (row.specialCauseFourOfFiveAbove) rules.push('Four of five points beyond +1σ');
    if (row.specialCauseFourOfFiveBelow) rules.push('Four of five points beyond -1σ');
    if (row.specialCauseShiftHigh) rules.push('Shift: 8+ points above center line');
    if (row.specialCauseShiftLow) rules.push('Shift: 8+ points below center line');
    if (row.specialCauseTrendIncreasing) rules.push('Trend: 6+ consecutive increasing points');
    if (row.specialCauseTrendDecreasing) rules.push('Trend: 6+ consecutive decreasing points');
  }

  const dateObj = focused.x instanceof Date ? focused.x : new Date(focused.x);
  const dateLabel = dateFormatter ? dateFormatter(dateObj) : dateObj.toDateString();
  const unit = measureUnit ? `${measureUnit}` : '';
  const valueLabel = measureName || unit ? `${focused.y}${unit ? ' ' + unit : ''}${measureName ? ' ' + measureName : ''}` : `${focused.y}`;

  // Variation / assurance descriptors
  let variationDesc: string | null = null;
  if (row?.variationIcon === VariationIcon.Improvement) variationDesc = 'Improvement signal';
  else if (row?.variationIcon === VariationIcon.Concern) variationDesc = 'Concern signal';
  else if (row?.variationIcon === VariationIcon.Neither) variationDesc = 'Common cause variation';
  else if (row?.variationIcon === VariationIcon.None) variationDesc = null; // suppressed (insufficient data / ghost)

  let assuranceDesc: string | null = null;
  if (row?.assuranceIcon === AssuranceIcon.Pass) assuranceDesc = 'Target met';
  else if (row?.assuranceIcon === AssuranceIcon.Fail) assuranceDesc = 'Target not met';
  else if (row?.assuranceIcon === AssuranceIcon.None) assuranceDesc = null;

  // Zone classification relative to mean & sigma
  let zone: string | null = null;
  if (limits.mean != null && limits.sigma > 0) {
    const z = Math.abs((focused.y - limits.mean) / limits.sigma);
    if (z < 1) zone = 'Within 1σ';
    else if (z < 2) zone = 'Between 1–2σ';
    else if (z < 3) zone = 'Between 2–3σ';
    else zone = 'Beyond 3σ';
  }

  const lines: string[] = [];
  // If describer present, put first narrative line; else default header
  const narrative = pointDescriber ? pointDescriber(focused.index, { x: focused.x, y: focused.y }) : undefined;
  if (narrative) {
    lines.push(narrative);
  lines.push(`${dateLabel} • ${valueLabel}`);
  } else {
  lines.push(`${dateLabel} • ${valueLabel}`);
  }
  if (variationDesc) lines.push(variationDesc);
  if (assuranceDesc) lines.push(assuranceDesc);
  if (zone) lines.push(zone);
  if (rules.length) {
    lines.push('Special cause:');
    rules.forEach(r => lines.push(r));
  }

  // Wrap lines to avoid excessively wide tooltips (simple whitespace-based wrapping)
  const maxCharsPerLine = 42; // heuristic; matches approx ~260px at 12px font
  const wrapText = (text: string): string[] => {
    if (text.length <= maxCharsPerLine) return [text];
    const words = text.split(/\s+/);
    const out: string[] = [];
    let current = '';
    for (const w of words) {
      // If single word longer than limit, hard-split it
      if (w.length > maxCharsPerLine) {
        if (current) { out.push(current.trim()); current = ''; }
        for (let i=0;i<w.length;i+=maxCharsPerLine) {
          out.push(w.slice(i, i+maxCharsPerLine));
        }
        continue;
      }
      if ((current + ' ' + w).trim().length <= maxCharsPerLine) {
        current = current ? current + ' ' + w : w;
      } else {
        out.push(current.trim());
        current = w;
      }
    }
    if (current) out.push(current.trim());
    return out;
  };

  const wrappedLines = lines.flatMap(wrapText);

  // Series colour heuristic (single series so index 0)
  const seriesColor = pickSeriesColor(0) || '#005eb8';
  const focusYellow = 'var(--nhs-fdp-color-primary-yellow,#ffeb3b)';

  // lineHeight constant removed (was only used for height calculation)
  // Height no longer needed for positioning (always placed below point)

  // Compute absolute positioning relative to chart container for portal.
  // Determine desired width from content (approximate character width heuristic) within bounds.
  const charPx = 6.2;
  const contentWidthEstimate = wrappedLines.reduce((m, s) => Math.max(m, s.length * charPx + 16), 0); // padding allowance
  const minWidth = 200;
  const maxWidth = 440;
  const boxWidth = Math.min(maxWidth, Math.max(minWidth, contentWidthEstimate));

  let left = clampX + 12; // initial: to the right of point
  // Account for chart margin.top (group translate) so portal top matches visual point position.
  const marginTop = (chart as any).margin?.top ?? 0;
  // Position tooltip below the point: top edge exactly 10px beneath the data point
  let top = marginTop + clampY + 16;
  // If overflowing right edge, flip to left side of point
  if (left + boxWidth > innerWidth) {
    const flipGap = -20; // smaller gap when flipped to sit closer to point
    left = clampX - flipGap - boxWidth;
  }
  // Final clamp to container bounds
  if (left < 0) left = Math.max(0, innerWidth - boxWidth);

  // Fade-in: mount flag triggers CSS transition.
  const [visible, setVisible] = React.useState(false);
  React.useEffect(()=>{ const id = requestAnimationFrame(()=> setVisible(true)); return ()=> cancelAnimationFrame(id); }, [focused.index]);
  const portal = host ? createPortal(
    <div className={"fdp-spc-tooltip-portal" + (visible ? ' is-visible' : '')}
      style={{ position: 'absolute', left, top, width: boxWidth, maxWidth: maxWidth, padding: '6px 8px', background: '#212b32', color: '#fff', borderRadius: 4, fontSize: 12, lineHeight: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.4)', zIndex: 10, pointerEvents: 'none', userSelect: 'none' }} role="status" aria-live="polite" data-floating data-placement={left + boxWidth + 12 > innerWidth ? 'left' : 'right'}>
      {wrappedLines.map((t,i)=>(<div key={i}>{t}</div>))}
    </div>, host) : null;

  return (
    <g className="fdp-tooltip-layer fdp-spc-tooltip" pointerEvents="none" aria-label={`Value ${valueLabel}${variationDesc ? ', ' + variationDesc : ''}${rules.length ? ', special cause detected' : ''}`}>
      <circle cx={clampX} cy={clampY} r={7} fill="none" stroke={focusYellow} strokeWidth={3} />
      <circle cx={clampX} cy={clampY} r={5} fill="#000" stroke={focusYellow} strokeWidth={1.5} />
      <circle cx={clampX} cy={clampY} r={2.5} fill={seriesColor} stroke="#fff" strokeWidth={0.5} />
      {portal}
    </g>
  );
};

export default SPCTooltipOverlay;
