/**
 * GroupableDataGrid Component
 *
 * Unified table component supporting:
 * - Flat mode: Standard data table
 * - Grouped mode: Multi-level row grouping with aggregations
 * - Tree mode: Hierarchical parent-child relationships
 * - Pivot mode: Cross-tabulation (future)
 *
 * Built on D3 hierarchy for consistent data visualization patterns
 */
import React from "react";
import { GroupableDataGridProps } from "./GroupableDataGrid.types";
import "./GroupableDataGrid.scss";
/**
 * GroupableDataGrid Component
 */
export declare const GroupableDataGrid: {
    <T extends unknown = any>({ mode, data, columns, groupConfig, treeConfig, calculatedFields, initialExpanded, expandedIds: controlledExpandedIds, onExpansionChange, selectedRow, onGlobalRowSelectionChange, onRowClick, sortConfig, onSortChange, enableMultiSort, showControls, controlsRenderer, isLoading, error, ariaLabel, ariaDescription, className, "data-testid": testId, mobileDisplay, mobileBreakpoint, }: GroupableDataGridProps<T>): React.ReactElement;
    displayName: string;
};
export default GroupableDataGrid;
