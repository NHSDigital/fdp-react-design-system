import { describe, it, expect } from 'vitest';
import { buildSpc, ChartType, ImprovementDirection } from './spc';

const toRows = (vals: number[]) => vals.map((v,i)=> ({ x: i+1, value: v }));

describe('SPC two-of-three rule excludes 3σ points from counting (low side symmetry)', () => {
  it('flags two points between -2σ and -3σ when third is < -3σ (excludes < -3σ from count)', () => {
    // Large stable baseline to stabilise limits
    const pattern = [100,101,99,100,101];
    const baseline = Array.from({length:60}, (_,i)=> pattern[i%pattern.length]);
    const { rows: baselineRows } = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: toRows(baseline) });
    const ref = baselineRows[baselineRows.length -1]!;
    const l2 = ref.lowerTwoSigma!; // numeric
    const l3 = ref.lowerProcessLimit!;
    // Two mid-band (between l3 and l2) and one extreme (< l3)
    const mid1 = l2 - (l2 - l3) * 0.3; // still above l3
    const mid2 = l2 - (l2 - l3) * 0.7; // closer to l3 but > l3
    const extreme = l3 - (l2 - l3) * 0.5; // below 3σ
    const cluster = [mid1, mid2, extreme];
    const values = [...baseline, ...cluster];
    const { rows } = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: toRows(values) });
    const last3 = rows.slice(-3);
    const midBand = last3.filter(r => r.value! < l2 && r.value! > l3);
    const extremePt = last3.find(r => r.value! < l3)!;
    expect(midBand.length).toBe(2);
    expect(extremePt).toBeTruthy();
  expect(midBand.every(r => r.specialCauseTwoOfThreeDown)).toBe(true);
  expect(extremePt.specialCauseSinglePointDown).toBe(true);
  expect(extremePt.specialCauseTwoOfThreeDown).toBe(false);
  });

  it('does not fire two-of-three when only one point between -2σ and -3σ and another is < -3σ', () => {
    const pattern = [200,201,199,200,201];
    const baseline = Array.from({length:60}, (_,i)=> pattern[i%pattern.length]);
    const { rows: baseRows } = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: toRows(baseline) });
    const ref = baseRows[baseRows.length -1]!;
    const l2 = ref.lowerTwoSigma!;
    const l3 = ref.lowerProcessLimit!;
    const mid = l2 - (l2 - l3) * 0.4; // between -2σ & -3σ
    const extreme = l3 - (l2 - l3) * 0.5; // beyond -3σ
    const inside = ref.mean! - (ref.mean! - l2) * 0.5; // below mean, above -2σ
    const values = [...baseline, mid, extreme, inside];
    const { rows } = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: toRows(values) });
    const last3 = rows.slice(-3); // extreme, inside plus maybe mid depending on order
  const flags = last3.map(r => r.specialCauseTwoOfThreeDown);
    expect(flags.filter(Boolean).length).toBeLessThan(2);
  });
});
