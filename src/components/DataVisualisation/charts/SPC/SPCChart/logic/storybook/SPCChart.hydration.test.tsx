import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { SPCChart, type SPCDatum } from '../../SPCChart';

function makeData(): SPCDatum[] {
  const start = Date.UTC(2024,0,1);
  return Array.from({ length: 18 }, (_, i) => ({ x: new Date(start + i*86400000), y: 50 + (i>10 ? 8 : 0) }));
}

describe('SPCChart hydration', () => {
  test('renders points and (once threshold met) centre line after client render', () => {
    const { container } = render(<SPCChart data={makeData()} />);
    const pts = container.querySelectorAll('circle.fdp-spc__point');
    expect(pts.length).toBe(18);
    const cl = container.querySelectorAll('line.fdp-spc__cl');
    expect(cl.length).toBe(1);
  });
});
