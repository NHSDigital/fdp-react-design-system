import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/engine";
import { ChartType, ImprovementDirection } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/types";
import { computeBoundaryWindowCategories } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/postprocess/boundaryWindows";
import { computeSpcVisualCategories, SpcVisualCategory, TrendVisualMode } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/postprocess/visualCategories";

function withBaselines(values: number[], baselineIdxs: number[]) {
  return values.map((v, i) => ({ x: i + 1, value: v, ghost: false, baseline: baselineIdxs.includes(i) }));
}

describe("boundary windows: clamping and explicit boundaries", () => {
  it("clamps post-window within current partition and does not bleed into the next partition", () => {
    // Three partitions: ~10 (idx 0..2), ~20 (idx 3..4), ~30 (idx 5..8)
    const series = [10, 10, 10, 20, 20, 30, 30, 30, 30];
    const data = withBaselines(series, [3, 5]); // baselines at 3 and 5

    const { rows } = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data });

    const base = computeSpcVisualCategories(rows, {
      metricImprovement: ImprovementDirection.Up,
      trendVisualMode: TrendVisualMode.Ungated,
      enableNeutralNoJudgement: true,
    });

    const win = computeBoundaryWindowCategories(rows, ImprovementDirection.Up, {
      mode: "RecalcCrossing",
      preWindow: 0,
      postWindow: 10, // deliberately larger than the mid partition length (2)
      boundaryIndices: [3], // isolate the first boundary only
    });

    // Boundary at index 3 should only affect indices 3..4 (partition B). Index 5 is start of partition C and must be unchanged vs base.
    expect(win[5]).toBe(base[5]);

    // Sanity: post-window points inside partition B can be upgraded towards Improvement (but only from neutral)
    [3, 4].forEach((i) => {
      expect([SpcVisualCategory.Improvement, base[i]]).toContain(win[i]);
    });
  });

  it("respects explicit boundaryIndices: only upgrades around provided boundaries", () => {
    // Two boundaries: at 4 (~15 -> ~25) and at 8 (~25 -> ~35)
    const series = [15, 15, 15, 15, 25, 25, 25, 25, 35, 35, 35];
    const data = withBaselines(series, [4, 8]);

    const { rows } = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data });

    const base = computeSpcVisualCategories(rows, {
      metricImprovement: ImprovementDirection.Up,
      trendVisualMode: TrendVisualMode.Ungated,
      enableNeutralNoJudgement: true,
    });

    // Provide only the second boundary; verify the first boundary region remains at base categories
    const win = computeBoundaryWindowCategories(rows, ImprovementDirection.Up, {
      mode: "RecalcCrossing",
      preWindow: 1,
      postWindow: 2,
      boundaryIndices: [8],
    });

    // Around the first boundary at 4: indices 4..5 should be unchanged vs base
    expect(win[4]).toBe(base[4]);
    expect(win[5]).toBe(base[5]);

    // Around the second boundary at 8: indices 8..9 can be upgraded towards Improvement
    [8, 9].forEach((i) => {
      expect([SpcVisualCategory.Improvement, base[i]]).toContain(win[i]);
    });
  });
});
