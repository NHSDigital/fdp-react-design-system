/**
 * GroupableDataGrid Component Exports
 * 
 * Phase 1: Core Infrastructure (Complete)
 * - Type system
 * - Aggregation engine
 * - D3 hierarchy manager
 * - Expansion state hook
 * - Tree navigation hook
 * - Main component with sub-components
 * - SCSS styles
 */

// Main component
export { GroupableDataGrid } from './GroupableDataGrid';

// Sub-components
export { GroupHeader } from './components/GroupHeader';
export { TreeNode as TreeNodeComponent } from './components/TreeNode';

// Type exports
export type {
  // Main props
  GroupableDataGridProps,
  GroupableMode,
  
  // Group configuration
  GroupConfig,
  GroupLevel,
  GroupByFunction,
  GroupNode,
  GroupHeaderContext,
  
  // Tree configuration
  TreeConfig,
  TreeNode as TreeNodeData,
  TreeNodeContext,
  
  // Pivot configuration (future)
  PivotConfig,
  PivotMeasure,
  PivotDrillDownContext,
  
  // Aggregations
  AggregationConfig,
  AggregationType,
  CalculatedField,
  
  // Data structures
  FlattenedNode,
  ProcessedData,
  
  // State management
  ExpansionState,
  SelectionState,
  DragDropState,
  
  // Utilities
  ControlsContext,
  ExportFormat,
  ExportConfig,
} from './GroupableDataGrid.types';

// Utility exports
export {
  // Aggregation functions
  applyAggregation,
  applyAggregations,
  calculateFieldValue,
  enhanceDataWithCalculatedFields,
  validateAggregationConfig,
  createDefaultLabel,
  formatAggregatedValue,
  inferAggregationType,
  createDefaultAggregations,
  mergeAggregations,
  calculatePercentage,
  formatPercentage,
} from './utils/aggregations';

export {
  // Hierarchy manager
  HierarchyDataManager,
  createInitialExpansionState,
} from './utils/HierarchyDataManager';

// Hook exports
export {
  useGroupExpansion,
  isNodeExpanded,
  getExpandedStates,
  type UseGroupExpansionOptions,
} from './hooks/useGroupExpansion';

export {
  useTreeNavigation,
  useCellFocus,
  type TreeNavigationState,
  type UseTreeNavigationOptions,
  type UseTreeNavigationResult,
} from './hooks/useTreeNavigation';

// Sub-component prop types
export type { GroupHeaderProps } from './components/GroupHeader';
export type { TreeNodeProps } from './components/TreeNode';
