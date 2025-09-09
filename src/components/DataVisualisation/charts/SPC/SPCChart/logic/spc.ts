// NHSE "Making Data Count" SPC Charts – TypeScript port of SQL v2.6
// Supports XmR, T, and G charts with special-cause rules and variation/assurance icons.

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
export enum ChartType {
	XmR = "XmR",
	T = "T",
	G = "G",
}
// Core enums (replacing prior string union types) to share with icon layer.
export enum ImprovementDirection {
	Up = "Up",
	Down = "Down",
	Neither = "Neither",
}
export enum VariationIcon {
	Improvement = "improvement",
	Concern = "concern",
	Neither = "neither",
	None = "none", // used where previously null (ghost/missing or suppressed)
}
export enum AssuranceIcon {
	Pass = "pass",
	Fail = "fail",
	None = "none",
}

// Precedence strategies for variation classification
export enum PrecedenceStrategy {
	Legacy = 'legacy',
	DirectionalFirst = 'directional_first',
}

export interface SpcInputRow {
	x: string | number | Date; // period label or date
	value?: number | null; // numeric value (null/undefined treated as missing)
	ghost?: boolean; // if true, do not include in calc (still output)
	baseline?: boolean; // if true, start a new partition from this row
	target?: number; // optional target value (for assurance icon)
}

export interface SpcSettings {
	excludeMovingRangeOutliers?: boolean; // default: false
	specialCauseShiftPoints?: number; // default: 6
	specialCauseTrendPoints?: number; // default: 6
	/** Enable the four-of-five beyond 1σ rule (not in headline public four rules). Default: false */
	enableFourOfFiveRule?: boolean; // default: false
	/** Precedence / classification strategy. legacy = original side aggregation; directional_first = favour directionally consistent emerging improvement & apply grace. Default: 'legacy' */
	precedenceStrategy?: PrecedenceStrategy; // default: PrecedenceStrategy.Legacy
	/** When using directional_first, enable early neutralisation (downgrade Concern -> Neither) for near-complete (N-1) favourable monotonic runs before the formal trend rule fires. */
	emergingDirectionGrace?: boolean; // default: false
	/** Trend side-gating: when true, only count trend flags (increasing/decreasing) towards signals on the favourable side of the mean. When false, trend flags contribute irrespective of side (restores pre-gating behaviour). Default: true */
	trendSideGatingEnabled?: boolean; // default: true
	minimumPoints?: number; // default: 13
	minimumPointsWarning?: boolean; // default: false
	minimumPointsPartition?: number; // default: 12
	maximumPointsPartition?: number | null; // default: null
	maximumPoints?: number | null; // default: null
	pointConflictWarning?: boolean; // default: false
	variationIconConflictWarning?: boolean; // default: true
	nullValueWarning?: boolean; // warn for null data (XmR, G)
	targetSuppressedWarning?: boolean; // warn when targets ignored for T/G
	ghostOnRareEventWarning?: boolean; // warn when ghost rows appear on T/G
	partitionSizeWarnings?: boolean; // warn when partition has too few points
	baselineSpecialCauseWarning?: boolean; // warn if baseline row shows special cause
	maximumPointsWarnings?: boolean; // warn when max points caps applied
	/** Capability mode: classify assurance by full process band vs target. Default: true */
	assuranceCapabilityMode?: boolean; // default: true
	/** Points difference buffer when resolving simultaneous opposing sustained indications */
	transitionBufferPoints?: number; // default 2
	/** Collapse lower-severity cluster rules (2-of-3 vs 4-of-5) keeping only strongest */
	collapseClusterRules?: boolean; // default true
	/** Enable detection of stability: fifteen consecutive points within inner one-third band (|value-mean| < 1σ) with mixture (not all on one side). Default: false */
	enableFifteenInInnerThirdRule?: boolean; // default false
	/** Enable heuristic baseline (phase) change suggestions */
	baselineSuggest?: boolean; // default false
	/** Minimum change in mean (in sigma units) between old & new stable windows */
	baselineSuggestMinDeltaSigma?: number; // default 0.5
	/** Points required in stability window after candidate change */
	baselineSuggestStabilityPoints?: number; // default 5
	/** Minimum non-ghost points since previous accepted (or initial) baseline */
	baselineSuggestMinGap?: number; // default 12
	/** Minimum score threshold (0-100) for emitting suggestion */
	baselineSuggestScoreThreshold?: number; // default 50
	// Removed heuristic options: suppressIsolatedFavourablePoint, precedenceStrategy, emergingDirectionGrace,
	// retroactiveOppositeShiftNeutralisation, retroactiveShiftDeltaSigmaThreshold for orthodoxy.
	/** Option C: Comparative baseline emulation. When true, a later favourable sustained shift can retrospectively label earlier stable points as concern relative to new level (or invert behaviour). */
	// Removed comparative baseline emulation heuristics (comparativeBaselineEmulation and related flags) for statistical orthodoxy
	// Removed: comparativeEmulationForceTailFavourable & comparativeEmulationInvertTailConcernPoints (deprecated)
	/** When true, automatically insert a recalculation (new partition) after a confirmed sustained shift so centre line & limits step without needing explicit baselines array. */
	autoRecalculateAfterShift?: boolean; // default false
	/** Minimum sustained shift length required to trigger auto recalculation (defaults to specialCauseShiftPoints). */
	autoRecalculateShiftLength?: number; // optional
	/** Require the post-shift window mean to differ from pre-shift mean by at least this many sigma to trigger auto recalculation. Default 0.5 */
	autoRecalculateDeltaSigma?: number; // default 0.5
}

export interface BuildSpcArgs {
	chartType: ChartType;
	metricImprovement: ImprovementDirection;
	data: SpcInputRow[];
	settings?: SpcSettings;
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
	specialCauseSinglePointAbove: boolean;
	specialCauseSinglePointBelow: boolean;
	specialCauseTwoOfThreeAbove: boolean;
	specialCauseTwoOfThreeBelow: boolean;
	specialCauseFourOfFiveAbove: boolean;
	specialCauseFourOfFiveBelow: boolean;
	specialCauseShiftHigh: boolean;
	specialCauseShiftLow: boolean;
	specialCauseTrendIncreasing: boolean;
	specialCauseTrendDecreasing: boolean;
	/** Fifteen consecutive points within inner third (±1σ) with at least one on each side of mean */
	specialCauseFifteenInnerThird: boolean;
	variationIcon: VariationIcon; // never null; use VariationIcon.None when suppressed
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
	ruleTags?: string[]; // Raw rule-based special cause tags (e.g. 'shift_high','trend_dec','single_above'). No heuristic relabelling.
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

// Baseline suggestion trigger reason ordering (higher severity first for tie-break logic)
export enum BaselineSuggestionReason {
	Shift = 'shift',
	Trend = 'trend',
	Point = 'point',
}

// ------------------------- Utility functions -------------------------

const isNumber = (v: unknown): v is number => typeof v === "number" && Number.isFinite(v);
const sum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);
const mean = (arr: number[]): number => arr.length ? sum(arr) / arr.length : NaN;

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
function movingRanges(
	values: (number | null)[],
	ghosts: boolean[]
): (number | null)[] {
	const mr: (number | null)[] = new Array(values.length).fill(null);
	let prevIdx: number | null = null;
	for (let i = 0; i < values.length; i++) {
		const vi = values[i];
		if (!ghosts[i] && isNumber(vi)) {
			if (prevIdx !== null) {
				const pv = values[prevIdx];
				mr[i] = isNumber(pv) ? Math.abs(vi - pv) : null;
			}
			prevIdx = i;
		}
	}
	return mr;
}

/** Iterative single-pass outlier exclusion for MR using UCL = 3.267 * MRbar (1 iteration) */
function mrMeanWithOptionalExclusion(
	mr: (number | null)[],
	excludeOutliers: boolean
): { mrMean: number; mrUcl: number } {
	const pool = mr.filter((v): v is number => isNumber(v));
	if (!pool.length) return { mrMean: NaN, mrUcl: NaN };
	let mrMeanVal = mean(pool);
	let mrUclVal = 3.267 * mrMeanVal;
	if (excludeOutliers) {
		const trimmed = pool.filter((v) => v <= mrUclVal);
		if (trimmed.length && trimmed.length !== pool.length) {
			mrMeanVal = mean(trimmed);
			mrUclVal = 3.267 * mrMeanVal;
		}
	}
	return { mrMean: mrMeanVal, mrUcl: mrUclVal };
}

/** Build sigma/limit lines given mean and MRbar for XmR */
function xmrLimits(
	centerMean: number,
	mrMeanVal: number
): {
	upperProcessLimit: number | null;
	lowerProcessLimit: number | null;
	upperTwoSigma: number | null;
	lowerTwoSigma: number | null;
	upperOneSigma: number | null;
	lowerOneSigma: number | null;
} {
	if (!isNumber(centerMean) || !isNumber(mrMeanVal))
		return {
			upperProcessLimit: null,
			lowerProcessLimit: null,
			upperTwoSigma: null,
			lowerTwoSigma: null,
			upperOneSigma: null,
			lowerOneSigma: null,
		};
	// XmR constants (derived from d2 for n=2). 3-sigma: 2.66*MRbar; 2-sigma: (2/3)*2.66; 1-sigma: (1/3)*2.66
	const k3 = 2.66;
	const k2 = (2 / 3) * k3;
	const k1 = (1 / 3) * k3;
	return {
		upperProcessLimit: centerMean + k3 * mrMeanVal,
		lowerProcessLimit: centerMean - k3 * mrMeanVal,
		upperTwoSigma: centerMean + k2 * mrMeanVal,
		lowerTwoSigma: centerMean - k2 * mrMeanVal,
		upperOneSigma: centerMean + k1 * mrMeanVal,
		lowerOneSigma: centerMean - k1 * mrMeanVal,
	};
}

// (Removed unused helper functions: countAbove, countBelow, isTrend, isRunOnOneSide)

// ------------------------- Rare event chart helpers (T & G) -------------------------
// T chart (time-between events): y = t^0.2777; XmR on y; back-transform t = y^3.6; no LCL if lower transform ≤ 0.
const T_ALPHA = 0.2777;
const T_INV_ALPHA = 3.6;
const toTTransformed = (t: number | null): number | null => isNumber(t) && t >= 0 ? Math.pow(t, T_ALPHA) : null;
const fromTTransformed = (y: number | null): number | null => isNumber(y) && y >= 0 ? Math.pow(y, T_INV_ALPHA) : null;

// Normal CDF quantile probabilities for 1σ, 2σ, 3σ used by probability-based G chart limits
const SIGMA_PROBS = {
	one: { low: 0.1586552539, high: 0.8413447461 },
	two: { low: 0.0227501319, high: 0.9772498681 },
	three: { low: 0.001349898, high: 0.998650102 },
};

// Inverse CDF for geometric ("number until first success") as a real value (no ceiling)
function geomInvCdfReal(q: number, p: number): number {
	if (!(q > 0 && q < 1) || !(p > 0 && p < 1)) return NaN;
	return Math.log(1 - q) / Math.log(1 - p);
}

// Probability-based control lines for a G chart given mean g ("number between")
function gChartProbabilityLimits(gMean: number): {
	cl: number | null;
	lcl: number | null;
	ucl: number | null;
	oneLow: number | null;
	oneHigh: number | null;
	twoLow: number | null;
	twoHigh: number | null;
} {
	if (!isNumber(gMean) || gMean < 0)
		return {
			cl: null,
			lcl: null,
			ucl: null,
			oneLow: null,
			oneHigh: null,
			twoLow: null,
			twoHigh: null,
		};
	const p = 1 / (gMean + 1); // from E[G_between] = (1-p)/p
	const qToGbetween = (q: number) => geomInvCdfReal(q, p) - 1; // convert from "until" to "between"

	const cl = qToGbetween(0.5);
	const lcl = Math.max(0, qToGbetween(SIGMA_PROBS.three.low));
	const ucl = qToGbetween(SIGMA_PROBS.three.high);
	const oneL = Math.max(0, qToGbetween(SIGMA_PROBS.one.low));
	const oneH = qToGbetween(SIGMA_PROBS.one.high);
	const twoL = Math.max(0, qToGbetween(SIGMA_PROBS.two.low));
	const twoH = qToGbetween(SIGMA_PROBS.two.high);

	return {
		cl,
		lcl,
		ucl,
		oneLow: oneL,
		oneHigh: oneH,
		twoLow: twoL,
		twoHigh: twoH,
	};
}

// Compute T chart limits on the original t-scale using XmR on transformed y = t^alpha
function tChartLimits(
	tValues: (number | null)[],
	ghosts: boolean[],
	excludeOutliers: boolean
): {
	center: number | null;
	upperProcessLimit: number | null;
	lowerProcessLimit: number | null;
	upperTwoSigma: number | null;
	lowerTwoSigma: number | null;
	upperOneSigma: number | null;
	lowerOneSigma: number | null;
	mr: (number | null)[];
	mrMean: number | null;
	mrUcl: number | null;
} {
	const y = tValues.map((v) => (isNumber(v) ? toTTransformed(v)! : null));
	const mrY = movingRanges(y, ghosts);
	const { mrMean: mrMeanY_raw /*, mrUcl: _mrUclY_raw*/ } =
		mrMeanWithOptionalExclusion(mrY, !!excludeOutliers);
	const yNonGhost = y.filter((v, i) => !ghosts[i] && isNumber(v)) as number[];
	const yBar = yNonGhost.length ? mean(yNonGhost) : NaN;

	if (!isNumber(yBar) || !isNumber(mrMeanY_raw)) {
		return {
			center: null,
			upperProcessLimit: null,
			lowerProcessLimit: null,
			upperTwoSigma: null,
			lowerTwoSigma: null,
			upperOneSigma: null,
			lowerOneSigma: null,
			mr: mrY,
			mrMean: null,
			mrUcl: null,
		};
	}
	const k3 = 2.66,
		k2 = (2 / 3) * k3,
		k1 = (1 / 3) * k3;
	const UL_y = yBar + k3 * mrMeanY_raw;
	const LL_y = yBar - k3 * mrMeanY_raw;
	const U2_y = yBar + k2 * mrMeanY_raw;
	const L2_y = yBar - k2 * mrMeanY_raw;
	const U1_y = yBar + k1 * mrMeanY_raw;
	const L1_y = yBar - k1 * mrMeanY_raw;

	const center = fromTTransformed(yBar);
	const upl = fromTTransformed(UL_y);
	const lpl = LL_y <= 0 ? null : fromTTransformed(LL_y); // no LCL if LL<0

	const oneH = fromTTransformed(U1_y);
	const oneL = L1_y <= 0 ? null : fromTTransformed(L1_y);
	const twoH = fromTTransformed(U2_y);
	const twoL = L2_y <= 0 ? null : fromTTransformed(L2_y);

	return {
		center: center ?? null,
		upperProcessLimit: upl ?? null,
		lowerProcessLimit: lpl ?? null,
		upperTwoSigma: twoH ?? null,
		lowerTwoSigma: twoL ?? null,
		upperOneSigma: oneH ?? null,
		lowerOneSigma: oneL ?? null,
		mr: mrY,
		mrMean: mrMeanY_raw,
		mrUcl: isNumber(mrMeanY_raw) ? 3.267 * mrMeanY_raw : null,
	};
}

// ------------------------- Core builder -------------------------

export function buildSpc(args: BuildSpcArgs): SpcResult {
	const {
		chartType,
		metricImprovement,
		data,
		settings: userSettings = {},
	} = args;

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
		collapseClusterRules: true,
		baselineSuggest: false,
		baselineSuggestMinDeltaSigma: 0.5,
		baselineSuggestStabilityPoints: 5,
		baselineSuggestMinGap: 12,
		baselineSuggestScoreThreshold: 50,
		precedenceStrategy: PrecedenceStrategy.Legacy,
		emergingDirectionGrace: false,
		trendSideGatingEnabled: true,
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

		let mr: (number | null)[] = new Array(values.length).fill(null);
		let centerLine: number = NaN;
		let mrMean: number = NaN;
		let mrUcl: number = NaN;
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
				specialCauseSinglePointAbove: false,
				specialCauseSinglePointBelow: false,
				specialCauseTwoOfThreeAbove: false,
				specialCauseTwoOfThreeBelow: false,
				specialCauseFourOfFiveAbove: false,
				specialCauseFourOfFiveBelow: false,
				specialCauseShiftHigh: false,
				specialCauseShiftLow: false,
				specialCauseTrendIncreasing: false,
				specialCauseTrendDecreasing: false,
				specialCauseFifteenInnerThird: false,
				variationIcon: VariationIcon.None,
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

			// Single point beyond 3-sigma
			row.specialCauseSinglePointAbove = isNumber(row.upperProcessLimit)
				? v > row.upperProcessLimit
				: false;
			row.specialCauseSinglePointBelow = isNumber(row.lowerProcessLimit)
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
					for (const j of runHigh) getRow(j).specialCauseShiftHigh = true;
				}
				if (runLow.length >= shiftN) {
					for (const j of runLow) getRow(j).specialCauseShiftLow = true;
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
					for (const r of highExceed) r.specialCauseTwoOfThreeAbove = true; // flag only exceeding points
				}
				if (allLowSide && lowExceed.length >= 2) {
					for (const r of lowExceed) r.specialCauseTwoOfThreeBelow = true;
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
						for (const r of highExceed) r.specialCauseFourOfFiveAbove = true;
					}
					if (rows5.every(r => r.value! < meanVal) && lowExceed.length >= 4) {
						for (const r of lowExceed) r.specialCauseFourOfFiveBelow = true;
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
				if (inc) for (const j of windowIdx) getRow(j).specialCauseTrendIncreasing = true;
				if (dec) for (const j of windowIdx) getRow(j).specialCauseTrendDecreasing = true;
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
	}

	// Variation icon per row based on improvement direction
	// --- Provenance: capture original rule-based flags BEFORE any heuristic mutation occurs ---
	// We populate ruleTags exactly once, immediately prior to heuristics that can mutate the specialCause* booleans.
	// If already populated (defensive), skip.
	for (const r of output) {
		if (r.ruleTags && r.ruleTags.length) continue; // already captured
		const tags: string[] = [];
		if (r.specialCauseShiftHigh) tags.push('shift_high');
		if (r.specialCauseShiftLow) tags.push('shift_low');
		if (r.specialCauseTrendIncreasing) tags.push('trend_inc');
		if (r.specialCauseTrendDecreasing) tags.push('trend_dec');
		if (r.specialCauseSinglePointAbove) tags.push('single_above');
		if (r.specialCauseSinglePointBelow) tags.push('single_below');
		if (r.specialCauseTwoOfThreeAbove) tags.push('two_of_three_high');
		if (r.specialCauseTwoOfThreeBelow) tags.push('two_of_three_low');
		if (r.specialCauseFourOfFiveAbove) tags.push('four_of_five_high');
		if (r.specialCauseFourOfFiveBelow) tags.push('four_of_five_low');
		if (r.specialCauseFifteenInnerThird) tags.push('fifteen_inner_third');
		// Only persist if any tags present for compactness
		if (tags.length) r.ruleTags = tags;
	}

	// Heuristic tagging helper removed (no remaining heuristics mutate classification)

	// Retroactive neutralisation heuristic removed

	// Comparative baseline emulation block removed

	for (let idx = 0; idx < output.length; idx++) {
		const row = output[idx];
		if (row.ghost || !isNumber(row.value) || row.mean === null) {
			row.variationIcon = VariationIcon.None;
			continue;
		}
		// Directional aggregation of signals. By default, trend flags only contribute when the
		// current point is on the favourable side of the mean (side-gated). When trendSideGatingEnabled
		// is false, trend flags contribute irrespective of side (legacy side-agnostic behaviour).
		const onHighSide = isNumber(row.value) && isNumber(row.mean) && row.value! > row.mean!;
		const onLowSide  = isNumber(row.value) && isNumber(row.mean) && row.value! < row.mean!;
		// Optional cluster rule collapse (retain stronger 4-of-5 over 2-of-3 when both same side)
		if (settings.collapseClusterRules) {
			if (row.specialCauseTwoOfThreeAbove && row.specialCauseFourOfFiveAbove) row.specialCauseTwoOfThreeAbove = false;
			if (row.specialCauseTwoOfThreeBelow && row.specialCauseFourOfFiveBelow) row.specialCauseTwoOfThreeBelow = false;
		}
		// Recompute high/low aggregates after any collapse so they reflect final flags
		const highTrendContrib = row.specialCauseTrendIncreasing && (settings.trendSideGatingEnabled ? onHighSide : true);
		const lowTrendContrib = row.specialCauseTrendDecreasing && (settings.trendSideGatingEnabled ? onLowSide : true);

		const highSignals =
			row.specialCauseSinglePointAbove ||
			row.specialCauseTwoOfThreeAbove ||
			(settings.enableFourOfFiveRule && row.specialCauseFourOfFiveAbove) ||
			row.specialCauseShiftHigh ||
			highTrendContrib;
		const lowSignals =
			row.specialCauseSinglePointBelow ||
			row.specialCauseTwoOfThreeBelow ||
			(settings.enableFourOfFiveRule && row.specialCauseFourOfFiveBelow) ||
			row.specialCauseShiftLow ||
			lowTrendContrib;

		// Emerging favourable detection (N-1 monotonic run in favourable direction before trend flag fires)
		let emergingFavourable = false;
		if (settings.precedenceStrategy === PrecedenceStrategy.DirectionalFirst && settings.emergingDirectionGrace) {
			const trendN = settings.specialCauseTrendPoints || 6;
			if (trendN > 1 && !(row.specialCauseTrendIncreasing || row.specialCauseTrendDecreasing)) {
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
			// Map signals to favourable/unfavourable sides
			const favourable = metricImprovement === ImprovementDirection.Up ? highSignals
				: metricImprovement === ImprovementDirection.Down ? lowSignals
				: false;
			const unfavourable = metricImprovement === ImprovementDirection.Up ? lowSignals
				: metricImprovement === ImprovementDirection.Down ? highSignals
				: false;
			if (favourable && !unfavourable) {
				row.variationIcon = VariationIcon.Improvement;
			} else if (unfavourable && !favourable) {
				// Grace: downgrade concern -> neither if emerging favourable direction underway
				row.variationIcon = emergingFavourable ? VariationIcon.Neither : VariationIcon.Concern;
			} else if (favourable && unfavourable) {
				// Mixed signals – if emerging or confirmed favourable trend present treat as Improvement, else Neither
				row.variationIcon = (emergingFavourable || row.specialCauseTrendIncreasing || row.specialCauseTrendDecreasing)
					? VariationIcon.Improvement
					: VariationIcon.Neither;
			} else {
				row.variationIcon = VariationIcon.Neither;
			}
		} else {
			// Legacy side-based aggregation
			if (metricImprovement === ImprovementDirection.Up) {
				// Reverted the ternaries to restore VariationIcon.Neither for neutral special‑cause
				row.variationIcon = highSignals ? VariationIcon.Improvement : lowSignals ? VariationIcon.Concern : VariationIcon.Neither;
			} else if (metricImprovement === ImprovementDirection.Down) {
				row.variationIcon = lowSignals ? VariationIcon.Improvement : highSignals ? VariationIcon.Concern : VariationIcon.Neither;
			} else {
				row.variationIcon = VariationIcon.Neither;
			}
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

		// Assurance icon – capability mode (limits vs target) or fallback single-point
		if (isNumber(row.value) && row.mean !== null) {
			row.assuranceIcon = AssuranceIcon.None;
			const inputRow = canonical[row.rowId - 1];
			if (isNumber(inputRow.target)) {
				const t = inputRow.target;
				if (
					settings.assuranceCapabilityMode &&
					isNumber(row.upperProcessLimit) &&
					isNumber(row.lowerProcessLimit)
				) {
					if (metricImprovement === ImprovementDirection.Up) {
						if (row.lowerProcessLimit !== null && row.lowerProcessLimit > t)
							row.assuranceIcon = AssuranceIcon.Pass; // whole band above
						else if (
							row.upperProcessLimit !== null &&
							row.upperProcessLimit < t
						)
							row.assuranceIcon = AssuranceIcon.Fail; // whole band below
						else row.assuranceIcon = AssuranceIcon.None; // overlaps -> uncertain
					} else if (metricImprovement === ImprovementDirection.Down) {
						if (row.upperProcessLimit !== null && row.upperProcessLimit < t)
							row.assuranceIcon = AssuranceIcon.Pass; // whole band below (good)
						else if (
							row.lowerProcessLimit !== null &&
							row.lowerProcessLimit > t
						)
							row.assuranceIcon = AssuranceIcon.Fail; // whole band above (bad)
						else row.assuranceIcon = AssuranceIcon.None;
					} else {
						row.assuranceIcon = AssuranceIcon.None;
					}
				} else {
					if (metricImprovement === ImprovementDirection.Down)
						row.assuranceIcon =
							row.value <= t ? AssuranceIcon.Pass : AssuranceIcon.Fail;
					else if (metricImprovement === ImprovementDirection.Up)
						row.assuranceIcon =
							row.value >= t ? AssuranceIcon.Pass : AssuranceIcon.Fail;
					else row.assuranceIcon = AssuranceIcon.None;
				}
			}
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

	if (settings.variationIconConflictWarning) {
		for (const row of output) {
			if (row.variationIcon === VariationIcon.Improvement) {
				const highAndLow =
					(row.specialCauseSinglePointAbove ||
						row.specialCauseTwoOfThreeAbove ||
						(settings.enableFourOfFiveRule &&
							row.specialCauseFourOfFiveAbove) ||
						row.specialCauseShiftHigh ||
						row.specialCauseTrendIncreasing) &&
					(row.specialCauseSinglePointBelow ||
						row.specialCauseTwoOfThreeBelow ||
						(settings.enableFourOfFiveRule &&
							row.specialCauseFourOfFiveBelow) ||
						row.specialCauseShiftLow ||
						row.specialCauseTrendDecreasing);
				if (highAndLow)
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
	if (settings.nullValueWarning && (chartType === "XmR" || chartType === "G")) {
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
		(chartType === "T" || chartType === "G")
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
		(chartType === "T" || chartType === "G")
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
					r.specialCauseSinglePointAbove ||
					r.specialCauseSinglePointBelow ||
					r.specialCauseTwoOfThreeAbove ||
					r.specialCauseTwoOfThreeBelow ||
					r.specialCauseFourOfFiveAbove ||
					r.specialCauseFourOfFiveBelow ||
					r.specialCauseShiftHigh ||
					r.specialCauseShiftLow ||
					r.specialCauseTrendIncreasing ||
					r.specialCauseTrendDecreasing;
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
		// Heuristic baseline change (phase) suggestions
		const rows = output;
		const W = settings.baselineSuggestStabilityPoints;
		const minGap = settings.baselineSuggestMinGap;
		const minDeltaSigma = settings.baselineSuggestMinDeltaSigma;
		const scoreThreshold = settings.baselineSuggestScoreThreshold;
		const suggestions: NonNullable<SpcResult['suggestedBaselines']> = [];
		// Determine existing manual baseline positions (input baselines create new partitions). Use earliest row index for gap.
		let lastBaselineIndex = 0; // treat start as baseline
		for (let i = 0; i < rows.length; i++) {
			const r = rows[i];
			// If this row began a new partition (partitionId increment), treat as baseline boundary.
			if (i > 0 && rows[i - 1].partitionId !== r.partitionId) {
				lastBaselineIndex = i;
			}
			// Collect candidate triggers only at first point where rule becomes true
			const prev = rows[i - 1];
			function becameTrue(flag: keyof SpcRow): boolean {
				return !!(r as any)[flag] && !(prev as any)?.[flag];
			}
			const candidates: { reason: BaselineSuggestionReason; index: number }[] = [];
			if (becameTrue('specialCauseShiftHigh') || becameTrue('specialCauseShiftLow')) {
				candidates.push({ reason: BaselineSuggestionReason.Shift, index: i });
			}
			if (becameTrue('specialCauseTrendIncreasing') || becameTrue('specialCauseTrendDecreasing')) {
				candidates.push({ reason: BaselineSuggestionReason.Trend, index: i });
			}
			// Single 3σ point candidate – only if not already part of shift/trend suggestion
			if (becameTrue('specialCauseSinglePointAbove') || becameTrue('specialCauseSinglePointBelow')) {
				candidates.push({ reason: BaselineSuggestionReason.Point, index: i });
			}
			for (const c of candidates) {
				// Enforce minimum gap
				if (c.index - lastBaselineIndex < minGap) continue;
				// Windows: previous W non-ghost points before candidate (excluding candidate) & next W points starting at candidate
				const oldStart = Math.max(0, c.index - W);
				const oldEnd = c.index - 1;
				if (oldEnd - oldStart + 1 < W) continue; // insufficient history
				const newStart = c.index;
				const newEnd = c.index + W - 1;
				if (newEnd >= rows.length) continue; // insufficient future stability window
				const oldVals = rows.slice(oldStart, oldEnd + 1).map(rw => rw.value).filter(isNumber) as number[];
				const newVals = rows.slice(newStart, newEnd + 1).map(rw => rw.value).filter(isNumber) as number[];
				if (oldVals.length < W || newVals.length < W) continue;
				// Sigma estimate from candidate row (if limits present)
				const cand = rows[c.index];
				let sigma: number | null = null;
				if (isNumber(cand.upperProcessLimit) && isNumber(cand.mean)) {
					const span = cand.upperProcessLimit - cand.mean;
					if (span > 0) sigma = span / 3;
				}
				if (!sigma || sigma <= 0) continue;
				const oldMean = mean(oldVals);
				const newMean = mean(newVals);
				const deltaMean = newMean - oldMean;
				if (Math.abs(deltaMean) < minDeltaSigma * sigma) continue;
				// Stability: limit number of special cause concern/improvement flags inside new window (<=1 Concern allowed, Improvement neutral)
				const newRows = rows.slice(newStart, newEnd + 1);
				const concernCount = newRows.filter(rw => rw.variationIcon === VariationIcon.Concern).length;
				if (concernCount > 1) continue;
				// Variance change (optionally reward lower variance)
				const variance = (arr: number[]) => {
					const m = mean(arr);
					return arr.length ? arr.reduce((a,b)=> a + (b - m) * (b - m), 0) / arr.length : 0;
				};
				const oldVar = variance(oldVals);
				const newVar = variance(newVals);
				let scoreBase = c.reason === BaselineSuggestionReason.Shift ? 90 : c.reason === BaselineSuggestionReason.Trend ? 70 : 60;
				if (newVar < oldVar) scoreBase += 10;
				scoreBase -= concernCount * 15;
				if (scoreBase < scoreThreshold) continue;
				// Avoid duplicates at same index (keep highest score / more significant reason ordering shift>trend>point)
				const existing = suggestions.find(s => s.index === c.index);
				if (existing) {
					const priority = (reason: BaselineSuggestionReason) => reason === BaselineSuggestionReason.Shift ? 3 : reason === BaselineSuggestionReason.Trend ? 2 : 1;
					if (priority(c.reason) > priority(existing.reason) || scoreBase > existing.score) {
						existing.reason = c.reason;
						existing.score = scoreBase;
						existing.deltaMean = deltaMean;
						existing.oldMean = oldMean;
						existing.newMean = newMean;
						existing.window = [newStart, newEnd];
					}
				} else {
					suggestions.push({
						index: c.index,
						reason: c.reason,
						score: scoreBase,
						deltaMean,
						oldMean,
						newMean,
						window: [newStart, newEnd],
					});
				}
			}
			// If a manual baseline occurs update lastBaselineIndex
			if (i > 0 && rows[i - 1].partitionId !== rows[i].partitionId) {
				lastBaselineIndex = i;
			}
		}
		suggestions.sort((a,b)=> a.index - b.index);
		suggestedBaselines = suggestions;
	}
	return { rows: output, warnings, ...(suggestedBaselines ? { suggestedBaselines } : {}) };
}

export default { buildSpc };
