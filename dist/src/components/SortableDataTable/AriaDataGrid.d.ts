import React from "react";
import { AriaDataGridProps } from "./AriaDataGridTypes";
import "./AriaTabsDataGrid.scss";
/**
 * ARIA-compliant Data Grid Component
 * Provides comprehensive keyboard navigation and ARIA compliance for data tables
 * Following react-aria patterns with hierarchical navigation
 */
export declare const AriaDataGrid: React.ForwardRefExoticComponent<AriaDataGridProps & React.RefAttributes<HTMLTableElement>>;
export default AriaDataGrid;
