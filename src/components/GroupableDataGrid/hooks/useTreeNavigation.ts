/**
 * useTreeNavigation Hook
 * 
 * Implements ARIA treegrid keyboard navigation patterns
 * Follows W3C ARIA Authoring Practices Guide for treegrid
 */

import { useState, useCallback, useEffect, useRef, KeyboardEvent } from 'react';
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
export function useTreeNavigation(
  options: UseTreeNavigationOptions
): UseTreeNavigationResult {
  const {
    flattenedNodes,
    expansionState,
    hierarchyManager,
    columnCount,
    onFocusChange,
    onRowActivate,
    enableColumnNavigation = false,
  } = options;

  const [focusedNodeId, setFocusedNodeId] = useState<string | null>(null);
  const [focusedColumnIndex, setFocusedColumnIndex] = useState(0);
  const [isNavigationActive, setIsNavigationActive] = useState(false);

  // Track if we've auto-focused the first node
  const hasAutoFocused = useRef(false);

  // Auto-focus first node on mount if nodes exist
  useEffect(() => {
    if (!hasAutoFocused.current && flattenedNodes.length > 0 && !focusedNodeId) {
      setFocusedNodeId(flattenedNodes[0].id);
      hasAutoFocused.current = true;
    }
  }, [flattenedNodes, focusedNodeId]);

  // Find node index by ID
  const findNodeIndex = useCallback(
    (nodeId: string | null): number => {
      if (!nodeId) return -1;
      return flattenedNodes.findIndex(node => node.id === nodeId);
    },
    [flattenedNodes]
  );

  // Get current focused node
  const getFocusedNode = useCallback((): FlattenedNode<any> | null => {
    if (!focusedNodeId) return null;
    return flattenedNodes.find(node => node.id === focusedNodeId) || null;
  }, [focusedNodeId, flattenedNodes]);

  // Focus a specific node
  const focusNode = useCallback(
    (nodeId: string) => {
      setFocusedNodeId(nodeId);
      setFocusedColumnIndex(0); // Reset column index
      onFocusChange?.(nodeId);
    },
    [onFocusChange]
  );

  // Move focus to next node
  const focusNext = useCallback(() => {
    const currentIndex = findNodeIndex(focusedNodeId);
    if (currentIndex < flattenedNodes.length - 1) {
      focusNode(flattenedNodes[currentIndex + 1].id);
    }
  }, [focusedNodeId, flattenedNodes, findNodeIndex, focusNode]);

  // Move focus to previous node
  const focusPrevious = useCallback(() => {
    const currentIndex = findNodeIndex(focusedNodeId);
    if (currentIndex > 0) {
      focusNode(flattenedNodes[currentIndex - 1].id);
    }
  }, [focusedNodeId, flattenedNodes, findNodeIndex, focusNode]);

  // Move focus to first node
  const focusFirst = useCallback(() => {
    if (flattenedNodes.length > 0) {
      focusNode(flattenedNodes[0].id);
    }
  }, [flattenedNodes, focusNode]);

  // Move focus to last visible node
  const focusLast = useCallback(() => {
    if (flattenedNodes.length > 0) {
      focusNode(flattenedNodes[flattenedNodes.length - 1].id);
    }
  }, [flattenedNodes, focusNode]);

  // Move focus to parent node
  const focusParent = useCallback(() => {
    const currentNode = getFocusedNode();
    if (!currentNode || !currentNode.parentId) return;

    focusNode(currentNode.parentId);
  }, [getFocusedNode, focusNode]);

  // Expand focused node
  const expandFocused = useCallback(() => {
    if (!focusedNodeId) return;

    const node = getFocusedNode();
    if (node && node.isExpandable && !node.isExpanded) {
      expansionState.expand(focusedNodeId);
    }
  }, [focusedNodeId, getFocusedNode, expansionState]);

  // Collapse focused node
  const collapseFocused = useCallback(() => {
    if (!focusedNodeId) return;

    const node = getFocusedNode();
    if (node && node.isExpandable && node.isExpanded) {
      expansionState.collapse(focusedNodeId);
    } else if (node && node.parentId) {
      // If already collapsed, move to parent (ARIA treegrid pattern)
      focusParent();
    }
  }, [focusedNodeId, getFocusedNode, expansionState, focusParent]);

  // Toggle expansion of focused node
  const toggleFocused = useCallback(() => {
    if (!focusedNodeId) return;

    const node = getFocusedNode();
    if (node && node.isExpandable) {
      expansionState.toggle(focusedNodeId);
    }
  }, [focusedNodeId, getFocusedNode, expansionState]);

  // Activate navigation mode
  const activateNavigation = useCallback(() => {
    setIsNavigationActive(true);
  }, []);

  // Deactivate navigation mode
  const deactivateNavigation = useCallback(() => {
    setIsNavigationActive(false);
  }, []);

  // Handle keyboard events
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const { key, ctrlKey, metaKey } = event;

      // Modifier key shortcuts
      const isModified = ctrlKey || metaKey;

      switch (key) {
        case 'ArrowDown':
          event.preventDefault();
          focusNext();
          break;

        case 'ArrowUp':
          event.preventDefault();
          focusPrevious();
          break;

        case 'ArrowRight':
          event.preventDefault();
          if (enableColumnNavigation && !isModified) {
            // Move to next column
            if (focusedColumnIndex < columnCount - 1) {
              setFocusedColumnIndex(prev => prev + 1);
            }
          } else {
            // Expand node
            expandFocused();
          }
          break;

        case 'ArrowLeft':
          event.preventDefault();
          if (enableColumnNavigation && focusedColumnIndex > 0) {
            // Move to previous column
            setFocusedColumnIndex(prev => prev - 1);
          } else {
            // Collapse node or move to parent
            collapseFocused();
          }
          break;

        case 'Home':
          event.preventDefault();
          if (isModified) {
            // Ctrl+Home: focus first node
            focusFirst();
          } else {
            // Home: focus first column in current row
            setFocusedColumnIndex(0);
          }
          break;

        case 'End':
          event.preventDefault();
          if (isModified) {
            // Ctrl+End: focus last visible node
            focusLast();
          } else {
            // End: focus last column in current row
            setFocusedColumnIndex(columnCount - 1);
          }
          break;

        case 'Enter':
          event.preventDefault();
          if (focusedNodeId) {
            if (isNavigationActive) {
              // Activate the focused node
              onRowActivate?.(focusedNodeId);
            } else {
              // Enter navigation mode
              activateNavigation();
            }
          }
          break;

        case ' ': // Space
          event.preventDefault();
          toggleFocused();
          break;

        case 'Escape':
          event.preventDefault();
          if (isNavigationActive) {
            deactivateNavigation();
          } else if (focusedNodeId) {
            // Clear focus
            setFocusedNodeId(null);
            onFocusChange?.(null);
          }
          break;

        case '*': // Asterisk - expand all siblings
          event.preventDefault();
          {
            const currentNode = getFocusedNode();
            if (currentNode && currentNode.parentId) {
              const siblingIds = hierarchyManager.getSiblingIds(currentNode.id);
              siblingIds.forEach(id => {
                const node = flattenedNodes.find(n => n.id === id);
                if (node && node.isExpandable) {
                  expansionState.expand(id);
                }
              });
            }
          }
          break;

        default:
          // Type-ahead search could be implemented here
          break;
      }
    },
    [
      focusNext,
      focusPrevious,
      focusFirst,
      focusLast,
      expandFocused,
      collapseFocused,
      toggleFocused,
      activateNavigation,
      deactivateNavigation,
      focusedNodeId,
      focusedColumnIndex,
      columnCount,
      enableColumnNavigation,
      isNavigationActive,
      onRowActivate,
      onFocusChange,
      getFocusedNode,
      hierarchyManager,
      flattenedNodes,
      expansionState,
    ]
  );

  return {
    focusedNodeId,
    focusedColumnIndex,
    isNavigationActive,
    focusNode,
    handleKeyDown,
    focusNext,
    focusPrevious,
    focusFirst,
    focusLast,
    focusParent,
    expandFocused,
    collapseFocused,
    toggleFocused,
    activateNavigation,
    deactivateNavigation,
  };
}

/**
 * Helper hook for managing focus within a treegrid cell
 */
export function useCellFocus(nodeId: string, columnIndex: number, navigationState: TreeNavigationState) {
  const isFocused = navigationState.focusedNodeId === nodeId && 
                    navigationState.focusedColumnIndex === columnIndex;

  return {
    isFocused,
    tabIndex: isFocused ? 0 : -1,
    'aria-selected': isFocused,
  };
}
