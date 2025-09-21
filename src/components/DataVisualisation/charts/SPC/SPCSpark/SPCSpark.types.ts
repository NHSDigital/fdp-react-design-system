import { ImprovementDirection, SpcVisualCategory } from "../engine";
import { PointSignal } from "../utils/transform";
import {
	VariationState,
	VariationJudgement,
	MetricPolarity,
	AssuranceResult,
} from "../SPCIcons/SPCConstants";

export interface SPCSparkPoint {
	x?: string | number | Date; // optional (index spacing when absent)
	value: number | null; // null => gap
}

export enum SparkSize {
	Xs = "xs",
	Sm = "sm",
	Md = "md",
	Lg = "lg",
	Xl = "xl",
	Full = "full",
}
// Back-compat: accept literal strings alongside the enum
export type SparkSizeValue = "xs" | "sm" | "md" | "lg" | "xl" | "full";

export interface SPCSparkProps {
	data: SPCSparkPoint[];
	windowSize?: number; // tail window to render (default: entire data or clamp to 30)
	minPointsForSignals?: number; // default 13
	showMean?: boolean; // default true
	showLimits?: boolean; // default false
	showLimitBand?: boolean; // when true and showLimits, render shaded band between ±3σ
	/** Optional: Render 1σ and 2σ inner bands when limits are provided */
	showInnerBands?: boolean; // default false
	/** Preferred: Engine-provided centre line for the current partition */
	centerLine?: number | null;
	/** Preferred: Engine-provided control limits (3σ UCL/LCL) for the current partition */
	controlLimits?: { lower: number | null; upper: number | null } | null;
	/** Preferred: Engine-provided 1σ/2σ bands */
	sigmaBands?: {
		upperOne: number | null;
		upperTwo: number | null;
		lowerOne: number | null;
		lowerTwo: number | null;
	} | null;
	/** Sigma estimation: fixed to XmR (moving range). */
	showLatestMarker?: boolean; // default true
	showStateGlyph?: boolean; // default true
	variationState?: VariationState; // engine-provided series classification
	variationJudgement?: VariationJudgement; // optional additional semantic for aria
	metricImprovement?: ImprovementDirection; // engine enum (preferred) or legacy string
	assuranceState?: AssuranceResult; // optional small badge / future
	polarity?: MetricPolarity; // used only for aria narrative if provided
	gradientWash?: boolean; // reuse existing wash tokens (applied to background)
	/** Visual size preset: use SparkSize enum (preferred) or matching literal strings for back-compat */
	size?: SparkSize | SparkSizeValue;
	/** Maximum number of points to render (thinning for performance). Classification still uses full window. */
	maxPoints?: number;
	/** Thinning strategy when maxPoints set. 'stride' keeps uniform spacing; 'rdp' uses shape-preserving simplification. */
	thinningStrategy?: "stride" | "rdp";
	/** When true, individual point circles are coloured by their own signal (improvement / concern / common) instead of uniform series colour. */
	colorPointsBySignal?: boolean;
	/** Preferred: Engine-provided per-row signals mapped to enum values (Improvement | Concern | Neither). Accepts legacy string literals for back-compat. Aligns with data length. */
	pointSignals?: Array<PointSignal | "improvement" | "concern" | "neither" | "suppressed" | null>;
	/** Preferred: Engine-provided flag per row indicating a neutral special-cause (variation 'neither' with special cause). Aligns with data length. */
	pointNeutralSpecialCause?: boolean[];
	/** Exact parity: v2 visual categories computed with the same pipeline as SPCChart. If provided, these take precedence over pointSignals/neutral flags. */
	visualCategories?: SpcVisualCategory[];
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
// Pure-only renderer: no local classification types exported
