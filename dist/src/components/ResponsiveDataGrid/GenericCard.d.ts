import { GenericCardConfig } from './ResponsiveDataGridGeneric.types';
import { AriaDataGridColumn } from '../SortableDataTable/AriaDataGridTypes';
export interface GenericCardProps<T = any> {
    data: T;
    columns: AriaDataGridColumn[];
    config?: Partial<GenericCardConfig<T>>;
    className?: string;
    /**
     * Override heading (else computed from primaryField)
     */
    headingOverride?: string;
}
/**
 * Lightweight wrapper component that produces a <Card> using the same generic
 * card creation logic as ResponsiveDataGrid. It preserves focus/selection styles
 * when used inside the grid wrappers, but can also be used standalone.
 */
export declare function GenericCard<T = any>({ data, columns, config, className, headingOverride }: GenericCardProps<T>): import("react/jsx-runtime").JSX.Element;
export default GenericCard;
