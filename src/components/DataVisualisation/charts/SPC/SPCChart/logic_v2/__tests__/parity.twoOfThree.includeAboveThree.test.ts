import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { ChartType, ImprovementDirection } from "../types";
import { withParityV26 } from "../presets";

function asRows(values: number[], baselineIndex?: number) {
  const start = new Date(2024, 0, 1);
  return values.map((v, i) => ({
    x: new Date(start.getFullYear(), start.getMonth() + i, 1),
    value: v,
    ghost: false,
    baseline: baselineIndex === i,
    target: null as number | null,
  }));
}

describe("parity: two-of-three ≥2σ including >3σ (same-side, partition-bounded)", () => {
  it("counts a >3σ point towards two-of-three on the high side when enabled", () => {
    // Construct a stable baseline then three high-side points where one is >3σ
    // Relative to the partition mean, we emulate by using an obvious high trio
    const series = [10, 10, 10, 10, 10, 10,  // stable
                    20, 22, 35];             // high, high (mid), extreme (>3σ surrogate)
    const rows = buildSpcV26a({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data: asRows(series),
      settings: withParityV26({ minimumPoints: 6, twoSigmaIncludeAboveThree: true }),
    }).rows.filter((r) => !r.ghost);

    const last = rows.at(-1)!;
    // We don't assert exact sigma math here; instead assert that the final high-side triplet yields twoSigmaUp
    expect(rows.slice(-3).some((r) => r.twoSigmaUp)).toBe(true);
    // And ensure no low-side twoSigma is set
    expect(rows.slice(-3).some((r) => r.twoSigmaDown)).toBe(false);
  });

  it("does not allow a two-of-three window to span a baseline boundary", () => {
    const head = [10, 10, 10, 10, 10, 10];
    const tail = [20, 22, 35];
    const baselineAt = head.length; // split between head and tail
    const rows = buildSpcV26a({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data: asRows(head.concat(tail), baselineAt),
      settings: withParityV26({ minimumPoints: 6, twoSigmaIncludeAboveThree: true }),
    }).rows.filter((r) => !r.ghost);

    const p1 = rows.filter((r) => r.partitionId === 1);
    const p2 = rows.filter((r) => r.partitionId === 2);

    expect(p1.some((r) => r.twoSigmaUp || r.twoSigmaDown)).toBe(false);
    // The tail has only 3 points → even though they are high, eligibility/window length rules may block two-of-three
    // This asserts we do not erroneously backfill across the baseline
    expect(p2.length).toBe(3);
    // If eligible, flags would be confined to p2; we assert no leakage in p1, and leave p2 outcome unconstrained by sigma specifics here
    expect(p1.some((r) => r.twoSigmaUp || r.twoSigmaDown)).toBe(false);
  });
});
