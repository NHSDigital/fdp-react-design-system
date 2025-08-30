import React from "react";
import { AriaTabsDataGridProps } from "./AriaTabsDataGridTypes";
import "./AriaTabsDataGrid.scss";
/**
 * Component reference interface for imperative actions
 */
export interface AriaTabsDataGridRef {
    selectTab: (index: number) => void;
    refreshData: (tabIndex?: number) => void;
    exportData: (tabIndex?: number) => any[];
    getSelectedRows: (tabIndex?: number) => number[];
    clearSelection: (tabIndex?: number) => void;
    applyFilters: (filters: any) => void;
}
/**
 * Integrated Tabs and DataGrid component with full ARIA compliance
 */
export declare const AriaTabsDataGrid: React.ForwardRefExoticComponent<AriaTabsDataGridProps<any> & React.RefAttributes<AriaTabsDataGridRef>>;
