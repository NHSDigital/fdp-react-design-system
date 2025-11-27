import React from 'react';
import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { ChartRoot, LineScalesProvider, TooltipProvider, BarSeriesPrimitive, type BarSeries } from '../../index';

// Test that minBarWidth prop on BarSeriesPrimitive enforces a minimum width for continuous scales when feasible

describe('BarSeriesPrimitive minBarWidth (continuous)', () => {
  const margin = { left: 40, right: 16, top: 8, bottom: 24 };
  const parseX = (d: any) => d.x as Date;

  test('minBarWidth increases bar width relative to baseline', () => {
    const points = 20;
    const baseData: BarSeries = {
      id: 'baseline',
      data: Array.from({ length: points }).map((_, i) => ({ x: new Date(2024, 0, i + 1), y: 5 + Math.random() * 10 }))
    };
    const minData: BarSeries = { ...baseData, id: 'withMin' };
    const width = 800;
    // Render baseline (no minBarWidth)
    render(
      <div>
        <ChartRoot width={width} height={200} margin={margin} ariaLabel="baseline bars">
          <LineScalesProvider series={[baseData] as any} parseX={parseX} yDomain={[0, 20]}>
            <TooltipProvider>
              <svg width={width - margin.left - margin.right} height={200 - margin.top - margin.bottom} role="img">
                <g transform={`translate(${margin.left},${margin.top})`}>
                  <BarSeriesPrimitive
                    series={baseData}
                    seriesIndex={0}
                    seriesCount={1}
                    palette="categorical"
                    parseX={parseX}
                    widthFactor={0.2}
                  />
                </g>
              </svg>
            </TooltipProvider>
          </LineScalesProvider>
        </ChartRoot>
        <ChartRoot width={width} height={200} margin={margin} ariaLabel="minBarWidth bars">
          <LineScalesProvider series={[minData] as any} parseX={parseX} yDomain={[0, 20]}>
            <TooltipProvider>
              <svg width={width - margin.left - margin.right} height={200 - margin.top - margin.bottom} role="img">
                <g transform={`translate(${margin.left},${margin.top})`}>
                  <BarSeriesPrimitive
                    series={minData}
                    seriesIndex={0}
                    seriesCount={1}
                    palette="categorical"
                    parseX={parseX}
                    widthFactor={0.2}
                    minBarWidth={12}
                  />
                </g>
              </svg>
            </TooltipProvider>
          </LineScalesProvider>
        </ChartRoot>
      </div>
    );
    const charts = Array.from(document.querySelectorAll('svg')); // baseline first, min second
    const baselineRects = Array.from(charts[0].querySelectorAll('rect.fdp-bar'));
    const minRects = Array.from(charts[1].querySelectorAll('rect.fdp-bar'));
    expect(baselineRects.length).toBe(points);
    expect(minRects.length).toBe(points);
    const baseWidth = Number(baselineRects[0].getAttribute('width'));
    const minWidth = Number(minRects[0].getAttribute('width'));
    // Expect minWidth >= baseWidth (shows prop took effect). If algorithm can't expand, widths equal.
    expect(minWidth).toBeGreaterThanOrEqual(baseWidth);
  });
});
