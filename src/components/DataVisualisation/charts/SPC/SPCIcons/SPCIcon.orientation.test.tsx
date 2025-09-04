import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { SpcVariationIcon } from './SPCIcon';
import { VariationJudgement, MetricPolarity } from './SPCConstants';

// Helper to get polygon points from SVG
function getPolygonPoints(container: HTMLElement) {
  const poly = container.querySelector('polygon');
  return poly?.getAttribute('points') || '';
}

// We approximate orientation by comparing first and second y coords in points string
function isUpTriangle(points: string) {
  // Points are formatted as "x1,y1 x2,y2 x3,y3"; up triangle tip y is smallest
  const coords = points.split(/\s+/).map(p => p.split(',').map(Number));
  if (coords.length < 3) return false;
  const ys = coords.map(c => c[1]);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  // Upward triangle should have one point at minY and two at maxY
  const minCount = ys.filter(y => y === minY).length;
  const maxCount = ys.filter(y => y === maxY).length;
  return minCount === 1 && maxCount === 2;
}

function isDownTriangle(points: string) {
  const coords = points.split(/\s+/).map(p => p.split(',').map(Number));
  if (coords.length < 3) return false;
  const ys = coords.map(c => c[1]);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const minCount = ys.filter(y => y === minY).length;
  const maxCount = ys.filter(y => y === maxY).length;
  // Downward triangle has two at minY, one at maxY
  return minCount === 2 && maxCount === 1;
}

describe('SpcVariationIcon triangle orientation', () => {
  it('improving + HigherIsBetter -> up triangle', () => {
    const { container } = render(<SpcVariationIcon data={{ judgement: VariationJudgement.Improving, polarity: MetricPolarity.HigherIsBetter }} variant="triangle" />);
    const pts = getPolygonPoints(container);
    expect(isUpTriangle(pts)).toBe(true);
  });
  it('improving + LowerIsBetter -> down triangle', () => {
    const { container } = render(<SpcVariationIcon data={{ judgement: VariationJudgement.Improving, polarity: MetricPolarity.LowerIsBetter }} variant="triangle" />);
    const pts = getPolygonPoints(container);
    expect(isDownTriangle(pts)).toBe(true);
  });
  it('deteriorating + HigherIsBetter -> down triangle', () => {
    const { container } = render(<SpcVariationIcon data={{ judgement: VariationJudgement.Deteriorating, polarity: MetricPolarity.HigherIsBetter }} variant="triangle" />);
    const pts = getPolygonPoints(container);
    expect(isDownTriangle(pts)).toBe(true);
  });
  it('deteriorating + LowerIsBetter -> up triangle', () => {
    const { container } = render(<SpcVariationIcon data={{ judgement: VariationJudgement.Deteriorating, polarity: MetricPolarity.LowerIsBetter }} variant="triangle" />);
    const pts = getPolygonPoints(container);
    expect(isUpTriangle(pts)).toBe(true);
  });
  it('triangleWithRun improving + LowerIsBetter -> down triangle', () => {
    const { container } = render(<SpcVariationIcon data={{ judgement: VariationJudgement.Improving, polarity: MetricPolarity.LowerIsBetter }} variant="triangleWithRun" runLength={3} />);
    const pts = getPolygonPoints(container);
    expect(isDownTriangle(pts)).toBe(true);
  });
  it('triangleWithRun deteriorating + LowerIsBetter -> up triangle', () => {
    const { container } = render(<SpcVariationIcon data={{ judgement: VariationJudgement.Deteriorating, polarity: MetricPolarity.LowerIsBetter }} variant="triangleWithRun" runLength={3} />);
    const pts = getPolygonPoints(container);
    expect(isUpTriangle(pts)).toBe(true);
  });
});
