/**
 * GroupableDataGrid Types
 * 
 * Comprehensive type definitions for a unified table component supporting:
 * - Flat table display
 * - Row grouping with aggregations
 * - Hierarchical tree structures
 * - Pivot table cross-tabulation (future)
 * - Drag-to-regroup (future infrastructure)
 * - Inline editing (future infrastructure)
 */

import { ResponsiveDataGridProps } from '../ResponsiveDataGrid/ResponsiveDataGridTypes';
import { ColumnDefinition } from '../SortableDataTable/AriaDataGridTypes';
import { HierarchyNode } from 'd3-hierarchy';
import * as React from 'react';

// ============================================================================
// CORE MODES
// ============================================================================

/**
 * Display modes for the groupable data grid
 */
export type GroupableMode = 'flat' | 'grouped' | 'tree' | 'pivot';

/**
 * Mobile display strategy
 */
export type MobileDisplayStrategy = 'scroll' | 'cards' | 'auto';

// ============================================================================
// SORTING
// ============================================================================

/**
 * Sort configuration for a column
 */
export interface SortConfig {
  /** Column key to sort by */
  key: string;
  
  /** Sort direction */
  direction: 'asc' | 'desc';
}

// ============================================================================
// AGGREGATION SYSTEM
// ============================================================================

/**
 * Built-in aggregation functions
 */
export type AggregationType = 
  | 'sum'        // Sum of numeric values
  | 'avg'        // Average of numeric values
  | 'count'      // Count of items
  | 'min'        // Minimum value
  | 'max'        // Maximum value
  | 'first'      // First value in group
  | 'last'       // Last value in group
  | 'concat'     // Concatenate string values
  | 'countUnique' // Count unique values
  | 'custom';    // Custom aggregation function

/**
 * Configuration for a single aggregation
 */
export interface AggregationConfig {
  /** Column key to aggregate */
  column: string;
  
  /** Type of aggregation to perform */
  type: AggregationType;
  
  /** Custom aggregation function (required if type is 'custom') */
  customFn?: (values: any[], items: any[]) => any;
  
  /** Label for the aggregation (defaults to column label + type) */
  label?: string;
  
  /** Format function for displaying the aggregated value */
  format?: (value: any) => React.ReactNode;
  
  /** Whether to show this aggregation in group headers */
  showInHeader?: boolean;
  
  /** Whether to show this aggregation in a summary footer */
  showInFooter?: boolean;
}

/**
 * Calculated field definition for pivot tables and advanced scenarios
 */
export interface CalculatedField {
  /** Unique key for the calculated field */
  key: string;
  
  /** Display label */
  label: string;
  
  /** Calculation function */
  calculate: (row: any, allData: any[]) => any;
  
  /** Optional dependencies (column keys that this field depends on) */
  dependencies?: string[];
  
  /** Format function for display */
  format?: (value: any) => React.ReactNode;
  
  /** Whether this field can be used for grouping */
  groupable?: boolean;
  
  /** Whether this field can be aggregated */
  aggregatable?: boolean;
}

// ============================================================================
// GROUPING CONFIGURATION
// ============================================================================

/**
 * Function to extract group key from a data item
 */
export type GroupByFunction<T> = (item: T) => string | number;

/**
 * Single-level group configuration
 */
export interface GroupLevel<T = any> {
  /** Column key or function to group by */
  groupBy: keyof T | GroupByFunction<T>;
  
  /** Label for this grouping level (for UI display) */
  label?: string;
  
  /** Aggregations to compute for this level */
  aggregations?: AggregationConfig[];
  
  /** Whether groups at this level are expanded by default */
  expandedByDefault?: boolean;
  
  /** Custom renderer for group headers at this level */
  headerRenderer?: (group: GroupHeaderContext<T>) => React.ReactNode;
  
  /** Sort direction for groups at this level */
  sortDirection?: 'asc' | 'desc';
  
  /** Custom sort function for groups */
  sortFn?: (a: GroupNode<T>, b: GroupNode<T>) => number;
}

/**
 * Multi-level grouping configuration
 */
export interface GroupConfig<T = any> {
  /** 
   * Grouping levels - can be single or array for multi-level grouping 
   * e.g., ['ward', 'priority', 'date'] for 3-level grouping
   */
  levels: GroupLevel<T>[];
  
  /** Global aggregations (computed across all data) */
  globalAggregations?: AggregationConfig[];
  
  /** Whether to show aggregation summary footer */
  showSummaryFooter?: boolean;
  
  /** Whether to allow users to collapse/expand all groups at once */
  allowCollapseAll?: boolean;
  
  /** Initial expansion state for groups */
  initialExpanded?: 'all' | 'none' | 'first' | string[]; // array of group IDs
  
  /** Maximum depth to auto-expand (for multi-level groups) */
  maxAutoExpandDepth?: number;
  
  // Future: drag-to-regroup infrastructure
  /** Whether to allow drag-and-drop reordering of group levels (future) */
  allowRegroup?: boolean;
  
  /** Callback when group levels are reordered (future) */
  onRegroupLevels?: (newLevels: GroupLevel<T>[]) => void;
}

/**
 * Context passed to group header renderers
 */
export interface GroupHeaderContext<T = any> {
  /** The group node */
  node: GroupNode<T>;
  
  /** Nesting level (0-based) */
  level: number;
  
  /** Whether this group is expanded */
  isExpanded: boolean;
  
  /** Function to toggle expansion */
  toggleExpansion: () => void;
  
  /** Computed aggregations for this group */
  aggregations: Record<string, any>;
  
  /** Number of items in this group (including nested) */
  totalCount: number;
  
  /** Number of direct children */
  childCount: number;
}

// ============================================================================
// TREE CONFIGURATION
// ============================================================================

/**
 * Configuration for hierarchical tree display
 */
export interface TreeConfig<T = any> {
  /** Function to get parent ID from a data item (for flat data) */
  getParentId?: (item: T) => string | null;
  
  /** Function to get unique ID from a data item */
  getId: (item: T) => string;
  
  /** Root node ID(s) - items without parent or with these parent IDs are roots */
  rootIds?: string[];
  
  /** Aggregations to compute for tree nodes */
  aggregations?: AggregationConfig[];
  
  /** Whether to show tree connector lines */
  showConnectors?: boolean;
  
  /** Connector style */
  connectorStyle?: 'solid' | 'dashed' | 'dotted';
  
  /** Whether nodes are expanded by default */
  expandedByDefault?: boolean;
  
  /** Maximum depth to auto-expand */
  maxAutoExpandDepth?: number;
  
  /** Custom renderer for tree nodes */
  nodeRenderer?: (context: TreeNodeContext<T>) => React.ReactNode;
  
  /** Whether to show aggregations of child values at parent nodes */
  showChildAggregations?: boolean;
  
  /** Indentation per level (in rem) */
  indentSize?: number;
}

/**
 * Context passed to tree node renderers
 */
export interface TreeNodeContext<T = any> {
  /** The tree node */
  node: TreeNode<T>;
  
  /** Depth in the tree (0-based) */
  depth: number;
  
  /** Whether this node is expanded */
  isExpanded: boolean;
  
  /** Function to toggle expansion */
  toggleExpansion: () => void;
  
  /** Whether this node has children */
  hasChildren: boolean;
  
  /** Computed aggregations (if enabled) */
  aggregations?: Record<string, any>;
  
  /** Path from root to this node */
  path: TreeNode<T>[];
}

// ============================================================================
// PIVOT CONFIGURATION (Future)
// ============================================================================

/**
 * Pivot table configuration for cross-tabulation
 */
export interface PivotConfig<T = any> {
  /** Row dimension(s) - fields to use as row headers */
  rowDimensions: (keyof T | CalculatedField)[];
  
  /** Column dimension(s) - fields to use as column headers */
  columnDimensions: (keyof T | CalculatedField)[];
  
  /** Value field(s) to display in cells */
  measures: PivotMeasure<T>[];
  
  /** Whether to show row totals */
  showRowTotals?: boolean;
  
  /** Whether to show column totals */
  showColumnTotals?: boolean;
  
  /** Whether to show grand total */
  showGrandTotal?: boolean;
  
  /** Default aggregation for measures */
  defaultAggregation?: AggregationType;
  
  /** Whether to allow drill-down */
  allowDrillDown?: boolean;
  
  /** Callback for drill-down action */
  onDrillDown?: (context: PivotDrillDownContext<T>) => void;
}

/**
 * Measure configuration for pivot tables
 */
export interface PivotMeasure<T = any> {
  /** Field to measure */
  field: keyof T | CalculatedField;
  
  /** Aggregation type */
  aggregation: AggregationType;
  
  /** Custom aggregation function */
  customAggregation?: (values: any[]) => any;
  
  /** Label for this measure */
  label?: string;
  
  /** Format function */
  format?: (value: any) => React.ReactNode;
}

/**
 * Context for pivot drill-down
 */
export interface PivotDrillDownContext<T = any> {
  /** Row dimension values */
  rowValues: Record<string, any>;
  
  /** Column dimension values */
  columnValues: Record<string, any>;
  
  /** Raw data items that make up this cell */
  items: T[];
}

// ============================================================================
// DATA STRUCTURES
// ============================================================================

/**
 * Enhanced group node using D3 hierarchy
 */
export interface GroupNode<T = any> {
  /** Unique identifier for this group */
  id: string;
  
  /** Group key value */
  key: string | number;
  
  /** Display label for this group */
  label: string;
  
  /** Level in the grouping hierarchy (0-based) */
  level: number;
  
  /** Raw data items in this group (direct children only) */
  items: T[];
  
  /** Child groups */
  children?: GroupNode<T>[];
  
  /** Computed aggregations */
  aggregations: Record<string, any>;
  
  /** Total count including nested items */
  totalCount: number;
  
  /** Whether this group is currently expanded */
  isExpanded?: boolean;
  
  /** Parent group (null for top-level) */
  parent?: GroupNode<T> | null;
}

/**
 * Tree node structure
 */
export interface TreeNode<T = any> {
  /** Unique identifier */
  id: string;
  
  /** The actual data item */
  data: T;
  
  /** Child nodes */
  children?: TreeNode<T>[];
  
  /** Parent node reference */
  parent?: TreeNode<T> | null;
  
  /** Depth in tree */
  depth: number;
  
  /** Whether this node is expanded */
  isExpanded?: boolean;
  
  /** Computed aggregations from children */
  aggregations?: Record<string, any>;
}

/**
 * Flattened node for rendering (combines group/tree nodes)
 */
export interface FlattenedNode<T = any> {
  /** Unique ID */
  id: string;
  
  /** Type of node */
  type: 'group' | 'item' | 'tree-node';
  
  /** Display level/depth */
  level: number;
  
  /** Whether this is expandable */
  isExpandable: boolean;
  
  /** Whether this is expanded */
  isExpanded: boolean;
  
  /** The actual data (for item/tree-node types) */
  data?: T;
  
  /** Group metadata (for group type) */
  groupMetadata?: {
    key: string | number;
    label: string;
    aggregations: Record<string, any>;
    itemCount: number;
  };
  
  /** Parent node ID */
  parentId?: string;
  
  /** Path from root (array of IDs) */
  path: string[];
}

// ============================================================================
// INTERACTION INFRASTRUCTURE
// ============================================================================

/**
 * Expansion state management
 */
export interface ExpansionState {
  /** Set of expanded node IDs */
  expandedIds: Set<string>;
  
  /** Expand a node */
  expand: (id: string) => void;
  
  /** Collapse a node */
  collapse: (id: string) => void;
  
  /** Toggle a node */
  toggle: (id: string) => void;
  
  /** Expand all nodes */
  expandAll: () => void;
  
  /** Collapse all nodes */
  collapseAll: () => void;
  
  /** Expand to specific depth */
  expandToDepth: (depth: number) => void;
}

/**
 * Selection state for inline editing (future)
 */
export interface SelectionState {
  /** Currently selected cell */
  selectedCell?: {
    rowId: string;
    columnKey: string;
  };
  
  /** Currently editing cell */
  editingCell?: {
    rowId: string;
    columnKey: string;
  };
  
  /** Select a cell */
  selectCell: (rowId: string, columnKey: string) => void;
  
  /** Start editing a cell */
  startEditing: (rowId: string, columnKey: string) => void;
  
  /** Stop editing */
  stopEditing: () => void;
  
  /** Update cell value */
  updateValue: (rowId: string, columnKey: string, value: any) => void;
}

/**
 * Drag-and-drop state for reordering (future)
 */
export interface DragDropState {
  /** Currently dragged group level index */
  draggedLevelIndex?: number;
  
  /** Current drop target index */
  dropTargetIndex?: number;
  
  /** Start dragging a level */
  startDrag: (levelIndex: number) => void;
  
  /** Update drop target */
  updateDropTarget: (targetIndex: number) => void;
  
  /** Complete the drop */
  completeDrop: () => void;
  
  /** Cancel drag operation */
  cancelDrag: () => void;
}

// ============================================================================
// MAIN COMPONENT PROPS
// ============================================================================

/**
 * Props for the GroupableDataGrid component
 */
export interface GroupableDataGridProps<T = any> extends Omit<ResponsiveDataGridProps<T>, 'tabPanels'> {
  /** Display mode */
  mode: GroupableMode;
  
  /** Raw data array */
  data: T[];
  
  /** Column definitions (same as ResponsiveDataGrid) */
  columns: ColumnDefinition[];
  
  /** Group configuration (required for 'grouped' mode) */
  groupConfig?: GroupConfig<T>;
  
  /** Tree configuration (required for 'tree' mode) */
  treeConfig?: TreeConfig<T>;
  
  /** Pivot configuration (required for 'pivot' mode) */
  pivotConfig?: PivotConfig<T>;
  
  /** Calculated fields */
  calculatedFields?: CalculatedField[];
  
  /** Initial expansion state */
  initialExpanded?: Set<string> | 'all' | 'none';
  
  /** Controlled expansion state */
  expandedIds?: Set<string>;
  
  /** Callback when expansion changes */
  onExpansionChange?: (expandedIds: Set<string>) => void;
  
  /** Whether to enable virtualization for large datasets */
  enableVirtualization?: boolean;
  
  /** Virtual scroll configuration */
  virtualizationConfig?: {
    /** Estimated row height for virtualization */
    estimatedRowHeight?: number;
    
    /** Overscan count (number of items to render outside viewport) */
    overscan?: number;
  };
  
  /** Callback when data is modified (future: inline editing) */
  onDataChange?: (data: T[]) => void;
  
  /** Whether to enable inline editing (future) */
  enableInlineEditing?: boolean;
  
  /** Callback for cell edit start (future) */
  onCellEditStart?: (rowId: string, columnKey: string, currentValue: any) => void;
  
  /** Callback for cell edit complete (future) */
  onCellEditComplete?: (rowId: string, columnKey: string, newValue: any) => void;
  
  // ============================================================================
  // ROW SELECTION
  // ============================================================================
  
  /** Currently selected row (by data item reference) */
  selectedRow?: T | null;
  
  /** Callback when row selection changes */
  onGlobalRowSelectionChange?: (row: T | null) => void;
  
  /** Callback when a row is clicked */
  onRowClick?: (row: T, event: React.MouseEvent) => void;
  
  // ============================================================================
  // SORTING
  // ============================================================================
  
  /** Current sort configuration */
  sortConfig?: SortConfig[];
  
  /** Callback when sort changes */
  onSortChange?: (sortConfig: SortConfig[]) => void;
  
  /** Whether to enable multi-column sorting */
  enableMultiSort?: boolean;
  
  /** Whether to show group/tree controls */
  showControls?: boolean;
  
  /** Custom controls renderer */
  controlsRenderer?: (context: ControlsContext<T>) => React.ReactNode;
  
  /** Loading state */
  isLoading?: boolean;
  
  /** Error state */
  error?: string | null;
  
  /** Test ID */
  'data-testid'?: string;
  
  /** Mobile display strategy: 'scroll' (horizontal scroll), 'cards' (card layout), or 'auto' (cards < 768px, scroll >= 768px) */
  mobileDisplay?: MobileDisplayStrategy;
  
  /** Breakpoint for mobile card view (default: 768px) */
  mobileBreakpoint?: number;
}

/**
 * Context for controls renderer
 */
export interface ControlsContext<T = any> {
  /** Current mode */
  mode: GroupableMode;
  
  /** Expansion controls */
  expansion: ExpansionState;
  
  /** Total item count */
  totalItems: number;
  
  /** Visible item count (after filtering/grouping) */
  visibleItems: number;
  
  /** Current group levels (if in grouped mode) */
  groupLevels?: GroupLevel<T>[];
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

/**
 * Result of data processing
 */
export interface ProcessedData<T = any> {
  /** Flattened nodes for rendering */
  flattenedNodes: FlattenedNode<T>[];
  
  /** Total count of data items */
  totalCount: number;
  
  /** Hierarchy root (for tree/group modes) */
  hierarchyRoot?: HierarchyNode<any>;
  
  /** Global aggregations */
  globalAggregations?: Record<string, any>;
  
  /** Metadata about the processing */
  metadata: {
    mode: GroupableMode;
    groupLevels?: number;
    treeDepth?: number;
    hasVirtualization: boolean;
  };
}

/**
 * Export format options
 */
export type ExportFormat = 'csv' | 'json' | 'excel' | 'json-hierarchy';

/**
 * Export configuration
 */
export interface ExportConfig {
  /** Format to export */
  format: ExportFormat;
  
  /** Whether to include aggregations */
  includeAggregations?: boolean;
  
  /** Whether to preserve hierarchy structure */
  preserveHierarchy?: boolean;
  
  /** Custom filename */
  filename?: string;
}
