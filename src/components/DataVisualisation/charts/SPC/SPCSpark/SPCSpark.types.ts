import { VariationState, VariationJudgement, MetricPolarity } from '../SPCIcons/SPCConstants';
import { AssuranceState } from '../SPCIcons/SPCIcon';

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
  /** Sigma estimation method for limits & classification. 'moving-range' (MRbar/1.128) aligns with XmR; 'stddev' uses sample standard deviation. */
  sigmaMethod?: 'moving-range' | 'stddev';
  showLatestMarker?: boolean;       // default true
  showStateGlyph?: boolean;         // default true
  variationState?: VariationState;  // external classification (preferred for MVP)
  autoClassify?: boolean;           // when true and variationState absent, compute simple 3-sigma classification
  variationJudgement?: VariationJudgement; // optional additional semantic for aria
  direction?: 'higher' | 'lower';   // orientation for H/L if judgement implies
  assuranceState?: AssuranceState;  // optional small badge / future
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
