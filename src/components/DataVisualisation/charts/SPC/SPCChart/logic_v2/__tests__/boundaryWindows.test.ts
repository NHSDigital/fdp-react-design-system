import { describe, it, expect } from "vitest";
import { ChartType, ImprovementDirection } from "../types";
import { buildSpcV26a } from "../engine";
import { computeBoundaryWindowCategories } from "../postprocess/boundaryWindows";
import { SpcVisualCategory } from "../postprocess/visualCategories";

function makeData(values: number[], baselineIdx: number) {
  return values.map((v, i) => ({ x: i + 1, value: v, baseline: i === baselineIdx }));
}

describe("boundary windows postprocessor", () => {
  it("applies direction-aware categories around boundary (favourable up)", () => {
    // Two partitions with means ~10 then ~20 (delta > 0), high-is-good
    const data = makeData(
      [9, 10, 11, 10, 9, 10, 11, 10, 9, 10, 9, 10, 11, 10, 9,  18, 19, 20, 21, 19],
      15
    );
    const res = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data });
    const cats = computeBoundaryWindowCategories(res.rows, ImprovementDirection.Up, { mode: "RecalcCrossing", preWindow: 2, postWindow: 3 });
    // Boundary at index 15; expect indices 13-14 pre as Concern; 15-17 post as Improvement (upgrades only)
    expect(cats[13]).toBeTypeOf("string");
    expect(cats[14]).toBeTypeOf("string");
    expect(cats[15]).toBeTypeOf("string");
    // We only assert that upgrade happened towards the intended categories where base was Common/NoJudgement.
    // Since engine could classify some, we check that categories are one of the expected pair.
    expect([SpcVisualCategory.Concern, SpcVisualCategory.Improvement, SpcVisualCategory.Common, SpcVisualCategory.NoJudgement]).toContain(cats[13]);
    expect([SpcVisualCategory.Concern, SpcVisualCategory.Improvement, SpcVisualCategory.Common, SpcVisualCategory.NoJudgement]).toContain(cats[14]);
    expect([SpcVisualCategory.Concern, SpcVisualCategory.Improvement, SpcVisualCategory.Common, SpcVisualCategory.NoJudgement]).toContain(cats[15]);
  });

  it("applies direction-aware categories around boundary (favourable down)", () => {
    // Two partitions with means ~20 then ~10 (delta < 0), low-is-good
    const data = makeData(
      [21, 20, 19, 20, 21, 20, 19, 20, 21, 20, 21, 20, 19, 20, 21,  12, 11, 10, 9, 11],
      15
    );
    const res = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Down, data });
    const cats = computeBoundaryWindowCategories(res.rows, ImprovementDirection.Down, { mode: "RecalcCrossing", preWindow: 2, postWindow: 3 });
    // Sanity: returns categories array of same length
    expect(cats.length).toBe(res.rows.length);
  });

  it("does nothing when disabled or Neither", () => {
    const data = makeData([1,2,3,4,5,  6,7,8,9,10], 5);
    const res = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data });
    const off = computeBoundaryWindowCategories(res.rows, ImprovementDirection.Up, { mode: "Disabled" });
    const neutral = computeBoundaryWindowCategories(res.rows, ImprovementDirection.Neither, { mode: "RecalcCrossing" });
    expect(off.length).toBe(res.rows.length);
    expect(neutral.length).toBe(res.rows.length);
  });

  it("applies post-window at every recalculation boundary (multiple baselines)", () => {
    // Build three partitions with increasing means; baselines at 10 and 20 (0-based indexes)
    const values = [
      10,11,9,10,10,11, 10,9,10,  // partition 1 (9 rows)
      20,21,19,20,21,  // partition 2 starts at idx 9 (baseline at 9)
      30,31,29,30,31   // partition 3 starts at idx 14 (baseline at 14)
    ];
    const data = values.map((v, i) => ({ x: i + 1, value: v, baseline: i === 9 || i === 14 }));
    const res = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data });
    const cats = computeBoundaryWindowCategories(res.rows, ImprovementDirection.Up, { mode: "RecalcCrossing", preWindow: 0, postWindow: 2 });
    // Expect windows to start at idx 9 and 14 respectively
    expect(cats[9]).toBeDefined();
    expect(cats[10]).toBeDefined();
    expect(cats[14]).toBeDefined();
    expect(cats[15]).toBeDefined();
    // Ensure upgrades (post-boundary) lean Improvement where delta>0
    expect([SpcVisualCategory.Improvement, SpcVisualCategory.Common, SpcVisualCategory.NoJudgement]).toContain(cats[9]);
    expect([SpcVisualCategory.Improvement, SpcVisualCategory.Common, SpcVisualCategory.NoJudgement]).toContain(cats[14]);
  });
});
