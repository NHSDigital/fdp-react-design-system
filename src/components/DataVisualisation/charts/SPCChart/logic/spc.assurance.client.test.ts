import { describe, it, expect } from 'vitest';
import spcModule, { ImprovementDirection, AssuranceIcon } from './spc';

// Utility to embed a uniform target across dataset rows
function withTarget(values: number[], target: number) { return values.map((v,i)=>({ x:i+1, value:v, target })); }

describe('SPC assurance icon capability mode', () => {
  const baseValues = [50,51,49,50,51,49,50,50,50,51,49,50,50]; // 13 points
  // Derive limits once to pick representative targets
  const seed = spcModule.buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Up, data: withTarget(baseValues, 0) });
  const last = seed.rows[seed.rows.length - 1];
  const lcl = last.lowerProcessLimit!; const ucl = last.upperProcessLimit!;
  const targetBelow = lcl - Math.abs(lcl)*0.1; // ensure below band
  const targetInside = (lcl + ucl)/2;
  const targetAbove = ucl + Math.abs(ucl)*0.1;

  it('Up direction: pass when band above target, fail when band below target, none when overlaps', () => {
    const pass = spcModule.buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Up, data: withTarget(baseValues, targetBelow) });
    const fail = spcModule.buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Up, data: withTarget(baseValues, targetAbove) });
    const none = spcModule.buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Up, data: withTarget(baseValues, targetInside) });
    const lp = pass.rows.at(-1)!; const lf = fail.rows.at(-1)!; const ln = none.rows.at(-1)!;
    expect(lp.assuranceIcon).toBe(AssuranceIcon.Pass);
    expect(lf.assuranceIcon).toBe(AssuranceIcon.Fail);
    expect(ln.assuranceIcon).toBe(AssuranceIcon.None);
  });

  it('Down direction: pass when band below target, fail when band above target', () => {
    const pass = spcModule.buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Down, data: withTarget(baseValues, targetAbove) });
    const fail = spcModule.buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Down, data: withTarget(baseValues, targetBelow) });
    const lp = pass.rows.at(-1)!; const lf = fail.rows.at(-1)!;
    expect(lp.assuranceIcon).toBe(AssuranceIcon.Pass);
    expect(lf.assuranceIcon).toBe(AssuranceIcon.Fail);
  });

  it('Neither direction: assurance icon stays none even with target', () => {
    const neutral = spcModule.buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Neither, data: withTarget(baseValues, targetInside) });
    const lastRow = neutral.rows.at(-1)!;
    expect(lastRow.assuranceIcon).toBe(AssuranceIcon.None);
  });
});
