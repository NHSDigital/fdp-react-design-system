import * as React from "react";
import "../../../DataVisualisation.scss";
import "./SPCChart.scss";
import { ImprovementDirection, VariationIcon, AssuranceIcon, type ChartType, type SpcSettings } from "./logic/spc";
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
    /** Direction where higher/lower is better (affects variation + assurance icons) */
    metricImprovement?: ImprovementDirection;
    /** Show special-cause coloured point classes */
    enableRules?: boolean;
    /** Render variation/assurance icons (basic text markers for now) */
    showIcons?: boolean;
    /** Render embedded SPC variation icon in chart corner (defaults to true) */
    showEmbeddedIcon?: boolean;
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
    /** Stroke width (thickness) of the main process line. Defaults to 1. */
    processLineWidth?: number;
}
export declare const SPCChart: React.FC<SPCChartProps>;
export { ImprovementDirection, VariationIcon, AssuranceIcon };
export default SPCChart;
