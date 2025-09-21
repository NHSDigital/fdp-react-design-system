import type { SequenceTransition, SPCDatum } from "./SPCChart.props";
import type { EngineRowUI, SPCSignalFocusInfo } from "./SPCChart.types";
import type { SpcVisualCategory } from "./logic_v2";
import type { ImprovementDirection } from "./types";

/** Low-level series and datum contracts used by InternalSPC */
/**
 * A single series rendered by the SPC chart. InternalSPC currently renders one "process" series,
 * but the contract supports multiple for future extensibility.
 */
export interface SPCDataSeries {
	/** Stable identifier for the series (used for a11y and focus management). */
	id: string;
	/** Ordered datapoints for the series. x accepts Date|string|number, y is the measured value. */
	data: SPCDatum[];
}

/** Statistical control limits for the current partition/window */
/** Statistical control limits for the current partition/window. */
export interface SPCLimits {
	/** Centre line (CL). If null/undefined, the mean is not drawn. */
	mean?: number | null;
	/** Upper control limit (UCL). */
	ucl?: number | null;
	/** Lower control limit (LCL). */
	lcl?: number | null;
	/** Sigma estimate used for zones and diagnostics. */
	sigma: number;
	/** +1σ helper line (above mean). */
	onePos?: number | null;
	/** -1σ helper line (below mean). */
	oneNeg?: number | null;
	/** +2σ helper line (above mean). */
	twoPos?: number | null;
	/** -2σ helper line (below mean). */
	twoNeg?: number | null;
}

/** Optional narration context used for accessible live regions and tooltips */
/** Optional narration context used for accessible live regions and tooltips. */
export interface SPCNarrationContext {
	/** Human-friendly name of the metric (e.g., "Waiting time"). */
	measureName?: string;
	/** Unit for values (e.g., "%", "days"). */
	measureUnit?: string;
	/** Additional dataset context (e.g., "Adult mental health services"). */
	datasetContext?: string;
	/** Organisation label (e.g., "NHS England"). */
	organisation?: string;
	/** Timeframe label (e.g., "Apr 2023 to Mar 2024"). */
	timeframe?: string;
	/** Free-form note appended to the live region narration. */
	additionalNote?: string;
}

// Grouped prop contracts
/** Core data and computed rows powering the chart visuals */
/** Core data and computed rows powering the chart visuals. */
export interface InternalSPCData {
	/** Line series shown on the chart (usually a single process series). */
	series: SPCDataSeries[];
	/** UI-mapped engine rows (limits, rules, classification) aligned with series points. */
	engineRows: EngineRowUI[] | null;
	/** Engine-driven visual categories per point (e.g., Improvement/Concern/Common/NoJudgement). */
	visualCategories: SpcVisualCategory[];
	/** Zero-based indexes where partitions split (drawn as vertical markers). */
	partitionMarkers: number[];
}

/** Targets and limits displayed on the chart */
/** Targets and limits displayed on the chart. */
export interface InternalSPCTargets {
	/** Control limits and sigma used for CL/UCL/LCL lines and zone helpers. */
	limits: SPCLimits;
	/** Optional single target value drawn as a horizontal line across the plot. */
	uniformTarget: number | null;
}

/** Visual switches and styling parameters */
/** Visual switches and styling parameters. */
export interface InternalSPCVisualOptions {
	/** Render circular points on the process line. */
	showPoints: boolean;
	/** Render +/-1σ and +/-2σ zone guides. */
	showZones: boolean;
	/** Add an out-of-control highlight to points beyond UCL/LCL. */
	highlightOutOfControl: boolean;
	/** Enable gradient background sequences for Improvement/Concern/No Judgement runs. */
	gradientSequences: boolean;
	/** How to join sequence areas between categories (Neutral, Slope, Extend). */
	sequenceTransition: SequenceTransition;
	/** Stroke width of the process (line) series. */
	processLineWidth: number;
	/** Show a halo around the focused point (when enabled with signals inspector). */
	showFocusIndicator?: boolean;
	/** Enable rule-based point classes (single point, two of three, shift, trend, etc.). */
	enableRules: boolean;
	/** When true, neutral special-cause values are shown as "no judgement" points. */
	enableNeutralNoJudgement?: boolean;
	/** Show a marker at the first index where a trend becomes eligible. */
	showTrendStartMarkers?: boolean;
	/** Show a marker at the first favourable-side trend crossing after detection. */
	showFirstFavourableCrossMarkers?: boolean;
	/** Draw a bridge line between trend start and first favourable-side cross. */
	showTrendBridgeOverlay?: boolean;
}

/** Accessibility and narration options */
/** Accessibility and narration options. */
export interface InternalSPCAccessibilityOptions {
	/** When true, announce the focused point in a live region while navigating. */
	announceFocus: boolean;
	/** aria-label for point elements; pairs with dynamic aria-describedby for tooltips. */
	ariaLabel?: string;
	/** Context used to construct accessible, human-friendly live messages and tooltips. */
	narrationContext?: SPCNarrationContext;
	/** Show the Signals Inspector panel under the chart (debug/explanatory aid). */
	showSignalsInspector?: boolean;
	/** Callback fired when a signal is focused in the inspector (e.g., to sync external UI). */
	onSignalFocus?: (info: SPCSignalFocusInfo) => void;
	/** Include trend gating explanation in the tooltip when relevant. */
	showTrendGatingExplanation?: boolean;
}

/** Axis rendering configuration (e.g., reserved gap for zero-break) */
/** Axis rendering configuration (e.g., reserved gap for zero-break zig-zag). */
export interface InternalSPCAxisOptions {
	/** Reserved vertical gap (in px) used to draw the zero-baseline break. */
	zeroBreakSlotGapPx?: number;
}

/** Computation and domain semantics */
/** Computation and domain semantics that influence overlays and narration. */
export interface InternalSPCComputationOptions {
	/** How the metric is judged: Up (higher is better), Down (lower is better), or Neither. */
	metricImprovement?: ImprovementDirection;
	/** Resolved unit label used in overlays and narration (falls back to narrationContext). */
	effectiveUnit?: string;
}

/** Complete prop contract for InternalSPC, composed from semantic groups */
/**
 * Complete prop contract for InternalSPC, organised into semantic groups for clarity.
 * Consumers should prefer passing stable references for nested groups to minimise re-renders.
 */
export interface InternalSPCProps {
	/** Data series, computed engine rows, and partition markers. */
	data: InternalSPCData;
	/** Limits and an optional uniform target value. */
	targets: InternalSPCTargets;
	/** Visual feature toggles and styling knobs. */
	visuals: InternalSPCVisualOptions;
	/** Accessibility controls and narration context. */
	a11y: InternalSPCAccessibilityOptions;
	/** Axis/plot layout configuration. */
	axis: InternalSPCAxisOptions;
	/** Computation semantics that inform overlays and labels. */
	compute: InternalSPCComputationOptions;
}
