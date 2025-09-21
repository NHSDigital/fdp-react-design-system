import { ImprovementDirection } from "../engine";
import { VariationState, VariationJudgement, MetricPolarity, AssuranceResult } from "../SPCIcons/SPCConstants";
export interface SPCSparkPoint {
    x?: string | number | Date;
    value: number | null;
}
export declare enum SparkSize {
    Xs = "xs",
    Sm = "sm",
    Md = "md",
    Lg = "lg",
    Xl = "xl",
    Full = "full"
}
export type SparkSizeValue = "xs" | "sm" | "md" | "lg" | "xl" | "full";
export interface SPCSparkProps {
    data: SPCSparkPoint[];
    windowSize?: number;
    minPointsForSignals?: number;
    showMean?: boolean;
    showLimits?: boolean;
    showLimitBand?: boolean;
    /** Optional: Render 1σ and 2σ inner bands when limits are provided */
    showInnerBands?: boolean;
    /** Preferred: Engine-provided centre line for the current partition */
    centerLine?: number | null;
    /** Preferred: Engine-provided control limits (3σ UCL/LCL) for the current partition */
    controlLimits?: {
        lower: number | null;
        upper: number | null;
    } | null;
    /** Preferred: Engine-provided 1σ/2σ bands */
    sigmaBands?: {
        upperOne: number | null;
        upperTwo: number | null;
        lowerOne: number | null;
        lowerTwo: number | null;
    } | null;
    /** Sigma estimation: fixed to XmR (moving range). */
    showLatestMarker?: boolean;
    showStateGlyph?: boolean;
    variationState?: VariationState;
    variationJudgement?: VariationJudgement;
    metricImprovement?: ImprovementDirection;
    assuranceState?: AssuranceResult;
    polarity?: MetricPolarity;
    gradientWash?: boolean;
    /** Visual size preset: use SparkSize enum (preferred) or matching literal strings for back-compat */
    size?: SparkSize | SparkSizeValue;
    /** Maximum number of points to render (thinning for performance). Classification still uses full window. */
    maxPoints?: number;
    /** Thinning strategy when maxPoints set. 'stride' keeps uniform spacing; 'rdp' uses shape-preserving simplification. */
    thinningStrategy?: "stride" | "rdp";
    /** When true, individual point circles are coloured by their own signal (improvement / concern / common) instead of uniform series colour. */
    colorPointsBySignal?: boolean;
    /** Preferred: Engine-provided per-row signals mapped to 'improvement' | 'concern' | 'neither' | 'suppressed'. Aligns with data length. */
    pointSignals?: Array<"improvement" | "concern" | "neither" | "suppressed" | null>;
    /** Preferred: Engine-provided flag per row indicating a neutral special-cause (variation 'neither' with special cause). Aligns with data length. */
    pointNeutralSpecialCause?: boolean[];
    ariaLabel?: string;
    ariaDescriptionContext?: Record<string, string | undefined>;
    className?: string;
    onPointClick?: (index: number, point: SPCSparkPoint) => void;
}
export interface ComputedSparkMetrics {
    mean: number | null;
    latestValue: number | null;
    latestIndex: number | null;
}
