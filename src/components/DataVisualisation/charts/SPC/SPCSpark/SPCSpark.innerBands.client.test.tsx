import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';
import { SPCSpark } from './SPCSpark';
import { VariationState } from '../SPCIcons/SPCConstants';

describe('SPCSpark inner sigma bands', () => {
  const data = Array.from({ length: 24 }).map((_, i) => ({ value: 60 + Math.sin(i/3)*3 }));

  it('renders 1σ/2σ lines only when showInnerBands is true', () => {
    const props = {
      data,
      variationState: VariationState.CommonCause,
      showMean: true,
      showLimits: true,
      showLimitBand: true,
      centerLine: 60,
      controlLimits: { lower: 50, upper: 70 },
      sigmaBands: { lowerTwo: 54, lowerOne: 57, upperOne: 63, upperTwo: 66 },
    } as const;

    const { container, rerender } = render(<SPCSpark {...props} />);
    // No inner bands yet
    let dashedInner = Array.from(container.querySelectorAll('line')).filter(l => l.getAttribute('stroke-dasharray') === '3,6' || l.getAttribute('stroke-dasharray') === '2,6');
    expect(dashedInner.length).toBe(0);

    rerender(<SPCSpark {...props} showInnerBands />);
    dashedInner = Array.from(container.querySelectorAll('line')).filter(l => l.getAttribute('stroke-dasharray') === '3,6' || l.getAttribute('stroke-dasharray') === '2,6');
    expect(dashedInner.length).toBeGreaterThan(0);
  });
});
