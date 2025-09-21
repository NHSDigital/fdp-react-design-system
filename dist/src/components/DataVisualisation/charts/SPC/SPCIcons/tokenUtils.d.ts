export declare const tokenColour: (key: string, fallback: string) => string;
export declare const getGradientOpacities: () => {
    start: string;
    mid: string;
    end: string;
    triStart: string;
    triMid: string;
    triEnd: string;
};
import { VariationIcon as UiVariationIcon } from "../SPCChart/types";
import { VariationState } from "./SPCConstants";
export declare const SPC_TOKEN_KEYS: {
    readonly improvement: "improvement";
    readonly concern: "concern";
    readonly noJudgement: "no-judgement";
    readonly common: "common-cause";
};
export declare const SPC_FALLBACK_HEX: {
    readonly improvement: "#00B0F0";
    readonly concern: "#E46C0A";
    readonly noJudgement: "#490092";
    readonly common: "#A6A6A6";
};
export declare const colourImprovement: () => string;
export declare const colourConcern: () => string;
export declare const colourNoJudgement: () => string;
export declare const colourCommon: () => string;
/** Map UI VariationIcon to token colour */
export declare function colourForSignal(icon: UiVariationIcon | null | undefined): string;
/** Map series-level VariationState to token colour used for series strokes/bands */
export declare function colourForState(state: VariationState | null | undefined): string;
