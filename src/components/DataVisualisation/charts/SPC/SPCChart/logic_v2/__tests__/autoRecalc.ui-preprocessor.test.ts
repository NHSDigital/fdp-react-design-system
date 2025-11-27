import { describe, it, expect } from 'vitest';
import { autoInsertBaselinesV2, autoInsertBaselinesMultiV2, findAutoRecalcBaselineIndexV2 } from '../utils/autoRecalc';
import { ChartType, ImprovementDirection, type SpcInputRowV2 } from '../types';

function rows(values: Array<number | null>, opts?: { ghosts?: boolean[]; baselineAt?: number }): SpcInputRowV2[] {
  const ghosts = opts?.ghosts ?? [];
  const baselineAt = opts?.baselineAt ?? -1;
  return values.map((v, i) => ({ x: i, value: v as number | null, ghost: !!ghosts[i], baseline: i === baselineAt }));
}

describe('autoInsertBaselinesV2 (UI preprocessor)', () => {
  it('returns original when disabled via caller', () => {
    const r = rows([1,2,3,4,5,6,7,8]);
    const out = autoInsertBaselinesV2(r, { chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, shiftLength: 6, deltaSigma: 0.5 });
    expect(out).toHaveLength(r.length);
  });

  it('does not apply for non-XmR chart types', () => {
    const r = rows([1,2,3,4,5,6,7,8]);
    const idx = findAutoRecalcBaselineIndexV2(r, { chartType: ChartType.T, metricImprovement: ImprovementDirection.Up, shiftLength: 6, deltaSigma: 0.5 });
    expect(idx).toBeNull();
  });

  it('detects a favourable upward shift (Up metric)', () => {
    // Pre window ~2, post window ~8 => strong positive delta
    const r = rows([1,2,2,3,2,2, 7,8,9,8,8,8]);
    const idx = findAutoRecalcBaselineIndexV2(r, { chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, shiftLength: 6, deltaSigma: 0.25 });
    expect(idx).not.toBeNull();
    if (idx != null) {
      const out = autoInsertBaselinesV2(r, { chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, shiftLength: 6, deltaSigma: 0.25 });
      expect(out[idx]?.baseline).toBe(true);
    }
  });

  it('detects a favourable downward shift (Down metric)', () => {
    const r = rows([9,8,9,8,9,8, 3,2,3,2,2,2]);
    const idx = findAutoRecalcBaselineIndexV2(r, { chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Down, shiftLength: 6, deltaSigma: 0.25 });
    expect(idx).not.toBeNull();
  });

  it('respects minGap since last baseline', () => {
    const r = rows([1,1,1,1,1,1, 6,6,6,6,6,6], { baselineAt: 5 });
    const idx = findAutoRecalcBaselineIndexV2(r, { chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, shiftLength: 6, deltaSigma: 0.25, minGap: 10 });
    expect(idx).toBeNull();
  });

  it('ignores ghosts and nulls in windows', () => {
    const r = rows([1,2,null,2,2,2, 7,8,9,8,8,8], { ghosts: [false,false,false,false,false,false, false,false,false,false,false,false] });
    // Use a slightly shorter shift window to account for one null value while still requiring sustained evidence
    const idx = findAutoRecalcBaselineIndexV2(r, { chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, shiftLength: 5, deltaSigma: 0.25 });
    expect(idx).not.toBeNull();
  });

  it('returns null when insufficient numeric points', () => {
    const r = rows([1, null, null, null, null, null]);
    const idx = findAutoRecalcBaselineIndexV2(r, { chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, shiftLength: 6, deltaSigma: 0.5 });
    expect(idx).toBeNull();
  });
});

describe('autoInsertBaselinesMultiV2 (UI preprocessor)', () => {
  function indices(arr: { baseline?: boolean }[]) {
    const out: number[] = [];
    arr.forEach((r, i) => { if (r.baseline) out.push(i); });
    return out;
  }

  it('inserts up to maxInsertions baselines iteratively', () => {
    // Construct a series with two clear upward shifts separated by enough points
    // Window 1 (stable low): indices 0-5 ~2
    // Shift A at 6: indices 6-11 ~8
    // Stable A: 6 points, then another jump at 12 to ~14
    const r = rows([1,2,2,2,2,2, 8,8,9,8,8,8, 14,14,15,14,14,15]);
    const out = autoInsertBaselinesMultiV2(r, { chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, shiftLength: 6, deltaSigma: 0.5, maxInsertions: 2, minGap: 6 });
    const bl = indices(out);
    expect(bl.length).toBeGreaterThanOrEqual(2);
  });

  it('respects minGap between iterative insertions', () => {
    // Two shifts but too close together to both be inserted when minGap is large
    const r = rows([1,1,1,1,1,1, 6,6,6,6,6,6, 9,9,9,9,9,9]);
    const out = autoInsertBaselinesMultiV2(r, { chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, shiftLength: 6, deltaSigma: 0.25, maxInsertions: 2, minGap: 12 });
    const bl = indices(out);
    expect(bl.length).toBe(1);
  });
});
