import React from 'react';
import { describe, test, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { SPCChart, type SPCDatum } from './SPCChart';

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
  });
});
