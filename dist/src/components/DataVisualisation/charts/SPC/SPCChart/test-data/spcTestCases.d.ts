/**
 * Structured SPC test/story definitions derived from the XmR testing specification document.
 * Each definition provides (at minimum) a title and a resolved numeric value series. Where possible we
 * reuse the canonical CSV-driven dataset (metricLookup) so there is a single source of truth for point
 * sequences already exercised elsewhere. Optional expected statistics & colour classifications can be
 * attached for more granular assertions in tests.
 */
import { ImprovementDirection } from "../../engine";
export declare const SPC_POINT_COLOURS: {
    readonly improvement: "#00B0F0";
    readonly concern: "#E46C0A";
    readonly noJudgement: "#490092";
    readonly common: "#A6A6A6";
};
export type SpcDirection = "higher" | "lower" | "neither";
export interface SpcTestCase {
    /** Human readable scenario title (also used as fallback lookup key into metricLookup) */
    title: string;
    /** Optional explicit metric name inside metricLookup when different from title */
    sourceMetric?: string;
    /** Explicit numeric values (if omitted we read from metricLookup[sourceMetric||title]) */
    values?: number[];
    /** High / low / neither improvement direction (maps to ImprovementDirection) */
    direction?: SpcDirection;
    /** Expected mean (last partition) */
    expectedMean?: number;
    /** Expected upper process limit (last partition) */
    expectedUcl?: number;
    /** Expected lower process limit (last partition) */
    expectedLcl?: number;
    /** Optional expected per-point colour hex codes (null = do not assert that index) */
    expectedPointColours?: (string | null)[];
    target?: number;
}
/** Convenience mapping to the enum used by the component */
export declare function mapDirection(dir: SpcDirection | undefined): ImprovementDirection;
/** Numeric tolerance for floating-point comparisons of derived stats */
export declare const STAT_TOLERANCE = 0.02;
/**
 * Core scenario catalogue. Where expected statistics are published in the markdown specification they
 * are captured here (currently only the first Process limits example publishes explicit values).
 */
export declare const spcTestCases: SpcTestCase[];
/** Export a resolved projection (values always populated) for convenience */
export declare const resolvedSpcTestCases: {
    values: number[];
    /** Human readable scenario title (also used as fallback lookup key into metricLookup) */
    title: string;
    /** Optional explicit metric name inside metricLookup when different from title */
    sourceMetric?: string;
    /** High / low / neither improvement direction (maps to ImprovementDirection) */
    direction?: SpcDirection;
    /** Expected mean (last partition) */
    expectedMean?: number;
    /** Expected upper process limit (last partition) */
    expectedUcl?: number;
    /** Expected lower process limit (last partition) */
    expectedLcl?: number;
    /** Optional expected per-point colour hex codes (null = do not assert that index) */
    expectedPointColours?: (string | null)[];
    target?: number;
}[];
