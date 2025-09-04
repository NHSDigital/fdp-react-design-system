import { describe, it, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { SpcVariationIcon } from './SPCIcon';
import { VariationJudgement, MetricPolarity, Direction } from './SPCConstants';

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
      <SpcVariationIcon
        data={{ judgement: VariationJudgement.None, polarity: MetricPolarity.HigherIsBetter, trend: Direction.Higher }}
        variant="triangleWithRun"
        runLength={3}
      />
    );
    const { container: lower } = render(
      <SpcVariationIcon
        data={{ judgement: VariationJudgement.None, polarity: MetricPolarity.HigherIsBetter, trend: Direction.Lower }}
        variant="triangleWithRun"
        runLength={3}
      />
    );
    const higherYs = getRunCircleYs(higher);
    const lowerYs = getRunCircleYs(lower);
    expect(higherYs).toEqual(lowerYs);
  });
});
