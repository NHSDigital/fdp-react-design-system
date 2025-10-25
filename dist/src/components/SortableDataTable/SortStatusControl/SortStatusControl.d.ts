/**
 * Sort Status Control Component
 *
 * Displays and manages sort configuration for data tables with interactive tags
 * allowing users to view, reorder, toggle direction, and remove sorts.
 */
import React from 'react';
import { SortConfig } from '../AriaDataGridTypes';
import './SortStatusControl.scss';
/**
 * Column definition for labeling sorts
 */
export interface SortColumn {
    key: string;
    label: string;
}
/**
 * Props for the SortStatusControl component
 */
export interface SortStatusControlProps {
    /** Current sort configuration array */
    sortConfig: SortConfig[];
    /** Available columns for labeling sorts */
    columns: SortColumn[];
    /** Callback when sort configuration changes */
    onSortChange: (newSortConfig: SortConfig[]) => void;
    /** Optional CSS class name for styling */
    className?: string;
    /** Optional description text when no sorts are active */
    emptyDescription?: React.ReactNode;
    /** Optional description text when sorts are active */
    activeDescription?: React.ReactNode;
    /** Show/hide the reset button */
    showReset?: boolean;
    /** Show/hide the help text */
    showHelp?: boolean;
    /** Disable all interactions */
    disabled?: boolean;
    /** ARIA label for the sort status region */
    ariaLabel?: string;
    /** Additional ARIA describedby IDs */
    ariaDescribedBy?: string;
}
export declare const SortStatusControl: React.FC<SortStatusControlProps>;
