import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { ChartType, ImprovementDirection, SpcRowV2 } from "../types";
import { withParityV26 } from "../presets";

function toSeries(vals: number[]) {
  const start = new Date(2024, 0, 1);
  return vals.map((v, i) => ({
    x: new Date(start.getFullYear(), start.getMonth(), i + 1),
    value: v,
    ghost: false,
    baseline: false,
    target: null as number | null,
  }));
}

function expectBandsOrdered(r: SpcRowV2) {
  const allNum = (xs: Array<number | null>) => xs.every((x) => typeof x === "number");
  const { mean, lowerOneSigma: l1, lowerTwoSigma: l2, lowerProcessLimit: l3, upperOneSigma: u1, upperTwoSigma: u2, upperProcessLimit: u3 } = r;
  if (mean === null) return; // not eligible
  // Lower side: l3 <= l2 <= l1 <= mean
  if (allNum([l3, l2, l1])) {
    expect((l3 as number) <= (l2 as number)).toBe(true);
    expect((l2 as number) <= (l1 as number)).toBe(true);
    expect((l1 as number) <= (mean as number)).toBe(true);
  }
  // Upper side: mean <= u1 <= u2 <= u3
  if (allNum([u1, u2, u3])) {
    expect((mean as number) <= (u1 as number)).toBe(true);
    expect((u1 as number) <= (u2 as number)).toBe(true);
    expect((u2 as number) <= (u3 as number)).toBe(true);
  }
}

describe("parity: basic T/G behaviour", () => {
  it("T chart: back-transformed limits are non-negative (LCL may be suppressed)", () => {
    // Positive intervals (days/hours between events) 
    const vals = [2, 3, 1, 4, 6, 2, 5, 3, 7, 2, 4, 8, 3];
    const { rows } = buildSpcV26a({
      chartType: ChartType.T,
      metricImprovement: ImprovementDirection.Up,
      data: toSeries(vals),
      settings: withParityV26(),
    });
    const last = rows.filter((r) => !r.ghost && r.value !== null).pop()!;
    // LCL should be null or >= 0; bands ordered when present
    if (last.lowerProcessLimit !== null) expect(last.lowerProcessLimit).toBeGreaterThanOrEqual(0);
    if (last.lowerTwoSigma !== null) expect(last.lowerTwoSigma).toBeGreaterThanOrEqual(0);
    if (last.lowerOneSigma !== null) expect(last.lowerOneSigma).toBeGreaterThanOrEqual(0);
    expectBandsOrdered(last);
  });

  it("G chart: quantile-derived bands are ordered and non-negative", () => {
    // Counts between events over periods (0-based support allowed)
    const vals = [0, 1, 2, 0, 3, 1, 0, 2, 1, 0, 4, 1, 0];
    const { rows } = buildSpcV26a({
      chartType: ChartType.G,
      metricImprovement: ImprovementDirection.Down,
      data: toSeries(vals),
      settings: withParityV26(),
    });
    const last = rows.filter((r) => !r.ghost && r.value !== null).pop()!;
    // Non-negative constraints
    const lows = [last.lowerProcessLimit, last.lowerTwoSigma, last.lowerOneSigma].filter((x) => x !== null) as number[];
    lows.forEach((x) => expect(x).toBeGreaterThanOrEqual(0));
    expectBandsOrdered(last);
  });
});
