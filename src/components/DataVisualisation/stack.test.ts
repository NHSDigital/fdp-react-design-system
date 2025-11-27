import { describe, it, expect } from 'vitest';
import { stackSeries, normaliseStack } from './utils/stack';

describe('stackSeries', () => {
  it('stacks simple two-series data', () => {
    const a = { id: 'a', data: [ { x: 1, y: 10 }, { x: 2, y: 5 } ] };
    const b = { id: 'b', data: [ { x: 1, y: 3 }, { x: 2, y: 7 } ] };
    const stacked = stackSeries([a,b]);
    expect(stacked[0].stacked[0]).toMatchObject({ y0: 0, y1: 10 });
    expect(stacked[1].stacked[0]).toMatchObject({ y0: 10, y1: 13 });
  });
  it('normalises to 100%', () => {
    const a = { id: 'a', data: [ { x: 1, y: 10 } ] };
    const b = { id: 'b', data: [ { x: 1, y: 30 } ] };
    const stacked = normaliseStack(stackSeries([a,b]));
    // a segment -> 10/40=0.25, b segment -> 0.75
    expect(stacked[0].stacked[0].y0).toBeCloseTo(0);
    expect(stacked[0].stacked[0].y1).toBeCloseTo(0.25);
    expect(stacked[1].stacked[0].y0).toBeCloseTo(0.25);
    expect(stacked[1].stacked[0].y1).toBeCloseTo(1);
  });
});
