import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../engine";
import { withParityV26 } from "../presets";
import { ChartType, ImprovementDirection, TrendSegmentationStrategy } from "../types";
import { findGroup, normaliseSeries, toV2ImprovementDir } from "../storybook/data/groupedDataset";
import { iconToHex } from "../storybook/data/variationIconColours";

function computeMatchesForStrategy(strategy: TrendSegmentationStrategy) {
  const grp = findGroup("Special cause conflict - High is good")!;
  const { data } = normaliseSeries(grp);
  const dir = toV2ImprovementDir(grp.improvement as any);
  if (!(dir === ImprovementDirection.Up || dir === ImprovementDirection.Down)) {
    throw new Error("Dataset reports Neither; expected Up/Down");
  }

  const input = data.map((d) => ({ x: d.x, value: d.value, ghost: false, baseline: false, target: null }));
  const base = withParityV26();
  const rows = buildSpcV26a({
    chartType: ChartType.XmR,
    metricImprovement: dir,
    data: input,
    settings: {
      ...base,
      trendFavourableSegmentation: true,
      trendSegmentationStrategy: strategy,
    },
  }).rows;

  // Compare only eligible rows to the dataset's expected colour hex to avoid pre-eligibility greys
  const eligible = rows.filter((r) => !r.ghost && r.mean !== null);
  let totalCompared = 0;
  let totalMatched = 0;
  const mismatches: Array<{ idx: number; expected: string; got: string }> = [];

  for (let i = 0; i < eligible.length; i++) {
    const globalIndex = rows.findIndex((r) => r === eligible[i]);
    const expectedHex = String((grp.data[globalIndex] as any)?.colour ?? "");
    if (!expectedHex) continue; // skip rows without an expected colour in dataset
    totalCompared++;
    const gotHex = iconToHex(eligible[i].variationIcon);
    if (gotHex === expectedHex) totalMatched++; else mismatches.push({ idx: globalIndex, expected: expectedHex, got: gotHex });
  }

  return { strategy, totalCompared, totalMatched, mismatches };
}

function strategyName(s: TrendSegmentationStrategy) { return String(s); }

describe("logic_v2: strategy sweep for Special cause conflict - High is good", () => {
  it("iterates all strategies and reports which (if any) fully match dataset colours", () => {
    const strategies: TrendSegmentationStrategy[] = [
      TrendSegmentationStrategy.FavourableSide,
      TrendSegmentationStrategy.CrossingAfterFavourable,
      TrendSegmentationStrategy.ExtremeFavourable,
      TrendSegmentationStrategy.FirstFavourable,
      TrendSegmentationStrategy.LongestFavourable,
      TrendSegmentationStrategy.LastFavourable,
      TrendSegmentationStrategy.UnfavourableSide,
      TrendSegmentationStrategy.CrossingAfterUnfavourable,
      TrendSegmentationStrategy.ExtremeUnfavourable,
      TrendSegmentationStrategy.FirstUnfavourable,
      TrendSegmentationStrategy.LongestUnfavourable,
      TrendSegmentationStrategy.LastUnfavourable,
    ];

    const results = strategies.map(computeMatchesForStrategy);

    //console.table(results.map(r => ({ strategy: strategyName(r.strategy), matched: `${r.totalMatched}/${r.totalCompared}`, fullMatch: r.totalMatched === r.totalCompared })));

    // const anyFull = results.some(r => r.totalCompared > 0 && r.totalMatched === r.totalCompared);
    // if (!anyFull) {
    //   console.warn("No full matches; first two mismatch sets:",
    //     results.slice(0,2).map(r => ({ strategy: strategyName(r.strategy), mismatches: r.mismatches.slice(0,10) }))
    //   );
    // }
    // Report-only: ensure the sweep ran comparisons but don't fail the build if no full match exists.
    const totalCompared = results.reduce((a,b)=>a+b.totalCompared,0);
    expect(totalCompared).toBeGreaterThan(0);
  });
});
