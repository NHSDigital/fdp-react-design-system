import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { SPCVariationIcon } from './SPCIcon';
import { Direction } from './SPCConstants';
import { VariationIcon } from '../SPCChart/types';
import { SpcEmbeddedIconVariant } from '../SPCChart/SPCChart.constants';

function getRunCircleYs(container: HTMLElement) {
  return Array.from(container.querySelectorAll('circle'))
    .map(c => c.getAttribute('cy'))
    .filter(Boolean)
    .map(Number)
    .sort((a,b)=>a-b);
}

describe('triangleWithRun common cause centering', () => {
  it('common cause higher vs lower produce identical run circle Y positions', () => {
    const { container: higher } = render(
  <SPCVariationIcon
  data={{ variationIcon: VariationIcon.Neither, trend: Direction.Higher } as any}
    variant={SpcEmbeddedIconVariant.TriangleWithRun}
    runLength={3}
  />
    );
    const { container: lower } = render(
  <SPCVariationIcon
  data={{ variationIcon: VariationIcon.Neither, trend: Direction.Lower } as any}
    variant={SpcEmbeddedIconVariant.TriangleWithRun}
    runLength={3}
  />
    );
    const higherYs = getRunCircleYs(higher);
    const lowerYs = getRunCircleYs(lower);
    expect(higherYs).toEqual(lowerYs);
  });
});
