import { describe, it, expect } from 'vitest';
import { SpcVisualCategory, ChartType, ImprovementDirection } from '../engine';
import { visualsToNeutralFlags, visualsToPointSignals, toV2Enums, toV2Settings } from './transform';

describe('SPC utils/transform', () => {
  it('visualsToPointSignals maps categories correctly', () => {
    const inp = [
      SpcVisualCategory.Improvement,
      SpcVisualCategory.Concern,
      SpcVisualCategory.NoJudgement,
      SpcVisualCategory.Common,
    ];
    expect(visualsToPointSignals(inp)).toEqual([
      'improvement',
      'concern',
      'neither',
      null,
    ]);
    expect(visualsToPointSignals(undefined)).toBeUndefined();
    expect(visualsToPointSignals([])).toBeUndefined();
  });

  it('visualsToNeutralFlags flags only NoJudgement', () => {
    const inp = [
      SpcVisualCategory.Improvement,
      SpcVisualCategory.NoJudgement,
      SpcVisualCategory.Common,
    ];
    expect(visualsToNeutralFlags(inp)).toEqual([false, true, false]);
  });

  it('toV2Enums maps UI enums to v2 enums', () => {
    const m1 = toV2Enums(ChartType.XmR, ImprovementDirection.Up);
    const m2 = toV2Enums(ChartType.T, ImprovementDirection.Down);
    const m3 = toV2Enums(ChartType.G, ImprovementDirection.Neither);
    expect(m1.chartType).not.toBeUndefined();
    expect(m1.metricImprovement).not.toBeUndefined();
    expect(m2.chartType).not.toBeUndefined();
    expect(m2.metricImprovement).not.toBeUndefined();
    expect(m3.chartType).not.toBeUndefined();
    expect(m3.metricImprovement).not.toBeUndefined();
  });

  it('toV2Settings enables eligibility when enough numeric points', () => {
    const rows = [
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: 10 },
      { value: 11 },
      { value: 12 },
      { value: 13 },
    ];
    const s = toV2Settings(undefined, rows, undefined) as any;
    expect(s.minimumPoints).toBeGreaterThan(0);
    expect(s.chartLevelEligibility).toBe(true);
  });
});
