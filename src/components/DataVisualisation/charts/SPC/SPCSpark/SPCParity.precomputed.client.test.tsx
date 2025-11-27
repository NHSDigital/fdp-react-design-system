/// <reference types="@testing-library/jest-dom" />
import { render, cleanup } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { SPCChart } from "../SPCChart/SPCChart";
import { SPCSpark } from "./SPCSpark";
import { buildSpcV26a, computeSpcVisualCategories, ChartType, ImprovementDirection, SpcVisualCategory } from "../engine";

// Map SPCChart point classes to canonical hex colour so we can compare with spark per-point colours
const CLASS_TO_HEX: Record<string, string> = {
  "fdp-spc__point--sc-improvement": "#00B0F0",
  "fdp-spc__point--sc-concern": "#E46C0A",
  "fdp-spc__point--sc-no-judgement": "#490092",
};
const DEFAULT_COMMON = "#A6A6A6";

describe("SPC precomputed visuals parity between Chart and Spark", () => {
  beforeEach(() => cleanup());
  afterEach(() => cleanup());

  it("renders identical per-point colours for chart (classes) and spark (fills) when sharing a single engine run", () => {
    // Synthetic dataset with a clear outlier and mild variation – use 'Neither' direction to surface No Judgement category for special causes
    const values = [
      10, 11, 10, 11, 10, 11, 10, 11, 10, 11, // baseline
      30, // high outlier → special cause (No Judgement when direction is Neither)
      10, 11, 10, 11, 10, 11, 10, 11,
    ];
    const dataForEngine = values.map((v, i) => ({ x: i, value: v }));
    const settings: any = { minimumPoints: 13, chartLevelEligibility: true };
    const engine = buildSpcV26a({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Neither,
      data: dataForEngine,
      settings,
    });
    const rows = engine.rows as any[];
    const visuals = computeSpcVisualCategories(rows as any, {
      metricImprovement: ImprovementDirection.Neither,
      enableNeutralNoJudgement: true,
    });

    // Render chart with precomputed visuals to avoid recomputation and lock parity
    const { container: chartC } = render(
      <SPCChart
        ariaLabel="parity chart"
        data={values.map((y, i) => ({ x: i, y }))}
        metricImprovement={ImprovementDirection.Neither}
        precomputed={{ rows, visuals }}
        showPoints
        height={220}
      />
    );

    const chartPoints = Array.from(
      chartC.querySelectorAll("circle.fdp-spc__point")
    ) as SVGCircleElement[];
    expect(chartPoints.length).toBe(values.length);

    // Render spark with the same precomputed categories and signal colouring enabled
    const { container: sparkC } = render(
      <SPCSpark
        data={values.map((v) => ({ value: v }))}
        metricImprovement={ImprovementDirection.Neither}
        visualCategories={visuals as SpcVisualCategory[]}
        colorPointsBySignal
      />
    );
    const sparkPoints = Array.from(
      sparkC.querySelectorAll("circle")
    ) as SVGCircleElement[];
    expect(sparkPoints.length).toBe(values.length);

    // Compare per-index colours: chart maps via CSS class, spark exposes a data attribute with the resolved colour
    for (let i = 0; i < values.length; i++) {
      const chartEl = chartPoints[i];
      const classes = Array.from(chartEl.classList);
      const hexFromClass = classes.find((c) => CLASS_TO_HEX[c])
        ? CLASS_TO_HEX[classes.find((c) => CLASS_TO_HEX[c]) as string]
        : DEFAULT_COMMON;
      const sparkEl = sparkPoints[i];
      const sparkHex = sparkEl.getAttribute("data-signal-colour") || sparkEl.getAttribute("fill") || DEFAULT_COMMON;
      expect(sparkHex).toBe(hexFromClass);
    }
  });
});
