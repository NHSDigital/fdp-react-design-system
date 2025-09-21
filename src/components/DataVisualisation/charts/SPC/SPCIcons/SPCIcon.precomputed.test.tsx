import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SPCVariationIcon } from './SPCIcon';
import { computeSpcPrecomputed, ImprovementDirection, ChartType, VariationIcon } from '../index';

describe('SPCVariationIcon with precomputed summary', () => {
  it('uses last engine icon and aligns aria description/orientation', () => {
    // Simple upward shift sequence
    const values = [10,10,10,10,10,10, 14,15,16,17,18,19,20];
    const data = values.map((v, i) => ({ x: i, value: v }));
    const summary = computeSpcPrecomputed(data, {
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      enableNeutralNoJudgement: true,
    });

    render(
      <SPCVariationIcon
  data={{ variationIcon: VariationIcon.CommonCause } as any}
        precomputed={summary}
        improvementDirection={ImprovementDirection.Up}
        ariaLabel="Variation icon"
      />
    );

    const img = screen.getByRole('img', { name: /Variation icon/i });
    expect(img).toBeTruthy();
    // Ensure we produced a description that mentions improving/deteriorating/common cause wording.
    const desc = img.getAttribute('aria-description') || '';
    expect(desc.length).toBeGreaterThan(0);
    // In an upward shift with Up polarity, expect improving wording.
    expect(/Special cause improvement|Improving variation/i.test(desc)).toBe(true);
  });
});
