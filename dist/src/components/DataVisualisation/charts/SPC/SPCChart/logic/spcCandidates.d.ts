export type VariationIconRaw = "improvement" | "concern" | "neither" | "suppressed" | "none";
export type BaselineReasonRaw = "shift" | "trend" | "point";
export interface BaselineSuggestionRaw {
    index: number;
    reason: BaselineReasonRaw;
    score: number;
    deltaMean: number;
    oldMean: number;
    newMean: number;
    window: [number, number];
}
export interface BaselineRowMinimal {
    value: number | null;
    partitionId: number;
    variationIcon: VariationIconRaw;
    mean: number | null;
    upperProcessLimit: number | null;
}
export declare function computeBaselineSuggestionsRaw(rows: BaselineRowMinimal[], params: {
    W: number;
    minGap: number;
    minDeltaSigma: number;
    scoreThreshold: number;
    isShiftUpAt: (i: number) => boolean;
    isShiftDownAt: (i: number) => boolean;
    isTrendUpAt: (i: number) => boolean;
    isTrendDownAt: (i: number) => boolean;
    isSingleUpAt: (i: number) => boolean;
    isSingleDownAt: (i: number) => boolean;
    shiftRunLength?: number;
    trendRunLength?: number;
}): BaselineSuggestionRaw[];
declare const _default: {
    computeBaselineSuggestionsRaw: typeof computeBaselineSuggestionsRaw;
};
export default _default;
