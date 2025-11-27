import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { ChartType, ImprovementDirection } from "../types";
import { computeBoundaryWindowCategories } from "../postprocess/boundaryWindows";
import {
  getGroups,
  normaliseSeries,
  deriveBaselines,
  type Group,
} from "../storybook/data/groupedDataset";

function visualToHex(cat?: string): string | undefined {
  switch (cat) {
    case "Improvement":
      return "#00B0F0"; // blue
    case "Concern":
      return "#E46C0A"; // orange
    case "NoJudgement":
      return "#490092"; // purple
    case "Common":
      return "#A6A6A6"; // grey
    default:
      return undefined;
  }
}

function findCrossingGroups(): Group[] {
  const all = getGroups();
  return all.filter((g) => g.metric.startsWith("Special cause crossing recalculations"));
}

describe("logic_v2 dataset parity: Special cause crossing recalculations (exact sequences)", () => {
  it("visual window colours match dataset for each variant", () => {
    const targets = findCrossingGroups();
    // Expect at least three variants present in the dataset
    expect(targets.length).toBeGreaterThanOrEqual(3);

    // Validate each variant end-to-end against dataset colours
  for (const grp of targets) {
      const { data } = normaliseSeries(grp);
      const baselines = deriveBaselines(grp, data.length);

      const input = data.map((d, i) => ({
        x: d.x,
        value: d.value,
        ghost: false,
        baseline: !!baselines?.[i],
        target: null,
      }));

      // Story logic maps these special-cause-labelled metrics to Up by default
      const { rows } = buildSpcV26a({
        chartType: ChartType.XmR,
        metricImprovement: ImprovementDirection.Up,
        data: input,
      });

      // Variant-specific calibration from spc-decision-logic.mdx:
      //  - shift: b−2 to b+3 → Concern    => pre=2, post=4, direction: Down (to bias Concern)
      //  - trend: b−1 to b+4 → Improvement => pre=1, post=5, direction: Up
      //  - two‑sigma: b−1 to b+0 → Concern => pre=1, post=1, direction: Down
      const name = grp.metric.toLowerCase();
      const pre = name.includes("shift") ? 2 : name.includes("trend") ? 1 : 1;
      const post = name.includes("shift") ? 4 : name.includes("trend") ? 5 : 1;
      const dir = name.includes("trend") ? ImprovementDirection.Up : ImprovementDirection.Down;

      const cats = computeBoundaryWindowCategories(rows, dir, {
        mode: "RecalcCrossing",
        preWindow: pre,
        postWindow: post,
        prePolarity: "Same",
      });

      const visuals = rows
        .filter((r) => !r.ghost)
        .map((_r, i) => visualToHex(cats[i]));

      const expected = grp.data.map((d) => String(d.colour || ""));

      // Exact sequence match required (index-by-index)
      expect(visuals.length).toBe(expected.length);
      for (let i = 0; i < expected.length; i++) {
        expect(visuals[i]).toBe(expected[i]);
      }
    }
  });
});
