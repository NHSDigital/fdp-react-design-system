// Strongly-typed enums and core types mirroring SQL v2.6a naming.
// These names are chosen to be easy to cross-reference with the SQL script and docs.

// Supported chart types — v2.6a parity focuses on XmR; T and G can be added as needed
export enum ChartType {
	XmR = "XmR",
	T = "T",
	G = "G",
}

// How a metric is judged: higher is better, lower is better, or neither (neutral)
export enum ImprovementDirection {
	Up = "Up",
	Down = "Down",
	Neither = "Neither",
}

// Variation icon classification used for testing parity against SQL.
// SQL v2.6a emits icons only for the last point, but we retain a per-row value for convenience.
export enum VariationIcon {
	ImprovementHigh = "ImprovementHigh", // improvement on the high side (metric Up)
	ImprovementLow = "ImprovementLow", // improvement on the low side (metric Down)
	ConcernHigh = "ConcernHigh", // concern on the high side (metric Down)
	ConcernLow = "ConcernLow", // concern on the low side (metric Up)
	NeitherHigh = "NeitherHigh", // neutral with a high-side special cause for Neither metrics
	NeitherLow = "NeitherLow", // neutral with a low-side special cause for Neither metrics
	CommonCause = "CommonCause", // no special cause detected contributing to icon
}

// Assurance outcome relative to target and process limits (XmR only in this module)
export enum AssuranceIcon {
	None = "None",
	Pass = "Pass",
	HitOrMiss = "HitOrMiss",
	Fail = "Fail",
}

// Identifiers for rule types used in ranking and diagnostics
export enum SpcRuleId {
	SinglePoint = "SinglePoint",
	TwoSigma = "TwoSigma",
	Shift = "Shift",
	Trend = "Trend",
}

// Direction determined by comparing the strongest rule rank on each side
export enum PrimeDirection {
	Upwards = "Upwards",
	Downwards = "Downwards",
	Same = "Same",
}

// Convenience to describe which side of the mean a signal sits on
export enum Side {
	Up = "Up",
	Down = "Down",
}

// Policy to apply when PrimeDirection is Same and both candidates exist
export enum MetricConflictRule {
	Improvement = "Improvement",
	Concern = "Concern",
}

// The input row shape accepted by the engine
export interface SpcInputRowV2 {
	x: string | number | Date;
	value?: number | null;
	ghost?: boolean;
	baseline?: boolean;
	target?: number | null;
}

// Settings that influence rule thresholds and pruning behaviour
export interface SpcSettingsV26a {
	minimumPoints?: number; // global gating
	shiftPoints?: number; // default 6
	trendPoints?: number; // default 6
	excludeMovingRangeOutliers?: boolean; // default false
	metricConflictRule?: MetricConflictRule; // default Improvement
	// Parity-specific controls
	trendAcrossPartitions?: boolean; // default false (SQL v2.2+ enables; preset turns on)
	twoSigmaIncludeAboveThree?: boolean; // default false (preset turns on)
}

// The fully computed row emitted by the engine
export interface SpcRowV2 {
	rowId: number;
	x: string | number | Date;
	value: number | null;
	ghost: boolean;
	partitionId: number;
	pointRank: number;
	mean: number | null;
	upperProcessLimit: number | null;
	lowerProcessLimit: number | null;
	upperTwoSigma: number | null;
	lowerTwoSigma: number | null;
	upperOneSigma: number | null;
	lowerOneSigma: number | null;
	// Rule flags (directional)
	singlePointUp: boolean;
	singlePointDown: boolean;
	twoSigmaUp: boolean;
	twoSigmaDown: boolean;
	shiftUp: boolean;
	shiftDown: boolean;
	trendUp: boolean;
	trendDown: boolean;
	// Candidate values (post-pruning optional)
	specialCauseImprovementValue: number | null;
	specialCauseConcernValue: number | null;
	// Summary (per-row for testing convenience)
	variationIcon: VariationIcon;
	// Diagnostics
	primeDirection?: PrimeDirection;
	primeRank?: number;
	primeRuleId?: SpcRuleId;
}

// The arguments to build an SPC result
export interface BuildArgsV2 {
	chartType: ChartType;
	metricImprovement: ImprovementDirection;
	data: SpcInputRowV2[];
	settings?: SpcSettingsV26a;
}

// The build result containing all rows (warnings kept separate for clarity in this module)
export interface SpcResultV2 {
	rows: SpcRowV2[];
}
