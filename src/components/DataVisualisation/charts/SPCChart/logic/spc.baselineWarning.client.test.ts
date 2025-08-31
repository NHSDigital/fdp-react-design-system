import { describe, it, expect } from 'vitest';
import spcModule, { ImprovementDirection } from './spc';

describe('SPC baseline special cause warning', () => {
  it('emits baseline_with_special_cause when baseline row is special cause single point', () => {
    // Baseline extreme outlier followed by many low stable points
    const baselineVal = 200;
    const rest = Array.from({length:20}, (_,i)=> (i%2?50:51));
    const data = [ { x:1, value: baselineVal, baseline:true }, ...rest.map((v,i)=>({ x:i+2, value:v })) ];
    const { warnings, rows } = spcModule.buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Up, data });
    const baselineRow = rows.find(r=>r.rowId===1)!;
    expect(baselineRow.specialCauseSinglePointAbove).toBe(true);
    expect(warnings.some(w=>w.code==='baseline_with_special_cause')).toBe(true);
  });
});
