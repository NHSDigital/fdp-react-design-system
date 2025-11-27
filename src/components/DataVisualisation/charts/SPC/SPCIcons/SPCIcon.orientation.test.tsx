import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { SPCVariationIcon } from './SPCIcon';
import { VariationIcon } from '../SPCChart/types';
import { ImprovementDirection } from '../engine';
import { SpcEmbeddedIconVariant } from '../SPCChart/SPCChart.constants';

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

describe('SPCVariationIcon triangle orientation', () => {
  it('improvement + Up -> up triangle', () => {
    const { container } = render(<SPCVariationIcon data={{ variationIcon: VariationIcon.Improvement, improvementDirection: ImprovementDirection.Up } as any} variant={SpcEmbeddedIconVariant.Triangle} />);
    const pts = getPolygonPoints(container);
    expect(isUpTriangle(pts)).toBe(true);
  });
  it('improvement + Down -> down triangle', () => {
    const { container } = render(<SPCVariationIcon data={{ variationIcon: VariationIcon.Improvement, improvementDirection: ImprovementDirection.Down } as any} variant={SpcEmbeddedIconVariant.Triangle} />);
    const pts = getPolygonPoints(container);
    expect(isDownTriangle(pts)).toBe(true);
  });
  it('concern + Up -> down triangle', () => {
    const { container } = render(<SPCVariationIcon data={{ variationIcon: VariationIcon.Concern, improvementDirection: ImprovementDirection.Up } as any} variant={SpcEmbeddedIconVariant.Triangle} />);
    const pts = getPolygonPoints(container);
    expect(isDownTriangle(pts)).toBe(true);
  });
  it('concern + Down -> up triangle', () => {
    const { container } = render(<SPCVariationIcon data={{ variationIcon: VariationIcon.Concern, improvementDirection: ImprovementDirection.Down } as any} variant={SpcEmbeddedIconVariant.Triangle} />);
    const pts = getPolygonPoints(container);
    expect(isUpTriangle(pts)).toBe(true);
  });
  it('triangleWithRun improvement + Down -> down triangle', () => {
    const { container } = render(<SPCVariationIcon data={{ variationIcon: VariationIcon.Improvement, improvementDirection: ImprovementDirection.Down } as any} variant={SpcEmbeddedIconVariant.TriangleWithRun} runLength={3} />);
    const pts = getPolygonPoints(container);
    expect(isDownTriangle(pts)).toBe(true);
  });
  it('triangleWithRun concern + Down -> up triangle', () => {
    const { container } = render(<SPCVariationIcon data={{ variationIcon: VariationIcon.Concern, improvementDirection: ImprovementDirection.Down } as any} variant={SpcEmbeddedIconVariant.TriangleWithRun} runLength={3} />);
    const pts = getPolygonPoints(container);
    expect(isUpTriangle(pts)).toBe(true);
  });
});
