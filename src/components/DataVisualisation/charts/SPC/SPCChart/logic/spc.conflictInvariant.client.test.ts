import { describe, it, expect } from 'vitest';
import { buildSpc, ImprovementDirection, VariationIcon } from './spc';

// Conflict invariance test: attempt to create pathological oscillation intended to provoke both high & low
// special-cause signals on the SAME row. Given the side-of-mean gating in current implementation, this is
// mathematically impossible (each multi-point rule enforces all points on ONE side of mean; single point
// rules require value > UCL or < LCL exclusively). This test documents and guards that invariant.

describe('SPC variation conflict invariant', () => {
  it('does not emit variation_conflict_row warning even with extreme alternating signals', () => {
    // Construct dataset: start with stable center values to establish tight limits, then alternate extreme high/low.
    // The extremes aim to trigger single point 3σ signals on alternating rows, but never both at once.
  const stable = Array.from({ length: 15 }, () => 100); // constant region for tight limits
  // Choose extremes far beyond expected 3-sigma (~ mean ± ~115 based on MRbar from constant region -> near-zero MR -> very tight? actual code: MR from constant region becomes 0 so limits may collapse; to avoid zero MR, inject tiny noise)
  // Introduce small jitter to avoid zero MR then use large extremes beyond resulting limits.
  for (let i = 0; i < stable.length; i++) stable[i] += (i % 2 === 0 ? 0.2 : -0.2);
  const extremes = [260, -40, 255, -42, 265, -45, 270, -50]; // alternating beyond high/low limits
    const values = [...stable, ...extremes];
    const data = values.map((v, i) => ({ x: i + 1, value: v }));

    const { rows, warnings } = buildSpc({ chartType: 'XmR', metricImprovement: ImprovementDirection.Up, data });

    // No row should have both anyHigh and anyLow simultaneously.
    for (const r of rows) {
      const anyHigh = r.specialCauseSinglePointAbove || r.specialCauseTwoOfThreeAbove || r.specialCauseFourOfFiveAbove || r.specialCauseShiftHigh || r.specialCauseTrendIncreasing;
      const anyLow  = r.specialCauseSinglePointBelow || r.specialCauseTwoOfThreeBelow || r.specialCauseFourOfFiveBelow || r.specialCauseShiftLow || r.specialCauseTrendDecreasing;
      expect(!(anyHigh && anyLow)).toBe(true);
    }

    // Consequently, no variation_conflict_row warning should be present.
    const conflict = warnings.find(w => w.code === 'variation_conflict_row');
    expect(conflict).toBeUndefined();

  // Document current invariant: dataset may or may not trigger single-point signals due to global limit calc;
  // absence of variation_conflict_row warning is the key guarded behaviour here.
  });
});
