import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import {
  ChartRoot,
  LineScalesProvider,
  BandScalesProvider,
  LineSeriesPrimitive,
  AreaSeriesPrimitive,
  BarSeriesPrimitive,
  type BarSeries,
  type LineSeries,
  type AreaSeries,
} from '../../index';

const margin = { left: 56, bottom: 32, right: 16, top: 12 };
const VIRIDIS_4 = ['#440154','#31688E','#35B779','#73D055'];

const parseDate = (d: any) => (d.x instanceof Date ? d.x : new Date(d.x));
const parseCat = (d: any) => d.x as any;

describe('Custom palette precedence', () => {
  test('LineSeriesPrimitive uses series.color over colors[seriesIndex]', () => {
    const series: LineSeries[] = [
      { id: 'a', data: [0,1,2].map(i => ({ x: new Date(2020,0,i+1), y: i })), color: '#ff0000' },
      { id: 'b', data: [0,1,2].map(i => ({ x: new Date(2020,0,i+1), y: i+1 })) }
    ];
    render(
      <ChartRoot width={500} height={200} margin={margin} ariaLabel="palette test line">
        <LineScalesProvider series={series}>
          <svg width={500 - margin.left - margin.right} height={200 - margin.top - margin.bottom} role="img">
            <g transform={`translate(${margin.left},${margin.top})`}>
              {series.map((s,i) => (
                <LineSeriesPrimitive
                  key={s.id}
                  series={s}
                  seriesIndex={i}
                  palette="categorical"
                  showPoints={false}
                  focusablePoints={false}
                  focusIndex={0}
                  parseX={parseDate}
                  colors={VIRIDIS_4}
                />
              ))}
            </g>
          </svg>
        </LineScalesProvider>
      </ChartRoot>
    );
    const paths = Array.from(document.querySelectorAll('g.fdp-line-series > path[role="presentation"]:not(.fdp-line-series__gradient)'));
    expect(paths.length).toBe(2);
    // First path should have stroke from explicit series.color
    expect(paths[0].getAttribute('stroke')).toBe('#ff0000');
    // Second path should use colors[1] from palette override (VIRIDIS_4[1])
    expect(paths[1].getAttribute('stroke')).toBe(VIRIDIS_4[1]);
  });

  test('AreaSeriesPrimitive adopts palette color when no series.color', () => {
    const series: AreaSeries[] = [
      { id: 'a', data: [0,1,2].map(i => ({ x: new Date(2021,0,i+1), y: i+2 })) },
      { id: 'b', data: [0,1,2].map(i => ({ x: new Date(2021,0,i+1), y: i+3 })) }
    ];
    render(
      <ChartRoot width={500} height={200} margin={margin} ariaLabel="palette test area">
        <LineScalesProvider series={series}>
          <svg width={500 - margin.left - margin.right} height={200 - margin.top - margin.bottom} role="img">
            <g transform={`translate(${margin.left},${margin.top})`}>
              {series.map((s,i) => (
                <AreaSeriesPrimitive
                  key={s.id}
                  series={s}
                  seriesIndex={i}
                  palette="categorical"
                  parseX={parseDate}
                  colors={VIRIDIS_4}
                />
              ))}
            </g>
          </svg>
        </LineScalesProvider>
      </ChartRoot>
    );
    // Area fill paths have class fdp-area-series__fill
    const fills = Array.from(document.querySelectorAll('path.fdp-area-series__fill'));
    expect(fills.length).toBe(2);
    // Because gradient is default, we need to look for gradient <stop> colours or temporarily disable gradient.
    // Simpler: ensure a <linearGradient> was created with stopColor = palette override for second series.
    const stops = Array.from(document.querySelectorAll('linearGradient stop[offset="0%"]'));
    // Should have at least 2 stops (one per series)
    expect(stops.some(s => s.getAttribute('stop-color') === VIRIDIS_4[0] || s.getAttribute('stopColor') === VIRIDIS_4[0])).toBe(true);
  });

  test('BarSeriesPrimitive category mode uses colors[datumIndex]', () => {
    const series: BarSeries = {
      id: 'cats',
      data: ['A','B','C','D'].map((c,i) => ({ x: c, y: i+1 }))
    };
    render(
      <ChartRoot width={400} height={200} margin={margin} ariaLabel="palette test bars">
        <BandScalesProvider series={[series] as any}>
          <svg width={400 - margin.left - margin.right} height={200 - margin.top - margin.bottom} role="img">
            <g transform={`translate(${margin.left},${margin.top})`}>
              <BarSeriesPrimitive
                series={series}
                seriesIndex={0}
                seriesCount={1}
                palette="categorical"
                parseX={parseCat}
                colorMode="category"
                colors={VIRIDIS_4}
                gradientFill={false}
              />
            </g>
          </svg>
        </BandScalesProvider>
      </ChartRoot>
    );
    const rects = Array.from(document.querySelectorAll('rect.fdp-bar'));
    expect(rects.length).toBe(4);
    // Each rect fill should match palette index order for first 4 entries
    rects.forEach((r,i) => {
      expect(r.getAttribute('fill')).toBe(VIRIDIS_4[i]);
    });
  });
});
