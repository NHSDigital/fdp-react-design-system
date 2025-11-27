import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react'; // React import retained for Storybook & hooks usage
import { ChartRoot, LineScalesProvider, Axis, GridLines, LineSeriesPrimitive, Legend, TooltipProvider, TooltipOverlay, type LineSeries } from './index';
import { VisibilityProvider } from './core/VisibilityContext';
import { useFrutigerFonts } from '../../hooks/useFrutigerFonts';

const meta: Meta = {
  // Moved under unified LineChart category
  title: 'Data Visualisation/LineChart/Compositional'
};
export default meta;

type Story = StoryObj;

// Build some synthetic series
const makeSeries = (n: number): LineSeries[] => Array.from({ length: n }).map((_, si) => ({
  id: `s${si+1}`,
  label: `Series ${si+1}`,
  data: Array.from({ length: 14 }).map((__, i) => ({
    x: new Date(Date.now() - (13 - i) * 86400000),
    y: Math.round(20 + Math.random() * 60)
  }))
}));

const baseSeries = makeSeries(3);

export const BasicComposition: Story = {
  render: () => {
  const { fontFamily } = useFrutigerFonts();
  // Use a React hook to ensure React import is referenced (lint appeasement).
  React.useId();
  const legendItems = baseSeries.map(s => ({ id: s.id, label: s.label || s.id, color: undefined }));
    return (
      <div style={{ width: '100%', maxWidth: 760, fontFamily }}>
        <VisibilityProvider>
          <TooltipProvider>
          <ChartRoot height={320} margin={{ left: 56, bottom: 48, right: 16, top: 12 }} ariaLabel="Composed line chart">
            <LineScalesProvider series={baseSeries as any}>
              <svg width="100%" height="100%" role="img">
                <g transform={`translate(56,12)`}>
                  <Axis
                    type="x"
                    tickValues={baseSeries[0].data.map(d => d.x)}
                    autoMinLabelSpacing
                    tickFormatPreset="dayShortMonth"
                    labelAngle={-35}
                  />
                  <Axis type="y" label="Value" maxTickLabelLength={8} />
                  <GridLines axis="y" />
                  {/* Pointer capture overlay for tooltip focusing */}
                  <PointerEventsLayer />
                  { baseSeries.map((s, si) => (
                    <LineSeriesPrimitive
                      key={s.id}
                      series={s as any}
                      seriesIndex={si}
                      palette="categorical"
                      showPoints={true}
                      focusablePoints={true}
                      focusIndex={-1}
                      parseX={(d) => d.x instanceof Date ? d.x : new Date(d.x)}
                    />
                  ))}
                  <TooltipOverlay />
                </g>
              </svg>
            </LineScalesProvider>
          </ChartRoot>
          <Legend items={legendItems} />
          </TooltipProvider>
        </VisibilityProvider>
      </div>
    );
  }
};

// Simple internal pointer events layer component
import { useTooltipContext } from './core/TooltipContext';
import { useChartContext } from './core/ChartRoot';
const PointerEventsLayer: React.FC = () => {
  const t = useTooltipContext();
  const chart = useChartContext();
  if (!t) return null;
  const w = chart?.innerWidth ?? 0;
  const h = chart?.innerHeight ?? 0;
  if (w <= 0 || h <= 0) return null;
  return (
    <rect
      width={w}
      height={h}
      fill="transparent"
      tabIndex={0}
      aria-label="Interactive chart area. Use arrow keys to navigate points."
      onMouseMove={(e) => {
        const target = e.currentTarget as SVGRectElement;
        const bounds = target.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        t.focusNearest(x, y);
      }}
      onMouseLeave={() => t.clear()}
      onKeyDown={(e) => {
        switch (e.key) {
          case 'ArrowRight':
            t.focusNextPoint();
            e.preventDefault();
            break;
          case 'ArrowLeft':
            t.focusPrevPoint();
            e.preventDefault();
            break;
          case 'ArrowDown':
            t.focusNextSeries();
            e.preventDefault();
            break;
          case 'ArrowUp':
            t.focusPrevSeries();
            e.preventDefault();
            break;
          case 'Home':
            t.focusFirstPoint();
            e.preventDefault();
            break;
          case 'End':
            t.focusLastPoint();
            e.preventDefault();
            break;
        }
      }}
      style={{ cursor: 'crosshair' }}
    />
  );
};
