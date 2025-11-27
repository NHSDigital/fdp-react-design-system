import SpcGradientCategory from "./SPCChart.constants";
export type GradientSequence = {
    start: number;
    end: number;
    category: SpcGradientCategory;
};
/**
 * Compute contiguous sequences from per-point gradient categories.
 *
 * Behaviour:
 * - If absorbSingles is true (default), any single-length coloured run (Concern/Improvement/NoJudgement)
 *   is converted to Common to avoid tiny slivers in the background bands.
 * - Only sequences of length >= 2 are emitted for coloured categories; Common sequences are emitted regardless.
 */
export declare function computeGradientSequences(categories: SpcGradientCategory[], absorbSingles?: boolean): GradientSequence[];
declare const _default: {
    computeGradientSequences: typeof computeGradientSequences;
};
export default _default;
