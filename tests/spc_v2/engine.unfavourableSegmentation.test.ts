import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/engine";
import { ChartType, ImprovementDirection, TrendSegmentationStrategy, VariationIcon } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/types";

function mkInput(values: number[]) { return values.map((v, i) => ({ x: i + 1, value: v })); }

describe("engine v2: unfavourable trend segmentation (High is good)", () => {
  it("CrossingAfterUnfavourable highlights 5-7 (below mean) and flips 0-4", () => {
    // Shape drawn from the dataset: an early decreasing run (43,41,37,36,31,23,15)
    const values = [43, 41, 37, 36, 31, 23, 15, 13, 15, 18, 23, 27, 31];
    const input = mkInput(values);
    const { rows } = buildSpcV26a({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data: input,
      settings: {
        chartLevelEligibility: true,
        minimumPoints: 1,
        trendPoints: 6,
        trendFavourableSegmentation: true,
        trendSegmentationStrategy: TrendSegmentationStrategy.CrossingAfterUnfavourable,
      },
    });

    // Pre-crossing indices should have trend flags cleared by segmentation
    [0,1,2,3,4].forEach((i) => {
      expect(rows[i].trendUp).toBe(false);
      expect(rows[i].trendDown).toBe(false);
    });

    // Expect indices 5-7 (0-based) to show ConcernLow (unfavourable side for Up)
    [5,6,7].forEach((i) => {
      expect(rows[i].variationIcon).toBe(VariationIcon.ConcernLow);
    });
    // Note: other non-trend rules may still classify early points; segmentation only recodes trend contributions
  });
});
