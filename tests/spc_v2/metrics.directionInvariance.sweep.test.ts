import { describe, it, expect } from "vitest";
import { buildSpcV26a } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/engine";
import { withParityV26 } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/presets";
import { ChartType, ImprovementDirection, type SpcRowV2 } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/types";
import { getMetricOptions, findGroup, normaliseSeries, toV2ImprovementDir } from "../../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/storybook/data/groupedDataset";

function mask4(row: SpcRowV2) {
  // Side-agnostic 4-bit mask of rule presence
  const single = (row.singlePointUp || row.singlePointDown) ? 1 : 0;
  const two = (row.twoSigmaUp || row.twoSigmaDown) ? 1 : 0;
  const shift = (row.shiftUp || row.shiftDown) ? 1 : 0;
  const trend = (row.trendUp || row.trendDown) ? 1 : 0;
  return (single << 3) | (two << 2) | (shift << 1) | trend;
}

function sideMask8(row: SpcRowV2) {
  // Side-specific 8-bit mask of rule presence (Up/Down preserved)
  const b0 = row.trendDown ? 1 : 0;
  const b1 = row.shiftDown ? 1 : 0;
  const b2 = row.twoSigmaDown ? 1 : 0;
  const b3 = row.singlePointDown ? 1 : 0;
  const b4 = row.trendUp ? 1 : 0;
  const b5 = row.shiftUp ? 1 : 0;
  const b6 = row.twoSigmaUp ? 1 : 0;
  const b7 = row.singlePointUp ? 1 : 0;
  return (b7 << 7) | (b6 << 6) | (b5 << 5) | (b4 << 4) | (b3 << 3) | (b2 << 2) | (b1 << 1) | b0;
}

function flipDir(dir: ImprovementDirection): ImprovementDirection {
  if (dir === ImprovementDirection.Up) return ImprovementDirection.Down;
  if (dir === ImprovementDirection.Down) return ImprovementDirection.Up;
  return ImprovementDirection.Neither;
}

describe("engine v2: detection invariance across improvement-direction flips", () => {
  it("No segmentation: rule presence masks are invariant across derived vs flipped directions (all metrics)", () => {
    const metrics = getMetricOptions();
    const diffs: Array<{ metric: string; diff4: number; diff8: number }> = [];

    for (const metric of metrics) {
      const grp = findGroup(metric);
      if (!grp) continue;
      const { data } = normaliseSeries(grp);
      const input = data.map((d) => ({ x: d.x, value: d.value, ghost: false, baseline: false, target: null }));
      const derived = toV2ImprovementDir(grp.improvement as any);
      const flipped = flipDir(derived);

      const baseSettings = withParityV26({ trendFavourableSegmentation: false });

      const rowsA = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: derived, data: input, settings: baseSettings }).rows;
      const rowsB = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: flipped, data: input, settings: baseSettings }).rows;

      // Side-agnostic mask per row
      const a4 = rowsA.map(mask4);
      const b4 = rowsB.map(mask4);
      // Side-specific mask per row
      const a8 = rowsA.map(sideMask8);
      const b8 = rowsB.map(sideMask8);

      let diff4 = 0, diff8 = 0;
      for (let i = 0; i < a4.length; i++) {
        if (a4[i] !== b4[i]) diff4++;
        if (a8[i] !== b8[i]) diff8++;
      }
      if (diff4 || diff8) diffs.push({ metric, diff4, diff8 });
    }

    if (diffs.length > 0) {
      // These would indicate regressions in the core detection path:
      // metricImprovement should not affect raw detection flags when segmentation is disabled.
      // Emit a compact table to help triage and then fail.
      console.table(diffs.slice(0, 10));
    }
    expect(diffs.length, "Detection invariance broken for some metrics (see console)").toBe(0);
  });

  it("Report-only: with segmentation on, show where direction flips change trend recoding (expected for conflict cases)", () => {
    const metrics = getMetricOptions();
    const reports: Array<{ metric: string; changedTrendBits: number; changedAnyBits: number }> = [];

    for (const metric of metrics) {
      const grp = findGroup(metric);
      if (!grp) continue;
      const { data } = normaliseSeries(grp);
      const input = data.map((d) => ({ x: d.x, value: d.value, ghost: false, baseline: false, target: null }));
      const derived = toV2ImprovementDir(grp.improvement as any);
      const flipped = flipDir(derived);

      const segSettings = withParityV26({ trendFavourableSegmentation: true });
      const rowsA = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: derived, data: input, settings: segSettings }).rows;
      const rowsB = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: flipped, data: input, settings: segSettings }).rows;

      let changedTrend = 0, changedAny = 0;
      for (let i = 0; i < rowsA.length; i++) {
        const rA = rowsA[i];
        const rB = rowsB[i];
        const trendA = (rA.trendUp ? 1 : 0) | (rA.trendDown ? 2 : 0);
        const trendB = (rB.trendUp ? 1 : 0) | (rB.trendDown ? 2 : 0);
        if (trendA !== trendB) changedTrend++;
        if (mask4(rA) !== mask4(rB) || sideMask8(rA) !== sideMask8(rB)) changedAny++;
      }
      reports.push({ metric, changedTrendBits: changedTrend, changedAnyBits: changedAny });
    }

    console.table(reports.map(r => ({ metric: r.metric, changedTrend: r.changedTrendBits, changedAny: r.changedAnyBits }))); // report-only
    // Ensure the sweep ran
    expect(reports.length).toBeGreaterThan(0);
  });
});
