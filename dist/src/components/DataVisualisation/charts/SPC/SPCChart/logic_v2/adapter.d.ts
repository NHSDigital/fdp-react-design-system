import { SpcVisualCategory } from "./engine";
import { BuildArgsV2, SpcResultV2 } from "./types";
export interface BuildWithVisualsResult extends SpcResultV2 {
    visuals: SpcVisualCategory[];
}
export declare function buildWithVisuals(args: BuildArgsV2): BuildWithVisualsResult;
declare const _default: {
    buildWithVisuals: typeof buildWithVisuals;
};
export default _default;
