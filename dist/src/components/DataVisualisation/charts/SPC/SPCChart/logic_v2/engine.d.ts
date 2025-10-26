import { BuildArgsV2, ImprovementDirection, SpcResultV2, SpcRowV2 } from "./types";
import { SpcVisualCategory, TrendVisualMode } from "./postprocess/visualCategories";
import { BoundaryWindowsOptions } from "./postprocess/boundaryWindows";
export declare function buildSpcV26a(args: BuildArgsV2): SpcResultV2;
declare const _default: {
    buildSpcV26a: typeof buildSpcV26a;
};
export default _default;
export declare function buildSpcV26aWithVisuals(args: BuildArgsV2, visuals?: {
    trendVisualMode?: TrendVisualMode;
    enableNeutralNoJudgement?: boolean;
    boundaryWindows?: (BoundaryWindowsOptions & {
        directionOverride?: ImprovementDirection;
    });
}): {
    rows: SpcRowV2[];
    visuals: SpcVisualCategory[];
};
