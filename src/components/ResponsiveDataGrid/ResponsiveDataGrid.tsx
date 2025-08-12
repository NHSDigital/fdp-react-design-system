/**
 * ResponsiveDataGrid Component with Hierarchical Keyboard Navigation
 * 
 * ENHANCED ACCESSIBILITY FEATURES:
 * 
 * Hierarchical Navigation Structure:
 * 1. TAB LEVEL: Navigate between tab buttons using arrow keys
 * 2. CARD LEVEL: Navigate between cards using arrow keys  
 * 3. CARD-INTERNAL LEVEL: Navigate within card elements using arrow keys
 * 
 * Navigation Controls:
 * - Arrow keys: Navigate within current focus area
 * - Enter: When on card, enter card-internal navigation mode
 * - Space: Toggle card selection (traditional behavior)
 * - Escape: Exit card-internal navigation or clear selection
 * - Ctrl+Home/End: Jump between navigation levels
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
import { ResponsiveDataGridProps, LayoutMode, ViewportConfig } from './ResponsiveDataGridTypes';
import { AriaTabsDataGridState, AriaTabsDataGridAction } from '../SortableDataTable/AriaTabsDataGridTypes';
import './ResponsiveDataGrid.scss';

/**
 * Navigation focus areas for hierarchical keyboard navigation in card view
 */
type CardFocusArea = 'tabs' | 'cards' | 'card';

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
 * Smart card template selection based on data type
 * Now using the standardized Card component with healthcare-specific customization
 */
function createHealthcareCard(data: any, columns: any[], cardConfig: any): CardProps {
  const {
    primaryField,
    secondaryFields = [],
    badgeFields = [],
    hiddenFields = []
  } = cardConfig;

  // Determine primary content
  const primaryColumn = columns.find(col => col.key === primaryField);
  const primaryValue = primaryColumn?.render ? 
    primaryColumn.render(data) : 
    data[primaryField || 'name'] || 'Untitled';

  // Create healthcare-specific description
  const createDescription = () => {
    const relevantFields = secondaryFields
      .filter((fieldKey: string) => !hiddenFields.includes(fieldKey) && data[fieldKey])
      .slice(0, 3); // Limit to 3 fields for card readability

    return relevantFields.map((fieldKey: string) => {
      const column = columns.find(col => col.key === fieldKey);
      const value = column?.render ? column.render(data) : data[fieldKey];
      const label = column?.label || fieldKey;
      return `${label}: ${value}`;
    }).join(' • ');
  };

  // Create healthcare badges content
  const createBadges = () => {
    if (badgeFields.length === 0) return null;
    
    return badgeFields
      .filter((fieldKey: string) => data[fieldKey] !== undefined)
      .map((fieldKey: string) => {
        const column = columns.find(col => col.key === fieldKey);
        const value = column?.render ? column.render(data) : data[fieldKey];
        
        // Healthcare-specific badge styling
        if (fieldKey === 'ews_score') {
          const score = Number(value);
          const ewsClass = score >= 7 ? 'high' : score >= 3 ? 'medium' : 'low';
          return `<span class="nhsuk-tag nhsuk-tag--${ewsClass} adaptive-card__ews-badge">EWS: ${value}</span>`;
        }
        
        return `<span class="nhsuk-tag adaptive-card__badge">${value}</span>`;
      }).join('');
  };

  // Determine card variant based on healthcare context
  const getCardVariant = (): 'default' | 'feature' | 'clickable' | 'secondary' | 'primary' => {
    if (data.ews_score && Number(data.ews_score) >= 7) return 'primary'; // High priority
    if (data.priority === 'high' || data.status === 'urgent') return 'primary';
    return 'default';
  };

  const badges = createBadges();
  const description = createDescription();
  const enhancedDescription = badges ? `${description}${badges ? `<div class="adaptive-card__badges">${badges}</div>` : ''}` : description;

  return {
    variant: getCardVariant(),
    heading: String(primaryValue),
    descriptionHtml: enhancedDescription,
    className: 'adaptive-card adaptive-card--healthcare',
    'aria-label': `Healthcare record for ${primaryValue}`
  } as CardProps;
}

/**
 * Responsive Data Grid with mobile-first card layout
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

  // Card navigation state for ARIA grid keyboard navigation
  const [cardNavState, setCardNavState] = useState<CardNavigationState>({
    focusArea: 'tabs',
    focusedTabIndex: 0,
    focusedCardIndex: 0,
    selectedCardIndex: -1,
    isGridActive: false,
    focusedCardElementIndex: 0,
    cardElements: [],
    isCardNavigationActive: false
  });

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

  // Screen reader announcements
  const announceToScreenReader = useCallback((message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, []);

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

  // Enhanced card keyboard navigation handlers following GanttChart pattern
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
            const prevCardIndex = cardIndex - 1;
            setCardNavState(prev => ({ ...prev, focusedCardIndex: prevCardIndex }));
            focusCard(prevCardIndex);
          }
          break;
        case 'ArrowDown':
          event.preventDefault();
          const nextCardIndex = Math.min(cardCount - 1, cardIndex + 1);
          if (nextCardIndex !== cardIndex) {
            setCardNavState(prev => ({ ...prev, focusedCardIndex: nextCardIndex }));
            focusCard(nextCardIndex);
          }
          break;
        case 'Enter':
          if (currentPanel?.data[cardIndex]) {
            event.preventDefault();
            // Scan for focusable elements and activate card navigation
            const cardElements = scanCardElements(cardIndex);
            if (cardElements.length > 0) {
              setCardNavState(prev => ({
                ...prev,
                focusArea: 'card',
                isCardNavigationActive: true,
                focusedCardElementIndex: 0,
                cardElements
              }));
              announceToScreenReader(`Card navigation activated. ${cardElements.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`);
              // Focus will be handled by useEffect
            }
          }
          break;
        case 'ArrowLeft':
          event.preventDefault();
          // Navigate to previous tab
          if (state.selectedIndex > 0) {
            dispatch({ type: 'SET_SELECTED_INDEX', payload: state.selectedIndex - 1 });
            setCardNavState(prev => ({ ...prev, focusArea: 'tabs' }));
            setTimeout(() => focusTab(state.selectedIndex - 1), 0);
          }
          break;
        case 'ArrowRight':
          event.preventDefault();
          // Navigate to next tab
          if (state.selectedIndex < tabPanels.length - 1) {
            dispatch({ type: 'SET_SELECTED_INDEX', payload: state.selectedIndex + 1 });
            setCardNavState(prev => ({ ...prev, focusArea: 'tabs' }));
            setTimeout(() => focusTab(state.selectedIndex + 1), 0);
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
    switch (key) {
      case 'ArrowUp':
        event.preventDefault();
        if (cardNavState.focusArea === 'cards') {
          if (cardIndex === 0) {
            // Navigate to tabs
            setCardNavState(prev => ({ 
              ...prev, 
              focusArea: 'tabs',
              focusedTabIndex: state.selectedIndex
            }));
            focusTab(state.selectedIndex);
          } else {
            // Move to previous card
            const prevCardIndex = cardIndex - 1;
            focusCard(prevCardIndex);
          }
        }
        break;

      case 'ArrowDown':
        event.preventDefault();
        if (cardIndex < cardCount - 1) {
          // Move to next card
          const nextCardIndex = cardIndex + 1;
          focusCard(nextCardIndex);
        }
        break;

      case 'ArrowLeft':
        event.preventDefault();
        // Grid-style navigation - treat cards as a grid
        const cardsPerRow = 1; // Mobile-first, single column
        const prevRowCardIndex = Math.max(0, cardIndex - cardsPerRow);
        focusCard(prevRowCardIndex);
        break;

      case 'ArrowRight':
        event.preventDefault();
        // Grid-style navigation - treat cards as a grid
        const nextRowCardIndex = Math.min(cardCount - 1, cardIndex + 1);
        focusCard(nextRowCardIndex);
        break;

      case 'Home':
        event.preventDefault();
        if (event.ctrlKey) {
          // Navigate to tabs
          setCardNavState(prev => ({ 
            ...prev, 
            focusArea: 'tabs',
            focusedTabIndex: state.selectedIndex,
            focusedCardIndex: 0
          }));
          focusTab(state.selectedIndex);
        } else {
          // First card
          focusCard(0);
        }
        break;

      case 'End':
        event.preventDefault();
        if (event.ctrlKey) {
          // Navigate to tabs
          setCardNavState(prev => ({ 
            ...prev, 
            focusArea: 'tabs',
            focusedTabIndex: state.selectedIndex,
            focusedCardIndex: cardCount - 1
          }));
          focusTab(state.selectedIndex);
        } else {
          // Last card
          const lastCardIndex = cardCount - 1;
          focusCard(lastCardIndex);
        }
        break;

      case 'Enter':
        event.preventDefault();
        // Enter card navigation mode - scan for internal elements
        const cardElements = scanCardElements(cardIndex);
        if (cardElements.length > 0) {
          setCardNavState(prev => ({
            ...prev,
            focusArea: 'card',
            isCardNavigationActive: true,
            selectedCardIndex: cardIndex,
            cardElements,
            focusedCardElementIndex: 0
          }));
          focusCardElement(cardIndex, 0);
          announceToScreenReader(`Entered card navigation, found ${cardElements.length} interactive elements`);
        } else {
          // No internal elements, just select the card
          const currentData = currentPanel?.data[cardIndex];
          if (currentData) {
            const isCurrentlySelected = cardNavState.selectedCardIndex === cardIndex;
            setCardNavState(prev => ({ 
              ...prev, 
              selectedCardIndex: isCurrentlySelected ? -1 : cardIndex 
            }));
            handleCardSelect(currentData);
          }
        }
        break;

      case ' ':
        event.preventDefault();
        // Toggle selection (traditional behavior)
        const currentData = currentPanel?.data[cardIndex];
        if (currentData) {
          const isCurrentlySelected = cardNavState.selectedCardIndex === cardIndex;
          setCardNavState(prev => ({ 
            ...prev, 
            selectedCardIndex: isCurrentlySelected ? -1 : cardIndex 
          }));
          handleCardSelect(currentData);
        }
        break;

      case 'Escape':
        event.preventDefault();
        // Clear selection and exit any navigation modes
        setCardNavState(prev => ({ 
          ...prev, 
          selectedCardIndex: -1,
          isCardNavigationActive: false,
          focusArea: 'cards',
          cardElements: [],
          focusedCardElementIndex: 0
        }));
        break;
    }
  }, [cardNavState, state.selectedIndex, tabPanels, handleCardSelect, focusCard, focusTab, setCardNavState, scanCardElements, focusCardElement, announceToScreenReader]);

  // Enhanced tab keyboard navigation that handles card navigation
  const handleTabKeyDownWithCards = useCallback((event: React.KeyboardEvent, index: number) => {
    const { key } = event;
    
    switch (key) {
      case 'ArrowLeft':
        event.preventDefault();
        const prevIndex = index > 0 ? index - 1 : tabPanels.length - 1;
        handleTabSelect(prevIndex);
        setCardNavState(prev => ({ ...prev, focusedTabIndex: prevIndex }));
        tabRefs.current[prevIndex]?.focus();
        break;
      
      case 'ArrowRight':
        event.preventDefault();
        const nextIndex = index < tabPanels.length - 1 ? index + 1 : 0;
        handleTabSelect(nextIndex);
        setCardNavState(prev => ({ ...prev, focusedTabIndex: nextIndex }));
        tabRefs.current[nextIndex]?.focus();
        break;

      case 'ArrowDown':
        event.preventDefault();
        // Navigate to first card
        if (layout === 'cards') {
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
        break;
      
      case 'End':
        event.preventDefault();
        const lastIndex = tabPanels.length - 1;
        handleTabSelect(lastIndex);
        setCardNavState(prev => ({ ...prev, focusedTabIndex: lastIndex }));
        tabRefs.current[lastIndex]?.focus();
        break;
      
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleTabSelect(index);
        break;
    }
  }, [tabPanels.length, handleTabSelect, layout, focusCard, setCardNavState]);

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

        {/* Card-based data presentation with ARIA grid navigation */}
        <div 
          className="aria-tabs-datagrid-adaptive__cards" 
          role="grid"
          aria-label={`${currentPanel?.label || 'Data'} cards`}
          aria-rowcount={currentPanel?.data.length || 0}
          aria-colcount={1}
          id={`panel-${currentPanel?.id}`}
          aria-labelledby={`tab-${currentPanel?.id}`}
        >
          {currentPanel?.data.map((row, index) => {
            const isSelected = cardNavState.selectedCardIndex === index;
            const isFocused = cardNavState.focusedCardIndex === index && cardNavState.focusArea === 'cards';
            const isInCardNavigation = cardNavState.focusedCardIndex === index && cardNavState.focusArea === 'card' && cardNavState.isCardNavigationActive;
            // Ensure first card is focusable if no card is currently focused
            const isFirstCardFocusable = index === 0 && cardNavState.focusArea !== 'cards';
            const shouldBeFocusable = isFocused || isFirstCardFocusable;
            
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
                  aria-rowindex={index + 1}
                  aria-colindex={1}
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

            // Use the standardized Card component with healthcare-specific props
            const cardProps = createHealthcareCard(row, currentPanel.columns, cardConfig);
            
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
                aria-rowindex={index + 1}
                aria-colindex={1}
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
      </div>
    );
  }

  // Hybrid mode for tablets
  if (layout === 'hybrid') {
    return (
      <div className={`aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${className || ''}`}>
        {/* Enhanced table with card-like spacing */}
        <AriaTabsDataGrid 
          tabPanels={tabPanels}
          dataConfig={dataConfig}
          ariaLabel={ariaLabel}
          ariaDescription={ariaDescription}
          orientation={orientation}
          id={id}
          disabled={disabled}
          selectedIndex={state.selectedIndex}
          onTabChange={handleTabSelect}
          className="aria-tabs-datagrid-adaptive__table--hybrid"
          {...props}
        />
      </div>
    );
  }

  // Desktop table mode
  return (
    <AriaTabsDataGrid 
      tabPanels={tabPanels}
      dataConfig={dataConfig}
      ariaLabel={ariaLabel}
      ariaDescription={ariaDescription}
      orientation={orientation}
      id={id}
      disabled={disabled}
      selectedIndex={state.selectedIndex}
      onTabChange={handleTabSelect}
      {...props}
    />
  );
};

export default ResponsiveDataGrid;