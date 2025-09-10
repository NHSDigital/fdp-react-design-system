import { describe, it, expect } from 'vitest';
import { buildSpc, ChartType, ImprovementDirection, VariationIcon } from './spc';

const toRows = (vals: number[]) => vals.map((v,i)=> ({ x: i+1, value: v }));

describe('SPC trend gating – alternating equal/above & mixed-direction partial trends', () => {
  it('Alternating equal & above-mean pattern does not yield premature Improvement until true high-side shift', () => {
    // Baseline: 12 identical values (all equal to mean -> no run, no shift)
    // Alternating pattern: equal-to-mean (100) then slightly above (101) resets run on each equality
    // Final tail: 6 consecutive high values establishing a legitimate shift -> Improvement allowed
    const values = [
      100,100,100,100,100,100,100,100,100,100,100,100,
      100,101,100,101,100,101,
      110,111,112,113,114,115
    ];
    const { rows } = buildSpc({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data: toRows(values),
      settings: { minimumPoints: 12, enableFourOfFiveRule: false }
    });
    // Identify tail start index (where sustained high shift begins)
    const tailStart = values.indexOf(110); // first sustained high value
    // Assert no Improvement icons before tailStart
    for (let i=0; i<tailStart; i++) {
      const r = rows[i]!;
      expect(r.variationIcon).not.toBe(VariationIcon.Improvement);
      // Ensure no false shift flagging
  expect(r.specialCauseShiftUp).toBe(false);
    }
    // Tail should eventually yield Improvement (due to shiftHigh or pattern rules)
    const tailImprovement = rows.slice(tailStart).some(r => r.variationIcon === VariationIcon.Improvement);
    expect(tailImprovement).toBe(true);
  });

  it('Mixed-direction partial trends (increase then decrease while above mean) do not create false Concern in Up metric', () => {
    // Pattern: rising sequence crosses mean -> high plateau -> gentle decrease still ABOVE mean -> higher tail.
    // Decreasing partial trend above mean should NOT map to Concern (gating requires low-side position).
    const values = [
      50,51,52,53,54,55, // initial climb (likely below mean early)
      60,62,64,66,68,70, // strong increase crossing mean -> improvement region
      69,68,67,66,65,64, // gentle decrease but remain relatively high
      75,78,80 // re-acceleration
    ];
    const { rows } = buildSpc({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data: toRows(values),
      settings: { minimumPoints: 12 }
    });
    // Collect any rows marked with trendDecreasing
  const decRows = rows.filter(r => r.specialCauseTrendDown);
    // Ensure none of these are classified as Concern (since still on/above mean for Up metric)
    for (const r of decRows) {
      if (r.mean !== null && r.value !== null && r.value >= r.mean) {
        expect(r.variationIcon).not.toBe(VariationIcon.Concern);
      }
    }
    // Also ensure we have at least one Improvement overall (sanity that favourable classification still occurs)
    expect(rows.some(r => r.variationIcon === VariationIcon.Improvement)).toBe(true);
  });
});
