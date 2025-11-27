import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/engine";
import {
  ChartType,
  ImprovementDirection,
  TrendSegmentationStrategy,
  VariationIcon,
} from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/types";

function mkInput(values: number[]) {
  return values.map((v, i) => ({ x: i + 1, value: v }));
}

function getMean(values: number[]) {
  return values.reduce((a, b) => a + b, 0) / values.length;
}

describe("engine v2: trend favourable segmentation", () => {
  it("Up metrics: CrossingAfterFavourable keeps only post-crossing Above-mean part as Improvement", () => {
    // Monotonic increasing sequence crossing the mean: mean of 7..13 is 10
    const values = [7, 8, 9, 10, 11, 12, 13];
    const mean = getMean(values);
    const input = mkInput(values);
    const { rows } = buildSpcV26a({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data: input,
      settings: {
        // ensure all rows are eligible with a stable mean across the partition
        chartLevelEligibility: true,
        minimumPoints: 1,
        trendPoints: 6,
        trendFavourableSegmentation: true,
        trendSegmentationStrategy: TrendSegmentationStrategy.CrossingAfterFavourable,
      },
    });

    const aboveIdx = values.map((v, i) => ({ v, i })).filter(({ v }) => v > mean).map(({ i }) => i);
    const belowIdx = values.map((v, i) => ({ v, i })).filter(({ v }) => v < mean).map(({ i }) => i);

    // Expect improvement only for rows above mean; below-mean rows should not be classified as improvement
    aboveIdx.forEach((i) => {
      expect(rows[i].variationIcon).toBe(VariationIcon.ImprovementHigh);
    });
    belowIdx.forEach((i) => {
      expect(rows[i].variationIcon).not.toBe(VariationIcon.ImprovementHigh);
    });
  });

  it("Down metrics: CrossingAfterFavourable keeps only post-crossing Below-mean part as Improvement", () => {
    // Monotonic decreasing sequence crossing the mean: mean of 15..9 is 12
    const values = [15, 14, 13, 12, 11, 10, 9];
    const mean = getMean(values);
    const input = mkInput(values);
    const { rows } = buildSpcV26a({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Down,
      data: input,
      settings: {
        chartLevelEligibility: true,
        minimumPoints: 1,
        trendPoints: 6,
        trendFavourableSegmentation: true,
        trendSegmentationStrategy: TrendSegmentationStrategy.CrossingAfterFavourable,
      },
    });

    const belowIdx = values.map((v, i) => ({ v, i })).filter(({ v }) => v < mean).map(({ i }) => i);
    const aboveIdx = values.map((v, i) => ({ v, i })).filter(({ v }) => v > mean).map(({ i }) => i);

    belowIdx.forEach((i) => {
      expect(rows[i].variationIcon).toBe(VariationIcon.ImprovementLow);
    });
    aboveIdx.forEach((i) => {
      expect(rows[i].variationIcon).not.toBe(VariationIcon.ImprovementLow);
    });
  });

  it("All strategies that prioritise favourable segments behave consistently on a simple cross-mean run (Up metric)", () => {
    const strategies: TrendSegmentationStrategy[] = [
      TrendSegmentationStrategy.FavourableSide,
      TrendSegmentationStrategy.CrossingAfterFavourable,
      TrendSegmentationStrategy.ExtremeFavourable,
      TrendSegmentationStrategy.FirstFavourable,
      TrendSegmentationStrategy.LongestFavourable,
      TrendSegmentationStrategy.LastFavourable,
    ];

    const values = [7, 8, 9, 10, 11, 12, 13];
    const mean = getMean(values);
    const input = mkInput(values);
    const aboveIdx = values.map((v, i) => ({ v, i })).filter(({ v }) => v > mean).map(({ i }) => i);
    const belowIdx = values.map((v, i) => ({ v, i })).filter(({ v }) => v < mean).map(({ i }) => i);

    for (const strat of strategies) {
      const { rows } = buildSpcV26a({
        chartType: ChartType.XmR,
        metricImprovement: ImprovementDirection.Up,
        data: input,
        settings: {
          chartLevelEligibility: true,
          minimumPoints: 1,
          trendPoints: 6,
          trendFavourableSegmentation: true,
          trendSegmentationStrategy: strat,
        },
      });

      aboveIdx.forEach((i) => {
        expect(rows[i].variationIcon).toBe(VariationIcon.ImprovementHigh);
      });
      belowIdx.forEach((i) => {
        expect(rows[i].variationIcon).not.toBe(VariationIcon.ImprovementHigh);
      });
    }
  });

  it("Disabling segmentation allows improvement classification to appear on both sides (when pruning prefers improvement)", () => {
    const values = [7, 8, 9, 10, 11, 12, 13];
    const mean = getMean(values);
    const input = mkInput(values);
    const { rows } = buildSpcV26a({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data: input,
      settings: {
        chartLevelEligibility: true,
        minimumPoints: 1,
        trendPoints: 6,
        trendFavourableSegmentation: false,
        // ensure conflicts favour improvement for clearer assertion
        conflictStrategy: undefined,
        preferImprovementWhenConflict: true,
      },
    });

    const aboveIdx = values.map((v, i) => ({ v, i })).filter(({ v }) => v > mean).map(({ i }) => i);
    const belowIdx = values.map((v, i) => ({ v, i })).filter(({ v }) => v < mean).map(({ i }) => i);

    // Above mean should still be improvement
    expect(aboveIdx.every((i) => rows[i].variationIcon === VariationIcon.ImprovementHigh)).toBe(true);
    // And at least one below-mean row should also be classified as improvement when segmentation is disabled
    const anyBelowImprovement = belowIdx.some((i) => rows[i].variationIcon === VariationIcon.ImprovementHigh);
    expect(anyBelowImprovement).toBe(true);
  });
});
