import React from "react";
import type { TableProps } from "./Table.types";
import "./SimpleSortableTable.scss";
export interface SimpleSortableTableProps extends Omit<TableProps, "head" | "rows" | "columns" | "data"> {
    /**
     * Column definitions for the sortable table
     */
    columns: Array<{
        key: string;
        title: string;
        sortable?: boolean;
        format?: string;
        headerClasses?: string;
        cellClasses?: string;
        /** Custom sort value accessor - if not provided, uses the key */
        sortValue?: (row: any) => string | number;
    }>;
    /**
     * Data rows for the table
     */
    data: any[];
    /**
     * Optional initial sort column key
     */
    initialSort?: {
        key: string;
        direction: "ascending" | "descending";
    };
    /**
     * Callback when sort changes
     */
    onSortChange?: (key: string, direction: "ascending" | "descending") => void;
}
/**
 * SimpleSortableTable - Progressive enhancement sortable table
 *
 * Applies MOJ Frontend SortableTable patterns to NHS FDP Design System Table component.
 *
 * Features:
 * - Progressive enhancement (base table works without JS)
 * - ARIA live region for sort announcements
 * - Visual sort indicators (SVG arrows)
 * - Accessible button-based column headers
 * - Keyboard navigable
 * - Numeric and string sorting with locale awareness
 */
export declare const SimpleSortableTable: React.FC<SimpleSortableTableProps>;
export default SimpleSortableTable;
