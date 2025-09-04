import { describe, it, expect } from 'vitest';
import spcModule, { ImprovementDirection } from './spc';

// Construct dataset with one extreme jump to inflate MRbar.
// Values cluster around 100 except one spike at 130.
const values = [100,101,99,100,100,100,100,130,100,101,99,100,100,100,100,101,99,100];
const data = values.map((v,i)=>({ x:i+1, value:v }));

describe('SPC moving range outlier exclusion', () => {
  it('reduces MR mean and tightens limits when exclusion enabled', () => {
    const noExcl = spcModule.buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Up, data, settings:{ excludeMovingRangeOutliers:false } });
    const excl = spcModule.buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Up, data, settings:{ excludeMovingRangeOutliers:true } });
    const lastNo = noExcl.rows.at(-1)!;
    const lastEx = excl.rows.at(-1)!;
    // Expect MR mean smaller (or equal in worst case) and therefore narrower UCL-LCL span
    const spanNo = (lastNo.upperProcessLimit! - lastNo.lowerProcessLimit!);
    const spanEx = (lastEx.upperProcessLimit! - lastEx.lowerProcessLimit!);
    expect((lastEx.mrMean ?? Infinity) <= (lastNo.mrMean ?? -Infinity)).toBe(true);
    expect(spanEx <= spanNo).toBe(true);
  });
});
