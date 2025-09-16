import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/engine";
import { withParityV26 } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/presets";
import { ChartType, ImprovementDirection, TrendSegmentationStrategy } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/types";
import { findGroup, normaliseSeries, toV2ImprovementDir } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/storybook/data/groupedDataset";
import { iconToHex } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/storybook/data/variationIconColours";

describe("engine v2: dataset alignment for Special cause conflict - Low is good", () => {
  it("CrossingAfterUnfavourable segmentation matches dataset colours on eligible rows", () => {
    const metric = "Special cause conflict - Low is good";
    const grp = findGroup(metric)!;
    const { data } = normaliseSeries(grp);
    const dir = toV2ImprovementDir(grp.improvement as any);
    expect(dir === ImprovementDirection.Up || dir === ImprovementDirection.Down).toBe(true);

    const input = data.map((d) => ({ x: d.x, value: d.value, ghost: false, baseline: false, target: null }));
    const settings = withParityV26({
      trendFavourableSegmentation: true,
      trendSegmentationStrategy: TrendSegmentationStrategy.CrossingAfterUnfavourable,
    });

    const rows = buildSpcV26a({
      chartType: ChartType.XmR,
      metricImprovement: dir,
      data: input,
      settings,
    }).rows;

    const eligible = rows.filter((r) => !r.ghost && r.mean !== null);
    let compared = 0;
    for (let i = 0; i < eligible.length; i++) {
      const globalIndex = rows.findIndex((r) => r === eligible[i]);
      const expectedHex = String((grp.data[globalIndex] as any)?.colour ?? "");
      if (!expectedHex) continue; // skip rows without an expected colour in dataset
      compared++;
      const computedHex = iconToHex(eligible[i].variationIcon);
      expect(computedHex).toBe(expectedHex);
    }
    expect(compared).toBeGreaterThan(0);
  });
});
