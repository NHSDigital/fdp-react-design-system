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
export type ChartType = "XmR" | "T" | "G";
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
	/** Suppress isolated favourable single 3σ point without corroboration. Default: true */
	suppressIsolatedFavourablePoint?: boolean; // default: true
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
	/** Precedence strategy for classifying variation when multiple rule types overlap */
	precedenceStrategy?: "legacy" | "directional_first"; // default legacy
	/** When true (with directional_first), allow early favourable emerging trend to neutralise/downgrade concern before full trend rule fires */
	emergingDirectionGrace?: boolean; // default false
	/** Points difference buffer when resolving simultaneous opposing sustained indications */
	transitionBufferPoints?: number; // default 2
	/** Collapse lower-severity cluster rules (2-of-3 vs 4-of-5) keeping only strongest */
	collapseClusterRules?: boolean; // default true
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
	/** Heuristic: retroactively neutralise earlier opposite-side sustained signals when a later sustained favourable shift establishes a higher (or lower for Down) level without explicit baseline. Default: false */
	retroactiveOppositeShiftNeutralisation?: boolean; // default false
	/** Minimum shift mean delta (in sigma units) required to apply retroactive neutralisation. Default: 0.5 */
	retroactiveShiftDeltaSigmaThreshold?: number; // default 0.5
	/** Option C: Comparative baseline emulation. When true, a later favourable sustained shift can retrospectively label earlier stable points as concern relative to new level (or invert behaviour). */
	comparativeBaselineEmulation?: boolean; // default false
	/** When true, invert comparative emulation: treat late shift window as concern instead of improvement (for 'late concerns' variant). */
	comparativeEmulationInvert?: boolean; // default false
	/** Sigma delta threshold for comparative baseline emulation (default 0.5). */
	comparativeEmulationDeltaSigmaThreshold?: number; // default 0.5
	/** Propagate favourable (or inverted concern) classification forward after shift until partition end. */
	comparativeEmulationPropagateFavourable?: boolean; // default false
	/** When false, do not retrospectively tag early stable window as concern (used for 'Baselines (shifted)' variant). Default true. */
	comparativeEmulationRetrospectiveEarlyAsConcern?: boolean; // default true
	/** When true with invert, mark shift window as common (neutral) instead of concern (for 'late concerns' expectation wanting common). */
	comparativeEmulationInvertAsCommon?: boolean; // default false
	/** When true, force all post-shift points (after sustained window) to retain favourable improvement colouring (even if rules end). */
	comparativeEmulationForceTailFavourable?: boolean; // default false
	/** In invert+invertAsCommon mode, re-tag the last N points of the original favourable shift run as concern (bespoke tail pattern). */
	comparativeEmulationInvertTailConcernPoints?: number; // default 0
	/** STRICT MODE: When true (recommended default), disables all non-orthodox / visually-forcing heuristic behaviours (comparativeBaselineEmulation variants, retroactive neutralisation, emergingDirectionGrace precedence alterations, suppression of isolated favourable 3σ). */
	strictShewhartMode?: boolean; // default true
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
	heuristicTags?: string[]; // Heuristic / interpretive tags applied after base rules (e.g. 'comparative_early_concern','comparative_tail_invert','retro_neutralised').
}

export interface SpcWarning {
	code: string; // short stable identifier
	message: string; // human-readable text
	severity?: "info" | "warning" | "error";
	category?:
		| "config"
		| "data"
		| "limits"
		| "special_cause"
		| "baseline"
		| "logic"
		| "target"
		| "ghost"
		| "partition";
	context?: Record<string, unknown>; // optional structured data (counts, ids, etc.)
}
export interface SpcResult {
	rows: SpcRow[];
	warnings: SpcWarning[];
	/** Optional heuristic suggestions for candidate new baseline starting points (phase changes) */
	suggestedBaselines?: Array<{
		index: number; // 0-based index into rows
		reason: 'shift' | 'trend' | 'point';
		score: number; // relative confidence 0-100
		deltaMean: number; // absolute difference in means (new - old)
		oldMean: number;
		newMean: number;
		window: [number, number]; // stability window used
	}>;
}

// ------------------------- Utility functions -------------------------

const isNumber = (v: unknown): v is number =>
	typeof v === "number" && Number.isFinite(v);
const sum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);
const mean = (arr: number[]): number =>
	arr.length ? sum(arr) / arr.length : NaN;

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
const toTTransformed = (t: number | null): number | null =>
	isNumber(t) && t >= 0 ? Math.pow(t, T_ALPHA) : null;
const fromTTransformed = (y: number | null): number | null =>
	isNumber(y) && y >= 0 ? Math.pow(y, T_INV_ALPHA) : null;

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
		suppressIsolatedFavourablePoint: true,
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
		precedenceStrategy: "legacy",
		emergingDirectionGrace: false,
		transitionBufferPoints: 2,
		collapseClusterRules: true,
		baselineSuggest: false,
		baselineSuggestMinDeltaSigma: 0.5,
		baselineSuggestStabilityPoints: 5,
		baselineSuggestMinGap: 12,
		baselineSuggestScoreThreshold: 50,
		retroactiveOppositeShiftNeutralisation: false,
		retroactiveShiftDeltaSigmaThreshold: 0.5,
		comparativeBaselineEmulation: false,
		comparativeEmulationInvert: false,
		comparativeEmulationDeltaSigmaThreshold: 0.5,
		comparativeEmulationPropagateFavourable: false,
		comparativeEmulationRetrospectiveEarlyAsConcern: true,
		comparativeEmulationInvertAsCommon: false,
		comparativeEmulationForceTailFavourable: false,
		comparativeEmulationInvertTailConcernPoints: 0,
		strictShewhartMode: true,
		autoRecalculateAfterShift: false,
		autoRecalculateShiftLength: undefined,
		autoRecalculateDeltaSigma: 0.5,
		...userSettings,
	} as Required<SpcSettings>;

	// If strict mode is enabled, hard-disable non-orthodox heuristic / forcing behaviours regardless of user input.
	if ((settings as any).strictShewhartMode) {
		settings.retroactiveOppositeShiftNeutralisation = false;
		settings.comparativeBaselineEmulation = false;
		settings.comparativeEmulationInvert = false;
		settings.comparativeEmulationPropagateFavourable = false;
		settings.comparativeEmulationRetrospectiveEarlyAsConcern = false;
		settings.comparativeEmulationInvertAsCommon = false;
		settings.comparativeEmulationForceTailFavourable = false;
		settings.comparativeEmulationInvertTailConcernPoints = 0;
		settings.emergingDirectionGrace = false;
		settings.suppressIsolatedFavourablePoint = false; // retain raw rule signal visibility
	}

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
				code: "unknown_chart_type",
				category: "config",
				severity: "error",
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
				heuristicTags: [],
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
				const highExceed = rows3.filter(r => r.value! > u2);
				const lowExceed = rows3.filter(r => r.value! < l2);
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
		// Only persist if any tags present for compactness
		if (tags.length) r.ruleTags = tags;
	}

	// Helper for heuristic tagging (avoid duplicates, lazily create array)
	const addHeuristicTag = (row: SpcRow, tag: string) => {
		if (!row.heuristicTags) row.heuristicTags = [];
		if (!row.heuristicTags.includes(tag)) row.heuristicTags.push(tag);
	};

	// Optional Heuristic: retroactively neutralise early opposite-side signals after detecting a later sustained favourable shift.
	if (!settings.strictShewhartMode && settings.retroactiveOppositeShiftNeutralisation) {
		const shiftN = settings.specialCauseShiftPoints ?? 6;
		// Group rows by partition
		const partitionIds = Array.from(new Set(output.map(r => r.partitionId)));
		for (const pid of partitionIds) {
			const partRows = output.filter(r => r.partitionId === pid);
			if (!partRows.length) continue;
			// Earliest indices for high & low shifts
			let earliestHigh: number | null = null;
			let earliestLow: number | null = null;
			for (let i=0;i<partRows.length;i++) {
				if (partRows[i].specialCauseShiftHigh && earliestHigh === null) earliestHigh = i;
				if (partRows[i].specialCauseShiftLow && earliestLow === null) earliestLow = i;
				if (earliestHigh !== null && earliestLow !== null) break;
			}
			if (earliestHigh === null || earliestLow === null) continue; // need both
			// Determine favourable direction for metric
			const favourUp = metricImprovement === ImprovementDirection.Up;
			const favourableShiftIndex = favourUp ? earliestHigh : earliestLow;
			const unfavourableShiftIndex = favourUp ? earliestLow : earliestHigh;
			if (unfavourableShiftIndex >= favourableShiftIndex) continue; // only neutralise earlier opposite-side shift
			// Require at least shiftN points flagged for favourable shift overall (robust run)
			const favourableFlagKey = favourUp ? 'specialCauseShiftHigh' : 'specialCauseShiftLow';
			const favourableIndices = partRows
				.map((r, idx) => ({ r, idx }))
				.filter(o => (o.r as any)[favourableFlagKey])
				.map(o => o.idx);
			if (favourableIndices.length < shiftN) continue;
			// Estimate sigma from any row with limits
			let sigma: number | null = null;
			for (const r of partRows) {
				if (isNumber(r.upperProcessLimit) && isNumber(r.mean)) {
					const span = r.upperProcessLimit - r.mean;
					if (span > 0) { sigma = span / 3; break; }
				}
			}
			if (!sigma || sigma <= 0) continue;
			// Compute pre-window mean (last shiftN non-ghost values before favourable shift start)
			const favStart = favourableShiftIndex;
			const preWindowValues: number[] = [];
			for (let i=favStart - 1; i>=0 && preWindowValues.length < shiftN; i--) {
				const v = partRows[i].value;
				if (isNumber(v) && !partRows[i].ghost) preWindowValues.unshift(v);
			}
			if (preWindowValues.length < shiftN) continue; // insufficient stable pre window
			const postWindowValues: number[] = favourableIndices.map(idx => partRows[idx].value).filter(isNumber) as number[];
			if (!postWindowValues.length) continue;
			const preMean = mean(preWindowValues);
			const postMean = mean(postWindowValues);
			const deltaSigma = favourUp ? (postMean - preMean)/sigma : (preMean - postMean)/sigma;
			if (deltaSigma < settings.retroactiveShiftDeltaSigmaThreshold) continue; // not a large enough sustained change
			// Neutralise earlier opposite-side sustained indicators & cluster rules before favourable shift start.
			for (let i=0;i<favourableShiftIndex;i++) {
				const r = partRows[i];
				if (favourUp) {
					// Remove low-side sustained & cluster flags (keep single 3σ outliers)
					if (r.specialCauseShiftLow || r.specialCauseTwoOfThreeBelow || r.specialCauseFourOfFiveBelow) {
						addHeuristicTag(r,'retro_neutralised_opposite_low_cluster');
					}
					r.specialCauseShiftLow = false;
					r.specialCauseTwoOfThreeBelow = false;
					r.specialCauseFourOfFiveBelow = false;
				} else {
					if (r.specialCauseShiftHigh || r.specialCauseTwoOfThreeAbove || r.specialCauseFourOfFiveAbove) {
						addHeuristicTag(r,'retro_neutralised_opposite_high_cluster');
					}
					// Opposite direction scenario
					r.specialCauseShiftHigh = false;
					r.specialCauseTwoOfThreeAbove = false;
					r.specialCauseFourOfFiveAbove = false;
				}
			}
		}
	}

	// Option C: Comparative baseline emulation (retrospective concern vs improvement labelling around a later favourable shift)
	if (!settings.strictShewhartMode && settings.comparativeBaselineEmulation) {
		const shiftN = settings.specialCauseShiftPoints ?? 6;
		const partIds = Array.from(new Set(output.map(r => r.partitionId)));
		for (const pid of partIds) {
			const rows = output.filter(r => r.partitionId === pid && !r.ghost && isNumber(r.value));
			if (rows.length < shiftN * 2) continue; // need enough data
			// Identify earliest sustained high & low shifts
			let earliestHigh: number | null = null; let earliestLow: number | null = null;
			for (let i=0;i<rows.length;i++) {
				if (rows[i].specialCauseShiftHigh && earliestHigh===null) earliestHigh = i;
				if (rows[i].specialCauseShiftLow && earliestLow===null) earliestLow = i;
				if (earliestHigh!==null && earliestLow!==null) break;
			}
			if (earliestHigh===null && earliestLow===null) continue;
			const favourUp = metricImprovement === ImprovementDirection.Up;
			const favourDown = metricImprovement === ImprovementDirection.Down;
			// Choose favourable shift index (or neutral treat higher as favourable default)
			let favourableIdx: number | null = null;
			if (favourUp) favourableIdx = earliestHigh;
			else if (favourDown) favourableIdx = earliestLow;
			else favourableIdx = earliestHigh ?? earliestLow; // neutral: prefer high shift
			if (favourableIdx == null) continue;
			// Collect indices comprising run for favourable shift
			const favourableFlag = (r: SpcRow) => favourUp ? r.specialCauseShiftHigh : favourDown ? r.specialCauseShiftLow : (earliestHigh!=null ? r.specialCauseShiftHigh : r.specialCauseShiftLow);
			const favourIndices: number[] = [];
			for (let i=favourableIdx; i<rows.length; i++) if (favourableFlag(rows[i])) favourIndices.push(i); else break;
			if (favourIndices.length < shiftN) continue; // not robust
			// Estimate sigma from any row with limits in this partition
			let sigma: number | null = null;
			for (const r of rows) { if (isNumber(r.upperProcessLimit) && isNumber(r.mean)) { const span = r.upperProcessLimit - r.mean; if (span>0) { sigma = span/3; break; } } }
			if (!sigma || sigma<=0) continue;
			const preWindowVals: number[] = [];
			for (let i=favourableIdx-1; i>=0 && preWindowVals.length < shiftN; i--) { const v = rows[i].value; if (isNumber(v)) preWindowVals.unshift(v); }
			if (preWindowVals.length < shiftN) continue;
			const postVals: number[] = favourIndices.map(i=> rows[i].value!).filter(isNumber) as number[];
			const preMean = mean(preWindowVals); const postMean = mean(postVals);
			let deltaSigma: number;
			if (favourUp || (!favourDown && (earliestHigh!=null || (earliestLow==null)))) deltaSigma = (postMean - preMean)/sigma; else deltaSigma = (preMean - postMean)/sigma;
			if (deltaSigma < (settings.comparativeEmulationDeltaSigmaThreshold ?? 0.5)) continue;
			const invert = !!settings.comparativeEmulationInvert;
			// Apply retrospective labelling
			if (!invert) {
				// Retrospective early concern tagging (optional)
				if (settings.comparativeEmulationRetrospectiveEarlyAsConcern) {
					for (let i=0;i<favourableIdx;i++) {
						const r = rows[i];
						if (r.specialCauseShiftHigh || r.specialCauseShiftLow || r.specialCauseSinglePointAbove || r.specialCauseSinglePointBelow || r.specialCauseTwoOfThreeAbove || r.specialCauseTwoOfThreeBelow || r.specialCauseFourOfFiveAbove || r.specialCauseFourOfFiveBelow) continue;
						if (favourUp) r.specialCauseShiftLow = true; else r.specialCauseShiftHigh = true;
						addHeuristicTag(r,'comparative_retrospective_early_as_concern');
					}
				}
				// Optional tail forcing of favourable classification
				if (settings.comparativeEmulationForceTailFavourable) {
					// ensure all post-favourableIdx rows inherit shift flag on favourable side
					for (let i=favourableIdx;i<rows.length;i++) {
						const r = rows[i];
						if (favourUp) r.specialCauseShiftHigh = true; else if (favourDown) r.specialCauseShiftLow = true; else if (earliestHigh!=null) r.specialCauseShiftHigh = true; else r.specialCauseShiftLow = true;
						addHeuristicTag(r,'comparative_force_tail_favourable');
					}
				} else if (settings.comparativeEmulationPropagateFavourable) {
					// limited propagation only across the sustained run (already true) – no op
					for (const i of favourIndices) addHeuristicTag(rows[i],'comparative_propagate_favourable');
				}
			} else {
				// Inverted: shift window becomes concern OR common if invertAsCommon set
				for (const idx of favourIndices) {
					const r = rows[idx];
					addHeuristicTag(r,'comparative_invert');
					if (settings.comparativeEmulationInvertAsCommon) {
						addHeuristicTag(r,'comparative_invert_as_common');
						// Neutralise both shift sides to let later variation logic classify as common
						r.specialCauseShiftHigh = false; r.specialCauseShiftLow = false;
						// Also clear any other special-cause indicators so variationIcon resolves to common
						r.specialCauseSinglePointAbove = false;
						r.specialCauseSinglePointBelow = false;
						r.specialCauseTwoOfThreeAbove = false;
						r.specialCauseTwoOfThreeBelow = false;
						r.specialCauseFourOfFiveAbove = false;
						r.specialCauseFourOfFiveBelow = false;
						r.specialCauseTrendIncreasing = false;
						r.specialCauseTrendDecreasing = false;
						// Additionally, when early phase should remain neutral (no retrospective concern tagging), clear any existing flags before shift start once (first row loop trigger)
						if (!settings.comparativeEmulationRetrospectiveEarlyAsConcern && idx === favourIndices[0]) {
							for (let pre=0; pre < favourableIdx; pre++) {
								const er = rows[pre];
								er.specialCauseShiftHigh = false;
								er.specialCauseShiftLow = false;
								er.specialCauseTwoOfThreeAbove = false;
								er.specialCauseTwoOfThreeBelow = false;
								er.specialCauseFourOfFiveAbove = false;
								er.specialCauseFourOfFiveBelow = false;
								er.specialCauseSinglePointAbove = false;
								er.specialCauseSinglePointBelow = false;
								er.specialCauseTrendIncreasing = false;
								er.specialCauseTrendDecreasing = false;
								addHeuristicTag(er,'comparative_invert_clear_pre_shift');
							}
						}
					// After clearing entire window, optionally re-tag tail subset as concern
					const tailN = settings.comparativeEmulationInvertTailConcernPoints ?? 0;
					if (tailN > 0) {
						// Tag last tailN overall rows (not just within shift run) as concern to align with bespoke expectation
						const overallCount = rows.length;
						for (let k = Math.max(overallCount - tailN, 0); k < overallCount; k++) {
							const tr = rows[k];
							// Skip if already flagged (keep existing state)
							if (tr.specialCauseShiftHigh || tr.specialCauseShiftLow || tr.specialCauseSinglePointAbove || tr.specialCauseSinglePointBelow || tr.specialCauseTwoOfThreeAbove || tr.specialCauseTwoOfThreeBelow || tr.specialCauseFourOfFiveAbove || tr.specialCauseFourOfFiveBelow) continue;
							if (favourUp) tr.specialCauseShiftLow = true; else if (favourDown) tr.specialCauseShiftHigh = true; else if (earliestHigh!=null) tr.specialCauseShiftLow = true; else tr.specialCauseShiftHigh = true;
							addHeuristicTag(tr,`comparative_invert_tail_concern_${tailN}`);
						}
					}
					} else {
						if (favourUp) { r.specialCauseShiftHigh = false; r.specialCauseShiftLow = true; }
						else if (favourDown) { r.specialCauseShiftLow = false; r.specialCauseShiftHigh = true; }
						else { if (earliestHigh!=null) { r.specialCauseShiftHigh = false; r.specialCauseShiftLow = true; } else { r.specialCauseShiftLow = false; r.specialCauseShiftHigh = true; } }
					}
				}
			}
		}
	}

	for (let idx = 0; idx < output.length; idx++) {
		const row = output[idx];
		if (row.ghost || !isNumber(row.value) || row.mean === null) {
			row.variationIcon = VariationIcon.None;
			continue;
		}
		const anyHigh =
			row.specialCauseSinglePointAbove ||
			row.specialCauseTwoOfThreeAbove ||
			(settings.enableFourOfFiveRule && row.specialCauseFourOfFiveAbove) ||
			row.specialCauseShiftHigh ||
			row.specialCauseTrendIncreasing;
		const anyLow =
			row.specialCauseSinglePointBelow ||
			row.specialCauseTwoOfThreeBelow ||
			(settings.enableFourOfFiveRule && row.specialCauseFourOfFiveBelow) ||
			row.specialCauseShiftLow ||
			row.specialCauseTrendDecreasing;
		// Optional cluster rule collapse (retain stronger 4-of-5 over 2-of-3 when both same side)
		if (settings.collapseClusterRules) {
			if (row.specialCauseTwoOfThreeAbove && row.specialCauseFourOfFiveAbove)
				row.specialCauseTwoOfThreeAbove = false;
			if (row.specialCauseTwoOfThreeBelow && row.specialCauseFourOfFiveBelow)
				row.specialCauseTwoOfThreeBelow = false;
		}

		if (settings.precedenceStrategy === "directional_first" && !settings.strictShewhartMode) {
			// Emerging direction grace heuristic: detect near-trend favourable movement (trendN-1 window with majority directional steps)
			const trendWindow = settings.specialCauseTrendPoints ?? 6;
			const lookBack = trendWindow - 1; // emerging window
			let emergingFavourable = false;
			if (lookBack >= 3 && isNumber(row.value)) {
				// gather last lookBack non-ghost numeric values including current
				const recent: number[] = [];
				for (let back = idx; back >= 0 && recent.length < lookBack; back--) {
					const rv = output[back].value;
					if (output[back].ghost || !isNumber(rv)) continue;
					recent.unshift(rv);
				}
				if (recent.length === lookBack) {
					let directionalSteps = 0;
					for (let k = 1; k < recent.length; k++) {
						if (metricImprovement === ImprovementDirection.Down) {
							if (recent[k] <= recent[k - 1]) directionalSteps++; // allow flat or down
						} else if (metricImprovement === ImprovementDirection.Up) {
							if (recent[k] >= recent[k - 1]) directionalSteps++; // allow flat or up
						}
					}
					// Require all but at most one step consistent
					emergingFavourable = directionalSteps >= lookBack - 2;
				}
			}

			const favourable =
				metricImprovement === ImprovementDirection.Up ? anyHigh : anyLow;
			const unfavourable =
				metricImprovement === ImprovementDirection.Up ? anyLow : anyHigh;
			// When both favourable and unfavourable present for a row, directionally-first precedence chooses favourable unless clearly outweighed.
			if (favourable && !unfavourable) {
				row.variationIcon = VariationIcon.Improvement;
			} else if (!favourable && unfavourable) {
				// Allow graceful downgrade only for weaker unfavourable signals (exclude strong sigma/cluster/shift signals)
				const strongUnfavourable =
					row.specialCauseSinglePointAbove ||
					row.specialCauseSinglePointBelow ||
					row.specialCauseTwoOfThreeAbove ||
					row.specialCauseTwoOfThreeBelow ||
					(settings.enableFourOfFiveRule &&
						(row.specialCauseFourOfFiveAbove ||
							row.specialCauseFourOfFiveBelow)) ||
					row.specialCauseShiftHigh ||
					row.specialCauseShiftLow;
				if (
					settings.emergingDirectionGrace &&
					emergingFavourable &&
					!strongUnfavourable
				) {
					row.variationIcon = VariationIcon.Neither;
					addHeuristicTag(row,'emerging_direction_grace_neutralised');
				} else {
					row.variationIcon = VariationIcon.Concern;
				}
			} else if (favourable && unfavourable) {
				// Conflict: pick favourable if emerging direction or existing trend flagged; else neutral
				if (
					settings.emergingDirectionGrace &&
					(emergingFavourable ||
						row.specialCauseTrendIncreasing ||
						row.specialCauseTrendDecreasing)
				) {
					row.variationIcon = VariationIcon.Improvement;
					addHeuristicTag(row,'emerging_direction_grace_conflict_favourable');
				} else {
					row.variationIcon = VariationIcon.Neither;
				}
			} else {
				row.variationIcon = VariationIcon.Neither;
			}
		} else {
			// legacy logic
			if (metricImprovement === ImprovementDirection.Up) {
				row.variationIcon = anyHigh
					? VariationIcon.Improvement
					: anyLow
						? VariationIcon.Concern
						: VariationIcon.Neither;
			} else if (metricImprovement === ImprovementDirection.Down) {
				row.variationIcon = anyLow
					? VariationIcon.Improvement
					: anyHigh
						? VariationIcon.Concern
						: VariationIcon.Neither;
			} else {
				row.variationIcon = VariationIcon.Neither; // neutral metric
			}
		}

		// Suppress isolated favourable single 3σ point if enabled (exclude only the very first data point; allow end suppression)
		if (
			!settings.strictShewhartMode &&
			settings.suppressIsolatedFavourablePoint &&
			row.variationIcon === VariationIcon.Improvement &&
			idx > 0
		) {
			const favourableSingleHigh =
				metricImprovement === ImprovementDirection.Up &&
				row.specialCauseSinglePointAbove;
			const favourableSingleLow =
				metricImprovement === ImprovementDirection.Down &&
				row.specialCauseSinglePointBelow;
			const corroborating =
				(metricImprovement === ImprovementDirection.Up &&
					(row.specialCauseTwoOfThreeAbove ||
						(settings.enableFourOfFiveRule &&
							row.specialCauseFourOfFiveAbove) ||
						row.specialCauseShiftHigh ||
						row.specialCauseTrendIncreasing)) ||
				(metricImprovement === ImprovementDirection.Down &&
					(row.specialCauseTwoOfThreeBelow ||
						(settings.enableFourOfFiveRule &&
							row.specialCauseFourOfFiveBelow) ||
						row.specialCauseShiftLow ||
						row.specialCauseTrendDecreasing));
			if ((favourableSingleHigh || favourableSingleLow) && !corroborating) {
				// Suppressed favourable single 3σ point -> show 'no judgement' (purple) icon
				row.variationIcon = VariationIcon.None;
				row.specialCauseImprovementValue = null;
				addHeuristicTag(row,'suppress_isolated_favourable_single_3sigma');
			}
		}

		const anySignal = anyHigh || anyLow;
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
			code: "insufficient_points_global",
			category: "data",
			severity: "warning",
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
						code: "variation_conflict_row",
						category: "logic",
						severity: "warning",
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
				code: "null_values_excluded",
				category: "data",
				severity: "info",
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
				code: "target_ignored_rare_event",
				category: "target",
				severity: "info",
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
				code: "ghost_rows_rare_event",
				category: "ghost",
				severity: "info",
				message: `${ghostCount} ghost row(s) supplied for rare-event chart (${chartType}); verify intent.`,
				context: { chartType, ghostCount },
			});
	}
	if (settings.partitionSizeWarnings) {
		Object.entries(partitionNonGhostCounts).forEach(([pid, count]) => {
			if (count < settings.minimumPointsPartition)
				warnings.push({
					code: "insufficient_points_partition",
					category: "partition",
					severity: "warning",
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
				code: "baseline_with_special_cause",
				category: "baseline",
				severity: "warning",
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
				code: "partition_cap_applied",
				category: "limits",
				severity: "info",
				message: `Limits suppressed after ${settings.maximumPointsPartition} non-ghost points per partition.`,
				context: { cap: settings.maximumPointsPartition },
			});
		if (settings.maximumPoints && Number.isFinite(settings.maximumPoints))
			warnings.push({
				code: "global_cap_applied",
				category: "limits",
				severity: "info",
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
			const candidates: { reason: 'shift' | 'trend' | 'point'; index: number }[] = [];
			if (becameTrue('specialCauseShiftHigh') || becameTrue('specialCauseShiftLow')) {
				candidates.push({ reason: 'shift', index: i });
			}
			if (becameTrue('specialCauseTrendIncreasing') || becameTrue('specialCauseTrendDecreasing')) {
				candidates.push({ reason: 'trend', index: i });
			}
			// Single 3σ point candidate – only if not already part of shift/trend suggestion
			if (becameTrue('specialCauseSinglePointAbove') || becameTrue('specialCauseSinglePointBelow')) {
				candidates.push({ reason: 'point', index: i });
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
				let scoreBase = c.reason === 'shift' ? 90 : c.reason === 'trend' ? 70 : 60;
				if (newVar < oldVar) scoreBase += 10;
				scoreBase -= concernCount * 15;
				if (scoreBase < scoreThreshold) continue;
				// Avoid duplicates at same index (keep highest score / more significant reason ordering shift>trend>point)
				const existing = suggestions.find(s => s.index === c.index);
				if (existing) {
					const priority = (reason: 'shift'|'trend'|'point') => reason === 'shift' ? 3 : reason === 'trend' ? 2 : 1;
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
