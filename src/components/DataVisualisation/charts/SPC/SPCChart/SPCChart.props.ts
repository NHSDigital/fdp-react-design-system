import * as React from "react";
import {
	SpcWarningSeverity,
	SpcWarningCategory,
	SpcWarningCode,
	type SpcSettings,
} from "./logic/spc";
import type { SPCSignalFocusInfo } from "./SPCChart.types";
import { SpcEmbeddedIconVariant } from "./SPCChart.constants";
import type { VisualsScenario as V2VisualsScenario } from "./logic_v2/presets";
import type { SpcSettingsV26a as V2Settings } from "./logic_v2/types";
import { ImprovementDirection, ChartType } from "./types";

export interface SPCDatum {
	x: Date | string | number;
	y: number;
}

// Gradient transition strategy between adjacent coloured sequences
export enum SequenceTransition {
	Slope = "slope", // attribute join to rising (next) or falling/flat (prev) based on delta
	Neutral = "neutral", // draw a neutral (grey) wedge between coloured runs
	Extend = "extend", // always extend previous coloured run to the next first point
}

// Visual-only mode for trend colouring
export enum TrendVisualMode {
	Ungated = "ungated",
	Gated = "gated",
}

// Optional hierarchical options to make props easier to use (non-breaking; flat props still supported)
export type SPCChartUIOptions = {
	axes?: {
		alwaysShowZeroY?: boolean;
		alwaysShowHundredY?: boolean;
		percentScale?: boolean;
	};
	visuals?: {
		gradientSequences?: boolean;
		sequenceTransition?: SequenceTransition;
		processLineWidth?: number;
		trend?: {
			visualMode?: TrendVisualMode;
			showGatingExplanation?: boolean;
		};
		rules?: {
			enableNeutralNoJudgement?: boolean;
			enableRules?: boolean;
		};
	};
	overlays?: {
		partitionMarkers?: boolean;
		trendStartMarkers?: boolean;
		firstFavourableCrossMarkers?: boolean;
		trendBridge?: boolean;
		focusIndicator?: boolean;
	};
	inspector?: {
		show?: boolean;
		onFocus?: (info: SPCSignalFocusInfo) => void;
	};
	warnings?: {
		show?: boolean;
		filter?: {
			severities?: SpcWarningSeverity[];
			categories?: SpcWarningCategory[];
			codes?: SpcWarningCode[];
		};
	};
	icons?: {
		show?: boolean;
		embedded?: {
			show?: boolean;
			variant?: SpcEmbeddedIconVariant;
			runLength?: number;
		};
	};
};

export interface SPCChartProps {
	/**
	 * @deprecated Prefer grouped form: input={{ data, targets, baselines, ghosts }}
	 */
	data?: SPCDatum[];
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
	/** @deprecated Prefer grouped engine: engine={{ chartType }} */
	chartType?: ChartType;
	/** @deprecated Prefer grouped engine: engine={{ metricImprovement }} */
	metricImprovement?: ImprovementDirection;
	/** Show special-cause coloured point classes */
	enableRules?: boolean;
	/** @deprecated Prefer grouped UI: ui={{ icons: { show } }} */
	showIcons?: boolean;
	/** @deprecated Prefer grouped UI: ui={{ icons: { embedded: { show } } }} */
	showEmbeddedIcon?: boolean;
	/** @deprecated Prefer grouped UI: ui={{ icons: { embedded: { variant } } }} */
	embeddedIconVariant?: SpcEmbeddedIconVariant;
	/** @deprecated Prefer grouped UI: ui={{ icons: { embedded: { runLength } } }} */
	embeddedIconRunLength?: number;
	/** @deprecated Prefer grouped: input={{ targets }} */
	targets?: (number | null | undefined)[];
	/** @deprecated Prefer grouped: input={{ baselines }} */
	baselines?: (boolean | null | undefined)[];
	/** @deprecated Prefer grouped: input={{ ghosts }} */
	ghosts?: (boolean | null | undefined)[];
	/** @deprecated Prefer grouped engine: engine={{ settings }} */
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
	/** @deprecated Prefer grouped UI: ui={{ visuals: { gradientSequences } }} */
	gradientSequences?: boolean;
	/** @deprecated Prefer grouped UI: ui={{ visuals: { sequenceTransition } }} */
	sequenceTransition?: SequenceTransition;
	/** @deprecated Prefer grouped UI: ui={{ visuals: { processLineWidth } }} */
	processLineWidth?: number;
	/** @deprecated Prefer grouped UI: ui={{ overlays: { partitionMarkers } }} */
	showPartitionMarkers?: boolean;
	/** @deprecated Prefer grouped UI: ui={{ warnings: { show } }} */
	showWarningsPanel?: boolean;
	/** @deprecated Prefer grouped UI: ui={{ warnings: { filter } }} */
	warningsFilter?: {
		severities?: SpcWarningSeverity[];
		categories?: SpcWarningCategory[];
		codes?: SpcWarningCode[];
	};
	/** @deprecated Prefer grouped UI: ui={{ visuals: { rules: { enableNeutralNoJudgement } } }} */
	enableNeutralNoJudgement?: boolean;
	/** @deprecated Prefer grouped UI: ui={{ visuals: { trend: { showGatingExplanation } } }} */
	showTrendGatingExplanation?: boolean;
	/** @deprecated Prefer grouped UI: ui={{ visuals: { trend: { visualMode } } }} */
	trendVisualMode?: TrendVisualMode;
	/**
	 * @deprecated This prop is now ignored; trend side gating always on
	 */
	disableTrendSideGating?: boolean;
	/** Optional source / citation text rendered below the chart outside the SVG for reliable layout */
	source?: React.ReactNode;
	/** @deprecated Prefer grouped UI: ui={{ axes: { alwaysShowZeroY } }} */
	alwaysShowZeroY?: boolean;
	/** @deprecated Prefer grouped UI: ui={{ axes: { alwaysShowHundredY } }} */
	alwaysShowHundredY?: boolean;
	/** @deprecated Prefer grouped UI: ui={{ axes: { percentScale } }} */
	percentScale?: boolean;
	/** UI-only: show a hollow marker at the first index where a trend is detected (run reaches N). Default false. */
	/** @deprecated Prefer grouped UI: ui={{ overlays: { trendStartMarkers } }} */
	showTrendStartMarkers?: boolean;
	/** @deprecated Prefer grouped UI: ui={{ overlays: { firstFavourableCrossMarkers } }} */
	showFirstFavourableCrossMarkers?: boolean;
	/** @deprecated Prefer grouped UI: ui={{ overlays: { trendBridge } }} */
	showTrendBridgeOverlay?: boolean;
	/** @deprecated Prefer grouped UI: ui={{ inspector: { show } }} */
	showSignalsInspector?: boolean;
	/** @deprecated Prefer grouped UI: ui={{ inspector: { onFocus } }} */
	onSignalFocus?: (info: SPCSignalFocusInfo) => void;
	/** Visuals preset: opt-in dataset-specific boundary window behaviour without relying on ariaLabel */
	visualsScenario?: V2VisualsScenario;
	/** When using Signals Inspector, also render a focus marker on the chart at the focused point. Default true. */
	showFocusIndicator?: boolean;
	/** Optional v2 visuals engine settings. */
	visualsEngineSettings?: Partial<V2Settings>;
	/** Optional hierarchical UI options. */
	ui?: SPCChartUIOptions;
	/** Optional grouped input props. Preferred over flat props when provided. */
	input?: {
		data: SPCDatum[];
		targets?: (number | null | undefined)[];
		baselines?: (boolean | null | undefined)[];
		ghosts?: (boolean | null | undefined)[];
	};
	/** Optional grouped engine props. Preferred over flat props when provided. */
	engine?: {
		chartType?: ChartType;
		metricImprovement?: ImprovementDirection;
		settings?: SpcSettings;
	};
}

export type NormalisedSpcProps = {
	effData: SPCDatum[];
	effTargets?: (number | null | undefined)[];
	effBaselines?: (boolean | null | undefined)[];
	effGhosts?: (boolean | null | undefined)[];
	effChartTypeCore: ChartType;
	effMetricImprovementCore: ImprovementDirection;
	effEngineSettings?: SpcSettings;
	effAlwaysShowZeroY: boolean;
	effAlwaysShowHundredY: boolean;
	effPercentScale: boolean;
	effGradientSequences: boolean;
	effSequenceTransition: SequenceTransition;
	effProcessLineWidth: number;
	effTrendVisualMode: TrendVisualMode;
	effShowTrendGatingExplanation: boolean;
	effEnableNeutralNoJudgement: boolean;
	effEnableRules: boolean;
	effShowPartitionMarkers: boolean;
	effShowTrendStartMarkers: boolean;
	effShowFirstFavourableCrossMarkers: boolean;
	effShowTrendBridgeOverlay: boolean;
	effShowSignalsInspector: boolean;
	effOnSignalFocus?: (info: SPCSignalFocusInfo) => void;
	effShowWarningsPanel: boolean;
	effWarningsFilter?: {
		severities?: SpcWarningSeverity[];
		categories?: SpcWarningCategory[];
		codes?: SpcWarningCode[];
	};
	effShowIcons: boolean;
	effShowEmbeddedIcon: boolean;
	effEmbeddedIconVariant: SpcEmbeddedIconVariant;
	effEmbeddedIconRunLength?: number;
	effShowFocusIndicator: boolean;
};

export function normalizeSpcProps(props: SPCChartProps): NormalisedSpcProps {
	const {
		ui,
		input,
		engine,
		data,
		targets,
		baselines,
		ghosts,
		settings,
		chartType,
		metricImprovement,
		gradientSequences,
		sequenceTransition,
		processLineWidth,
		showPartitionMarkers,
		showWarningsPanel,
		warningsFilter,
		enableNeutralNoJudgement,
		showTrendGatingExplanation,
		trendVisualMode,
		alwaysShowZeroY,
		alwaysShowHundredY,
		percentScale,
		showTrendStartMarkers,
		showFirstFavourableCrossMarkers,
		showTrendBridgeOverlay,
		showSignalsInspector,
		onSignalFocus,
		showIcons,
		showEmbeddedIcon,
		embeddedIconVariant,
		embeddedIconRunLength,
		showFocusIndicator,
	} = props;

	// Dev-time migration guidance
	if (process.env.NODE_ENV !== "production") {
		if (
			!input &&
			(targets !== undefined || baselines !== undefined || ghosts !== undefined)
		) {
			console.warn(
				"SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={ data, targets, baselines, ghosts } instead."
			);
		}
		if (!engine && settings !== undefined) {
			console.warn(
				"SPCChart: Flat engine prop 'settings' is deprecated. Use engine={ chartType, metricImprovement, settings }."
			);
		}
	}

	// Grouped over flat, with sensible defaults
	const effData = input?.data ?? data ?? [];
	const effTargets = input?.targets ?? targets;
	const effBaselines = input?.baselines ?? baselines;
	const effGhosts = input?.ghosts ?? ghosts;
	const effChartTypeCore = engine?.chartType ?? chartType ?? ChartType.XmR;
	const effMetricImprovementCore =
		engine?.metricImprovement ??
		metricImprovement ??
		ImprovementDirection.Neither;
	const effEngineSettings = engine?.settings ?? settings;

	const effAlwaysShowZeroY =
		ui?.axes?.alwaysShowZeroY ?? alwaysShowZeroY ?? true;
	const effAlwaysShowHundredY =
		ui?.axes?.alwaysShowHundredY ?? alwaysShowHundredY ?? false;
	const effPercentScale = ui?.axes?.percentScale ?? percentScale ?? false;
	const effGradientSequences =
		ui?.visuals?.gradientSequences ?? gradientSequences ?? false;
	const effSequenceTransition =
		ui?.visuals?.sequenceTransition ??
		sequenceTransition ??
		SequenceTransition.Slope;
	const effProcessLineWidth =
		ui?.visuals?.processLineWidth ?? processLineWidth ?? 2;
	const effTrendVisualMode =
		ui?.visuals?.trend?.visualMode ??
		trendVisualMode ??
		TrendVisualMode.Ungated;
	const effShowTrendGatingExplanation =
		ui?.visuals?.trend?.showGatingExplanation ??
		showTrendGatingExplanation ??
		true;
	const effEnableNeutralNoJudgement =
		ui?.visuals?.rules?.enableNeutralNoJudgement ??
		enableNeutralNoJudgement ??
		true;
	const effEnableRules =
		ui?.visuals?.rules?.enableRules ?? props.enableRules ?? true;
	const effShowPartitionMarkers =
		ui?.overlays?.partitionMarkers ?? showPartitionMarkers ?? false;
	const effShowTrendStartMarkers =
		ui?.overlays?.trendStartMarkers ?? showTrendStartMarkers ?? false;
	const effShowFirstFavourableCrossMarkers =
		ui?.overlays?.firstFavourableCrossMarkers ??
		showFirstFavourableCrossMarkers ??
		false;
	const effShowTrendBridgeOverlay =
		ui?.overlays?.trendBridge ?? showTrendBridgeOverlay ?? false;
	const effShowSignalsInspector =
		ui?.inspector?.show ?? showSignalsInspector ?? false;
	const effOnSignalFocus = ui?.inspector?.onFocus ?? onSignalFocus;
	const effShowWarningsPanel = ui?.warnings?.show ?? showWarningsPanel ?? false;
	const effWarningsFilter = ui?.warnings?.filter ?? warningsFilter;
	const effShowIcons = ui?.icons?.show ?? showIcons ?? false;
	const effShowEmbeddedIcon =
		ui?.icons?.embedded?.show ?? showEmbeddedIcon ?? true;
	const effEmbeddedIconVariant =
		ui?.icons?.embedded?.variant ??
		embeddedIconVariant ??
		SpcEmbeddedIconVariant.Classic;
	const effEmbeddedIconRunLength =
		ui?.icons?.embedded?.runLength ?? embeddedIconRunLength;
	const effShowFocusIndicator =
		ui?.overlays?.focusIndicator ?? showFocusIndicator ?? true;

	return {
		effData,
		effTargets,
		effBaselines,
		effGhosts,
		effChartTypeCore,
		effMetricImprovementCore,
		effEngineSettings,
		effAlwaysShowZeroY,
		effAlwaysShowHundredY,
		effPercentScale,
		effGradientSequences,
		effSequenceTransition,
		effProcessLineWidth,
		effTrendVisualMode,
		effShowTrendGatingExplanation,
		effEnableNeutralNoJudgement,
		effEnableRules,
		effShowPartitionMarkers,
		effShowTrendStartMarkers,
		effShowFirstFavourableCrossMarkers,
		effShowTrendBridgeOverlay,
		effShowSignalsInspector,
		effOnSignalFocus,
		effShowWarningsPanel,
		effWarningsFilter,
		effShowIcons,
		effShowEmbeddedIcon,
		effEmbeddedIconVariant,
		effEmbeddedIconRunLength,
		effShowFocusIndicator,
	};
}
