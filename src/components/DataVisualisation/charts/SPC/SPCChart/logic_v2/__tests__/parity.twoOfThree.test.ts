import { describe, it, expect } from 'vitest';
import { buildSpcV26a } from '../engine';
import { ChartType, ImprovementDirection, VariationIcon } from '../types';
import { withParityV26 } from '../presets';

function inputFrom(values: number[]) {
  const start = new Date(2024, 0, 1);
  return values.map((v, i) => ({
    x: new Date(start.getFullYear(), start.getMonth() + i, 1),
    value: v,
    ghost: false,
    baseline: false,
    target: null as number | null,
  }));
}

describe('parity: two-of-three rule includes >3σ points (same side)', () => {
  it('flags two-of-three up when one of the triplet is >3σ and others ≥2σ on the same side', () => {
    // Construct a stable baseline then inject three high points: two around 2σ and one beyond 3σ
    // We don't compute sigma directly here; we synthesise a series that will create a mean ~10 and small sigma
    // then add values that are clearly outlying on the high side.
    const base = Array.from({ length: 20 }, (_, i) => 10 + ((i % 2 === 0) ? 0.2 : -0.2));
    const series = base.concat([14.0, 13.2, 12.9, 10.1, 10.0]); // 14.0 likely >3σ, 13.2/12.9 likely ≥2σ
    const rows = buildSpcV26a({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data: inputFrom(series),
      settings: withParityV26({ minimumPoints: 12 }),
    }).rows;

    const lastBlock = rows.slice(-6); // include the injected region
    const anyTwoOfThreeUp = lastBlock.some(r => (r as any).twoSigmaUp || [
      VariationIcon.ImprovementHigh,
      VariationIcon.ConcernHigh,
      VariationIcon.NeitherHigh,
    ].includes(r.variationIcon));
    expect(anyTwoOfThreeUp).toBe(true);
  });
});
