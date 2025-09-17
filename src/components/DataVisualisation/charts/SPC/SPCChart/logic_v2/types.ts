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

// Strategy for resolving conflicts when both improvement and concern candidates exist
export enum ConflictStrategy {
	// Maintain SQL v2.6a parity: use PrimeDirection first, then MetricConflictRule only when PrimeDirection is Same
	SqlPrimeThenRule = "SqlPrimeThenRule",
	// Excel-style: always prefer the improvement side when a conflict exists (ignores PrimeDirection)
	PreferImprovement = "PreferImprovement",
	// Custom rule hierarchy: choose the side that contains the highest-precedence rule from a provided order
	RuleHierarchy = "RuleHierarchy",
}

// Strategy to select which mean-side trend segment(s) participate after splitting a run at crossings - integral for special cause conflict resolution
export enum TrendSegmentationStrategy {
	// Highlight all favourable-side segments
	FavourableSide = "FavourableSide",
	// Highlight the first favourable-side segment that occurs after a crossing; if no crossing occurred,
	// fall back to the longest favourable-side segment (by length)
	CrossingAfterFavourable = "CrossingAfterFavourable",
	// Highlight the favourable-side segment with the greatest absolute distance from mean
	ExtremeFavourable = "ExtremeFavourable",
	// Always pick the first favourable-side segment in the run (chronological)
	FirstFavourable = "FirstFavourable",
	// Pick the longest favourable-side segment by length (ties broken by earliest)
	LongestFavourable = "LongestFavourable",
	// Pick the last favourable-side segment in the run (chronological)
	LastFavourable = "LastFavourable",
	// Unfavourable variants — mirror the above but for the opposite mean side
	UnfavourableSide = "UnfavourableSide",
	// Highlight the first unfavourable-side segment that occurs after a crossing; if no crossing occurred, fall back to the longest unfavourable-side segment (by length)
	CrossingAfterUnfavourable = "CrossingAfterUnfavourable",
	// Highlight the unfavourable-side segment with the greatest absolute distance from mean
	ExtremeUnfavourable = "ExtremeUnfavourable",
	// Always pick the first unfavourable-side segment in the run (chronological)
	FirstUnfavourable = "FirstUnfavourable",
	// Pick the longest unfavourable-side segment by length (ties broken by earliest)
	LongestUnfavourable = "LongestUnfavourable",
	// Pick the last unfavourable-side segment in the run (chronological)
	LastUnfavourable = "LastUnfavourable",
}

// Controls when favourable trend segmentation should apply
export enum TrendSegmentationMode {
	// Do not apply segmentation at all
	Off = "Off",
	// Apply segmentation automatically only when a conflict is detected in the series/partition
	AutoWhenConflict = "AutoWhenConflict",
	// Always apply segmentation regardless of conflicts (legacy boolean=true behaviour)
	Always = "Always",
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
// Flat v2.6a settings (back-compat). Consider using the hierarchical form below for more semantic grouping.
export interface SpcSettingsV26a {
	minimumPoints?: number; // global gating
	shiftPoints?: number; // default 6
	trendPoints?: number; // default 6
	excludeMovingRangeOutliers?: boolean; // default false
	metricConflictRule?: MetricConflictRule; // default Improvement (tie-break when PrimeDirection is Same)
	// Parity-specific controls
	trendAcrossPartitions?: boolean; // default false (SQL v2.2+ enables; preset turns on)
	twoSigmaIncludeAboveThree?: boolean; // default false (preset turns on)
	// Optional early warning rule (excluded from conflict ranking)
	enableFourOfFiveRule?: boolean; // default false
	// Conflict handling: when both improvement and concern candidates
	// exist for a point (typically due to trend crossing the mean), prefer keeping
	// the improvement side regardless of PrimeDirection. Default false to retain
	// SQL v2.6a parity (PrimeDirection first, then MetricConflictRule only on ties).
	// NOTE: When this flag is true, the engine disables favourable trend segmentation
	// (both per-partition and across partitions). As a consequence, segmentation-dependent
	// controls like `preferTrendWhenConflict` and `trendDominatesHighlightedWindow` will have
	// no effect for those rows because no highlighted trend window is established.
	preferImprovementWhenConflict?: boolean;
	// Configurable conflict resolution strategy; default keeps SQL parity.
	conflictStrategy?: ConflictStrategy;
	// When true, if both improvement and concern candidates exist on a row and one of the trend flags
	// (trendUp/trendDown) is present after segmentation, prefer the trend side and prune the other.
	// This helps datasets where a trend segment should dominate over non-trend rules within its window.
	preferTrendWhenConflict?: boolean;
	// When using ConflictStrategy.RuleHierarchy, precedence order for rules from highest to lowest
	// Default mirrors SQL ranking: Trend > Shift > TwoSigma > SinglePoint
	ruleHierarchy?: SpcRuleId[];
	// When true, once the chart has at least `minimumPoints` non-ghosted values overall,
	// compute limits and evaluate rules across entire partitions (retrospective colouring of early rows).
	// When false (default), eligibility is per-point (prospective) using pointRank.
	chartLevelEligibility?: boolean;
	// When true (default), after trend flags are backfilled, split runs at mean crossings and
	// keep only favourable-side segments for contribution to classification, using a strategy.
	// This resolves Special-cause conflicts when a run crosses the mean by recoding the pre-crossing
	// segment to not participate in variation classification.
	// Deprecated: prefer trendSegmentationMode. If provided, `true` maps to `Always`, `false` maps to `Off`.
	trendFavourableSegmentation?: boolean;
	// When and how to apply favourable trend segmentation. Default behaviour is `AutoWhenConflict` to
	// minimise impact on datasets without conflicts while resolving cross-mean trend conflicts when present.
	trendSegmentationMode?: TrendSegmentationMode;
	// When true, within highlighted trend segments (post-segmentation), drop opposite-side non-trend
	// rule flags (singlePoint/twoSigma/shift) so the highlighted trend segment dominates classification
	// in its window. Default false to preserve SQL parity. Works independently of preferTrendWhenConflict
	// by manipulating rule flags earlier in the pipeline. Has no effect when
	// `preferImprovementWhenConflict` is true (segmentation disabled by engine gating).
	trendDominatesHighlightedWindow?: boolean;
	// Strategy for picking which favourable-side segment(s) to keep when a run crosses the mean.
	// Default: TrendSegmentationStrategy.CrossingAfterFavourable — first favourable segment after crossing, else longest favourable.
	trendSegmentationStrategy?: TrendSegmentationStrategy;
}

// Hierarchical settings (semantic grouping). Shipped alongside a normaliser for back-compat.
export interface SpcSettingsHierarchical {
	thresholds?: {
		/** Minimum non-ghost points required to enable limits/rules (per partition by default). */
		minimumPoints?: number;
		/** Shift run length (default 6). */
		shiftPoints?: number;
		/** Trend run length (default 6). */
		trendPoints?: number;
		/** Exclude MR outliers when estimating sigma (XmR). */
		excludeMovingRangeOutliers?: boolean;
	};
	eligibility?: {
		/** If true, once chart has >= minimumPoints overall, evaluate across partitions retroactively. */
		chartLevel?: boolean;
	};
	parity?: {
		/** Enable strict trend detection across partitions (SQL v2.2+). */
		trendAcrossPartitions?: boolean;
		/** Count >3σ points toward the two-of-three rule. */
		twoSigmaIncludeAboveThree?: boolean;
		/** Enable optional early-warning rule: 4-of-5 beyond 1σ (excluded from ranking). */
		enableFourOfFiveRule?: boolean;
	};
	conflict?: {
		/** Optimistically keep Improvement when both sides exist (disables trend segmentation). */
		preferImprovementWhenConflict?: boolean;
		/** Prefer the trend side when both sides exist and a trend flag is present after segmentation. */
		preferTrendWhenConflict?: boolean;
		/** Strategy for conflict resolution (default SQL parity). */
		strategy?: ConflictStrategy;
		/** Optional rule precedence order (used with strategy RuleHierarchy). */
		ruleHierarchy?: SpcRuleId[];
		/** Tie-break rule when PrimeDirection is Same. */
		metricRuleOnTie?: MetricConflictRule;
	};
	trend?: {
		segmentation?: {
			/** When to apply favourable-side segmentation. Prefer this over the legacy boolean. */
			mode?: TrendSegmentationMode;
			/** Legacy alias (true -> Always, false -> Off). */
			favourableSegmentation?: boolean;
			/** Strategy to pick which favourable segment(s) to keep. */
			strategy?: TrendSegmentationStrategy;
			/** If true, trend dominates inside its highlighted window. */
			dominatesHighlightedWindow?: boolean;
		};
	};
}

// Settings input accepted by public APIs: flat (legacy) or hierarchical (preferred)
export type SpcSettingsInput = SpcSettingsV26a | SpcSettingsHierarchical;

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
	fourOfFiveUp: boolean;
	fourOfFiveDown: boolean;
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
	/**
	 * Settings may be provided in flat (v2.6a) or hierarchical form. The engine normalises these.
	 */
	settings?: SpcSettingsInput;
}

// The build result containing all rows (warnings kept separate for clarity in this module)
export interface SpcResultV2 {
	rows: SpcRowV2[];
}
