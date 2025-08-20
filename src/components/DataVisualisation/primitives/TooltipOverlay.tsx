import * as React from 'react';
import { useTooltipContext } from '../core/TooltipContext';
import { useChartContext } from '../core/ChartRoot';
import { pickSeriesColor } from '../utils/colors';

/** Basic overlay showing a single focused datum (from TooltipContext). */
export const TooltipOverlay: React.FC = () => {
  const tooltip = useTooltipContext();
  const chart = useChartContext();
  if (!tooltip || !chart || !tooltip.focused) return null;
  const { focused, aggregated } = tooltip;
  const { innerWidth, innerHeight } = chart;
  const clampX = Math.min(Math.max(focused.clientX, 0), innerWidth);
  const clampY = Math.min(Math.max(focused.clientY, 0), innerHeight);
  const bgX = clampX + 8;
  const bgY = clampY - 8;
  const multi = aggregated.length > 1;
  const label = multi ? focused.x.toDateString() : `${focused.x.toDateString()} • ${focused.y}`;
  // Derive base series colour (fallback to NHS blue if util absent)
  // We only have seriesId; attempt to parse trailing digits else fallback index 0
  const idDigits = /\d+$/.exec(focused.seriesId || '');
  const seriesIdx = idDigits ? parseInt(idDigits[0], 10) - 1 : 0;
  const seriesColor = pickSeriesColor(seriesIdx >=0 ? seriesIdx : 0) || '#005eb8';
  // NHS focus yellow via CSS variable with fallback
  const focusYellow = 'var(--nhs-fdp-color-primary-yellow,#ffeb3b)';
  return (
    <g className="fdp-tooltip-layer" pointerEvents="none">
  {/* Reduced outer focus ring close to point size */}
  <circle cx={clampX} cy={clampY} r={7} fill="none" stroke={focusYellow} strokeWidth={3} />
  {/* Inner white core with yellow stroke hugging point */}
  <circle cx={clampX} cy={clampY} r={5} fill="#000" stroke={focusYellow} strokeWidth={1.5} />
  {/* Centre dot in series colour */}
  <circle cx={clampX} cy={clampY} r={2.5} fill={seriesColor} stroke="#fff" strokeWidth={0.5} />
      {multi ? (
        (() => {
          const lineHeight = 16;
          const rows = aggregated.map(a => `${a.seriesId}: ${a.y}`);
          const content = [label, ...rows];
          const maxChars = content.reduce((m,s)=>Math.max(m,s.length),0);
          const width = Math.max(90, maxChars * 6.2 + 16);
          const height = lineHeight * content.length + 8;
          return (
            <g>
              <rect x={bgX} y={bgY - height} rx={4} ry={4} width={width} height={height} fill="#212b32" opacity={0.92} />
              {content.map((t,i) => (
                <text key={i} x={bgX + 8} y={bgY - height + 6 + lineHeight*(i+0.7)} fill="#fff" fontSize={12}>{t}</text>
              ))}
            </g>
          );
        })()
      ) : (
        <g>
          <rect x={bgX} y={bgY - 24} rx={4} ry={4} width={Math.max(60, label.length * 6.2)} height={24} fill="#212b32" opacity={0.92} />
          <text x={bgX + 8} y={bgY - 8} fill="#fff" fontSize={12}>{label}</text>
        </g>
      )}
    </g>
  );
};

export default TooltipOverlay;
