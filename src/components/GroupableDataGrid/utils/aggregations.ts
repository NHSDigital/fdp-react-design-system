/**
 * Aggregation Engine
 * 
 * Provides aggregation functions for GroupableDataGrid
 * Supports sum, avg, count, min, max, and custom aggregations
 */

import { AggregationType, AggregationConfig, CalculatedField } from '../GroupableDataGrid.types';

/**
 * Type guard to check if a value is numeric
 */
function isNumeric(value: any): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * Type guard to check if a value is a valid date
 */
function isValidDate(value: any): boolean {
  if (value instanceof Date) return !isNaN(value.getTime());
  const parsed = new Date(value);
  return !isNaN(parsed.getTime());
}

/**
 * Extract values from items for a given column
 */
function extractValues<T>(items: T[], column: string): any[] {
  return items.map(item => {
    // Support nested paths like 'patient.ward.name'
    const keys = column.split('.');
    let value: any = item;
    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) break;
    }
    return value;
  }).filter(v => v !== undefined && v !== null);
}

/**
 * Sum aggregation
 */
function sum(values: any[]): number {
  const numericValues = values.filter(isNumeric);
  if (numericValues.length === 0) return 0;
  return numericValues.reduce((acc, val) => acc + val, 0);
}

/**
 * Average aggregation
 */
function avg(values: any[]): number {
  const numericValues = values.filter(isNumeric);
  if (numericValues.length === 0) return 0;
  return sum(numericValues) / numericValues.length;
}

/**
 * Count aggregation
 */
function count(values: any[]): number {
  return values.length;
}

/**
 * Count unique values
 */
function countUnique(values: any[]): number {
  return new Set(values).size;
}

/**
 * Minimum aggregation
 */
function min(values: any[]): number | null {
  const numericValues = values.filter(isNumeric);
  if (numericValues.length === 0) return null;
  return Math.min(...numericValues);
}

/**
 * Maximum aggregation
 */
function max(values: any[]): number | null {
  const numericValues = values.filter(isNumeric);
  if (numericValues.length === 0) return null;
  return Math.max(...numericValues);
}

/**
 * First value aggregation
 */
function first(values: any[]): any {
  return values.length > 0 ? values[0] : null;
}

/**
 * Last value aggregation
 */
function last(values: any[]): any {
  return values.length > 0 ? values[values.length - 1] : null;
}

/**
 * Concatenate string values
 */
function concatFn(values: any[]): string {
  const separator = ', ';
  return values
    .filter(v => v !== null && v !== undefined)
    .map(v => String(v))
    .join(separator);
}

/**
 * Built-in aggregation functions map
 */
const AGGREGATION_FUNCTIONS: Record<
  Exclude<AggregationType, 'custom'>,
  (values: any[], items?: any[]) => any
> = {
  sum,
  avg,
  count,
  min,
  max,
  first,
  last,
  concat: concatFn,
  countUnique,
};

/**
 * Apply a single aggregation configuration to a set of items
 */
export function applyAggregation<T = any>(
  config: AggregationConfig,
  items: T[]
): any {
  if (items.length === 0) {
    return null;
  }

  // Extract values for the specified column
  const values = extractValues(items, config.column);

  // Apply the aggregation function
  let result: any;
  
  if (config.type === 'custom') {
    if (!config.customFn) {
      throw new Error(`Custom aggregation for column "${config.column}" requires a customFn`);
    }
    result = config.customFn(values, items);
  } else {
    const aggregationFn = AGGREGATION_FUNCTIONS[config.type];
    result = aggregationFn(values, items);
  }

  return result;
}

/**
 * Apply multiple aggregation configurations to a set of items
 */
export function applyAggregations<T = any>(
  configs: AggregationConfig[],
  items: T[]
): Record<string, any> {
  const results: Record<string, any> = {};

  for (const config of configs) {
    const key = config.label || `${config.column}_${config.type}`;
    results[key] = applyAggregation(config, items);
  }

  return results;
}

/**
 * Create a calculated field value for a single row
 */
export function calculateFieldValue<T = any>(
  field: CalculatedField,
  row: T,
  allData: T[]
): any {
  try {
    return field.calculate(row, allData);
  } catch (error) {
    console.error(`Error calculating field "${field.key}":`, error);
    return null;
  }
}

/**
 * Enhance data with calculated fields
 */
export function enhanceDataWithCalculatedFields<T = any>(
  data: T[],
  calculatedFields: CalculatedField[]
): (T & Record<string, any>)[] {
  if (calculatedFields.length === 0) {
    return data as (T & Record<string, any>)[];
  }

  return data.map(row => {
    const enhancedRow = { ...row };
    
    for (const field of calculatedFields) {
      (enhancedRow as any)[field.key] = calculateFieldValue(field, row, data);
    }
    
    return enhancedRow as T & Record<string, any>;
  });
}

/**
 * Validate aggregation configuration
 */
export function validateAggregationConfig(config: AggregationConfig): string[] {
  const errors: string[] = [];

  if (!config.column) {
    errors.push('Aggregation config must specify a column');
  }

  if (!config.type) {
    errors.push('Aggregation config must specify a type');
  }

  if (config.type === 'custom' && !config.customFn) {
    errors.push('Custom aggregation requires a customFn');
  }

  return errors;
}

/**
 * Create a default aggregation label
 */
export function createDefaultLabel(config: AggregationConfig): string {
  const typeLabels: Record<AggregationType, string> = {
    sum: 'Sum',
    avg: 'Average',
    count: 'Count',
    min: 'Min',
    max: 'Max',
    first: 'First',
    last: 'Last',
    concat: 'Concatenated',
    countUnique: 'Unique',
    custom: 'Custom',
  };

  const typeLabel = typeLabels[config.type] || config.type;
  return `${typeLabel} of ${config.column}`;
}

/**
 * Format an aggregated value for display
 */
export function formatAggregatedValue(
  value: any,
  config: AggregationConfig
): string {
  if (value === null || value === undefined) {
    return '—'; // Em dash for null values
  }

  // Use custom format if provided
  if (config.format) {
    const formatted = config.format(value);
    return typeof formatted === 'string' ? formatted : String(formatted);
  }

  // Default formatting based on type
  switch (config.type) {
    case 'sum':
    case 'avg':
      return isNumeric(value) ? value.toFixed(2) : String(value);
    
    case 'count':
    case 'countUnique':
      return String(value);
    
    case 'min':
    case 'max':
      return isNumeric(value) ? value.toFixed(2) : String(value);
    
    case 'first':
    case 'last':
      return String(value);
    
    case 'concat':
      return String(value);
    
    default:
      return String(value);
  }
}

/**
 * Determine appropriate aggregation type for a column based on data
 */
export function inferAggregationType<T = any>(
  data: T[],
  column: string
): AggregationType {
  const values = extractValues(data, column);
  
  if (values.length === 0) {
    return 'count';
  }

  // Check if all values are numeric
  const allNumeric = values.every(isNumeric);
  if (allNumeric) {
    return 'sum'; // Default to sum for numeric data
  }

  // Check if values are dates
  const allDates = values.every(isValidDate);
  if (allDates) {
    return 'count'; // Count for dates (min/max could also work)
  }

  // Default to count for non-numeric data
  return 'count';
}

/**
 * Create aggregation configs for all columns in data
 */
export function createDefaultAggregations<T = any>(
  data: T[],
  columns: string[],
  excludeColumns: string[] = []
): AggregationConfig[] {
  return columns
    .filter(col => !excludeColumns.includes(col))
    .map(column => ({
      column,
      type: inferAggregationType(data, column),
      showInHeader: true,
      showInFooter: true,
    }));
}

/**
 * Merge aggregation results from multiple groups
 */
export function mergeAggregations(
  aggregations: Record<string, any>[],
  configs: AggregationConfig[]
): Record<string, any> {
  const merged: Record<string, any> = {};

  for (const config of configs) {
    const key = config.label || `${config.column}_${config.type}`;
    const values = aggregations.map(agg => agg[key]).filter(v => v !== null && v !== undefined);

    // Apply the aggregation function to the aggregated values
    if (config.type === 'count') {
      merged[key] = sum(values); // Sum up counts
    } else if (config.type === 'sum') {
      merged[key] = sum(values); // Sum up sums
    } else if (config.type === 'avg') {
      merged[key] = avg(values); // Average of averages (note: this is approximate)
    } else if (config.type === 'min') {
      merged[key] = min(values); // Minimum of minimums
    } else if (config.type === 'max') {
      merged[key] = max(values); // Maximum of maximums
    } else {
      // For other types, take the first value
      merged[key] = values.length > 0 ? values[0] : null;
    }
  }

  return merged;
}

/**
 * Calculate percentage contribution of a value to total
 */
export function calculatePercentage(value: number, total: number): number {
  if (total === 0) return 0;
  return (value / total) * 100;
}

/**
 * Format percentage for display
 */
export function formatPercentage(percentage: number, decimals: number = 1): string {
  return `${percentage.toFixed(decimals)}%`;
}
