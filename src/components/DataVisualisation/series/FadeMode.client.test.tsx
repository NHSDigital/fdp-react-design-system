import React from 'react';
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import {
  ChartRoot,
  LineScalesProvider,
  BandScalesProvider,
  VisibilityProvider,
  LineSeriesPrimitive,
  BarSeriesPrimitive,
  type LineSeries,
  type BarSeries
} from '../../index';

const margin = { left: 56, bottom: 32, right: 16, top: 12 };
const parseDate = (d: any) => (d.x instanceof Date ? d.x : new Date(d.x));
const parseCat = (d: any) => d.x as any;

function toggleHidden(initial: string[]) {
  // helper visibility provider wrapper in uncontrolled mode with initialHiddenIds
  return ({ children }: { children: React.ReactNode }) => (
    <VisibilityProvider initialHiddenIds={initial}>{children}</VisibilityProvider>
  );
}

describe('Fade mode visibility behaviour', () => {
  test('LineSeriesPrimitive faded series applies reduced opacity on group', () => {
    const series: LineSeries[] = [
      { id: 'l1', data: [0,1,2].map(i => ({ x: new Date(2024,0,i+1), y: i })) },
      { id: 'l2', data: [0,1,2].map(i => ({ x: new Date(2024,0,i+1), y: i+1 })) }
    ];
    const Wrapper = toggleHidden(['l2']);
    render(
      <Wrapper>
        <ChartRoot width={400} height={200} margin={margin} ariaLabel="fade line test">
          <LineScalesProvider series={series}>
            <svg width={400 - margin.left - margin.right} height={200 - margin.top - margin.bottom} role="img">
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
                    visibilityMode="fade"
                  />
                ))}
              </g>
            </svg>
          </LineScalesProvider>
        </ChartRoot>
      </Wrapper>
    );
    const groups = Array.from(document.querySelectorAll('g.fdp-line-series'));
    expect(groups.length).toBe(2);
    const opacities = groups.map(g => g.getAttribute('opacity'));
    // First visible: opacity 1 (attribute may be absent => treat as 1). Second faded: expect 0.25
    expect(opacities[1]).toBe('0.25');
  });

  test('BarSeriesPrimitive faded series group carries faded opacity attribute', () => {
    const categories = ['A','B','C'];
    const series: BarSeries[] = [
      { id: 'b1', data: categories.map((c,i) => ({ x: c, y: i+1 })) },
      { id: 'b2', data: categories.map((c,i) => ({ x: c, y: (i+1)*2 })) }
    ];
    const Wrapper = toggleHidden(['b2']);
    render(
      <Wrapper>
        <ChartRoot width={400} height={200} margin={margin} ariaLabel="fade bar test">
          <BandScalesProvider series={series as any}>
            <svg width={400 - margin.left - margin.right} height={200 - margin.top - margin.bottom} role="img">
              <g transform={`translate(${margin.left},${margin.top})`}>
                {series.map((s,i) => (
                  <BarSeriesPrimitive
                    key={s.id}
                    series={s}
                    seriesIndex={i}
                    seriesCount={series.length}
                    palette="categorical"
                    parseX={parseCat}
                    visibilityMode="fade"
                  />
                ))}
              </g>
            </svg>
          </BandScalesProvider>
        </ChartRoot>
      </Wrapper>
    );
    const groups = Array.from(document.querySelectorAll('g.fdp-bar-series'));
    expect(groups.length).toBe(2);
    const fadedGroup = groups[1];
    expect(fadedGroup.getAttribute('opacity')).toBe('0.25');
  });
});
