// Main Data Grid Components
export { AriaDataGrid } from './AriaDataGrid';
export type { AriaDataGridProps } from './AriaDataGridTypes';

export { AriaTabsDataGrid } from './AriaTabsDataGrid';
export type { AriaTabsDataGridProps, TabPanelConfig } from './AriaTabsDataGridTypes';
export type { AriaTabsDataGridRef } from './AriaTabsDataGrid';

// Sort Control Component
export { SortStatusControl } from './SortStatusControl';
export type { SortStatusControlProps } from './SortStatusControlTypes';

// Factory Functions and Helper Utilities
export { createGenericTabsConfig } from './AriaTabsDataGridFactory';
export type { GenericTabDefinition, GenericColumnDefinition } from './AriaTabsDataGridFactory';

// Healthcare Demo Utilities (for demo/example purposes)
export { createTCHTabsConfig, tchDataConfig } from './AriaTabsDataGridTCH';

// Utility exports (if needed by consumers)
export * from './icons';
export * from './utils';
