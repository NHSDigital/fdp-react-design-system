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
 * Priority level for conditional styling
 */
export type PriorityLevel = 'high' | 'medium' | 'low';
/**
 * Status type for conditional styling
 */
export type StatusType = 'active' | 'pending' | 'completed' | 'cancelled' | 'urgent';
/**
 * Badge configuration for dynamic badge creation
 */
export interface BadgeConfig {
    /** Field key to use for badge value */
    fieldKey: string;
    /** Optional custom render function */
    render?: (value: any, data: any) => string;
    /** CSS class for badge styling */
    className?: string;
    /** Color scheme for badge */
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}
/**
 * Generic card rendering configuration
 */
export interface GenericCardConfig<T = any> {
    /** Primary field to highlight in card header */
    primaryField?: string;
    /** Secondary fields to show in card body */
    secondaryFields?: string[];
    /** Badge configurations for dynamic badges */
    badges?: BadgeConfig[];
    /** Fields to hide in card view */
    hiddenFields?: string[];
    /** Custom card template function */
    cardTemplate?: (data: T, columns: any[], config: GenericCardConfig<T>) => React.ReactNode;
    /** Priority determination function */
    getPriority?: (data: T) => PriorityLevel;
    /** Status determination function */
    getStatus?: (data: T) => StatusType;
    /** Card variant determination function */
    getVariant?: (data: T) => 'default' | 'feature' | 'clickable' | 'secondary' | 'primary';
    /** Custom field renderer functions */
    fieldRenderers?: Record<string, (value: any, data: T) => string>;
    /** Custom CSS class prefix */
    classPrefix?: string;
}
/**
 * Domain-specific plugin interface
 */
export interface DomainPlugin<T = any> {
    /** Plugin name */
    name: string;
    /** Default card configuration */
    defaultCardConfig: GenericCardConfig<T>;
    /** Plugin-specific CSS import */
    cssImport?: string;
    /** Custom card templates */
    cardTemplates?: Record<string, (data: T, columns: any[], config: GenericCardConfig<T>) => React.ReactNode>;
    /** Field type detection functions */
    fieldTypes?: Record<string, (value: any) => boolean>;
}
/**
 * Extended tab panel config with generic card template support
 */
export interface GenericResponsiveTabPanelConfig<T = any> extends TabPanelConfig<T> {
    /** Custom card template function for this tab */
    cardTemplate?: (data: T, columns: any[]) => React.ReactNode;
}
/**
 * Enhanced props for generic responsive component
 */
export interface GenericResponsiveDataGridProps<T = any> extends AriaTabsDataGridProps<T> {
    /** Tab panels with responsive features */
    tabPanels: GenericResponsiveTabPanelConfig<T>[];
    /** Viewport breakpoints for layout switching */
    breakpoints?: ViewportConfig;
    /** Force a specific layout mode (overrides responsive behavior) */
    forceLayout?: LayoutMode;
    /** Generic card layout configuration */
    cardConfig?: GenericCardConfig<T>;
    /** Domain-specific plugin */
    domainPlugin?: DomainPlugin<T>;
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
