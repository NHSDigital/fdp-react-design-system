#!/usr/bin/env tsx
/**
 * SPC v2 Grouped Metrics Report
 *
 * Generates a per-metric report across the grouped dataset used in Storybook/tests.
 * Prints a console table and icon totals by default. Pass --json to emit JSON only.
 */
import { buildSpcV26a } from "../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/engine";
import { withParityV26 } from "../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/presets";
import { ChartType, ImprovementDirection } from "../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/types";
import {
  getMetricOptions,
  findGroup,
  normaliseSeries,
  deriveBaselines,
  toV2ImprovementDir,
} from "../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/storybook/data/groupedDataset";
import { iconToName } from "../src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/storybook/data/variationIconColours";

interface MetricReportRow {
  metric: string;
  dir: ImprovementDirection;
  length: number;
  eligible: boolean;
  lastIcon: string;
  anySinglePoint: boolean;
  anyTwoSigma: boolean;
  anyShift: boolean;
  anyTrend: boolean;
}

function main() {
  const asJson = process.argv.includes("--json");
  const settings = withParityV26();
  const metricOptions = getMetricOptions();

  const perMetric: MetricReportRow[] = [];
  const totals: Record<string, number> = {
    improvement: 0,
    concern: 0,
    neutralSpecialCause: 0,
    commonCause: 0,
  };

  for (const metric of metricOptions) {
    const grp = findGroup(metric)!;
    const { data: series } = normaliseSeries(grp);
    const baselines = deriveBaselines(grp, series.length);
    const dir = toV2ImprovementDir(grp.improvement as any);

    const input = series.map((d, i) => ({
      x: d.x,
      value: d.value,
      ghost: false,
      baseline: !!baselines?.[i],
      target: null,
    }));

    const rows = buildSpcV26a({ chartType: ChartType.XmR, metricImprovement: dir, data: input, settings }).rows;

    const last = rows.filter((r) => !r.ghost).at(-1)!;
    const eligible = series.length >= (settings.minimumPoints ?? 13);

    const iconName = iconToName(last.variationIcon);
    totals[iconName] = (totals[iconName] ?? 0) + 1;

    const anySinglePoint = rows.some((r) => r.singlePointUp || r.singlePointDown);
    const anyTwoSigma = rows.some((r) => r.twoSigmaUp || r.twoSigmaDown);
    const anyShift = rows.some((r) => r.shiftUp || r.shiftDown);
    const anyTrend = rows.some((r) => r.trendUp || r.trendDown);

    perMetric.push({
      metric,
      dir,
      length: series.length,
      eligible,
      lastIcon: iconName,
      anySinglePoint,
      anyTwoSigma,
      anyShift,
      anyTrend,
    });
  }

  if (asJson) {
    const payload = { count: perMetric.length, perMetric, totals };
    process.stdout.write(JSON.stringify(payload, null, 2) + "\n");
    return;
  }

  console.info("SPC v2 grouped metrics report (count=", perMetric.length, ")");
  console.table?.(
    perMetric.map((m) => ({
      Metric: m.metric,
      Dir: m.dir,
      Len: m.length,
      Eligible: m.eligible,
      LastIcon: m.lastIcon,
      Single: m.anySinglePoint,
      TwoSig: m.anyTwoSigma,
      Shift: m.anyShift,
      Trend: m.anyTrend,
    }))
  );
  console.info("Icon totals:", totals);
}

main();
