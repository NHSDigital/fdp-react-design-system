import { describe, it, expect } from 'vitest';
import { buildSpcV26a } from '../engine';
import { ChartType, ImprovementDirection } from '../types';
import { withParityV26 } from '../presets';
import { T_SQL_CANONICAL_INTERVALS, T_SQL_EXPECT_LAST_ROW_LIMITS } from './fixtures/t.sql.canonical.fixture';
import { G_SQL_CANONICAL_INTERVALS, G_SQL_EXPECT_LAST_ROW_LIMITS } from './fixtures/g.sql.canonical.fixture';

function toSeries(vals: number[]) {
  return vals.map((v, i) => ({ x: i, value: v, ghost: false, baseline: false, target: null as number | null }));
}

describe.skip('SQL v2.6a canonical parity (T/G) — fixtures pending replacement', () => {
  it('T chart last row numeric parity (limits; icons suppressed where applicable)', () => {
    const { rows } = buildSpcV26a({
      chartType: ChartType.T,
      metricImprovement: ImprovementDirection.Neither,
      data: toSeries(T_SQL_CANONICAL_INTERVALS),
      settings: withParityV26(),
    });
    const last = rows.filter(r => !r.ghost && r.value !== null).pop()!;
    // TODO: replace nulls with canonical expected numbers from SQL output and switch suite on
    const exp = T_SQL_EXPECT_LAST_ROW_LIMITS;
    expect(last.mean).toBeTypeOf('number');
    // Placeholders to wire assertions (disabled via describe.skip)
    expect(exp.mean).toBe(null);
    expect(exp.upperProcessLimit).toBe(null);
  });

  it('G chart last row numeric parity (limits)', () => {
    const { rows } = buildSpcV26a({
      chartType: ChartType.G,
      metricImprovement: ImprovementDirection.Neither,
      data: toSeries(G_SQL_CANONICAL_INTERVALS),
      settings: withParityV26(),
    });
    const last = rows.filter(r => !r.ghost && r.value !== null).pop()!;
    const exp = G_SQL_EXPECT_LAST_ROW_LIMITS;
    expect(last.mean).toBeTypeOf('number');
    // Placeholders to wire assertions (disabled via describe.skip)
    expect(exp.mean).toBe(null);
    expect(exp.upperTwoSigma).toBe(null);
  });
});
