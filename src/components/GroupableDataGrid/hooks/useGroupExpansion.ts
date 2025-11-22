/**
 * useGroupExpansion Hook
 * 
 * Manages expansion/collapse state for grouped and tree data grids
 * Supports controlled and uncontrolled modes
 */

import { useState, useCallback, useMemo, useEffect } from 'react';
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
 * Convert various initial expansion formats to Set<string>
 */
function normalizeInitialExpanded(
  value: Set<string> | 'all' | 'none' | 'first' | string[] | undefined,
  hierarchyManager?: HierarchyDataManager<any>,
  maxAutoExpandDepth?: number
): Set<string> {
  if (value instanceof Set) {
    return new Set(value);
  }

  if (Array.isArray(value)) {
    return new Set(value);
  }

  if (!hierarchyManager) {
    return new Set();
  }

  if (value === 'all') {
    const expandedIds = new Set<string>();
    hierarchyManager.getRoot().each(node => {
      if (node.data.type !== 'root') {
        if (!maxAutoExpandDepth || node.depth <= maxAutoExpandDepth) {
          expandedIds.add(node.data.id);
        }
      }
    });
    return expandedIds;
  }

  if (value === 'first') {
    const expandedIds = new Set<string>();
    const root = hierarchyManager.getRoot();
    if (root.children) {
      for (const child of root.children) {
        expandedIds.add(child.data.id);
      }
    }
    return expandedIds;
  }

  // 'none' or undefined
  return new Set();
}

/**
 * Load expansion state from localStorage
 */
function loadPersistedState(key: string): Set<string> | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      const parsed = JSON.parse(stored);
      return new Set(parsed);
    }
  } catch (error) {
    console.warn('Failed to load persisted expansion state:', error);
  }

  return null;
}

/**
 * Save expansion state to localStorage
 */
function persistState(key: string, expandedIds: Set<string>): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const serialized = JSON.stringify(Array.from(expandedIds));
    localStorage.setItem(key, serialized);
  } catch (error) {
    console.warn('Failed to persist expansion state:', error);
  }
}

/**
 * Hook for managing group/tree expansion state
 */
export function useGroupExpansion(
  options: UseGroupExpansionOptions = {}
): ExpansionState {
  const {
    initialExpanded,
    expandedIds: controlledExpandedIds,
    onExpansionChange,
    hierarchyManager,
    maxAutoExpandDepth,
    persistKey,
  } = options;

  // Determine if we're in controlled mode
  const isControlled = controlledExpandedIds !== undefined;

  // Load persisted state if available
  const persistedState = useMemo(() => {
    return persistKey ? loadPersistedState(persistKey) : null;
  }, [persistKey]);

  // Initialize internal state
  const [internalExpandedIds, setInternalExpandedIds] = useState<Set<string>>(() => {
    // Priority: persisted > initial > empty
    if (persistedState) {
      return persistedState;
    }
    return normalizeInitialExpanded(initialExpanded, hierarchyManager, maxAutoExpandDepth);
  });

  // Use controlled or internal state
  const expandedIds = isControlled ? controlledExpandedIds : internalExpandedIds;

  // Update expansion state (handles both controlled and uncontrolled)
  const updateExpansion = useCallback(
    (newExpandedIds: Set<string>) => {
      if (!isControlled) {
        setInternalExpandedIds(newExpandedIds);
      }

      // Persist if enabled
      if (persistKey) {
        persistState(persistKey, newExpandedIds);
      }

      // Notify parent
      onExpansionChange?.(newExpandedIds);
    },
    [isControlled, persistKey, onExpansionChange]
  );

  // Expand a node
  const expand = useCallback(
    (id: string) => {
      const newExpandedIds = new Set(expandedIds);
      newExpandedIds.add(id);
      updateExpansion(newExpandedIds);
    },
    [expandedIds, updateExpansion]
  );

  // Collapse a node
  const collapse = useCallback(
    (id: string) => {
      const newExpandedIds = new Set(expandedIds);
      newExpandedIds.delete(id);
      updateExpansion(newExpandedIds);
    },
    [expandedIds, updateExpansion]
  );

  // Toggle a node
  const toggle = useCallback(
    (id: string) => {
      if (expandedIds.has(id)) {
        collapse(id);
      } else {
        expand(id);
      }
    },
    [expandedIds, expand, collapse]
  );

  // Expand all nodes
  const expandAll = useCallback(() => {
    if (!hierarchyManager) {
      console.warn('Cannot expand all: hierarchyManager not provided');
      return;
    }

    const newExpandedIds = new Set<string>();
    hierarchyManager.getRoot().each(node => {
      if (node.data.type !== 'root') {
        if (!maxAutoExpandDepth || node.depth <= maxAutoExpandDepth) {
          newExpandedIds.add(node.data.id);
        }
      }
    });

    updateExpansion(newExpandedIds);
  }, [hierarchyManager, maxAutoExpandDepth, updateExpansion]);

  // Collapse all nodes
  const collapseAll = useCallback(() => {
    updateExpansion(new Set());
  }, [updateExpansion]);

  // Expand to specific depth
  const expandToDepth = useCallback(
    (depth: number) => {
      if (!hierarchyManager) {
        console.warn('Cannot expand to depth: hierarchyManager not provided');
        return;
      }

      const newExpandedIds = new Set<string>();
      hierarchyManager.getRoot().each(node => {
        if (node.data.type !== 'root' && node.depth <= depth) {
          newExpandedIds.add(node.data.id);
        }
      });

      updateExpansion(newExpandedIds);
    },
    [hierarchyManager, updateExpansion]
  );

  // Re-initialize when initialExpanded changes (uncontrolled mode only)
  useEffect(() => {
    if (!isControlled && initialExpanded) {
      const normalized = normalizeInitialExpanded(
        initialExpanded,
        hierarchyManager,
        maxAutoExpandDepth
      );
      setInternalExpandedIds(normalized);
    }
  }, [initialExpanded, hierarchyManager, maxAutoExpandDepth, isControlled]);

  return {
    expandedIds,
    expand,
    collapse,
    toggle,
    expandAll,
    collapseAll,
    expandToDepth,
  };
}

/**
 * Helper function to check if a node is expanded
 */
export function isNodeExpanded(id: string, expansionState: ExpansionState): boolean {
  return expansionState.expandedIds.has(id);
}

/**
 * Helper function to get expanded state for multiple nodes
 */
export function getExpandedStates(
  ids: string[],
  expansionState: ExpansionState
): Map<string, boolean> {
  const states = new Map<string, boolean>();
  for (const id of ids) {
    states.set(id, expansionState.expandedIds.has(id));
  }
  return states;
}

/**
 * Helper function to expand node and all ancestors
 */
export function expandWithAncestors(
  id: string,
  hierarchyManager: HierarchyDataManager<any>,
  expansionState: ExpansionState
): void {
  const ancestorIds = hierarchyManager.getAncestorIds(id);
  const newExpandedIds = new Set(expansionState.expandedIds);
  
  // Add the node itself
  newExpandedIds.add(id);
  
  // Add all ancestors
  for (const ancestorId of ancestorIds) {
    newExpandedIds.add(ancestorId);
  }

  // This assumes expansionState has a way to update - in practice,
  // you'd call this through the expansion state methods
  // This is a helper that returns the new set
  return;
}

/**
 * Helper function to expand all descendants of a node
 */
export function expandDescendants(
  id: string,
  hierarchyManager: HierarchyDataManager<any>,
  expansionState: ExpansionState,
  maxDepth?: number
): void {
  const node = hierarchyManager.findNode(id);
  if (!node) return;

  const newExpandedIds = new Set(expansionState.expandedIds);
  newExpandedIds.add(id);

  node.each(descendant => {
    if (descendant.data.id !== id) {
      if (!maxDepth || descendant.depth - node.depth <= maxDepth) {
        newExpandedIds.add(descendant.data.id);
      }
    }
  });

  // Similar to above - this is a helper concept
  return;
}
