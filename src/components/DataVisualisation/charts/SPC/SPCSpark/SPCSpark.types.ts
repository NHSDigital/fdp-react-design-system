import { ImprovementDirection } from '../SPCChart/logic/spcConstants';
import { VariationState, VariationJudgement, MetricPolarity, AssuranceResult } from '../SPCIcons/SPCConstants';

export interface SPCSparkPoint {
  x?: string | number | Date; // optional (index spacing when absent)
  value: number | null;       // null => gap
}

export type SparkSize = 'xs' | 'sm' | 'md';

export interface SPCSparkProps {
  data: SPCSparkPoint[];
  windowSize?: number;              // tail window to render (default: entire data or clamp to 30)
  minPointsForSignals?: number;     // default 13
  showMean?: boolean;               // default true
  showLimits?: boolean;             // default false
  showLimitBand?: boolean;          // when true and showLimits, render shaded band between ±3σ
  /** Optional: Render 1σ and 2σ inner bands when limits are provided */
  showInnerBands?: boolean;         // default false
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
  showLatestMarker?: boolean;       // default true
  showStateGlyph?: boolean;         // default true
  variationState?: VariationState;  // external classification (preferred for MVP)
  autoClassify?: boolean;           // when true and variationState absent, compute simple 3-sigma classification
  variationJudgement?: VariationJudgement; // optional additional semantic for aria
  metricImprovement?: ImprovementDirection;  // engine enum (preferred) or legacy string
  assuranceState?: AssuranceResult;  // optional small badge / future
  polarity?: MetricPolarity;        // used only for aria narrative if provided
  gradientWash?: boolean;           // reuse existing wash tokens (applied to background)
  size?: SparkSize;                 // visual height preset
  onClassification?: (info: SparkClassificationInfo) => void; // emit details of classification rules
  suppressIsolatedPoint?: boolean;  // map single favourable 3σ point to no-judgement state
  /** Maximum number of points to render (thinning for performance). Classification still uses full window. */
  maxPoints?: number;
  /** Thinning strategy when maxPoints set. 'stride' keeps uniform spacing; 'rdp' uses shape-preserving simplification. */
  thinningStrategy?: 'stride' | 'rdp';
  /** When true, individual point circles are coloured by their own signal (improvement / concern / common) instead of uniform series colour. */
  colorPointsBySignal?: boolean;
  /** Preferred: Engine-provided per-row signals mapped to 'improvement' | 'concern' | 'neither' | 'suppressed'. Aligns with data length. */
  pointSignals?: Array<'improvement' | 'concern' | 'neither' | 'suppressed' | null>;
  /** Preferred: Engine-provided flag per row indicating a neutral special-cause (variation 'neither' with special cause). Aligns with data length. */
  pointNeutralSpecialCause?: boolean[];
  ariaLabel?: string;
  ariaDescriptionContext?: Record<string, string | undefined>;
  className?: string;
  onPointClick?: (index:number, point:SPCSparkPoint) => void;
}

export interface ComputedSparkMetrics {
  mean: number | null;
  latestValue: number | null;
  latestIndex: number | null;
}

export type SparkRule = 'point-beyond-3sigma' | 'eight-point-run' | 'five-point-trend' | 'two-of-three-near-limit';

export interface SparkClassificationInfo {
  state: VariationState;
  firedRules: SparkRule[];
  mean: number | null;
  stdDev: number | null;
  side?: 'above' | 'below'; // latest relative to mean
}
