import { describe, it, expect } from 'vitest';
import { buildSpc, ChartType, ImprovementDirection } from './spc';

// Scenario: triple window with 2 points between 2σ and 3σ and one >3σ should count only the two between bands.
// Scenario: if one candidate >3σ and only one remaining between 2σ & 3σ, rule should NOT fire.

const toRows = (vals: number[]) => vals.map((v,i)=> ({ x: i+1, value: v }));

describe('SPC two-of-three rule excludes 3σ points from counting', () => {
  it('flags two points between 2σ and 3σ when third is >3σ (excludes the >3σ from count)', () => {
    // Build baseline to obtain dynamic 2σ & 3σ thresholds (robust to calculation details)
  const pattern = [100,101,99,100,101];
  const baseline = Array.from({length:60}, (_,i)=> pattern[i%pattern.length]);
    const { rows: baselineRows } = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: toRows(baseline) });
    const ref = baselineRows[baselineRows.length -1]!;
    const u2 = ref.upperTwoSigma!; // expect numeric
    const u3 = ref.upperProcessLimit!;
    // Choose two values strictly between 2σ and 3σ and one beyond 3σ
    const mid1 = u2 + (u3 - u2) * 0.35;
    const mid2 = u2 + (u3 - u2) * 0.7; // still < u3
    const extreme = u3 + (u3 - u2) * 0.5; // > 3σ
    const cluster = [mid1, mid2, extreme];
    const values = [...baseline, ...cluster];
    const { rows } = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: toRows(values) });
  const last3 = rows.slice(-3);
  const midBand = last3.filter(r => r.value! > u2 && r.value! < u3);
  const extremePt = last3.find(r => r.value! > u3)!;
  expect(midBand.length).toBe(2);
  expect(extremePt).toBeTruthy();
  // Mid-band points should be two-of-three flagged
  expect(midBand.every(r => r.specialCauseTwoOfThreeUp)).toBe(true);
  // Extreme should only be single point
  expect(extremePt.specialCauseSinglePointUp).toBe(true);
  expect(extremePt.specialCauseTwoOfThreeUp).toBe(false);
  });

  it('does not fire two-of-three when only one point between 2σ and 3σ and another is >3σ', () => {
  const pattern2 = [60,61,59,60,61];
  const baseline = Array.from({length:60}, (_,i)=> pattern2[i%pattern2.length]);
    const { rows: baseRows } = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: toRows(baseline) });
    const ref = baseRows[baseRows.length -1]!;
    const u2 = ref.upperTwoSigma!;
    const u3 = ref.upperProcessLimit!;
    const mid = u2 + (u3 - u2) * 0.4; // between 2σ & 3σ
    const extreme = u3 + (u3 - u2) * 0.5; // >3σ
    const inside = ref.mean! + (u2 - ref.mean!) * 0.5; // below 2σ (inside band but above mean)
    const values = [...baseline, mid, extreme, inside];
    const { rows } = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: toRows(values) });
    const last3 = rows.slice(-3); // mid, extreme, inside (order differs due to append order; we appended mid, extreme, inside)
  const bandFlags = last3.map(r => r.specialCauseTwoOfThreeUp);
    expect(bandFlags.filter(Boolean).length).toBeLessThan(2);
  });
});
