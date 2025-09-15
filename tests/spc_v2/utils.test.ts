import { describe, it, expect } from 'vitest';
import { mean, movingRanges, mrMeanWithOptionalExclusion, xmrLimits } from '../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/utils';

describe('utils', () => {
  it('mean works', () => {
    expect(mean([1,2,3])).toBeCloseTo(2);
  });
  it('movingRanges skips ghosts', () => {
    const vals = [1, 4, null, 10, 12];
    const ghosts = [false, false, true, false, false];
    const mr = movingRanges(vals as any, ghosts);
    expect(mr[1]).toBe(3);
    expect(mr[3]).toBe(6); // from 4 to 10 (skipping null ghosted)
  });
  it('xmrLimits returns bands from center and mrMean', () => {
    const lim = xmrLimits(10, 2);
    expect(lim.upperProcessLimit).toBeCloseTo(10 + 2*2.66);
    expect(lim.upperTwoSigma).toBeCloseTo(10 + (2/3) * 2*2.66);
  });
  it('mrMeanWithOptionalExclusion excludes over UCL when enabled', () => {
    const mr = [1,2,100,3,4];
    const { mrMean } = mrMeanWithOptionalExclusion(mr as any, true);
    expect(mrMean).toBeLessThan(22);
  });
});
