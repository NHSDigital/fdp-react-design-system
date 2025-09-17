import * as React from "react";
import "../../../DataVisualisation.scss";
import "./SPCChart.scss";
import { ChartRoot, useChartContext } from "../../../core/ChartRoot";
import { TooltipProvider, useTooltipContext } from "../../../core/TooltipContext";
import {
	LineScalesProvider,
	useScaleContext,
} from "../../../core/ScaleContext";
import Axis from "../../Axis/Axis";
import GridLines from "../../GridLines/GridLines";
import LineSeriesPrimitive from "../../../series/LineSeriesPrimitive";
// Replaced generic TooltipOverlay with SPC-specific enriched overlay
import SPCTooltipOverlay from "./SPCTooltipOverlay";
import VisuallyHiddenLiveRegion from "../../../primitives/VisuallyHiddenLiveRegion";
import { SPCVariationIcon } from "../SPCIcons/SPCIcon";
import { SPCAssuranceIcon } from "../SPCIcons/SPCAssuranceIcon";
import { AssuranceResult, Direction, MetricPolarity } from "../SPCIcons/SPCConstants";
// SPC Logic & types
import {
	buildSpc,
	SpcWarningSeverity,
	SpcWarningCategory,
	SpcWarningCode,
	type SpcSettings,
} from "./logic/spc";
import { ImprovementDirection, VariationIcon, AssuranceIcon, ChartType } from "./types";
import SpcGradientCategory, { SpcEmbeddedIconVariant, LetterMode } from "./SPCChart.constants";
import { computeGradientSequences } from "./gradientSequences";
// import { buildSpcSqlCompat } from './logic/spcSqlCompat';
import computeAutoMetrics from "../utils/autoMetrics";
import { Tag } from "../../../../Tag/Tag";
import Table from "../../../../Tables/Table";
import SPCSignalsInspector from "./SPCSignalsInspector";
import type { SPCSignalFocusInfo } from "./SPCChart.types";
import { extractRuleIds, ruleGlossary, variationLabel } from "./descriptors";
// v2 engine visuals and presets
import { SpcVisualCategory } from "./logic_v2/engine";
import type { ChartType as V2ChartType, ImprovementDirection as V2ImprovementDirection, BuildArgsV2 as V2BuildArgs } from "./logic_v2/types";
import { buildVisualsForScenario, VisualsScenario as V2VisualsScenario } from "./logic_v2/presets";
import { buildWithVisuals as buildWithVisualsV2 } from "./logic_v2/adapter";
export { VisualsScenario } from "./logic_v2/presets";

// Global counter to create stable, unique gradient id bases across multiple SPCChart instances
let spcSequenceInstanceCounter = 0;

// Gradient transition strategy between adjacent coloured sequences
export enum SequenceTransition {
	Slope = "slope",   // attribute join to rising (next) or falling/flat (prev) based on delta
	Neutral = "neutral", // draw a neutral (grey) wedge between coloured runs
	Extend = "extend", // always extend previous coloured run to the next first point
}

// Visual-only mode for trend colouring
export enum TrendVisualMode {
	Ungated = "ungated",
	Gated = "gated",
}

// Visuals presets for boundary-window and dataset-specific overrides
// VisualsScenario is re-exported from engine presets

export interface SPCDatum {
	x: Date | string | number;
	y: number;
}
export interface SPCChartProps {
	data: SPCDatum[];
	ariaLabel?: string;
	height?: number;
	showZones?: boolean;
	showPoints?: boolean;
	announceFocus?: boolean;
	className?: string;
	/** Convenience unit alias (overrides narrationContext.measureUnit). Auto-detected as '%' when all y in [0,1] if not provided */
	unit?: string;
	/** Highlight points outside 3-sigma */
	highlightOutOfControl?: boolean;
	/** SPC chart type */
	chartType?: ChartType;
	/** Direction where higher/lower is better (affects variation and assurance icons) */
	metricImprovement?: ImprovementDirection;
	/** Show special-cause coloured point classes */
	enableRules?: boolean;
	/** Render variation/assurance icons (basic text markers for now) */
	showIcons?: boolean;
	/** Render embedded SPC variation icon in chart corner (defaults to true) */
	showEmbeddedIcon?: boolean;
	/** Variant style for embedded SPC variation icon (classic triangle / triangleWithRun). */
	embeddedIconVariant?: SpcEmbeddedIconVariant;
	/** Run length (0-5) for triangleWithRun embedded variation icon variant. Ignored otherwise. */
	embeddedIconRunLength?: number;
	/** Optional targets per point (same length order as data) */
	targets?: (number | null | undefined)[];
	/** Baseline flags per point to start new partitions */
	baselines?: (boolean | null | undefined)[];
	/** Ghost flags per point (excluded from calc) */
	ghosts?: (boolean | null | undefined)[];
	/** Advanced engine settings (special-cause thresholds, rule toggles, assurance mode) */
	settings?: SpcSettings;
	/** Optional contextual metadata used to enrich accessible narration */
	narrationContext?: {
		measureName?: string;
		measureUnit?: string; // e.g. '%', 'ms', 'patients'
		datasetContext?: string; // e.g. "Monthly trust-wide data"
		organisation?: string;
		timeframe?: string; // free text timeframe summary
		additionalNote?: string; // intervention or caveat
	};
	/** When true, render light gradient band fills behind contiguous sequences of similarly coloured points (concern / improvement / common). */
	gradientSequences?: boolean;
	/** Strategy for how coloured gradient sequences join at boundaries. */
	sequenceTransition?: SequenceTransition;
	/** Stroke width (thickness) of the main process line. Defaults to 1. */
	processLineWidth?: number;
	/** When true, render vertical dashed markers at partition (baseline) boundaries */
	showPartitionMarkers?: boolean;
	/** When true, renders a diagnostics warnings panel below the icon row */
	showWarningsPanel?: boolean;
	/** Filter for warnings rendered in the panel */
	warningsFilter?: {
		severities?: SpcWarningSeverity[];
		categories?: SpcWarningCategory[];
		codes?: SpcWarningCode[];
	};
	/** Show neutral special-cause (no-judgement) purple styling on points and tooltip. Defaults to true. */
	enableNeutralNoJudgement?: boolean;
	/** Show the trend side-gating explanation text in the tooltip. Defaults to true. */
	showTrendGatingExplanation?: boolean;
	/** Visual-only control for trend side-gating colours.
	 * Ungated (default): Early monotonic trend points are coloured by direction (blue/orange) even before crossing the mean.
	 * Gated: Early monotonic trend points remain neutral purple until the run reaches the favourable side of the mean.
	 * Note: Classification (engine variationIcon) remains side-gated regardless; this only affects rendering.
	 */
	trendVisualMode?: TrendVisualMode;
	/**
	 * @deprecated This prop is now ignored; trend side gating always on
	 */
	disableTrendSideGating?: boolean;
	/** Optional source / citation text rendered below the chart outside the SVG for reliable layout */
	source?: React.ReactNode;
	/** Force y-axis to include zero as the lower bound even if all values are strictly positive. Default false. */
	alwaysShowZeroY?: boolean;
	/** Force y-axis to include 100 as the upper bound (useful for percentages). Default false. */
	alwaysShowHundredY?: boolean;
	/** Convenience flag: treat series as percentage scale (enforces 0–100 domain). Overrides alwaysShowZeroY / alwaysShowHundredY when true. */
	percentScale?: boolean;
	/** Deprecated: SQL compatibility wrapper is no longer toggled at the chart level. */
	// useSqlCompatEngine?: boolean;
	/** UI-only: show a hollow marker at the first index where a trend is detected (run reaches N). Default false. */
	showTrendStartMarkers?: boolean;
	/** UI-only: show a solid marker at the first point in the trend window that lies on the favourable side of the mean. Default false. */
	showFirstFavourableCrossMarkers?: boolean;
	/** UI-only: draw a dashed bridge between trend start and first favourable-side inclusion. Default false. */
	showTrendBridgeOverlay?: boolean;
	/** UI-only: show a minimal Signals Inspector panel under the chart reflecting the focused point. Default false. */
	showSignalsInspector?: boolean;
	/** UI-only: when Signals Inspector is shown, notify on focus changes. */
	onSignalFocus?: (info: SPCSignalFocusInfo) => void;
	/** Visuals preset: opt-in dataset-specific boundary window behaviour without relying on ariaLabel */
	visualsScenario?: V2VisualsScenario;
	/**
	 * Rows/limits/visuals are now driven by the v2 engine path by default.
	 * The previous experimental useV2Adapter flag has been removed.
	 */
}

export const SPCChart: React.FC<SPCChartProps> = ({
	data,
	ariaLabel = "SPC chart",
	height = 260,
	showZones = true,
	showPoints = true,
	announceFocus = false,
	className,
	unit,
	highlightOutOfControl = true,
	chartType = ChartType.XmR,
	metricImprovement = ImprovementDirection.Neither,
	enableRules = true,
	showIcons = false,
	showEmbeddedIcon = true,
	embeddedIconVariant = SpcEmbeddedIconVariant.Classic,
	embeddedIconRunLength,
	targets: targetsProp,
	baselines,
	ghosts,
	settings,
	narrationContext,
	gradientSequences = false,
	sequenceTransition = SequenceTransition.Slope,
	processLineWidth = 2,
	showWarningsPanel = false,
	warningsFilter,
	enableNeutralNoJudgement = true,
	showTrendGatingExplanation = true,
	trendVisualMode = TrendVisualMode.Ungated,
	disableTrendSideGating,
	source,
	alwaysShowZeroY = true,
	alwaysShowHundredY = false,
	percentScale = false,
	showTrendStartMarkers = false,
	showFirstFavourableCrossMarkers = false,
	showTrendBridgeOverlay = false,
	showSignalsInspector = false,
	onSignalFocus,
	visualsScenario = V2VisualsScenario.None,
}) => {
	// Optional flags now available as props
	// Human-friendly label for SpcWarningCode values (snake_case -> Capitalised words)
	const formatWarningCode = React.useCallback(
		(code: SpcWarningCode | string): string => {
			const raw = String(code);
			return raw
				.replace(/^spc_warning_code\.?/i, "") // defensive: strip enum prefix if ever serialized
				.replace(/[_\-]+/g, " ") // underscores/hyphens -> space
				.trim()
				.split(" ")
				.filter(Boolean)
				.map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
				.join(" ");
		},
		[]
	);

	// Human friendly label for SpcWarningCategory values (snake_case -> Capitalised words)
	const formatWarningCategory = React.useCallback(
		(cat: SpcWarningCategory | string): string => {
			return String(cat)
				.replace(/[_\-]+/g, " ")
				.trim()
				.split(" ")
				.filter(Boolean)
				.map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
				.join(" ");
		},
		[]
	);

	// Removed effectiveEnableTrendSideGating constant)
	if (process.env.NODE_ENV !== "production" && disableTrendSideGating !== undefined) {
		console.warn(
			"SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
		);
	}

	// Build SPC engine instance (memoised)
	// NB: settings object is assumed stable if not changing reference (no deep equality check)
	// NB: data array is assumed stable if not changing reference (no deep equality check)
	// NB: targets/baselines/ghosts are assumed stable if not changing reference (no deep equality check)
	// NB: chartType and metricImprovement are primitive values
	// NB: useSqlCompatEngine removed – always using native engine rows via v2 adapter for UI
	// If any of the above change by reference/value, a new engine is built.
	// If the build fails (e.g. insufficient data), engine will be null.
	// This is a best-effort attempt to avoid unnecessary rebuilds while still responding to changes.
	// Parent components should memoise props where possible to avoid unnecessary rebuilds.
	// If more granular control is needed, consider memoising settings and data at a higher level.
	// Shared canonical rows input used by both engines and v2 visuals
	const rowsInput = React.useMemo(() => {
		return data.map((d, i) => ({
			x: d.x,
			value: d.y,
			target: targetsProp?.[i] ?? undefined,
			baseline: baselines?.[i] ?? undefined,
			ghost: ghosts?.[i] ?? undefined,
		}));
	}, [data, targetsProp, baselines, ghosts]);

	const engine = React.useMemo(() => {
		try {
				// Settings passed through unchanged (trend gating flags removed from core)
				const engineSettings: SpcSettings | undefined = settings ? { ...settings } : undefined;
				return buildSpc({ chartType, metricImprovement, data: rowsInput, settings: engineSettings });
			} catch {
				return null;
			}
		}, [rowsInput, chartType, metricImprovement, settings]);

	// Compute engine v2 visuals (UI-agnostic categories) so the engine drives colour coding
	const v2Visuals: SpcVisualCategory[] = React.useMemo(() => {
		try {
			// Map legacy SPC settings to v2 engine settings for visual parity
			const minPts = (settings as any)?.minimumPointsPartition ?? (settings as any)?.minimumPoints;
			const v2Settings: any = {};
			if (typeof minPts === "number" && !isNaN(minPts)) {
				v2Settings.minimumPoints = minPts;
				// When the series has at least minimum points overall, enable chart-level eligibility
				// so the engine backfills limits across the partition (colours available from index 0 in tests)
				const eligibleCount = rowsInput.filter(r => !r.ghost && typeof r.value === 'number').length;
				if (eligibleCount >= minPts) v2Settings.chartLevelEligibility = true;
			}
			if ((settings as any)?.twoSigmaIncludeAboveThree != null) {
				v2Settings.twoSigmaIncludeAboveThree = !!(settings as any).twoSigmaIncludeAboveThree;
			}
			const v2Args: V2BuildArgs = {
				chartType: (chartType as unknown as V2ChartType) ?? ("XmR" as unknown as V2ChartType),
				metricImprovement: (metricImprovement as unknown as V2ImprovementDirection) ?? ("Neither" as unknown as V2ImprovementDirection),
				data: rowsInput,
				settings: Object.keys(v2Settings).length ? v2Settings : undefined,
			};
			const scenario = visualsScenario as unknown as V2VisualsScenario;
			const { visuals } = buildVisualsForScenario(v2Args as any, scenario, {
				trendVisualMode: trendVisualMode === TrendVisualMode.Ungated ? "Ungated" : "Gated",
				enableNeutralNoJudgement,
			});
			return visuals || [];
		} catch {
			return [];
		}
	}, [rowsInput, chartType, metricImprovement, trendVisualMode, enableNeutralNoJudgement, settings, visualsScenario]);

	// Optional: build v2 rows via adapter and map to a UI-compatible shape when enabled
	const v2RowsForUi = React.useMemo(() => {
		try {
			const minPts = (settings as any)?.minimumPointsPartition ?? (settings as any)?.minimumPoints;
			const v2Settings: any = {};
			if (typeof minPts === "number" && !isNaN(minPts)) {
				v2Settings.minimumPoints = minPts;
				const eligibleCount = rowsInput.filter(r => !r.ghost && typeof r.value === 'number').length;
				if (eligibleCount >= minPts) v2Settings.chartLevelEligibility = true;
			}
			if ((settings as any)?.twoSigmaIncludeAboveThree != null) {
				v2Settings.twoSigmaIncludeAboveThree = !!(settings as any).twoSigmaIncludeAboveThree;
			}
			const v2Args: V2BuildArgs = {
				chartType: (chartType as unknown as V2ChartType) ?? ("XmR" as unknown as V2ChartType),
				metricImprovement: (metricImprovement as unknown as V2ImprovementDirection) ?? ("Neither" as unknown as V2ImprovementDirection),
				data: rowsInput,
				settings: Object.keys(v2Settings).length ? v2Settings : undefined,
			};
			const { rows } = buildWithVisualsV2(v2Args);
			// Map v2 VariationIcon to v1 VariationIcon for UI booleans
			const mapVariation = (v: any): VariationIcon => {
				if (v === ("ImprovementHigh" as any) || v === ("ImprovementLow" as any)) return VariationIcon.Improvement;
				if (v === ("ConcernHigh" as any) || v === ("ConcernLow" as any)) return VariationIcon.Concern;
				if (v === ("NeitherHigh" as any) || v === ("NeitherLow" as any)) return VariationIcon.Neither;
				return VariationIcon.Neither;
			};
			return rows.map((r: any) => ({
				value: r.value,
				ghost: !!r.ghost,
				partitionId: r.partitionId,
				mean: r.mean,
				upperProcessLimit: r.upperProcessLimit,
				lowerProcessLimit: r.lowerProcessLimit,
				upperTwoSigma: r.upperTwoSigma,
				lowerTwoSigma: r.lowerTwoSigma,
				upperOneSigma: r.upperOneSigma,
				lowerOneSigma: r.lowerOneSigma,
				// Rule flags mapping (v2 -> UI keys expected by overlay/inspector)
				specialCauseSinglePointUp: !!r.singlePointUp,
				specialCauseSinglePointDown: !!r.singlePointDown,
				specialCauseTwoOfThreeUp: false,
				specialCauseTwoOfThreeDown: false,
				specialCauseFourOfFiveUp: false,
				specialCauseFourOfFiveDown: false,
				specialCauseShiftUp: !!r.shiftUp,
				specialCauseShiftDown: !!r.shiftDown,
				specialCauseTrendUp: !!r.trendUp,
				specialCauseTrendDown: !!r.trendDown,
				// Classification mapped to v1 enum
				variationIcon: mapVariation(r.variationIcon),
				// Neutral special-cause hint for purple orientation
				specialCauseNeitherValue: (r.variationIcon === ("NeitherHigh" as any) || r.variationIcon === ("NeitherLow" as any))
					? (r.specialCauseImprovementValue ?? r.specialCauseConcernValue ?? 1)
					: null,
				// Target/assurance may be absent in v2 rows; leave undefined for UI fallbacks
				target: r.target,
				assuranceIcon: undefined,
			}));
		} catch {
			return null;
		}
	}, [rowsInput, chartType, metricImprovement, settings]);

	// Representative row with populated limits (last available)
	const rowsForUi = v2RowsForUi || null;

	// Representative row with populated limits (last available)
	const engineRepresentative = (rowsForUi || [])
		.slice()
		.reverse()
		.find((r: any) => r.mean != null);
	const mean = engineRepresentative?.mean ?? null;
	const warnings = [] as any[];
	const filteredWarnings = React.useMemo(() => {
		if (!warnings.length) return [] as typeof warnings;
		if (!warningsFilter) return warnings;
		return warnings.filter((w) => {
			if (
				warningsFilter.severities &&
				w.severity &&
				!warningsFilter.severities.includes(w.severity)
			)
				return false;
			if (
				warningsFilter.categories &&
				w.category &&
				!warningsFilter.categories.includes(w.category)
			)
				return false;
			if (
				warningsFilter.codes &&
				!warningsFilter.codes.includes(w.code as SpcWarningCode)
			)
				return false;
			return true;
		});
	}, [warnings, warningsFilter]);

	// Accessible live announcement for diagnostics panel updates
	const [diagnosticsMessage, setDiagnosticsMessage] =
		React.useState<string>("");
	const lastDiagnosticsRef = React.useRef<string>("");
	React.useEffect(() => {
		if (!showWarningsPanel) {
			if (lastDiagnosticsRef.current !== "") {
				lastDiagnosticsRef.current = "";
				setDiagnosticsMessage("");
			}
			return;
		}
		const total = filteredWarnings.length;
		if (!total) {
			const msg = "Diagnostics: no warnings.";
			if (msg !== lastDiagnosticsRef.current) {
				lastDiagnosticsRef.current = msg;
				setDiagnosticsMessage(msg);
			}
			return;
		}
		const counts = {
			error: filteredWarnings.filter(
				(w) => w.severity === SpcWarningSeverity.Error
			).length,
			warning: filteredWarnings.filter(
				(w) => w.severity === SpcWarningSeverity.Warning
			).length,
			info: filteredWarnings.filter(
				(w) => w.severity === SpcWarningSeverity.Info
			).length,
		};
		const breakdownParts: string[] = [];
		if (counts.error)
			breakdownParts.push(
				`${counts.error} error${counts.error === 1 ? "" : "s"}`
			);
		if (counts.warning)
			breakdownParts.push(
				`${counts.warning} warning${counts.warning === 1 ? "" : "s"}`
			);
		if (counts.info) breakdownParts.push(`${counts.info} info`);
		const msg = `Diagnostics updated: ${total} warning${total === 1 ? "" : "s"} (${breakdownParts.join(", ")}).`;
		if (msg !== lastDiagnosticsRef.current) {
			lastDiagnosticsRef.current = msg;
			setDiagnosticsMessage(msg);
		}
	}, [showWarningsPanel, filteredWarnings]);

	// Y-axis domain including limits
	const ucl = engineRepresentative?.upperProcessLimit ?? null;
	const lcl = engineRepresentative?.lowerProcessLimit ?? null;
	const onePos = engineRepresentative?.upperOneSigma ?? null;
	const oneNeg = engineRepresentative?.lowerOneSigma ?? null;
	const twoPos = engineRepresentative?.upperTwoSigma ?? null;
	const twoNeg = engineRepresentative?.lowerTwoSigma ?? null;
	const sigma = mean != null && onePos != null ? Math.abs(onePos - mean) : 0;

	// Force SPC process line to neutral grey (#A6A6A6) to align with default point (common cause) colour.
	const series = React.useMemo(
		() => [{ id: "process", data, color: "#A6A6A6" }],
		[data]
	);
	const yDomain = React.useMemo(() => {

		if (percentScale) {
			// If any values slightly exceed bounds (e.g. 100.2 due to rounding), widen just enough.
			const allVals = data.map(d => d.y);
			const overMax = Math.max(100, ...allVals);
			const underMin = Math.min(0, ...allVals);
			return [underMin < 0 ? underMin : 0, overMax > 100 ? overMax : 100] as [number, number];
		}
		
		const values = data.map((d) => d.y);
		const base = [...values];
		[mean, ucl, lcl, onePos, oneNeg, twoPos, twoNeg].forEach((v) => {
			if (v != null) base.push(v);
		});
		
		// Include any numeric targets so target line never sits outside vertical range
		if (targetsProp)
			targetsProp.forEach((t: number | null | undefined) => {
				if (typeof t === "number" && !isNaN(t)) base.push(t);
			});
		if (!base.length) return undefined;
		let min = Math.min(...base);
		let max = Math.max(...base);
		if (alwaysShowZeroY) min = Math.min(0, min);
		if (alwaysShowHundredY) max = Math.max(100, max);
		return [min, max];

	}, [data, mean, ucl, lcl, onePos, oneNeg, twoPos, twoNeg, targetsProp, alwaysShowZeroY, alwaysShowHundredY, percentScale]);

	// Use shared auto metrics helper to infer unit consistently with SPCMetricCard
	const autoFromHelper = React.useMemo(() => {
		// Derive dates from x if they look like dates; otherwise undefined
		const dateCandidates = data.map((d) => (d.x instanceof Date || typeof d.x === "string" || typeof d.x === "number") ? (d.x as any) : undefined);
		return computeAutoMetrics({
			values: data.map((d) => d.y),
			dates: dateCandidates,
			providedUnit: unit || narrationContext?.measureUnit,
			percentHeuristic: "0-1",
			autoValue: false,
			autoDelta: false,
			autoMetadata: false,
		});
	}, [data, unit, narrationContext?.measureUnit]);

	const effectiveUnit = unit ?? narrationContext?.measureUnit ?? autoFromHelper.unit;
	const effectiveNarrationContext = React.useMemo(() => {
		return effectiveUnit
			? { ...(narrationContext || {}), measureUnit: effectiveUnit }
			: narrationContext;
	}, [narrationContext, effectiveUnit]);

	// Partition markers (after engine available)
	const partitionMarkers = React.useMemo(() => {
		if (!rowsForUi) return [] as number[];
		const markers: number[] = [];
		for (let i = 1; i < rowsForUi.length; i++) {
			if (rowsForUi[i].partitionId !== rowsForUi[i - 1].partitionId)
				markers.push(i);
		}
		return markers;
	}, [rowsForUi]);

	// Derive embedded variation icon (now rendered above chart instead of inside SVG)
	const embeddedIcon = React.useMemo(() => {
		if (!showEmbeddedIcon || !(rowsForUi?.length)) return null;
		const engineRows = rowsForUi as any[];
		// Suppress embedded icon entirely when insufficient non-ghost points to establish stable limits
		const minPoints = settings?.minimumPoints ?? 13;
		const nonGhostCount = engineRows.filter(
			(r) => !r.ghost && r.value != null
		).length;

		if (nonGhostCount < minPoints) return null;
		// Determine if targets exist (no longer used to suppress placeholder; kept for potential future diagnostics)
		// const hasAnyTargets = (targetsProp?.some(t => typeof t === 'number' && !isNaN(t as any))) ?? false;
		let lastIdx = -1;
		for (let i = engineRows.length - 1; i >= 0; i--) {
			const r = engineRows[i];
			if (r && r.value != null && !r.ghost) {
				lastIdx = i;
				break;
			}
		}
		if (lastIdx === -1) return null;
		const lastRow = engineRows[lastIdx];
		const variation = lastRow.variationIcon as VariationIcon | undefined;
		const canonicalVariation: VariationIcon | undefined = variation;
		const assuranceRaw = lastRow.assuranceIcon as AssuranceIcon | undefined;
		const hasNeutralSpecialCause =
			canonicalVariation === VariationIcon.Neither && !!lastRow.specialCauseNeitherValue;
		
		// Map engine assurance icon (which can be None) to visual AssuranceResult (None -> Uncertain placeholder glyph)
		const assuranceRenderStatus: AssuranceResult =
			assuranceRaw === AssuranceIcon.Pass
				? AssuranceResult.Pass
				: assuranceRaw === AssuranceIcon.Fail
					? AssuranceResult.Fail
					: AssuranceResult.Uncertain;
		
	// Derive a trend/orientation hint for suppressed 'no judgement' cases so the purple arrow points towards the favourable direction
		let trend: Direction | undefined = undefined;
		if (canonicalVariation === VariationIcon.Suppressed) {
			// A suppressed favourable single point will have exactly one of the singlePointUp/Down flags set
			const singleHigh = lastRow.specialCauseSinglePointUp;
			const singleLow = lastRow.specialCauseSinglePointDown;
			if (metricImprovement === ImprovementDirection.Up) {
				// Higher is favourable: a suppressed high point should orient higher
				if (singleHigh) trend = Direction.Higher;
				else if (singleLow) trend = Direction.Lower; // defensive (should not be favourable)
			} else if (metricImprovement === ImprovementDirection.Down) {
				// Lower is favourable: a suppressed low point should orient lower
				if (singleLow) trend = Direction.Lower;
				else if (singleHigh) trend = Direction.Higher; // defensive
			} else {
				// Neutral metrics: default to higher to preserve legacy layout
				trend = Direction.Higher;
			}
	} else if (canonicalVariation === VariationIcon.Neither && hasNeutralSpecialCause) {
			// Neutral special-cause (purple) orientation should reflect side of signal (high-side vs low-side)
			const anyHighSide =
				lastRow.specialCauseSinglePointUp ||
				lastRow.specialCauseTwoOfThreeUp ||
				lastRow.specialCauseFourOfFiveUp ||
				lastRow.specialCauseShiftUp ||
				lastRow.specialCauseTrendUp;
			const anyLowSide =
				lastRow.specialCauseSinglePointDown ||
				lastRow.specialCauseTwoOfThreeDown ||
				lastRow.specialCauseFourOfFiveDown ||
				lastRow.specialCauseShiftDown ||
				lastRow.specialCauseTrendDown;
			if (anyHighSide && !anyLowSide) trend = Direction.Higher;
			else if (anyLowSide && !anyHighSide) trend = Direction.Lower;
			else trend = Direction.Higher; // conflicting or none -> default higher
		}
		
		// Determine metric polarity for embedded icon (higher/lower/context) based on improvement direction
		// NB: this is a change from previous behaviour where neutral metrics were marked as 'context dependent'
		// This better reflects the fact that the direction of the arrows in neutral metrics is purely indicative
		// and does not reflect any underlying business meaning.
		// Note: polarity is not currently used in rendering but is included in data attributes for potential future use.
		let polarity: MetricPolarity;
		if (metricImprovement === ImprovementDirection.Up)
			polarity = MetricPolarity.HigherIsBetter;
		else if (metricImprovement === ImprovementDirection.Down)
			polarity = MetricPolarity.LowerIsBetter;
		else polarity = MetricPolarity.ContextDependent;
		
		const iconSize = 80;
		
		return (
			<div
				key={`embedded-icon-${lastIdx}`}
				style={{ display: "flex", gap: 12, marginRight: 16 }}
			>
				<div
					className="fdp-spc-chart__embedded-icon"
					data-variation={String(canonicalVariation)}
					data-trend-raw={trend ? String(trend) : "none"}
					data-trend={trend ? String(trend) : "none"}
					data-polarity={String(polarity ?? "unknown")}
					style={{ width: iconSize, height: iconSize }}
				>
					<SPCVariationIcon
						dropShadow={false}
						data={{
							variationIcon: variation!,
							improvementDirection: metricImprovement,
							polarity,
							specialCauseNeutral: hasNeutralSpecialCause,
							highSideSignal:
								lastRow.specialCauseSinglePointUp ||
									lastRow.specialCauseTwoOfThreeUp ||
									lastRow.specialCauseFourOfFiveUp ||
									lastRow.specialCauseShiftUp ||
									lastRow.specialCauseTrendUp,
							lowSideSignal:
								lastRow.specialCauseSinglePointDown ||
									lastRow.specialCauseTwoOfThreeDown ||
									lastRow.specialCauseFourOfFiveDown ||
									lastRow.specialCauseShiftDown ||
									lastRow.specialCauseTrendDown,
							...(trend ? { trend } : {}),
						}}
						// Letter semantics: use polarity (business improvement direction) when specified; fall back to signal side for neutral metrics
						letterMode={
							metricImprovement === ImprovementDirection.Neither
								? LetterMode.Direction
								: LetterMode.Polarity
						}
						size={iconSize}
						variant={embeddedIconVariant}
						runLength={
							embeddedIconVariant === SpcEmbeddedIconVariant.TriangleWithRun
								? embeddedIconRunLength
								: undefined
						}
					/>
				</div>
				{/* Always render assurance icon (mapping 'none' -> Uncertain placeholder) for consistent dual-icon display */}
				<div
					className="fdp-spc-chart__embedded-assurance-icon"
					data-assurance={String(assuranceRaw)}
					style={{ width: iconSize, height: iconSize }}
				>
					<SPCAssuranceIcon
						status={assuranceRenderStatus}
						size={iconSize}
						dropShadow={false}
					/>
				</div>
			</div>
		);
	}, [
		showEmbeddedIcon,
		engine?.rows,
		metricImprovement,
		settings?.minimumPoints,
		targetsProp,
		embeddedIconVariant,
		embeddedIconRunLength,
	]);

	return (
		<div
			className={
				className
					? `fdp-spc-chart-wrapper ${className}`
					: "fdp-spc-chart-wrapper"
			}
		>
			{/* Top row containing right-aligned embedded variation icon */}
			{showEmbeddedIcon && (
				<div
					className="fdp-spc-chart__top-row"
					style={{
						display: "flex",
						justifyContent: "flex-end",
						marginBottom: 4,
					}}
				>
					{embeddedIcon}
				</div>
			)}

			<ChartRoot
				height={height}
				ariaLabel={ariaLabel}
				margin={{ bottom: 48, left: 56, right: 16, top: 12 }}
				className={undefined /* avoid duplicating outer class */}
			>
				<LineScalesProvider series={series as any} yDomain={yDomain as any}>
					<InternalSPC
						series={series as any}
						showPoints={showPoints}
						announceFocus={announceFocus}
						limits={{ mean, ucl, lcl, sigma, onePos, oneNeg, twoPos, twoNeg }}
						showZones={showZones}
						highlightOutOfControl={highlightOutOfControl}
						engineRows={rowsForUi}
						visualCategories={v2Visuals as any}
						enableRules={enableRules}
						showIcons={showIcons}
						narrationContext={effectiveNarrationContext}
						gradientSequences={gradientSequences}
						sequenceTransition={sequenceTransition}
						processLineWidth={processLineWidth}
						effectiveUnit={effectiveUnit}
						partitionMarkers={partitionMarkers}
						ariaLabel={ariaLabel}
						enableNeutralNoJudgement={enableNeutralNoJudgement}
						showTrendGatingExplanation={showTrendGatingExplanation}
						metricImprovement={metricImprovement}
						showTrendStartMarkers={showTrendStartMarkers}
						showFirstFavourableCrossMarkers={showFirstFavourableCrossMarkers}
						showTrendBridgeOverlay={showTrendBridgeOverlay}
						showSignalsInspector={showSignalsInspector}
						onSignalFocus={onSignalFocus}
					/>
				</LineScalesProvider>
			</ChartRoot>
			{source && (
				<div className="fdp-spc-chart__source" aria-label="Chart data source">
					{typeof source === 'string' ? <small>Source: {source}</small> : source}
				</div>
			)}
			{/* Live diagnostics announcement (visually hidden) */}
			{showWarningsPanel && diagnosticsMessage && (
				<div
					data-testid="spc-diagnostics-live"
					aria-live="polite"
					style={{
						position: "absolute",
						width: 1,
						height: 1,
						padding: 0,
						margin: 0,
						overflow: "hidden",
						clip: "rect(0 0 0 0)",
						whiteSpace: "nowrap",
						border: 0,
					}}
				>
					{diagnosticsMessage}
				</div>
			)}
			{showWarningsPanel && filteredWarnings.length > 0 && (
				<div
					className="fdp-spc-chart__warnings"
					role="region"
					aria-label="SPC diagnostics"
				>
					<p className="fdp-spc-chart__warnings-heading">Diagnostics</p>
					<Table
						firstCellIsHeader={false}
						panel={false}
						responsive={false}
						head={[
							{ text: "Severity" },
							{ text: "Category" },
							{ text: "Code" },
							{ text: "Details" },
						]}
						rows={filteredWarnings.map((w) => {
							let severityColor: any = "grey";
							if (w.severity === SpcWarningSeverity.Error)
								severityColor = "red";
							else if (w.severity === SpcWarningSeverity.Warning)
								severityColor = "orange";
							else if (w.severity === SpcWarningSeverity.Info)
								severityColor = "blue";
							return [
								{
									node: (
										<Tag
											color={severityColor}
											text={(w.severity ? String(w.severity) : "Info").replace(
												/^[a-z]/,
												(c) => c.toUpperCase()
											)}
										/>
									),
									classes:
										"fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity",
								},
								{
									node: w.category ? (
										<Tag
											color="purple"
											text={formatWarningCategory(w.category)}
										/>
									) : (
										<span className="fdp-spc-chart__warning-empty">–</span>
									),
									classes:
										"fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category",
								},
								{
									node: <Tag color="grey" text={formatWarningCode(w.code)} />,
									classes:
										"fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code",
								},
								{
									node: (
										<div className="fdp-spc-chart__warning-message">
											<span>{w.message}</span>
											{w.context && Object.keys(w.context).length > 0 && (
												<details
													className="fdp-spc-chart__warning-context"
													style={{ marginTop: 4 }}
												>
													<summary>context</summary>
													<pre>{JSON.stringify(w.context, null, 2)}</pre>
												</details>
											)}
										</div>
									),
									classes:
										"fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--message",
								},
							];
						})}
						classes="fdp-spc-chart__warnings-table-wrapper"
						tableClasses="fdp-spc-chart__warnings-table"
					/>
				</div>
			)}
		</div>
	);
};

interface InternalProps {
	series: { id: string; data: SPCDatum[] }[];
	showPoints: boolean;
	announceFocus: boolean;
	limits: {
		mean?: number | null;
		ucl?: number | null;
		lcl?: number | null;
		sigma: number;
		onePos?: number | null;
		oneNeg?: number | null;
		twoPos?: number | null;
		twoNeg?: number | null;
	};
	showZones: boolean;
	highlightOutOfControl: boolean;
	engineRows: any[] | null;
	enableRules: boolean;
	showIcons: boolean;
	narrationContext?: {
		measureName?: string;
		measureUnit?: string;
		datasetContext?: string;
		organisation?: string;
		timeframe?: string;
		additionalNote?: string;
	};
	metricImprovement?: ImprovementDirection;
	gradientSequences: boolean;
	sequenceTransition: SequenceTransition;
	processLineWidth: number;
	effectiveUnit?: string;
	partitionMarkers: number[];
	ariaLabel?: string;
	// Feature flags to control neutral purple and gating explanation behaviour
	enableNeutralNoJudgement?: boolean;
	showTrendGatingExplanation?: boolean;
	// UI overlays
	showTrendStartMarkers?: boolean;
	showFirstFavourableCrossMarkers?: boolean;
	showTrendBridgeOverlay?: boolean;
	showSignalsInspector?: boolean;
	/** UI-only: when Signals Inspector is shown, notify on focus changes. */
	onSignalFocus?: (info: SPCSignalFocusInfo) => void;
    /** Optional engine v2-provided UI-agnostic categories to drive colour coding */
	visualCategories: SpcVisualCategory[];
}

const InternalSPC: React.FC<InternalProps> = ({
	series,
	showPoints,
	announceFocus,
	limits,
	showZones,
	highlightOutOfControl,
	engineRows,
	enableRules,
	showIcons,
	narrationContext,
	gradientSequences,
	sequenceTransition,
	processLineWidth,
	effectiveUnit,
	partitionMarkers,
	ariaLabel,
	metricImprovement,
	enableNeutralNoJudgement = true,
	showTrendGatingExplanation = true,
	showTrendStartMarkers = false,
	showFirstFavourableCrossMarkers = false,
	showTrendBridgeOverlay = false,
	showSignalsInspector = false,
	onSignalFocus,
    visualCategories,
}) => {
	const scaleCtx = useScaleContext();
	const chartCtx = useChartContext();
	if (!scaleCtx) return null;
	const { xScale, yScale } = scaleCtx;
	// Stable unique base ID for gradient defs per chart instance (prevents MDX multi-chart ID collisions)
	const gradientIdBaseRef = React.useRef<string>(
		"spc-seq-" + ++spcSequenceInstanceCounter
	);
	const tooltipCtx = useTooltipContext();
	const all = series[0]?.data || [];
	const outOfControl = React.useMemo(() => {
		if (!limits.ucl && !limits.lcl) return new Set<number>();
		const set = new Set<number>();
		all.forEach((d, i) => {
			if (typeof limits.ucl === "number" && d.y > limits.ucl) set.add(i);
			if (typeof limits.lcl === "number" && d.y < limits.lcl) set.add(i);
		});
		return set;
	}, [limits.ucl, limits.lcl, all]);

	// Map engine row flags into a lightweight per-index signals object for UI use
	const engineSignals = React.useMemo(() => {
		if (!engineRows || !engineRows.length) return null as null | any[];
		const map: any[] = [];
		engineRows.forEach((r: any, idx: number) => {
			const anySpecial = !!(
				r.variationIcon === VariationIcon.Concern ||
				r.variationIcon === VariationIcon.Improvement ||
				r.specialCauseNeitherValue
			);
			const upAny = !!(
				r.specialCauseSinglePointUp ||
				r.specialCauseTwoOfThreeUp ||
				r.specialCauseFourOfFiveUp ||
				r.specialCauseShiftUp ||
				r.specialCauseTrendUp
			);
			const downAny = !!(
				r.specialCauseSinglePointDown ||
				r.specialCauseTwoOfThreeDown ||
				r.specialCauseFourOfFiveDown ||
				r.specialCauseShiftDown ||
				r.specialCauseTrendDown
			);
			map[idx] = {
				variation: r.variationIcon,
				assurance: r.assuranceIcon,
				special: anySpecial,
				concern: r.variationIcon === VariationIcon.Concern,
				improvement: r.variationIcon === VariationIcon.Improvement,
				trendUp: !!r.specialCauseTrendUp,
				trendDown: !!r.specialCauseTrendDown,
				upAny,
				downAny,
				neutralSpecial: !!r.specialCauseNeitherValue,
				shiftUp: !!r.specialCauseShiftUp,
				shiftDown: !!r.specialCauseShiftDown,
				twoOfThreeUp: !!r.specialCauseTwoOfThreeUp,
				twoOfThreeDown: !!r.specialCauseTwoOfThreeDown,
				fourOfFiveUp: !!r.specialCauseFourOfFiveUp,
				fourOfFiveDown: !!r.specialCauseFourOfFiveDown,
				partitionId: r.partitionId ?? null,
			};
		});
		return map;
	}, [engineRows]);

	// Derive a single uniform target (most common current usage) for drawing a horizontal reference line.
	const uniformTarget = React.useMemo(() => {
		if (!engineRows || !engineRows.length) return null;
		const values: number[] = [];
		for (const r of engineRows) {
			if (typeof r.target === "number" && !isNaN(r.target))
				values.push(r.target);
		}
		if (!values.length) return null;
		const first = values[0];
		return values.every((v) => v === first) ? first : null; // only render when constant across series
	}, [engineRows]);

	// Categories strictly from engine v2 visuals (engine is source of truth)
	const categories = React.useMemo(() => {
		return (visualCategories || []).map((c) => {
			if (c === SpcVisualCategory.Improvement)
				return SpcGradientCategory.Improvement;
			if (c === SpcVisualCategory.Concern)
				return SpcGradientCategory.Concern;
			if (c === SpcVisualCategory.NoJudgement)
				return SpcGradientCategory.NoJudgement;
			return SpcGradientCategory.Common;
		});
	}, [visualCategories]);

	// Derive contiguous sequences after absorption
	const sequences = React.useMemo(() => {
		if (!gradientSequences || !categories.length) return [] as { start: number; end: number; category: SpcGradientCategory; }[];
		return computeGradientSequences(categories, true);
	}, [gradientSequences, categories, ariaLabel]);

	// Precompute x positions for boundary calculations (after scales + data available)
	const xPositions = React.useMemo(
		() => all.map((d) => xScale(d.x instanceof Date ? d.x : new Date(d.x))),
		[all, xScale]
	);
	const plotWidth = xScale.range()[1];

	// Compute basic trend insights (UI-only) from engine rows
	const trendInsights = React.useMemo(() => {
		if (!engineRows || !engineRows.length) return null as null | {
			direction: 'up' | 'down';
			detectedAt: number; // index in series
			firstFavourableCrossAt: number | null;
			persistedAcrossMean: boolean;
		};
		// Find earliest trend window across up/down
		let earliestUp = Number.POSITIVE_INFINITY;
		let earliestDown = Number.POSITIVE_INFINITY;
		engineRows.forEach((r, i) => {
			if (r.specialCauseTrendUp) earliestUp = Math.min(earliestUp, i);
			if (r.specialCauseTrendDown) earliestDown = Math.min(earliestDown, i);
		});
		if (!Number.isFinite(earliestUp) && !Number.isFinite(earliestDown)) return null;
		const useUp = earliestUp <= earliestDown;
		const direction: 'up' | 'down' = useUp ? 'up' : 'down';
		const detectedAt = useUp ? earliestUp : earliestDown;
		// Determine favourable side relative to metricImprovement and row mean
		const isFavourable = (row: any): boolean => {
			if (metricImprovement == null || metricImprovement === ImprovementDirection.Neither) return false;
			if (row == null || typeof row.value !== 'number' || typeof row.mean !== 'number') return false;
			if (direction === 'up') {
				return metricImprovement === ImprovementDirection.Up ? row.value > row.mean : row.value < row.mean;
			}
			// direction === 'down'
			return metricImprovement === ImprovementDirection.Down ? row.value < row.mean : row.value > row.mean;
		};
		let firstFavourableCrossAt: number | null = null;
		for (let i = detectedAt; i < engineRows.length; i++) {
			const r = engineRows[i];
			const flagged = useUp ? !!r.specialCauseTrendUp : !!r.specialCauseTrendDown;
			if (!flagged) break; // end of contiguous trend window span
			if (isFavourable(r)) { firstFavourableCrossAt = i; break; }
		}
		let persistedAcrossMean = false;
		if (firstFavourableCrossAt != null) {
			let favourableCount = 0;
			for (let i = firstFavourableCrossAt; i < engineRows.length; i++) {
				const r = engineRows[i];
				const flagged = useUp ? !!r.specialCauseTrendUp : !!r.specialCauseTrendDown;
				if (!flagged) break;
				if (isFavourable(r)) favourableCount++;
			}
			persistedAcrossMean = favourableCount >= 2;
		}
		return { direction, detectedAt, firstFavourableCrossAt, persistedAcrossMean };
	}, [engineRows, metricImprovement]);

	// Build horizontal line segments for limits that can change across partitions (means/limits per row)
	const limitSegments = React.useMemo(() => {
		if (!engineRows || !engineRows.length) return null;
		// Helper to extract segments for a given numeric accessor key present on each row
		const build = (key: keyof (typeof engineRows)[number]) => {
			const segs: { x1: number; x2: number; y: number }[] = [];
			let start: number | null = null;
			let current: number | null = null;
			for (let i = 0; i < engineRows.length; i++) {
				const row = engineRows[i];
				const v = typeof row[key] === "number" ? (row[key] as number) : null;
				if (v == null || isNaN(v)) {
					// flush any active segment
					if (start !== null && current != null) {
						segs.push({
							x1: xPositions[start],
							x2: xPositions[i - 1],
							y: yScale(current),
						});
						start = null;
						current = null;
					}
					continue;
				}
				if (start === null) {
					start = i;
					current = v;
					continue;
				}
				// continue segment if value unchanged (within epsilon) else close & start new
				const EPS = 1e-9;
				if (current != null && Math.abs(v - current) <= EPS) {
					// still same segment
				} else {
					// close previous
					if (current != null) {
						segs.push({
							x1: xPositions[start],
							x2: xPositions[i - 1],
							y: yScale(current),
						});
					}
					start = i;
					current = v;
				}
			}
			if (start !== null && current != null) {
				segs.push({
					x1: xPositions[start],
					x2: xPositions[engineRows.length - 1],
					y: yScale(current),
				});
			}
			return segs;
		};
		return {
			mean: build("mean"),
			ucl: build("upperProcessLimit"),
			lcl: build("lowerProcessLimit"),
			onePos: build("upperOneSigma"),
			oneNeg: build("lowerOneSigma"),
			twoPos: build("upperTwoSigma"),
			twoNeg: build("lowerTwoSigma"),
		};
	}, [engineRows, xPositions, yScale]);

	// Build gradient definitions + rects
	const sequenceDefs = React.useMemo(() => {
		if (!sequences.length) return null;
		return (
			<defs>
				{/* Reusable common-cause gradient for transition wedges between coloured sequences */}
				<linearGradient id={`${gradientIdBaseRef.current}-grad-common`} x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stopColor={"var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)"} stopOpacity={0.28} />
					<stop offset="70%" stopColor={"var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)"} stopOpacity={0.12} />
					<stop offset="100%" stopColor={"var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)"} stopOpacity={0.045} />
				</linearGradient>
				{sequences.map((seq, idx) => {
					const id = `${gradientIdBaseRef.current}-grad-${idx}`;
					let baseVar: string;
					let top = 0.28,
						mid = 0.12,
						end = 0.045; // default (grey/common)
					switch (seq.category) {
						case SpcGradientCategory.Concern:
							baseVar = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)";
							// stronger wash for coloured sequences
							top = 0.28;
							mid = 0.12;
							end = 0.045;
							break;
						case SpcGradientCategory.Improvement:
							baseVar =
								"var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)";
							top = 0.26;
							mid = 0.11;
							end = 0.045;
							break;
						case SpcGradientCategory.NoJudgement:
							baseVar =
								"var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)";
							// Use similar opacity profile to improvement for balance
							top = 0.26;
							mid = 0.11;
							end = 0.045;
							break;
						default:
							baseVar =
								"var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
					}
					return (
						<linearGradient key={id} id={id} x1="0%" y1="0%" x2="0%" y2="100%">
							<stop offset="0%" stopColor={baseVar} stopOpacity={top} />
							<stop offset="70%" stopColor={baseVar} stopOpacity={mid} />
							<stop offset="100%" stopColor={baseVar} stopOpacity={end} />
						</linearGradient>
					);
				})}
			</defs>
		);
	}, [sequences]);

	const sequenceAreas = React.useMemo(() => {
		if (!sequences.length) return null;

		const [domainMin] = yScale.domain();
		const baseY = yScale(domainMin);

		const areas = sequences
			.map((seq, idx) => {
				const { start: firstIdx, end: lastIdx, category } = seq;

				if (firstIdx < 0 || lastIdx >= xPositions.length || firstIdx > lastIdx)
					return null;

				const firstX = xPositions[firstIdx];
				const lastX = xPositions[lastIdx];

				let d = "";

				if (category === SpcGradientCategory.Common) {
					// --- Common Cause (Grey) Gradient ---
					const prevSeq = idx > 0 ? sequences[idx - 1] : null;
					const nextSeq = idx < sequences.length - 1 ? sequences[idx + 1] : null;

					const leftX = prevSeq ? xPositions[prevSeq.end] : 0;
					const leftY = prevSeq ? yScale(all[prevSeq.end].y) : baseY;

					const rightX = nextSeq ? xPositions[nextSeq.start] : plotWidth;
					const rightY = nextSeq ? yScale(all[nextSeq.start].y) : baseY;

					d = `M ${leftX} ${baseY}`;
					d += ` L ${leftX} ${leftY}`;

					for (let i = firstIdx; i <= lastIdx; i++) {
						d += ` L ${xPositions[i]} ${yScale(all[i].y)}`;
					}

					d += ` L ${rightX} ${rightY}`;
					d += ` L ${rightX} ${baseY} Z`;
				} else {
					// --- Special Cause (Colored) Gradient ---
					const prevSeq = idx > 0 ? sequences[idx - 1] : null;
					const nextSeq = idx < sequences.length - 1 ? sequences[idx + 1] : null;
					const prevColoured = prevSeq && prevSeq.category !== SpcGradientCategory.Common;
					const nextColoured = nextSeq && nextSeq.category !== SpcGradientCategory.Common;
					const firstY = yScale(all[firstIdx].y);
					const lastY = yScale(all[lastIdx].y);
					let startBaselineX = firstX;
					let endBaselineX = lastX;

					// Start logic based on transition mode
					if (prevColoured) {
						const prevX = xPositions[prevSeq!.end];
						const prevY = yScale(all[prevSeq!.end].y);
						const deltaPrev = all[firstIdx].y - all[prevSeq!.end].y;
						if (sequenceTransition === SequenceTransition.Slope && deltaPrev > 0) {
							// slope: rising -> attribute join to current colour
							d = `M ${prevX} ${prevY} L ${firstX} ${firstY}`;
							startBaselineX = prevX;
						} else {
							// neutral/extend/slope (falling or flat): start from baseline at first point
							d = `M ${firstX} ${baseY} L ${firstX} ${firstY}`;
							startBaselineX = firstX;
						}
					} else {
						// no coloured predecessor
						d = `M ${firstX} ${baseY} L ${firstX} ${firstY}`;
					}

					for (let i = firstIdx + 1; i <= lastIdx; i++) {
						d += ` L ${xPositions[i]} ${yScale(all[i].y)}`;
					}
					// Ensure path includes last point explicitly
					d += ` L ${lastX} ${lastY}`;

					// End logic based on transition mode
					if (nextColoured) {
						const nextFirstX = xPositions[nextSeq!.start];
						const nextFirstY = yScale(all[nextSeq!.start].y);
						const deltaNext = all[nextSeq!.start].y - all[lastIdx].y;
						if (
							(sequenceTransition === SequenceTransition.Slope && deltaNext <= 0) ||
							sequenceTransition === SequenceTransition.Extend
						) {
							// attribute join to current (previous) colour by extending to next first
							d += ` L ${nextFirstX} ${nextFirstY}`;
							endBaselineX = nextFirstX;
						}
					}

					// Baseline closure
					d += ` L ${endBaselineX} ${baseY}`;
					d += ` L ${startBaselineX} ${baseY} Z`;

					// For neutral mode, insert a grey wedge at the start boundary (previous coloured -> current coloured)
					if (sequenceTransition === SequenceTransition.Neutral && prevColoured) {
						const prevX = xPositions[prevSeq!.end];
						const prevY = yScale(all[prevSeq!.end].y);
						const wedge = (
							<path
								key={`seq-wedge-${idx}`}
								d={`M ${prevX} ${baseY} L ${prevX} ${prevY} L ${firstX} ${firstY} L ${firstX} ${baseY} Z`}
								fill={`url(#${gradientIdBaseRef.current}-grad-common)`}
								stroke="none"
								className="fdp-spc__sequence-bg"
								aria-hidden="true"
							/>
						);
						return (
							<g key={`seq-group-${idx}`}>
								{wedge}
								<path
									key={`seq-area-${idx}`}
									d={d}
									fill={`url(#${gradientIdBaseRef.current}-grad-${idx})`}
									stroke="none"
									className="fdp-spc__sequence-bg"
									aria-hidden="true"
								/>
							</g>
						);
					}
				}

				return (
					<path
						key={`seq-area-${idx}`}
						d={d}
						fill={`url(#${gradientIdBaseRef.current}-grad-${idx})`}
						stroke="none"
						className="fdp-spc__sequence-bg"
						aria-hidden="true"
					/>
				);
			})
			.filter(Boolean);

		return <g className="fdp-spc__sequence-bgs">{areas}</g>;
	}, [sequences, xPositions, plotWidth, yScale, all, sequenceTransition]);

	// Live region formatter (invoked only when announceFocus prop true)
	// Derive descriptive timeframe if not explicitly provided
	const computedTimeframe = React.useMemo(() => {
		if (!narrationContext?.timeframe && all.length >= 2) {
			const xs = all.map((d) => (d.x instanceof Date ? d.x : new Date(d.x)));
			const min = new Date(Math.min(...xs.map((d) => d.getTime())));
			const max = new Date(Math.max(...xs.map((d) => d.getTime())));
			const diffDays =
				Math.round((max.getTime() - min.getTime()) / 86400000) || 0;
			if (diffDays < 14)
				return `The chart shows a timeframe of ${diffDays + 1} days`;
			const weeks = Math.round(diffDays / 7);
			if (weeks < 20) return `The chart shows a timeframe of ${weeks} weeks`;
			const months =
				(max.getFullYear() - min.getFullYear()) * 12 +
				(max.getMonth() - min.getMonth()) +
				1; // inclusive months span
			return `The chart shows a timeframe of ${months} months`;
		}
		if (narrationContext?.timeframe) {
			return `The chart shows a timeframe of ${narrationContext.timeframe}`;
		}
		return undefined;
	}, [narrationContext?.timeframe, all]);

	const ordinal = (n: number) => {
		const mod10 = n % 10,
			mod100 = n % 100;
		if (mod10 === 1 && mod100 !== 11) return `${n}st`;
		if (mod10 === 2 && mod100 !== 12) return `${n}nd`;
		if (mod10 === 3 && mod100 !== 13) return `${n}rd`;
		return `${n}th`;
	};
	const formatDateLong = (d: Date) =>
		`${ordinal(d.getDate())} ${d.toLocaleString("en-GB", { month: "long" })}, ${d.getFullYear()}`;

	const formatLive = React.useCallback(
		({
			index,
			x,
			y,
		}: {
			seriesId: string;
			x: Date;
			y: number;
			index: number;
		}) => {
			const row = engineRows?.[index];
			const dateObj = x instanceof Date ? x : new Date(x);
			const dateLabel = formatDateLong(dateObj);
			const unit = narrationContext?.measureUnit
				? ` ${narrationContext.measureUnit}`
				: "";
			const measure = narrationContext?.measureName
				? ` ${narrationContext.measureName}`
				: "";
			if (!row) {
				return `General summary is: ${computedTimeframe ? computedTimeframe + ". " : ""}Point ${index + 1}, ${dateLabel}, ${y}${unit}${measure}`;
			}
			const varLabel = variationLabel(row.variationIcon) || "Variation";
			const ruleIds = extractRuleIds(row);
			const ruleNarr = ruleIds.length
				? ` Rules: ${[...new Set(ruleIds.map((r) => ruleGlossary[r].narration))].join("; ")}.`
				: " No special cause rules.";
			const ctxParts: string[] = [];
			if (narrationContext?.measureName)
				ctxParts.push(`Measure: ${narrationContext.measureName}.`);
			if (narrationContext?.datasetContext)
				ctxParts.push(`${narrationContext.datasetContext}.`);
			if (narrationContext?.organisation)
				ctxParts.push(`Organisation: ${narrationContext.organisation}.`);
			if (narrationContext?.additionalNote)
				ctxParts.push(narrationContext.additionalNote);
			return [
				`General summary is:`,
				...ctxParts,
				`Point ${index + 1} recorded on `,
				dateLabel + ",",
				`with a value of ${y} ${unit}${measure}`,
				varLabel + ".",
				ruleNarr,
			]
				.join(" ")
				.replace(/\s+/g, " ")
				.trim();
		},
		[engineRows, narrationContext, computedTimeframe]
	);

	// Per-point aria-description (long form) reusing formatLive but omitting leading "Point N" for brevity.
	const describePoint = React.useCallback(
		(index: number, d: SPCDatum): string | undefined => {
			const row = engineRows?.[index];
			if (!row) return undefined;
			const base = formatLive({
				index,
				seriesId: "process",
				x: d.x instanceof Date ? d.x : new Date(d.x),
				y: d.y,
			});
			// Remove leading "Point N " if present to reduce repetition when screen reader announces label then description.
			return base
				.replace(/^General summary is:\s*/, "")
				.replace(/^Point \d+\s*/, "");
		},
		[engineRows, formatLive]
	);

	return (
		<TooltipProvider>
			<div
				className="fdp-spc-chart"
				role="group"
				aria-label="Statistical process control chart"
				aria-roledescription="chart"
			>
				<svg
					width={scaleCtx.xScale.range()[1] + 56 + 16}
					height={scaleCtx.yScale.range()[0] + 12 + 48}
					role="img"
				>
					<g transform={`translate(56,12)`}>
						<Axis type="x" />
						<Axis type="y" />
						<GridLines axis="y" />
						{sequenceDefs}
						{sequenceAreas}
						{partitionMarkers.map((idx: number, i: number) => {
							const d = all[idx];
							if (!d) return null;
							const x = xScale(d.x instanceof Date ? d.x : new Date(d.x));
							return (
								<line
									key={`partition-marker-${i}`}
									x1={x}
									x2={x}
									y1={0}
									y2={yScale.range()[0]}
									stroke="#555"
									strokeDasharray="4 4"
									strokeWidth={1}
									aria-hidden="true"
									className="fdp-spc__partition-marker"
								/>
							);
						})}
						{/* Partition-aware mean (centre line) rendering with curved joins between recalculations */}
						{limitSegments?.mean.length ? (() => {
							return (
								<g aria-hidden="true" className="fdp-spc__cl-group">
									{limitSegments.mean.map((s,i) => (
										<line key={`mean-${i}`} className="fdp-spc__cl" x1={s.x1} x2={s.x2} y1={s.y} y2={s.y} />
									))}
									{limitSegments.mean.map((s,i) => {
										if (i === limitSegments.mean.length - 1) return null;
										const next = limitSegments.mean[i+1];
										if (!next) return null;
										if (s.y === next.y) return null; // no join needed if level unchanged
										const gap = Math.max(4, (next.x1 - s.x2) || 0); // pixel gap (may be 0 if contiguous)
										const k = gap * 0.5; // control point offset
										// Build cubic bezier from end of current to start of next
										const d = `M ${s.x2},${s.y} C ${s.x2 + k},${s.y} ${next.x1 - k},${next.y} ${next.x1},${next.y}`;
										return <path key={`mean-join-${i}`} className="fdp-spc__cl fdp-spc__cl-join" d={d} fill="none" />;
									})}
								</g>
							);
						})() : null}
						{uniformTarget != null && (
							// Render later (after limits) for stacking; temporary placeholder (moved below)
							<></>
						)}
						{limitSegments?.ucl.length ? (() => (
							<g aria-hidden="true" className="fdp-spc__limit-group fdp-spc__limit-group--ucl">
								{limitSegments.ucl.map((s,i) => (
									<line key={`ucl-${i}`} className="fdp-spc__limit fdp-spc__limit--ucl" x1={s.x1} x2={s.x2} y1={s.y} y2={s.y} strokeWidth={2} />
								))}
								{limitSegments.ucl.map((s,i) => {
									if (i === limitSegments.ucl.length - 1) return null;
									const next = limitSegments.ucl[i+1];
									if (!next) return null;
									if (s.y === next.y) return null;
									const gap = Math.max(4, (next.x1 - s.x2) || 0);
									const k = gap * 0.5;
									const d = `M ${s.x2},${s.y} C ${s.x2 + k},${s.y} ${next.x1 - k},${next.y} ${next.x1},${next.y}`;
									return <path key={`ucl-join-${i}`} className="fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join" d={d} fill="none" strokeWidth={2} />;
								})}
							</g>
						))() : null}
						{limitSegments?.lcl.length ? (() => (
							<g aria-hidden="true" className="fdp-spc__limit-group fdp-spc__limit-group--lcl">
								{limitSegments.lcl.map((s,i) => (
									<line key={`lcl-${i}`} className="fdp-spc__limit fdp-spc__limit--lcl" x1={s.x1} x2={s.x2} y1={s.y} y2={s.y} strokeWidth={2} />
								))}
								{limitSegments.lcl.map((s,i) => {
									if (i === limitSegments.lcl.length - 1) return null;
									const next = limitSegments.lcl[i+1];
									if (!next) return null;
									if (s.y === next.y) return null;
									const gap = Math.max(4, (next.x1 - s.x2) || 0);
									const k = gap * 0.5;
									const d = `M ${s.x2},${s.y} C ${s.x2 + k},${s.y} ${next.x1 - k},${next.y} ${next.x1},${next.y}`;
									return <path key={`lcl-join-${i}`} className="fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join" d={d} fill="none" strokeWidth={2} />;
								})}
							</g>
						))() : null}
						{/* Target line drawn after limits for clear visibility */}
						{uniformTarget != null && (
							<g aria-hidden="true" className="fdp-spc__target-group">
								<line
									className="fdp-spc__target"
									data-testid="spc-target-line"
									x1={0}
									x2={xScale.range()[1]}
									y1={yScale(uniformTarget)}
									y2={yScale(uniformTarget)}
									strokeWidth={2.5}
								/>
								<text
									data-testid="spc-target-label"
									x={xScale.range()[0] - 7}
									y={yScale(uniformTarget) - 5}
									textAnchor="start"
									className="fdp-spc__target-label"
									fontSize={12}
								>
									Target {uniformTarget}{" "}
									{effectiveUnit || narrationContext?.measureUnit || ""}
								</text>
							</g>
						)}
						{showZones && limitSegments && limitSegments.mean.length > 0 && (
							<>
								{limitSegments.onePos.map((s, i) => (
									<line
										key={`onePos-${i}`}
										className="fdp-spc__zone fdp-spc__zone--pos1"
										x1={s.x1}
										x2={s.x2}
										y1={s.y}
										y2={s.y}
										aria-hidden="true"
										strokeWidth={2}
									/>
								))}
								{limitSegments.oneNeg.map((s, i) => (
									<line
										key={`oneNeg-${i}`}
										className="fdp-spc__zone fdp-spc__zone--neg1"
										x1={s.x1}
										x2={s.x2}
										y1={s.y}
										y2={s.y}
										aria-hidden="true"
										strokeWidth={2}
									/>
								))}
								{limitSegments.twoPos.map((s, i) => (
									<line
										key={`twoPos-${i}`}
										className="fdp-spc__zone fdp-spc__zone--pos2"
										x1={s.x1}
										x2={s.x2}
										y1={s.y}
										y2={s.y}
										aria-hidden="true"
										strokeWidth={2}
									/>
								))}
								{limitSegments.twoNeg.map((s, i) => (
									<line
										key={`twoNeg-${i}`}
										className="fdp-spc__zone fdp-spc__zone--neg2"
										x1={s.x1}
										x2={s.x2}
										y1={s.y}
										y2={s.y}
										aria-hidden="true"
										strokeWidth={2}
									/>
								))}
							</>
						)}
						{/* Optional trend overlays: start/cross markers and bridge */}
						{trendInsights && (showTrendStartMarkers || showFirstFavourableCrossMarkers || showTrendBridgeOverlay) && (() => {
							const startIdx = trendInsights.detectedAt;
							const crossIdx = trendInsights.firstFavourableCrossAt;
							const sx = all[startIdx] ? xScale(all[startIdx].x instanceof Date ? all[startIdx].x as Date : new Date(all[startIdx].x)) : null;
							const sy = all[startIdx] ? yScale(all[startIdx].y) : null;
							const cx = (crossIdx != null && all[crossIdx]) ? xScale(all[crossIdx].x instanceof Date ? all[crossIdx].x as Date : new Date(all[crossIdx].x)) : null;
							const cy = (crossIdx != null && all[crossIdx]) ? yScale(all[crossIdx].y) : null;
							return (
								<g aria-hidden="true" className="fdp-spc__trend-overlays">
									{showTrendBridgeOverlay && sx != null && sy != null && cx != null && cy != null && (
										<line x1={sx} y1={sy} x2={cx} y2={cy} stroke="#888" strokeDasharray="4 4" strokeWidth={2}>
											<title>Trend bridge: start to first favourable-side point</title>
										</line>
									)}
									{showTrendStartMarkers && sx != null && sy != null && (
										<circle cx={sx} cy={sy} r={6} fill="white" stroke="#555" strokeWidth={2}>
											<title>Trend start (run reached N)</title>
										</circle>
									)}
									{showFirstFavourableCrossMarkers && cx != null && cy != null && (
										<circle cx={cx} cy={cy} r={5} fill="#555">
											<title>First favourable-side inclusion</title>
										</circle>
									)}
								</g>
							);
						})()}
						<LineSeriesPrimitive
							series={series[0] as any}
							seriesIndex={0}
							palette="categorical"
							showPoints={false}
							focusablePoints={false}
							focusIndex={-1}
							parseX={(d: SPCDatum) =>
								d.x instanceof Date ? d.x : new Date(d.x)
							}
							smooth={false}
							strokeWidth={processLineWidth}
						/>
						{showPoints &&
							all.map((d, i) => {
								const cx = xScale(d.x instanceof Date ? d.x : new Date(d.x));
								const cy = yScale(d.y);
								const ooc = outOfControl.has(i);
								const sig = engineSignals?.[i];
								// Drive per-point classes from precomputed categories to ensure parity with gradient logic and overrides
								const cat = categories[i];
								const isImprovement = cat === SpcGradientCategory.Improvement;
								const isConcern = cat === SpcGradientCategory.Concern;
								const isNoJudgement = cat === SpcGradientCategory.NoJudgement;
								const classes = [
									"fdp-spc__point",
									ooc && highlightOutOfControl ? "fdp-spc__point--ooc" : null,
									enableRules && isConcern
										? "fdp-spc__point--sc-concern"
										: null,
									enableRules && isImprovement
										? "fdp-spc__point--sc-improvement"
										: null,
									// Neutral special-cause (no-judgement) from category, when enabled
									enableRules && enableNeutralNoJudgement && isNoJudgement
										? "fdp-spc__point--sc-no-judgement"
										: null,
									sig?.assurance === AssuranceIcon.Pass
										? "fdp-spc__point--assurance-pass"
										: null,
									sig?.assurance === AssuranceIcon.Fail
										? "fdp-spc__point--assurance-fail"
										: null,
								]
								.filter(Boolean)
								.join(" ");

								// Removed per refined ARIA approach: rely on tooltip via aria-describedby for detailed context
								const isFocused = tooltipCtx?.focused?.index === i;
								return (
									<circle
										key={i}
										cx={cx}
										cy={cy}
										r={5} // unified radius for consistency across all points
										className={classes}
										data-variation={sig?.variation}
										data-assurance={sig?.assurance}
										aria-label={ariaLabel}
										{...(isFocused
											? { "aria-describedby": `spc-tooltip-${i}` }
											: {})}
									/>
								);
							})}
						{showIcons &&
							enableRules &&
							engineSignals &&
							all.map((d, i) => {
								const sig = engineSignals[i];
								if (!sig) return null;
								if (!(sig.concern || sig.improvement)) return null;
								const rawX = xScale(d.x instanceof Date ? d.x : new Date(d.x));
								const rawPointY = yScale(d.y);
								let iconY = rawPointY - 10; // preferred: above point
								const topPadding = 12; // must stay >= group translate y (12) for visibility
								const bottomLimit = yScale.range()[0] - 4; // small bottom padding
								if (iconY < topPadding) {
									// If too close to top, place below point instead (avoids clipping + overlap)
									// When forced below the point, add extra 10px vertical gap for clarity
									iconY = Math.min(rawPointY + 16, bottomLimit);
								}
								// Horizontal clamp so text anchor centre doesn't overflow
								const plotWidth = xScale.range()[1];
								const iconX = Math.min(Math.max(rawX, 0), plotWidth - 0);
								return (
									<text
										key={`icon-${i}`}
										x={iconX}
										y={iconY}
										textAnchor="middle"
										className={`fdp-spc__icon ${sig.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`}
										aria-hidden="true"
									>
										{sig.concern ? "!" : "★"}
									</text>
								);
							})}
						{/* Pointer / keyboard interaction layer (covers plot area) */}
						{chartCtx && (
							<InteractionLayer
								width={xScale.range()[1]}
								height={yScale.range()[0]}
							/>
						)}
						{!showSignalsInspector && (
							<SPCTooltipOverlay
								engineRows={engineRows}
								limits={{ mean: limits.mean, sigma: limits.sigma }}
								pointDescriber={describePoint}
								measureName={narrationContext?.measureName}
								measureUnit={narrationContext?.measureUnit}
								dateFormatter={(d: Date) => formatDateLong(d)}
								enableNeutralNoJudgement={enableNeutralNoJudgement}
								showTrendGatingExplanation={showTrendGatingExplanation}
							/>
						)}
					</g>
				</svg>
				{showSignalsInspector && (
					<div style={{ marginTop: 8 }}>
						<SPCSignalsInspector
							engineRows={engineRows}
							measureName={narrationContext?.measureName}
							measureUnit={effectiveUnit || narrationContext?.measureUnit}
							onSignalFocus={onSignalFocus}
						/>
					</div>
				)}
				{announceFocus && (
					<VisuallyHiddenLiveRegion
						format={(d: any) =>
							formatLive({ ...d, x: d.x instanceof Date ? d.x : new Date(d.x) })
						}
					/>
				)}
			</div>
		</TooltipProvider>
	);
};

// Transparent rectangle capturing pointer + keyboard events to drive tooltip focus
const InteractionLayer: React.FC<{ width: number; height: number }> = ({
	width,
	height,
}) => {
	const t = useTooltipContext();
	if (!t) return null;
	return (
		<rect
			className="fdp-spc__interaction-layer"
			width={width}
			height={height}
			fill="transparent"
			tabIndex={0}
			aria-label="Interactive chart area. Use arrow keys to move between points."
			onMouseMove={(e) => {
				const target = e.currentTarget as SVGRectElement;
				const bounds = target.getBoundingClientRect();
				const x = e.clientX - bounds.left;
				const y = e.clientY - bounds.top;
				t.focusNearest(x, y);
			}}
			onMouseLeave={() => t.clear()}
			onKeyDown={(e) => {
				switch (e.key) {
					case "ArrowRight":
						t.focusNextPoint();
						e.preventDefault();
						break;
					case "ArrowLeft":
						t.focusPrevPoint();
						e.preventDefault();
						break;
					case "ArrowDown":
						t.focusNextSeries();
						e.preventDefault();
						break;
					case "ArrowUp":
						t.focusPrevSeries();
						e.preventDefault();
						break;
					case "Home":
						t.focusFirstPoint();
						e.preventDefault();
						break;
					case "End":
						t.focusLastPoint();
						e.preventDefault();
						break;
				}
			}}
			style={{ cursor: "crosshair" }}
		/>
	);
};

export { ImprovementDirection, VariationIcon, AssuranceIcon };
export default SPCChart;
