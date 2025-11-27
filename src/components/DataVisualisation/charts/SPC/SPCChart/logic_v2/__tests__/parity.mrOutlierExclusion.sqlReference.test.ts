import { describe, it, expect } from "vitest";
import path from "node:path";
import fs from "node:fs";
import { buildSpcV26a } from "../engine";
import { ChartType, ImprovementDirection } from "../types";
import { withParityV26 } from "../presets";

function asInput(values: Array<number | null>) {
  const start = new Date(2024, 0, 1);
  return values.map((v, i) => ({
    x: new Date(start.getFullYear(), start.getMonth() + i, 1),
    value: v,
    ghost: false,
    baseline: false,
    target: null as number | null,
  }));
}

describe("parity: MR outlier exclusion numeric fixture matches SQL reference", () => {
  it("matches expected mean and limits when exclusion is enabled", () => {
    const fixturePath = path.join(__dirname, "fixtures", "mrOutlier.sqlReference.json");
    const raw = fs.readFileSync(fixturePath, "utf8");
    const ref = JSON.parse(raw) as {
      series: number[];
      minimumPoints: number;
      expected: {
        meanWithoutOutliers: number;
        mrBarExcluded: number;
        mrUclExcluded: number;
        upl: number;
        lpl: number;
        twoSigmaUpper: number;
        twoSigmaLower: number;
        oneSigmaUpper: number;
        oneSigmaLower: number;
      };
      tolerance: number;
    };

    const rows = buildSpcV26a({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Neither,
      data: asInput(ref.series),
      settings: withParityV26({
        excludeMovingRangeOutliers: true,
        minimumPoints: ref.minimumPoints,
      }),
    }).rows;

    // Use the last row (eligible when minimumPoints <= length)
    const last = rows[rows.length - 1];

    expect(last.mean).not.toBeNull();
    expect(last.upperProcessLimit).not.toBeNull();
    expect(last.lowerProcessLimit).not.toBeNull();
    expect(last.upperTwoSigma).not.toBeNull();
    expect(last.lowerTwoSigma).not.toBeNull();
    expect(last.upperOneSigma).not.toBeNull();
    expect(last.lowerOneSigma).not.toBeNull();

    const tol = ref.tolerance ?? 1e-9;

    if (
      last.mean !== null &&
      last.upperProcessLimit !== null &&
      last.lowerProcessLimit !== null &&
      last.upperTwoSigma !== null &&
      last.lowerTwoSigma !== null &&
      last.upperOneSigma !== null &&
      last.lowerOneSigma !== null
    ) {
      expect(Math.abs(last.mean - ref.expected.meanWithoutOutliers)).toBeLessThanOrEqual(tol);
      expect(Math.abs(last.upperProcessLimit - ref.expected.upl)).toBeLessThanOrEqual(tol);
      expect(Math.abs(last.lowerProcessLimit - ref.expected.lpl)).toBeLessThanOrEqual(tol);
      expect(Math.abs(last.upperTwoSigma - ref.expected.twoSigmaUpper)).toBeLessThanOrEqual(tol);
      expect(Math.abs(last.lowerTwoSigma - ref.expected.twoSigmaLower)).toBeLessThanOrEqual(tol);
      expect(Math.abs(last.upperOneSigma - ref.expected.oneSigmaUpper)).toBeLessThanOrEqual(tol);
      expect(Math.abs(last.lowerOneSigma - ref.expected.oneSigmaLower)).toBeLessThanOrEqual(tol);
    }
  });
});
