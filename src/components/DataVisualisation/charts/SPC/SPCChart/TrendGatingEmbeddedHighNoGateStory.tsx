import React, { useState } from "react";
import { SPCChart, ImprovementDirection } from "./SPCChart";
import { metricLookup } from "./test-data/parsedDataset";
import { ChartContainer } from "../../ChartContainer";
import { Radios } from "../../../../index";

/**
 * Embedded chart replicating the "Special cause - High is good" dataset story
 * but with trend gating visuals disabled (no purple neutral styling and no tooltip explanation).
 * Placed above the normal example in the Trend Gating Rationale doc for comparison.
 */
export const TrendGatingEmbeddedHighNoGate: React.FC = () => {
  const metricKey = "Special cause - High is good";
  const data = (metricLookup as any)[metricKey] || [];
  const [dir, setDir] = useState<ImprovementDirection>(ImprovementDirection.Up);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    switch (val) {
      case "up":
        setDir(ImprovementDirection.Up);
        break;
      case "down":
        setDir(ImprovementDirection.Down);
        break;
      default:
        setDir(ImprovementDirection.Neither);
        break;
    }
  };

  return (
    <>
      <ChartContainer title={"Special cause (gating off)"} source="CSV dummy dataset">
        <SPCChart
          data={data}
          metricImprovement={dir}
          enableRules
          showPoints
          narrationContext={{ measureName: metricKey }}
          gradientSequences
          enableNeutralNoJudgement={true}
          showTrendGatingExplanation={false}
          // Also disable engine side-gating so early trend points classify directionally
          // enableTrendSideGating not provided (default false)
        />
      </ChartContainer>
      <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
        <Radios
          name="trend-gating-direction-nogate"
          value={
            dir === ImprovementDirection.Up
              ? "up"
              : dir === ImprovementDirection.Down
              ? "down"
              : "neither"
          }
          onChange={handleChange}
          inline
          options={[
            { value: "up", text: "High is good" },
            { value: "down", text: "Low is good" },
            { value: "neither", text: "Neither" },
          ]}
        />
      </div>
    </>
  );
};

export default TrendGatingEmbeddedHighNoGate;
