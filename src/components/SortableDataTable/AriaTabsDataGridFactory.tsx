/**
 * Generic factory helpers for creating tabs configurations
 */

import { TabPanelConfig } from './AriaTabsDataGridTypes';
import { SortConfig } from './AriaDataGridTypes';

/**
 * Column definition for generic tab creation
 */
export interface GenericColumnDefinition<T> {
  key: string;
  label: string;
  render?: (data: T) => any;
  sortable?: boolean;
}

/**
 * Tab definition for generic tab creation
 */
export interface GenericTabDefinition<T> {
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
export const createGenericTabsConfig = <T>(
  data: T[],
  tabDefinitions: GenericTabDefinition<T>[]
): TabPanelConfig<T>[] => {
  return tabDefinitions.map(def => ({
    id: def.id,
    label: def.label,
    data: def.filter ? def.filter(data) : data,
    columns: def.columns.map(col => ({
      key: col.key,
      label: col.label,
      render: col.render
    })),
    sortConfig: def.sortConfig,
    ariaLabel: def.ariaLabel || `${def.label} Data Grid`,
    ariaDescription: def.ariaDescription || `Data grid showing ${def.label.toLowerCase()}`,
    className: def.className,
    disabled: def.disabled
  }));
};

/**
 * Helper function to create simple data views
 */
export const createSimpleDataView = <T>(
  data: T[],
  config: {
    id: string;
    label: string;
    columns: Array<{
      key: keyof T;
      label: string;
      render?: (value: any, data: T) => any;
    }>;
    defaultSort?: {
      key: keyof T;
      direction: 'asc' | 'desc';
    };
    ariaLabel?: string;
  }
): TabPanelConfig<T> => {
  return {
    id: config.id,
    label: config.label,
    data,
    columns: config.columns.map(col => ({
      key: col.key as string,
      label: col.label,
      render: col.render ? (data: T) => col.render!(data[col.key], data) : undefined
    })),
    sortConfig: config.defaultSort 
      ? [{ key: config.defaultSort.key as string, direction: config.defaultSort.direction }]
      : undefined,
    ariaLabel: config.ariaLabel || `${config.label} Data Grid`,
    ariaDescription: `Data grid showing ${config.label.toLowerCase()}`
  };
};

/**
 * Helper function for common business data patterns
 */
export const createBusinessDataTabs = <T extends Record<string, any>>(
  data: T[],
  options: {
    nameField: keyof T;
    statusField?: keyof T;
    dateField?: keyof T;
    amountField?: keyof T;
    additionalFields?: Array<{
      key: keyof T;
      label: string;
      render?: (value: any) => any;
    }>;
  }
): TabPanelConfig<T>[] => {
  const baseColumns = [
    { key: options.nameField as string, label: 'Name' }
  ];

  if (options.statusField) {
    baseColumns.push({ key: options.statusField as string, label: 'Status' });
  }

  if (options.dateField) {
    baseColumns.push({ 
      key: options.dateField as string, 
      label: 'Date',
      render: (data: T) => {
        const value = data[options.dateField!];
        return value instanceof Date ? value.toLocaleDateString() : value;
      }
    });
  }

  if (options.amountField) {
    baseColumns.push({ 
      key: options.amountField as string, 
      label: 'Amount',
      render: (data: T) => {
        const value = data[options.amountField!];
        return typeof value === 'number' ? `$${value.toFixed(2)}` : value;
      }
    });
  }

  if (options.additionalFields) {
    baseColumns.push(...options.additionalFields.map(field => ({
      key: field.key as string,
      label: field.label,
      render: field.render ? (data: T) => field.render!(data[field.key]) : undefined
    })));
  }

  return [
    {
      id: 'overview',
      label: 'Overview',
      data,
      columns: baseColumns,
      ariaLabel: 'Data Overview Grid',
      ariaDescription: 'Overview of all data items'
    }
  ];
};

/**
 * Default data comparison functions for common scenarios
 */
export const dataComparators = {
  /** JSON-based comparison (safe but slower) */
  json: <T>(a: T, b: T): boolean => JSON.stringify(a) === JSON.stringify(b),
  
  /** ID-based comparison */
  id: <T extends { id: string | number }>(a: T, b: T): boolean => a.id === b.id,
  
  /** Name-based comparison */
  name: <T extends { name: string }>(a: T, b: T): boolean => a.name === b.name,
  
  /** Custom field comparison */
  field: <T>(fieldName: keyof T) => (a: T, b: T): boolean => a[fieldName] === b[fieldName],
  
  /** Multi-field comparison */
  multiField: <T>(fields: Array<keyof T>) => (a: T, b: T): boolean => 
    fields.every(field => a[field] === b[field])
};

/**
 * Default filter functions for common scenarios
 */
export const filterFunctions = {
  /** No filtering */
  none: <T>(data: T[], _filters?: any): T[] => data,
  
  /** Simple object property matching */
  simple: <T>(data: T[], filters?: Record<string, any>): T[] => {
    if (!filters) return data;
    
    return data.filter(item => {
      return Object.keys(filters).every(key => {
        const filterValue = filters[key];
        const itemValue = (item as any)[key];
        
        if (filterValue === null || filterValue === undefined) return true;
        if (Array.isArray(filterValue)) {
          return filterValue.includes(itemValue);
        }
        
        return itemValue === filterValue;
      });
    });
  },
  
  /** Text search across multiple fields */
  textSearch: <T>(searchFields: Array<keyof T>) => (data: T[], filters?: { search?: string }): T[] => {
    if (!filters?.search) return data;
    
    const searchTerm = filters.search.toLowerCase();
    return data.filter(item => 
      searchFields.some(field => 
        String((item as any)[field]).toLowerCase().includes(searchTerm)
      )
    );
  }
};

/**
 * Default boolean renderers
 */
export const booleanRenderers = {
  /** Simple checkmark/cross */
  simple: (value: boolean) => value ? '✓' : '✗',
  
  /** Yes/No text */
  yesNo: (value: boolean) => value ? 'Yes' : 'No',
  
  /** Enabled/Disabled */
  enabledDisabled: (value: boolean) => value ? 'Enabled' : 'Disabled',
  
  /** Active/Inactive */
  activeInactive: (value: boolean) => value ? 'Active' : 'Inactive'
};
