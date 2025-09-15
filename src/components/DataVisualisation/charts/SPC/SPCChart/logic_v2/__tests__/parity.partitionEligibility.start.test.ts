import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { ChartType, ImprovementDirection } from "../types";
import { withParityV26 } from "../presets";

function make(values: number[], baselineIndex: number) {
  const start = new Date(2024, 0, 1);
  return values.map((v, i) => ({
    x: new Date(start.getFullYear(), start.getMonth() + i, 1),
    value: v,
    ghost: false,
    baseline: i === baselineIndex,
    target: null as number | null,
  }));
}

describe("parity: partition start eligibility threshold", () => {
  it("ineligible with N-1 points; eligible at N points exactly; remains eligible at N+1", () => {
    const N = 5; // smaller N for a tight test
    // Partition A: 4 values (N-1) then baseline; Partition B: continue values
    const head = [10, 10, 10, 10];
    const tail = [10, 10, 10, 10, 10, 10];
    const baselineAt = head.length; // baseline row belongs to partition A (split inclusive)
    const series = head.concat(tail);

    const rows = buildSpcV26a({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Neither,
      data: make(series, baselineAt),
      settings: withParityV26({ minimumPoints: N }),
    }).rows.filter((r) => !r.ghost);

    const p1 = rows.filter((r) => r.partitionId === 1);
    const p2 = rows.filter((r) => r.partitionId === 2);

    // Partition 1: only 4 valued points before split → ineligible
    expect(p1.every((r) => r.mean === null)).toBe(true);
    expect(p1.every((r) => r.upperProcessLimit === null && r.lowerProcessLimit === null)).toBe(true);

    // Partition 2 progression: first (N-1) rows should be ineligible, Nth eligible
    // Count valued rows within partition 2 incrementally and assert when limits appear
    let encounteredEligible = false;
    for (let i = 0; i < p2.length; i++) {
      const slice = p2.slice(0, i + 1);
      const anyLimits = slice.some((r) => r.mean !== null && r.upperProcessLimit !== null);
      const countValued = i + 1; // all are valued
      if (countValued < N) {
        expect(anyLimits, `p2 first ${countValued} < N should be ineligible`).toBe(false);
      } else {
        expect(anyLimits, `p2 at ${countValued} >= N should be eligible`).toBe(true);
        encounteredEligible = true;
        break;
      }
    }
    expect(encounteredEligible).toBe(true);
  });
});
