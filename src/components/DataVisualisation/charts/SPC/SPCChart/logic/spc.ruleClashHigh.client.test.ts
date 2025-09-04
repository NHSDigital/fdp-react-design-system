import { describe, it, expect } from 'vitest';
import { buildSpc, ImprovementDirection, VariationIcon } from './spc';

// High-side rule clash test: simultaneous trendIncreasing + shiftHigh.
// Mirror of low-side test but with improvement direction = Up.
// Observed semantics (see low-side test notes): trend flag appears one row before shift flag.
// Expectations:
//  - Row 11: first trendIncreasing true, shiftHigh false.
//  - Row 12: trendIncreasing still true, shiftHigh false.
//  - Row 13: both trendIncreasing and shiftHigh true.
//  - Rows 11-13 variationIcon = Improvement (direction Up + high-side signals on flagged rows).
//  - Earlier increasing run start rows (8-10) have neither flag.
//  - No variation_conflict_row warning (mixed-side signals unattainable under current rule definitions).

describe('SPC rule clash (high side): simultaneous shiftHigh + trendIncreasing (improvement direction = Up)', () => {
  it('flags trend one row before shift and both on terminal row without conflict warning', () => {
    // Dataset length 13 (meets minimumPoints). First 7 moderate values anchor mean; last 6 strictly increasing high values.
    const values = [70,69,71,68,72,69,70, 110,115,120,125,130,135];
    const data = values.map((v, i) => ({ x: i + 1, value: v }));

    const { rows, warnings } = buildSpc({ chartType: 'XmR', metricImprovement: ImprovementDirection.Up, data });

  const terminal = rows.find(r => r.rowId === values.length)!; // row 13
  const row12 = rows.find(r => r.rowId === 12)!;
  const row11 = rows.find(r => r.rowId === 11)!;
    expect(terminal.mean).not.toBeNull();

  // Row 11: first trend only
  expect(row11.specialCauseTrendIncreasing).toBe(true);
  expect(row11.specialCauseShiftHigh).toBe(false);
  expect(row11.variationIcon).toBe(VariationIcon.Improvement);
  // Row 12: trend only continuation
  expect(row12.specialCauseTrendIncreasing).toBe(true);
  expect(row12.specialCauseShiftHigh).toBe(false);
  expect(row12.variationIcon).toBe(VariationIcon.Improvement);
  // Row 13: both shift + trend
    expect(terminal.specialCauseShiftHigh).toBe(true);
    expect(terminal.specialCauseTrendIncreasing).toBe(true);
    expect(terminal.variationIcon).toBe(VariationIcon.Improvement);

  // Earlier increasing run rows (8-10) no shift/trend yet
  for (let rid = 8; rid <= 10; rid++) {
      const r = rows.find(rr => rr.rowId === rid)!;
      expect(r.specialCauseShiftHigh).toBe(false);
      expect(r.specialCauseTrendIncreasing).toBe(false);
    }

    const conflict = warnings.find(w => w.code === 'variation_conflict_row');
    expect(conflict).toBeUndefined();
  });
});
