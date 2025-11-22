/**
 * Aggregation Engine
 *
 * Provides aggregation functions for GroupableDataGrid
 * Supports sum, avg, count, min, max, and custom aggregations
 */
import { AggregationType, AggregationConfig, CalculatedField } from '../GroupableDataGrid.types';
/**
 * Apply a single aggregation configuration to a set of items
 */
export declare function applyAggregation<T = any>(config: AggregationConfig, items: T[]): any;
/**
 * Apply multiple aggregation configurations to a set of items
 */
export declare function applyAggregations<T = any>(configs: AggregationConfig[], items: T[]): Record<string, any>;
/**
 * Create a calculated field value for a single row
 */
export declare function calculateFieldValue<T = any>(field: CalculatedField, row: T, allData: T[]): any;
/**
 * Enhance data with calculated fields
 */
export declare function enhanceDataWithCalculatedFields<T = any>(data: T[], calculatedFields: CalculatedField[]): (T & Record<string, any>)[];
/**
 * Validate aggregation configuration
 */
export declare function validateAggregationConfig(config: AggregationConfig): string[];
/**
 * Create a default aggregation label
 */
export declare function createDefaultLabel(config: AggregationConfig): string;
/**
 * Format an aggregated value for display
 */
export declare function formatAggregatedValue(value: any, config: AggregationConfig): string;
/**
 * Determine appropriate aggregation type for a column based on data
 */
export declare function inferAggregationType<T = any>(data: T[], column: string): AggregationType;
/**
 * Create aggregation configs for all columns in data
 */
export declare function createDefaultAggregations<T = any>(data: T[], columns: string[], excludeColumns?: string[]): AggregationConfig[];
/**
 * Merge aggregation results from multiple groups
 */
export declare function mergeAggregations(aggregations: Record<string, any>[], configs: AggregationConfig[]): Record<string, any>;
/**
 * Calculate percentage contribution of a value to total
 */
export declare function calculatePercentage(value: number, total: number): number;
/**
 * Format percentage for display
 */
export declare function formatPercentage(percentage: number, decimals?: number): string;
