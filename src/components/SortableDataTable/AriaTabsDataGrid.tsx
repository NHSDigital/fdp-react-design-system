import React, { useReducer, useCallback, useMemo, useRef, useImperativeHandle, forwardRef, useEffect, useState } from 'react';
import { 
  AriaTabsDataGridProps, 
  AriaTabsDataGridState, 
  AriaTabsDataGridAction
} from './AriaTabsDataGridTypes';
import { SortConfig } from './AriaDataGridTypes';
import './AriaTabsDataGrid.scss';
import { SortStatusControl } from "./SortStatusControl/SortStatusControl";

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
	
	case 'ADJUST_ARRAYS':
	  const { newLength } = action.payload;
	  const adjustedLoadingStates = new Array(newLength).fill(false);
	  const adjustedErrors = new Array(newLength).fill(null);
	  const adjustedSelectedRows = new Array(newLength).fill([]);
	  
	  // Copy existing states up to the minimum length
	  for (let i = 0; i < Math.min(state.tabLoadingStates.length, newLength); i++) {
		adjustedLoadingStates[i] = state.tabLoadingStates[i];
		adjustedErrors[i] = state.tabErrors[i];
		adjustedSelectedRows[i] = state.selectedRows[i];
	  }
	  
	  return {
		...state,
		tabLoadingStates: adjustedLoadingStates,
		tabErrors: adjustedErrors,
		selectedRows: adjustedSelectedRows
	  };
	
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
 * Component reference interface for imperative actions
 */
export interface AriaTabsDataGridRef {
  selectTab: (index: number) => void;
  refreshData: (tabIndex?: number) => void;
  exportData: (tabIndex?: number) => any[];
  getSelectedRows: (tabIndex?: number) => number[];
  clearSelection: (tabIndex?: number) => void;
  applyFilters: (filters: any) => void;
}

/**
 * Integrated Tabs and DataGrid component with full ARIA compliance
 */
export const AriaTabsDataGrid = forwardRef<AriaTabsDataGridRef, AriaTabsDataGridProps>(
  function AriaTabsDataGrid(props, ref) {
	const {
	  dataConfig = {},
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
	  'data-testid': dataTestId
	} = props;

	// Extract data operation functions with defaults
  const {
	dataComparator = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b),
	filterFunction = (data: any[]) => data,
	booleanRenderer = (value: any) => value ? '✓' : '✗'
  } = dataConfig || {};    // Determine if component is controlled
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

	// Initialize state with empty sort configuration to avoid contamination
	const initialState: AriaTabsDataGridState = useMemo(() => {
	  // Don't combine initial sort configs - let users build their own sorting
	  // This prevents "mega-filter" effects and state reset issues
	  return {
		selectedIndex,
		tabLoadingStates: new Array(tabPanels.length).fill(false),
		tabErrors: new Array(tabPanels.length).fill(null),
		sortConfig: [], // Start with empty sort config
		selectedRows: new Array(tabPanels.length).fill([]),
		globalSelectedRowData: null,
		filters: undefined
	  };
	}, [selectedIndex]); // Remove tabPanels dependency to prevent state resets

	const [state, dispatch] = useReducer(tabsDataGridReducer, initialState);

	// Handle tabPanels length changes without resetting sort configuration
	useEffect(() => {
	  const currentLength = state.tabLoadingStates.length;
	  const newLength = tabPanels.length;
	  
	  if (currentLength !== newLength) {
		// Adjust array lengths while preserving existing sort configuration
		dispatch({ type: 'ADJUST_ARRAYS', payload: { newLength } });
	  }
	}, [tabPanels.length]);

	// Controlled component support - sync selectedIndex when it changes externally
	useEffect(() => {
	  if (isControlled) {
		dispatch({ type: 'SET_SELECTED_INDEX', payload: selectedIndex });
	  }
	}, [selectedIndex, isControlled]);

	// Reset navigation state when selected tab changes to ensure proper keyboard navigation
	useEffect(() => {
	  setNavigationState(prev => ({
		...prev,
		focusArea: 'tabs',
		focusedTabIndex: state.selectedIndex,
		focusedHeaderIndex: 0,
		focusedRowIndex: 0,
		focusedColumnIndex: 0,
		isGridActive: false
	  }));
	}, [state.selectedIndex]);

	// Handle global row selection callback
	useEffect(() => {
	  if (onGlobalRowSelectionChange) {
		onGlobalRowSelectionChange(state.globalSelectedRowData);
	  }
	}, [state.globalSelectedRowData, onGlobalRowSelectionChange]);

	// Generic data equality check using provided or default comparator
	const isDataEqual = useCallback((data1: any, data2: any): boolean => {
	  return dataComparator(data1, data2);
	}, [dataComparator]);

	// Handle tab selection with keyboard support
	const handleTabSelect = useCallback((index: number) => {
	  if (index >= 0 && index < tabPanels.length && !tabPanels[index].disabled) {
		dispatch({ type: 'SET_SELECTED_INDEX', payload: index });
		// Keep navigation state in sync
		setNavigationState(prev => ({ 
		  ...prev, 
		  focusedTabIndex: index,
		  focusArea: 'tabs'
		}));
		onTabChange?.(index);
	  }
	}, [tabPanels, onTabChange]);

	// Scroll tab into view utility
	const scrollTabIntoView = useCallback((tabIndex: number) => {
	  
	  // Small delay to ensure DOM is ready
	  setTimeout(() => {
		const tabElement = tabRefs.current[tabIndex];
		const tabListElement = tabElement?.parentElement;
		
		if (tabElement && tabListElement) {
		  // Always scroll to center the tab for better UX
		  const tabOffsetLeft = tabElement.offsetLeft;
		  const tabWidth = tabElement.offsetWidth;
		  const tabListWidth = tabListElement.clientWidth;
		  
		  // Center the tab in the viewport
		  const targetScrollLeft = tabOffsetLeft - (tabListWidth / 2) + (tabWidth / 2);
		  
		  // Try scrollTo first, fallback to scrollIntoView
		  try {
			tabListElement.scrollTo({
			  left: Math.max(0, targetScrollLeft),
			  behavior: 'smooth'
			});
		   
		  } catch (e) {
			
			// Fallback for browsers that don't support smooth scrolling
			tabElement.scrollIntoView({
			  behavior: 'smooth',
			  block: 'nearest',
			  inline: 'center'
			});
		  }
		} else {
		  console.log('Missing elements for scroll:', { tabElement, tabListElement });
		}
	  }, 50);
	}, []);

	// Hierarchical keyboard navigation handlers (inspired by GanttChart)
	const handleTabKeyDown = useCallback((event: React.KeyboardEvent, index: number) => {
	  const { key } = event;
	  
	  switch (key) {
		case 'ArrowLeft':
		  event.preventDefault();
		  const prevIndex = index > 0 ? index - 1 : tabPanels.length - 1;
		  handleTabSelect(prevIndex);
		  scrollTabIntoView(prevIndex);
		  tabRefs.current[prevIndex]?.focus();
		  break;
		
		case 'ArrowRight':
		  event.preventDefault();
		  const nextIndex = index < tabPanels.length - 1 ? index + 1 : 0;
		  handleTabSelect(nextIndex);
		  scrollTabIntoView(nextIndex);
		  tabRefs.current[nextIndex]?.focus();
		  break;
		
		case 'ArrowDown':
		  event.preventDefault();
		  // Navigate to headers of the current tab's grid
		  setNavigationState(prev => ({ 
			...prev, 
			focusArea: 'headers',
			focusedHeaderIndex: 0,
			isGridActive: true
		  }));
		  // Focus will happen in the next effect cycle when navigation state is updated
		  break;
		
		case 'Home':
		  event.preventDefault();
		  handleTabSelect(0);
		  scrollTabIntoView(0);
		  tabRefs.current[0]?.focus();
		  break;
		
		case 'End':
		  event.preventDefault();
		  const lastIndex = tabPanels.length - 1;
		  handleTabSelect(lastIndex);
		  scrollTabIntoView(lastIndex);
		  tabRefs.current[lastIndex]?.focus();
		  break;
		
		case 'Enter':
		case ' ':
		  event.preventDefault();
		  handleTabSelect(index);
		  break;
	  }
	}, [tabPanels.length, handleTabSelect, scrollTabIntoView]);

	// Tab refs for individual tabs
	const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
	const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Sort handlers for global sort configuration - cycles through asc -> desc -> none (remove)
	const handleSort = useCallback((tabIndex: number, key: string) => {
	  const currentSort = state.sortConfig || [];
	  const existingSort = currentSort.find((sort: SortConfig) => sort.key === key);
	  
	  let newSortConfig: SortConfig[];
	  if (existingSort) {
		if (existingSort.direction === 'asc') {
		  // Change to descending
		  newSortConfig = currentSort.map((sort: SortConfig) => 
			sort.key === key 
			  ? { ...sort, direction: 'desc' as const }
			  : sort
		  );
		} else {
		  // Remove the sort (desc -> none)
		  newSortConfig = currentSort.filter((sort: SortConfig) => sort.key !== key);
		}
	  } else {
		// Add new sort starting with ascending - append to end to maintain priority order
		newSortConfig = [...currentSort, { key, direction: 'asc' as const }];
	  }
	  
		// Dispatch the new sort configuration
	  dispatch({ 
		type: 'SET_SORT', 
		payload: newSortConfig
	  });

	  // Call custom sort handler if provided
	  const panel = tabPanels[tabIndex];
	  panel.onSort?.(key as any);
	}, [state.sortConfig, tabPanels]);

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

	// Reset all global sorts
	// const handleResetSorts = useCallback(() => {
	//   dispatch({ 
	//     type: 'SET_SORT', 
	//     payload: []
	//   });
	// }, []);

	// Generate sort description text showing all global sorts
	// const getCurrentSortDescription = useCallback(() => {
	//   const currentSorts = state.sortConfig || [];
	//   
	//   if (currentSorts.length === 0) {
	//     return 'No sorting applied';
	//   }

	//   // Show all global sorts with column labels where available
	//   const sortDescriptions = currentSorts.map((sort: SortConfig, index: number) => {
	//     // Find the column definition across all tabs
	//     let columnLabel = sort.key;
	//     for (const panel of tabPanels) {
	//       const column = panel.columns.find(col => col.key === sort.key);
	//       if (column) {
	//         columnLabel = column.label;
	//         break;
	//       }
	//     }
	//     
	//     const direction = sort.direction === 'asc' ? 'ascending' : 'descending';
	//     return `${index + 1}. ${columnLabel} (${direction})`;
	//   });

	//   // Join with proper grammar: commas and 'and' before the last item
	//   let sortText: string;
	//   if (sortDescriptions.length === 1) {
	//     sortText = sortDescriptions[0];
	//   } else if (sortDescriptions.length === 2) {
	//     sortText = sortDescriptions.join(' and ');
	//   } else {
	//     const lastItem = sortDescriptions.pop();
	//     sortText = sortDescriptions.join(', ') + ', and ' + lastItem;
	//   }

	//   return `Sorted by: ${sortText}`;
	// }, [state.sortConfig, tabPanels]);

	// Configurable boolean rendering function
	const renderBooleanIcon = useCallback((value: boolean) => {
	  return booleanRenderer(value);
	}, [booleanRenderer]);

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

	// Handle automatic focusing when navigation state changes
	useEffect(() => {
	  // Only auto-focus when isGridActive is true (indicates we're transitioning into the grid)
	  if (navigationState.isGridActive) {
		if (navigationState.focusArea === 'headers') {
		  setTimeout(() => {
			focusGridHeader(navigationState.focusedHeaderIndex);
		  }, 0);
		} else if (navigationState.focusArea === 'cells') {
		  setTimeout(() => {
			focusGridCell(navigationState.focusedRowIndex, navigationState.focusedColumnIndex);
		  }, 0);
		}
	  }
	}, [navigationState.focusArea, navigationState.isGridActive, navigationState.focusedHeaderIndex, navigationState.focusedRowIndex, navigationState.focusedColumnIndex, focusGridHeader, focusGridCell]);

	// Scroll selected tab into view when tab changes
	useEffect(() => {
	  scrollTabIntoView(state.selectedIndex);
	}, [state.selectedIndex, scrollTabIntoView]);

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
		  scrollTabIntoView(state.selectedIndex);
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
		  // Focus will happen in the next effect cycle when navigation state is updated
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
		case ' ': // Space key
		  event.preventDefault();
		  // Handle row selection - we'll get the row data from currentPanel.data
		  if (currentPanel && currentPanel.data[rowIndex]) {
			// Get filtered data
			const displayData = currentPanel.data.some((item: any) => 'ews_data' in item) 
			  ? filterFunction(currentPanel.data, state.filters)
			  : currentPanel.data;

			// Sort the data based on the global sort configuration
			const sortConfig = state.sortConfig;
			let sortedData = displayData;
			if (sortConfig && sortConfig.length > 0) {
			  sortedData = [...displayData].sort((a: any, b: any) => {
				// Apply each sort configuration in order
				for (const { key, direction } of sortConfig) {
				  let aValue = a[key];
				  let bValue = b[key];

				  // Handle rendered values
				  const column = currentPanel.columns.find(col => col.key === key);
				  if (column?.render) {
					aValue = column.render(a);
					bValue = column.render(b);
				  }

				  // Handle null/undefined values
				  if (aValue == null && bValue == null) continue;
				  if (aValue == null) return direction === 'asc' ? -1 : 1;
				  if (bValue == null) return direction === 'asc' ? 1 : -1;

				  // Type-specific comparison
				  let result = 0;
				  if (typeof aValue === 'number' && typeof bValue === 'number') {
					result = aValue - bValue;
				  } else {
					result = String(aValue).localeCompare(String(bValue), undefined, { numeric: true, sensitivity: 'base' });
				  }

				  if (result !== 0) {
					return direction === 'asc' ? result : -result;
				  }
				}
				return 0;
			  });
			}
			
			if (sortedData[rowIndex]) {
			  const row = sortedData[rowIndex];
			  const isCurrentlySelected = state.globalSelectedRowData && isDataEqual(state.globalSelectedRowData, row);
			  const newSelectedRowData = isCurrentlySelected ? null : row;
			  dispatch({
				type: 'SET_GLOBAL_SELECTED_ROW_DATA',
				payload: newSelectedRowData
			  });
			}
		  }
		  break;
	  }
	}, [tabPanels, state.selectedIndex, state.filters, state.sortConfig, filterFunction, isDataEqual, dispatch, setNavigationState, focusGridHeader, focusGridCell]);

	// Configurable filter function
	const getFilteredData = useCallback((data: any[], filters?: any): any[] => {
	  return filterFunction(data, filters);
	}, [filterFunction]);

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
	  getSelectedRows: (_tabIndex?: number) => {
		// Return global selected row as an array for backwards compatibility
		// For global row selection, we need to find the row index of the selected data
		// This requires the sortedData to be available in this scope
		const selectedRows = state.globalSelectedRowData ? [] : []; // We'll handle this in the render where sortedData is available
		return selectedRows;
	  },
	  clearSelection: (_tabIndex?: number) => {
		// Clear global selection instead of per-tab selection
		dispatch({
		  type: 'SET_GLOBAL_SELECTED_ROW_DATA',
		  payload: null
		});
	  },
	  applyFilters: (filters: any) => {
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

		<SortStatusControl
		  sortConfig={state.sortConfig || []}
		  columns={tabPanels.flatMap(panel => 
			panel.columns.map(col => ({ key: col.key, label: col.label }))
		  ).filter((col, index, arr) => 
			arr.findIndex(c => c.key === col.key) === index // Remove duplicates
		  )}
		  onSortChange={(newSortConfig) => {
			dispatch({ type: 'SET_SORT', payload: newSortConfig });
		  }}
		  ariaLabel="Data grid sort configuration"
		/>

		{/* Tab List with Manual ARIA Implementation */}
		<div 
		  role="tablist"
		  aria-label={ariaLabel}
		  aria-describedby={`${ariaDescription || ''} ${id ? `${id}-navigation-help` : ''}`.trim()}
		  aria-orientation={orientation}
		  className="aria-tabs-datagrid__tabs"
		>
		  {tabPanels.map((panel, index) => {
			// Use the actual selected tab, but ensure it stays in sync with navigation
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
				  // Get filtered data - check if it has healthcare structure
				  const displayData = panel.data.some((item: any) => 'ews_data' in item) 
					? getFilteredData(panel.data, state.filters)
					: panel.data;

				  // Sort the data based on the global sort configuration
				  const sortedData = useMemo(() => {
					const sortConfig = state.sortConfig;
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
				  }, [displayData, state.sortConfig, panel.columns]);

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
							const sortInfo = state.sortConfig?.find((config: SortConfig) => config.key === column.key);
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
								  <div className={`sort-indicator-container ${isSorted ? `sort-indicator--${sortInfo?.direction}` : ''}`}>
									{/* Show sort priority when any sort is configured and this column is sorted */}
									{state.sortConfig && state.sortConfig.length > 0 && 
									 state.sortConfig.findIndex((config: SortConfig) => config.key === column.key) !== -1 && (
									  <span 
										className={`sort-priority sort-priority--priority-${state.sortConfig.findIndex((config: SortConfig) => config.key === column.key) + 1}`}
										data-priority={state.sortConfig.findIndex((config: SortConfig) => config.key === column.key) + 1}
										title={`Sort priority: ${state.sortConfig.findIndex((config: SortConfig) => config.key === column.key) + 1}`}
									  >
										{state.sortConfig.findIndex((config: SortConfig) => config.key === column.key) + 1}
									  </span>
									)}
									{/* Show sort arrow only when column is actually sorted */}
									{isSorted && (
									  <svg
										className={`nhsuk-icon sort-arrow sort-arrow--${sortInfo?.direction}`}
										xmlns="http://www.w3.org/2000/svg" 
										viewBox="0 0 24 24" 
										aria-hidden="true" 
										focusable="false"
									  >
										<path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" />
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
						  // Use global row selection instead of per-tab selection
						  const isRowSelected = state.globalSelectedRowData && isDataEqual(state.globalSelectedRowData, row);
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
									  // Toggle global row selection - if same row clicked, deselect it
									  const isCurrentlySelected = state.globalSelectedRowData && isDataEqual(state.globalSelectedRowData, row);
									  const newSelectedRowData = isCurrentlySelected ? null : row;
									  dispatch({
										type: 'SET_GLOBAL_SELECTED_ROW_DATA',
										payload: newSelectedRowData
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


