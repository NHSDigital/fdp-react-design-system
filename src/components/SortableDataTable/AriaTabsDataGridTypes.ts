import { ColumnDefinition, SortConfig, SortingOptions } from './AriaDataGridTypes';
import * as React from 'react';

/**
 * Configuration for each tab panel containing a data grid
 */
export interface TabPanelConfig<T = any> {
  /** Unique identifier for the tab */
  id: string;
  /** Tab label text */
  label: string;
  /** Data to display in this tab's grid */
  data: T[];
  /** Column definitions for this tab's grid */
  columns: ColumnDefinition[];
  /** Initial sort configuration */
  sortConfig?: SortConfig[];
  /** ARIA label for the data grid */
  ariaLabel: string;
  /** Optional description for the data grid */
  ariaDescription?: string;
  /** Custom class name for the tab panel */
  className?: string;
  /** Whether this tab is disabled */
  disabled?: boolean;
  /** Custom sort handler for this tab */
  onSort?: (key: keyof T) => void;
  /** Custom row selection handler */
  onRowSelect?: (rowIndex: number, data: T) => void;
}

/**
 * Configuration for data operations - makes the component fully generic
 */
export interface DataOperationConfig<T> {
  /** Custom function to compare two data objects for equality */
  dataComparator?: (a: T, b: T) => boolean;
  /** Custom function to filter data based on provided filters */
  filterFunction?: (data: T[], filters: any) => T[];
  /** Custom function to render boolean values */
  booleanRenderer?: (value: boolean) => React.ReactNode;
  /** Custom function to get a unique identifier for a data object */
  getDataId?: (data: T) => string;
  /** Global sorting behavior defaults for this data set */
  sortingOptions?: SortingOptions;
}

/**
 * Props for the AriaTabsDataGrid component with optional data operation configuration
 */
export interface AriaTabsDataGridProps<T = any> {
  /** Configuration for data operations */
  dataConfig?: DataOperationConfig<T>;
  /** Array of tab panel configurations */
  tabPanels: TabPanelConfig<T>[];
  /** When true and only one tab panel is provided, hides the tab list and renders just the data table. Defaults to false. */
  hideTabsIfSingle?: boolean;
  /** Currently selected tab index */
  selectedIndex?: number;
  /** Handler for tab selection changes */
  onTabChange?: (index: number) => void;
  /** Handler for global row selection changes */
  onGlobalRowSelectionChange?: (rowData: T | null) => void;
  /** ARIA label for the entire tabs component */
  ariaLabel: string;
  /** Optional description for the tabs component */
  ariaDescription?: string;
  /** Custom class name for the root container */
  className?: string;
  /** Whether the tabs are disabled */
  disabled?: boolean;
  /** Orientation of the tabs */
  orientation?: 'horizontal' | 'vertical';
  /** Whether to activate tabs on focus or require selection */
  keyboardActivation?: 'automatic' | 'manual';
  /** Custom ID for the component */
  id?: string;
  /** Whether to show loading state */
  isLoading?: boolean;
  /** Custom loading component */
  loadingComponent?: React.ReactNode;
  /** Error state */
  error?: string | null;
  /** Custom error component */
  errorComponent?: React.ReactNode;
  /** Test ID for testing */
  'data-testid'?: string;
  /** Optional actions to render alongside the tab list (e.g. buttons, filters). These will appear to the right of the tabs when space allows, otherwise they will render above (just before) the tab list. */
  actions?: React.ReactNode;
  /** Optional minimum gap (px) to preserve between the end of the tabs and the actions when attempting inline placement. Defaults to 16. */
  actionsMinGap?: number;
  /** When true, disables dynamic measurement and always places actions above the tab list. */
  forceActionsAbove?: boolean;
  /** Minimum column width for table cells/headers (e.g. 160 or '12rem'). If total min widths exceed container, horizontal scrolling is enabled. */
  minColumnWidth?: number | string;
  /**
   * Enable low-priority column collapse to fit within container width before scrolling.
   * When true, columns with higher collapsePriority (or rightmost by default) will be hidden until the table fits.
   */
  enableColumnCollapse?: boolean;
  /**
   * Minimum number of columns that must remain visible even after collapsing. Defaults to 2.
   */
  minVisibleColumns?: number;
  /** Show a collapsed-columns indicator chip with count and popover list (defaults to true when collapse enabled). */
  showCollapsedColumnsIndicator?: boolean;
}

/**
 * Healthcare-specific tab panel configurations for EWS patient data
 */
export interface EWSPatientData {
  name: string;
  age: number;
  ews_data: {
    respiratory_rate_bpm: number;
    sp02: number;
    temperature: number;
    systolic_bp: number;
    heart_rate: number;
    avpu: 'alert' | 'verbal' | 'pain' | 'unresponsive';
  };
  ews_score: number;
  ward_name: string;
  room_name: string;
  bed_name: string;
  bed_type: 'bed' | 'trolley' | 'swap space';
  admin_note: string;
  pathway: string;
  speciality: string;
  consultant: string;
  local_authority: string;
  early_discharge_notification: 'due' | 'overdue' | 'complete' | 'not_required';
  needs_based_assessment: boolean;
  medically_optimised: boolean;
  criteria_to_reside: boolean;
  date_medically_optimised: string;
  anticipated_discharge_date: string;
  dru_suitability: boolean;
  optica_planned_discharge_date: string;
  optica_date_confirmed: string;
  dsum: string | null;
  medications_tta: string;
  transport_booking: boolean;
  transport_status: 'Pending' | 'In Progress' | 'Complete' | 'Cancelled';
  transport_date: string;
  transport_mobility: string;
  fast_track: boolean;
  initial_therapy_contact: string;
  equipment: string;
  district_nurse_referral: boolean;
}

/**
 * Predefined column configurations for different healthcare views
 */
export interface HealthcareViewConfig {
  overview: ColumnDefinition[];
  vitals: ColumnDefinition[];
  discharge: ColumnDefinition[];
  logistics: ColumnDefinition[];
}

/**
 * Filter configuration for healthcare data
 */
export interface HealthcareFilter {
  /** Filter by EWS score range */
  ewsScoreRange?: [number, number];
  /** Filter by ward */
  wards?: string[];
  /** Filter by specialty */
  specialties?: string[];
  /** Filter by discharge status */
  dischargeStatuses?: string[];
  /** Filter by AVPU level */
  avpuLevels?: Array<'alert' | 'verbal' | 'pain' | 'unresponsive'>;
  /** Filter by medical optimization status */
  medicallyOptimised?: boolean | null;
  /** Filter by fast track status */
  fastTrack?: boolean | null;
}

/**
 * Configuration for healthcare tabs with filtering
 */
export interface HealthcareTabsConfig {
  /** Enable filtering controls */
  enableFilters?: boolean;
  /** Default filter configuration */
  defaultFilters?: HealthcareFilter;
  /** Handler for filter changes */
  onFilterChange?: (filters: HealthcareFilter) => void;
  /** Enable real-time data updates */
  enableRealTime?: boolean;
  /** Real-time update interval in milliseconds */
  updateInterval?: number;
  /** Handler for real-time data fetch */
  onDataRefresh?: () => Promise<EWSPatientData[]>;
}

/**
 * State management for the integrated component
 */
export interface AriaTabsDataGridState {
  /** Currently selected tab index */
  selectedIndex: number;
  /** Loading state for each tab */
  tabLoadingStates: boolean[];
  /** Error state for each tab */
  tabErrors: (string | null)[];
  /** Global sort configuration that applies across all tabs */
  sortConfig: SortConfig[];
  /** Selected row indices for each tab */
  selectedRows: number[][];
  /** Global selected row data that persists across tabs */
  globalSelectedRowData: any | null;
  /** Filter states for healthcare tabs */
  filters?: HealthcareFilter;
}

/**
 * Action types for state management
 */
export type AriaTabsDataGridAction =
  | { type: 'SET_SELECTED_INDEX'; payload: number }
  | { type: 'SET_TAB_LOADING'; payload: { tabIndex: number; isLoading: boolean } }
  | { type: 'SET_TAB_ERROR'; payload: { tabIndex: number; error: string | null } }
  | { type: 'SET_SORT'; payload: SortConfig[] }
  | { type: 'SET_SELECTED_ROWS'; payload: { tabIndex: number; rowIndices: number[] } }
  | { type: 'SET_GLOBAL_SELECTED_ROW_DATA'; payload: any | null }
  | { type: 'SET_FILTERS'; payload: HealthcareFilter }
  | { type: 'ADJUST_ARRAYS'; payload: { newLength: number } }
  | { type: 'RESET_STATE' };

/**
 * Context for sharing state between tabs and data grids
 */
export interface AriaTabsDataGridContextValue {
  state: AriaTabsDataGridState;
  dispatch: React.Dispatch<AriaTabsDataGridAction>;
  tabPanels: TabPanelConfig[];
  healthcareConfig?: HealthcareTabsConfig;
}
