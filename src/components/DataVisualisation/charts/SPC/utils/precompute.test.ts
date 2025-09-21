import { describe, it, expect } from 'vitest';
import { computeSpcPrecomputed, ImprovementDirection, ChartType, DEFAULT_MIN_POINTS } from '../index';

describe('computeSpcPrecomputed datum normalization', () => {
  it('produces equivalent results for {x,value} and {x,y} inputs', () => {
    const values = [12, 11, 10, 9, 8, 7, 20, 22, 21, 23, 19, 18, 20];
    const dataValue = values.map((v, i) => ({ x: i, value: v }));
    const dataY = values.map((v, i) => ({ x: i, y: v }));

    const summaryValue = computeSpcPrecomputed(dataValue, {
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      minimumPoints: DEFAULT_MIN_POINTS,
      enableNeutralNoJudgement: true,
    });

    const summaryY = computeSpcPrecomputed(dataY as any, {
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      minimumPoints: DEFAULT_MIN_POINTS,
      enableNeutralNoJudgement: true,
    });

    expect(summaryValue.rows.length).toBe(summaryY.rows.length);
    expect(summaryValue.visuals.length).toBe(summaryY.visuals.length);
    expect(summaryValue.latestState).toBe(summaryY.latestState);
    expect(summaryValue.centerLine).toBe(summaryY.centerLine);

    // Control limits and sigma bands should match (both null or same numeric values)
    expect(summaryValue.controlLimits).toEqual(summaryY.controlLimits);
    expect(summaryValue.sigmaBands).toEqual(summaryY.sigmaBands);
  });
});
