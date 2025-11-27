import { ChartType, SpcVisualCategory, VariationIcon } from "../engine";
import { ImprovementDirection } from "../engine";
import { type PointSignal } from "./transform";
import type { VariationState } from "../SPCIcons/SPCConstants";
export type SpcDatum = {
    x: string | number | Date;
    value: number | null;
} | {
    x: string | number | Date;
    y: number | null;
};
export interface SpcPrecomputedSummary {
    rows: any[];
    visuals: SpcVisualCategory[];
    latestState: VariationState | null;
    /** Engine variation icon on the last real row (preserves side for neutral special cause) */
    lastVariationIcon: VariationIcon | null;
    centerLine: number | null;
    controlLimits: {
        lower: number | null;
        upper: number | null;
    } | null;
    sigmaBands: {
        upperOne: number | null;
        upperTwo: number | null;
        lowerOne: number | null;
        lowerTwo: number | null;
    } | null;
    /** Optional convenience arrays for spark fallback colouring when visuals aren’t used */
    pointSignals?: Array<PointSignal | null>;
    pointNeutralSpecialCause?: boolean[];
}
export interface ComputeSpcPrecomputedOptions {
    chartType?: ChartType;
    metricImprovement: ImprovementDirection;
    /** Minimum eligible points to turn on chart-level eligibility (defaults 13 to mirror SPCChart) */
    minimumPoints?: number;
    /** Whether to enable neutral no judgement categorisation (default true) */
    enableNeutralNoJudgement?: boolean;
    /** Include signal fallbacks (derived from visual categories). Default true */
    includeSignalFallbacks?: boolean;
}
/**
 * Compute engine rows and visual categories once for a series (e.g., one table row),
 * plus derived latest state and limits/bands for rendering SPCChart and SPCSpark with parity.
 */
export declare function computeSpcPrecomputed(data: SpcDatum[], opts: ComputeSpcPrecomputedOptions): SpcPrecomputedSummary;
