import { SpcVisualCategory } from "./engine";
import { BuildArgsV2, ImprovementDirection, SpcRowV2, type SpcSettingsV26a } from "./types";
export declare enum VisualsScenario {
    None = "none",
    RecalcCrossingShift = "recalc-crossing-shift",
    RecalcCrossingTrend = "recalc-crossing-trend",
    RecalcCrossingTwoSigma = "recalc-crossing-two-sigma",
    RecalculationsRecalculated = "recalculations-recalculated",
    BaselinesRecalculated = "baselines-recalculated"
}
export declare function buildVisualsForScenario(args: BuildArgsV2, scenario: VisualsScenario, opts?: {
    trendVisualMode?: "Ungated" | "Gated";
    enableNeutralNoJudgement?: boolean;
}): {
    rows: SpcRowV2[];
    visuals: SpcVisualCategory[];
};
export declare const PARITY_V26: Readonly<SpcSettingsV26a>;
export declare function withParityV26(overrides?: SpcSettingsV26a): SpcSettingsV26a;
export declare function withConflictPresetV26(overrides?: SpcSettingsV26a): SpcSettingsV26a;
export declare function withConflictPresetAutoV26(metricImprovement: ImprovementDirection, overrides?: SpcSettingsV26a): SpcSettingsV26a;
