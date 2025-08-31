import { describe, it } from 'vitest';
import spcModule, { ImprovementDirection } from './spc';
import fs from 'node:fs';
import path from 'node:path';

// Generator test (skip on normal runs). Run manually to refresh golden fixtures.
describe('GENERATE all golden snapshots', () => {
  it('outputs JSON for XmR, T, G', () => {
    // XmR dataset from CSV (hard-coded here for generation only)
    const xmrValues = [55,60,51,50,51,60,50,51,52,52,60,50,60,50,49,45,51,45,44,43,40,35,30,25];
    const xmrData = xmrValues.map((v,i)=>({x:i+1,value:v}));
    const xmr = spcModule.buildSpc({ chartType:'XmR', metricImprovement:ImprovementDirection.Up, data: xmrData, settings:{ enableFourOfFiveRule:true } });

    const tData = [5,7,9,4,6,8,30,7,6,5,4,3,2,1].map((v,i)=>({x:i+1,value:v,target:10, ghost: i===5}));
    const t = spcModule.buildSpc({ chartType:'T', metricImprovement:ImprovementDirection.Up, data: tData, settings:{ enableFourOfFiveRule:true, suppressIsolatedFavourablePoint:false } });

    const gData = [10,11,9,10,12,8,7,6,40,7,8,9,10,11].map((v,i)=>({x:i+1,value:v,target:10, ghost: i===4}));
    const g = spcModule.buildSpc({ chartType:'G', metricImprovement:ImprovementDirection.Up, data: gData, settings:{ enableFourOfFiveRule:true } });

    const pick = (rows: any[]) => rows.map(r => ({
      rowId: r.rowId,
      value: r.value,
      ghost: r.ghostFlag || r.ghost,
      mean: r.mean,
      mr: r.mr,
      mrMean: r.mrMean,
      ucl: r.upperProcessLimit,
      lcl: r.lowerProcessLimit,
      u2: r.upperTwoSigma,
      l2: r.lowerTwoSigma,
      u1: r.upperOneSigma,
      l1: r.lowerOneSigma,
      vIcon: r.variationIcon,
      sc3High: r.specialCauseSinglePointAbove,
      sc3Low: r.specialCauseSinglePointBelow,
      sc23High: r.specialCauseTwoOfThreeAbove,
      sc23Low: r.specialCauseTwoOfThreeBelow,
      sc45High: r.specialCauseFourOfFiveAbove,
      sc45Low: r.specialCauseFourOfFiveBelow,
      shiftHigh: r.specialCauseShiftHigh,
      shiftLow: r.specialCauseShiftLow,
      trendUp: r.specialCauseTrendIncreasing,
      trendDown: r.specialCauseTrendDecreasing,
    }));

    const golden = { XmR: pick(xmr.rows), T: pick(t.rows), G: pick(g.rows) };
    const outPath = path.resolve(__dirname, '../test-data/golden-all.json');
    fs.writeFileSync(outPath, JSON.stringify(golden, null, 2));
  });
});
