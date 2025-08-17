// Main components
export { ResponsiveDataGrid } from './ResponsiveDataGrid';
export { ResponsiveDataGridDemo } from './ResponsiveDataGridDemo';

// Healthcare card templates
export { PatientCard, AppointmentCard, MedicationCard, VitalsCard } from './HealthcareCardTemplates';

// Core types
export type { 
  ResponsiveDataGridProps, 
  ResponsiveTabPanelConfig, 
  LayoutMode, 
  ViewportConfig 
} from './ResponsiveDataGridTypes';

// Enhanced column types (with table/card renderers)
export type {
  ColumnDefinition,
  AriaDataGridColumn,
  SortConfig
} from '../SortableDataTable/AriaDataGridTypes';

// Generic types and interfaces
export type {
  GenericResponsiveDataGridProps,
  GenericResponsiveTabPanelConfig,
  GenericCardConfig,
  DomainPlugin,
  BadgeConfig,
  PriorityLevel,
  StatusType
} from './ResponsiveDataGridGeneric.types';

// Healthcare plugin and utilities
export { healthcarePlugin, type HealthcareData } from './HealthcarePlugin';
export { createGenericCard, defaultGenericCardConfig } from './GenericCardRenderer';
export { GenericCard } from './GenericCard';
export { convertLegacyCardConfig, isHealthcareData } from './ResponsiveDataGridHelpers';

// Backward compatibility exports
export { ResponsiveDataGrid as AdaptiveDataGrid } from './ResponsiveDataGrid';
export { ResponsiveDataGrid as AriaTabsDataGridAdaptive } from './ResponsiveDataGrid';
export type { ResponsiveDataGridProps as AdaptiveDataGridProps } from './ResponsiveDataGridTypes';
export type { ResponsiveDataGridProps as AriaTabsDataGridAdaptiveProps } from './ResponsiveDataGridTypes';

// Default export for backward compatibility
export { ResponsiveDataGrid as default } from './ResponsiveDataGrid';
