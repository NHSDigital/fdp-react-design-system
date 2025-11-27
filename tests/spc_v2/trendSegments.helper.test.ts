import { describe, it, expect } from "vitest";
import { ImprovementDirection, VariationIcon, TrendSegmentationStrategy, type SpcRowV2 } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/types";
import { computeTrendSegments, chooseSegmentsForHighlight } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/postprocess/trendSegments";

function mkRow(i: number, value: number, mean: number, dir: "Up"|"Down"): SpcRowV2 {
  return {
    rowId: i,
    x: String(i),
    value,
    ghost: false,
    partitionId: 1,
    pointRank: i,
    mean,
    upperProcessLimit: 999,
    lowerProcessLimit: -999,
    upperTwoSigma: 2,
    lowerTwoSigma: -2,
    upperOneSigma: 1,
    lowerOneSigma: -1,
    singlePointUp: false,
    singlePointDown: false,
    twoSigmaUp: false,
    twoSigmaDown: false,
    shiftUp: false,
    shiftDown: false,
    trendUp: dir === "Up",
    trendDown: dir === "Down",
    specialCauseImprovementValue: null,
    specialCauseConcernValue: null,
    variationIcon: VariationIcon.CommonCause,
  };
}

describe("trend segmentation post-processor", () => {
  it("splits an increasing run crossing the mean into Below and Above segments", () => {
    // mean=10, values 7..13
    const rows = [7,8,9,10,11,12,13].map((v, idx) => mkRow(idx+1, v, 10, "Up"));
    const runs = computeTrendSegments(rows);
    expect(runs.length).toBe(1);
    const r = runs[0];
    expect(r.segments.length).toBe(2);
    expect(r.segments[0].side).toBe("Below");
    expect(r.segments[1].side).toBe("Above");
  });

  it("highlights favourable segment after crossing for Up metrics (CrossingAfterFavourable)", () => {
    const rows = [7,8,9,10,11,12,13].map((v, idx) => mkRow(idx+1, v, 10, "Up"));
    const runs = computeTrendSegments(rows);
    const highlight = chooseSegmentsForHighlight(runs, {
      metricImprovement: ImprovementDirection.Up,
      strategy: TrendSegmentationStrategy.CrossingAfterFavourable,
    });
    expect(highlight.length).toBe(1);
    expect(highlight[0].side).toBe("Above");
  });

  it("picks extreme favourable segment by distance (ExtremeFavourable)", () => {
    // Decreasing run from 15 to 9 across mean=12
    const rows = [15,14,13,12,11,10,9].map((v, idx) => mkRow(idx+1, v, 12, "Down"));
    const runs = computeTrendSegments(rows);
    const highlight = chooseSegmentsForHighlight(runs, {
      metricImprovement: ImprovementDirection.Down,
      strategy: TrendSegmentationStrategy.ExtremeFavourable,
    });
    expect(highlight.length).toBe(1);
    // For Down metrics, favourable side is Below mean
    expect(highlight[0].side).toBe("Below");
  });

  it("can select the unfavourable segment after crossing for Up metrics (CrossingAfterUnfavourable)", () => {
    // Decreasing run crossing mean (values 43→15 crossing mean ~31): Unfavourable for Up metric is Below mean
    const values = [43, 41, 37, 36, 31, 23, 15];
    const mean = values.reduce((a,b)=>a+b,0)/values.length;
    const rows = values.map((v, idx) => mkRow(idx+1, v, mean, "Down"));
    const runs = computeTrendSegments(rows);
    const segs = chooseSegmentsForHighlight(runs, {
      metricImprovement: ImprovementDirection.Up,
      strategy: TrendSegmentationStrategy.CrossingAfterUnfavourable,
    });
    expect(segs.length).toBe(1);
    expect(segs[0].side).toBe("Below");
  });
});
