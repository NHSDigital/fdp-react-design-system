import { buildSpc, ImprovementDirection } from './spc';
import { resolvedSpcTestCases } from '../test-data/spcTestCases';

describe('single point ends diagnostics', () => {
  it('logs row data', () => {
    const tc = resolvedSpcTestCases.find(t => t.title === 'Special cause - single point - ends');
    expect(tc).toBeTruthy();
    if(!tc) return;
    const data = tc.values.map((v,i)=>({ x: i+1, value: v }));
    const res = buildSpc({ chartType: 'XmR', metricImprovement: ImprovementDirection.Up, data });
    const rows = res.rows.filter(r=>!r.ghost).map(r=>({
      i: r.rowId,
      v: r.value,
      mean: r.mean,
      ucl: r.upperProcessLimit,
      lcl: r.lowerProcessLimit,
      two3A: r.specialCauseTwoOfThreeAbove,
      two3B: r.specialCauseTwoOfThreeBelow,
      singleAbove: r.specialCauseSinglePointAbove,
      singleBelow: r.specialCauseSinglePointBelow,
      shiftHigh: r.specialCauseShiftHigh,
      shiftLow: r.specialCauseShiftLow,
      trendInc: r.specialCauseTrendIncreasing,
      trendDec: r.specialCauseTrendDecreasing,
      icon: r.variationIcon
    }));
    if (process.env.SPC_DEBUG) {
      console.log('SINGLE_POINT_ENDS_ROWS', rows);
    }
  });
});
