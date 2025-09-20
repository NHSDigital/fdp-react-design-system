import * as React from "react";
import { SPCChart } from "../../SPCChart";
import { ImprovementDirection, ChartType } from "../../types";

/**
 * Auto-recalc with multiple insertions (XmR, higher is better).
 * The series has three regimes to demonstrate two automatic baseline insertions.
 */
export const SPCChartAutoRecalcMultiExample: React.FC = () => {
  const part1 = [12, 13, 12, 13, 12, 13, 12, 13];
  const part2 = [18, 19, 18, 19, 18, 19, 18, 19];
  const part3 = [24, 25, 24, 25, 24, 25, 24, 25];
  const series = [...part1, ...part2, ...part3].map((y, i) => ({
    x: new Date(2025, 3, i + 1),
    y,
  }));

  return (
    <SPCChart
      input={{ data: series }}
      engine={{
        chartType: ChartType.XmR,
        metricImprovement: ImprovementDirection.Up,
        // Allow up to two automatic baseline insertions; keep default thresholds
        autoRecalc: { enabled: true, maxInsertions: 2, minGap: 12},
      }}
      ui={{ overlays: { partitionMarkers: true } }}
      enableRules
      a11y={{ label: "Auto-recalc multiple insertions example" }}
    />
  );
};

export default SPCChartAutoRecalcMultiExample;
