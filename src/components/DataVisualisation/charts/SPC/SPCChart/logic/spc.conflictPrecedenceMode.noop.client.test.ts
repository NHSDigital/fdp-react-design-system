import { describe, it, expect } from 'vitest';
import { buildSpc, ImprovementDirection, ConflictPrecedenceMode, ChartType } from './spc';

// Documentation test: The sql_ranking_v2_6a conflict precedence mode is presently a no-op because
// orthodox Shewhart rule geometry (single-point 3σ, two-of-three 2σ, shift, trend) cannot yield
// simultaneous high- and low-side rule satisfaction on the SAME row. Therefore the conflict
// resolution block (which requires both specialCauseImprovementValue & specialCauseConcernValue)
// is not entered for current rule set. This test guards that enabling the mode does not mutate
// ordinary variation classifications nor spurious metadata.

describe('SPC conflictPrecedenceMode (sql_ranking_v2_6a) inert behaviour', () => {
  it('produces identical variation outputs and no conflict metadata for typical mixed signals dataset', () => {
    // Craft a dataset with a sustained low shift followed by a high single point after recalculation potential.
    const values = [100,101,99,100,101,100,100, 90,89,88,87,86,85, 130];
    const data = values.map((v,i) => ({ x: i+1, value: v }));

  const base = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data, settings: { conflictPrecedenceMode: ConflictPrecedenceMode.None }});
  const ranked = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data, settings: { conflictPrecedenceMode: ConflictPrecedenceMode.SqlRankingV26a }});

    expect(ranked.rows.length).toBe(base.rows.length);

    for (let i=0;i<base.rows.length;i++) {
      const a = base.rows[i];
      const b = ranked.rows[i];
      // Core variation fields should match (mode is inert)
      expect(b.variationIcon).toBe(a.variationIcon);
      expect(b.specialCauseImprovementValue).toBe(a.specialCauseImprovementValue);
      expect(b.specialCauseConcernValue).toBe(a.specialCauseConcernValue);
      // Conflict metadata should remain undefined
      expect(b.conflictResolved).toBeUndefined();
      expect(b.conflictPrimeDirection).toBeUndefined();
      expect(b.conflictResolvedByRuleId).toBeUndefined();
      expect(b.originalSpecialCauseImprovementValue).toBeUndefined();
      expect(b.originalSpecialCauseConcernValue).toBeUndefined();
    }
  });
});
