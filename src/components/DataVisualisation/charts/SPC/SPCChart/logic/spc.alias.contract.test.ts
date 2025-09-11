import { buildSpc, ChartType, ImprovementDirection, ConflictPrecedenceMode, VariationIcon } from './spc';

// Construct a minimal dataset that triggers an up single point beyond 3 sigma for pruning metadata population.
const data = [
  { x: 1, value: 10 }, { x: 2, value: 10 }, { x: 3, value: 10 }, { x: 4, value: 10 },
  { x: 5, value: 200 } // extreme outlier ensures single point special cause
];

describe('alias contract: improvement/concernValueBeforePruning', () => {
  test('canonical alias getters reflect legacy originals post conflict pruning', () => {
    const res = buildSpc({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data,
      settings: { conflictPrecedenceMode: ConflictPrecedenceMode.SqlRankingV26a }
    });
    const last = res.rows[res.rows.length - 1];
    // Force variation icon classification executed
    expect(Object.values(VariationIcon)).toContain(last.variationIcon);
    // When only single point present both improvement & concern originals cannot be simultaneously populated.
    // We just assert alias mirrors original (undefined or number)
    const originalImp = (last as any).originalSpecialCauseImprovementValue ?? null;
    const aliasImp = (last as any).improvementValueBeforePruning ?? null;
    expect(aliasImp).toBe(originalImp);
    const originalCon = (last as any).originalSpecialCauseConcernValue ?? null;
    const aliasCon = (last as any).concernValueBeforePruning ?? null;
    expect(aliasCon).toBe(originalCon);
  });

  test('alias properties are defined as non-enumerable getters and yield null when originals absent', () => {
    const res = buildSpc({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data,
      settings: { conflictPrecedenceMode: ConflictPrecedenceMode.SqlRankingV26a }
    });
    const last = res.rows[res.rows.length - 1] as any;
    // Contract: getters exist but are not enumerable (forward-compat rename scaffolding)
    expect(Object.prototype.propertyIsEnumerable.call(last, 'improvementValueBeforePruning')).toBe(false);
    expect(Object.prototype.propertyIsEnumerable.call(last, 'concernValueBeforePruning')).toBe(false);
    // Original values only populated if pruning executed (requires simultaneous opposing signals which current rule geometry prevents)
    expect(last.originalSpecialCauseImprovementValue).toBeUndefined();
    expect(last.originalSpecialCauseConcernValue).toBeUndefined();
    expect(last.improvementValueBeforePruning).toBeNull();
    expect(last.concernValueBeforePruning).toBeNull();
  });

  test('alias getter parity between conflictPrecedenceMode none vs sql ranking (no-op geometry)', () => {
    const base = buildSpc({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data,
      settings: { conflictPrecedenceMode: ConflictPrecedenceMode.None }
    });
    const ranked = buildSpc({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data,
      settings: { conflictPrecedenceMode: ConflictPrecedenceMode.SqlRankingV26a }
    });
    expect(base.rows.length).toBe(ranked.rows.length);
    for (let i=0;i<base.rows.length;i++) {
      const a: any = base.rows[i];
      const b: any = ranked.rows[i];
      expect(a.improvementValueBeforePruning).toBe(b.improvementValueBeforePruning);
      expect(a.concernValueBeforePruning).toBe(b.concernValueBeforePruning);
    }
  });
});