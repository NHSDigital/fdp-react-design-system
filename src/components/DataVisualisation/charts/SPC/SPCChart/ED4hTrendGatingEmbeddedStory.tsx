import React from "react";
import { SPCChart, ImprovementDirection } from "./SPCChart";
import { ChartContainer } from "../../ChartContainer";

// Simple embedded chart using the ED 4h compliance dataset used in tests
// Side-gating enabled (default): early trend points on the adverse side render neutral (purple)
export const ED4hTrendGatingEmbedded: React.FC = () => {
  const start = new Date("2023-01-01T00:00:00Z");
  const values = [69, 70, 68, 71, 70, 69, 70, 69, 71, 70, 68, 69, 78, 79, 80, 81, 79, 78, 82, 81, 80, 79, 81, 80];
  const data = values.map((v, i) => ({ x: new Date(start.getFullYear(), start.getMonth() + i, 1), y: v }));
  const metricName = "ED 4h compliance — trend side-gating ON";

  return (
  <ChartContainer title={metricName} source="Synthetic monthly series (for docs)">
      <SPCChart
        data={data}
        metricImprovement={ImprovementDirection.Up}
        enableRules
        showPoints
        narrationContext={{ measureName: metricName, measureUnit: "%" }}
        gradientSequences
        // trend side-gating ON by default
      />
    </ChartContainer>
  );
};

export default ED4hTrendGatingEmbedded;
