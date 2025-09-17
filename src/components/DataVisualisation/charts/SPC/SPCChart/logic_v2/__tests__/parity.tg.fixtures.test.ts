import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { ChartType, ImprovementDirection, SpcRowV2 } from "../types";
import { withParityV26 } from "../presets";
import { T_EXAMPLE_SERIES } from "./fixtures/t.fixture";
import { G_EXAMPLE_SERIES } from "./fixtures/g.fixture";

function toSeries(vals: number[]) {
  return vals.map((v, i) => ({
    x: i,
    value: v,
    ghost: false,
    baseline: false,
    target: null as number | null,
  }));
}

function expectOrderedBands(r: SpcRowV2) {
  const { mean, lowerOneSigma: l1, lowerTwoSigma: l2, lowerProcessLimit: l3, upperOneSigma: u1, upperTwoSigma: u2, upperProcessLimit: u3 } = r;
  if (mean === null) return;
  // Lower side: l3 <= l2 <= l1 <= mean (when present)
  if (l3 !== null && l2 !== null) expect(l3).toBeLessThanOrEqual(l2);
  if (l2 !== null && l1 !== null) expect(l2).toBeLessThanOrEqual(l1);
  if (l1 !== null) expect(l1).toBeLessThanOrEqual(mean);
  // Upper side: mean <= u1 <= u2 <= u3 (when present)
  if (u1 !== null) expect(mean).toBeLessThanOrEqual(u1);
  if (u1 !== null && u2 !== null) expect(u1).toBeLessThanOrEqual(u2);
  if (u2 !== null && u3 !== null) expect(u2).toBeLessThanOrEqual(u3);
}

describe("parity: T/G canonical fixtures", () => {
  it("T chart: lower bands are suppressed or >= 0; bands ordered", () => {
    const { rows } = buildSpcV26a({
      chartType: ChartType.T,
      metricImprovement: ImprovementDirection.Neither,
      data: toSeries(T_EXAMPLE_SERIES),
      settings: withParityV26({ minimumPoints: 13 }),
    });
    const last = rows.filter(r => !r.ghost && r.value !== null).pop()!;
    // LCL/bands may be suppressed (null) or must be non-negative
    const lows = [last.lowerProcessLimit, last.lowerTwoSigma, last.lowerOneSigma];
    lows.forEach(v => { if (v !== null) expect(v).toBeGreaterThanOrEqual(0); });
    expectOrderedBands(last);
  });

  it("G chart: quantile bands non-negative and ordered", () => {
    const { rows } = buildSpcV26a({
      chartType: ChartType.G,
      metricImprovement: ImprovementDirection.Up,
      data: toSeries(G_EXAMPLE_SERIES),
      settings: withParityV26({ minimumPoints: 13 }),
    });
    const last = rows.filter(r => !r.ghost && r.value !== null).pop()!;
    // All lower bands are non-negative when present
    const lows = [last.lowerProcessLimit, last.lowerTwoSigma, last.lowerOneSigma];
    lows.forEach(v => { if (v !== null) expect(v).toBeGreaterThanOrEqual(0); });
    expectOrderedBands(last);
  });
});
