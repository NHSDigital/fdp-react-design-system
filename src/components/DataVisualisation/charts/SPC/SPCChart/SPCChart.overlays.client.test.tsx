import { render } from "@testing-library/react";
import { SPCChart, ImprovementDirection } from "./SPCChart";
import { ChartType } from "./logic/spc";

/**
 * Smoke test: when overlay props are enabled and a monotonic run exists,
 * we render the overlays <g> group with at least the start marker circle.
 * Dataset shaped to have an upward run that crosses the mean.
 */

describe("SPCChart trend overlays", () => {
  it("renders overlays group and markers when enabled", () => {
    const data = Array.from({ length: 30 }, (_, i) => {
      const x = new Date(2023, 0, i + 1);
      // First half around ~10, then a clear upward run that should cross the global mean
      const y = i < 15 ? 10 + Math.sin(i) * 0.2 : 9 + (i - 14) * 1.2;
      return { x, y };
    });

    const { container } = render(
      <SPCChart
        data={data}
        chartType={ChartType.XmR}
        metricImprovement={ImprovementDirection.Up}
        enableRules
        showPoints={false}
        showTrendStartMarkers
        showFirstFavourableCrossMarkers
        showTrendBridgeOverlay
      />
    );

    const group = container.querySelector("g.fdp-spc__trend-overlays");
    expect(group).toBeTruthy();

    const circles = group?.querySelectorAll("circle");
    expect((circles?.length ?? 0) >= 1).toBe(true);

    // If both markers exist, there should be a connecting line (bridge)
    const lines = group?.querySelectorAll("line");
    if ((circles?.length ?? 0) >= 2) {
      expect((lines?.length ?? 0) >= 1).toBe(true);
    }
  });
});
