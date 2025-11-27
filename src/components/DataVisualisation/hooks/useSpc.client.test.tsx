import { describe, it, expect } from 'vitest';
import { useSpc } from './useSpc';
import { render } from '@testing-library/react';
import React from 'react';
import { VariationState } from '../charts/SPC/SPCIcons/SPCConstants';

function TestHarness({ values, direction }: { values: Array<number|null>, direction?: any }) {
  const { latestState } = useSpc({ values, metricImprovement: undefined as any, showLimits: true });
  return <div data-state={latestState ?? ''}></div>;
}

describe('useSpc', () => {
  it('maps engine neutral special-cause to purple (SpecialCauseNoJudgement)', () => {
    // Construct a 2-of-3 high-side near limit scenario without direction (context)
    const base = Array.from({ length: 20 }).map((_, i) => 50 + (i % 2 === 0 ? 0.5 : -0.5));
    const values = [...base, 55.4, 56.1, 55.8];
    const { container } = render(<TestHarness values={values} />);
    const state = container.querySelector('div')?.getAttribute('data-state');
    expect(String(state)).toBe(String(VariationState.SpecialCauseNoJudgement));
  });
});
