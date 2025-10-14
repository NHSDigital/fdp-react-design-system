/**
 * Generic factory helpers for creating tabs configurations
 */
import { TabPanelConfig } from "./AriaTabsDataGridTypes";
import { SortConfig } from "./AriaDataGridTypes";
/**
 * Column definition for generic tab creation
 */
export interface GenericColumnDefinition<T> {
    key: string;
    label: string;
    render?: (data: T) => any;
    sortable?: boolean;
    /** Optional high-precedence custom renderer (value, row) signature alignment with ColumnDefinition.customRenderer */
    customRenderer?: (value: any, row: T) => React.ReactNode;
}
/**
 * Tab definition for generic tab creation
 */
export interface GenericTabDefinition<T = any> {
    id: string;
    label: string;
    columns: GenericColumnDefinition<T>[];
    filter?: (data: T[]) => T[];
    sortConfig?: SortConfig[];
    ariaLabel?: string;
    ariaDescription?: string;
    className?: string;
    disabled?: boolean;
}
/**
 * Generic factory function to create tabs configuration
 */
export declare const createGenericTabsConfig: <T>(data: T[], tabDefinitions: GenericTabDefinition<T>[]) => TabPanelConfig<T>[];
/**
 * Helper function to create simple data views
 */
export declare const createSimpleDataView: <T>(data: T[], config: {
    id: string;
    label: string;
    columns: Array<{
        key: keyof T;
        label: string;
        render?: (value: any, data: T) => any;
    }>;
    defaultSort?: {
        key: keyof T;
        direction: "asc" | "desc";
    };
    ariaLabel?: string;
    className?: string;
    disabled?: boolean;
}) => TabPanelConfig<T>;
/**
 * Helper function for common business data patterns
 */
export declare const createBusinessDataTabs: <T extends Record<string, any>>(data: T[], options: {
    nameField: keyof T;
    statusField?: keyof T;
    dateField?: keyof T;
    amountField?: keyof T;
    additionalFields?: Array<{
        key: keyof T;
        label: string;
        render?: (value: any) => any;
    }>;
}) => TabPanelConfig<T>[];
/**
 * Default data comparison functions for common scenarios
 */
export declare const dataComparators: {
    /** JSON-based comparison (safe but slower) */
    json: <T>(a: T, b: T) => boolean;
    /** ID-based comparison */
    id: <T extends {
        id: string | number;
    }>(a: T, b: T) => boolean;
    /** Name-based comparison */
    name: <T extends {
        name: string;
    }>(a: T, b: T) => boolean;
    /** Custom field comparison */
    field: <T>(fieldName: keyof T) => (a: T, b: T) => boolean;
    /** Multi-field comparison */
    multiField: <T>(fields: Array<keyof T>) => (a: T, b: T) => boolean;
};
/**
 * Default filter functions for common scenarios
 */
export declare const filterFunctions: {
    /** No filtering */
    none: <T>(data: T[], _filters?: any) => T[];
    /** Simple object property matching */
    simple: <T>(data: T[], filters?: Record<string, any>) => T[];
    /** Text search across multiple fields */
    textSearch: <T>(searchFields: Array<keyof T>) => (data: T[], filters?: {
        search?: string;
    }) => T[];
};
/**
 * Default boolean renderers
 */
export declare const booleanRenderers: {
    /** Simple checkmark/cross */
    simple: (value: boolean) => "✓" | "✗";
    /** Yes/No text */
    yesNo: (value: boolean) => "Yes" | "No";
    /** Enabled/Disabled */
    enabledDisabled: (value: boolean) => "Enabled" | "Disabled";
    /** Active/Inactive */
    activeInactive: (value: boolean) => "Active" | "Inactive";
};
