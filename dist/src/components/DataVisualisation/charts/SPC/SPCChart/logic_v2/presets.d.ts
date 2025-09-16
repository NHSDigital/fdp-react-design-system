import { ImprovementDirection, type SpcSettingsV26a } from "./types";
export declare const PARITY_V26: Readonly<SpcSettingsV26a>;
export declare function withParityV26(overrides?: SpcSettingsV26a): SpcSettingsV26a;
export declare function withConflictPresetV26(overrides?: SpcSettingsV26a): SpcSettingsV26a;
export declare function withConflictPresetAutoV26(metricImprovement: ImprovementDirection, overrides?: SpcSettingsV26a): SpcSettingsV26a;
declare const _default: {
    PARITY_V26: Readonly<SpcSettingsV26a>;
    withParityV26: typeof withParityV26;
    withConflictPresetV26: typeof withConflictPresetV26;
    withConflictPresetAutoV26: typeof withConflictPresetAutoV26;
};
export default _default;
