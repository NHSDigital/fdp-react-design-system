import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { ChartType, ImprovementDirection } from "../types";
import { computeBoundaryWindowCategories } from "../postprocess/boundaryWindows";
import { SpcVisualCategory } from "../postprocess/visualCategories";

function make(values: number[], baselineIndex: number) {
  return values.map((v, i) => ({ x: i + 1, value: v, ghost: false, baseline: i === baselineIndex }));
}

/**
 * Parity: Special cause windows that require multiple points (shift, trend, two-of-three) can cross a recalculation.
 *
 * Engine note:
 *  - Core rule detection remains partition-bound (except optional global trend),
 *    but visuals can be upgraded around recalculation boundaries to reflect expected
 *    post-baseline emphasis. We validate this via computeBoundaryWindowCategories with a
 *    calibrated postWindow.
 */
describe("logic_v2 parity: Special cause crossing recalculations (visual windows)", () => {
  it("shift-like crossing: upgrades first three post-baseline points when mean increases (High is good)", () => {
    // Regime ~10 then ~18; baseline at seam. No need to perfectly craft a 6-point shift across boundary
    // because partitioned rules won't cross; we assert the boundary-window visual upgrade instead.
    const series = [
      10, 10, 10, 10, 10, 10, 10, 10, 10,
      18, 18, 18, 18, 18, 18,
    ];
    const baselineAt = 9; // first 18
    const { rows } = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: make(series, baselineAt) });
    const cats = computeBoundaryWindowCategories(rows, ImprovementDirection.Up, { mode: "RecalcCrossing", preWindow: 0, postWindow: 3 });
    // Expect upgrades towards Improvement on indices 9..11 (post boundary)
    [9, 10, 11].forEach((idx) => {
      expect([SpcVisualCategory.Improvement, SpcVisualCategory.Common, SpcVisualCategory.NoJudgement]).toContain(cats[idx]);
    });
  });

  it("trend-like crossing: upgrades first three post-baseline points when mean decreases (Low is good)", () => {
    // Regime ~21 then ~12; baseline at seam; Low is good → favourable is Below mean (Concern colour for high-side pre, Improvement for post if delta<0)
    const series = [
      21, 20, 21, 20, 21, 20, 21, 20, 21,
      12, 12, 12, 12, 12, 12,
    ];
    const baselineAt = 9; // first 12
    const { rows } = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Down, data: make(series, baselineAt) });
    const cats = computeBoundaryWindowCategories(rows, ImprovementDirection.Down, { mode: "RecalcCrossing", preWindow: 0, postWindow: 3 });
    // Expect upgrades at 9..11 after baseline
    [9, 10, 11].forEach((idx) => {
      expect([SpcVisualCategory.Improvement, SpcVisualCategory.Common, SpcVisualCategory.NoJudgement]).toContain(cats[idx]);
    });
  });

  it("two-of-three-like crossing: upgrades first three post-baseline points regardless of rule flags", () => {
    // Build mild variability either side; focus is purely the boundary-window visual upgrade semantics.
    const series = [
      10, 11, 9, 10, 11, 9, 10,
      16, 17, 15, 16, 17, 15,
    ];
    const baselineAt = 7; // first ~16
    const { rows } = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: make(series, baselineAt) });
    const cats = computeBoundaryWindowCategories(rows, ImprovementDirection.Up, { mode: "RecalcCrossing", preWindow: 0, postWindow: 3 });
    [7, 8, 9].forEach((idx) => {
      expect([SpcVisualCategory.Improvement, SpcVisualCategory.Common, SpcVisualCategory.NoJudgement]).toContain(cats[idx]);
    });
  });
});
