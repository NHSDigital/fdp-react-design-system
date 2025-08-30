export declare enum AssuranceResult {
    Pass = "pass",
    Fail = "fail",
    Uncertain = "uncertain"
}
export declare const DEFAULT_COLOURS: Record<AssuranceResult, string>;
export declare const DEFAULT_LETTERS: Record<AssuranceResult, string>;
export declare enum MetricPolarity {
    HigherIsBetter = "higher_is_better",
    LowerIsBetter = "lower_is_better",
    ContextDependent = "context_dependent"
}
export declare enum Direction {
    Higher = "higher",
    Lower = "lower"
}
export declare enum VariationJudgement {
    Improving = "improving",
    Deteriorating = "deteriorating",
    No_Judgement = "no_judgement",
    None = "none"
}
export declare enum VariationState {
    SpecialCauseImproving = "special_cause_improving",
    SpecialCauseDeteriorating = "special_cause_deteriorating",
    CommonCause = "common_cause",
    SpecialCauseNoJudgement = "special_cause_no_judgement"
}
export interface VariationColourDef {
    hex: string;
    stroke?: string;
    fill?: string;
    label: string;
    description: string;
    text?: string;
    judgement?: VariationJudgement;
}
export declare const ICON_VIEWBOX = "0 0 300 300";
export declare const ICON_SIZE = 300;
export declare const ICON_CX = 150;
export declare const ICON_CY = 150;
export declare const ICON_R = 113.25;
export declare const POINT_RADIUS = 16;
export declare const NO_JUDGEMENT_GLYPH_PATH = "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42";
export declare const VARIATION_COLOURS: Record<VariationState, VariationColourDef>;
export declare const getVariationColour: (state: VariationState) => VariationColourDef;
export declare const getVariationTrend: (state: VariationState) => VariationJudgement;
export interface Point {
    cx: number;
    cy: number;
}
export declare const POINT_LAYOUTS: {
    readonly special: {
        readonly higher: readonly [{
            readonly cx: 77.5;
            readonly cy: 158.5;
        }, {
            readonly cx: 114;
            readonly cy: 175;
        }, {
            readonly cx: 150.5;
            readonly cy: 158.5;
        }, {
            readonly cx: 188;
            readonly cy: 125;
        }, {
            readonly cx: 225;
            readonly cy: 137;
        }];
        readonly lower: readonly [{
            readonly cx: 77.5;
            readonly cy: 139.5;
        }, {
            readonly cx: 114;
            readonly cy: 124.5;
        }, {
            readonly cx: 150.5;
            readonly cy: 139.5;
        }, {
            readonly cx: 188;
            readonly cy: 175.5;
        }, {
            readonly cx: 224.5;
            readonly cy: 162;
        }];
    };
    readonly common: readonly [{
        readonly cx: 76.5;
        readonly cy: 149.5;
    }, {
        readonly cx: 113;
        readonly cy: 179.5;
    }, {
        readonly cx: 149.5;
        readonly cy: 117;
    }, {
        readonly cx: 187;
        readonly cy: 171;
    }, {
        readonly cx: 223.5;
        readonly cy: 158;
    }];
};
export declare function computePointPositions(state: VariationState, direction: Direction): Point[];
interface VariationExampleData {
    judgement: VariationJudgement;
    polarity: MetricPolarity;
    trend?: Direction;
}
export declare const variationExamples: {
    id: string;
    label: string;
    data: VariationExampleData;
}[];
export declare const assuranceExamples: {
    id: string;
    label: string;
    status: AssuranceResult;
}[];
export { VARIATION_COLOR_TOKENS } from "../SPCChart/logic/spcDescriptors";
export { getVariationColorToken, getVariationColorHex } from "../SPCChart/logic/spcDescriptors";
export type { VariationIcon } from "../SPCChart/logic/spc";
