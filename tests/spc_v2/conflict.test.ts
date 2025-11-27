import { describe, it, expect } from 'vitest';
import { getDirectionalSummary, applySqlPruning } from '../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/conflict';
import { ImprovementDirection, MetricConflictRule, SpcRowV2, VariationIcon } from '../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/types';

function makeRow(partial: Partial<SpcRowV2>): SpcRowV2 {
  return {
    rowId: 1, x: 'x', value: 10, ghost: false, partitionId: 1, pointRank: 1,
    mean: 5, upperProcessLimit: 100, lowerProcessLimit: 0,
    upperTwoSigma: 80, lowerTwoSigma: 20, upperOneSigma: 60, lowerOneSigma: 40,
    singlePointUp: false, singlePointDown: false,
    twoSigmaUp: false, twoSigmaDown: false,
    shiftUp: false, shiftDown: false,
    trendUp: false, trendDown: false,
    specialCauseImprovementValue: null, specialCauseConcernValue: null,
    variationIcon: VariationIcon.CommonCause,
    ...partial,
  };
}

describe('conflict ranking and pruning', () => {
  it('prime Upwards with metric Up drops Concern', () => {
    // Make Up side stronger (e.g., Shift Up) so primeDirection is Upwards
    const row = makeRow({ singlePointUp: true, shiftUp: true, specialCauseImprovementValue: 10, specialCauseConcernValue: 10 });
    applySqlPruning(row, ImprovementDirection.Up, MetricConflictRule.Improvement);
    expect(row.specialCauseConcernValue).toBeNull();
    expect(row.variationIcon).toBe(VariationIcon.ImprovementHigh);
  });
  it('prime Downwards with metric Up drops Improvement', () => {
    const row = makeRow({ trendDown: true, twoSigmaUp: true, specialCauseImprovementValue: 10, specialCauseConcernValue: 10 });
    applySqlPruning(row, ImprovementDirection.Up, MetricConflictRule.Improvement);
    expect(row.specialCauseImprovementValue).toBeNull();
    expect(row.variationIcon).toBe(VariationIcon.ConcernLow);
  });
  it('prime Same uses MetricConflictRule', () => {
    const row = makeRow({ shiftUp: true, shiftDown: true, specialCauseImprovementValue: 10, specialCauseConcernValue: 10 });
    applySqlPruning(row, ImprovementDirection.Up, MetricConflictRule.Improvement);
    expect(row.specialCauseConcernValue).toBeNull();
  });
});
