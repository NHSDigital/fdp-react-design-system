import { ColumnDefinition, SortConfig, SortingOptions, NullsPosition, BooleanOrder, SortType } from './AriaDataGridTypes';

/**
 * Sorting utilities for AriaDataGrid and AriaTabsDataGrid.
 *
 * Goals:
 * - Provide consistent, type-aware comparisons (number, boolean, date, string)
 * - Support per-column sort accessors and custom comparators
 * - Centralise multi-key (priority-ordered) sort logic with unified null handling
 * - Keep rendering and keyboard-selection paths aligned
 */

/**
 * Controls where null/undefined values are placed relative to non-null values.
 * 'first'  → all nulls come before any non-null
 * 'last'   → all nulls come after any non-null
 */
// use typed NullsPosition enum from types

/**
 * Convert an arbitrary input to a comparable timestamp (ms since epoch) when possible.
 * Returns null when the input is null/undefined or cannot be parsed as a valid date.
 */
function toComparableDate(value: any): number | null {
  if (value == null) return null;
  // Support Date instances directly; otherwise attempt to parse string/number
  const d = value instanceof Date ? value : new Date(value);
  const t = d.getTime();
  return Number.isNaN(t) ? null : t;
}

/**
 * Using a shared Intl.Collator for natural-ish, locale-aware string comparison with numeric awareness.
 * This sorts "2" before "10" and avoids re-allocating collators during sort operations.
 */
const defaultCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
function defaultStringCompare(a: any, b: any): number {
  return defaultCollator.compare(String(a), String(b));
}

/**
 * Resolve the value to use for sorting a given row under a specific column.
 * Precedence:
 * 1) column.sortAccessor(row)
 * 2) column.useRendererForSort → column.tableRenderer(row) else column.render(row)
 * 3) row[column.key]
 */
export function getSortValue(row: any, column: ColumnDefinition): any {
  if (column.sortAccessor) return column.sortAccessor(row);
  if (column.useRendererForSort) {
    if (column.tableRenderer) return column.tableRenderer(row);
    if (column.render) return column.render(row);
  }
  return row[column.key];
}

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
export function compareValues(aVal: any, bVal: any, column?: ColumnDefinition, opts?: SortingOptions): number {
  // Custom comparator has ultimate precedence when provided
  if (column?.sortComparator) {
    return column.sortComparator(aVal, bVal);
  }

  const type = column?.sortType;
  if (type === SortType.Number) {
    // Treat NaN as null-equivalent here so compareValues stays consistent with null policy handled above
    const an = Number(aVal);
    const bn = Number(bVal);
    const aNaN = Number.isNaN(an);
    const bNaN = Number.isNaN(bn);
    if (aNaN && bNaN) return 0;
    if (aNaN) return 1;
    if (bNaN) return -1;
    return an - bn;
  }
  if (type === SortType.Boolean) {
    const ab = Boolean(aVal), bb = Boolean(bVal);
    const order = column?.booleanOrder ?? opts?.booleanOrder ?? BooleanOrder.FalseFirst;
    if (ab === bb) return 0;
    return order === BooleanOrder.TrueFirst ? (ab ? -1 : 1) : (ab ? 1 : -1);
  }
  if (type === SortType.Date) {
    const at = toComparableDate(aVal);
    const bt = toComparableDate(bVal);
    if (at == null && bt == null) return 0;
    if (at == null) return 1;
    if (bt == null) return -1;
    return at - bt;
  }

  // Fallback/inference
  if (typeof aVal === 'number' && typeof bVal === 'number') {
    // Handle NaN gracefully as null-equivalent
    const aNaN = Number.isNaN(aVal);
    const bNaN = Number.isNaN(bVal);
    if (aNaN && bNaN) return 0;
    if (aNaN) return 1;
    if (bNaN) return -1;
    return aVal - bVal;
  }
  if (typeof aVal === 'boolean' && typeof bVal === 'boolean') {
    const order = column?.booleanOrder ?? opts?.booleanOrder ?? BooleanOrder.FalseFirst;
    if (aVal === bVal) return 0;
    return order === BooleanOrder.TrueFirst ? (aVal ? -1 : 1) : (aVal ? 1 : -1);
  }

  return defaultStringCompare(aVal, bVal);
}

/**
 * Builds a stable comparator using column metadata. Handles multi-level SortConfig arrays.
 * nullsPosition controls where null/undefined values should be placed consistently.
 */
export function buildMultiComparator(
  columns: ColumnDefinition[],
  sortConfig: SortConfig[] | undefined,
  nullsPosition: NullsPosition = NullsPosition.Last,
  options?: SortingOptions
) {
  // Pre-index columns by key for quick lookups during sort
  const colMap = new Map(columns.map(c => [c.key, c] as const));
  const configs = sortConfig ?? [];
  return (a: any, b: any) => {
    if (!configs.length) return 0;
    for (const { key, direction } of configs) {
      // Determine the relevant column metadata for this key
      const col = colMap.get(key);
      // Compute comparable values using accessor/renderer hints when available
      const aVal = col ? getSortValue(a, col) : a[key];
      const bVal = col ? getSortValue(b, col) : b[key];

      // Unified null handling (kept here to avoid scattering into compareValues)
      const aNull = aVal == null;
      const bNull = bVal == null;
      if (aNull || bNull) {
        if (aNull && bNull) continue;
        const effectiveNulls = col?.nullsPosition ?? options?.nullsPosition ?? nullsPosition;
        if (effectiveNulls === NullsPosition.First) {
          return aNull ? -1 : 1;
        } else {
          return aNull ? 1 : -1;
        }
      }

      // Compare non-null values using type-aware logic and optional custom comparator
      let cmp = compareValues(aVal, bVal, col, options);
      // Apply direction (ascending vs descending) and early-exit when a difference is found
      if (cmp !== 0) return direction === 'asc' ? cmp : -cmp;
    }
    // All sort keys exhausted → consider items equal for ordering purposes.
    // Optional stable tiebreaker using original indices (if present)
    if (options?.stable) {
      const ai = (a as any).__originalIndex__ ?? (a as any).originalIndex ?? undefined;
      const bi = (b as any).__originalIndex__ ?? (b as any).originalIndex ?? undefined;
      if (typeof ai === 'number' && typeof bi === 'number') {
        return ai - bi;
      }
    }
    return 0;
  };
}

/**
 * Annotate an array of rows with a non-enumerable original index property
 * so that stable sorting can use it as a tiebreaker when options.stable is true.
 *
 * By default, writes `__originalIndex__` as a non-enumerable, configurable property.
 * You can change the property name (e.g. to `originalIndex`) via `propName`.
 *
 * This returns shallow-cloned objects to avoid mutating the original array items.
 */
export function annotateWithOriginalIndex<T extends Record<string, any>>(
  rows: T[],
  propName: '__originalIndex__' | 'originalIndex' = '__originalIndex__'
): (T & { [k in typeof propName]?: number })[] {
  return rows.map((row, index) => {
    const clone = { ...row } as T & { [k in typeof propName]?: number };
    // Define as non-enumerable to avoid affecting JSON/stringify or column iteration
    Object.defineProperty(clone, propName, {
      value: index,
      writable: false,
      enumerable: false,
      configurable: true,
    });
    return clone;
  });
}
