import { describe, it, expect } from 'vitest';
import { buildSpc, ChartType, ImprovementDirection, PrecedenceStrategy, VariationIcon } from '../spc';

function mk(values: number[]) {
  return values.map((v,i)=>({ x: new Date(2024,0,i+1), value: v }));
}

describe('Variation icon classification (alias flags)', () => {
  it('DirectionalFirst: up signals map to Improvement when improvement direction is Up', () => {
    // Create sequence with a high shift (8 points above mean) to trigger shiftUp
    const baseline = Array(8).fill(10);
    const shifted = Array(8).fill(20);
    const data = mk([...baseline, ...shifted]);
    const res = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data, settings:{ precedenceStrategy: PrecedenceStrategy.DirectionalFirst } });
    const last = res.rows[res.rows.length-1];
  expect(last.specialCauseShiftUp).toBe(true);
    expect(last.variationIcon).toBe(VariationIcon.Improvement);
  });

  it('DirectionalFirst: up signals map to Concern when improvement direction is Down', () => {
    const baseline = Array(8).fill(10);
    const shifted = Array(8).fill(20);
    const data = mk([...baseline, ...shifted]);
    const res = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Down, data, settings:{ precedenceStrategy: PrecedenceStrategy.DirectionalFirst } });
    const last = res.rows[res.rows.length-1];
  expect(last.specialCauseShiftUp).toBe(true);
    expect(last.variationIcon).toBe(VariationIcon.Concern);
  });

  it('Legacy strategy still produces same icon outcome using legacy flags', () => {
    const baseline = Array(8).fill(10);
    const shifted = Array(8).fill(20);
    const data = mk([...baseline, ...shifted]);
    const dir = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data, settings:{ precedenceStrategy: PrecedenceStrategy.DirectionalFirst } });
    const legacy = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data, settings:{ precedenceStrategy: PrecedenceStrategy.Legacy } });
  const dLast = dir.rows[dir.rows.length-1]; const lLast = legacy.rows[legacy.rows.length-1];
    // Both should end as Improvement (shift high side favourable when direction Up)
    expect(dLast.variationIcon).toBe(VariationIcon.Improvement);
    expect(lLast.variationIcon).toBe(VariationIcon.Improvement);
  });
});
