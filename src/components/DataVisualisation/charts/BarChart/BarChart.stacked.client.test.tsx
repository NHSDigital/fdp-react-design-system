import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChartRoot, BandScalesProvider, TooltipProvider, BarSeriesPrimitive, type BarSeries } from '../../index';
import { stackSeries, normaliseStack } from '../../utils/stack';

// Basic margin reused across mini chart renders
const margin = { left: 56, bottom: 32, right: 16, top: 12 };
const parseX = (d: any) => d.x as any;

function renderStacked(abs: ReturnType<typeof stackSeries>, percent = false) {
  const data = percent ? normaliseStack(abs.map(s => ({ ...s, stacked: s.stacked.map(d => ({ ...d })) })) as any) : abs;
  return render(
    <ChartRoot width={600} height={300} margin={margin} ariaLabel={percent ? 'Percent stacked bars test' : 'Absolute stacked bars test'}>
      <BandScalesProvider series={data.map(s => ({ data: s.stacked.map(d => ({ x: d.x, y: d.y1 })) })) as any}>
        <TooltipProvider>
          <svg width={600 - margin.left - margin.right} height={300 - margin.top - margin.bottom} role="img">
            <g transform={`translate(${margin.left},${margin.top})`}>
              {data.map((s,i) => (
                <BarSeriesPrimitive
                  key={s.id}
                  series={{ id: s.id, data: s.stacked.map(d => ({ x: d.x, y: d.y1 - d.y0 })) }}
                  stacked={s.stacked.map(d => ({ y0: d.y0, y1: d.y1 }))}
                  seriesIndex={i}
                  seriesCount={1}
                  palette="categorical"
                  parseX={parseX}
                />
              ))}
            </g>
          </svg>
        </TooltipProvider>
      </BandScalesProvider>
    </ChartRoot>
  );
}

describe('Stacked Bars utilities & rendering', () => {
  test('percent normalisation sums to ~1 per category', () => {
    const categories = ['A','B','C','D','E'];
    const raw: BarSeries[] = Array.from({ length: 4 }).map((_, si) => ({
      id: `s${si+1}`,
      data: categories.map(c => ({ x: c, y: 5 + Math.random()*30 }))
    }));
    const abs = stackSeries(raw as any);
    const pct = normaliseStack(abs.map(s => ({ ...s, stacked: s.stacked.map(d => ({ ...d })) })) as any);
    const sums = categories.map((_, ci) => pct.reduce((acc, s) => acc + (s.stacked[ci].y1 - s.stacked[ci].y0), 0));
    sums.forEach(sum => expect(sum).toBeGreaterThan(0.999));
    sums.forEach(sum => expect(sum).toBeLessThan(1.001));
  });

  test('stacked bar segments use consistent dark stroke token', () => {
    const categories = ['A','B','C'];
    const raw: BarSeries[] = Array.from({ length: 3 }).map((_, si) => ({
      id: `cs${si+1}`,
      data: categories.map(c => ({ x: c, y: 10 + Math.random()*10 }))
    }));
    const abs = stackSeries(raw as any);
    renderStacked(abs, false);
    const rects = document.querySelectorAll('rect.fdp-bar--stacked');
    expect(rects.length).toBeGreaterThan(0);
    rects.forEach(r => {
      expect(r.getAttribute('stroke')).toBe('var(--nhs-fdp-chart-stacked-stroke, #212b32)');
    });
  });

  test('grouped categorical bars have uniform widths', () => {
    const categories = ['One','Two','Three','Four'];
    const series: BarSeries[] = Array.from({ length: 3 }).map((_, si) => ({
      id: `g${si+1}`,
      data: categories.map(c => ({ x: c, y: 5 + Math.random()*20 }))
    }));
    // Render grouped (not stacked): omit stacked prop, seriesCount > 1
    render(
      <ChartRoot width={600} height={300} margin={margin} ariaLabel="Grouped bars test">
        <BandScalesProvider series={series as any}>
          <TooltipProvider>
            <svg width={600 - margin.left - margin.right} height={300 - margin.top - margin.bottom} role="img">
              <g transform={`translate(${margin.left},${margin.top})`}>
                {series.map((s,i) => (
                  <BarSeriesPrimitive
                    key={s.id}
                    series={s}
                    seriesIndex={i}
                    seriesCount={series.length}
                    palette="categorical"
                    parseX={parseX}
                    allSeries={series}
                  />
                ))}
              </g>
            </svg>
          </TooltipProvider>
        </BandScalesProvider>
      </ChartRoot>
    );
    const rects = Array.from(document.querySelectorAll('rect.fdp-bar'));
    expect(rects.length).toBeGreaterThan(0);
    const widths = Array.from(new Set(rects.map(r => r.getAttribute('width'))));
    // Allow at most 1 distinct width (uniform); if more than one something regressed
    expect(widths.length).toBe(1);
  });
});
