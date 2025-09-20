import * as React from "react";
export declare enum PatternDirection {
    Upward = "Upward",
    Downward = "Downward"
}
export declare enum CrossingStyle {
    ImmediateShift = "Immediate shift",
    GradualTrend = "Gradual trend",
    MinimalNudge = "Minimal nudge"
}
export declare enum DatasetType {
    FavourableCrossing = "Favourable crossing",
    WeakNoChange = "Weak/no change",
    Regression = "Regression"
}
/**
 * Interactive demo for SPC v2 Visual Scenarios.
 *
 * - The chart uses the selected VisualsScenario via the component prop.
 * - The table shows engine-derived visuals computed by buildVisualsForScenario for the same series.
 * - We keep the chart "engine-true" and let the scenario adjust visuals only (rules/rows unchanged).
 */
export declare const SPCVisualsScenarioToggleDemo: React.FC;
export default SPCVisualsScenarioToggleDemo;
