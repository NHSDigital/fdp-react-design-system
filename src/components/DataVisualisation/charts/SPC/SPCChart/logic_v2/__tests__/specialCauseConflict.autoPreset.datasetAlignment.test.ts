import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { withConflictPresetAutoV26 } from "../presets";
import { ChartType, ImprovementDirection } from "../types";
import {
  findGroup,
  normaliseSeries,
  toV2ImprovementDir,
} from "../storybook/data/groupedDataset";
import { iconToHex } from "../storybook/data/variationIconColours";

function getMetricNames() {
  return [
    "Special cause conflict - High is good",
    "Special cause conflict - Low is good",
  ];
}

describe("logic_v2: Auto preset dataset alignment for Special cause conflict", () => {
  it("withConflictPresetAutoV26 matches dataset colours on eligible rows for High/Low", () => {
    const metricNames = getMetricNames();
    for (const metric of metricNames) {
      const grp = findGroup(metric)!;
      const { data } = normaliseSeries(grp);
      const dir = toV2ImprovementDir(grp.improvement as any);
      expect(
        dir === ImprovementDirection.Up || dir === ImprovementDirection.Down
      ).toBe(true);

      const input = data.map((d) => ({
        x: d.x,
        value: d.value,
        ghost: false,
        baseline: false,
        target: null,
      }));
      const settings = withConflictPresetAutoV26(dir);
      const rows = buildSpcV26a({
        chartType: ChartType.XmR,
        metricImprovement: dir,
        data: input,
        settings,
      }).rows;

      // Compare only eligible rows to the dataset's expected colour hex to avoid pre-eligibility greys
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
      expect(compared).toBeGreaterThan(0); // ensure the dataset provided colours to compare
    }
  });
});
