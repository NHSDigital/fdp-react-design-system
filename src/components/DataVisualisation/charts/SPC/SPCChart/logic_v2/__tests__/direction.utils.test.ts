import { describe, it, expect } from "vitest";
import {
  directionFromImprovementString,
  directionOverrideFromMetric,
  deriveDirectionFromDataset,
  deriveDirectionFromDatasetWithPoints,
} from "../utils/direction";
import { ImprovementDirection } from "../types";

describe("logic_v2: direction utilities", () => {
  it("parses common improvement strings", () => {
    expect(directionFromImprovementString("High is good")).toBe(
      ImprovementDirection.Up
    );
    expect(directionFromImprovementString("LOW is good")).toBe(
      ImprovementDirection.Down
    );
    expect(directionFromImprovementString("neither")).toBe(
      ImprovementDirection.Neither
    );
    expect(directionFromImprovementString(undefined)).toBe(
      ImprovementDirection.Neither
    );
  });

  it("applies metric-name overrides for crossing recalculations", () => {
    expect(
      directionOverrideFromMetric(
        "Special cause crossing recalculations - shift"
      )
    ).toBe(ImprovementDirection.Down);
    expect(
      directionOverrideFromMetric(
        "Special cause crossing recalculations - two-sigma"
      )
    ).toBe(ImprovementDirection.Down);
    expect(
      directionOverrideFromMetric(
        "Special cause crossing recalculations - trend"
      )
    ).toBe(ImprovementDirection.Up);
  });

  it("combines improvement string and metric override (string wins)", () => {
    // Explicit string should win even if metric might imply overrides
    expect(
      deriveDirectionFromDataset(
        "Special cause crossing recalculations - shift",
        "High is good"
      )
    ).toBe(ImprovementDirection.Up);
  });

  it("falls back to data-driven heuristic when neutral", () => {
    const pointsBlueAbove = [
      { value: 10, colour: "#A6A6A6" },
      { value: 12, colour: "#00B0F0" },
      { value: 13, colour: "#00B0F0" },
      { value: 11, colour: "#A6A6A6" },
    ];
    expect(
      deriveDirectionFromDatasetWithPoints(
        "Some metric",
        undefined,
        pointsBlueAbove
      )
    ).toBe(ImprovementDirection.Up);

    const pointsOrangeAbove = [
      { value: 10, colour: "#A6A6A6" },
      { value: 8, colour: "#E46C0A" },
      { value: 7.9, colour: "#E46C0A" },
      { value: 9, colour: "#A6A6A6" },
    ];
    expect(
      deriveDirectionFromDatasetWithPoints(
        "Some metric",
        undefined,
        pointsOrangeAbove
      )
    ).toBe(ImprovementDirection.Down);
  });
});
