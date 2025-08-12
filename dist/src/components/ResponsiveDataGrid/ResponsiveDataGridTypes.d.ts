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
export interface ResponsiveDataGridProps<T = any> extends AriaTabsDataGridProps<T> {
    /** Tab panels with responsive features */
    tabPanels: ResponsiveTabPanelConfig<T>[];
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
