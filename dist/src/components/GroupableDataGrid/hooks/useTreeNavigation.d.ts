/**
 * useTreeNavigation Hook
 *
 * Implements ARIA treegrid keyboard navigation patterns
 * Follows W3C ARIA Authoring Practices Guide for treegrid
 */
import { KeyboardEvent } from 'react';
import { FlattenedNode, ExpansionState } from '../GroupableDataGrid.types';
import { HierarchyDataManager } from '../utils/HierarchyDataManager';
export interface TreeNavigationState {
    /** Currently focused node ID */
    focusedNodeId: string | null;
    /** Currently focused column index (for treegrid navigation) */
    focusedColumnIndex: number;
    /** Whether we're in navigation mode */
    isNavigationActive: boolean;
}
export interface UseTreeNavigationOptions {
    /** Flattened nodes for navigation */
    flattenedNodes: FlattenedNode<any>[];
    /** Expansion state controller */
    expansionState: ExpansionState;
    /** Hierarchy manager */
    hierarchyManager: HierarchyDataManager<any>;
    /** Number of columns */
    columnCount: number;
    /** Callback when focused node changes */
    onFocusChange?: (nodeId: string | null) => void;
    /** Callback when row is activated (Enter key) */
    onRowActivate?: (nodeId: string) => void;
    /** Whether to enable column navigation */
    enableColumnNavigation?: boolean;
}
export interface UseTreeNavigationResult extends TreeNavigationState {
    /** Focus a specific node */
    focusNode: (nodeId: string) => void;
    /** Handle keyboard events */
    handleKeyDown: (event: KeyboardEvent) => void;
    /** Move focus to next node */
    focusNext: () => void;
    /** Move focus to previous node */
    focusPrevious: () => void;
    /** Move focus to first node */
    focusFirst: () => void;
    /** Move focus to last visible node */
    focusLast: () => void;
    /** Move focus to parent node */
    focusParent: () => void;
    /** Expand focused node */
    expandFocused: () => void;
    /** Collapse focused node */
    collapseFocused: () => void;
    /** Toggle expansion of focused node */
    toggleFocused: () => void;
    /** Activate navigation mode */
    activateNavigation: () => void;
    /** Deactivate navigation mode */
    deactivateNavigation: () => void;
}
/**
 * Hook for ARIA treegrid keyboard navigation
 */
export declare function useTreeNavigation(options: UseTreeNavigationOptions): UseTreeNavigationResult;
/**
 * Helper hook for managing focus within a treegrid cell
 */
export declare function useCellFocus(nodeId: string, columnIndex: number, navigationState: TreeNavigationState): {
    isFocused: boolean;
    tabIndex: number;
    'aria-selected': boolean;
};
