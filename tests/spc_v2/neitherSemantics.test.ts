import { describe, it, expect } from 'vitest';
import { buildSpcV26a } from '../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/engine';
import { ChartType, ImprovementDirection, VariationIcon } from '../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/types';

function makeSeries(values: Array<number | null>) {
  return values.map((v, i) => ({ x: String(i+1), value: v, ghost: false, baseline: false, target: null }));
}

describe('Neither metric side-specific neutral icons', () => {
  it('emits NeitherHigh when a high-side rule is present', () => {
    // Shape a dataset where last point triggers a high-side two-of-three
    const data = makeSeries([10, 11, 12, 13, 14, 20, 19, 18, 25]);
    const res = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Neither, data, settings: { minimumPoints: 9 } });
    const last = res.rows.filter(r => !r.ghost && r.value !== null).pop();
    expect(last?.variationIcon).toBe(VariationIcon.NeitherHigh);
  });
  it('emits NeitherLow when a low-side rule is present', () => {
    // Shape a dataset where last point triggers a low-side two-of-three
    const data = makeSeries([20, 21, 22, 23, 24, 10, 11, 12, 5]);
    const res = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Neither, data, settings: { minimumPoints: 9 } });
    const last = res.rows.filter(r => !r.ghost && r.value !== null).pop();
    expect(last?.variationIcon).toBe(VariationIcon.NeitherLow);
  });
});
