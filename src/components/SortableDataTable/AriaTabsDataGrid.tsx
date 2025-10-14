import React, {
	useReducer,
	useCallback,
	useMemo,
	useRef,
	useImperativeHandle,
	forwardRef,
	useEffect,
	useState,
} from "react";
import {
	AriaTabsDataGridProps,
	AriaTabsDataGridState,
	AriaTabsDataGridAction,
} from "./AriaTabsDataGridTypes";
import { SortConfig } from "./AriaDataGridTypes";
import type { ColumnDefinition } from "./AriaDataGridTypes";
import "./AriaTabsDataGrid.scss";
import { SortStatusControl } from "./SortStatusControl/SortStatusControl";
import { buildMultiComparator } from './sortUtils';
import { NullsPosition } from './AriaDataGridTypes';

/**
 * Navigation focus areas for hierarchical keyboard navigation
 */
type FocusArea = "tabs" | "headers" | "cells" | "actions";

/**
 * Navigation state for hierarchical keyboard navigation
 */
interface NavigationState {
	focusArea: FocusArea;
	focusedTabIndex: number;
	focusedHeaderIndex: number;
	focusedRowIndex: number;
	focusedColumnIndex: number;
	focusedActionIndex: number;
	isGridActive: boolean;
}

function tabsDataGridReducer(
	state: AriaTabsDataGridState,
	action: AriaTabsDataGridAction
): AriaTabsDataGridState {
	switch (action.type) {
		case "SET_SELECTED_INDEX":
			return { ...state, selectedIndex: action.payload };

		case "SET_TAB_LOADING":
			const newLoadingStates = [...state.tabLoadingStates];
			newLoadingStates[action.payload.tabIndex] = action.payload.isLoading;
			return { ...state, tabLoadingStates: newLoadingStates };

		case "SET_TAB_ERROR":
			const newErrors = [...state.tabErrors];
			newErrors[action.payload.tabIndex] = action.payload.error;
			return { ...state, tabErrors: newErrors };

		case "SET_SORT":
			return { ...state, sortConfig: action.payload };

		case "SET_SELECTED_ROWS":
			const newSelectedRows = [...state.selectedRows];
			newSelectedRows[action.payload.tabIndex] = action.payload.rowIndices;
			return { ...state, selectedRows: newSelectedRows };

		case "SET_GLOBAL_SELECTED_ROW_DATA":
			return { ...state, globalSelectedRowData: action.payload };

		case "SET_FILTERS":
			return { ...state, filters: action.payload };

		case "ADJUST_ARRAYS":
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
				selectedRows: adjustedSelectedRows,
			};

		case "RESET_STATE":
			return {
				selectedIndex: 0,
				tabLoadingStates: new Array(state.tabLoadingStates.length).fill(false),
				tabErrors: new Array(state.tabErrors.length).fill(null),
				sortConfig: [],
				selectedRows: new Array(state.selectedRows.length).fill([]),
				globalSelectedRowData: null,
				filters: undefined,
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
export const AriaTabsDataGrid = forwardRef<
	AriaTabsDataGridRef,
	AriaTabsDataGridProps
>(function AriaTabsDataGrid(props, ref) {
	const {
		dataConfig = {},
		tabPanels,
		selectedIndex: selectedIndexProp,
		onTabChange,
		onGlobalRowSelectionChange,
		ariaLabel,
		ariaDescription,
		className = "",
		disabled = false,
		orientation = "horizontal",
		id,
		isLoading = false,
		loadingComponent,
		error = null,
		errorComponent,
		"data-testid": dataTestId,
		actions,
		actionsMinGap = 16,
		forceActionsAbove = false,
		hideTabsIfSingle = false,
		minColumnWidth,
		enableColumnCollapse = false,
		minVisibleColumns = 2,
		showCollapsedColumnsIndicator = true,
	} = props;

	// Allow developer to hide the tab list when only a single tab/panel is provided
	const tabsHidden = hideTabsIfSingle && tabPanels.length === 1;

	// Generate a stable base id for internal helper elements when no `id` prop is provided.
	const baseIdRef = useRef<string>(
		id || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
	);
	const baseId = baseIdRef.current;

	// ariaDescription can be either a reference id (when consumers pass an existing element id)
	// or plain descriptive text. Detect simple ids (no whitespace) and handle accordingly.
	const descriptionLooksLikeId =
		typeof ariaDescription === "string" &&
		ariaDescription.trim() !== "" &&
		!/\s/.test(ariaDescription);
	const generatedDescriptionId = `${baseId}-description`;
	const navigationHelpId = `${baseId}-navigation-help`;

	// Extract data operation functions with defaults
	const {
		dataComparator = (a: any, b: any) =>
			JSON.stringify(a) === JSON.stringify(b),
		filterFunction = (data: any[]) => data,
		booleanRenderer = (value: any) => (value ? "✓" : "✗"),
	} = dataConfig || {}; // Determine if component is controlled
	const isControlled = selectedIndexProp !== undefined;
	const selectedIndex = selectedIndexProp ?? 0;

	// Navigation state for hierarchical keyboard navigation (like GanttChart)
	const [navigationState, setNavigationState] = useState<NavigationState>({
		focusArea: tabsHidden ? "headers" : "tabs",
		focusedTabIndex: selectedIndex,
		focusedHeaderIndex: 0,
		focusedRowIndex: 0,
		focusedColumnIndex: 0,
		focusedActionIndex: 0,
		isGridActive: false,
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
			filters: undefined,
		};
	}, [selectedIndex]); // Remove tabPanels dependency to prevent state resets

	const [state, dispatch] = useReducer(tabsDataGridReducer, initialState);

	// Handle tabPanels length changes without resetting sort configuration
	useEffect(() => {
		const currentLength = state.tabLoadingStates.length;
		const newLength = tabPanels.length;

		if (currentLength !== newLength) {
			// Adjust array lengths while preserving existing sort configuration
			dispatch({ type: "ADJUST_ARRAYS", payload: { newLength } });
		}
	}, [tabPanels.length]);

	// Controlled component support - sync selectedIndex when it changes externally
	useEffect(() => {
		if (isControlled) {
			dispatch({ type: "SET_SELECTED_INDEX", payload: selectedIndex });
		}
	}, [selectedIndex, isControlled]);

	// Reset navigation state when selected tab changes to ensure proper keyboard navigation
	useEffect(() => {
		setNavigationState((prev) => ({
			...prev,
			focusArea: tabsHidden ? "headers" : "tabs",
			focusedTabIndex: state.selectedIndex,
			focusedHeaderIndex: 0,
			focusedRowIndex: 0,
			focusedColumnIndex: 0,
			focusedActionIndex: 0,
			isGridActive: false,
		}));
	}, [state.selectedIndex, tabsHidden]);

	// Horizontal scroll support for wide tables when min column width is applied
	const scrollContainerRef = useRef<HTMLDivElement | null>(null);
	const onOverflowScrollKey = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
		if (!e.shiftKey) return;
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			scrollContainerRef.current?.scrollBy({ left: -64, behavior: 'smooth' });
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			scrollContainerRef.current?.scrollBy({ left: 64, behavior: 'smooth' });
		}
	}, []);

	// Column collapse state: track hidden column keys per active panel index
	const [hiddenColumnsByPanel, setHiddenColumnsByPanel] = useState<Record<number, Set<string>>>({});
	const [collapsedPopoverOpen, setCollapsedPopoverOpen] = useState(false);
	const collapsedButtonRef = useRef<HTMLButtonElement | null>(null);
	const liveRegionRef = useRef<HTMLDivElement | null>(null);

	// Helper to get visible columns for a given panel index
	const getVisibleColumns = useCallback((panelIndex: number): ColumnDefinition[] => {
		const panel = tabPanels[panelIndex];
		if (!panel) return [] as ColumnDefinition[];
		const hidden = hiddenColumnsByPanel[panelIndex] || new Set<string>();
		return panel.columns.filter((col: ColumnDefinition) => !hidden.has(col.key));
	}, [tabPanels, hiddenColumnsByPanel]);

	// Compute visible columns for current panel given collapse rules
	const computeHiddenColumns = useCallback((panelIndex: number) => {
		const panel = tabPanels[panelIndex];
		if (!panel) return new Set<string>();
		// If collapse disabled, nothing hidden
		if (!enableColumnCollapse) return new Set<string>();
		const container = scrollContainerRef.current?.parentElement as HTMLElement | null;
		if (!container) return new Set<string>();
		// Start with all columns visible, measure total min widths
		const defaultMin = typeof minColumnWidth === 'number' ? `${minColumnWidth}px` : (minColumnWidth || '160px');
		const cols = panel.columns.map((c, i) => ({
			key: c.key,
			min: c.minWidth !== undefined ? (typeof c.minWidth === 'number' ? `${c.minWidth}px` : String(c.minWidth)) : defaultMin,
			priority: c.collapsePriority ?? i,
			lock: !!c.alwaysVisible,
			group: c.collapseGroup,
			groupPriority: c.collapseGroupPriority ?? 0,
		}));
		// Calculate pixels from CSS lengths by creating a temporary element
		const toPx = (len: string): number => {
			if (len.endsWith('px')) return parseFloat(len);
			const probe = document.createElement('div');
			probe.style.width = len;
			container.appendChild(probe);
			const px = probe.getBoundingClientRect().width;
			probe.remove();
			return px || 0;
		};
		const totalWidth = cols.reduce((sum, c) => sum + toPx(c.min), 0);
		const available = container.clientWidth;
		if (totalWidth <= available || cols.length <= minVisibleColumns) return new Set<string>();
		// Build collapse groups: group columns when group id provided, else treat individually
		const items = cols.map((c, idx) => ({ ...c, idx }));
		const groups = new Map<string, { keys: string[]; width: number; groupPriority: number; lock: boolean; indices: number[] }>();
		for (const it of items) {
			if (it.group) {
				const g = groups.get(it.group) || { keys: [], width: 0, groupPriority: it.groupPriority, lock: false, indices: [] };
				g.keys.push(it.key);
				g.width += toPx(it.min);
				g.groupPriority = Math.max(g.groupPriority, it.groupPriority);
				g.lock = g.lock || it.lock;
				g.indices.push(it.idx);
				groups.set(it.group, g);
			}
		}
		// Candidates list: start with groups (that are not locked), then individual non-group columns
		type Candidate = { type: 'group' | 'column'; keys: string[]; width: number; priority: number; rightmostIndex: number };
		const candidates: Candidate[] = [];
		for (const [_, g] of groups) {
			if (!g.lock) {
				candidates.push({ type: 'group', keys: g.keys, width: g.width, priority: g.groupPriority, rightmostIndex: Math.max(...g.indices) });
			}
		}
		for (const it of items) {
			if (!it.group && !it.lock) {
				candidates.push({ type: 'column', keys: [it.key], width: toPx(it.min), priority: it.priority, rightmostIndex: it.idx });
			}
		}
		// Sort candidates: higher priority first, then drop rightmost first
		candidates.sort((a, b) => {
			if (a.priority !== b.priority) return b.priority - a.priority;
			return b.rightmostIndex - a.rightmostIndex;
		});
		let hidden = new Set<string>();
		let currentTotal = totalWidth;
		const totalCols = cols.length;
		for (const c of candidates) {
			if (totalCols - hidden.size <= minVisibleColumns) break;
			if (currentTotal - c.width >= available) {
				for (const k of c.keys) hidden.add(k);
				currentTotal -= c.width;
			} else {
				// not enough to fit; try next lower priority
				continue;
			}
		}
		return hidden;
	}, [tabPanels, enableColumnCollapse, minColumnWidth, minVisibleColumns]);

	// Recompute on resize and when selectedIndex or columns change
	useEffect(() => {
		if (!enableColumnCollapse) return;
		const recompute = () => {
			const hidden = computeHiddenColumns(state.selectedIndex);
			setHiddenColumnsByPanel(prev => ({ ...prev, [state.selectedIndex]: hidden }));
			// Announce change to assistive tech
			if (showCollapsedColumnsIndicator && liveRegionRef.current) {
				const count = hidden.size;
				liveRegionRef.current.textContent = count > 0 ? `${count} column${count === 1 ? '' : 's'} collapsed` : 'All columns visible';
			}
		};
		recompute();
		const ro = new ResizeObserver(recompute);
		if (containerRef.current) ro.observe(containerRef.current);
		return () => {
			ro.disconnect();
		};
	}, [state.selectedIndex, tabPanels, enableColumnCollapse, computeHiddenColumns, showCollapsedColumnsIndicator]);

	// Handle global row selection callback
	useEffect(() => {
		if (onGlobalRowSelectionChange) {
			onGlobalRowSelectionChange(state.globalSelectedRowData);
		}
	}, [state.globalSelectedRowData, onGlobalRowSelectionChange]);

	// Generic data equality check using provided or default comparator
	const isDataEqual = useCallback(
		(data1: any, data2: any): boolean => {
			return dataComparator(data1, data2);
		},
		[dataComparator]
	);

	// Handle tab selection with keyboard support
	const handleTabSelect = useCallback(
		(index: number) => {
			if (
				index >= 0 &&
				index < tabPanels.length &&
				!tabPanels[index].disabled
			) {
				dispatch({ type: "SET_SELECTED_INDEX", payload: index });
				// Keep navigation state in sync
				setNavigationState((prev) => ({
					...prev,
					focusedTabIndex: index,
					focusArea: "tabs",
				}));
				onTabChange?.(index);
			}
		},
		[tabPanels, onTabChange]
	);

	// Scroll tab into view utility
	const initialScrollDoneRef = useRef(false);
	const scrollTabIntoView = useCallback(
		(tabIndex: number, opts?: { force?: boolean }) => {
			// Skip centering the very first tab on initial mount so it stays flush-left
			if (!opts?.force && !initialScrollDoneRef.current && tabIndex === 0) {
				initialScrollDoneRef.current = true; // prevent future skips
				return;
			}
			initialScrollDoneRef.current = true;
			// Small delay to ensure DOM is ready
			setTimeout(() => {
				const tabElement = tabRefs.current[tabIndex];
				const tabListElement = tabElement?.parentElement as HTMLElement | null;
				if (tabElement && tabListElement) {
					const tabOffsetLeft = tabElement.offsetLeft;
					const tabWidth = tabElement.offsetWidth;
					const tabListWidth = tabListElement.clientWidth;
					const targetScrollLeft =
						tabOffsetLeft - tabListWidth / 2 + tabWidth / 2;
					try {
						tabListElement.scrollTo({
							left: Math.max(0, targetScrollLeft),
							behavior: "smooth",
						});
					} catch {
						tabElement.scrollIntoView({
							behavior: "smooth",
							block: "nearest",
							inline: "center",
						});
					}
				} else if (!process.env.SILENCE_SCROLL_DEBUG) {
					console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
						tabElementExists: !!tabElement,
						tabListElementExists: !!tabListElement,
					});
				}
			}, 50);
		},
		[]
	);

	// Hierarchical keyboard navigation handlers (inspired by GanttChart)

	// Tab refs for individual tabs
	const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
	const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Sort handlers for global sort configuration - cycles through asc -> desc -> none (remove)
	const handleSort = useCallback(
		(tabIndex: number, key: string) => {
			const currentSort = state.sortConfig || [];
			const existingSort = currentSort.find(
				(sort: SortConfig) => sort.key === key
			);

			let newSortConfig: SortConfig[];
			if (existingSort) {
				if (existingSort.direction === "asc") {
					// Change to descending
					newSortConfig = currentSort.map((sort: SortConfig) =>
						sort.key === key ? { ...sort, direction: "desc" as const } : sort
					);
				} else {
					// Remove the sort (desc -> none)
					newSortConfig = currentSort.filter(
						(sort: SortConfig) => sort.key !== key
					);
				}
			} else {
				// Add new sort starting with ascending - append to end to maintain priority order
				newSortConfig = [...currentSort, { key, direction: "asc" as const }];
			}

			// Dispatch the new sort configuration
			dispatch({
				type: "SET_SORT",
				payload: newSortConfig,
			});

			// Call custom sort handler if provided
			const panel = tabPanels[tabIndex];
			panel.onSort?.(key as any);
		},
		[state.sortConfig, tabPanels]
	);

	// Focus management utilities
	const focusGridHeader = useCallback(
		(headerIndex: number) => {
			setTimeout(() => {
				const headerElement = document.querySelector(
					`[data-tab-panel="${state.selectedIndex}"] th:nth-child(${headerIndex + 1})`
				) as HTMLElement;
				if (headerElement) {
					headerElement.focus();
				}
			}, 0);
		},
		[state.selectedIndex]
	);

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
	const renderBooleanIcon = useCallback(
		(value: boolean) => {
			return booleanRenderer(value);
		},
		[booleanRenderer]
	);

	const focusGridCell = useCallback(
		(rowIndex: number, colIndex: number) => {
			setTimeout(() => {
				const cellElement = document.querySelector(
					`[data-tab-panel="${state.selectedIndex}"] tbody tr:nth-child(${rowIndex + 1}) td:nth-child(${colIndex + 1})`
				) as HTMLElement;
				if (cellElement) {
					cellElement.focus();
				}
			}, 0);
		},
		[state.selectedIndex]
	);

	// Handle automatic focusing when navigation state changes
	useEffect(() => {
		// Only auto-focus when isGridActive is true (indicates we're transitioning into the grid)
		if (navigationState.isGridActive) {
			if (navigationState.focusArea === "headers") {
				setTimeout(() => {
					focusGridHeader(navigationState.focusedHeaderIndex);
				}, 0);
			} else if (navigationState.focusArea === "cells") {
				setTimeout(() => {
					focusGridCell(
						navigationState.focusedRowIndex,
						navigationState.focusedColumnIndex
					);
				}, 0);
			}
		}
	}, [
		navigationState.focusArea,
		navigationState.isGridActive,
		navigationState.focusedHeaderIndex,
		navigationState.focusedRowIndex,
		navigationState.focusedColumnIndex,
		focusGridHeader,
		focusGridCell,
	]);

	// Scroll selected tab into view when tab changes
	useEffect(() => {
		if (!tabsHidden) {
			scrollTabIntoView(state.selectedIndex);
		}
	}, [state.selectedIndex, scrollTabIntoView, tabsHidden]);

	// Grid header navigation (similar to GanttChart date navigation)
	const handleHeaderKeyDown = useCallback(
		(event: React.KeyboardEvent, headerIndex: number) => {
			const { key } = event;
			const columnCount = getVisibleColumns(state.selectedIndex).length || 0;

			switch (key) {
				case "ArrowLeft":
					event.preventDefault();
					const prevHeaderIndex = Math.max(0, headerIndex - 1);
					setNavigationState((prev) => ({
						...prev,
						focusedHeaderIndex: prevHeaderIndex,
					}));
					focusGridHeader(prevHeaderIndex);
					break;

				case "ArrowRight":
					event.preventDefault();
					const nextHeaderIndex = Math.min(columnCount - 1, headerIndex + 1);
					setNavigationState((prev) => ({
						...prev,
						focusedHeaderIndex: nextHeaderIndex,
					}));
					focusGridHeader(nextHeaderIndex);
					break;

				case "ArrowUp":
					event.preventDefault();
					// When tabs are visible, navigate back to tabs; otherwise, try actions if present
					if (!tabsHidden) {
						setNavigationState((prev) => ({
							...prev,
							focusArea: "tabs",
							focusedTabIndex: state.selectedIndex,
						}));
						scrollTabIntoView(state.selectedIndex);
						tabRefs.current[state.selectedIndex]?.focus();
					} else if (actions) {
						// focus first action if available
						setTimeout(() => {
							const toolbar = actionsRef.current;
							if (!toolbar) return;
							const focusable = toolbar.querySelector<HTMLElement>(
								'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
							);
							focusable?.focus();
						}, 0);
					}
					break;

				case "ArrowDown":
					event.preventDefault();
					// Navigate to grid cells
					setNavigationState((prev) => ({
						...prev,
						focusArea: "cells",
						focusedRowIndex: 0,
						focusedColumnIndex: headerIndex,
						isGridActive: true,
					}));
					// Focus will happen in the next effect cycle when navigation state is updated
					break;

				case "Home":
					event.preventDefault();
					setNavigationState((prev) => ({ ...prev, focusedHeaderIndex: 0 }));
					focusGridHeader(0);
					break;

				case "End":
					event.preventDefault();
					const lastHeaderIndex = columnCount - 1;
					setNavigationState((prev) => ({
						...prev,
						focusedHeaderIndex: lastHeaderIndex,
					}));
					focusGridHeader(lastHeaderIndex);
					break;

				case "Enter":
				case " ":
					event.preventDefault();
					// Sort by this visible column
					const columnKey = getVisibleColumns(state.selectedIndex)[headerIndex]?.key;
					if (columnKey) {
						handleSort(state.selectedIndex, columnKey);
					}
					break;
			}
		},
		[
			tabPanels,
			state.selectedIndex,
			handleSort,
			setNavigationState,
			focusGridHeader,
			focusGridCell,
			tabRefs,
			getVisibleColumns,
		]
	);

	// Grid cell navigation (similar to GanttChart task navigation)
	const handleCellKeyDown = useCallback(
		(event: React.KeyboardEvent, rowIndex: number, colIndex: number) => {
			const { key } = event;
			const currentPanel = tabPanels[state.selectedIndex];
			const rowCount = currentPanel?.data.length || 0;
			const columnCount = getVisibleColumns(state.selectedIndex).length || 0;

			// Grid navigation mode (moving between cells)
			switch (key) {
				case "ArrowUp":
					event.preventDefault();
					if (rowIndex === 0) {
						// Navigate to headers
						setNavigationState((prev) => ({
							...prev,
							focusArea: "headers",
							focusedHeaderIndex: colIndex,
							isGridActive: false,
						}));
						focusGridHeader(colIndex);
					} else {
						const newRowIndex = rowIndex - 1;
						setNavigationState((prev) => ({
							...prev,
							focusedRowIndex: newRowIndex,
						}));
						focusGridCell(newRowIndex, colIndex);
					}
					break;

				case "ArrowDown":
					event.preventDefault();
					const newRowIndex = Math.min(rowCount - 1, rowIndex + 1);
					setNavigationState((prev) => ({
						...prev,
						focusedRowIndex: newRowIndex,
					}));
					focusGridCell(newRowIndex, colIndex);
					break;

				case "ArrowLeft":
					event.preventDefault();
					const newColIndex = Math.max(0, colIndex - 1);
					setNavigationState((prev) => ({
						...prev,
						focusedColumnIndex: newColIndex,
					}));
					focusGridCell(rowIndex, newColIndex);
					break;

				case "ArrowRight":
					event.preventDefault();
					const nextColIndex = Math.min(columnCount - 1, colIndex + 1);
					setNavigationState((prev) => ({
						...prev,
						focusedColumnIndex: nextColIndex,
					}));
					focusGridCell(rowIndex, nextColIndex);
					break;

				case "Home":
					event.preventDefault();
					if (event.ctrlKey) {
						// Go to first cell
						setNavigationState((prev) => ({
							...prev,
							focusedRowIndex: 0,
							focusedColumnIndex: 0,
						}));
						focusGridCell(0, 0);
					} else {
						// Go to first column in current row
						setNavigationState((prev) => ({ ...prev, focusedColumnIndex: 0 }));
						focusGridCell(rowIndex, 0);
					}
					break;

				case "End":
					event.preventDefault();
					if (event.ctrlKey) {
						// Go to last cell
						const lastRow = rowCount - 1;
						const lastCol = columnCount - 1;
						setNavigationState((prev) => ({
							...prev,
							focusedRowIndex: lastRow,
							focusedColumnIndex: lastCol,
						}));
						focusGridCell(lastRow, lastCol);
					} else {
						// Go to last column in current row
						const lastCol = columnCount - 1;
						setNavigationState((prev) => ({
							...prev,
							focusedColumnIndex: lastCol,
						}));
						focusGridCell(rowIndex, lastCol);
					}
					break;

				case "Enter":
				case " ": // Space key
					event.preventDefault();
					// Handle row selection - we'll get the row data from currentPanel.data
					if (currentPanel && currentPanel.data[rowIndex]) {
						// Get filtered data
						const displayData = currentPanel.data.some(
							(item: any) => "ews_data" in item
						)
							? filterFunction(currentPanel.data, state.filters)
							: currentPanel.data;

						// Sort the data based on the global sort configuration
						const sortConfig = state.sortConfig;
						let sortedData = displayData;
						if (sortConfig && sortConfig.length > 0) {
							const comparator = buildMultiComparator(currentPanel.columns as any, sortConfig, NullsPosition.Last, dataConfig?.sortingOptions);
							sortedData = [...displayData].sort(comparator);
						}

						if (sortedData[rowIndex]) {
							const row = sortedData[rowIndex];
							const isCurrentlySelected =
								state.globalSelectedRowData &&
								isDataEqual(state.globalSelectedRowData, row);
							const newSelectedRowData = isCurrentlySelected ? null : row;
							dispatch({
								type: "SET_GLOBAL_SELECTED_ROW_DATA",
								payload: newSelectedRowData,
							});
						}
					}
					break;
			}
		},
		[
			tabPanels,
			state.selectedIndex,
			state.filters,
			state.sortConfig,
			filterFunction,
			isDataEqual,
			dispatch,
			setNavigationState,
			focusGridHeader,
			focusGridCell,
			getVisibleColumns,
		]
	);

	// Configurable filter function
	const getFilteredData = useCallback(
		(data: any[], filters?: any): any[] => {
			return filterFunction(data, filters);
		},
		[filterFunction]
	);

	// Imperative API
	useImperativeHandle(
		ref,
		() => ({
			selectTab: (index: number) => {
				if (index >= 0 && index < tabPanels.length) {
					dispatch({ type: "SET_SELECTED_INDEX", payload: index });
					onTabChange?.(index);
				}
			},
			refreshData: (tabIndex?: number) => {
				// Implementation for data refresh
				console.log("Refreshing data for tab:", tabIndex ?? "all");
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
					type: "SET_GLOBAL_SELECTED_ROW_DATA",
					payload: null,
				});
			},
			applyFilters: (filters: any) => {
				dispatch({ type: "SET_FILTERS", payload: filters });
			},
		}),
		[state.selectedIndex, state.selectedRows, tabPanels, onTabChange]
	);

	// Loading state
	if (isLoading) {
		return (
			<div
				className={`aria-tabs-datagrid aria-tabs-datagrid--loading ${className}`}
				data-testid={dataTestId}
			>
				{loadingComponent || (
					<div className="aria-tabs-datagrid__loading">
						<div
							className="nhsuk-spinner"
							role="status"
							aria-label="Loading data"
						>
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
			<div
				className={`aria-tabs-datagrid aria-tabs-datagrid--error ${className}`}
				data-testid={dataTestId}
			>
				{errorComponent || (
					<div className="aria-tabs-datagrid__error" role="alert">
						<h3 className="nhsuk-error-summary__title">Error loading data</h3>
						<p>{error}</p>
					</div>
				)}
			</div>
		);
	}

	// Responsive actions placement: attempt inline (right side) if tabs + actions fit in container width
	const containerRef = useRef<HTMLDivElement | null>(null);
	const tabListRef = useRef<HTMLDivElement | null>(null);
	const actionsRef = useRef<HTMLDivElement | null>(null);
	const [placeActionsInline, setPlaceActionsInline] = useState(true); // optimistic: try inline first

	useEffect(() => {
		if (!actions) {
			setPlaceActionsInline(false);
			return;
		}
		// If there are no tabs visible, always place actions above the table
		if (tabsHidden || forceActionsAbove) {
			setPlaceActionsInline(false);
			return;
		}
		function recompute() {
			if (!containerRef.current || !tabListRef.current || !actionsRef.current) return;
			const containerWidth = containerRef.current.clientWidth;
			// Measure sum of tab buttons widths
			const tabButtons = Array.from(
				tabListRef.current.querySelectorAll(':scope > .aria-tabs-datagrid__tab')
			) as HTMLElement[];
			const tabsWidth = tabButtons.reduce((w, el) => w + el.offsetWidth, 0);
			const actionsWidth = actionsRef.current.offsetWidth;
			const estimatedGaps = Math.max(8 * (tabButtons.length - 1), 0);
			const fits = tabsWidth + estimatedGaps + actionsWidth + actionsMinGap <= containerWidth;
			setPlaceActionsInline(fits);
		}
		// Delay measurement to next frame to allow fonts/layout settle
		const raf = requestAnimationFrame(() => recompute());
		const ro = new ResizeObserver(() => recompute());
		if (containerRef.current) ro.observe(containerRef.current);
		if (tabListRef.current) ro.observe(tabListRef.current);
		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
		};
	}, [actions, actionsMinGap, forceActionsAbove, tabPanels.length, tabsHidden]);

	// Actions toolbar navigation helpers now that placement state exists
	const actionsContainerRef = actionsRef; // reuse DOM ref
	const getActionElements = useCallback((): HTMLElement[] => {
		if (!actionsContainerRef.current) return [];
		return Array.from(
			actionsContainerRef.current.querySelectorAll<HTMLElement>(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			)
		).filter((el) => !el.hasAttribute("disabled"));
	}, []);
	const focusAction = useCallback(
		(idx: number) => {
			const els = getActionElements();
			if (!els.length) return;
			const clamped = Math.max(0, Math.min(idx, els.length - 1));
			els[clamped].focus();
			setNavigationState((prev) => ({ ...prev, focusArea: "actions", focusedActionIndex: clamped }));
		},
		[getActionElements]
	);
	const focusFirstAction = useCallback(() => focusAction(0), [focusAction]);

	const handleTabKeyDown = useCallback(
		(event: React.KeyboardEvent, index: number) => {
			const { key } = event;
			const lastTab = tabPanels.length - 1;
			switch (key) {
				case "ArrowUp": {
					if (actions && !placeActionsInline) {
						event.preventDefault();
						focusFirstAction();
					}
					break; }
				case "ArrowLeft": {
					event.preventDefault();
					const prevIdx = index > 0 ? index - 1 : lastTab;
					handleTabSelect(prevIdx);
					scrollTabIntoView(prevIdx);
					tabRefs.current[prevIdx]?.focus();
					break; }
				case "ArrowRight": {
					event.preventDefault();
					if (index === lastTab && actions && placeActionsInline) {
						focusFirstAction();
						return;
					}
					const nextIdx = index < lastTab ? index + 1 : 0;
					handleTabSelect(nextIdx);
					scrollTabIntoView(nextIdx);
					tabRefs.current[nextIdx]?.focus();
					break; }
				case "ArrowDown": {
					event.preventDefault();
					setNavigationState((prev) => ({
						...prev,
						focusArea: "headers",
						focusedHeaderIndex: 0,
						isGridActive: true,
					}));
					break; }
				case "Home": {
					event.preventDefault();
					handleTabSelect(0);
					scrollTabIntoView(0);
					tabRefs.current[0]?.focus();
					break; }
				case "End": {
					event.preventDefault();
					handleTabSelect(lastTab);
					scrollTabIntoView(lastTab);
					tabRefs.current[lastTab]?.focus();
					break; }
				case "Enter":
				case " ": {
					event.preventDefault();
					handleTabSelect(index);
					break; }
				case "Tab": {
					if (!event.shiftKey && index === lastTab && actions && placeActionsInline) {
						focusFirstAction();
					}
					break; }
			}
		},
		[tabPanels.length, handleTabSelect, scrollTabIntoView, actions, placeActionsInline, focusFirstAction]
	);

	const handleActionsKeyDown = useCallback((event: React.KeyboardEvent) => {
		const { key } = event;
		const els = getActionElements();
		if (!els.length) return;
		const currentIndex = els.findIndex((el) => el === document.activeElement);
		switch (key) {
			case 'ArrowLeft': {
				if (placeActionsInline) {
					if (currentIndex > 0) {
						event.preventDefault();
						focusAction(currentIndex - 1);
					} else {
						event.preventDefault();
						// move focus to last tab
						const last = tabPanels.length - 1;
						handleTabSelect(last);
						scrollTabIntoView(last);
						tabRefs.current[last]?.focus();
						setNavigationState((p) => ({ ...p, focusArea: 'tabs', focusedTabIndex: last }));
					}
				}
				break; }
			case 'ArrowRight': {
				if (placeActionsInline) {
					if (currentIndex < els.length - 1) {
						event.preventDefault();
						focusAction(currentIndex + 1);
					} else {
						// wrap to first tab
						event.preventDefault();
						handleTabSelect(0);
						scrollTabIntoView(0);
						tabRefs.current[0]?.focus();
						setNavigationState((p) => ({ ...p, focusArea: 'tabs', focusedTabIndex: 0 }));
					}
				}
				break; }
			case 'ArrowDown': {
				// If actions are above (not inline), move to tabs; else move into headers
				if (!placeActionsInline) {
					event.preventDefault();
					// focus currently selected tab
					const currentTab = state.selectedIndex;
					tabRefs.current[currentTab]?.focus();
					setNavigationState((p) => ({ ...p, focusArea: 'tabs', focusedTabIndex: currentTab }));
				} else {
					event.preventDefault();
					setNavigationState((prev) => ({ ...prev, focusArea: 'headers', focusedHeaderIndex: 0, isGridActive: true }));
				}
				break; }
		}
	}, [getActionElements, placeActionsInline, focusAction, tabPanels.length, handleTabSelect, scrollTabIntoView, state.selectedIndex]);

	return (
		<div
			className={`aria-tabs-datagrid aria-tabs-datagrid--${orientation} ${className}`}
			id={id}
			data-testid={dataTestId}
			ref={containerRef}
		>
			{/* Optional descriptive text (converted from plain string to element for aria-describedby).
		    If `ariaDescription` looks like an existing id, use it directly; otherwise render a
		    visually-hidden element with a generated id and put the text there. */}
			{ariaDescription && !descriptionLooksLikeId && (
				<div id={generatedDescriptionId} className="nhsuk-u-visually-hidden">
					{ariaDescription}
				</div>
			)}
			{/* Keyboard Navigation Instructions (Screen Reader Only) */}
			<div
				className="aria-tabs-datagrid__navigation-help sr-only"
				id={navigationHelpId}
			>
				Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys
				navigate within tabs and grid cells. Enter activates tabs and sorts
				columns. Arrow Down from tabs moves to table headers. Arrow Down from
				headers moves to table cells. Use Arrow keys to navigate between cells.
			</div>

			<SortStatusControl
				sortConfig={state.sortConfig || []}
				columns={tabPanels
					.flatMap((panel) =>
						panel.columns.map((col) => ({ key: col.key, label: col.label }))
					)
					.filter(
						(col, index, arr) =>
							arr.findIndex((c) => c.key === col.key) === index // Remove duplicates
					)}
				onSortChange={(newSortConfig) => {
					dispatch({ type: "SET_SORT", payload: newSortConfig });
				}}
				ariaLabel="Data grid sort configuration"
			/>

			{/* Tab List with Manual ARIA Implementation */}
			{/* Actions above when not inline, or when tabs are hidden */}
			{actions && (!placeActionsInline || tabsHidden) && (
				<div
					className="aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above"
					ref={actionsRef}
					role="toolbar"
					aria-label="Additional actions"
					onKeyDown={handleActionsKeyDown}
				>
					{actions}
				</div>
			)}

			{!tabsHidden && (
				<div className={`aria-tabs-datagrid__tabs-wrapper ${placeActionsInline ? 'aria-tabs-datagrid__tabs-wrapper--inline-actions' : ''}`}> 
					<div
						role="tablist"
						aria-label={ariaLabel}
						aria-describedby={(() => {
							if (ariaDescription) {
								return descriptionLooksLikeId ? (ariaDescription as string) : generatedDescriptionId;
							}
							return navigationHelpId;
						})()}
						aria-orientation={orientation}
						className="aria-tabs-datagrid__tabs"
						ref={tabListRef}
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
									ref={(el) => { tabRefs.current[index] = el; }}
									onClick={() => handleTabSelect(index)}
									onKeyDown={(event) => handleTabKeyDown(event, index)}
									disabled={isDisabled}
									className={[
										'aria-tabs-datagrid__tab',
										isSelected ? 'aria-tabs-datagrid__tab--selected' : '',
										isDisabled ? 'aria-tabs-datagrid__tab--disabled' : '',
									].filter(Boolean).join(' ')}
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
					{ actions && placeActionsInline && (
						<div
							className="aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline"
							ref={actionsRef}
							role="toolbar"
							aria-label="Additional actions"
							onKeyDown={handleActionsKeyDown}
						>
							{actions}
						</div>
					)}
				</div>
			)}

			{/* Tab Panels */}
			{tabPanels.map((panel, index) => {
				const isSelected = tabsHidden ? index === 0 : index === state.selectedIndex;

				return (
					<div
						key={panel.id}
						role={tabsHidden ? undefined : "tabpanel"}
						id={tabsHidden ? undefined as any : `panel-${panel.id}`}
						aria-labelledby={tabsHidden ? undefined : `tab-${panel.id}`}
						tabIndex={0}
						hidden={!isSelected}
						ref={(el) => {
							panelRefs.current[index] = el;
						}}
						className={`aria-tabs-datagrid__panel ${panel.className || ""}`}
						data-tab-panel={index}
					>
						{isSelected &&
							(() => {
								// Get filtered data - check if it has healthcare structure
								const displayData = panel.data.some(
									(item: any) => "ews_data" in item
								)
									? getFilteredData(panel.data, state.filters)
									: panel.data;

								// Sort the data based on the global sort configuration
								const sortedData = useMemo(() => {
									const sortConfig = state.sortConfig;
									if (!sortConfig || sortConfig.length === 0) return displayData;
									const comparator = buildMultiComparator(panel.columns as any, sortConfig, NullsPosition.Last, dataConfig?.sortingOptions);
									return [...displayData].sort(comparator);
								}, [displayData, state.sortConfig, panel.columns, dataConfig?.sortingOptions]);

									return (
										<div
										className="aria-tabs-datagrid__scroll"
										ref={scrollContainerRef}
										onKeyDown={onOverflowScrollKey}
										style={{
											// Expose CSS var to SCSS; inline for SSR safety
											['--atd-min-col-w' as any]: typeof minColumnWidth === 'number' ? `${minColumnWidth}px` : (minColumnWidth || undefined),
										}}
									>
											{/* Collapsed columns indicator */}
											{enableColumnCollapse && showCollapsedColumnsIndicator && (
												<div className="aria-tabs-datagrid__collapsed-indicator">
													<div
														className="nhsuk-u-visually-hidden"
														aria-live="polite"
														ref={liveRegionRef}
													/>
													{(() => {
														const hidden = hiddenColumnsByPanel[index] || new Set<string>();
														if (hidden.size === 0) return null;
														const hiddenLabels = panel.columns.filter(c => hidden.has(c.key)).map(c => c.label);
														return (
															<div className="collapsed-chip-wrapper">
																<button
																	ref={collapsedButtonRef}
																	type="button"
																	className="collapsed-chip"
																	title={`Collapsed columns: ${hiddenLabels.join(', ')}`}
																	onClick={() => setCollapsedPopoverOpen((v) => !v)}
																>
																	{hidden.size} hidden column{hidden.size === 1 ? '' : 's'}
																</button>
																{collapsedPopoverOpen && (
																	<div className="collapsed-popover" role="dialog" aria-label="Collapsed columns">
																		<ul>
																			{hiddenLabels.map((name, i) => (
																				<li key={i}>{name}</li>
																			))}
																		</ul>
																	</div>
																)}
															</div>
														);
													})()}
												</div>
											)}
									<table
										className="nhsuk-table aria-tabs-datagrid__grid"
										role="grid"
										aria-label={panel.ariaLabel}
										aria-describedby={
											panel.ariaDescription
												? `panel-${panel.id}-description`
											: undefined
										}
									>
										{panel.ariaDescription && (
											<caption
												className="nhsuk-u-visually-hidden"
												id={`panel-${panel.id}-description`}
											>
												{panel.ariaDescription}
											</caption>
										)}
											<thead className="nhsuk-table__head" role="rowgroup">
											<tr role="row">
													{getVisibleColumns(index).map((column: ColumnDefinition, colIndex: number) => {
													const sortInfo = state.sortConfig?.find(
														(config: SortConfig) => config.key === column.key
													);
													const isSorted = !!sortInfo;
													const isFocused =
														navigationState.focusArea === "headers" &&
														navigationState.focusedHeaderIndex === colIndex;

													return (
														<th
															key={column.key}
															className={`sortable-header ${isFocused ? "sortable-header--focused" : ""} ${isSorted ? "sortable-header--sorted" : ""}`}
															role="columnheader"
															tabIndex={isFocused ? 0 : -1}
															onClick={() => handleSort(index, column.key)}
															onKeyDown={(e) =>
																handleHeaderKeyDown(e, colIndex)
															}
															aria-sort={
																isSorted
																	? sortInfo?.direction === "asc"
																		? "ascending"
																		: "descending"
																	: "none"
															}
															style={{ minWidth: (column.minWidth !== undefined
																? (typeof column.minWidth === 'number' ? `${column.minWidth}px` : column.minWidth)
																: (typeof minColumnWidth === 'number' ? `${minColumnWidth}px` : (minColumnWidth || undefined))) as any }}
														>
															<div className="header-content">
																<span className="header-label">
																	{column.label}
																</span>
																<div
																	className={`sort-indicator-container ${isSorted ? `sort-indicator--${sortInfo?.direction}` : ""}`}
																>
																	{/* Show sort priority when any sort is configured and this column is sorted */}
																	{state.sortConfig &&
																		state.sortConfig.length > 0 &&
																		state.sortConfig.findIndex(
																			(config: SortConfig) =>
																				config.key === column.key
																		) !== -1 && (
																			<span
																				className={`sort-priority sort-priority--priority-${state.sortConfig.findIndex((config: SortConfig) => config.key === column.key) + 1}`}
																				data-priority={
																					state.sortConfig.findIndex(
																						(config: SortConfig) =>
																							config.key === column.key
																					) + 1
																				}
																				title={`Sort priority: ${state.sortConfig.findIndex((config: SortConfig) => config.key === column.key) + 1}`}
																			>
																				{state.sortConfig.findIndex(
																					(config: SortConfig) =>
																						config.key === column.key
																				) + 1}
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
												const isRowSelected =
													state.globalSelectedRowData &&
													isDataEqual(state.globalSelectedRowData, row);
												const isRowFocused =
													navigationState.focusArea === "cells" &&
													navigationState.focusedRowIndex === rowIndex;

												return (
													<tr
														key={rowIndex}
														role="row"
														className={`data-row ${isRowSelected ? "data-row--selected" : ""} ${isRowFocused ? "data-row--focused" : ""}`}
														aria-selected={isRowSelected}
													>
															{getVisibleColumns(index).map((column: ColumnDefinition, colIndex: number) => {
															// Determine raw data value first (before any custom rendering)
															const rawValue = row[column.key];
															// Apply custom renderer precedence: tableRenderer > render
															let value: any;
															if (column.tableRenderer) {
																value = column.tableRenderer(row);
															} else if (column.render) {
																value = column.render(row);
															} else {
																value = rawValue;
															}
															const isCellFocused =
																navigationState.focusArea === "cells" &&
																navigationState.focusedRowIndex === rowIndex &&
																navigationState.focusedColumnIndex === colIndex;

															// Handle boolean values with per-column or global rendering; otherwise render ReactNodes directly
															const renderValue = () => {
																// If the final value is explicitly a boolean primitive and no custom renderer produced something else
																// Column-level custom renderer always takes priority if provided
																if (column.customRenderer) {
																	const rendered = column.customRenderer(
																		rawValue,
																		row
																	);
																	return (
																		<span
																			className="data-cell__custom"
																			data-custom-rendered="true"
																		>
																			{rendered}
																		</span>
																	);
																}
																if (
																	typeof rawValue === "boolean" &&
																	value === rawValue
																) {
																	// Boolean primitive fallback (global booleanRenderer handling)
																	return (
																		<>
																			{renderBooleanIcon(rawValue)}
																			<span className="nhsuk-u-visually-hidden">
																				{rawValue ? "Yes" : "No"}
																			</span>
																		</>
																	);
																}
																// If renderer returned a React element / node, return as-is
																if (
																	React.isValidElement(value) ||
																	typeof value !== "object"
																) {
																	return value ?? "";
																}
																// For objects (e.g., custom complex results), let developer control stringification
																return value as any;
															};

															return (
																<td
																	key={column.key}
																	role="gridcell"
																	className={`data-cell ${isCellFocused ? "data-cell--focused" : ""}`}
																	tabIndex={isCellFocused ? 0 : -1}
																	style={{ minWidth: (column.minWidth !== undefined
																		? (typeof column.minWidth === 'number' ? `${column.minWidth}px` : column.minWidth)
																		: (typeof minColumnWidth === 'number' ? `${minColumnWidth}px` : (minColumnWidth || undefined))) as any }}
																	onClick={() => {
																		// Toggle global row selection - if same row clicked, deselect it
																		const isCurrentlySelected =
																			state.globalSelectedRowData &&
																			isDataEqual(
																				state.globalSelectedRowData,
																				row
																			);
																		const newSelectedRowData =
																			isCurrentlySelected ? null : row;
																		dispatch({
																			type: "SET_GLOBAL_SELECTED_ROW_DATA",
																			payload: newSelectedRowData,
																		});
																	}}
																	onKeyDown={(e) =>
																		handleCellKeyDown(e, rowIndex, colIndex)
																	}
																>
																{renderValue()}
															</td>
														)})}
													</tr>
												)})}
											</tbody>
										</table>
									</div>
								);
							})()}
					</div>
				);
			})}
		</div>
	);
});
