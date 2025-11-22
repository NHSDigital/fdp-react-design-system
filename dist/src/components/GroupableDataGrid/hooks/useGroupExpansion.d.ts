/**
 * useGroupExpansion Hook
 *
 * Manages expansion/collapse state for grouped and tree data grids
 * Supports controlled and uncontrolled modes
 */
import { ExpansionState } from '../GroupableDataGrid.types';
import { HierarchyDataManager } from '../utils/HierarchyDataManager';
export interface UseGroupExpansionOptions {
    /** Initial expansion state */
    initialExpanded?: Set<string> | 'all' | 'none' | 'first' | string[];
    /** Controlled expansion state */
    expandedIds?: Set<string>;
    /** Callback when expansion changes */
    onExpansionChange?: (expandedIds: Set<string>) => void;
    /** Hierarchy data manager */
    hierarchyManager?: HierarchyDataManager<any>;
    /** Maximum depth to auto-expand */
    maxAutoExpandDepth?: number;
    /** Whether to persist expansion state to localStorage */
    persistKey?: string;
}
/**
 * Hook for managing group/tree expansion state
 */
export declare function useGroupExpansion(options?: UseGroupExpansionOptions): ExpansionState;
/**
 * Helper function to check if a node is expanded
 */
export declare function isNodeExpanded(id: string, expansionState: ExpansionState): boolean;
/**
 * Helper function to get expanded state for multiple nodes
 */
export declare function getExpandedStates(ids: string[], expansionState: ExpansionState): Map<string, boolean>;
/**
 * Helper function to expand node and all ancestors
 */
export declare function expandWithAncestors(id: string, hierarchyManager: HierarchyDataManager<any>, expansionState: ExpansionState): void;
/**
 * Helper function to expand all descendants of a node
 */
export declare function expandDescendants(id: string, hierarchyManager: HierarchyDataManager<any>, expansionState: ExpansionState, maxDepth?: number): void;
