import { ImprovementDirection } from "../types";
/**
 * Map a free-form improvement string to an ImprovementDirection.
 * Used by Storybook and tests; keep logic centralised to avoid drift.
 */
export declare function directionFromImprovementString(raw?: string): ImprovementDirection;
/**
 * Metric-name driven overrides (dataset titles), used when improvement string
 * is missing or neutral. Encodes agreed canonical behaviour in examples.
 */
export declare function directionOverrideFromMetric(metric: string): ImprovementDirection | null;
/**
 * Combined derivation: prefer improvement string mapping; if neutral, apply
 * metric-name overrides; if still neutral, return Neither.
 */
export declare function deriveDirectionFromDataset(metric: string, improvement?: string): ImprovementDirection;
/**
 * Enhanced derivation used by tests when expected colours/values are available.
 * Mirrors historical test heuristics to choose a sensible polarity by inspecting
 * expected blue/orange clusters relative to the mean.
 */
export declare function deriveDirectionFromDatasetWithPoints(metric: string, improvement: string | undefined, points?: Array<{
    value: number;
    colour?: string;
}>): ImprovementDirection;
