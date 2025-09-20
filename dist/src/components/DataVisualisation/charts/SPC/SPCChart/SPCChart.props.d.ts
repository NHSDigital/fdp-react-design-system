import * as React from "react";
import { SpcWarningSeverity, SpcWarningCategory, SpcWarningCode, type SpcSettings } from "./logic/spc";
import type { SPCSignalFocusInfo } from "./SPCChart.types";
import { SpcEmbeddedIconVariant } from "./SPCChart.constants";
import type { VisualsScenario as V2VisualsScenario } from "./logic_v2/presets";
import type { SpcSettingsV26a as V2Settings } from "./logic_v2/types";
import { ImprovementDirection, ChartType } from "./types";
export interface SPCDatum {
    x: Date | string | number;
    y: number;
}
export declare enum SequenceTransition {
    Slope = "slope",// attribute join to rising (next) or falling/flat (prev) based on delta
    Neutral = "neutral",// draw a neutral (grey) wedge between coloured runs
    Extend = "extend"
}
export declare enum TrendVisualMode {
    Ungated = "ungated",
    Gated = "gated"
}
export type SPCChartUIOptions = {
    axes?: {
        alwaysShowZeroY?: boolean;
        alwaysShowHundredY?: boolean;
        percentScale?: boolean;
    };
    visuals?: {
        showZones?: boolean;
        showPoints?: boolean;
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
            highlightOutOfControl?: boolean;
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
    /** Prefer grouped: a11y={{ label }} */
    ariaLabel?: string;
    /** Prefer grouped: container={{ height }} */
    height?: number;
    /** Prefer grouped UI: ui={{ visuals: { showZones } }} */
    showZones?: boolean;
    /** Prefer grouped UI: ui={{ visuals: { showPoints } }} */
    showPoints?: boolean;
    /** Prefer grouped: a11y={{ announceFocus }} */
    announceFocus?: boolean;
    /** Prefer grouped: container={{ className }} */
    className?: string;
    /** Convenience unit alias (overrides narrationContext.measureUnit). Auto-detected as '%' when all y in [0,1] if not provided */
    /** Prefer grouped: a11y={{ unit }} */
    unit?: string;
    /** Highlight points outside 3-sigma */
    /** Prefer grouped UI: ui={{ visuals: { rules: { highlightOutOfControl } } }} */
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
    /** Optional contextual metadata used to enrich accessible narration. Prefer grouped: a11y={{ narrationContext }} */
    narrationContext?: {
        measureName?: string;
        measureUnit?: string;
        datasetContext?: string;
        organisation?: string;
        timeframe?: string;
        additionalNote?: string;
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
    /** Optional source / citation text rendered below the chart outside the SVG for reliable layout. Prefer grouped: meta={{ source }} */
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
    /** Visuals preset: opt-in dataset-specific boundary window behaviour without relying on ariaLabel. Prefer grouped: visualsEngine={{ scenario }} */
    visualsScenario?: V2VisualsScenario;
    /** When using Signals Inspector, also render a focus marker on the chart at the focused point. Default true. */
    showFocusIndicator?: boolean;
    /** Optional v2 visuals engine settings. Prefer grouped: visualsEngine={{ settings }} */
    visualsEngineSettings?: Partial<V2Settings>;
    /** Optional hierarchical UI options. */
    ui?: SPCChartUIOptions;
    /** Optional grouped container props. Preferred over flat props when provided. */
    container?: {
        height?: number;
        className?: string;
    };
    /** Optional grouped accessibility props. Preferred over flat props when provided. */
    a11y?: {
        label?: string;
        announceFocus?: boolean;
        narrationContext?: {
            measureName?: string;
            measureUnit?: string;
            datasetContext?: string;
            organisation?: string;
            timeframe?: string;
            additionalNote?: string;
        };
        unit?: string;
    };
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
        /** Optional UI pre-processor: auto-insert a baseline after a sustained favourable shift (XmR only). */
        autoRecalc?: {
            enabled?: boolean;
            shiftLength?: number;
            deltaSigma?: number;
            minGap?: number;
            /** Optional: insert up to N baselines instead of just one. */
            maxInsertions?: number;
        };
    };
    /** Optional grouped visuals engine props. Preferred over flat props when provided. */
    visualsEngine?: {
        scenario?: V2VisualsScenario;
        settings?: Partial<V2Settings>;
    };
    /** Optional grouped meta props. Preferred over flat props when provided. */
    meta?: {
        source?: React.ReactNode;
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
    /** Optional UI pre-processor config resolved from engine.autoRecalc */
    effEngineAutoRecalc?: {
        enabled?: boolean;
        shiftLength?: number;
        deltaSigma?: number;
        minGap?: number;
        maxInsertions?: number;
    };
    effHeight?: number;
    effClassName?: string;
    effAriaLabel?: string;
    effUnit?: string;
    effNarrationContext?: {
        measureName?: string;
        measureUnit?: string;
        datasetContext?: string;
        organisation?: string;
        timeframe?: string;
        additionalNote?: string;
    };
    effShowZones?: boolean;
    effShowPoints?: boolean;
    effHighlightOutOfControl?: boolean;
    effVisualsScenario?: V2VisualsScenario;
    effVisualsEngineSettings?: Partial<V2Settings>;
    effSource?: React.ReactNode;
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
export declare function normalizeSpcProps(props: SPCChartProps): NormalisedSpcProps;
