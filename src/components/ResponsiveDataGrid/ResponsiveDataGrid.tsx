/**
 * ResponsiveDataGrid Component with Hierarchical Keyboard Navigation
 * 
 * ENHANCED ACCESSIBILITY FEATURES:
 * 
 * Hierarchical Navigation Structure:
 * 1. TAB LEVEL: Navigate between tab buttons using arrow keys
 * 2. SORT-CONTROLS LEVEL: Navigate between sort controls using arrow keys
 * 3. CARD LEVEL: Navigate between cards using arrow keys  
 * 4. CARD-INTERNAL LEVEL: Navigate within card elements using arrow keys
 * 
 * Navigation Controls:
 * - Arrow keys: Navigate within current focus area
 * - Enter: When on card, select card and enter card-internal navigation mode
 *           When on sort controls, enter sort controls navigation mode
 * - Space: Toggle card selection (traditional behavior)
 *          Enter sort controls navigation mode
 * - Escape: Exit card-internal navigation, sort controls navigation, or clear selection
 * - Ctrl+Home/End: Jump between navigation levels
 * 
 * Sort Controls Navigation:
 * - Automatically manages sort dropdown and clear button navigation
 * - Arrow keys move between sort controls
 * - Enter/Space activates the focused control or enters navigation mode
 * - Up arrow returns to tabs, Down arrow goes to cards
 * - Screen reader announcements for sort control changes
 * 
 * Card-Internal Navigation:
 * - Automatically scans for focusable elements (buttons, links, inputs, etc.)
 * - Arrow keys move between internal elements
 * - Enter/Space activates the focused element
 * - Visual indicators show navigation mode and element hints
 * - Screen reader announcements for navigation state changes
 * 
 * Visual Feedback:
 * - Selected cards: NHS blue border and shadow
 * - Focused cards: NHS yellow focus outline
 * - Card navigation mode: Dashed border with "Navigation Mode" badge
 * - Sort controls navigation mode: Focus outline on sort controls section
 * - Internal elements: Dotted borders with focus highlighting
 * 
 * ARIA Compliance:
 * - Maintains full ARIA grid pattern with enhanced navigation
 * - aria-expanded indicates card navigation state
 * - Live regions announce navigation changes
 * - Comprehensive keyboard support following NHS design system
 */

import React, { useState, useEffect, useCallback, useRef, useReducer, useMemo } from 'react';
import { AriaTabsDataGrid } from '../SortableDataTable/AriaTabsDataGrid';
import { Card, type CardProps } from '../Card';
import { Select } from '../Select';
import { Button } from '../Button';
import { ResponsiveDataGridProps, LayoutMode, ViewportConfig } from './ResponsiveDataGridTypes';
import { GenericCardConfig, DomainPlugin } from './ResponsiveDataGridGeneric.types';
import { AriaTabsDataGridState, AriaTabsDataGridAction } from '../SortableDataTable/AriaTabsDataGridTypes';
import { SortConfig } from '../SortableDataTable/AriaDataGridTypes';
import { createGenericCard, defaultGenericCardConfig } from './GenericCardRenderer';
import { healthcarePlugin } from './HealthcarePlugin';
import { convertLegacyCardConfig, isHealthcareData } from './ResponsiveDataGridHelpers';
import './ResponsiveDataGrid.scss';

/**
 * Navigation focus areas for hierarchical keyboard navigation in card view
 */
type CardFocusArea = 'tabs' | 'sort-controls' | 'cards' | 'card';

/**
 * Card internal focusable elements
 */
interface CardElement {
  id: string;
  element: HTMLElement;
  label: string;
  type: 'button' | 'link' | 'input' | 'generic';
}

/**
 * Card navigation state for ARIA grid keyboard navigation with internal card navigation
 */
interface CardNavigationState {
  focusArea: CardFocusArea;
  focusedTabIndex: number;
  focusedCardIndex: number;
  selectedCardIndex: number;
  isGridActive: boolean;
  // Card-internal navigation state
  focusedCardElementIndex: number;
  cardElements: CardElement[];
  isCardNavigationActive: boolean;
  // 2D Grid navigation state
  gridColumns: number;
  gridRows: number;
  // Card sorting state
  cardSortConfig: SortConfig | null;
  // Sort controls navigation state
  focusedSortControlIndex: number;
  isSortControlsActive: boolean;
}

/**
 * Tab state reducer (reused from AriaTabsDataGrid)
 */
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
 * Hook for responsive layout detection
 */
function useResponsiveLayout(breakpoints: ViewportConfig, forceLayout?: LayoutMode): LayoutMode {
  const [layout, setLayout] = useState<LayoutMode>('cards');

  useEffect(() => {
	if (forceLayout) {
	  setLayout(forceLayout);
	  return;
	}

	const updateLayout = () => {
	  const width = window.innerWidth;
	  
	  if (width < breakpoints.mobile) {
		setLayout('cards');
	  } else if (width < breakpoints.desktop) {
		setLayout('hybrid');
	  } else {
		setLayout('table');
	  }
	};

	updateLayout();
	window.addEventListener('resize', updateLayout);
	return () => window.removeEventListener('resize', updateLayout);
  }, [breakpoints, forceLayout]);

  return layout;
}

/**
 * Generic card template selection based on data type and configuration
 * Now using configurable card creation with plugin support
 */
function createCard<T = any>(
  data: T, 
  columns: any[], 
  cardConfig: GenericCardConfig<T>, 
  domainPlugin?: DomainPlugin<T>
): CardProps {
  // Use domain plugin configuration if available
  const effectiveConfig = domainPlugin ? 
    { ...domainPlugin.defaultCardConfig, ...cardConfig } : 
    { ...defaultGenericCardConfig, ...cardConfig };

  // Check if there's a custom card template
  if (effectiveConfig.cardTemplate) {
    const customCard = effectiveConfig.cardTemplate(data, columns, effectiveConfig);
    if (customCard) {
      // If custom template returns a React node, we need to handle it differently
      // For now, fall back to generic card creation
      return createGenericCard(data, columns, effectiveConfig);
    }
  }

  // Use the generic card creation function
  return createGenericCard(data, columns, effectiveConfig);
}

/**
 * Responsive Data Grid with mobile-first card layout - Now Generic with Plugin Support
 */
export const ResponsiveDataGrid: React.FC<ResponsiveDataGridProps> = ({
  // Responsive-specific props
  breakpoints = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout,
  cardConfig = {},
  experimental = {},
  
  // Standard AriaTabsDataGrid props
  tabPanels,
  dataConfig,
  selectedIndex: selectedIndexProp,
  onTabChange,
  ariaLabel = 'Data grid',
  ariaDescription,
  orientation = 'horizontal',
  id,
  disabled = false,
  className,
  ...props
}) => {
  const layout = useResponsiveLayout(breakpoints, forceLayout);

  // Determine if component is controlled
  const isControlled = selectedIndexProp !== undefined;
  const selectedIndex = selectedIndexProp ?? 0;

  // Convert legacy cardConfig to generic configuration with automatic healthcare detection
  const genericCardConfig: GenericCardConfig = useMemo(() => {
    // Auto-detect healthcare data
    const hasHealthcareData = tabPanels.some(panel => 
      panel.data && panel.data.length > 0 && isHealthcareData(panel.data)
    );
    
    if (hasHealthcareData) {
      // Use healthcare plugin configuration as base
      const legacyConverted = convertLegacyCardConfig(cardConfig);
      return {
        ...healthcarePlugin.defaultCardConfig,
        ...legacyConverted
      };
    } else {
      // Use generic configuration
      return convertLegacyCardConfig(cardConfig);
    }
  }, [cardConfig, tabPanels]);

  // Determine domain plugin based on data
  const domainPlugin: DomainPlugin | undefined = useMemo(() => {
    const hasHealthcareData = tabPanels.some(panel => 
      panel.data && panel.data.length > 0 && isHealthcareData(panel.data)
    );
    
    return hasHealthcareData ? healthcarePlugin : undefined;
  }, [tabPanels]);

  // Initialize state with proper tab management
  const initialState: AriaTabsDataGridState = useMemo(() => {
	return {
	  selectedIndex,
	  tabLoadingStates: new Array(tabPanels.length).fill(false),
	  tabErrors: new Array(tabPanels.length).fill(null),
	  sortConfig: [],
	  selectedRows: new Array(tabPanels.length).fill([]),
	  globalSelectedRowData: null,
	  filters: undefined
	};
  }, [selectedIndex, tabPanels.length]);

  const [state, dispatch] = useReducer(tabsDataGridReducer, initialState);

  // Tab refs for keyboard navigation
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  
  // Card refs for keyboard navigation in card view
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Sort control refs for keyboard navigation
  const sortControlRefs = useRef<(HTMLElement | null)[]>([]);
  
  // Container ref for 2D grid calculations
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Card navigation state for ARIA grid keyboard navigation
  const [cardNavState, setCardNavState] = useState<CardNavigationState>({
	focusArea: 'tabs',
	focusedTabIndex: 0,
	focusedCardIndex: 0,
	selectedCardIndex: -1,
	isGridActive: false,
	focusedCardElementIndex: 0,
	cardElements: [],
	isCardNavigationActive: false,
	gridColumns: 1,
	gridRows: 1,
	cardSortConfig: null,
	focusedSortControlIndex: 0,
	isSortControlsActive: false
  });

  // 2D Grid Navigation Utilities (moved before useEffects)
	const calculateGridDimensions = useCallback((containerRef: React.RefObject<HTMLElement | null>) => {
	if (!containerRef.current) {
	  return { columns: 1, rows: 0 };
	}

	const container = containerRef.current;
	const cards = container.querySelectorAll('.aria-tabs-datagrid-adaptive__card-wrapper');
	
	if (cards.length === 0) {
	  return { columns: 1, rows: 0 };
	}

	// Get container width
	const containerWidth = container.offsetWidth;
	
	// Get first card dimensions
	const firstCard = cards[0] as HTMLElement;
	const cardWidth = firstCard.offsetWidth;
	
	// Calculate columns based on card width and container width
	const columns = Math.floor(containerWidth / cardWidth) || 1;
	const rows = Math.ceil(cards.length / columns);

	return { columns, rows };
  }, []);

  // Convert linear index to 2D grid coordinates
  const indexToGrid = useCallback((index: number, columns: number) => {
	return {
	  row: Math.floor(index / columns),
	  col: index % columns
	};
  }, []);

  // Convert 2D grid coordinates to linear index
  const gridToIndex = useCallback((row: number, col: number, columns: number) => {
	return row * columns + col;
  }, []);

  // Navigate in 2D grid with bounds checking
  const navigate2D = useCallback((currentIndex: number, direction: 'up' | 'down' | 'left' | 'right', totalCards: number, columns: number) => {
	const { row, col } = indexToGrid(currentIndex, columns);
	let newRow = row;
	let newCol = col;
	
	switch (direction) {
	  case 'up':
		newRow = Math.max(0, row - 1);
		break;
	  case 'down':
		newRow = Math.min(Math.floor((totalCards - 1) / columns), row + 1);
		break;
	  case 'left':
		newCol = Math.max(0, col - 1);
		break;
	  case 'right':
		newCol = Math.min(columns - 1, col + 1);
		break;
	}
	
	const newIndex = gridToIndex(newRow, newCol, columns);
	
	// Ensure the new index is within bounds and a valid card exists
	return Math.min(newIndex, totalCards - 1);
  }, [indexToGrid, gridToIndex]);

  // Effect to handle focus when card navigation becomes active (following GanttChart pattern)
  useEffect(() => {
	if (cardNavState.isCardNavigationActive && cardNavState.focusedCardElementIndex >= 0 && cardNavState.cardElements.length > 0) {
	  // Use a small timeout to ensure the DOM has updated
	  setTimeout(() => {
		const currentElement = cardNavState.cardElements[cardNavState.focusedCardElementIndex];
		if (currentElement) {
		  currentElement.element.focus();
		  currentElement.element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
		}
	  }, 0);
	}
  }, [cardNavState.isCardNavigationActive, cardNavState.focusedCardElementIndex, cardNavState.cardElements.length]);

  // Effect to update grid dimensions when layout changes
  useEffect(() => {
	const updateGridDimensions = () => {
	  if (layout === 'cards' && cardsContainerRef.current) {
		const { columns, rows } = calculateGridDimensions(cardsContainerRef);
		setCardNavState(prev => ({
		  ...prev,
		  gridColumns: columns,
		  gridRows: rows
		}));
	  }
	};

	// Update dimensions after a delay to ensure DOM is ready
	const timeoutId = setTimeout(updateGridDimensions, 200);

	// Update dimensions on window resize
	const handleResize = () => {
	  setTimeout(updateGridDimensions, 100); // Debounce resize events
	};

	window.addEventListener('resize', handleResize);
	return () => {
	  clearTimeout(timeoutId);
	  window.removeEventListener('resize', handleResize);
	};
  }, [layout, tabPanels, calculateGridDimensions]);

  // Handle tabPanels length changes
  useEffect(() => {
	const currentLength = state.tabLoadingStates.length;
	const newLength = tabPanels.length;
	
	if (currentLength !== newLength) {
	  dispatch({ type: 'ADJUST_ARRAYS', payload: { newLength } });
	}
  }, [tabPanels.length, state.tabLoadingStates.length]);

  // Controlled component support
  useEffect(() => {
	if (isControlled && selectedIndexProp !== state.selectedIndex) {
	  dispatch({ type: 'SET_SELECTED_INDEX', payload: selectedIndexProp });
	}
  }, [isControlled, selectedIndexProp, state.selectedIndex]);

  // Handle tab selection with keyboard support
  const handleTabSelect = useCallback((index: number) => {
	if (index >= 0 && index < tabPanels.length && !tabPanels[index].disabled) {
	  dispatch({ type: 'SET_SELECTED_INDEX', payload: index });
	  onTabChange?.(index);
	}
  }, [tabPanels, onTabChange]);

  // Handle card selection
  const handleCardSelect = useCallback((data: any) => {
	console.log('Card selected:', data);
	// Update global selected row data to maintain consistency with desktop grid
	dispatch({
	  type: 'SET_GLOBAL_SELECTED_ROW_DATA',
	  payload: data
	});
  }, []);

  // Focus utilities for card navigation
  const focusCard = useCallback((cardIndex: number) => {
	const cardElement = cardRefs.current[cardIndex];
	if (cardElement) {
	  cardElement.focus();
	  // Ensure the focus is applied and visible
	  cardElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
	}
  }, []);

  // Scan for focusable elements within a card
  const scanCardElements = useCallback((cardIndex: number): CardElement[] => {
	const cardElement = cardRefs.current[cardIndex];
	if (!cardElement) return [];

	// Query for focusable elements within the card
	const focusableSelectors = [
	  'button:not([disabled]):not([aria-hidden="true"])',
	  'a[href]:not([disabled]):not([aria-hidden="true"])',
	  'input:not([disabled]):not([aria-hidden="true"])',
	  'select:not([disabled]):not([aria-hidden="true"])',
	  'textarea:not([disabled]):not([aria-hidden="true"])',
	  '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
	  '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
	  '.healthcare-card__action:not([disabled])',
	  '.tag:not([disabled])'
	].join(', ');

	const elements = cardElement.querySelectorAll(focusableSelectors) as NodeListOf<HTMLElement>;
	
	return Array.from(elements).map((element, index) => ({
	  id: element.id || `card-${cardIndex}-element-${index}`,
	  element,
	  label: element.getAttribute('aria-label') || 
			 element.textContent?.trim() || 
			 element.getAttribute('title') || 
			 `Element ${index + 1}`,
	  type: element.tagName.toLowerCase() === 'button' ? 'button' :
			element.tagName.toLowerCase() === 'a' ? 'link' :
			['input', 'select', 'textarea'].includes(element.tagName.toLowerCase()) ? 'input' :
			'generic'
	}));
  }, []);

  // Screen reader announcements container ref
  const announcementsRef = useRef<HTMLDivElement>(null);

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
	const container = announcementsRef.current;
	if (!container) return;

	const announcement = document.createElement('div');
	announcement.setAttribute('aria-live', 'polite');
	announcement.setAttribute('aria-atomic', 'true');
	announcement.className = 'sr-only';
	announcement.textContent = message;
	container.appendChild(announcement);
	
	setTimeout(() => {
	  if (container.contains(announcement)) {
		container.removeChild(announcement);
	  }
	}, 1000);
  }, []);

  // Card sorting utilities
  const generateSortOptions = useCallback((columns: any[]) => {
	const sortableColumns = columns.filter(col => col.sortable !== false);
	const options: { value: string; label: string }[] = [
	  { value: '', label: 'Sort by...' }
	];
	
	sortableColumns.forEach(column => {
	  const baseLabel = column.label || column.key;
	  
	  // Add contextual sort labels based on data type
	  if (column.key === 'name') {
		options.push(
		  { value: `${column.key}-asc`, label: `${baseLabel} (A-Z)` },
		  { value: `${column.key}-desc`, label: `${baseLabel} (Z-A)` }
		);
	  } else if (column.key === 'ews_score' || column.key.includes('score')) {
		options.push(
		  { value: `${column.key}-desc`, label: `${baseLabel} (High-Low)` },
		  { value: `${column.key}-asc`, label: `${baseLabel} (Low-High)` }
		);
	  } else if (column.key === 'age' || column.key.includes('date') || column.key.includes('time')) {
		options.push(
		  { value: `${column.key}-desc`, label: `${baseLabel} (Newest-Oldest)` },
		  { value: `${column.key}-asc`, label: `${baseLabel} (Oldest-Newest)` }
		);
	  } else {
		options.push(
		  { value: `${column.key}-asc`, label: `${baseLabel} (A-Z)` },
		  { value: `${column.key}-desc`, label: `${baseLabel} (Z-A)` }
		);
	  }
	});
	
	return options;
  }, []);

  const sortCardData = useCallback((data: any[], sortConfig: SortConfig | null) => {
	if (!sortConfig) return data;
	
	return [...data].sort((a, b) => {
	  const aValue = a[sortConfig.key];
	  const bValue = b[sortConfig.key];
	  
	  // Handle null/undefined values
	  if (aValue == null && bValue == null) return 0;
	  if (aValue == null) return 1;
	  if (bValue == null) return -1;
	  
	  // Numeric comparison for numbers and strings that look like numbers
	  const aNum = Number(aValue);
	  const bNum = Number(bValue);
	  if (!isNaN(aNum) && !isNaN(bNum)) {
		return sortConfig.direction === 'asc' ? aNum - bNum : bNum - aNum;
	  }
	  
	  // String comparison
	  const aStr = String(aValue).toLowerCase();
	  const bStr = String(bValue).toLowerCase();
	  const result = aStr.localeCompare(bStr);
	  
	  return sortConfig.direction === 'asc' ? result : -result;
	});
  }, []);

  const handleCardSort = useCallback((sortValue: string) => {
	if (!sortValue) {
	  setCardNavState(prev => ({ ...prev, cardSortConfig: null }));
	  announceToScreenReader('Card sorting cleared');
	  return;
	}
	
	const [key, direction] = sortValue.split('-') as [string, 'asc' | 'desc'];
	const newSortConfig: SortConfig = { key, direction };
	
	setCardNavState(prev => ({ ...prev, cardSortConfig: newSortConfig }));
	
	// Announce the sort change
	const currentPanel = tabPanels[state.selectedIndex];
	const column = currentPanel?.columns.find(col => col.key === key);
	const columnLabel = column?.label || key;
	const directionLabel = direction === 'asc' ? 'ascending' : 'descending';
	announceToScreenReader(`Cards sorted by ${columnLabel} in ${directionLabel} order`);
  }, [tabPanels, state.selectedIndex, announceToScreenReader]);

  const getSortLabel = useCallback((sortConfig: SortConfig) => {
	const currentPanel = tabPanels[state.selectedIndex];
	const column = currentPanel?.columns.find(col => col.key === sortConfig.key);
	const columnLabel = column?.label || sortConfig.key;
	const directionLabel = sortConfig.direction === 'asc' ? 'ascending' : 'descending';
	return `${columnLabel} (${directionLabel})`;
  }, [tabPanels, state.selectedIndex]);

  // Focus specific element within a card (following GanttChart pattern)
  const focusCardElement = useCallback((cardIndex: number, elementIndex: number) => {
	const cardElements = scanCardElements(cardIndex);
	const element = cardElements[elementIndex];
	if (element) {
	  // Focus will be handled by the useEffect to avoid conflicts
	  element.element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
	  
	  // Announce to screen readers
	  const announcement = `Focused on ${element.label}, ${element.type} ${elementIndex + 1} of ${cardElements.length} within card`;
	  announceToScreenReader(announcement);
	}
  }, [scanCardElements, announceToScreenReader]);

  const focusTab = useCallback((tabIndex: number) => {
	tabRefs.current[tabIndex]?.focus();
  }, []);

  // Get all available sort controls dynamically
  const getAvailableSortControls = useCallback(() => {
	const container = sortControlRefs.current[0];
	if (!container) return [];
	
	// Find all focusable elements within the sort controls container
	const focusableSelectors = [
	  'select:not([disabled]):not([aria-hidden="true"])',
	  'button:not([disabled]):not([aria-hidden="true"])',
	  'input:not([disabled]):not([aria-hidden="true"])',
	  '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
	].join(', ');
	
	const focusableElements = container.querySelectorAll(focusableSelectors) as NodeListOf<HTMLElement>;
	return Array.from(focusableElements);
  }, []);

  // Focus sort control element and handle sort controls navigation
  const focusSortControl = useCallback((controlIndex: number) => {
	if (controlIndex === 0) {
	  // Focus the container for navigation mode entry
	  const sortControlElement = sortControlRefs.current[0];
	  if (sortControlElement) {
		sortControlElement.focus();
		const availableControls = getAvailableSortControls();
		const announcement = `Sort controls region with ${availableControls.length} interactive elements. Press Enter or Space to navigate between controls.`;
		announceToScreenReader(announcement);
	  }
	} else {
	  // For individual controls, focus them directly by querying the DOM
	  const availableControls = getAvailableSortControls();
	  const adjustedIndex = controlIndex - 1; // Subtract 1 because index 0 is the container
	  const formControl = availableControls[adjustedIndex];
	  
	  if (formControl) {
		formControl.focus();
		
		// Create announcement with helpful keyboard hint for select elements
		const isSelect = formControl.tagName.toLowerCase() === 'select';
		const isButton = formControl.tagName.toLowerCase() === 'button';
		const elementType = isSelect ? 'dropdown' : isButton ? 'button' : 'control';
		const keyboardHint = isSelect ? '. Use Space key to open dropdown' : '';
		const announcement = `${elementType} ${adjustedIndex + 1} of ${availableControls.length}${keyboardHint}`;
		announceToScreenReader(announcement);
	  }
	}
  }, [getAvailableSortControls, announceToScreenReader]);  // Enhanced card keyboard navigation handlers following GanttChart pattern
  const handleCardKeyDown = useCallback((event: React.KeyboardEvent, cardIndex: number) => {
	const { key } = event;
	const currentPanel = tabPanels[state.selectedIndex];
	const cardCount = currentPanel?.data.length || 0;

	// Handle scrolling first (like GanttChart)
	if (key === 'ArrowLeft' && event.shiftKey) {
	  event.preventDefault();
	  event.currentTarget.scrollBy({ left: -30, behavior: 'smooth' });
	  return;
	} else if (key === 'ArrowRight' && event.shiftKey) {
	  event.preventDefault();
	  event.currentTarget.scrollBy({ left: 30, behavior: 'smooth' });
	  return;
	}

	// If card is not active, handle grid navigation (like GanttChart timeline container)
	if (!cardNavState.isCardNavigationActive) {
	  switch (key) {
		case 'ArrowUp':
		  event.preventDefault();
		  if (cardIndex === 0) {
			// Navigate back to tabs
			setCardNavState(prev => ({ ...prev, focusArea: 'tabs' }));
			focusTab(state.selectedIndex);
		  } else {
			// Use 2D navigation for up movement
			const newCardIndex = navigate2D(cardIndex, 'up', cardCount, cardNavState.gridColumns);
			if (newCardIndex !== cardIndex) {
			  setCardNavState(prev => ({ ...prev, focusedCardIndex: newCardIndex }));
			  focusCard(newCardIndex);
			  announceToScreenReader(`Moved to card ${newCardIndex + 1} of ${cardCount}`);
			}
		  }
		  break;
		case 'ArrowDown':
		  event.preventDefault();
		  // Use 2D navigation for down movement
		  const newDownCardIndex = navigate2D(cardIndex, 'down', cardCount, cardNavState.gridColumns);
		  if (newDownCardIndex !== cardIndex) {
			setCardNavState(prev => ({ ...prev, focusedCardIndex: newDownCardIndex }));
			focusCard(newDownCardIndex);
			announceToScreenReader(`Moved to card ${newDownCardIndex + 1} of ${cardCount}`);
		  }
		  break;
		case 'ArrowLeft':
		  event.preventDefault();
		  // Use 2D navigation for left movement
		  const newLeftCardIndex = navigate2D(cardIndex, 'left', cardCount, cardNavState.gridColumns);
		  if (newLeftCardIndex !== cardIndex) {
			setCardNavState(prev => ({ ...prev, focusedCardIndex: newLeftCardIndex }));
			focusCard(newLeftCardIndex);
			announceToScreenReader(`Moved to card ${newLeftCardIndex + 1} of ${cardCount}`);
		  } else {
			// If at leftmost card, navigate to previous tab
			if (state.selectedIndex > 0) {
			  dispatch({ type: 'SET_SELECTED_INDEX', payload: state.selectedIndex - 1 });
			  setCardNavState(prev => ({ ...prev, focusArea: 'tabs' }));
			  setTimeout(() => focusTab(state.selectedIndex - 1), 0);
			}
		  }
		  break;
		case 'ArrowRight':
		  event.preventDefault();
		  // Use 2D navigation for right movement
		  const newRightCardIndex = navigate2D(cardIndex, 'right', cardCount, cardNavState.gridColumns);
		  if (newRightCardIndex !== cardIndex) {
			setCardNavState(prev => ({ ...prev, focusedCardIndex: newRightCardIndex }));
			focusCard(newRightCardIndex);
			announceToScreenReader(`Moved to card ${newRightCardIndex + 1} of ${cardCount}`);
		  } else {
			// If at rightmost card, navigate to next tab
			if (state.selectedIndex < tabPanels.length - 1) {
			  dispatch({ type: 'SET_SELECTED_INDEX', payload: state.selectedIndex + 1 });
			  setCardNavState(prev => ({ ...prev, focusArea: 'tabs' }));
			  setTimeout(() => focusTab(state.selectedIndex + 1), 0);
			}
		  }
		  break;
		  break;
		case 'Enter':
		  if (currentPanel?.data[cardIndex]) {
			event.preventDefault();
			// Mark card as selected when entering it
			setCardNavState(prev => ({
			  ...prev,
			  selectedCardIndex: cardIndex
			}));
			
			// Scan for focusable elements and activate card navigation
			const cardElements = scanCardElements(cardIndex);
			if (cardElements.length > 0) {
			  setCardNavState(prev => ({
				...prev,
				focusArea: 'card',
				isCardNavigationActive: true,
				focusedCardElementIndex: 0,
				cardElements,
				selectedCardIndex: cardIndex // Ensure selection is maintained
			  }));
			  announceToScreenReader(`Card ${cardIndex + 1} selected and navigation activated. ${cardElements.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`);
			  // Focus will be handled by useEffect
			} else {
			  // If no internal elements, just select the card
			  announceToScreenReader(`Card ${cardIndex + 1} selected.`);
			}
		  }
		  break;
		case ' ':
		  if (currentPanel?.data[cardIndex]) {
			event.preventDefault();
			// Toggle card selection (traditional behavior)
			setCardNavState(prev => ({
			  ...prev,
			  selectedCardIndex: prev.selectedCardIndex === cardIndex ? -1 : cardIndex
			}));
			const isSelected = cardNavState.selectedCardIndex === cardIndex;
			announceToScreenReader(`Card ${cardIndex + 1} ${isSelected ? 'deselected' : 'selected'}.`);
		  }
		  break;
	  }
	  return;
	}

	// Card is active - handle card-internal navigation (like GanttChart task navigation)
	switch (key) {
	  case 'ArrowUp':
	  case 'ArrowLeft':
		event.preventDefault();
		const newLeftIndex = Math.max(0, cardNavState.focusedCardElementIndex - 1);
		setCardNavState(prev => ({ ...prev, focusedCardElementIndex: newLeftIndex }));
		focusCardElement(cardIndex, newLeftIndex);
		break;
	  case 'ArrowDown':
	  case 'ArrowRight':
		event.preventDefault();
		const newRightIndex = Math.min(cardNavState.cardElements.length - 1, cardNavState.focusedCardElementIndex + 1);
		setCardNavState(prev => ({ ...prev, focusedCardElementIndex: newRightIndex }));
		focusCardElement(cardIndex, newRightIndex);
		break;
	  case 'Enter':
		event.preventDefault();
		const currentElement = cardNavState.cardElements[cardNavState.focusedCardElementIndex];
		if (currentElement) {
		  currentElement.element.click();
		  announceToScreenReader(`Activated ${currentElement.label}`);
		}
		break;
	  case ' ':
		event.preventDefault();
		const currentSpaceElement = cardNavState.cardElements[cardNavState.focusedCardElementIndex];
		if (currentSpaceElement) {
		  // Simulate double-click for space (like GanttChart)
		  const event = new MouseEvent('dblclick', { bubbles: true });
		  currentSpaceElement.element.dispatchEvent(event);
		  announceToScreenReader(`Double-clicked ${currentSpaceElement.label}`);
		}
		break;
	  case 'Escape':
		event.preventDefault();
		setCardNavState(prev => ({
		  ...prev,
		  focusArea: 'cards',
		  isCardNavigationActive: false,
		  focusedCardElementIndex: 0,
		  cardElements: []
		}));
		// Return focus to the card container
		setTimeout(() => focusCard(cardIndex), 0);
		announceToScreenReader('Exited card navigation, returned to card level');
		break;
	  case 'Home':
		event.preventDefault();
		if (cardNavState.cardElements.length > 0) {
		  setCardNavState(prev => ({ ...prev, focusedCardElementIndex: 0 }));
		  focusCardElement(cardIndex, 0);
		}
		break;
	  case 'End':
		event.preventDefault();
		if (cardNavState.cardElements.length > 0) {
		  const lastIndex = cardNavState.cardElements.length - 1;
		  setCardNavState(prev => ({ ...prev, focusedCardElementIndex: lastIndex }));
		  focusCardElement(cardIndex, lastIndex);
		}
		break;
	}
  }, [cardNavState, state.selectedIndex, tabPanels, handleCardSelect, focusCard, focusTab, setCardNavState, scanCardElements, focusCardElement, announceToScreenReader]);

  // Scroll tab into view for mobile card layout
  const scrollTabIntoViewMobile = useCallback((index: number) => {
	const tab = tabRefs.current[index];
	const tabsContainer = tab?.parentElement;
	
	if (!tab || !tabsContainer) {
	  console.log('Tab or container not found for mobile scroll');
	  return;
	}

	// Check if tab is already visible
	const tabRect = tab.getBoundingClientRect();
	const containerRect = tabsContainer.getBoundingClientRect();
	
	const isVisible = tabRect.left >= containerRect.left && tabRect.right <= containerRect.right;
	
	if (!isVisible) {
	  console.log('Tab not visible, scrolling into view (mobile)');
	  // Use scroll into view for horizontal scrolling
	  tab.scrollIntoView({
		behavior: 'smooth',
		block: 'nearest',
		inline: 'center'
	  });
	}
  }, []);

  // Enhanced tab keyboard navigation that handles card navigation
  const handleTabKeyDownWithCards = useCallback((event: React.KeyboardEvent, index: number) => {
	// Only handle navigation for card layout - let AriaTabsDataGrid handle table/hybrid layouts
	if (layout !== 'cards') {
	  return; // Let the event bubble up to AriaTabsDataGrid
	}

	const { key } = event;
	
	switch (key) {
	  case 'ArrowLeft':
		event.preventDefault();
		const prevIndex = index > 0 ? index - 1 : tabPanels.length - 1;
		handleTabSelect(prevIndex);
		setCardNavState(prev => ({ ...prev, focusedTabIndex: prevIndex }));
		tabRefs.current[prevIndex]?.focus();
		scrollTabIntoViewMobile(prevIndex);
		break;
	  
	  case 'ArrowRight':
		event.preventDefault();
		const nextIndex = index < tabPanels.length - 1 ? index + 1 : 0;
		handleTabSelect(nextIndex);
		setCardNavState(prev => ({ ...prev, focusedTabIndex: nextIndex }));
		tabRefs.current[nextIndex]?.focus();
		scrollTabIntoViewMobile(nextIndex);
		break;

	  case 'ArrowDown':
		event.preventDefault();
		// Navigate to sort controls first if they exist, otherwise go to cards
		const currentPanel = tabPanels[state.selectedIndex];
		if (currentPanel && currentPanel.columns && currentPanel.columns.length > 0) {
		  // Navigate to sort controls
		  setCardNavState(prev => ({ 
			...prev, 
			focusArea: 'sort-controls',
			focusedSortControlIndex: 0
		  }));
		  focusSortControl(0);
		} else {
		  // Navigate directly to cards if no sort controls
		  setCardNavState(prev => ({ 
			...prev, 
			focusArea: 'cards',
			focusedCardIndex: 0
		  }));
		  focusCard(0);
		}
		break;
	  
	  case 'Home':
		event.preventDefault();
		handleTabSelect(0);
		setCardNavState(prev => ({ ...prev, focusedTabIndex: 0 }));
		tabRefs.current[0]?.focus();
		scrollTabIntoViewMobile(0);
		break;
	  
	  case 'End':
		event.preventDefault();
		const lastIndex = tabPanels.length - 1;
		handleTabSelect(lastIndex);
		setCardNavState(prev => ({ ...prev, focusedTabIndex: lastIndex }));
		tabRefs.current[lastIndex]?.focus();
		scrollTabIntoViewMobile(lastIndex);
		break;
	  
	  case 'Enter':
	  case ' ':
		event.preventDefault();
		handleTabSelect(index);
		break;
	}
  }, [tabPanels.length, handleTabSelect, layout, focusCard, setCardNavState, scrollTabIntoViewMobile]);

  // Sort controls keyboard navigation
  const handleSortControlKeyDown = useCallback((event: React.KeyboardEvent, controlIndex: number) => {
	// Only handle navigation for card layout
	if (layout !== 'cards') {
	  return;
	}

	const { key } = event;
	const currentPanel = tabPanels[state.selectedIndex];
	
	// Handle container (index 0) vs individual controls (indices 1, 2)
	if (controlIndex === 0 && !cardNavState.isSortControlsActive) {
	  // Container level navigation - only handle Enter/Space to enter navigation mode
	  switch (key) {
		case 'ArrowUp':
		  event.preventDefault();
		  // Navigate back to tabs
		  setCardNavState(prev => ({ 
			...prev, 
			focusArea: 'tabs',
			isSortControlsActive: false
		  }));
		  focusTab(state.selectedIndex);
		  break;

		case 'ArrowDown':
		  event.preventDefault();
		  // Navigate to first card in card view
		  if (currentPanel?.data && currentPanel.data.length > 0) {
			setCardNavState(prev => ({ 
			  ...prev, 
			  focusArea: 'cards',
			  focusedCardIndex: 0,
			  isSortControlsActive: false
			}));
			focusCard(0);
		  }
		  break;

		case 'Enter':
		case ' ':
		  event.preventDefault();
		  // Enter sort controls navigation mode
		  const availableControls = getAvailableSortControls();
		  if (availableControls.length > 0) {
			setCardNavState(prev => ({ 
			  ...prev, 
			  isSortControlsActive: true,
			  focusedSortControlIndex: 1 // Start with the first actual control (skip container)
			}));
			focusSortControl(1);
			const announcement = `Entered sort controls navigation mode. ${availableControls.length} controls available. Use arrow keys to navigate between controls.`;
			announceToScreenReader(announcement);
		  }
		  break;

		case 'Escape':
		  event.preventDefault();
		  // Exit to tabs
		  setCardNavState(prev => ({ 
			...prev, 
			isSortControlsActive: false,
			focusArea: 'tabs'
		  }));
		  focusTab(state.selectedIndex);
		  break;
	  }
	  return;
	}
	
	// Individual control navigation (when isSortControlsActive is true)
	if (cardNavState.isSortControlsActive) {
	  // Get available sort control elements dynamically
	  const availableControls = getAvailableSortControls();
	  const controlCount = availableControls.length;
	  
	  switch (key) {
		case 'ArrowLeft':
		  event.preventDefault();
		  const prevControlIndex = cardNavState.focusedSortControlIndex > 1 ? 
			cardNavState.focusedSortControlIndex - 1 : 
			controlCount; // Wrap to last control
		  setCardNavState(prev => ({ ...prev, focusedSortControlIndex: prevControlIndex }));
		  focusSortControl(prevControlIndex);
		  break;
		
		case 'ArrowRight':
		case 'ArrowDown': // Also allow down arrow to move to next control
		  event.preventDefault();
		  const nextControlIndex = cardNavState.focusedSortControlIndex < controlCount ? 
			cardNavState.focusedSortControlIndex + 1 : 
			1; // Wrap to first control (skip container 0)
		  setCardNavState(prev => ({ ...prev, focusedSortControlIndex: nextControlIndex }));
		  focusSortControl(nextControlIndex);
		  break;

		case 'ArrowUp':
		  event.preventDefault();
		  // Exit to container level
		  setCardNavState(prev => ({ 
			...prev, 
			isSortControlsActive: false,
			focusArea: 'sort-controls'
		  }));
		  focusSortControl(0);
		  break;

		case 'ArrowDown':
		  event.preventDefault();
		  // Navigate to first card in card view
		  if (currentPanel?.data && currentPanel.data.length > 0) {
			setCardNavState(prev => ({ 
			  ...prev, 
			  focusArea: 'cards',
			  focusedCardIndex: 0,
			  isSortControlsActive: false
			}));
			focusCard(0);
		  }
		  break;

		case 'Escape':
		  event.preventDefault();
		  // Exit sort controls navigation mode
		  setCardNavState(prev => ({ 
			...prev, 
			isSortControlsActive: false,
			focusArea: 'tabs'
		  }));
		  focusTab(state.selectedIndex);
		  break;
	  }
	}
  }, [layout, tabPanels, state.selectedIndex, cardNavState.isSortControlsActive, cardNavState.focusedSortControlIndex, focusSortControl, focusTab, focusCard, setCardNavState, announceToScreenReader]);

  // Mobile-first card implementation
  if (layout === 'cards') {
	const currentPanel = tabPanels[state.selectedIndex];
	
	return (
	  <div className={`aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${className || ''}`}>
		{/* Tab navigation with proper ARIA implementation */}
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
				onKeyDown={(event) => handleTabKeyDownWithCards(event, index)}
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

		{/* Card sort controls */}
		{currentPanel && currentPanel.columns && (
		  <div 
			className="aria-tabs-datagrid-adaptive__sort-controls"
			role="region"
			aria-label="Sort controls"
			tabIndex={cardNavState.focusArea === 'sort-controls' ? 0 : -1}
			ref={el => { sortControlRefs.current[0] = el; }}
			onKeyDown={(event) => handleSortControlKeyDown(event, 0)}
		  >
			<div className="sort-controls-row">
			  <div className="sort-select-container">
				<label htmlFor={`card-sort-${currentPanel.id}`} className="sort-label">
				  Sort cards by
				</label>
				<Select
				  id={`card-sort-${currentPanel.id}`}
				  name={`card-sort-${currentPanel.id}`}
				  value={cardNavState.cardSortConfig ? `${cardNavState.cardSortConfig.key}-${cardNavState.cardSortConfig.direction}` : ''}
				  onChange={(e) => handleCardSort(e.target.value)}
				  className="sort-select"
				>
				  {generateSortOptions(currentPanel.columns).map(option => (
					<option key={option.value} value={option.value}>
					  {option.label}
					</option>
				  ))}
				</Select>
			  </div>
			  
			  {cardNavState.cardSortConfig && (
				<div className="sort-indicator" role="status" aria-live="polite">
				  <span className="sort-indicator-text">
					Sorted by {getSortLabel(cardNavState.cardSortConfig)}
				  </span>
				  <Button
					variant="secondary"
					size="small"
					onClick={() => handleCardSort('')}
					aria-label="Clear card sorting"
					className="sort-clear-button"
				  >
					Clear
				  </Button>
				</div>
			  )}
			</div>
		  </div>
		)}

		{/* Card-based data presentation with ARIA grid navigation */}
		<div 
		  ref={cardsContainerRef}
		  className="aria-tabs-datagrid-adaptive__cards" 
		  role="grid"
		  aria-label={`${currentPanel?.label || 'Data'} cards in ${cardNavState.gridRows} rows and ${cardNavState.gridColumns} columns`}
		  aria-rowcount={cardNavState.gridRows}
		  aria-colcount={cardNavState.gridColumns}
		  id={`panel-${currentPanel?.id}`}
		  aria-labelledby={`tab-${currentPanel?.id}`}
		>
		  { sortCardData(currentPanel?.data || [], cardNavState.cardSortConfig).map((row, index) => {
			const isSelected = cardNavState.selectedCardIndex === index;
			const isFocused = cardNavState.focusedCardIndex === index && cardNavState.focusArea === 'cards';
			const isInCardNavigation = cardNavState.focusedCardIndex === index && cardNavState.focusArea === 'card' && cardNavState.isCardNavigationActive;
			// Ensure first card is focusable if no card is currently focused
			const isFirstCardFocusable = index === 0 && cardNavState.focusArea !== 'cards';
			const shouldBeFocusable = isFocused || isFirstCardFocusable;
			
			// Calculate 2D grid position for ARIA
			const gridPosition = indexToGrid(index, cardNavState.gridColumns);
			
			// If custom card template is provided, use it
			if (cardConfig.cardTemplate) {
			  const customCard = cardConfig.cardTemplate(row, currentPanel.columns);
			  return (
				<div
				  key={`card-${index}`}
				  ref={el => { cardRefs.current[index] = el; }}
				  className={`
					aria-tabs-datagrid-adaptive__card-wrapper
					${isSelected ? 'aria-tabs-datagrid-adaptive__card-wrapper--selected' : ''}
					${isFocused ? 'aria-tabs-datagrid-adaptive__card-wrapper--focused' : ''}
					${isInCardNavigation ? 'aria-tabs-datagrid-adaptive__card-wrapper--card-navigation' : ''}
				  `.trim()}
				  role="gridcell"
				  aria-rowindex={gridPosition.row + 1}
				  aria-colindex={gridPosition.col + 1}
				  aria-selected={isSelected}
				  aria-expanded={isInCardNavigation}
				  aria-description={isInCardNavigation ? `Card navigation active. ${cardNavState.cardElements.length} interactive elements available.` : undefined}
				  tabIndex={shouldBeFocusable ? 0 : -1}
				  onClick={() => {
					// Only handle selection state, let onFocus handle focus state
					setCardNavState(prev => ({ 
					  ...prev, 
					  selectedCardIndex: prev.selectedCardIndex === index ? -1 : index
					}));
					handleCardSelect(row);
				  }}
				  onKeyDown={(event) => handleCardKeyDown(event, index)}
				  onFocus={() => {
					// Only update state if it's actually changing to prevent unnecessary re-renders
					setCardNavState(prev => {
					  if (prev.focusedCardIndex !== index || prev.focusArea !== 'cards') {
						return { 
						  ...prev, 
						  focusedCardIndex: index,
						  focusArea: 'cards'
						};
					  }
					  return prev; // No change, prevent re-render
					});
				  }}
				>
				  {customCard}
				</div>
			  );
			}

			// Use the generic card creation function with plugin support
			const cardProps = createCard(row, currentPanel.columns, genericCardConfig, domainPlugin);
			
			// Calculate the full className including navigation state
			const cardClassName = `
			  ${cardProps.className || ''}
			  ${isSelected ? 'aria-tabs-datagrid-adaptive__card--selected' : ''}
			  ${isFocused ? 'aria-tabs-datagrid-adaptive__card--focused' : ''}
			  ${isInCardNavigation ? 'aria-tabs-datagrid-adaptive__card--card-navigation' : ''}
			`.trim();
			
			return (
			  <div
				key={`card-${index}`}
				className={`
				  aria-tabs-datagrid-adaptive__card-wrapper
				  ${isInCardNavigation ? 'aria-tabs-datagrid-adaptive__card-wrapper--card-navigation' : ''}
				`.trim()}
				role="gridcell"
				aria-rowindex={gridPosition.row + 1}
				aria-colindex={gridPosition.col + 1}
			  >
				<Card 
				  {...cardProps}
				  ref={el => { cardRefs.current[index] = el; }}
				  className={cardClassName}
				  aria-selected={isSelected}
				  aria-expanded={isInCardNavigation}
				  aria-label={`${cardProps['aria-label'] || cardProps.heading}. ${isInCardNavigation ? `Card navigation active with ${cardNavState.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : 'Press Enter to navigate within card elements.'}`}
				  tabIndex={shouldBeFocusable ? 0 : -1}
				  onClick={() => {
					// Handle selection state similar to GanttChart task selection
					setCardNavState(prev => ({ 
					  ...prev, 
					  selectedCardIndex: prev.selectedCardIndex === index ? -1 : index
					}));
					handleCardSelect(row);
				  }}
				  onKeyDown={(event) => handleCardKeyDown(event, index)}
				  onFocus={() => {
					// Update focus state when card gains focus (like GanttChart timeline container)
					if (!cardNavState.isCardNavigationActive) {
					  setCardNavState(prev => {
						if (prev.focusedCardIndex !== index || prev.focusArea !== 'cards') {
						  return { 
							...prev, 
							focusedCardIndex: index,
							focusArea: 'cards',
							// Reset card navigation state when switching cards
							focusedCardElementIndex: 0,
							cardElements: []
						  };
						}
						return prev;
					  });
					}
				  }}
				/>
			  </div>
			);
		  })}
		</div>

		{/* Screen reader announcements container - fixed position to avoid layout impact */}
		<div 
		  ref={announcementsRef}
		  className="aria-tabs-datagrid-adaptive__announcements"
		  aria-hidden="true"
		  style={{
			position: 'fixed',
			top: '-1px',
			left: '-1px',
			width: '1px',
			height: '1px',
			overflow: 'hidden',
			clip: 'rect(0, 0, 0, 0)',
			whiteSpace: 'nowrap',
			border: 0,
			padding: 0,
			margin: 0
		  }}
		/>
	  </div>
	);
  }

  // Hybrid mode for tablets
  if (layout === 'hybrid') {
	return (
	  <div className={`aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${className || ''}`}>
		{/* Enhanced table with card-like spacing - AriaTabsDataGrid handles its own keyboard navigation */}
		<AriaTabsDataGrid 
		  tabPanels={tabPanels}
		  dataConfig={dataConfig}
		  ariaLabel={ariaLabel}
		  ariaDescription={ariaDescription}
		  orientation={orientation}
		  id={id}
		  disabled={disabled}
		  selectedIndex={selectedIndexProp} // Use the original prop, not ResponsiveDataGrid's state
		  onTabChange={onTabChange} // Use the original callback, not ResponsiveDataGrid's wrapper
		  className="aria-tabs-datagrid-adaptive__table--hybrid"
		  {...props}
		/>
	  </div>
	);
  }

  // Desktop table mode - AriaTabsDataGrid handles its own keyboard navigation
  return (
	<AriaTabsDataGrid 
	  tabPanels={tabPanels}
	  dataConfig={dataConfig}
	  ariaLabel={ariaLabel}
	  ariaDescription={ariaDescription}
	  orientation={orientation}
	  id={id}
	  disabled={disabled}
	  selectedIndex={selectedIndexProp} // Use the original prop, not ResponsiveDataGrid's state
	  onTabChange={onTabChange} // Use the original callback, not ResponsiveDataGrid's wrapper
	  {...props}
	/>
  );
};

export default ResponsiveDataGrid;