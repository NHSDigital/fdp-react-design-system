import { render } from '@testing-library/react';
import { SPCChart } from './SPCChart';
import { resolvedSpcTestCases, SPC_POINT_COLOURS, mapDirection } from './test-data/spcTestCases';

describe('SPCChart colour expectations (single point ends)', () => {
  it('matches expectedPointColours for "Special cause - single point - ends"', () => {
    const tc = resolvedSpcTestCases.find(t => t.title === 'Special cause - single point - ends');
    expect(tc).toBeTruthy();
    if(!tc) return;
    const { container } = render(<SPCChart data={tc.values.map((y,i)=>({ x: new Date(2023,0,i+1), y }))} metricImprovement={mapDirection(tc.direction)} enableRules showPoints />);
    const circles = Array.from(container.querySelectorAll('circle.fdp-spc__point'));
    const mapClass = (c: Element) => {
      const cls = Array.from(c.classList);
      if (cls.includes('fdp-spc__point--sc-improvement')) return SPC_POINT_COLOURS.improvement;
      if (cls.includes('fdp-spc__point--sc-concern')) return SPC_POINT_COLOURS.concern;
      return SPC_POINT_COLOURS.common; // default common cause
    };
    const actual = circles.map(mapClass);
    const expected = tc.expectedPointColours!;
    if (actual.length !== expected.length) {
      console.warn('LENGTH_MISMATCH_SINGLE_POINT_ENDS', { actual: actual.length, expected: expected.length });
    }
    for (let i=0;i<Math.min(actual.length, expected.length);i++) {
      if (actual[i] !== expected[i]) {
        console.error('MISMATCH_SINGLE_POINT_ENDS', { index: i, expected: expected[i], actual: actual[i] });
      }
      expect(actual[i]).toBe(expected[i]);
    }
    expect(actual.length).toBe(expected.length);
  });
});
