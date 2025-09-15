import * as React from "react";
import "../../../DataVisualisation.scss";
import "./SPCChart.scss";
import { SpcWarningSeverity, SpcWarningCategory, SpcWarningCode, type SpcSettings } from "./logic/spc";
import { ImprovementDirection, VariationIcon, AssuranceIcon, ChartType } from "./logic/spcConstants";
import { SpcEmbeddedIconVariant } from "./logic/storybook/SPCChart.constants";
import type { SPCSignalFocusInfo } from "./SPCChart.types";
export declare enum SequenceTransition {
    Slope = "slope",// attribute join to rising (next) or falling/flat (prev) based on delta
    Neutral = "neutral",// draw a neutral (grey) wedge between coloured runs
    Extend = "extend"
}
export declare enum TrendVisualMode {
    Ungated = "ungated",
    Gated = "gated"
}
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
        measureUnit?: string;
        datasetContext?: string;
        organisation?: string;
        timeframe?: string;
        additionalNote?: string;
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
    /** When true, run experimental SQL compatibility wrapper (post-hoc per-side ranking & pruning) instead of native aggregation. */
    useSqlCompatEngine?: boolean;
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
}
export declare const SPCChart: React.FC<SPCChartProps>;
export { ImprovementDirection, VariationIcon, AssuranceIcon };
export default SPCChart;
