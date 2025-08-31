import { describe, it, expect } from 'vitest';
import { buildSpc, ImprovementDirection, VariationIcon } from './logic/spc';

// Chart1 dataset from SPCRuleClashExamples (staff sickness) – dates as YYYY-MM
const chart1 = [
  { x: '2022-01', y: 3.53 }, { x: '2022-02', y: 3.96 }, { x: '2022-03', y: 4.54 }, { x: '2022-04', y: 4.94 },
  { x: '2022-05', y: 5.15 }, { x: '2022-06', y: 5.73 }, { x: '2022-07', y: 5.85 }, { x: '2022-08', y: 5.64 },
  { x: '2022-09', y: 4.11 }, { x: '2022-10', y: 5.15 }, { x: '2022-11', y: 4.94 }, { x: '2022-12', y: 5.76 },
  { x: '2023-01', y: 4.51 }, { x: '2023-02', y: 5.76 }, { x: '2023-03', y: 5.15 }, { x: '2023-04', y: 5.64 },
];

const toData = (series: { x: string; y: number }[]) => series.map(p => ({ x: new Date(p.x), value: p.y }));

describe('RuleClash Chart1 diagnostic (directional_first vs legacy)', () => {
  it('logs per-row flags and validates concern classification for high months', () => {
    const data = toData(chart1);
    const legacy = buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Down, data, settings:{ precedenceStrategy:'legacy' }});
    const directional = buildSpc({ chartType:'XmR', metricImprovement: ImprovementDirection.Down, data, settings:{ precedenceStrategy:'directional_first', emergingDirectionGrace:true }});

    // Build a compact table of key fields for directional strategy
    const rows = directional.rows.map((r,i) => ({
      i,
      date: chart1[i].x,
      value: r.value,
      mean: r.mean,
      sp1High: r.specialCauseSinglePointAbove,
      twoOf3High: r.specialCauseTwoOfThreeAbove,
      fourOf5High: r.specialCauseFourOfFiveAbove,
      shiftHigh: r.specialCauseShiftHigh,
      trendInc: r.specialCauseTrendIncreasing,
      variation: r.variationIcon,
    }));
    // eslint-disable-next-line no-console
    console.table(rows);

    // Assert June 2022 (index 5) classified as Concern (since metricImprovement=Down higher=unfavourable)
    expect(directional.rows[5].variationIcon).toBe(VariationIcon.Concern);
    // Assert Aug 2022 (index 7) through Jan 2023 (index 12) mostly concerns where high-side special causes present
    for (let i = 7; i <= 12; i++) {
      const r = directional.rows[i];
      const anyHigh = r.specialCauseSinglePointAbove || r.specialCauseTwoOfThreeAbove || r.specialCauseFourOfFiveAbove || r.specialCauseShiftHigh || r.specialCauseTrendIncreasing;
      if (anyHigh) {
        expect(r.variationIcon).toBe(VariationIcon.Concern);
      }
    }

    // Sanity: legacy high-side months should also not be Improvement
    expect(legacy.rows[5].variationIcon).not.toBe(VariationIcon.Improvement);
  });
});
