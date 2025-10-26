/**
 * Sort Status Control Component Types
 */
import { ReactNode } from 'react';
/**
 * Individual sort configuration for a column
 */
export interface SortConfig {
    /** Unique identifier for the sort column */
    id: string;
    /** Display label for the sort column */
    label: string;
    /** Sort direction - ascending or descending */
    direction: 'asc' | 'desc';
    /** Priority order for multi-column sorting (0 = highest priority) */
    priority: number;
}
/**
 * Props for the SortStatusControl component
 */
export interface SortStatusControlProps {
    /** Current sort configuration array */
    sortConfig: SortConfig[];
    /** Callback when sort configuration changes */
    onSortChange: (newSortConfig: SortConfig[]) => void;
    /** Optional CSS class name for styling */
    className?: string;
    /** Optional description text when no sorts are active */
    emptyDescription?: ReactNode;
    /** Optional description text when sorts are active */
    activeDescription?: ReactNode;
    /** Show/hide the reset button */
    showReset?: boolean;
    /** Show/hide the help text */
    showHelp?: boolean;
    /** Maximum number of sorts allowed */
    maxSorts?: number;
    /** Disable all interactions */
    disabled?: boolean;
    /** ARIA label for the sort status region */
    ariaLabel?: string;
    /** Additional ARIA describedby IDs */
    ariaDescribedBy?: string;
}
/**
 * Internal event handlers for sort operations
 */
export interface SortStatusHandlers {
    /** Toggle sort direction for a specific sort */
    handleDirectionToggle: (sortId: string) => void;
    /** Move a sort up in priority */
    handleMoveUp: (sortId: string) => void;
    /** Move a sort down in priority */
    handleMoveDown: (sortId: string) => void;
    /** Remove a sort from the configuration */
    handleRemove: (sortId: string) => void;
    /** Reset all sorts */
    handleReset: () => void;
}
/**
 * Helper type for sort direction labels
 */
export type SortDirectionLabel = {
    asc: string;
    desc: string;
};
/**
 * Default sort direction labels
 */
export declare const DEFAULT_DIRECTION_LABELS: SortDirectionLabel;
/**
 * Utility type for creating new sort configs
 */
export type CreateSortConfig = Omit<SortConfig, 'priority'>;
/**
 * Utility function type for sorting the sort configs by priority
 */
export type SortConfigSorter = (configs: SortConfig[]) => SortConfig[];
/**
 * Helper function to create a new sort config
 */
export declare function createSortConfig(id: string, label: string, direction?: 'asc' | 'desc'): CreateSortConfig;
/**
 * Helper function to sort configs by priority
 */
export declare const sortByPriority: SortConfigSorter;
/**
 * Helper function to reassign priorities after reordering
 */
export declare function reassignPriorities(configs: SortConfig[]): SortConfig[];
/**
 * Helper function to validate sort configuration
 */
export declare function validateSortConfig(config: SortConfig): boolean;
/**
 * Helper function to find max priority in config array
 */
export declare function getMaxPriority(configs: SortConfig[]): number;
/**
 * Helper function to check if a sort can move up
 */
export declare function canMoveUp(sortId: string, configs: SortConfig[]): boolean;
/**
 * Helper function to check if a sort can move down
 */
export declare function canMoveDown(sortId: string, configs: SortConfig[]): boolean;
