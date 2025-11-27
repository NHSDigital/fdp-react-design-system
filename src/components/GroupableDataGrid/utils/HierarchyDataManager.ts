/**
 * Hierarchy Data Manager
 * 
 * Manages hierarchical data structures using d3-hierarchy
 * Supports both grouping and tree modes
 */

import { hierarchy, HierarchyNode } from 'd3-hierarchy';
import {
  GroupConfig,
  TreeConfig,
  FlattenedNode,
  GroupLevel,
  GroupByFunction,
} from '../GroupableDataGrid.types';
import { applyAggregations } from './aggregations';

/**
 * Internal node structure for d3-hierarchy
 */
interface HierarchyNodeData<T = any> {
  id: string;
  type: 'root' | 'group' | 'item';
  level: number;
  key?: string | number;
  label?: string;
  data?: T;
  items?: T[];
  aggregations?: Record<string, any>;
  children?: HierarchyNodeData<T>[];
}

/**
 * Group items by a key function or field
 */
function groupBy<T>(
  items: T[],
  groupByFn: keyof T | GroupByFunction<T>
): Map<string | number, T[]> {
  const groups = new Map<string | number, T[]>();

  for (const item of items) {
    const key = typeof groupByFn === 'function' 
      ? groupByFn(item) 
      : item[groupByFn] as string | number;

    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(item);
  }

  return groups;
}

/**
 * Create a label for a group key
 */
function createGroupLabel(key: string | number, level: GroupLevel<any>): string {
  if (level.label) {
    return `${level.label}: ${key}`;
  }
  return String(key);
}

/**
 * Build grouped hierarchy from flat data
 */
function buildGroupedHierarchy<T>(
  data: T[],
  config: GroupConfig<T>
): HierarchyNodeData<T> {
  const { levels } = config;

  // Recursive function to build hierarchy levels
  function buildLevel(
    items: T[],
    levelIndex: number,
    parentId: string
  ): HierarchyNodeData<T>[] {
    if (levelIndex >= levels.length) {
      // Leaf level - create item nodes
      return items.map((item, idx) => ({
        id: `${parentId}-item-${idx}`,
        type: 'item' as const,
        level: levelIndex,
        data: item,
        items: [item],
      }));
    }

    const level = levels[levelIndex];
    const groups = groupBy(items, level.groupBy);
    const children: HierarchyNodeData<T>[] = [];

    // Sort groups if needed
    let sortedGroups = Array.from(groups.entries());
    if (level.sortDirection) {
      sortedGroups.sort((a, b) => {
        const dir = level.sortDirection === 'asc' ? 1 : -1;
        return dir * (String(a[0]).localeCompare(String(b[0])));
      });
    }

    for (const [key, groupItems] of sortedGroups) {
      const groupId = `${parentId}-${levelIndex}-${key}`;
      const childNodes = buildLevel(groupItems, levelIndex + 1, groupId);

      // Compute aggregations for this group
      const aggregations = level.aggregations
        ? applyAggregations(level.aggregations, groupItems)
        : {};

      children.push({
        id: groupId,
        type: 'group',
        level: levelIndex,
        key,
        label: createGroupLabel(key, level),
        items: groupItems,
        aggregations,
        children: childNodes,
      });
    }

    return children;
  }

  // Build the root node
  const children = buildLevel(data, 0, 'root');

  // Compute global aggregations
  const globalAggregations = config.globalAggregations
    ? applyAggregations(config.globalAggregations, data)
    : {};

  return {
    id: 'root',
    type: 'root',
    level: -1,
    items: data,
    aggregations: globalAggregations,
    children,
  };
}

/**
 * Build tree hierarchy from flat data with parent-child relationships
 */
function buildTreeHierarchy<T>(
  data: T[],
  config: TreeConfig<T>
): HierarchyNodeData<T> {
  const { getId, getParentId, rootIds = [] } = config;

  // Create a map of id -> item for quick lookup
  const itemMap = new Map<string, T>();
  for (const item of data) {
    const id = getId(item);
    itemMap.set(id, item);
  }

  // Build node map
  const nodeMap = new Map<string, HierarchyNodeData<T>>();

  function buildNode(item: T, depth: number = 0): HierarchyNodeData<T> {
    const id = getId(item);

    // Check if we already built this node (cycle detection)
    if (nodeMap.has(id)) {
      return nodeMap.get(id)!;
    }

    const node: HierarchyNodeData<T> = {
      id,
      type: 'item',
      level: depth,
      data: item,
      items: [item],
      children: [],
    };

    nodeMap.set(id, node);

    // Find children
    const children: T[] = [];
    for (const candidate of data) {
      const parentId = getParentId?.(candidate);
      if (parentId === id) {
        children.push(candidate);
      }
    }

    // Build child nodes
    if (children.length > 0) {
      node.children = children.map(child => buildNode(child, depth + 1));

      // Compute aggregations if enabled
      if (config.aggregations && config.showChildAggregations) {
        const allDescendantItems = collectDescendantItems(node);
        node.aggregations = applyAggregations(config.aggregations, allDescendantItems);
      }
    }

    return node;
  }

  // Find root items
  const rootItems: T[] = [];
  for (const item of data) {
    const parentId = getParentId?.(item);
    const isRoot = !parentId || rootIds.includes(parentId);
    if (isRoot) {
      rootItems.push(item);
    }
  }

  // Build root children
  const children = rootItems.map(item => buildNode(item, 0));

  return {
    id: 'root',
    type: 'root',
    level: -1,
    items: data,
    children,
  };
}

/**
 * Collect all descendant items from a node
 */
function collectDescendantItems<T>(node: HierarchyNodeData<T>): T[] {
  const items: T[] = [...(node.items || [])];

  if (node.children) {
    for (const child of node.children) {
      items.push(...collectDescendantItems(child));
    }
  }

  return items;
}

/**
 * Flatten hierarchy for rendering
 */
function flattenHierarchy<T>(
  hierarchyRoot: HierarchyNode<HierarchyNodeData<T>>,
  expandedIds: Set<string>,
  mode: 'grouped' | 'tree'
): FlattenedNode<T>[] {
  const flattened: FlattenedNode<T>[] = [];

  function traverse(node: HierarchyNode<HierarchyNodeData<T>>) {
    const nodeData = node.data;

    // Skip root node
    if (nodeData.type === 'root') {
      if (node.children) {
        for (const child of node.children) {
          traverse(child);
        }
      }
      return;
    }

    const isExpanded = expandedIds.has(nodeData.id);
    const hasChildren = (node.children?.length || 0) > 0;

    if (nodeData.type === 'group') {
      // Group node
      flattened.push({
        id: nodeData.id,
        type: 'group',
        level: nodeData.level,
        isExpandable: hasChildren,
        isExpanded,
        groupMetadata: {
          key: nodeData.key!,
          label: nodeData.label!,
          aggregations: nodeData.aggregations || {},
          itemCount: nodeData.items?.length || 0,
        },
        parentId: node.parent?.data.id !== 'root' ? node.parent?.data.id : undefined,
        path: getNodePath(node),
      });

      // Add children if expanded
      if (isExpanded && node.children) {
        for (const child of node.children) {
          traverse(child);
        }
      }
    } else if (nodeData.type === 'item') {
      // Item/tree node
      if (mode === 'tree' && hasChildren) {
        // Tree node with children
        flattened.push({
          id: nodeData.id,
          type: 'tree-node',
          level: nodeData.level,
          isExpandable: true,
          isExpanded,
          data: nodeData.data,
          parentId: node.parent?.data.id !== 'root' ? node.parent?.data.id : undefined,
          path: getNodePath(node),
        });

        // Add children if expanded
        if (isExpanded && node.children) {
          for (const child of node.children) {
            traverse(child);
          }
        }
      } else {
        // Leaf item
        flattened.push({
          id: nodeData.id,
          type: mode === 'tree' ? 'tree-node' : 'item',
          level: nodeData.level,
          isExpandable: hasChildren,
          isExpanded: false,
          data: nodeData.data,
          parentId: node.parent?.data.id !== 'root' ? node.parent?.data.id : undefined,
          path: getNodePath(node),
        });
      }
    }
  }

  traverse(hierarchyRoot);
  return flattened;
}

/**
 * Get path from root to node (array of IDs)
 */
function getNodePath(node: HierarchyNode<HierarchyNodeData<any>>): string[] {
  const path: string[] = [];
  let current: HierarchyNode<HierarchyNodeData<any>> | null = node;

  while (current && current.data.type !== 'root') {
    path.unshift(current.data.id);
    current = current.parent;
  }

  return path;
}

/**
 * Hierarchy Data Manager Class
 * 
 * Manages hierarchical data transformations and state
 */
export class HierarchyDataManager<T = any> {
  private hierarchyRoot: HierarchyNode<HierarchyNodeData<T>>;
  private mode: 'grouped' | 'tree';

  constructor(
    data: T[],
    mode: 'grouped' | 'tree',
    config: GroupConfig<T> | TreeConfig<T>
  ) {
    this.mode = mode;
    // config will be stored when implementing dynamic regrouping

    // Build hierarchy based on mode
    const rootData = mode === 'grouped'
      ? buildGroupedHierarchy(data, config as GroupConfig<T>)
      : buildTreeHierarchy(data, config as TreeConfig<T>);

    this.hierarchyRoot = hierarchy(rootData);
  }

  /**
   * Get the hierarchy root
   */
  getRoot(): HierarchyNode<HierarchyNodeData<T>> {
    return this.hierarchyRoot;
  }

  /**
   * Get flattened nodes for rendering
   */
  getFlattenedNodes(expandedIds: Set<string>): FlattenedNode<T>[] {
    return flattenHierarchy(this.hierarchyRoot, expandedIds, this.mode);
  }

  /**
   * Find a node by ID
   */
  findNode(id: string): HierarchyNode<HierarchyNodeData<T>> | undefined {
    return this.hierarchyRoot.find(node => node.data.id === id);
  }

  /**
   * Get all descendant node IDs
   */
  getDescendantIds(id: string): string[] {
    const node = this.findNode(id);
    if (!node) return [];

    const ids: string[] = [];
    node.each(descendant => {
      if (descendant.data.id !== id) {
        ids.push(descendant.data.id);
      }
    });

    return ids;
  }

  /**
   * Get all ancestor node IDs
   */
  getAncestorIds(id: string): string[] {
    const node = this.findNode(id);
    if (!node) return [];

    const ids: string[] = [];
    let current = node.parent;

    while (current && current.data.type !== 'root') {
      ids.push(current.data.id);
      current = current.parent;
    }

    return ids;
  }

  /**
   * Get siblings of a node
   */
  getSiblingIds(id: string): string[] {
    const node = this.findNode(id);
    if (!node || !node.parent) return [];

    return (node.parent.children || [])
      .filter(sibling => sibling.data.id !== id)
      .map(sibling => sibling.data.id);
  }

  /**
   * Get total item count
   */
  getTotalCount(): number {
    return this.hierarchyRoot.data.items?.length || 0;
  }

  /**
   * Get maximum depth
   */
  getMaxDepth(): number {
    return this.hierarchyRoot.height;
  }

  /**
   * Get aggregations for a node
   */
  getAggregations(id: string): Record<string, any> | undefined {
    const node = this.findNode(id);
    return node?.data.aggregations;
  }

  /**
   * Get global (root) aggregations
   */
  getGlobalAggregations(): Record<string, any> {
    return this.hierarchyRoot.data.aggregations || {};
  }
}

/**
 * Helper function to create expansion state from config
 */
export function createInitialExpansionState<T>(
  manager: HierarchyDataManager<T>,
  initialExpanded: 'all' | 'none' | 'first' | string[] | undefined,
  maxDepth?: number
): Set<string> {
  const expandedIds = new Set<string>();

  if (initialExpanded === 'all') {
    // Expand all nodes up to maxDepth
    manager.getRoot().each(node => {
      if (node.data.type !== 'root') {
        if (!maxDepth || node.depth <= maxDepth) {
          expandedIds.add(node.data.id);
        }
      }
    });
  } else if (initialExpanded === 'first') {
    // Expand only first-level nodes
    const root = manager.getRoot();
    if (root.children) {
      for (const child of root.children) {
        expandedIds.add(child.data.id);
      }
    }
  } else if (Array.isArray(initialExpanded)) {
    // Use provided IDs
    for (const id of initialExpanded) {
      expandedIds.add(id);
    }
  }
  // 'none' or undefined - return empty set

  return expandedIds;
}
