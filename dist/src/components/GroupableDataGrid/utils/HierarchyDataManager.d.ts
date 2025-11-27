/**
 * Hierarchy Data Manager
 *
 * Manages hierarchical data structures using d3-hierarchy
 * Supports both grouping and tree modes
 */
import { HierarchyNode } from 'd3-hierarchy';
import { GroupConfig, TreeConfig, FlattenedNode } from '../GroupableDataGrid.types';
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
 * Hierarchy Data Manager Class
 *
 * Manages hierarchical data transformations and state
 */
export declare class HierarchyDataManager<T = any> {
    private hierarchyRoot;
    private mode;
    constructor(data: T[], mode: 'grouped' | 'tree', config: GroupConfig<T> | TreeConfig<T>);
    /**
     * Get the hierarchy root
     */
    getRoot(): HierarchyNode<HierarchyNodeData<T>>;
    /**
     * Get flattened nodes for rendering
     */
    getFlattenedNodes(expandedIds: Set<string>): FlattenedNode<T>[];
    /**
     * Find a node by ID
     */
    findNode(id: string): HierarchyNode<HierarchyNodeData<T>> | undefined;
    /**
     * Get all descendant node IDs
     */
    getDescendantIds(id: string): string[];
    /**
     * Get all ancestor node IDs
     */
    getAncestorIds(id: string): string[];
    /**
     * Get siblings of a node
     */
    getSiblingIds(id: string): string[];
    /**
     * Get total item count
     */
    getTotalCount(): number;
    /**
     * Get maximum depth
     */
    getMaxDepth(): number;
    /**
     * Get aggregations for a node
     */
    getAggregations(id: string): Record<string, any> | undefined;
    /**
     * Get global (root) aggregations
     */
    getGlobalAggregations(): Record<string, any>;
}
/**
 * Helper function to create expansion state from config
 */
export declare function createInitialExpansionState<T>(manager: HierarchyDataManager<T>, initialExpanded: 'all' | 'none' | 'first' | string[] | undefined, maxDepth?: number): Set<string>;
export {};
