import { type CardProps } from '../Card';
import { GenericCardConfig } from './ResponsiveDataGridGeneric.types';
/**
 * Generic card creation function that works with any data type and configuration
 */
export declare function createGenericCard<T = any>(data: T, columns: any[], config: GenericCardConfig<T>): CardProps;
/**
 * Default generic configuration for common use cases
 */
export declare const defaultGenericCardConfig: GenericCardConfig;
