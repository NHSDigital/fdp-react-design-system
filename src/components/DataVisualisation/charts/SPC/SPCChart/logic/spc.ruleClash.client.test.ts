import { describe, it, expect } from 'vitest';
import { buildSpc, ImprovementDirection, VariationIcon } from './spc';

// Rule clash test inspired by SPCRuleClashExplanationV1.0 docs.
// We construct a dataset where a decreasing monotonic run of 6 points all lie below the mean
// so that BOTH the trend (strictly decreasing) and shift (run on one side of mean) rules fire
// simultaneously on the terminal point of the run. This exercises overlapping special cause flags.
// Notes on current implementation semantics:
//  - shiftLow is only flagged on the row where the qualifying run length (N) is first achieved;
//    earlier points in the run are NOT back‑filled. (Documentation example shows start & end markers
//    with layering priority; logic layer presently only marks the end.)
//  - trendDecreasing similarly appears first at the terminal point of the qualifying strictly
//    monotonic sequence (length N).
//  - Variation conflict warnings are only raised when BOTH high and low side signals occur on the
//    same row (not the case here: both are low‑side signals with improvement direction = Down).
// Expectations validated by this test (observed semantics in current engine):
//  1. Trend (strict monotonic decrease of N=6) is recognised one row earlier (row 12) than the shift run flag.
//     This occurs because by row 12 we have 6 strictly decreasing consecutive values (95,90,85,80,75,70 is not yet
//     fully present; the N tail considered excludes the latest until assignment). Engine sets trendDecreasing at row 12.
//  2. ShiftLow (run of N below mean) appears at row 13 when the Nth consecutive below-mean value completes.
//  3. Terminal row (13) has both shiftLow and trendDecreasing true; prior row (12) only trendDecreasing.
//  4. Variation icon on terminal row is Improvement (direction Down + low side signals); row 12 also Improvement.
//  5. No variation_conflict_row warning is emitted.

describe('SPC rule clash: simultaneous shift + trend (low side, improvement direction = Down)', () => {
  it('flags both shiftLow and trendDecreasing on terminal point of qualifying run without conflict warning', () => {
    // Build a dataset of 13 points (>= global minimumPoints default 13) so limits are calculated.
    // First 7 high values elevate the mean; last 6 form a strictly decreasing sequence all below the mean.
    const values = [130,131,132,129,128,130,131, 95,90,85,80,75,70];
    const data = values.map((v, i) => ({ x: i + 1, value: v }));

    const { rows, warnings } = buildSpc({ chartType: 'XmR', metricImprovement: ImprovementDirection.Down, data });

    const terminal = rows.find(r => r.rowId === values.length)!; // row 13
    const preTerminal = rows.find(r => r.rowId === values.length - 1)!; // row 12
    expect(terminal.mean).not.toBeNull();

    // Row 12: trend only
    expect(preTerminal.specialCauseTrendDecreasing).toBe(true);
    expect(preTerminal.specialCauseShiftLow).toBe(false);
    expect(preTerminal.variationIcon).toBe(VariationIcon.Improvement);

    // Row 13: both shift + trend
    expect(terminal.specialCauseShiftLow).toBe(true);
    expect(terminal.specialCauseTrendDecreasing).toBe(true);
    expect(terminal.variationIcon).toBe(VariationIcon.Improvement);

    // Earlier decreasing run start rows (8-11) no shift/trend yet
    for (let rid = 8; rid <= 11; rid++) {
      const r = rows.find(rr => rr.rowId === rid)!;
      expect(r.specialCauseShiftLow).toBe(false);
      expect(r.specialCauseTrendDecreasing).toBe(false);
    }

    // No variation conflict warning (would require simultaneous high & low signals)
    const conflict = warnings.find(w => w.code === 'variation_conflict_row');
    expect(conflict).toBeUndefined();
  });
});
