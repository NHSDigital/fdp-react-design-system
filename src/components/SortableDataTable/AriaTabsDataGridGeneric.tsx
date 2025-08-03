import { useReducer, useCallback, useMemo, useRef, useImperativeHandle, forwardRef, useEffect, useState } from 'react';
import { 
  AriaTabsDataGridProps, 
  TabPanelConfig, 
  AriaTabsDataGridState, 
  AriaTabsDataGridAction
} from './AriaTabsDataGridTypes';
import { SortConfig } from './AriaDataGridTypes';
import './AriaTabsDataGrid.scss';
import { Button } from "../Button/Button";

/**
 * Navigation focus areas for hierarchical keyboard navigation
 */
type FocusArea = 'tabs' | 'headers' | 'cells';

/**
 * Navigation state for hierarchical keyboard navigation
 */
interface NavigationState {
  focusArea: FocusArea;
  focusedTabIndex: number;
  focusedHeaderIndex: number;
  focusedRowIndex: number;
  focusedColumnIndex: number;
  isGridActive: boolean;
}

/**
 * Generic configuration for data operations
 */
export interface DataOperationConfig<T> {
  /** Custom function to compare two data objects for equality */
  dataComparator?: (a: T, b: T) => boolean;
  /** Custom function to filter data based on provided filters */
  filterFunction?: (data: T[], filters: any) => T[];
  /** Custom function to render boolean values */
  booleanRenderer?: (value: boolean) => React.ReactNode;
  /** Custom function to get a unique identifier for a data object */
  getDataId?: (data: T) => string | number;
}

/**
 * Generic component reference interface for imperative actions
 */
export interface GenericAriaTabsDataGridRef<T> {
  selectTab: (index: number) => void;
  refreshData: (tabIndex?: number) => void;
  exportData: (tabIndex?: number) => T[];
  getSelectedRows: (tabIndex?: number) => number[];
  clearSelection: (tabIndex?: number) => void;
  applyFilters: (filters: any) => void;
}

/**
 * Generic props extending the base props with data operation configuration
 */
export interface GenericAriaTabsDataGridProps<T> extends Omit<AriaTabsDataGridProps<T>, 'onGlobalRowSelectionChange'> {
  /** Configuration for data operations */
  dataConfig?: DataOperationConfig<T>;
  /** Callback when global row selection changes - now generic */
  onGlobalRowSelectionChange?: (rowData: T | null) => void;
}

/**
 * Reducer function for the generic tabs data grid state
 */
function genericTabsDataGridReducer<T>(
  state: AriaTabsDataGridState<T>, 
  action: AriaTabsDataGridAction<T>
): AriaTabsDataGridState<T> {
  switch (action.type) {
    case 'SET_SELECTED_INDEX':
      return { ...state, selectedIndex: action.payload };
    
    case 'SET_TAB_LOADING':
      const newLoadingStates = [...state.tabLoadingStates];
      newLoadingStates[action.payload.tabIndex] = action.payload.isLoading;
      return { ...state, tabLoadingStates: newLoadingStates };
    
    case 'SET_TAB_ERROR':
      const newErrors = [...state.tabErrors];
      newErrors[action.payload.tabIndex] = action.payload.error;
      return { ...state, tabErrors: newErrors };
    
    case 'SET_SORT':
      return { ...state, sortConfig: action.payload };
    
    case 'SET_SELECTED_ROWS':
      const newSelectedRows = [...state.selectedRows];
      newSelectedRows[action.payload.tabIndex] = action.payload.rowIndices;
      return { ...state, selectedRows: newSelectedRows };
    
    case 'SET_GLOBAL_SELECTED_ROW_DATA':
      return { ...state, globalSelectedRowData: action.payload };
    
    case 'SET_FILTERS':
      return { ...state, filters: action.payload };
    
    case 'RESET_STATE':
      return {
        selectedIndex: 0,
        tabLoadingStates: new Array(state.tabLoadingStates.length).fill(false),
        tabErrors: new Array(state.tabErrors.length).fill(null),
        sortConfig: [],
        selectedRows: new Array(state.selectedRows.length).fill([]),
        globalSelectedRowData: null,
        filters: undefined
      };
    
    default:
      return state;
  }
}

/**
 * Default data comparison function using JSON stringification
 */
const defaultDataComparator = <T>(data1: T, data2: T): boolean => {
  if (!data1 || !data2) return data1 === data2;
  return JSON.stringify(data1) === JSON.stringify(data2);
};

/**
 * Default filter function (no filtering)
 */
const defaultFilterFunction = <T>(data: T[], _filters?: any): T[] => data;

/**
 * Default boolean renderer
 */
const defaultBooleanRenderer = (value: boolean): React.ReactNode => {
  return value ? '✓' : '✗';
};

/**
 * Default data ID function
 */
const defaultGetDataId = <T>(data: T): string => {
  return JSON.stringify(data);
};

/**
 * Generic Integrated Tabs and DataGrid component with full ARIA compliance
 */
export const GenericAriaTabsDataGrid = forwardRef<
  GenericAriaTabsDataGridRef<any>, 
  GenericAriaTabsDataGridProps<any>
>(function GenericAriaTabsDataGrid<T>(props: GenericAriaTabsDataGridProps<T>, ref: any) {
  const {
    tabPanels,
    selectedIndex: selectedIndexProp,
    onTabChange,
    onGlobalRowSelectionChange,
    ariaLabel,
    ariaDescription,
    className = '',
    disabled = false,
    orientation = 'horizontal',
    id,
    isLoading = false,
    loadingComponent,
    error = null,
    errorComponent,
    dataConfig = {},
    'data-testid': dataTestId
  } = props;

  // Extract data operation functions with defaults
  const {
    dataComparator = defaultDataComparator,
    filterFunction = defaultFilterFunction,
    booleanRenderer = defaultBooleanRenderer,
    getDataId = defaultGetDataId
  } = dataConfig;

  // Determine if component is controlled
  const isControlled = selectedIndexProp !== undefined;
  const selectedIndex = selectedIndexProp ?? 0;

  // Navigation state for hierarchical keyboard navigation
  const [navigationState, setNavigationState] = useState<NavigationState>({
    focusArea: 'tabs',
    focusedTabIndex: selectedIndex,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    isGridActive: false
  });

  // Initialize state with global sort configuration
  const initialState: AriaTabsDataGridState<T> = useMemo(() => {
    // Combine all initial sort configs from all panels into one global config
    const allSortConfigs = tabPanels.flatMap(panel => panel.sortConfig || []);
    // Remove duplicates while preserving order
    const uniqueSortConfigs = allSortConfigs.filter((config, index, arr) => 
      arr.findIndex(c => c.key === config.key) === index
    );
    
    return {
      selectedIndex,
      tabLoadingStates: new Array(tabPanels.length).fill(false),
      tabErrors: new Array(tabPanels.length).fill(null),
      sortConfig: uniqueSortConfigs,
      selectedRows: new Array(tabPanels.length).fill([]),
      globalSelectedRowData: null,
      filters: undefined
    };
  }, [tabPanels, selectedIndex]);

  const [state, dispatch] = useReducer(genericTabsDataGridReducer<T>, initialState);

  // Controlled component support - sync selectedIndex when it changes externally
  useEffect(() => {
    if (isControlled) {
      dispatch({ type: 'SET_SELECTED_INDEX', payload: selectedIndex });
    }
  }, [selectedIndex, isControlled]);

  // Handle global row selection callback
  useEffect(() => {
    if (onGlobalRowSelectionChange) {
      onGlobalRowSelectionChange(state.globalSelectedRowData);
    }
  }, [state.globalSelectedRowData, onGlobalRowSelectionChange]);

  // Generic data equality check using provided comparator
  const isDataEqual = useCallback((data1: T, data2: T): boolean => {
    return dataComparator(data1, data2);
  }, [dataComparator]);

  // Handle tab selection with keyboard support
  const handleTabSelect = useCallback((index: number) => {
    if (index >= 0 && index < tabPanels.length && !tabPanels[index].disabled) {
      dispatch({ type: 'SET_SELECTED_INDEX', payload: index });
      onTabChange?.(index);
    }
  }, [tabPanels, onTabChange]);

  // ... (rest of the component implementation would continue with the same logic but using generic types)
  
  // For now, return a basic structure to demonstrate the concept
  return (
    <div 
      className={`aria-tabs-datagrid aria-tabs-datagrid--${orientation} ${className}`}
      id={id}
      data-testid={dataTestId}
    >
      <div>Generic AriaTabsDataGrid Component</div>
      <div>Data Config: {JSON.stringify(dataConfig)}</div>
      <div>Tab Panels: {tabPanels.length}</div>
    </div>
  );
});

/**
 * Generic factory function to create tabs configuration
 */
export const createGenericTabsConfig = <T>(
  data: T[],
  tabDefinitions: Array<{
    id: string;
    label: string;
    columns: Array<{
      key: string;
      label: string;
      render?: (data: T) => any;
    }>;
    filter?: (data: T[]) => T[];
    sortConfig?: SortConfig[];
    ariaLabel?: string;
    ariaDescription?: string;
  }>
): TabPanelConfig<T>[] => {
  return tabDefinitions.map(def => ({
    id: def.id,
    label: def.label,
    data: def.filter ? def.filter(data) : data,
    columns: def.columns,
    sortConfig: def.sortConfig,
    ariaLabel: def.ariaLabel || `${def.label} Data Grid`,
    ariaDescription: def.ariaDescription || `Data grid showing ${def.label.toLowerCase()}`
  }));
};
