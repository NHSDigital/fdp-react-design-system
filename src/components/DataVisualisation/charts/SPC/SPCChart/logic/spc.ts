// NHSE "Making Data Count" SPC Charts – TypeScript port of SQL v2.6
// Supports XmR, T, and G charts with special-cause rules and variation/assurance icons.

// Utility functions
import {
	isNumber,
	mean,
	movingRanges,
	mrMeanWithOptionalExclusion,
	xmrLimits,
	tChartLimits,
	gChartProbabilityLimits,
} from './spcUtils';

// Modularised logic components
import { computeAssuranceIcon } from './spcAssurance';
import { computeBaselineSuggestionsRaw } from './spcCandidates';

// Centralised constants/enums
import {
	ChartType,
	ImprovementDirection,
	VariationIcon,
	SpcRuleId,
	RULE_PRECEDENCE,
	RULE_RANK_BY_ID,
	RULE_LABEL,
	SpcRuleCategory,
	SpcRuleMetadataEntry,
	RULE_METADATA,
	RULES_IN_RANK_ORDER,
	Side,
	SpcRawRuleTag,
	RAW_TAG_TO_RULE_ID,
	AssuranceIcon,
	PrecedenceStrategy,
	ConflictPrecedenceMode,
	PrimeDirection,
	PruningMode,
	SpcRowAliasField,
	BaselineSuggestionReason,
} from './spcConstants';
// Re-export for public API compatibility
export { BaselineSuggestionReason } from './spcConstants';
// Phase 4 strict-mode toggle (default ON). Consumers can override via:
// - globalThis.__SPC_PHASE4_STRICT (boolean), or
// - process.env.SPC_PHASE4_STRICT ('1'|'true' -> true, '0'|'false' -> false).
// This is evaluated at call-time to allow tests to override per-spec.
function isPhase4Strict(): boolean {
	// Explicit global override takes precedence
	const g: any = (globalThis as any);
	if (typeof g.__SPC_PHASE4_STRICT !== 'undefined') return !!g.__SPC_PHASE4_STRICT;
	// Environment override if present
	if (typeof process !== 'undefined') {
		const v = (process as any)?.env?.SPC_PHASE4_STRICT;
		if (typeof v !== 'undefined') {
			const s = String(v).toLowerCase();
			if (s === '1' || s === 'true') return true;
			if (s === '0' || s === 'false') return false;
		}
	}
	// Default: strict ON in Phase 4
	return true;
}

/**
 * Chart type meanings (high‑level):
 *  XmR (Individuals & Moving Range):
 *    - Use for a continuous measurement per period (e.g. % compliance, rate, time, count when roughly normal).
 *    - Centre line = mean of individual values; sigma estimated from average moving range (MRbar).
 *    - Control limits = mean ± 2.66 * MRbar (3σ); 1σ/2σ bands are proportional fractions (1/3, 2/3 of 2.66).
 *
 *  T chart (Time‑between events):
 *    - Use when data are elapsed time between rare events (positive, skewed).
 *    - Applies power transform y = t^0.2777 to stabilise variance; runs an XmR on y; then back‑transforms limits.
 *    - Lower limit suppressed if back‑transform would fall ≤ 0 (time cannot be negative).
 *
 *  G chart (Count between events):
 *    - Use when data record the number of opportunities/units between rare events (geometric behaviour).
 *    - No moving range; limits derived directly from geometric distribution quantiles around the mean count.
 *    - Provides probability‑based 1σ/2σ/3σ style bands using inverse CDF (no MR / d2 constants involved).
 */
// Chart types supported by the SPC engine.
// Converted from string union to enum for stronger typing / refactor safety.
// Re-export for backwards compatibility (external imports of './spc' remain valid)
export {
	ChartType,
	ImprovementDirection,
	VariationIcon,
	SpcRuleId,
	RULE_PRECEDENCE,
	RULE_RANK_BY_ID,
	RULE_LABEL,
	SpcRuleCategory,
	type SpcRuleMetadataEntry,
	RULE_METADATA,
	RULES_IN_RANK_ORDER,
	Side,
	SpcRawRuleTag,
	RAW_TAG_TO_RULE_ID,
	AssuranceIcon,
	PrecedenceStrategy,
	ConflictPrecedenceMode,
	PrimeDirection,
	PruningMode,
	SpcRowAliasField,
};

export interface SpcInputRow {
	x: string | number | Date; // period label or date
	value?: number | null; // numeric value (null/undefined treated as missing)
	ghost?: boolean; // if true, do not include in calc (still output)
	baseline?: boolean; // if true, start a new partition from this row
	target?: number; // optional target value (for assurance icon)
}

export interface SpcSettings {
	excludeMovingRangeOutliers?: boolean;
	specialCauseShiftPoints?: number;
	specialCauseTrendPoints?: number;
	enableFourOfFiveRule?: boolean;
	precedenceStrategy?: PrecedenceStrategy;
	/** @deprecated Use emergingGraceEnabled */
	emergingDirectionGrace?: boolean;
	// REMOVED: trendSideGatingEnabled (now unconditional side qualification)
	emergingGraceEnabled?: boolean; // V2 canonical
	// REMOVED: trendFavourableSideOnly (behaviour now always on)
	minimumPoints?: number;
	minimumPointsWarning?: boolean;
	minimumPointsPartition?: number;
	maximumPointsPartition?: number | null;
	maximumPoints?: number | null;
	pointConflictWarning?: boolean;
	variationIconConflictWarning?: boolean;
	nullValueWarning?: boolean;
	targetSuppressedWarning?: boolean;
	ghostOnRareEventWarning?: boolean;
	partitionSizeWarnings?: boolean;
	baselineSpecialCauseWarning?: boolean;
	maximumPointsWarnings?: boolean;
	assuranceCapabilityMode?: boolean;
	transitionBufferPoints?: number;
	/** @deprecated Use collapseWeakerClusterRules */
	collapseClusterRules?: boolean;
	collapseWeakerClusterRules?: boolean; // V2 canonical
	enableFifteenInInnerThirdRule?: boolean;
	baselineSuggest?: boolean;
	baselineSuggestMinDeltaSigma?: number;
	baselineSuggestStabilityPoints?: number;
	baselineSuggestMinGap?: number;
	baselineSuggestScoreThreshold?: number;
	autoRecalculateAfterShift?: boolean;
	autoRecalculateShiftLength?: number;
	autoRecalculateDeltaSigma?: number;
	conflictPrecedenceMode?: ConflictPrecedenceMode;
	// Minimal nested mirrors to support grouped access in engine code
	rules?: {
		collapseWeakerClusterRules?: boolean;
		shiftPoints?: number;
		trendPoints?: number;
		fourOfFiveEnabled?: boolean;
		fifteenInnerThirdEnabled?: boolean;
	};
	grace?: {
		emergingEnabled?: boolean;
	};
}

// Phase 2 forward-looking settings shape with renamed flags (non-breaking adapter provided)
// New names (V2): emergingGraceEnabled, trendFavourableSideOnly, collapseWeakerClusterRules
// Phase 3: Grouped settings API (backward-compatible via normaliser)
export interface SpcSettingsV2 {
	// Rule configuration
	rules?: {
		shiftPoints?: number; // maps to specialCauseShiftPoints
		trendPoints?: number; // maps to specialCauseTrendPoints
		fourOfFiveEnabled?: boolean; // maps to enableFourOfFiveRule
		fifteenInnerThirdEnabled?: boolean; // maps to enableFifteenInInnerThirdRule
		collapseWeakerClusterRules?: boolean; // maps to collapseWeakerClusterRules
	};
	// Precedence and conflict resolution
	precedence?: {
		strategy?: PrecedenceStrategy; // maps to precedenceStrategy
		conflictMode?: ConflictPrecedenceMode; // maps to conflictPrecedenceMode
	};
	// Data/partition thresholds
	thresholds?: {
		minimumPoints?: number; // maps to minimumPoints
		minimumPointsPartition?: number; // maps to minimumPointsPartition
		maximumPointsPartition?: number | null; // maps to maximumPointsPartition
		maximumPoints?: number | null; // maps to maximumPoints
		transitionBufferPoints?: number; // maps to transitionBufferPoints
	};
	// Warnings toggles
	warnings?: {
		minimumPointsWarning?: boolean;
		pointConflictWarning?: boolean;
		variationIconConflictWarning?: boolean;
		nullValueWarning?: boolean;
		targetSuppressedWarning?: boolean;
		ghostOnRareEventWarning?: boolean;
		partitionSizeWarnings?: boolean;
		baselineSpecialCauseWarning?: boolean;
		maximumPointsWarnings?: boolean;
	};
	// Rare event / MR exclusions
	rareEvent?: {
		excludeMovingRangeOutliers?: boolean;
	};
	// Capability/assurance
	capability?: {
		assuranceCapabilityMode?: boolean;
	};
	// Grace window semantics
	grace?: {
		emergingEnabled?: boolean; // maps to emergingGraceEnabled / emergingDirectionGrace
	};
	// Baseline suggestions configuration
	baselineSuggest?: {
		enabled?: boolean; // maps to baselineSuggest
		minDeltaSigma?: number; // maps to baselineSuggestMinDeltaSigma
		stabilityPoints?: number; // maps to baselineSuggestStabilityPoints
		minGap?: number; // maps to baselineSuggestMinGap
		scoreThreshold?: number; // maps to baselineSuggestScoreThreshold
	};
	// Auto-recalculation after sustained shift
	autoRecalc?: {
		enabled?: boolean; // maps to autoRecalculateAfterShift
		shiftLength?: number; // maps to autoRecalculateShiftLength
		deltaSigma?: number; // maps to autoRecalculateDeltaSigma
	};
	// Forward-compat: accept flat V2 rename fields as well (soft-deprecated but supported)
	emergingGraceEnabled?: boolean; // same as grace.emergingEnabled
	collapseWeakerClusterRules?: boolean; // same as rules.collapseWeakerClusterRules
}

type AnySpcSettings = SpcSettings | SpcSettingsV2;

export interface BuildSpcArgs {
	chartType: ChartType;
	metricImprovement: ImprovementDirection;
	data: SpcInputRow[];
	settings?: AnySpcSettings; // Accept legacy or V2 shape
}

export interface SpcRow {
	rowId: number;
	x: string | number | Date;
	value: number | null;
	ghost: boolean;
	partitionId: number;
	pointRank: number;
	mean: number | null;
	mr: number | null;
	mrMean: number | null;
	mrUcl: number | null;
	upperProcessLimit: number | null;
	lowerProcessLimit: number | null;
	upperTwoSigma: number | null;
	upperOneSigma: number | null;
	lowerOneSigma: number | null;
	lowerTwoSigma: number | null;
	/** Target value for this row (if provided in input). Exposed for rendering reference lines. */
	target: number | null;
	/** Fifteen consecutive points within inner third (±1σ) with at least one on each side of mean */
	specialCauseFifteenInnerThird: boolean;
	/**
	 * Unified directional aliases (Up/Down) for all special cause rule flags.
	 * These replace the legacy Above/Below/High/Low/Increasing/Decreasing fields (removed in vNEXT breaking change).
	 */
	// Single point
	specialCauseSinglePointUp: boolean;
	specialCauseSinglePointDown: boolean;
	// Two of three beyond 2σ
	specialCauseTwoOfThreeUp: boolean;
	specialCauseTwoOfThreeDown: boolean;
	// Four of five beyond 1σ (optional rule)
	specialCauseFourOfFiveUp: boolean;
	specialCauseFourOfFiveDown: boolean;
	// Shift (run) rule
	specialCauseShiftUp: boolean;
	specialCauseShiftDown: boolean;
	// Trend (monotonic) rule
	specialCauseTrendUp: boolean;
	specialCauseTrendDown: boolean;
	variationIcon: VariationIcon; // never null; use VariationIcon.Suppressed when suppressed
	assuranceIcon: AssuranceIcon; // 'none' when no target / not assessed
	// Parity/helper columns
	upperBaseline: number | null;
	lowerBaseline: number | null;
	movingRangeHighPointValue: number | null;
	ghostValue: number | null;
	ghostFlag: boolean;
	specialCauseImprovementValue: number | null;
	specialCauseConcernValue: number | null;
	specialCauseNeitherValue: number | null;
	/** Raw rule-based special cause tags (orthodox flags; snake_case) for audit trail */
	ruleTags?: SpcRawRuleTag[];
	// Conflict resolution metadata (populated only when conflictPrecedenceMode active & a conflict was resolved)
	conflictPrimeDirection?: PrimeDirection;
	conflictResolvedByRuleId?: SpcRuleId; // winning rule id (ranked)
	conflictResolvedRank?: number; // 1..4
	conflictResolved?: boolean; // true if pruning occurred
	/** @deprecated Use improvementValueBeforePruning (Phase 2 rename) */
	originalSpecialCauseImprovementValue?: number | null; // legacy alias
	/** @deprecated Use concernValueBeforePruning (Phase 2 rename) */
	originalSpecialCauseConcernValue?: number | null; // legacy alias
	/** @deprecated Use improvementValueBeforePruning (added Phase 2). Getter provided for forward compatibility. */
	improvementValueBeforePruning?: number | null;
	/** @deprecated Use concernValueBeforePruning (added Phase 2). Getter provided for forward compatibility. */
	concernValueBeforePruning?: number | null;
	/** Pruning mode applied (if any). Undefined when no pruning semantics applied. */
	pruningMode?: PruningMode;
}

// Warning metadata enums for stronger typing and refactor safety
export enum SpcWarningSeverity {
	Info = "info",
	Warning = "warning",
	Error = "error",
}
export enum SpcWarningCategory {
	Config = "config",
	Data = "data",
	Limits = "limits",
	SpecialCause = "special_cause",
	Baseline = "baseline",
	Logic = "logic",
	Target = "target",
	Ghost = "ghost",
	Partition = "partition",
}

// Stable catalog of warning codes (public surface)
export enum SpcWarningCode {
	UnknownChartType = 'unknown_chart_type',
	InsufficientPointsGlobal = 'insufficient_points_global',
	VariationConflictRow = 'variation_conflict_row',
	NullValuesExcluded = 'null_values_excluded',
	TargetIgnoredRareEvent = 'target_ignored_rare_event',
	GhostRowsRareEvent = 'ghost_rows_rare_event',
	InsufficientPointsPartition = 'insufficient_points_partition',
	BaselineWithSpecialCause = 'baseline_with_special_cause',
	PartitionCapApplied = 'partition_cap_applied',
	GlobalCapApplied = 'global_cap_applied',
}

export interface SpcWarning {
	code: SpcWarningCode; // stable identifier
	message: string; // human-readable text
	severity?: SpcWarningSeverity;
	category?: SpcWarningCategory;
	context?: Record<string, unknown>; // optional structured data (counts, ids, etc.)
}
export interface SpcResult {
	rows: SpcRow[];
	warnings: SpcWarning[];
	/** Optional heuristic suggestions for candidate new baseline starting points (phase changes) */
	suggestedBaselines?: Array<{
		index: number; // 0-based index into rows
		reason: BaselineSuggestionReason;
		score: number; // relative confidence 0-100
		deltaMean: number; // absolute difference in means (new - old)
		oldMean: number;
		newMean: number;
		window: [number, number]; // stability window used
	}>;
}

// ------------------------- Directional summary helper -------------------------
export function getDirectionalSignalSummary(row: SpcRow) {
	const upRules: SpcRuleId[] = [];
	const downRules: SpcRuleId[] = [];
	if (row.specialCauseSinglePointUp) upRules.push(SpcRuleId.SinglePoint);
	if (row.specialCauseSinglePointDown) downRules.push(SpcRuleId.SinglePoint);
	if (row.specialCauseTwoOfThreeUp) upRules.push(SpcRuleId.TwoSigma);
	if (row.specialCauseTwoOfThreeDown) downRules.push(SpcRuleId.TwoSigma);
	if (row.specialCauseShiftUp) upRules.push(SpcRuleId.Shift);
	if (row.specialCauseShiftDown) downRules.push(SpcRuleId.Shift);
	if (row.specialCauseTrendUp) upRules.push(SpcRuleId.Trend);
	if (row.specialCauseTrendDown) downRules.push(SpcRuleId.Trend);
	const upMax = upRules.reduce((m, id) => Math.max(m, RULE_METADATA[id].rank), 0);
	const downMax = downRules.reduce((m, id) => Math.max(m, RULE_METADATA[id].rank), 0);
	return { upRules, downRules, upMax, downMax, hasUp: upRules.length>0, hasDown: downRules.length>0 };
}

// BaselineSuggestionReason moved to spcConstants.ts (single source of truth)

// ------------------------- Utility functions -------------------------

// (moved isNumber, sum, mean to spcUtils.ts)

type CanonicalRow = {
	rowId: number;
	x: string | number | Date;
	value: number | null;
	ghost: boolean;
	baseline: boolean;
	target: number | null;
};

/** Split into partitions based on row.baseline === true (inclusive of flag row). */
function partitionRows(data: CanonicalRow[]): CanonicalRow[][] {
	const partitions: CanonicalRow[][] = [];
	let current: CanonicalRow[] = [];
	for (const row of data) {
		if (row.baseline && current.length) {
			partitions.push(current);
			current = [];
		}
		current.push(row);
	}
	if (current.length) partitions.push(current);
	return partitions;
}

/** Inject synthetic baseline flags into canonical rows where a sustained shift justifies a recalculation. */
function applyAutoRecalculationBaselines(
	data: CanonicalRow[],
	settings: SpcSettings,
	metricImprovement: ImprovementDirection
) {
	const shiftN = settings.autoRecalculateShiftLength || settings.specialCauseShiftPoints || 6;
	if (data.length < shiftN * 2) return; // need at least two windows
	// We perform a lightweight provisional scan using rolling windows to detect a sustained mean change.
	// 1. Build array of numeric (non-null) values with indices.
	const numeric: { idx: number; value: number }[] = data
		.map((r, i) => ({ idx: i, value: r.value! }))
		.filter(o => isNumber(o.value));
	if (numeric.length < shiftN * 2) return;
	// 2. For each candidate start, test shiftN consecutive points all above (or below) the global mean of previous window.
	// We'll adapt to improvement direction so we only trigger on favourable sustained changes.
	const favourUp = metricImprovement === ImprovementDirection.Up || metricImprovement === ImprovementDirection.Neither;
	const favourDown = metricImprovement === ImprovementDirection.Down;
	// Rolling statistics helper
	function windowMean(from: number, toExclusive: number) {
		const slice = numeric.slice(from, toExclusive).map(o => o.value);
		return slice.length ? mean(slice as number[]) : NaN;
	}
	// Estimate global sigma proxy using overall MR-like approach for threshold scaling.
	let sigma: number | null = null;
	if (numeric.length > 1) {
		const diffs: number[] = [];
		for (let i=1;i<numeric.length;i++) diffs.push(Math.abs(numeric[i].value - numeric[i-1].value));
		const mrBar = mean(diffs as number[]);
		if (isNumber(mrBar) && mrBar > 0) sigma = mrBar * (2.66/3); // reverse of 3σ = 2.66 * MRbar
	}
	if (!sigma || sigma <= 0) return;
	const deltaThreshold = settings.autoRecalculateDeltaSigma ?? 0.5;
	// Scan for first sustained favourable window after an initial stable window.
	for (let start = shiftN; start <= numeric.length - shiftN; start++) {
		const preStart = start - shiftN;
		const preMean = windowMean(preStart, start);
		const postMean = windowMean(start, start + shiftN);
		if (!isNumber(preMean) || !isNumber(postMean)) continue;
		const delta = postMean - preMean;
		const deltaSigma = delta / sigma;
		const favourable = favourUp ? deltaSigma >= deltaThreshold : favourDown ? -deltaSigma >= deltaThreshold : Math.abs(deltaSigma) >= deltaThreshold;
		if (!favourable) continue;
		// Verify sustained run directionality: all post window points above preMean (up) or below (down).
		const postVals = numeric.slice(start, start + shiftN).map(o => o.value);
		const directional = favourUp ? postVals.every(v => v > preMean) : favourDown ? postVals.every(v => v < preMean) : postVals.every(v => favourUp ? v > preMean : v < preMean);
		if (!directional) continue;
		// Insert synthetic baseline flag at first index of post window if not already baseline.
		const baselineIdx = numeric[start].idx;
		if (!data[baselineIdx].baseline) {
			data[baselineIdx].baseline = true;
		}
		return; // single insertion for now
	}
}

/** Compute moving range array relative to previous NON-GHOST, within a partition */
// (moved movingRanges to spcUtils.ts)

/** Iterative single-pass outlier exclusion for MR using UCL = 3.267 * MRbar (1 iteration) */
// (moved mrMeanWithOptionalExclusion to spcUtils.ts)

/** Build sigma/limit lines given mean and MRbar for XmR */
// (moved xmrLimits to spcUtils.ts)

// (Removed unused helper functions: countAbove, countBelow, isTrend, isRunOnOneSide)

// ------------------------- Rare event chart helpers (T & G) -------------------------
// T chart (time-between events): y = t^0.2777; XmR on y; back-transform t = y^3.6; no LCL if lower transform ≤ 0.
// (moved T chart transform helpers to spcUtils.ts)

// Normal CDF quantile probabilities for 1σ, 2σ, 3σ used by probability-based G chart limits
// (moved SIGMA_PROBS to spcUtils.ts)

// Inverse CDF for geometric ("number until first success") as a real value (no ceiling)
// (moved geomInvCdfReal to spcUtils.ts)

// Probability-based control lines for a G chart given mean g ("number between")
// (moved gChartProbabilityLimits to spcUtils.ts)

// Compute T chart limits on the original t-scale using XmR on transformed y = t^alpha
// (moved tChartLimits to spcUtils.ts)

// ------------------------- Core builder -------------------------

// Normalise user supplied settings (legacy + V2) into legacy internal field names for now.
export function normaliseSpcSettings(user?: AnySpcSettings): SpcSettings {
	if (!user) return {} as SpcSettings;
	const legacy = user as SpcSettings;
	const v2 = user as SpcSettingsV2;

	// Pull grouped sections (if present)
	const rules = v2.rules ?? {};
	const precedence = v2.precedence ?? {};
	const thresholds = v2.thresholds ?? {};
	const warnings = v2.warnings ?? {};
	const rareEvent = v2.rareEvent ?? {};
	const capability = v2.capability ?? {};
	const grace = v2.grace ?? {};
	const baselineSuggest = v2.baselineSuggest ?? {};
	const autoRecalc = v2.autoRecalc ?? {};

	// Resolve renamed flags and aliases
	const emergingGraceEnabled = (grace.emergingEnabled ?? v2.emergingGraceEnabled ?? legacy.emergingGraceEnabled ?? legacy.emergingDirectionGrace);
	const collapseWeakerClusterRules = (rules.collapseWeakerClusterRules ?? v2.collapseWeakerClusterRules ?? legacy.collapseWeakerClusterRules ?? legacy.collapseClusterRules);

	// Phase 4 strict mode: reject legacy/deprecated fields
	if (isPhase4Strict()) {
		if (legacy.emergingDirectionGrace !== undefined) {
			throw new Error('[spc][phase4] emergingDirectionGrace is no longer supported. Use settings.grace.emergingEnabled.');
		}
		if (legacy.collapseClusterRules !== undefined) {
			throw new Error('[spc][phase4] collapseClusterRules is no longer supported. Use settings.rules.collapseWeakerClusterRules.');
		}
	}

	// First-use deprecation warnings for legacy names
	const globalAny = globalThis as any;
	if (!isPhase4Strict() && legacy.emergingDirectionGrace !== undefined && v2.emergingGraceEnabled === undefined && grace.emergingEnabled === undefined && !globalAny.__spc_warn_emergingDirectionGrace) {
		globalAny.__spc_warn_emergingDirectionGrace = true;
		console.warn('[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled');
	}
	if (!isPhase4Strict() && legacy.collapseClusterRules !== undefined && rules.collapseWeakerClusterRules === undefined && v2.collapseWeakerClusterRules === undefined && !globalAny.__spc_warn_collapseClusterRules) {
		globalAny.__spc_warn_collapseClusterRules = true;
		console.warn('[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules');
	}

	// Helper to remove undefined keys so defaults in buildSpc are not overridden by undefined
	const pruneUndefined = <T extends Record<string, any>>(obj: T): Partial<T> => {
		const out: Record<string, any> = {};
		for (const k of Object.keys(obj)) {
			const v = (obj as any)[k];
			if (v !== undefined) out[k] = v;
		}
		return out as Partial<T>;
	};

	// Flatten into legacy engine shape (engine remains flat for now) – keep only defined values
	const flattened: SpcSettings = pruneUndefined<SpcSettings>({
		// Rare event / MR
		excludeMovingRangeOutliers: rareEvent.excludeMovingRangeOutliers ?? legacy.excludeMovingRangeOutliers,
		// Rules
		specialCauseShiftPoints: rules.shiftPoints ?? legacy.specialCauseShiftPoints,
		specialCauseTrendPoints: rules.trendPoints ?? legacy.specialCauseTrendPoints,
		enableFourOfFiveRule: rules.fourOfFiveEnabled ?? legacy.enableFourOfFiveRule,
		enableFifteenInInnerThirdRule: rules.fifteenInnerThirdEnabled ?? legacy.enableFifteenInInnerThirdRule,
		collapseWeakerClusterRules: collapseWeakerClusterRules ?? legacy.collapseWeakerClusterRules,
		// Precedence
		precedenceStrategy: precedence.strategy ?? legacy.precedenceStrategy,
		conflictPrecedenceMode: precedence.conflictMode ?? legacy.conflictPrecedenceMode,
		// Thresholds
		minimumPoints: thresholds.minimumPoints ?? legacy.minimumPoints,
		minimumPointsPartition: thresholds.minimumPointsPartition ?? legacy.minimumPointsPartition,
		maximumPointsPartition: (thresholds.maximumPointsPartition ?? legacy.maximumPointsPartition) as any,
		maximumPoints: (thresholds.maximumPoints ?? legacy.maximumPoints) as any,
		transitionBufferPoints: thresholds.transitionBufferPoints ?? legacy.transitionBufferPoints,
		// Warnings
		minimumPointsWarning: warnings.minimumPointsWarning ?? legacy.minimumPointsWarning,
		pointConflictWarning: warnings.pointConflictWarning ?? legacy.pointConflictWarning,
		variationIconConflictWarning: warnings.variationIconConflictWarning ?? legacy.variationIconConflictWarning,
		nullValueWarning: warnings.nullValueWarning ?? legacy.nullValueWarning,
		targetSuppressedWarning: warnings.targetSuppressedWarning ?? legacy.targetSuppressedWarning,
		ghostOnRareEventWarning: warnings.ghostOnRareEventWarning ?? legacy.ghostOnRareEventWarning,
		partitionSizeWarnings: warnings.partitionSizeWarnings ?? legacy.partitionSizeWarnings,
		baselineSpecialCauseWarning: warnings.baselineSpecialCauseWarning ?? legacy.baselineSpecialCauseWarning,
		maximumPointsWarnings: warnings.maximumPointsWarnings ?? legacy.maximumPointsWarnings,
		// Capability
		assuranceCapabilityMode: capability.assuranceCapabilityMode ?? legacy.assuranceCapabilityMode,
		// Grace
		emergingGraceEnabled,
		emergingDirectionGrace: emergingGraceEnabled,
		// Baseline suggestions
		baselineSuggest: baselineSuggest.enabled ?? legacy.baselineSuggest,
		baselineSuggestMinDeltaSigma: baselineSuggest.minDeltaSigma ?? legacy.baselineSuggestMinDeltaSigma,
		baselineSuggestStabilityPoints: baselineSuggest.stabilityPoints ?? legacy.baselineSuggestStabilityPoints,
		baselineSuggestMinGap: baselineSuggest.minGap ?? legacy.baselineSuggestMinGap,
		baselineSuggestScoreThreshold: baselineSuggest.scoreThreshold ?? legacy.baselineSuggestScoreThreshold,
		// Auto recalculation
		autoRecalculateAfterShift: autoRecalc.enabled ?? legacy.autoRecalculateAfterShift,
		autoRecalculateShiftLength: autoRecalc.shiftLength ?? legacy.autoRecalculateShiftLength,
		autoRecalculateDeltaSigma: autoRecalc.deltaSigma ?? legacy.autoRecalculateDeltaSigma,
	} as SpcSettings);

	// Also spread any remaining legacy flat fields provided directly to override defaults (keep only defined)
	const merged: SpcSettings = { ...flattened, ...pruneUndefined<SpcSettings>(legacy) } as SpcSettings;
	// ensure canonical pairs remain consistent when explicitly provided
	if (emergingGraceEnabled !== undefined) {
		(merged as any).emergingGraceEnabled = emergingGraceEnabled;
		(merged as any).grace = { ...(merged as any).grace, emergingEnabled: emergingGraceEnabled };
	}
	if ((flattened as any).collapseWeakerClusterRules !== undefined) {
		const v = (flattened as any).collapseWeakerClusterRules;
		(merged as any).collapseWeakerClusterRules = v;
		(merged as any).rules = { ...(merged as any).rules, collapseWeakerClusterRules: v };
	}
	// Final prune to remove any lingering undefined keys
	return pruneUndefined<SpcSettings>(merged) as SpcSettings;
}

export function buildSpc(args: BuildSpcArgs): SpcResult {
	const {
		chartType,
		metricImprovement,
		data,
		settings: rawUserSettings = {},
	} = args;

	// Convert any V2 setting names to legacy internal names until engine migrates fully.
	const userSettings = normaliseSpcSettings(rawUserSettings);

	const settings = {
		excludeMovingRangeOutliers: false,
		specialCauseShiftPoints: 6,
		specialCauseTrendPoints: 6,
		enableFourOfFiveRule: false,
		minimumPoints: 13,
		minimumPointsWarning: false,
		minimumPointsPartition: 12,
		maximumPointsPartition: null,
		maximumPoints: null,
		pointConflictWarning: false,
		variationIconConflictWarning: true,
		nullValueWarning: true,
		targetSuppressedWarning: true,
		ghostOnRareEventWarning: true,
		partitionSizeWarnings: true,
		baselineSpecialCauseWarning: true,
		maximumPointsWarnings: true,
		assuranceCapabilityMode: true,
		transitionBufferPoints: 2,
		collapseWeakerClusterRules: true,
		baselineSuggest: false,
		baselineSuggestMinDeltaSigma: 0.5,
		baselineSuggestStabilityPoints: 5,
		baselineSuggestMinGap: 12,
		baselineSuggestScoreThreshold: 50,
		precedenceStrategy: PrecedenceStrategy.DirectionalFirst,
		emergingDirectionGrace: false,
		rules: {},
		grace: {},
		// REMOVED: trendSideGatingEnabled default (always on)
		autoRecalculateAfterShift: false,
		autoRecalculateShiftLength: undefined,
		autoRecalculateDeltaSigma: 0.5,
		...userSettings,
	} as Required<SpcSettings>;

	if (!Array.isArray(data)) throw new Error("data must be an array of rows");
	const canonical: CanonicalRow[] = data.map((d, i) => ({
		rowId: i + 1,
		x: d.x,
		value: isNumber(d.value) ? d.value : null,
		ghost: !!d.ghost,
		baseline: !!d.baseline,
		target: isNumber(d.target) ? d.target : null,
	}));

	// Optionally augment canonical rows with auto recalculation baseline flags (synthetic) BEFORE partitioning
	if (userSettings?.autoRecalculateAfterShift) {
		try {
			applyAutoRecalculationBaselines(canonical, userSettings, metricImprovement);
		} catch {
			// Fail silently – feature is non-critical
		}
	}
	const partitions = partitionRows(canonical);
	const output: SpcRow[] = [];
	const warnings: SpcWarning[] = [];

	// Global counts for minimum point checks
	const nonGhostGlobalCount = canonical.filter(
		(r) => !r.ghost && isNumber(r.value)
	).length;
	const globalEnough = nonGhostGlobalCount >= (settings.minimumPoints ?? 13);

	// Iterate partitions
	let partitionId = 0;
	const partitionNonGhostCounts: Record<number, number> = {};
	for (const part of partitions) {
		partitionId++;

		const values = part.map((r) => r.value);
		const ghosts = part.map((r) => r.ghost);

		// Initialize moving range variables
		let mr: (number | null)[] = new Array(values.length).fill(null);
		let centerLine: number = NaN;
		let mrMean: number = NaN;
		let mrUcl: number = NaN;

		// Control limits structure
		// Initialized to nulls so can be used directly when limits not computable
		// (e.g. insufficient data, or G chart with no MR concept)
		let lim: {
			upperProcessLimit: number | null;
			lowerProcessLimit: number | null;
			upperTwoSigma: number | null;
			lowerTwoSigma: number | null;
			upperOneSigma: number | null;
			lowerOneSigma: number | null;
		} = {
			upperProcessLimit: null,
			lowerProcessLimit: null,
			upperTwoSigma: null,
			lowerTwoSigma: null,
			upperOneSigma: null,
			lowerOneSigma: null,
		};

		// Chart-type-specific calculations
		// XmR: moving ranges, mean, limits
		// T: transformed XmR, back-transform limits
		// G: probability-based limits (no MR)

		if (chartType === "XmR") {
			mr = movingRanges(values, ghosts);
			const nonGhostVals = values.filter(
				(v, i) => !ghosts[i] && isNumber(v)
			) as number[];
			centerLine = nonGhostVals.length ? mean(nonGhostVals) : NaN;
			const tmp = mrMeanWithOptionalExclusion(
				mr,
				!!settings.excludeMovingRangeOutliers
			);
			mrMean = tmp.mrMean;
			mrUcl = tmp.mrUcl;
			lim = xmrLimits(centerLine, mrMean);
		} else if (chartType === "T") {
			const tlim = tChartLimits(
				values,
				ghosts,
				!!settings.excludeMovingRangeOutliers
			);
			mr = tlim.mr;
			mrMean = tlim.mrMean ?? NaN;
			mrUcl = tlim.mrUcl ?? NaN;
			centerLine = tlim.center ?? NaN;
			lim = {
				upperProcessLimit: tlim.upperProcessLimit,
				lowerProcessLimit: tlim.lowerProcessLimit,
				upperTwoSigma: tlim.upperTwoSigma,
				lowerTwoSigma: tlim.lowerTwoSigma,
				upperOneSigma: tlim.upperOneSigma,
				lowerOneSigma: tlim.lowerOneSigma,
			};
		} else if (chartType === "G") {
			const nonGhostVals = values.filter(
				(v, i) => !ghosts[i] && isNumber(v)
			) as number[];
			const gMean = nonGhostVals.length ? mean(nonGhostVals) : NaN;
			const g = gChartProbabilityLimits(gMean);
			centerLine = g.cl ?? NaN;
			lim = {
				upperProcessLimit: g.ucl,
				lowerProcessLimit: g.lcl,
				upperTwoSigma: g.twoHigh,
				lowerTwoSigma: g.twoLow,
				upperOneSigma: g.oneHigh,
				lowerOneSigma: g.oneLow,
			};
			// No MR concept on probability-based G
			mr = new Array(values.length).fill(null);
			mrMean = NaN;
			mrUcl = NaN;
		} else {
			warnings.push({
				code: SpcWarningCode.UnknownChartType,
				category: SpcWarningCategory.Config,
				severity: SpcWarningSeverity.Error,
				message: `Unknown ChartType '${chartType}' – supported: XmR, T, G.`,
				context: { chartType },
			});
		}

		// Build rows with lines & limits (or nulls if insufficient data)
		// Suppress limits until global minimum points reached
		// (per NHS SPC guidance to avoid misleading signals)
		const withLines: SpcRow[] = part.map((r, i) => {
			const pointRank =
				!r.ghost && isNumber(r.value)
					? values.slice(0, i + 1).filter((v, j) => !ghosts[j] && isNumber(v))
							.length
					: 0;

			const limitsAllowed = globalEnough; // suppress until global minimum reached
			const limits = limitsAllowed
				? lim
				: {
						upperProcessLimit: null,
						lowerProcessLimit: null,
						upperTwoSigma: null,
						lowerTwoSigma: null,
						upperOneSigma: null,
						lowerOneSigma: null,
					};

			const row: SpcRow = {
				rowId: r.rowId,
				x: r.x,
				value: isNumber(r.value) ? r.value : null,
				ghost: r.ghost,
				partitionId,
				pointRank,
				mean: limitsAllowed && isNumber(centerLine) ? centerLine : null,
				mr: isNumber(mr[i]) ? mr[i] : null,
				mrMean: limitsAllowed && isNumber(mrMean) ? mrMean : null,
				mrUcl: limitsAllowed && isNumber(mrUcl) ? mrUcl : null,
				upperProcessLimit: isNumber(limits.upperProcessLimit)
					? limits.upperProcessLimit
					: null,
				lowerProcessLimit: isNumber(limits.lowerProcessLimit)
					? limits.lowerProcessLimit
					: null,
				upperTwoSigma: isNumber(limits.upperTwoSigma)
					? limits.upperTwoSigma
					: null,
				lowerTwoSigma: isNumber(limits.lowerTwoSigma)
					? limits.lowerTwoSigma
					: null,
				upperOneSigma: isNumber(limits.upperOneSigma)
					? limits.upperOneSigma
					: null,
				lowerOneSigma: isNumber(limits.lowerOneSigma)
					? limits.lowerOneSigma
					: null,
				target: isNumber(r.target) ? r.target : null,
				specialCauseFifteenInnerThird: false,
				// Unified directional alias initialisers (kept in sync post-detection)
				specialCauseSinglePointUp: false,
				specialCauseSinglePointDown: false,
				specialCauseTwoOfThreeUp: false,
				specialCauseTwoOfThreeDown: false,
				specialCauseFourOfFiveUp: false,
				specialCauseFourOfFiveDown: false,
				specialCauseShiftUp: false,
				specialCauseShiftDown: false,
				specialCauseTrendUp: false,
				specialCauseTrendDown: false,
				variationIcon: VariationIcon.Suppressed,
				assuranceIcon: AssuranceIcon.None,
				upperBaseline:
					limitsAllowed && isNumber(centerLine) ? centerLine : null,
				lowerBaseline:
					limitsAllowed && isNumber(centerLine) ? centerLine : null,
				movingRangeHighPointValue:
					limitsAllowed && isNumber(mrUcl) ? mrUcl : null,
				ghostValue: r.ghost && isNumber(r.value) ? r.value : null,
				ghostFlag: !!r.ghost,
				specialCauseImprovementValue: null,
				specialCauseConcernValue: null,
				specialCauseNeitherValue: null,
				ruleTags: [],
			};
			return row;
		});

		partitionNonGhostCounts[partitionId] = withLines.filter(
			(r) => !r.ghost && isNumber(r.value)
		).length;

		// Special cause detection (within partition)
		const shiftN = settings.specialCauseShiftPoints ?? 6;
		const trendN = settings.specialCauseTrendPoints ?? 6;

		// First pass: build rows & detect single-point 3-sigma only; collect non-ghost numeric indices for second-pass pattern detection
		const nonGhostIndices: number[] = [];
		const nonGhostValues: number[] = [];
		for (let i = 0; i < withLines.length; i++) {
			const row = withLines[i];
			const v = row.value;
			if (!row.ghost && isNumber(v)) {
				nonGhostIndices.push(i);
				nonGhostValues.push(v);
			}

			const hasLimits =
				isNumber(row.mean) &&
				isNumber(row.upperProcessLimit) &&
				isNumber(row.lowerProcessLimit);
			if (!hasLimits || row.ghost || !isNumber(v)) {
				output.push(row);
				continue;
			}

			// Single point beyond 3-sigma (populate directional flags directly)
			row.specialCauseSinglePointUp = isNumber(row.upperProcessLimit)
				? v > row.upperProcessLimit
				: false;
			row.specialCauseSinglePointDown = isNumber(row.lowerProcessLimit)
				? v < row.lowerProcessLimit
				: false;

			// Multi-point rules deferred to second pass

			// Trend of N strictly increasing/decreasing
			// (deferred to second pass)

			output.push(row);
		}

		// Second pass: apply multi-point pattern rules with complete backfill
		if (nonGhostIndices.length) {
			// Helper accessors
			const getRow = (idx: number) => withLines[idx];
			// Shift detection (runs above/below mean)
			let runHigh: number[] = [];
			let runLow: number[] = [];
			for (const idxLocal of nonGhostIndices) {
				const r = getRow(idxLocal);
				if (!isNumber(r.mean) || !isNumber(r.value)) { runHigh = []; runLow = []; continue; }
				if (r.value > r.mean) { runHigh.push(idxLocal); runLow = []; } else if (r.value < r.mean) { runLow.push(idxLocal); runHigh = []; } else { runHigh = []; runLow = []; }
				if (runHigh.length >= shiftN) {
					for (const j of runHigh) { const rr = getRow(j); rr.specialCauseShiftUp = true; }
				}
				if (runLow.length >= shiftN) {
					for (const j of runLow) { const rr = getRow(j); rr.specialCauseShiftDown = true; }
				}
			}
			// Two-of-three 2-sigma (high/low): flag ONLY the points beyond ±2σ within a qualifying same-side triple
			// NOTE: Points beyond 3σ (process limits) are excluded from counting for this rule (they are handled by the single-point rule).
			for (let w = 0; w <= nonGhostIndices.length - 3; w++) {
				const windowIdx = nonGhostIndices.slice(w, w + 3);
				const rows3 = windowIdx.map(getRow);
				if (!rows3.every(r => isNumber(r.mean) && isNumber(r.value))) continue;
				const meanVal = rows3[0].mean!; // stable within partition
				const allHighSide = rows3.every(r => r.value! > meanVal);
				const allLowSide = rows3.every(r => r.value! < meanVal);
				if (!allHighSide && !allLowSide) continue;
				const u2 = rows3[0].upperTwoSigma ?? Infinity;
				const l2 = rows3[0].lowerTwoSigma ?? -Infinity;
				const u3 = rows3[0].upperProcessLimit ?? Infinity;
				const l3 = rows3[0].lowerProcessLimit ?? -Infinity;
				// Exclude >3σ (single-point) from candidate sets so they do not contribute to the 2-of-3 count
				const highExceed = rows3.filter(r => r.value! > u2 && r.value! <= u3);
				const lowExceed = rows3.filter(r => r.value! < l2 && r.value! >= l3);
				if (allHighSide && highExceed.length >= 2) {
					for (const r of highExceed) { r.specialCauseTwoOfThreeUp = true; }
				}
				if (allLowSide && lowExceed.length >= 2) {
					for (const r of lowExceed) { r.specialCauseTwoOfThreeDown = true; }
				}
			}
			// Four-of-five 1-sigma (if enabled): flag ONLY the points beyond ±1σ within qualifying window
			if (settings.enableFourOfFiveRule) {
				for (let w = 0; w <= nonGhostIndices.length - 5; w++) {
					const windowIdx = nonGhostIndices.slice(w, w + 5);
					const rows5 = windowIdx.map(getRow);
					if (!rows5.every(r => isNumber(r.mean) && isNumber(r.value))) continue;
					const meanVal = rows5[0].mean!;
					if (!rows5.every(r => r.value! > meanVal) && !rows5.every(r => r.value! < meanVal)) continue;
					const u1 = rows5[0].upperOneSigma ?? Infinity;
					const l1 = rows5[0].lowerOneSigma ?? -Infinity;
					const highExceed = rows5.filter(r => r.value! > u1);
					const lowExceed = rows5.filter(r => r.value! < l1);
					if (rows5.every(r => r.value! > meanVal) && highExceed.length >= 4) {
						for (const r of highExceed) { r.specialCauseFourOfFiveUp = true; }
					}
					if (rows5.every(r => r.value! < meanVal) && lowExceed.length >= 4) {
						for (const r of lowExceed) { r.specialCauseFourOfFiveDown = true; }
					}
				}
			}
			// Trend increasing/decreasing
			for (let w = 0; w <= nonGhostIndices.length - trendN; w++) {
				const windowIdx = nonGhostIndices.slice(w, w + trendN);
				const rowsN = windowIdx.map(getRow);
				if (!rowsN.every(r=> isNumber(r.value))) continue;
				let inc = true; let dec = true;
				for (let k=1;k<rowsN.length;k++) {
					if (!(rowsN[k].value! > rowsN[k-1].value!)) inc = false;
					if (!(rowsN[k].value! < rowsN[k-1].value!)) dec = false;
					if (!inc && !dec) break;
				}
				if (inc) for (const j of windowIdx) { const rr = getRow(j); rr.specialCauseTrendUp = true; }
				if (dec) for (const j of windowIdx) { const rr = getRow(j); rr.specialCauseTrendDown = true; }
			}

			// Fifteen consecutive points within inner third (optional)
			if (settings.enableFifteenInInnerThirdRule) {
				let innerRun: number[] = [];
				for (const idxLocal of nonGhostIndices) {
					const r = getRow(idxLocal);
					if (!isNumber(r.value) || !isNumber(r.mean) || !isNumber(r.upperOneSigma) || !isNumber(r.lowerOneSigma)) { innerRun = []; continue; }
					const inBand = r.value < r.upperOneSigma! && r.value > r.lowerOneSigma!;
					if (!inBand) { innerRun = []; continue; }
					innerRun.push(idxLocal);
					if (innerRun.length >= 15) {
						const rowsRun = innerRun.map(getRow);
						const anyAbove = rowsRun.some(rr => rr.value! > rr.mean!);
						const anyBelow = rowsRun.some(rr => rr.value! < rr.mean!);
						if (anyAbove && anyBelow) {
							for (const j of innerRun) getRow(j).specialCauseFifteenInnerThird = true;
						}
					}
				}
			}

			// (No pruning needed under selective flagging semantics)
		}

		// (Optional) enforce maximumPointsPartition by nulling limits after cap
		if (
			settings.maximumPointsPartition &&
			Number.isFinite(settings.maximumPointsPartition)
		) {
			const cap = settings.maximumPointsPartition as number;
			let seen = 0;
			for (const row of output.filter((r) => r.partitionId === partitionId)) {
				if (!row.ghost && isNumber(row.value)) seen++;
				if (seen > cap) {
					row.mean = row.upperProcessLimit = row.lowerProcessLimit = null;
					row.upperTwoSigma =
						row.lowerTwoSigma =
						row.upperOneSigma =
						row.lowerOneSigma =
							null;
				}
			}
		}

		// (Removed) legacy → alias sync loop: aliases now set inline during detection
	}

	// Variation icon per row based on improvement direction
	// --- Provenance: capture original rule-based flags BEFORE any heuristic mutation occurs ---
	// We populate ruleTags exactly once, immediately prior to heuristics that can mutate the specialCause* booleans.
	// If already populated (defensive), skip.
	for (const r of output) {
		if (r.ruleTags && r.ruleTags.length) continue; // already captured
		const tags: string[] = [];
		if (r.specialCauseShiftUp) tags.push(SpcRawRuleTag.ShiftHigh);
		if (r.specialCauseShiftDown) tags.push(SpcRawRuleTag.ShiftLow);
		if (r.specialCauseTrendUp) tags.push(SpcRawRuleTag.TrendIncreasing);
		if (r.specialCauseTrendDown) tags.push(SpcRawRuleTag.TrendDecreasing);
		if (r.specialCauseSinglePointUp) tags.push(SpcRawRuleTag.SinglePointAbove);
		if (r.specialCauseSinglePointDown) tags.push(SpcRawRuleTag.SinglePointBelow);
		if (r.specialCauseTwoOfThreeUp) tags.push(SpcRawRuleTag.TwoOfThreeAbove);
		if (r.specialCauseTwoOfThreeDown) tags.push(SpcRawRuleTag.TwoOfThreeBelow);
		if (r.specialCauseFourOfFiveUp) tags.push(SpcRawRuleTag.FourOfFiveAbove);
		if (r.specialCauseFourOfFiveDown) tags.push(SpcRawRuleTag.FourOfFiveBelow);
		if (r.specialCauseFifteenInnerThird) tags.push(SpcRawRuleTag.FifteenInnerThird);
		// Only persist if any tags present for compactness
		if (tags.length) r.ruleTags = tags as SpcRawRuleTag[];
	}

	// Heuristic tagging helper removed (no remaining heuristics mutate classification)

	// Retroactive neutralisation heuristic removed

	// Comparative baseline emulation block removed

	for (let idx = 0; idx < output.length; idx++) {
		const row = output[idx];
		// Alias getter scaffolding (Phase 1 optional): expose forward-compatible names
		// improvementValueBeforePruning / concernValueBeforePruning mapping to legacy originals if defined.
		// Non-enumerable to discourage new usage until Phase 2 formalises rename.
		if (!(Object.prototype.hasOwnProperty.call(row, SpcRowAliasField.ImprovementValueBeforePruning))) {
			Object.defineProperty(row, SpcRowAliasField.ImprovementValueBeforePruning, {
				get() { return (row as any).originalSpecialCauseImprovementValue ?? null; },
				enumerable: false,
				configurable: true
			});
		}
		if (!(Object.prototype.hasOwnProperty.call(row, SpcRowAliasField.ConcernValueBeforePruning))) {
			Object.defineProperty(row, SpcRowAliasField.ConcernValueBeforePruning, {
				get() { return (row as any).originalSpecialCauseConcernValue ?? null; },
				enumerable: false,
				configurable: true
			});
		}
		if (row.ghost || !isNumber(row.value) || row.mean === null) {
			row.variationIcon = VariationIcon.Suppressed;
			continue;
		}
		// Directional aggregation now sourced from alias Up/Down flags to unify internal logic.
		// Trend side-gating behaviour preserved exactly (only contribute if on favourable side when enabled).
		const onHighSide = row.value! > row.mean!;
		const onLowSide  = row.value! < row.mean!;
		// Optional cluster rule collapse (retain stronger 4-of-5 over 2-of-3 when both same side)
		// Ensure both legacy and alias flags are cleared to preserve parity tests.
		if (settings.rules?.collapseWeakerClusterRules) {
			if (row.specialCauseTwoOfThreeUp && row.specialCauseFourOfFiveUp) { row.specialCauseTwoOfThreeUp = false; }
			if (row.specialCauseTwoOfThreeDown && row.specialCauseFourOfFiveDown) { row.specialCauseTwoOfThreeDown = false; }
		}

		// Side-gated trend contribution to icon classification
		// NOTE: trendSideGatingEnabled setting is deprecated and has no effect; trend is always side-gated for icon classification.
		// Unified (Phase 2) semantics: trend signals only contribute to high/low side when on the corresponding side of the mean.
		// Side-gating flags (trendFavourableSideOnly / trendSideGatingEnabled) are now effectively always-on for icon classification.
		const trendUpQualified = row.specialCauseTrendUp && onHighSide;
		const trendDownQualified = row.specialCauseTrendDown && onLowSide;
		const highSignals = (row.specialCauseSinglePointUp || row.specialCauseTwoOfThreeUp || (settings.enableFourOfFiveRule && row.specialCauseFourOfFiveUp) || row.specialCauseShiftUp || trendUpQualified);
		const lowSignals = (row.specialCauseSinglePointDown || row.specialCauseTwoOfThreeDown || (settings.enableFourOfFiveRule && row.specialCauseFourOfFiveDown) || row.specialCauseShiftDown || trendDownQualified);

		// Emerging favourable detection (N-1 monotonic run in favourable direction before trend flag fires)
		let emergingFavourable = false;
		if (settings.precedenceStrategy === PrecedenceStrategy.DirectionalFirst && (settings.grace?.emergingEnabled || settings.emergingGraceEnabled || settings.emergingDirectionGrace)) {
			const trendN = settings.specialCauseTrendPoints || 6;
			if (trendN > 1 && !(row.specialCauseTrendUp || row.specialCauseTrendDown)) {
				const needed = trendN - 1;
				// Collect last needed non-ghost numeric rows including current row
				const seq: SpcRow[] = [];
				for (let back = idx; back >= 0 && seq.length < needed; back--) {
					const rPrev = output[back];
					if (!rPrev.ghost && isNumber(rPrev.value) && rPrev.mean !== null) seq.unshift(rPrev);
				}
				if (seq.length === needed) {
					let monotonic = true;
					for (let k = 1; k < seq.length && monotonic; k++) {
						if (metricImprovement === ImprovementDirection.Up) {
							if (!(seq[k].value! > seq[k-1].value!)) monotonic = false;
						} else if (metricImprovement === ImprovementDirection.Down) {
							if (!(seq[k].value! < seq[k-1].value!)) monotonic = false;
						} else {
							monotonic = false; // neutral metrics do not use emerging grace
						}
					}
					emergingFavourable = monotonic;
				}
			}
		}

		if (settings.precedenceStrategy === PrecedenceStrategy.DirectionalFirst) {
			// Parity adjustment: if a favourable trend exists but was side-gated (value still on the opposite side of mean)
			// we still want to recognise its emerging directional weight when resolving simultaneous opposing signals.
			// The SQL wrapper counts raw trend flags irrespective of side gating, leading to earlier Improvement framing
			// in mixed shift+emerging trend sequences. We mirror that by treating a suppressed favourable trend as a
			// (low-rank) favourable presence for precedence purposes only.
			// Side gating: earlier implementation tracked suppressedTrendFavourable for precedence; no longer needed for icon logic.
			const favourableRaw = metricImprovement === ImprovementDirection.Up ? highSignals : metricImprovement === ImprovementDirection.Down ? lowSignals : false;
			// Regression fix: suppressed (side‑gated) favourable trend rows should NOT directly yield an Improvement icon
			// until the series crosses the mean (tests expect gating). We retain suppressedTrendFavourable only for potential
			// future precedence heuristics but exclude it from icon classification.
			const favourable = favourableRaw; // intentionally excludes suppressedTrendFavourable from direct icon promotion
			const unfavourable = metricImprovement === ImprovementDirection.Up ? lowSignals : metricImprovement === ImprovementDirection.Down ? highSignals : false;
			if (favourable && !unfavourable) row.variationIcon = VariationIcon.Improvement;
			else if (unfavourable && !favourable) row.variationIcon = emergingFavourable ? VariationIcon.Neither : VariationIcon.Concern;
			else if (favourable && unfavourable) row.variationIcon = (emergingFavourable || row.specialCauseTrendUp || row.specialCauseTrendDown) ? VariationIcon.Improvement : VariationIcon.Neither;
			else row.variationIcon = VariationIcon.Neither;
		} else {
			if (metricImprovement === ImprovementDirection.Up) row.variationIcon = highSignals ? VariationIcon.Improvement : lowSignals ? VariationIcon.Concern : VariationIcon.Neither;
			else if (metricImprovement === ImprovementDirection.Down) row.variationIcon = lowSignals ? VariationIcon.Improvement : highSignals ? VariationIcon.Concern : VariationIcon.Neither;
			else row.variationIcon = VariationIcon.Neither;
		}

		// Removed suppression of isolated favourable single 3σ heuristic

		const anySignal = highSignals || lowSignals;
		row.specialCauseImprovementValue =
			anySignal && row.variationIcon === VariationIcon.Improvement
				? row.value
				: null;
		row.specialCauseConcernValue =
			anySignal && row.variationIcon === VariationIcon.Concern
				? row.value
				: null;
		row.specialCauseNeitherValue =
			anySignal && row.variationIcon === VariationIcon.Neither
				? row.value
				: null;

		// --- Optional SQL-style conflict resolution (applies AFTER icon decision so we can inspect simultaneous signals) ---
		if (
			settings.conflictPrecedenceMode === ConflictPrecedenceMode.SqlRankingV26a &&
			row.specialCauseImprovementValue !== null &&
			row.specialCauseConcernValue !== null
		) {
			// Collect active rule ids per side (only those that contribute to current high/low signals)
			// We purposefully do not attempt to reconstruct historical intermediate heuristics; rely on raw specialCause* booleans.
			const active: { id: SpcRuleId; rank: number; side: Side }[] = [];
			// Rank mapping: single_point=1, two_sigma=2, shift=3, trend=4 (four_of_five not part of NHS primary ranking)
			if (row.specialCauseSinglePointUp) active.push({ id: SpcRuleId.SinglePoint, rank: 1, side: Side.Up });
			if (row.specialCauseSinglePointDown) active.push({ id: SpcRuleId.SinglePoint, rank: 1, side: Side.Down });
			if (row.specialCauseTwoOfThreeUp) active.push({ id: SpcRuleId.TwoSigma, rank: 2, side: Side.Up });
			if (row.specialCauseTwoOfThreeDown) active.push({ id: SpcRuleId.TwoSigma, rank: 2, side: Side.Down });
			if (row.specialCauseShiftUp) active.push({ id: SpcRuleId.Shift, rank: 3, side: Side.Up });
			if (row.specialCauseShiftDown) active.push({ id: SpcRuleId.Shift, rank: 3, side: Side.Down });
			if (row.specialCauseTrendUp) active.push({ id: SpcRuleId.Trend, rank: 4, side: Side.Up });
			if (row.specialCauseTrendDown) active.push({ id: SpcRuleId.Trend, rank: 4, side: Side.Down });
			// Compute side maxima
			const upMax = active.filter(a => a.side === Side.Up).reduce((m,a)=> Math.max(m,a.rank), 0);
			const downMax = active.filter(a => a.side === Side.Down).reduce((m,a)=> Math.max(m,a.rank), 0);
			let prime: PrimeDirection;
			if (upMax > downMax) prime = PrimeDirection.Upwards; else if (downMax > upMax) prime = PrimeDirection.Downwards; else prime = PrimeDirection.Same;
			const originalImprovement = row.specialCauseImprovementValue;
			const originalConcern = row.specialCauseConcernValue;
			// Decide pruning per SQL logic using metricImprovement direction (outer scope)
			if (prime === PrimeDirection.Upwards) {
				if (metricImprovement === ImprovementDirection.Up) {
					row.specialCauseConcernValue = null;
				} else if (metricImprovement === ImprovementDirection.Down) {
					row.specialCauseImprovementValue = null;
				}
			} else if (prime === PrimeDirection.Downwards) {
				if (metricImprovement === ImprovementDirection.Up) {
					row.specialCauseImprovementValue = null;
				} else if (metricImprovement === ImprovementDirection.Down) {
					row.specialCauseConcernValue = null;
				}
			} else { // Same
				// Use metricConflictRule concept: replicate by favouring the existing variationIcon side if decisive, else prefer Improvement if present
				// (We do not have explicit metricConflictRule setting in TS port; infer from current variationIcon bias)
				if (row.variationIcon === VariationIcon.Improvement) {
					row.specialCauseConcernValue = null;
				} else if (row.variationIcon === VariationIcon.Concern) {
					row.specialCauseImprovementValue = null;
				} else {
					// Neutral icon -> default to preserving improvement side for positive framing
					row.specialCauseConcernValue = null;
				}
			}
			// Update variationIcon if both sides were not reduced to Neither earlier
			if (row.specialCauseImprovementValue !== null && row.specialCauseConcernValue === null) {
				row.variationIcon = VariationIcon.Improvement;
			} else if (row.specialCauseConcernValue !== null && row.specialCauseImprovementValue === null) {
				row.variationIcon = VariationIcon.Concern;
			} else if (row.specialCauseImprovementValue === null && row.specialCauseConcernValue === null) {
				// Both suppressed – fallback to neither to avoid stale icon
				row.variationIcon = VariationIcon.Neither;
			}
			// Persist metadata
			const winningSide: Side | undefined = row.specialCauseImprovementValue !== null ? Side.Up
				: row.specialCauseConcernValue !== null ? Side.Down
				: undefined;
			const winningRank = winningSide === Side.Up ? upMax : winningSide === Side.Down ? downMax : Math.max(upMax, downMax);
			const winner = active.find(a => a.rank === winningRank && (!winningSide || a.side === winningSide));
			row.conflictPrimeDirection = prime;
			row.conflictResolved = true;
			row.conflictResolvedRank = winningRank || undefined;
			if (winner) row.conflictResolvedByRuleId = winner.id;
			row.pruningMode = PruningMode.Conflict;
			row.originalSpecialCauseImprovementValue = originalImprovement;
			row.originalSpecialCauseConcernValue = originalConcern;
		}

		// Assurance icon via helper (capability vs fallback) – preserves existing semantics
		{
			const inputRow = canonical[row.rowId - 1];
			const result = computeAssuranceIcon({
				metricImprovement,
				capabilityMode: settings.assuranceCapabilityMode,
				value: row.value,
				mean: row.mean,
				upperProcessLimit: row.upperProcessLimit,
				lowerProcessLimit: row.lowerProcessLimit,
				target: isNumber(inputRow?.target) ? inputRow.target! : null,
			});
			row.assuranceIcon = result;
		}
	}

	// Step 5-like warnings
	if ((settings.minimumPointsWarning ?? false) && !globalEnough) {
		const available = canonical.filter(
			(r) => !r.ghost && isNumber(r.value)
		).length;
		warnings.push({
			code: SpcWarningCode.InsufficientPointsGlobal,
			category: SpcWarningCategory.Data,
			severity: SpcWarningSeverity.Warning,
			message: `Only ${available} non-ghost points available; minimum required is ${settings.minimumPoints}. Limits and icons suppressed.`,
			context: { available, minimumRequired: settings.minimumPoints },
		});
	}

	// Variation icon conflict warnings (simultaneous high/low signals)
	// NOTE: does not consider pruning mode; flags any row with both high and low special-cause signals.
	// This is a heuristic alert only; no automatic mutation of icons or values.
	// Users should inspect such rows to ensure the icon reflects their interpretation of the data.
	// This is most relevant when using the DirectionalFirst precedence strategy which can yield mixed signals.
	// The SQL port does not currently have an equivalent warning.
	// We do not consider suppressedTrendFavourable here as it does not affect icon classification directly.
	// We do consider all other specialCause* flags as they directly contribute to icon classification.
	// We do not consider emergingFavourable here as it is a transient heuristic that does not reflect actual signals present.
	// Users should inspect the actual specialCause* flags to understand the nature of the conflict.
	// This warning is primarily intended to catch cases where both high and low shift/trend signals are present simultaneously,
	if (settings.variationIconConflictWarning) {
		for (const row of output) {
				if (row.variationIcon === VariationIcon.Improvement) {
					const highAndLow =
						(row.specialCauseSinglePointUp ||
							row.specialCauseTwoOfThreeUp ||
							(settings.enableFourOfFiveRule &&
								row.specialCauseFourOfFiveUp) ||
							row.specialCauseShiftUp ||
							row.specialCauseTrendUp) &&
						(row.specialCauseSinglePointDown ||
							row.specialCauseTwoOfThreeDown ||
							(settings.enableFourOfFiveRule &&
								row.specialCauseFourOfFiveDown) ||
							row.specialCauseShiftDown ||
							row.specialCauseTrendDown);
					if (highAndLow) {
						warnings.push({
							code: SpcWarningCode.VariationConflictRow,
							category: SpcWarningCategory.Logic,
							severity: SpcWarningSeverity.Warning,
							message: `Row ${row.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
							context: { rowId: row.rowId },
						});
					}
			}
		}
	}

	// Optional global cap on number of non-ghost points considered
	if (settings.maximumPoints && Number.isFinite(settings.maximumPoints)) {
		const cap = settings.maximumPoints as number;
		let seen = 0;
		for (const row of output) {
			if (!row.ghost && isNumber(row.value)) seen++;
			if (seen > cap) {
				row.mean = row.upperProcessLimit = row.lowerProcessLimit = null;
				row.upperTwoSigma =
					row.lowerTwoSigma =
					row.upperOneSigma =
					row.lowerOneSigma =
						null;
			}
		}
	}

	// Extended warning suite
	if (settings.nullValueWarning && (chartType === ChartType.XmR || chartType === ChartType.G)) {
		const nullCount = canonical.filter(
			(r) =>
				!r.ghost &&
				(r.value === null || r.value === undefined || !isNumber(r.value))
		).length;
		if (nullCount)
			warnings.push({
				code: SpcWarningCode.NullValuesExcluded,
				category: SpcWarningCategory.Data,
				severity: SpcWarningSeverity.Info,
				message: `${nullCount} null/missing value(s) excluded from calculations.`,
				context: { nullCount },
			});
	}
	if (
		settings.targetSuppressedWarning &&
		(chartType === ChartType.T || chartType === ChartType.G)
	) {
		const hasTarget = canonical.some((r) => isNumber(r.target));
		if (hasTarget)
			warnings.push({
				code: SpcWarningCode.TargetIgnoredRareEvent,
				category: SpcWarningCategory.Target,
				severity: SpcWarningSeverity.Info,
				message: `Targets provided are ignored for ${chartType} charts in this port.`,
				context: { chartType },
			});
	}
	if (
		settings.ghostOnRareEventWarning &&
		(chartType === ChartType.T || chartType === ChartType.G)
	) {
		const ghostCount = canonical.filter((r) => r.ghost).length;
		if (ghostCount)
			warnings.push({
				code: SpcWarningCode.GhostRowsRareEvent,
				category: SpcWarningCategory.Ghost,
				severity: SpcWarningSeverity.Info,
				message: `${ghostCount} ghost row(s) supplied for rare-event chart (${chartType}); verify intent.`,
				context: { chartType, ghostCount },
			});
	}
	if (settings.partitionSizeWarnings) {
		Object.entries(partitionNonGhostCounts).forEach(([pid, count]) => {
			if (count < settings.minimumPointsPartition)
				warnings.push({
					code: SpcWarningCode.InsufficientPointsPartition,
					category: SpcWarningCategory.Partition,
					severity: SpcWarningSeverity.Warning,
					message: `Partition ${pid} has only ${count} non-ghost point(s); below recommended ${settings.minimumPointsPartition}.`,
					context: {
						partitionId: Number(pid),
						count,
						minimum: settings.minimumPointsPartition,
					},
				});
		});
	}
	if (settings.baselineSpecialCauseWarning) {
		const issueRows: number[] = [];
		output.forEach((r) => {
			const input = canonical[r.rowId - 1];
			if (input.baseline) {
				const anySignal =
					r.specialCauseSinglePointUp ||
					r.specialCauseSinglePointDown ||
					r.specialCauseTwoOfThreeUp ||
					r.specialCauseTwoOfThreeDown ||
					r.specialCauseFourOfFiveUp ||
					r.specialCauseFourOfFiveDown ||
					r.specialCauseShiftUp ||
					r.specialCauseShiftDown ||
					r.specialCauseTrendUp ||
					r.specialCauseTrendDown;
				if (anySignal) issueRows.push(r.rowId);
			}
		});
		if (issueRows.length)
			warnings.push({
				code: SpcWarningCode.BaselineWithSpecialCause,
				category: SpcWarningCategory.Baseline,
				severity: SpcWarningSeverity.Warning,
				message: `Baseline set with special-cause present at row(s): ${issueRows.join(", ")}.`,
				context: { rows: issueRows },
			});
	}
	if (settings.maximumPointsWarnings) {
		if (
			settings.maximumPointsPartition &&
			Number.isFinite(settings.maximumPointsPartition)
		)
			warnings.push({
				code: SpcWarningCode.PartitionCapApplied,
				category: SpcWarningCategory.Limits,
				severity: SpcWarningSeverity.Info,
				message: `Limits suppressed after ${settings.maximumPointsPartition} non-ghost points per partition.`,
				context: { cap: settings.maximumPointsPartition },
			});
		if (settings.maximumPoints && Number.isFinite(settings.maximumPoints))
			warnings.push({
				code: SpcWarningCode.GlobalCapApplied,
				category: SpcWarningCategory.Limits,
				severity: SpcWarningSeverity.Info,
				message: `Limits suppressed after global cap of ${settings.maximumPoints} non-ghost points.`,
				context: { cap: settings.maximumPoints },
			});
	}

	let suggestedBaselines: SpcResult['suggestedBaselines'];
	if (settings.baselineSuggest) {
		const W = settings.baselineSuggestStabilityPoints;
		const minGap = settings.baselineSuggestMinGap;
		const minDeltaSigma = settings.baselineSuggestMinDeltaSigma;
		const scoreThreshold = settings.baselineSuggestScoreThreshold;
		const shiftRunLength = settings.specialCauseShiftPoints ?? 6;
		const trendRunLength = settings.specialCauseTrendPoints ?? 6;
		const raw = computeBaselineSuggestionsRaw(
			output.map(r => ({
				value: r.value,
				partitionId: r.partitionId,
				variationIcon: r.variationIcon,
				mean: r.mean,
				upperProcessLimit: r.upperProcessLimit,
			})),
			{
				W, minGap, minDeltaSigma, scoreThreshold,
				shiftRunLength, trendRunLength,
				isShiftUpAt: (i) => !!output[i].specialCauseShiftUp,
				isShiftDownAt: (i) => !!output[i].specialCauseShiftDown,
				isTrendUpAt: (i) => !!output[i].specialCauseTrendUp,
				isTrendDownAt: (i) => !!output[i].specialCauseTrendDown,
				isSingleUpAt: (i) => !!output[i].specialCauseSinglePointUp,
				isSingleDownAt: (i) => !!output[i].specialCauseSinglePointDown,
			}
		);
		suggestedBaselines = raw.map(s => ({
			index: s.index,
			reason: s.reason,
			score: s.score,
			deltaMean: s.deltaMean,
			oldMean: s.oldMean,
			newMean: s.newMean,
			window: s.window,
		}));
	}
	return { rows: output, warnings, ...(suggestedBaselines ? { suggestedBaselines } : {}) };
}

export default { buildSpc };
