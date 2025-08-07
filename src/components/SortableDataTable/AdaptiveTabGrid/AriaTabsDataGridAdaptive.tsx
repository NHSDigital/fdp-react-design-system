import React, { useState, useEffect, useCallback, useRef, useReducer, useMemo } from 'react';
import { AriaTabsDataGrid } from '../AriaTabsDataGrid';
import { Card, type CardProps } from '../../Card';
import { AriaTabsDataGridAdaptiveProps, LayoutMode, ViewportConfig } from './AriaTabsDataGridAdaptiveTypes';
import { AriaTabsDataGridState, AriaTabsDataGridAction } from '../AriaTabsDataGridTypes';
import './AriaTabsDataGridAdaptive.scss';

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
 * Adaptive AriaTabsDataGrid with mobile-first card layout
 */
export const AriaTabsDataGridAdaptive: React.FC<AriaTabsDataGridAdaptiveProps> = ({
  // Adaptive-specific props
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

  // Keyboard navigation handlers
  const handleTabKeyDown = useCallback((event: React.KeyboardEvent, index: number) => {
    const { key } = event;
    
    switch (key) {
      case 'ArrowLeft':
        event.preventDefault();
        const prevIndex = index > 0 ? index - 1 : tabPanels.length - 1;
        handleTabSelect(prevIndex);
        tabRefs.current[prevIndex]?.focus();
        break;
      
      case 'ArrowRight':
        event.preventDefault();
        const nextIndex = index < tabPanels.length - 1 ? index + 1 : 0;
        handleTabSelect(nextIndex);
        tabRefs.current[nextIndex]?.focus();
        break;
      
      case 'Home':
        event.preventDefault();
        handleTabSelect(0);
        tabRefs.current[0]?.focus();
        break;
      
      case 'End':
        event.preventDefault();
        const lastIndex = tabPanels.length - 1;
        handleTabSelect(lastIndex);
        tabRefs.current[lastIndex]?.focus();
        break;
      
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleTabSelect(index);
        break;
    }
  }, [tabPanels.length, handleTabSelect]);

  // Handle card selection
  const handleCardSelect = useCallback((data: any) => {
    console.log('Card selected:', data);
    // This would typically update selection state
  }, []);

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

        {/* Card-based data presentation */}
        <div 
          className="aria-tabs-datagrid-adaptive__cards" 
          role="tabpanel"
          id={`panel-${currentPanel?.id}`}
          aria-labelledby={`tab-${currentPanel?.id}`}
        >
          {currentPanel?.data.map((row, index) => {
            // If custom card template is provided, use it
            if (cardConfig.cardTemplate) {
              const customCard = cardConfig.cardTemplate(row, currentPanel.columns);
              return (
                <div
                  key={`card-${index}`}
                  className="aria-tabs-datagrid-adaptive__card-wrapper"
                  role="gridcell"
                  tabIndex={0}
                >
                  {customCard}
                </div>
              );
            }

            // Use the standardized Card component with healthcare-specific props
            const cardProps = createHealthcareCard(row, currentPanel.columns, cardConfig);
            
            return (
              <div
                key={`card-${index}`}
                className="aria-tabs-datagrid-adaptive__card-wrapper"
                role="gridcell"
                tabIndex={0}
                onClick={() => handleCardSelect(row)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardSelect(row);
                  }
                }}
                style={{ cursor: 'pointer' }}
              >
                <Card {...cardProps} />
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

export default AriaTabsDataGridAdaptive;