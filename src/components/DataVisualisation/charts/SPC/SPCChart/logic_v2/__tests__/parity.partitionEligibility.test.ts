import { describe, it, expect } from 'vitest';
import { buildSpcV26a } from '../engine';
import { ChartType, ImprovementDirection } from '../types';
import { withParityV26 } from '../presets';

function asInput(values: Array<number | null>, baselineIndexes: number[] = []) {
  const start = new Date(2024, 0, 1);
  return values.map((v, i) => ({
    x: new Date(start.getFullYear(), start.getMonth() + i, 1),
    value: v,
    ghost: false,
    baseline: baselineIndexes.includes(i),
    target: null as number | null,
  }));
}

describe('parity: per-partition eligibility (minimumPoints)', () => {
  it('suppresses limits and rules in partitions with insufficient points', () => {
    // Two partitions: first has only 4 non-ghost points, second has 6
    // minimumPoints set to 5 → first ineligible, second eligible
    const series = [10, 11, 10, 12, /* baseline */ 13, 12, 11, 10, 9, 8];
    const baselineAt = 4; // split after index 4
    const rows = buildSpcV26a({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data: asInput(series, [baselineAt]),
      settings: withParityV26({ minimumPoints: 5 }),
    }).rows;

    const part1 = rows.filter(r => r.partitionId === 1);
    const part2 = rows.filter(r => r.partitionId === 2);

    // Partition 1 has 5 rows including the baseline row; but only 4 valued before the split
    // Under eligibility gating, its limits should be null and rules false
    for (const r of part1) {
      expect(r.mean, 'p1 mean gated').toBeNull();
      expect(r.upperProcessLimit, 'p1 UCL gated').toBeNull();
      expect(r.lowerProcessLimit, 'p1 LCL gated').toBeNull();
      expect(r.upperTwoSigma, 'p1 +2σ gated').toBeNull();
      expect(r.lowerTwoSigma, 'p1 -2σ gated').toBeNull();
      expect(r.singlePointUp || r.singlePointDown || r.twoSigmaUp || r.twoSigmaDown || r.shiftUp || r.shiftDown).toBe(false);
    }

    // Partition 2 has >=5 valued points → limits present
    const anyWithMean = part2.some(r => r.mean !== null);
    expect(anyWithMean, 'p2 emits limits').toBe(true);
  });

  it('still allows global trend across partitions when enabled', () => {
    // First partition ineligible, second eligible; an increasing run of 6 spans the split
    const head = [10, 10.1]; // 2 points only
    const tail = [10.2, 10.3, 10.4, 10.5, 10.6, 10.7];
    const series = head.concat(tail);
    const baselineAt = head.length - 1;
    const rows = buildSpcV26a({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data: asInput(series, [baselineAt]),
      settings: withParityV26({ minimumPoints: 5, trendPoints: 6 }),
    }).rows;

    const incFlags = rows.filter(r => !r.ghost).map(r => r.trendUp);
    expect(incFlags.filter(Boolean).length).toBeGreaterThanOrEqual(6);
  });
});
