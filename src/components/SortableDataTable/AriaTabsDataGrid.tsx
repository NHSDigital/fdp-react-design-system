import { useReducer, useCallback, useMemo, useRef, useImperativeHandle, forwardRef, useEffect, useState } from 'react';
import { 
  AriaTabsDataGridProps, 
  TabPanelConfig, 
  AriaTabsDataGridState, 
  AriaTabsDataGridAction,
  EWSPatientData,
  HealthcareViewConfig,
  HealthcareFilter 
} from './AriaTabsDataGridTypes';
import { SortConfig } from './AriaDataGridTypes';
import { booleanIcon } from './icons';
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
  isGridActive: boolean; // Whether we're in grid navigation mode (like GanttChart's timeline active)
}
 
function tabsDataGridReducer(
  state: AriaTabsDataGridState, 
  action: AriaTabsDataGridAction
): AriaTabsDataGridState {
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
    
    case 'SET_TAB_SORT':
      const newSortConfigs = [...state.tabSortConfigs];
      newSortConfigs[action.payload.tabIndex] = action.payload.sortConfig;
      return { ...state, tabSortConfigs: newSortConfigs };
    
    case 'SET_SELECTED_ROWS':
      const newSelectedRows = [...state.selectedRows];
      newSelectedRows[action.payload.tabIndex] = action.payload.rowIndices;
      return { ...state, selectedRows: newSelectedRows };
    
    case 'SET_FILTERS':
      return { ...state, filters: action.payload };
    
    case 'RESET_STATE':
      return {
        selectedIndex: 0,
        tabLoadingStates: new Array(state.tabLoadingStates.length).fill(false),
        tabErrors: new Array(state.tabErrors.length).fill(null),
        tabSortConfigs: new Array(state.tabSortConfigs.length).fill([]),
        selectedRows: new Array(state.selectedRows.length).fill([]),
        filters: undefined
      };
    
    default:
      return state;
  }
}

/**
 * Healthcare column configurations for EWS patient data
 */
const createHealthcareViewConfig = (): HealthcareViewConfig => ({
  overview: [
    { key: 'name', label: 'Patient Name' },
    { key: 'age', label: 'Age' },
    { key: 'ward_name', label: 'Ward' },
    { key: 'bed_name', label: 'Bed' },
    { key: 'ews_score', label: 'EWS Score' },
    { key: 'speciality', label: 'Specialty' },
    { key: 'consultant', label: 'Consultant' }
  ],
  vitals: [
    { key: 'name', label: 'Patient Name' },
    { key: 'ews_score', label: 'EWS Score' },
    { key: 'respiratory_rate_bpm', label: 'Respiratory Rate', render: (data: EWSPatientData) => data.ews_data.respiratory_rate_bpm },
    { key: 'sp02', label: 'SpO2 %', render: (data: EWSPatientData) => data.ews_data.sp02 },
    { key: 'temperature', label: 'Temperature °C', render: (data: EWSPatientData) => data.ews_data.temperature },
    { key: 'systolic_bp', label: 'Systolic BP', render: (data: EWSPatientData) => data.ews_data.systolic_bp },
    { key: 'heart_rate', label: 'Heart Rate', render: (data: EWSPatientData) => data.ews_data.heart_rate },
    { key: 'avpu', label: 'AVPU', render: (data: EWSPatientData) => data.ews_data.avpu.toUpperCase() }
  ],
  discharge: [
    { key: 'name', label: 'Patient Name' },
    { key: 'anticipated_discharge_date', label: 'Anticipated Discharge', render: (data: EWSPatientData) => new Date(data.anticipated_discharge_date).toLocaleDateString() },
    { key: 'early_discharge_notification', label: 'Discharge Status' },
    { key: 'medically_optimised', label: 'Medically Optimised' },
    { key: 'criteria_to_reside', label: 'Criteria to Reside' },
    { key: 'fast_track', label: 'Fast Track' },
    { key: 'transport_status', label: 'Transport Status' },
    { key: 'pathway', label: 'Pathway' }
  ],
  logistics: [
    { key: 'name', label: 'Patient Name' },
    { key: 'ward_name', label: 'Ward' },
    { key: 'room_name', label: 'Room' },
    { key: 'bed_name', label: 'Bed' },
    { key: 'bed_type', label: 'Bed Type' },
    { key: 'transport_booking', label: 'Transport Booked' },
    { key: 'transport_mobility', label: 'Transport Type' },
    { key: 'district_nurse_referral', label: 'District Nurse' },
    { key: 'equipment', label: 'Equipment' }
  ]
});

/**
 * Component reference interface for imperative actions
 */
export interface AriaTabsDataGridRef {
  selectTab: (index: number) => void;
  refreshData: (tabIndex?: number) => void;
  exportData: (tabIndex?: number) => any[];
  getSelectedRows: (tabIndex?: number) => number[];
  clearSelection: (tabIndex?: number) => void;
  applyFilters: (filters: HealthcareFilter) => void;
}

/**
 * Integrated Tabs and DataGrid component with full ARIA compliance
 */
export const AriaTabsDataGrid = forwardRef<AriaTabsDataGridRef, AriaTabsDataGridProps>(
  function AriaTabsDataGrid(props, ref) {
    const {
      tabPanels,
      selectedIndex: selectedIndexProp,
      onTabChange,
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
      'data-testid': dataTestId
    } = props;

    // Determine if component is controlled
    const isControlled = selectedIndexProp !== undefined;
    const selectedIndex = selectedIndexProp ?? 0;

    // Navigation state for hierarchical keyboard navigation (like GanttChart)
    const [navigationState, setNavigationState] = useState<NavigationState>({
      focusArea: 'tabs',
      focusedTabIndex: selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: false
    });

    // Initialize state
    const initialState: AriaTabsDataGridState = useMemo(() => ({
      selectedIndex,
      tabLoadingStates: new Array(tabPanels.length).fill(false),
      tabErrors: new Array(tabPanels.length).fill(null),
      tabSortConfigs: tabPanels.map(panel => panel.sortConfig || []),
      selectedRows: new Array(tabPanels.length).fill([]),
      filters: undefined
    }), [tabPanels.length, selectedIndex]);

    const [state, dispatch] = useReducer(tabsDataGridReducer, initialState);

    // Controlled component support - sync selectedIndex when it changes externally
    useEffect(() => {
      if (isControlled) {
        dispatch({ type: 'SET_SELECTED_INDEX', payload: selectedIndex });
      }
    }, [selectedIndex, isControlled]);

    // Handle tab selection with keyboard support
    const handleTabSelect = useCallback((index: number) => {
      if (index >= 0 && index < tabPanels.length && !tabPanels[index].disabled) {
        dispatch({ type: 'SET_SELECTED_INDEX', payload: index });
        onTabChange?.(index);
      }
    }, [tabPanels, onTabChange]);

    // Hierarchical keyboard navigation handlers (inspired by GanttChart)
    const handleTabKeyDown = useCallback((event: React.KeyboardEvent, index: number) => {
      const { key } = event;
      
      switch (key) {
        case 'ArrowLeft':
          event.preventDefault();
          const prevIndex = index > 0 ? index - 1 : tabPanels.length - 1;
          handleTabSelect(prevIndex);
          setNavigationState(prev => ({ ...prev, focusedTabIndex: prevIndex }));
          tabRefs.current[prevIndex]?.focus();
          break;
        
        case 'ArrowRight':
          event.preventDefault();
          const nextIndex = index < tabPanels.length - 1 ? index + 1 : 0;
          handleTabSelect(nextIndex);
          setNavigationState(prev => ({ ...prev, focusedTabIndex: nextIndex }));
          tabRefs.current[nextIndex]?.focus();
          break;
        
        case 'ArrowDown':
          event.preventDefault();
          // Navigate to headers of the current tab's grid
          setNavigationState(prev => ({ 
            ...prev, 
            focusArea: 'headers',
            focusedHeaderIndex: 0
          }));
          focusGridHeader(0);
          break;
        
        case 'Home':
          event.preventDefault();
          handleTabSelect(0);
          setNavigationState(prev => ({ ...prev, focusedTabIndex: 0 }));
          tabRefs.current[0]?.focus();
          break;
        
        case 'End':
          event.preventDefault();
          const lastIndex = tabPanels.length - 1;
          handleTabSelect(lastIndex);
          setNavigationState(prev => ({ ...prev, focusedTabIndex: lastIndex }));
          tabRefs.current[lastIndex]?.focus();
          break;
        
        case 'Enter':
        case ' ':
          event.preventDefault();
          handleTabSelect(index);
          break;
      }
    }, [tabPanels.length, handleTabSelect]);

    // Tab refs for individual tabs
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Sort handlers for each tab - cycles through asc -> desc -> none (remove)
    const handleSort = useCallback((tabIndex: number, key: string) => {
      const currentSort = state.tabSortConfigs[tabIndex] || [];
      const existingSort = currentSort.find(sort => sort.key === key);
      
      let newSortConfig: SortConfig[];
      if (existingSort) {
        if (existingSort.direction === 'asc') {
          // Change to descending
          newSortConfig = currentSort.map(sort => 
            sort.key === key 
              ? { ...sort, direction: 'desc' as const }
              : sort
          );
        } else {
          // Remove the sort (desc -> none)
          newSortConfig = currentSort.filter(sort => sort.key !== key);
        }
      } else {
        // Add new sort starting with ascending - append to end to maintain priority order
        newSortConfig = [...currentSort, { key, direction: 'asc' as const }];
      }

      dispatch({ 
        type: 'SET_TAB_SORT', 
        payload: { tabIndex, sortConfig: newSortConfig }
      });

      // Call custom sort handler if provided
      const panel = tabPanels[tabIndex];
      panel.onSort?.(key as any);
    }, [state.tabSortConfigs, tabPanels]);

    // Focus management utilities
    const focusGridHeader = useCallback((headerIndex: number) => {
      setTimeout(() => {
        const headerElement = document.querySelector(
          `[data-tab-panel="${state.selectedIndex}"] th:nth-child(${headerIndex + 1})`
        ) as HTMLElement;
        if (headerElement) {
          headerElement.focus();
        }
      }, 0);
    }, [state.selectedIndex]);

    // Reset all sorts for the current tab
    const handleResetSorts = useCallback(() => {
      dispatch({ 
        type: 'SET_TAB_SORT', 
        payload: { tabIndex: state.selectedIndex, sortConfig: [] }
      });
    }, [state.selectedIndex]);

    // Generate sort description text
    const getCurrentSortDescription = useCallback(() => {
      const currentSorts = state.tabSortConfigs[state.selectedIndex] || [];
      const currentPanel = tabPanels[state.selectedIndex];
      
      if (currentSorts.length === 0) {
        return 'No sorting applied';
      }

      const sortDescriptions = currentSorts.map((sort, index) => {
        const column = currentPanel?.columns.find(col => col.key === sort.key);
        const columnLabel = column?.label || sort.key;
        const direction = sort.direction === 'asc' ? 'ascending' : 'descending';
        return `${index + 1}. ${columnLabel} (${direction})`;
      });

      return `Sorted by: ${sortDescriptions.join(', ')}`;
    }, [state.tabSortConfigs, state.selectedIndex, tabPanels]);

    // NHS-compliant boolean rendering function
    const renderBooleanIcon = useCallback((value: boolean) => {
      const iconEntry = booleanIcon.find(icon => icon.value === value);
      return iconEntry ? iconEntry.icon : null;
    }, []);

    const focusGridCell = useCallback((rowIndex: number, colIndex: number) => {
      setTimeout(() => {
        const cellElement = document.querySelector(
          `[data-tab-panel="${state.selectedIndex}"] tbody tr:nth-child(${rowIndex + 1}) td:nth-child(${colIndex + 1})`
        ) as HTMLElement;
        if (cellElement) {
          cellElement.focus();
        }
      }, 0);
    }, [state.selectedIndex]);

    // Grid header navigation (similar to GanttChart date navigation)
    const handleHeaderKeyDown = useCallback((event: React.KeyboardEvent, headerIndex: number) => {
      const { key } = event;
      const currentPanel = tabPanels[state.selectedIndex];
      const columnCount = currentPanel?.columns.length || 0;

      switch (key) {
        case 'ArrowLeft':
          event.preventDefault();
          const prevHeaderIndex = Math.max(0, headerIndex - 1);
          setNavigationState(prev => ({ ...prev, focusedHeaderIndex: prevHeaderIndex }));
          focusGridHeader(prevHeaderIndex);
          break;
        
        case 'ArrowRight':
          event.preventDefault();
          const nextHeaderIndex = Math.min(columnCount - 1, headerIndex + 1);
          setNavigationState(prev => ({ ...prev, focusedHeaderIndex: nextHeaderIndex }));
          focusGridHeader(nextHeaderIndex);
          break;
        
        case 'ArrowUp':
          event.preventDefault();
          // Navigate back to tabs
          setNavigationState(prev => ({ 
            ...prev, 
            focusArea: 'tabs',
            focusedTabIndex: state.selectedIndex
          }));
          tabRefs.current[state.selectedIndex]?.focus();
          break;
        
        case 'ArrowDown':
          event.preventDefault();
          // Navigate to grid cells
          setNavigationState(prev => ({ 
            ...prev, 
            focusArea: 'cells',
            focusedRowIndex: 0,
            focusedColumnIndex: headerIndex,
            isGridActive: true
          }));
          focusGridCell(0, headerIndex);
          break;
        
        case 'Home':
          event.preventDefault();
          setNavigationState(prev => ({ ...prev, focusedHeaderIndex: 0 }));
          focusGridHeader(0);
          break;
        
        case 'End':
          event.preventDefault();
          const lastHeaderIndex = columnCount - 1;
          setNavigationState(prev => ({ ...prev, focusedHeaderIndex: lastHeaderIndex }));
          focusGridHeader(lastHeaderIndex);
          break;
        
        case 'Enter':
        case ' ':
          event.preventDefault();
          // Sort by this column
          const columnKey = currentPanel?.columns[headerIndex]?.key;
          if (columnKey) {
            handleSort(state.selectedIndex, columnKey);
          }
          break;
      }
    }, [tabPanels, state.selectedIndex, handleSort, setNavigationState, focusGridHeader, focusGridCell, tabRefs]);

    // Grid cell navigation (similar to GanttChart task navigation)
    const handleCellKeyDown = useCallback((event: React.KeyboardEvent, rowIndex: number, colIndex: number) => {
      const { key } = event;
      const currentPanel = tabPanels[state.selectedIndex];
      const rowCount = currentPanel?.data.length || 0;
      const columnCount = currentPanel?.columns.length || 0;

      // Grid navigation mode (moving between cells)
      switch (key) {
        case 'ArrowUp':
          event.preventDefault();
          if (rowIndex === 0) {
            // Navigate to headers
            setNavigationState(prev => ({ 
              ...prev, 
              focusArea: 'headers',
              focusedHeaderIndex: colIndex,
              isGridActive: false
            }));
            focusGridHeader(colIndex);
          } else {
            const newRowIndex = rowIndex - 1;
            setNavigationState(prev => ({ ...prev, focusedRowIndex: newRowIndex }));
            focusGridCell(newRowIndex, colIndex);
          }
          break;
        
        case 'ArrowDown':
          event.preventDefault();
          const newRowIndex = Math.min(rowCount - 1, rowIndex + 1);
          setNavigationState(prev => ({ ...prev, focusedRowIndex: newRowIndex }));
          focusGridCell(newRowIndex, colIndex);
          break;
        
        case 'ArrowLeft':
          event.preventDefault();
          const newColIndex = Math.max(0, colIndex - 1);
          setNavigationState(prev => ({ ...prev, focusedColumnIndex: newColIndex }));
          focusGridCell(rowIndex, newColIndex);
          break;
        
        case 'ArrowRight':
          event.preventDefault();
          const nextColIndex = Math.min(columnCount - 1, colIndex + 1);
          setNavigationState(prev => ({ ...prev, focusedColumnIndex: nextColIndex }));
          focusGridCell(rowIndex, nextColIndex);
          break;
        
        case 'Home':
          event.preventDefault();
          if (event.ctrlKey) {
            // Go to first cell
            setNavigationState(prev => ({ ...prev, focusedRowIndex: 0, focusedColumnIndex: 0 }));
            focusGridCell(0, 0);
          } else {
            // Go to first column in current row
            setNavigationState(prev => ({ ...prev, focusedColumnIndex: 0 }));
            focusGridCell(rowIndex, 0);
          }
          break;
        
        case 'End':
          event.preventDefault();
          if (event.ctrlKey) {
            // Go to last cell
            const lastRow = rowCount - 1;
            const lastCol = columnCount - 1;
            setNavigationState(prev => ({ ...prev, focusedRowIndex: lastRow, focusedColumnIndex: lastCol }));
            focusGridCell(lastRow, lastCol);
          } else {
            // Go to last column in current row
            const lastCol = columnCount - 1;
            setNavigationState(prev => ({ ...prev, focusedColumnIndex: lastCol }));
            focusGridCell(rowIndex, lastCol);
          }
          break;
        
        case 'Enter':
          event.preventDefault();
          // Select this row
          dispatch({
            type: 'SET_SELECTED_ROWS',
            payload: { tabIndex: state.selectedIndex, rowIndices: [rowIndex] }
          });
          break;
      }
    }, [tabPanels, state.selectedIndex, dispatch, setNavigationState, focusGridHeader, focusGridCell]);

    // Filter healthcare data based on current filters
    const getFilteredData = useCallback((data: EWSPatientData[], filters?: HealthcareFilter): EWSPatientData[] => {
      if (!filters) return data;

      return data.filter(patient => {
        // EWS Score range filter
        if (filters.ewsScoreRange) {
          const [min, max] = filters.ewsScoreRange;
          if (patient.ews_score < min || patient.ews_score > max) return false;
        }

        // Ward filter
        if (filters.wards && filters.wards.length > 0) {
          if (!filters.wards.includes(patient.ward_name)) return false;
        }

        // Specialty filter
        if (filters.specialties && filters.specialties.length > 0) {
          if (!filters.specialties.includes(patient.speciality)) return false;
        }

        // Discharge status filter
        if (filters.dischargeStatuses && filters.dischargeStatuses.length > 0) {
          if (!filters.dischargeStatuses.includes(patient.early_discharge_notification)) return false;
        }

        // AVPU filter
        if (filters.avpuLevels && filters.avpuLevels.length > 0) {
          if (!filters.avpuLevels.includes(patient.ews_data.avpu)) return false;
        }

        // Medical optimization filter
        if (filters.medicallyOptimised !== null && filters.medicallyOptimised !== undefined) {
          if (patient.medically_optimised !== filters.medicallyOptimised) return false;
        }

        // Fast track filter
        if (filters.fastTrack !== null && filters.fastTrack !== undefined) {
          if (patient.fast_track !== filters.fastTrack) return false;
        }

        return true;
      });
    }, []);

    // Imperative API
    useImperativeHandle(ref, () => ({
      selectTab: (index: number) => {
        if (index >= 0 && index < tabPanels.length) {
          dispatch({ type: 'SET_SELECTED_INDEX', payload: index });
          onTabChange?.(index);
        }
      },
      refreshData: (tabIndex?: number) => {
        // Implementation for data refresh
        console.log('Refreshing data for tab:', tabIndex ?? 'all');
      },
      exportData: (tabIndex?: number) => {
        const targetIndex = tabIndex ?? state.selectedIndex;
        const panel = tabPanels[targetIndex];
        return panel ? panel.data : [];
      },
      getSelectedRows: (tabIndex?: number) => {
        const targetIndex = tabIndex ?? state.selectedIndex;
        return state.selectedRows[targetIndex] || [];
      },
      clearSelection: (tabIndex?: number) => {
        const targetIndex = tabIndex ?? state.selectedIndex;
        dispatch({
          type: 'SET_SELECTED_ROWS',
          payload: { tabIndex: targetIndex, rowIndices: [] }
        });
      },
      applyFilters: (filters: HealthcareFilter) => {
        dispatch({ type: 'SET_FILTERS', payload: filters });
      }
    }), [state.selectedIndex, state.selectedRows, tabPanels, onTabChange]);

    // Loading state
    if (isLoading) {
      return (
        <div className={`aria-tabs-datagrid aria-tabs-datagrid--loading ${className}`} data-testid={dataTestId}>
          {loadingComponent || (
            <div className="aria-tabs-datagrid__loading">
              <div className="nhsuk-spinner" role="status" aria-label="Loading data">
                <span className="nhsuk-u-visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      );
    }

    // Error state
    if (error) {
      return (
        <div className={`aria-tabs-datagrid aria-tabs-datagrid--error ${className}`} data-testid={dataTestId}>
          {errorComponent || (
            <div className="aria-tabs-datagrid__error" role="alert">
              <h3 className="nhsuk-error-summary__title">Error loading data</h3>
              <p>{error}</p>
            </div>
          )}
        </div>
      );
    }

    return (
      <div 
        className={`aria-tabs-datagrid aria-tabs-datagrid--${orientation} ${className}`}
        id={id}
        data-testid={dataTestId}
      >
        {/* Keyboard Navigation Instructions (Screen Reader Only) */}
        <div className="aria-tabs-datagrid__navigation-help sr-only" id={`${id}-navigation-help`}>
          Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. 
          Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. 
          Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells.
        </div>

        {/* Sort Status and Reset Controls */}
        <div className="aria-tabs-datagrid__sort-status">
          <div 
            className={`aria-tabs-datagrid__sort-description ${state.tabSortConfigs[state.selectedIndex]?.length > 0 ? 'aria-tabs-datagrid__sort-description--active' : ''}`}
            aria-live="polite"
          >
            {getCurrentSortDescription()}
          </div>
          { state.tabSortConfigs[state.selectedIndex]?.length > 0 && (
			<Button
				variant="secondary"
				onClick={handleResetSorts}
				aria-label={`Reset all sorting for ${tabPanels[state.selectedIndex]?.label || 'current tab'}`}
			>
				Clear All Sorts
			</Button>
          )}
        </div>

        {/* Tab List with Manual ARIA Implementation */}
        <div 
          role="tablist"
          aria-label={ariaLabel}
          aria-describedby={`${ariaDescription || ''} ${id ? `${id}-navigation-help` : ''}`.trim()}
          aria-orientation={orientation}
          className="aria-tabs-datagrid__tabs"
        >
          {tabPanels.map((panel, index) => {
            const isSelected = index === state.selectedIndex;
            const isDisabled = panel.disabled || disabled;

            return (
              <button
                key={panel.id}
                role="tab"
                id={`tab-${panel.id}`}
                aria-controls={`panel-${panel.id}`}
                aria-selected={isSelected}
                aria-disabled={isDisabled}
                tabIndex={isSelected ? 0 : -1}
                ref={el => { tabRefs.current[index] = el; }}
                onClick={() => handleTabSelect(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                disabled={isDisabled}
                className={`
                  aria-tabs-datagrid__tab
                  ${isSelected ? 'aria-tabs-datagrid__tab--selected' : ''}
                  ${isDisabled ? 'aria-tabs-datagrid__tab--disabled' : ''}
                `.trim()}
              >
                <span className="aria-tabs-datagrid__tab-label">{panel.label}</span>
                {state.tabLoadingStates[index] && (
                  <span className="aria-tabs-datagrid__tab-loading" aria-hidden="true">⏳</span>
                )}
                {state.tabErrors[index] && (
                  <span className="aria-tabs-datagrid__tab-error" aria-hidden="true">⚠️</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Panels */}
        {tabPanels.map((panel, index) => {
          const isSelected = index === state.selectedIndex;

          return (
            <div
              key={panel.id}
              role="tabpanel"
              id={`panel-${panel.id}`}
              aria-labelledby={`tab-${panel.id}`}
              tabIndex={0}
              hidden={!isSelected}
              ref={el => { panelRefs.current[index] = el; }}
              className={`aria-tabs-datagrid__panel ${panel.className || ''}`}
              data-tab-panel={index}
            >
              {isSelected && (
                (() => {
                  // Get filtered data for healthcare tabs
                  const displayData = panel.data.some((item: any) => 'ews_data' in item) 
                    ? getFilteredData(panel.data as EWSPatientData[], state.filters)
                    : panel.data;

                  // Sort the data based on the current sort configuration
                  const sortedData = useMemo(() => {
                    const sortConfig = state.tabSortConfigs[index];
                    if (!sortConfig || sortConfig.length === 0) return displayData;
                    
                    return [...displayData].sort((a, b) => {
                      // Apply each sort configuration in order
                      for (const { key, direction } of sortConfig) {
                        let aValue = a[key];
                        let bValue = b[key];

                        // Handle rendered values
                        const column = panel.columns.find(col => col.key === key);
                        if (column?.render) {
                          aValue = column.render(a);
                          bValue = column.render(b);
                        }
                        
                        if (aValue == null && bValue == null) continue;
                        if (aValue == null) return 1;
                        if (bValue == null) return -1;
                        
                        let comparison = 0;
                        if (typeof aValue === 'number' && typeof bValue === 'number') {
                          comparison = aValue - bValue;
                        } else if (typeof aValue === 'boolean' && typeof bValue === 'boolean') {
                          comparison = aValue === bValue ? 0 : aValue ? 1 : -1;
                        } else {
                          // Use natural string comparison for strings that may contain numbers
                          comparison = String(aValue).localeCompare(String(bValue), undefined, { 
                            numeric: true, 
                            sensitivity: 'base' 
                          });
                        }
                        
                        if (comparison !== 0) {
                          return direction === 'asc' ? comparison : -comparison;
                        }
                      }
                      return 0;
                    });
                  }, [displayData, state.tabSortConfigs[index], panel.columns]);

                  return (
                    <table
                      className="nhsuk-table aria-tabs-datagrid__grid"
                      role="grid"
                      aria-label={panel.ariaLabel}
                      aria-describedby={panel.ariaDescription}
                    >
                      <thead className="nhsuk-table__head" role="rowgroup">
                        <tr role="row">
                          {panel.columns.map((column, colIndex) => {
                            const sortInfo = state.tabSortConfigs[index]?.find(config => config.key === column.key);
                            const isSorted = !!sortInfo;
                            const isFocused = navigationState.focusArea === 'headers' && 
                                            navigationState.focusedHeaderIndex === colIndex;

                            return (
                              <th
                                key={column.key}
                                className={`sortable-header ${isFocused ? 'sortable-header--focused' : ''}`}
                                role="columnheader"
                                tabIndex={isFocused ? 0 : -1}
                                onClick={() => handleSort(index, column.key)}
                                onKeyDown={(e) => handleHeaderKeyDown(e, colIndex)}
                                aria-sort={isSorted ? (sortInfo?.direction === 'asc' ? 'ascending' : 'descending') : 'none'}
                              >
                                <div className="header-content">
                                  <span className="header-label">
                                    {column.label}
                                  </span>
                                  <div className="sort-indicator-container">
                                    {/* Show sort priority when any sort is configured */}
                                    {state.tabSortConfigs[index] && state.tabSortConfigs[index].length > 0 && 
                                     state.tabSortConfigs[index].findIndex(config => config.key === column.key) !== -1 && (
                                      <span 
                                        className={`sort-priority sort-priority--priority-${state.tabSortConfigs[index].findIndex(config => config.key === column.key) + 1}`}
                                        data-priority={state.tabSortConfigs[index].findIndex(config => config.key === column.key) + 1}
                                        title={`Sort priority: ${state.tabSortConfigs[index].findIndex(config => config.key === column.key) + 1}`}
                                      >
                                        {state.tabSortConfigs[index].findIndex(config => config.key === column.key) + 1}
                                      </span>
                                    )}
                                    {/* Show sort arrow only when column is actually sorted */}
                                    {isSorted && (
                                      <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="currentColor"
                                        className="sort-arrow"
                                        aria-hidden="true"
                                      >
                                        {sortInfo?.direction === 'asc' ? (
                                          <path d="M6 2L2 8h8L6 2z" />
                                        ) : (
                                          <path d="M6 10L2 4h8L6 10z" />
                                        )}
                                      </svg>
                                    )}
                                  </div>
                                </div>
                              </th>
                            );
                          })}
                        </tr>
                      </thead>
                      <tbody className="nhsuk-table__body" role="rowgroup">
                        {sortedData.map((row, rowIndex) => {
                          const isRowSelected = state.selectedRows[index]?.includes(rowIndex);
                          const isRowFocused = navigationState.focusArea === 'cells' && 
                                              navigationState.focusedRowIndex === rowIndex;
                          
                          return (
                            <tr
                              key={rowIndex}
                              role="row"
                              className={`data-row ${isRowSelected ? 'data-row--selected' : ''} ${isRowFocused ? 'data-row--focused' : ''}`}
                              aria-selected={isRowSelected}
                            >
                              {panel.columns.map((column, colIndex) => {
                                const value = column.render ? column.render(row) : row[column.key];
                                const isCellFocused = navigationState.focusArea === 'cells' && 
                                                    navigationState.focusedRowIndex === rowIndex && 
                                                    navigationState.focusedColumnIndex === colIndex;

                                // Handle boolean values with NHS-compliant rendering
                                const renderValue = () => {
                                  if (typeof value === 'boolean') {
                                    return (
                                      <>
                                        {renderBooleanIcon(value)}
                                        <span className="nhsuk-u-visually-hidden">{value ? 'Yes' : 'No'}</span>
                                      </>
                                    );
                                  }
                                  return String(value ?? '');
                                };

                                return (
                                  <td
                                    key={column.key}
                                    role="gridcell"
                                    className={`data-cell ${isCellFocused ? 'data-cell--focused' : ''}`}
                                    tabIndex={isCellFocused ? 0 : -1}
                                    onClick={() => {
                                      dispatch({
                                        type: 'SET_SELECTED_ROWS',
                                        payload: { tabIndex: index, rowIndices: [rowIndex] }
                                      });
                                    }}
                                    onKeyDown={(e) => handleCellKeyDown(e, rowIndex, colIndex)}
                                  >
                                    {renderValue()}
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  );
                })()
              )}
            </div>
          );
        })}
      </div>
    );
  }
);

/**
 * Factory function to create healthcare-specific tabs configuration
 */
export function createHealthcareTabsConfig(patients: EWSPatientData[]): TabPanelConfig<EWSPatientData>[] {
  const viewConfig = createHealthcareViewConfig();
  
  return [
    {
      id: 'overview',
      label: 'Patient Overview',
      data: patients,
      columns: viewConfig.overview,
      ariaLabel: 'Patient Overview Data Grid',
      ariaDescription: 'Overview of all patients with basic information'
    },
    {
      id: 'vitals',
      label: 'Vital Signs & EWS',
      data: patients,
      columns: viewConfig.vitals,
      sortConfig: [
        { key: 'ews_score', direction: 'desc' },
        { key: 'name', direction: 'asc' },
        { key: 'ward_name', direction: 'asc' }
      ],
      ariaLabel: 'Patient Vital Signs Data Grid',
      ariaDescription: 'Patient vital signs and Early Warning Scores'
    },
    {
      id: 'discharge',
      label: 'Discharge Planning',
      data: patients.filter(p => p.anticipated_discharge_date),
      columns: viewConfig.discharge,
      sortConfig: [
        { key: 'anticipated_discharge_date', direction: 'asc' },
        { key: 'discharge_status', direction: 'desc' }
      ],
      ariaLabel: 'Discharge Planning Data Grid',
      ariaDescription: 'Patient discharge planning and status information'
    },
    {
      id: 'logistics',
      label: 'Bed Management',
      data: patients,
      columns: viewConfig.logistics,
      sortConfig: [{ key: 'ward_name', direction: 'asc' }],
      ariaLabel: 'Bed Management Data Grid',
      ariaDescription: 'Patient location and logistics information'
    }
  ];
}
