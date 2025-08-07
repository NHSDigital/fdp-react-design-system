import { AriaTabsDataGridProps, TabPanelConfig } from '../AriaTabsDataGridTypes';
import * as React from 'react';

/**
 * Viewport configuration for adaptive layouts
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
export interface AdaptiveTabPanelConfig<T = any> extends Omit<TabPanelConfig<T>, 'onSort'> {
  /** Custom card template function for this tab */
  cardTemplate?: (data: T, columns: any[]) => React.ReactNode;
  /** Sorting callback with flexible key type */
  onSort?: (key: string | number | symbol) => void;
}

/**
 * Enhanced props for adaptive component
 */
export interface AriaTabsDataGridAdaptiveProps<T = any> extends AriaTabsDataGridProps<T> {
  /** Tab panels with adaptive features */
  tabPanels: AdaptiveTabPanelConfig<T>[];
  /** Viewport breakpoints for layout switching */
  breakpoints?: ViewportConfig;
  /** Force a specific layout mode (overrides responsive behavior) */
  forceLayout?: LayoutMode;
  /** Card layout configuration */
  cardConfig?: {
    /** Primary field to highlight in card header */
    primaryField?: string;
    /** Secondary fields to show in card body */
    secondaryFields?: string[];
    /** Fields to show as badges/tags */
    badgeFields?: string[];
    /** Fields to hide in card view */
    hiddenFields?: string[];
    /** Custom card template function */
    cardTemplate?: (data: T, columns: any[]) => React.ReactNode;
  };
  /** Enable experimental features */
  experimental?: {
    /** Hybrid view showing cards on mobile, table on desktop */
    hybridMode?: boolean;
    /** Animated transitions between layouts */
    animatedTransitions?: boolean;
    /** Virtual scrolling for large datasets */
    virtualScrolling?: boolean;
  };
}
