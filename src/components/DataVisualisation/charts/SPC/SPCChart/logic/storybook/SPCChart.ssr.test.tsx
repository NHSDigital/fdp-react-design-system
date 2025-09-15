import { describe, test, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { SPCChart, type SPCDatum } from '../../SPCChart';

function data(n = 14): SPCDatum[] {
  const start = Date.UTC(2024,0,1);
  return Array.from({ length: n }, (_, i) => ({ x: new Date(start + i*86400000), y: 50 + (i >= 7 ? 5 : 0) }));
}

describe('SPCChart SSR', () => {
  test('renders static SVG without crashing (no runtime window assumptions)', () => {
    const html = renderToString(<SPCChart data={data()} />);
    expect(html).toContain('fdp-spc-chart');
    // Should include at least one circle (points suppressed until hydrate? ensure showPoints true by default)
    expect(html).toContain('fdp-spc__point');
  // New consolidated polyline rendering for mean / limits
  expect(html).toContain('fdp-spc__cl');
  expect(html).toContain('fdp-spc__limit--ucl');
  expect(html).toContain('fdp-spc__limit--lcl');
  });

  test('renders external source container when source prop provided (outside SVG)', () => {
    const html = renderToString(<SPCChart data={data()} source="NHS England | SUS extracts" />);
    // Source wrapper div
    expect(html).toContain('fdp-spc-chart__source');
  // Prefixed source text (allow optional React inserted comment separator)
  expect(html).toMatch(/Source:\s*(?:<!-- -->)?NHS England \| SUS extracts/);
    // Ensure it is not inside the <svg> by checking order: wrapper appears after an </svg>
    const svgCloseIdx = html.indexOf('</svg>');
    const sourceIdx = html.indexOf('fdp-spc-chart__source');
    expect(svgCloseIdx).toBeGreaterThan(0);
    expect(sourceIdx).toBeGreaterThan(svgCloseIdx);
  });
});
