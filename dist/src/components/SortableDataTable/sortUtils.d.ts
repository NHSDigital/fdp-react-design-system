import { ColumnDefinition, SortConfig, SortingOptions, NullsPosition } from './AriaDataGridTypes';
/**
 * Resolve the value to use for sorting a given row under a specific column.
 * Precedence:
 * 1) column.sortAccessor(row)
 * 2) column.useRendererForSort → column.tableRenderer(row) else column.render(row)
 * 3) row[column.key]
 */
export declare function getSortValue(row: any, column: ColumnDefinition): any;
/**
 * Compare two already-resolved values for a column.
 *
 * Behaviour/precedence:
 * - If column.sortComparator exists → use it
 * - Else branch by explicit column.sortType
 * - Else attempt lightweight inference (number/boolean), then string compare fallback
 *
 * Note: Null/undefined handling is intentionally performed by buildMultiComparator,
 * not here, so this function assumes non-null inputs.
 */
export declare function compareValues(aVal: any, bVal: any, column?: ColumnDefinition, opts?: SortingOptions): number;
/**
 * Builds a stable comparator using column metadata. Handles multi-level SortConfig arrays.
 * nullsPosition controls where null/undefined values should be placed consistently.
 */
export declare function buildMultiComparator(columns: ColumnDefinition[], sortConfig: SortConfig[] | undefined, nullsPosition?: NullsPosition, options?: SortingOptions): (a: any, b: any) => number;
/**
 * Annotate an array of rows with a non-enumerable original index property
 * so that stable sorting can use it as a tiebreaker when options.stable is true.
 *
 * By default, writes `__originalIndex__` as a non-enumerable, configurable property.
 * You can change the property name (e.g. to `originalIndex`) via `propName`.
 *
 * This returns shallow-cloned objects to avoid mutating the original array items.
 */
export declare function annotateWithOriginalIndex<T extends Record<string, any>>(rows: T[], propName?: '__originalIndex__' | 'originalIndex'): (T & {
    [k in typeof propName]?: number;
})[];
