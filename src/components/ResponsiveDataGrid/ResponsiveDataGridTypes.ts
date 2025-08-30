import { AriaTabsDataGridProps, TabPanelConfig } from '../SortableDataTable/AriaTabsDataGridTypes';
import * as React from 'react';

/**
 * Viewport configuration for responsive layouts
 */
export interface ViewportConfig {
  mobile: number;
  tablet: number;
  desktop: number;
}

/**
 * Layout mode for data presentation
 */
export type LayoutMode = 'cards' | 'table' | 'hybrid';

/**
 * Extended tab panel config with card template support
 */
export interface ResponsiveTabPanelConfig<T = any> extends TabPanelConfig<T> {
  /** Custom card template function for this tab */
  cardTemplate?: (data: T, columns: any[]) => React.ReactNode;
}

/**
 * Enhanced props for responsive component
 */
export interface ResponsiveDataGridProps<T = any> extends Omit<AriaTabsDataGridProps<T>, 'tabPanels'> {
  /** Array of responsive tab panel configurations with card template support */
  tabPanels: ResponsiveTabPanelConfig<T>[];
  
  /** 
   * Enable advanced sorting with SortStatusControl component.
   * When true, provides multi-column sorting, drag reordering, and sort management.
   * When false (default), uses simple dropdown sorting for card view only.
   * 
   * Note: Advanced sorting requires additional CSS dependencies. 
   */
  enableAdvancedSorting?: boolean;
  
  /** Viewport breakpoints for responsive behavior */
  breakpoints?: ViewportConfig;
  
  /** Force a specific layout mode */
  forceLayout?: LayoutMode;
  
  /** Card configuration for card view */
  cardConfig?: {
    primaryField?: string;
    secondaryFields?: string[];
    badgeFields?: string[];
    hiddenFields?: string[];
    cardTemplate?: (data: T, columns: any[]) => React.ReactNode;
  };
  
  /** Experimental features */
  experimental?: {
    hybridMode?: boolean;
    animatedTransitions?: boolean;
    virtualScrolling?: boolean;
  };
  
  /** Enhanced options for responsive behavior */
  responsiveOptions?: {
    /** Enable card layout on mobile devices */
    enableCardLayout?: boolean;
    /** Breakpoint for switching to card layout (default: 768px) */
    cardBreakpoint?: number;
    /** Enable smooth layout transitions */
    animatedTransitions?: boolean;
    /** Virtual scrolling for large datasets */
    virtualScrolling?: boolean;
  };

  /** 
   * Optional action buttons or content to display in the top-right area.
   * In card layout: appears in the top-right of the tab bar (when space allows) or above the table, right-aligned.
   * In table/hybrid layout: appears above the table, right-aligned.
   */
  topActions?: React.ReactNode;

  /** 
   * Optional action buttons or content to display below the table/cards area.
   * Appears at the bottom of the component, typically for pagination or bulk actions.
   */
  bottomActions?: React.ReactNode;

  /**
   * Actions specifically for the underlying AriaTabsDataGrid (e.g. export, view toggles) that
   * should participate in the tabs action placement (inline when space permits or above).
   * These are forwarded to the AriaTabsDataGrid `actions` prop.
   */
  gridActions?: React.ReactNode;

  /**
   * Force the forwarded gridActions to render above the tabs (never inline) when provided.
   * Maps to AriaTabsDataGrid `forceActionsAbove`.
   */
  forceGridActionsAbove?: boolean;
}
