import { describe, it, expect } from 'vitest';
import { buildSpc, ImprovementDirection, VariationIcon, type SpcSettings } from './spc';

/** Utility to build simple XmR rows */
function makeData(levels: number[]): { x: number; value: number }[] {
  return levels.map((v, i) => ({ x: i + 1, value: v }));
}

// Dataset: 10 low, 10 high (clear 2-phase process) – enables both early low shift and later high shift.
const twoPhaseValues = [
  10,10,10,10,10,10,10,10,10,10, // early phase
  20,20,20,20,20,20,20,20,20,20   // later favourable shift
];

describe('buildSpc – comparative & retroactive heuristics', () => {
  it('retroactiveOppositeShiftNeutralisation removes earlier unfavourable shift', () => {
    const base = buildSpc({ chartType: 'XmR', metricImprovement: ImprovementDirection.Up, data: makeData(twoPhaseValues) });
    // Early rows should show a low-side shift (concern) prior to heuristic
    const earlyConcernCount = base.rows.slice(0,6).filter(r => r.specialCauseShiftLow).length;
    expect(earlyConcernCount).toBeGreaterThan(0);

    const neutralised = buildSpc({ chartType: 'XmR', metricImprovement: ImprovementDirection.Up, data: makeData(twoPhaseValues), settings: { retroactiveOppositeShiftNeutralisation: true } });
    const earlyConcernAfter = neutralised.rows.slice(0,6).filter(r => r.specialCauseShiftLow).length;
    expect(earlyConcernAfter).toBe(0);
  });

  it('comparativeBaselineEmulation retrospectively tags early phase as concern & later as improvement', () => {
    const settings: SpcSettings = {
      comparativeBaselineEmulation: true,
      comparativeEmulationRetrospectiveEarlyAsConcern: true,
      comparativeEmulationPropagateFavourable: true,
    };
    const res = buildSpc({ chartType: 'XmR', metricImprovement: ImprovementDirection.Up, data: makeData(twoPhaseValues), settings });
    const earlyIcons = res.rows.slice(0,10).map(r => r.variationIcon);
    const lateIcons = res.rows.slice(10).map(r => r.variationIcon);
    expect(earlyIcons.every(v => v === VariationIcon.Concern)).toBe(true);
    expect(lateIcons.every(v => v === VariationIcon.Improvement)).toBe(true);
  });

  it('invert+common with tail concern produces common then tail concern pattern', () => {
    const settings: SpcSettings = {
      retroactiveOppositeShiftNeutralisation: true,
      comparativeBaselineEmulation: true,
      comparativeEmulationInvert: true,
      comparativeEmulationInvertAsCommon: true,
      comparativeEmulationRetrospectiveEarlyAsConcern: false,
      comparativeEmulationInvertTailConcernPoints: 3,
    };
    const res = buildSpc({ chartType: 'XmR', metricImprovement: ImprovementDirection.Up, data: makeData(twoPhaseValues), settings });
    const icons = res.rows.map(r => r.variationIcon);
    const head = icons.slice(0,17); // first 17 should be common
    const tail = icons.slice(17);   // last 3 should be concern
    expect(head.every(v => v === VariationIcon.Neither || v === VariationIcon.None)).toBe(true); // strictly neutral/common
    expect(tail.every(v => v === VariationIcon.Concern)).toBe(true);
  });
});
