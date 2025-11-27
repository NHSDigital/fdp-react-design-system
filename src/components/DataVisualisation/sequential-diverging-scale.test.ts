import { createSequentialColorScale, createDivergingColorScale } from './utils/colors';

describe('sequential colour scale', () => {
  it('interpolates between provided colours', () => {
    const scale = createSequentialColorScale({ domain: [0, 10], colors: ['#000000', '#ffffff'] });
    expect(scale(0)).toBe('#000000');
    expect(scale(10)).toBe('#ffffff');
    const mid = scale(5);
    expect(mid.startsWith('#')).toBe(true);
  });
  it('clamps by default', () => {
    const scale = createSequentialColorScale({ domain: [0, 1], colors: ['#000000', '#ffffff'] });
    expect(scale(-1)).toBe('#000000');
    expect(scale(2)).toBe('#ffffff');
  });
});

describe('diverging colour scale', () => {
  it('interpolates around neutral', () => {
    const scale = createDivergingColorScale({ domain: [-10, 0, 10], colors: ['#0000ff', '#ffffff', '#ff0000'] });
    expect(scale(-10)).toBe('#0000ff');
    expect(scale(10)).toBe('#ff0000');
    const mid = scale(0);
    expect(mid.toLowerCase()).toBe('#ffffff');
  });
  it('auto generates when colours omitted', () => {
    const scale = createDivergingColorScale({ domain: [-1, 0, 1] });
    expect(scale(-1)).toMatch(/^#/);
    expect(scale(1)).toMatch(/^#/);
  });
});
