import type { SequenceTransition, SPCDatum } from "./SPCChart.props";
import type { EngineRowUI, SPCSignalFocusInfo } from "./SPCChart.types";
import type { SpcVisualCategory } from "./logic_v2";
import type { ImprovementDirection } from "./types";

/** Low-level series and datum contracts used by InternalSPC */
export interface SPCDataSeries {
	id: string;
	data: SPCDatum[];
}

/** Statistical control limits for the current partition/window */
export interface SPCLimits {
	mean?: number | null;
	ucl?: number | null;
	lcl?: number | null;
	sigma: number;
	onePos?: number | null;
	oneNeg?: number | null;
	twoPos?: number | null;
	twoNeg?: number | null;
}

/** Optional narration context used for accessible live regions and tooltips */
export interface SPCNarrationContext {
	measureName?: string;
	measureUnit?: string;
	datasetContext?: string;
	organisation?: string;
	timeframe?: string;
	additionalNote?: string;
}

// Grouped prop contracts
/** Core data and computed rows powering the chart visuals */
export interface InternalSPCData {
	series: SPCDataSeries[];
	engineRows: EngineRowUI[] | null;
	visualCategories: SpcVisualCategory[];
	partitionMarkers: number[];
}

/** Targets and limits displayed on the chart */
export interface InternalSPCTargets {
	limits: SPCLimits;
	uniformTarget: number | null;
}

/** Visual switches and styling parameters */
export interface InternalSPCVisualOptions {
	showPoints: boolean;
	showZones: boolean;
	highlightOutOfControl: boolean;
	gradientSequences: boolean;
	sequenceTransition: SequenceTransition;
	processLineWidth: number;
	showFocusIndicator?: boolean;
	enableRules: boolean;
	enableNeutralNoJudgement?: boolean;
	showTrendStartMarkers?: boolean;
	showFirstFavourableCrossMarkers?: boolean;
	showTrendBridgeOverlay?: boolean;
}

/** Accessibility and narration options */
export interface InternalSPCAccessibilityOptions {
	announceFocus: boolean;
	ariaLabel?: string;
	narrationContext?: SPCNarrationContext;
	showSignalsInspector?: boolean;
	onSignalFocus?: (info: SPCSignalFocusInfo) => void;
	showTrendGatingExplanation?: boolean;
}

/** Axis rendering configuration (e.g., reserved gap for zero-break) */
export interface InternalSPCAxisOptions {
	zeroBreakSlotGapPx?: number;
}

/** Computation and domain semantics */
export interface InternalSPCComputationOptions {
	metricImprovement?: ImprovementDirection;
	effectiveUnit?: string;
}

/** Complete prop contract for InternalSPC, composed from semantic groups */
export interface InternalSPCProps
	extends InternalSPCData,
		InternalSPCTargets,
		InternalSPCVisualOptions,
		InternalSPCAccessibilityOptions,
		InternalSPCAxisOptions,
		InternalSPCComputationOptions {}
