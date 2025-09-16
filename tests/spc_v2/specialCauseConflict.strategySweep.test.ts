import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/engine";
import { withParityV26 } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/presets";
import { ChartType, ImprovementDirection, MetricConflictRule, TrendSegmentationStrategy } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/types";
import { findGroup, normaliseSeries, toV2ImprovementDir } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/storybook/data/groupedDataset";
import { iconToHex } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/storybook/data/variationIconColours";

type SweepConfig = {
  strategy: TrendSegmentationStrategy;
  preferImprovementWhenConflict: boolean;
  trendFavourableSegmentation: boolean;
  metricConflictRule: MetricConflictRule;
  preferTrendWhenConflict: boolean;
  trendDominatesHighlightedWindow: boolean;
};

function computeMatches(cfg: SweepConfig) {
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
      trendFavourableSegmentation: cfg.trendFavourableSegmentation,
      trendSegmentationStrategy: cfg.strategy,
      preferImprovementWhenConflict: cfg.preferImprovementWhenConflict,
      metricConflictRule: cfg.metricConflictRule,
      preferTrendWhenConflict: cfg.preferTrendWhenConflict,
      trendDominatesHighlightedWindow: cfg.trendDominatesHighlightedWindow,
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

  return { cfg, totalCompared, totalMatched, mismatches };
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

  const preferImprovementWhenConflict = [false, true] as const;
  const trendFavourableSegmentation = [true, false] as const;
  const preferTrendWhenConflict = [false, true] as const;
  const trendDominatesHighlightedWindow = [false, true] as const;
    const metricConflictRules: MetricConflictRule[] = [MetricConflictRule.Improvement, MetricConflictRule.Concern];

    const configs: SweepConfig[] = [];
    for (const s of strategies)
      for (const p of preferImprovementWhenConflict)
        for (const seg of trendFavourableSegmentation)
          for (const m of metricConflictRules)
            for (const t of preferTrendWhenConflict)
              for (const d of trendDominatesHighlightedWindow)
                configs.push({ strategy: s, preferImprovementWhenConflict: p, trendFavourableSegmentation: seg, metricConflictRule: m, preferTrendWhenConflict: t, trendDominatesHighlightedWindow: d });

    const results = configs.map(computeMatches);

    // eslint-disable-next-line no-console
    console.table(results.map(r => ({
      strategy: strategyName(r.cfg.strategy),
      seg: r.cfg.trendFavourableSegmentation ? 'on' : 'off',
      preferImprovement: r.cfg.preferImprovementWhenConflict,
      preferTrend: r.cfg.preferTrendWhenConflict,
      trendDominates: r.cfg.trendDominatesHighlightedWindow,
      conflictRule: r.cfg.metricConflictRule,
      matched: `${r.totalMatched}/${r.totalCompared}`,
      fullMatch: r.totalMatched === r.totalCompared,
    })));

    const fullMatches = results.filter(r => r.totalCompared > 0 && r.totalMatched === r.totalCompared);

    // eslint-disable-next-line no-console
    console.log('Full match configs:', fullMatches.map(f => ({
      strategy: strategyName(f.cfg.strategy), seg: f.cfg.trendFavourableSegmentation ? 'on':'off', preferImprovement: f.cfg.preferImprovementWhenConflict, preferTrend: f.cfg.preferTrendWhenConflict, conflictRule: f.cfg.metricConflictRule
    })));

    // Report-only test: ensure we made comparisons, but do not fail the build if no full match is found.
    const totalCompared = results.reduce((a,b)=>a+b.totalCompared,0);
    expect(totalCompared).toBeGreaterThan(0);
  });
});
