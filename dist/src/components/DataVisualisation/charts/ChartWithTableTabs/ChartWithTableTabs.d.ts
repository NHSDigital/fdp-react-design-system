import * as React from "react";
import type { TabItem } from "../../../Tabs/Tabs.types";
import { type ChartContainerProps, type LineSeries } from "../../index";
export interface ChartWithTableTabsProps extends Omit<ChartContainerProps, "children" | "tabularData" | "showTableToggle"> {
    /** The chart element to render */
    chart: React.ReactNode;
    /** Accessible data table (required for tabs; if omitted tabs are disabled) */
    table?: React.ReactNode;
    /** Provide line series for auto table generation when table not manually supplied */
    autoTableFromSeries?: LineSeries[];
    /** Alignment for auto-generated (and optional consumer provided) table columns.
     * Provide an array matching column order (including Date/time column if auto generated).
     * Values: 'left' | 'center' | 'right'. Missing entries default to 'left'.
     */
    columnAlign?: Array<"left" | "center" | "right">;
    /** Enable CSV download button for auto-generated table */
    enableDownload?: boolean;
    /** Override default generated filename (without extension) */
    downloadFilename?: string;
    /** Label for the chart tab */
    chartTabLabel?: string;
    /** Label for the table tab */
    tableTabLabel?: string;
    /** Start on table instead of chart */
    initialView?: "chart" | "table";
    /** Disable tabs and render only the chart (ignores table) */
    disableTabs?: boolean;
    /** Force hide the table even if provided (e.g. embed contexts) */
    hideTable?: boolean;
    /** Pass extra tab items (appended after built-ins) */
    additionalTabs?: TabItem[];
    /** Callback when active tab changes */
    onViewChange?: (view: "chart" | "table" | string) => void;
}
/**
 * Wrapper providing NHS/GDS style accessible fallback: a tabset switching between chart and underlying data table.
 * Falls back to a single chart view when table not supplied or tabs disabled.
 */
export declare const ChartWithTableTabs: React.FC<ChartWithTableTabsProps>;
export default ChartWithTableTabs;
