import { describe, it, expect } from 'vitest';
import { buildSpc, ChartType, ImprovementDirection, VariationIcon } from './spc';

function toRows(values: number[]) {
  return values.map((v, i) => ({ x: i + 1, value: v }));
}

describe('SPC trend side gating (regression)', () => {
  it('Down direction: monotonic decreasing trend above mean should NOT yield Improvement until values cross mean', () => {
    // Dataset structure:
    //  - First 6 points: strict decreasing sequence (trendDecreasing) ALL above global mean
    //  - Additional 6 high/mid noise points to stabilise baseline (mostly above mean)
    //  - 12 low points forming a downward shift + sustained lower phase (below mean)
    const values = [
      90,89,88,87,86,85,   // monotonic decreasing trend (should not yet be Improvement)
      89,88,87,88,87,89,   // mixed baseline noise (above mean, maintains high-side run)
      78,77,76,75,77,76,72,73,74,75,73,74 // low shift + consolidation (should be Improvement side)
    ];
    const meanApprox = values.reduce((a,b)=>a+b,0)/values.length; // ~81.9
    const { rows } = buildSpc({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Down,
      data: toRows(values),
      settings: { enableFourOfFiveRule: false }
    });

    // Indices 0..5: decreasing trend while still above mean -> expect Concern (unfavourable high-side run)
    for (let i=0;i<6;i++) {
      const r = rows[i]!;
      expect(r.value! > (r.mean ?? meanApprox)).toBe(true); // above mean
      expect(r.specialCauseTrendDecreasing).toBe(true);      // trend flagged
      expect(r.variationIcon).toBe(VariationIcon.Concern);   // NOT Improvement (regression check)
    }

    // Identify first index where value crosses to favourable (below mean)
    const firstLowIdx = rows.findIndex(r => r.mean !== null && r.value !== null && r.value < r.mean);
    expect(firstLowIdx).toBeGreaterThan(5);

    // From first low index onward (low shift region) expect Improvement icons on special-cause points
    // Check a subset (last 6 rows)
    for (let i = rows.length - 6; i < rows.length; i++) {
      const r = rows[i]!;
      expect(r.value! < (r.mean!)).toBe(true);
      expect([VariationIcon.Improvement, VariationIcon.Concern, VariationIcon.Neither]).toContain(r.variationIcon);
    }
    // Ensure at least one Improvement exists in the low phase (sanity that classification still works)
    const anyImprovementLowPhase = rows.slice(firstLowIdx).some(r => r.variationIcon === VariationIcon.Improvement);
    expect(anyImprovementLowPhase).toBe(true);
  });

  it('Neutral direction: trend signals never map to Improvement/Concern (always Neither)', () => {
    // Construct a strong increasing then decreasing trend around mean.
    const values = [10,11,12,13,14,15,16,15,14,13,12,11,10,11,12];
    const { rows } = buildSpc({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Neither,
      data: toRows(values),
      settings: { enableFourOfFiveRule: false }
    });
    // Collect any rows that have trend flags
    const trendRows = rows.filter(r => r.specialCauseTrendIncreasing || r.specialCauseTrendDecreasing);
    // For neutral metrics variationIcon should always be Neither (even when rules fire)
    for (const r of trendRows) {
      expect(r.variationIcon).toBe(VariationIcon.Neither);
    }
  });
});
