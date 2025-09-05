import { VariationState, VariationJudgement, MetricPolarity } from '../SPCIcons/SPCConstants';
import { AssuranceState } from '../SPCIcons/SPCIcon';
export interface SPCSparkPoint {
    x?: string | number | Date;
    value: number | null;
}
export type SparkSize = 'xs' | 'sm' | 'md';
export interface SPCSparkProps {
    data: SPCSparkPoint[];
    windowSize?: number;
    minPointsForSignals?: number;
    showMean?: boolean;
    showLimits?: boolean;
    showLimitBand?: boolean;
    /** Sigma estimation method for limits & classification. 'moving-range' (MRbar/1.128) aligns with XmR; 'stddev' uses sample standard deviation. */
    sigmaMethod?: 'moving-range' | 'stddev';
    showLatestMarker?: boolean;
    showStateGlyph?: boolean;
    variationState?: VariationState;
    autoClassify?: boolean;
    variationJudgement?: VariationJudgement;
    direction?: 'higher' | 'lower';
    assuranceState?: AssuranceState;
    polarity?: MetricPolarity;
    gradientWash?: boolean;
    size?: SparkSize;
    onClassification?: (info: SparkClassificationInfo) => void;
    suppressIsolatedPoint?: boolean;
    /** Maximum number of points to render (thinning for performance). Classification still uses full window. */
    maxPoints?: number;
    /** Thinning strategy when maxPoints set. 'stride' keeps uniform spacing; 'rdp' uses shape-preserving simplification. */
    thinningStrategy?: 'stride' | 'rdp';
    /** When true, individual point circles are coloured by their own signal (improvement / concern / common) instead of uniform series colour. */
    colorPointsBySignal?: boolean;
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
export type SparkRule = 'point-beyond-3sigma' | 'eight-point-run' | 'five-point-trend' | 'two-of-three-near-limit';
export interface SparkClassificationInfo {
    state: VariationState;
    firedRules: SparkRule[];
    mean: number | null;
    stdDev: number | null;
    side?: 'above' | 'below';
}
