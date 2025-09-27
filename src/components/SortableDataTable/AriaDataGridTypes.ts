import { GridState } from '@react-stately/grid';
import { Node } from '@react-types/shared';

export interface AriaDataGridColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (data: any) => any;
  /** Enhanced renderer for table view (overrides render if provided) */
  tableRenderer?: (data: any) => any;
  /** Enhanced renderer for card view (overrides render if provided) */
  cardRenderer?: (data: any) => any;
  /**
   * Sorting type hint. When provided, sorting uses this type branch. If omitted, a simple inference is used.
   * 'custom' requires providing a sortComparator.
   */
  sortType?: SortType;
  /**
   * Function to derive the value used for sorting from a row. Takes precedence over using renderers.
   */
  sortAccessor?: (row: any) => any;
  /**
   * Custom comparator for sorting values when sortType is 'custom' or when full control is desired.
   */
  sortComparator?: (a: any, b: any) => number;
  /**
   * When true, uses the column's tableRenderer/render output as the sort value (if sortAccessor not provided).
   */
  useRendererForSort?: boolean;
  /** Per-column null placement policy (overrides global/default). */
  nullsPosition?: NullsPosition;
  /** Per-column boolean ordering policy (overrides global/default). */
  booleanOrder?: BooleanOrder;
}

export interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
}

export type TableType = 'default' | 'responsive' | 'compact';

export interface AriaDataGridProps {
  // Core data props
  data: Record<string, any>[];
  columns: AriaDataGridColumn[];
  /** Optional sorting behavior configuration */
  sortingOptions?: SortingOptions;
  
  // Sorting configuration
  sortConfig?: SortConfig[];
  onSort?: (columnKey: string) => void;
  onSortChange?: (newSortConfig: SortConfig[]) => void;
  
  // Row selection
  selectedRowIndex?: number;
  onRowSelect?: (rowIndex: number) => void;
  
  // Accessibility props
  id?: string;
  testId?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaDescribedby?: string;
  
  // Styling
  className?: string;
  tableClassName?: string;
  bordered?: boolean;
  striped?: boolean;
  responsive?: boolean;
  
  // Table type
  tableType?: TableType;
}

export interface ColumnDefinition {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (data: any) => any;
  /** Enhanced renderer for table view (overrides render if provided) */
  tableRenderer?: (data: any) => any;
  /** Enhanced renderer for card view (overrides render if provided) */
  cardRenderer?: (data: any) => any;
  /** Optional per-column custom renderer (receives raw value & full row). Highest precedence for primitive finalisation */
  customRenderer?: (value: any, row: any) => React.ReactNode;
  /**
   * Sorting type hint. When provided, sorting uses this type branch. If omitted, a simple inference is used.
   * 'custom' requires providing a sortComparator.
   */
  sortType?: SortType;
  /** Function to derive the value used for sorting from a row. Takes precedence over using renderers. */
  sortAccessor?: (row: any) => any;
  /** Custom comparator for sorting values when sortType is 'custom' or when full control is desired. */
  sortComparator?: (a: any, b: any) => number;
  /** When true, uses the column's tableRenderer/render output as the sort value (if sortAccessor not provided). */
  useRendererForSort?: boolean;
  /** Per-column null placement policy (overrides global/default). */
  nullsPosition?: NullsPosition;
  /** Per-column boolean ordering policy (overrides global/default). */
  booleanOrder?: BooleanOrder;
}

/** Global sorting options shared by data grids and tabs data grids */
export interface SortingOptions {
  /** Default placement of null/undefined values when not overridden by a column. */
  nullsPosition?: NullsPosition;
  /** Default boolean ordering when not overridden by a column. */
  booleanOrder?: BooleanOrder;
  /** When true, applies a stable tiebreaker using the original item index if provided. */
  stable?: boolean;
}

/** Enum for supported sort types */
export enum SortType {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Date = 'date',
  Custom = 'custom',
}

/** Enum representing where null/undefined values should sort */
export enum NullsPosition {
  First = 'first',
  Last = 'last',
}

/** Enum for boolean ordering */
export enum BooleanOrder {
  TrueFirst = 'trueFirst',
  FalseFirst = 'falseFirst',
}

export interface AriaGridCellProps {
  item: Node<any>;
  state: GridState<any, any>;
  columnKey: string;
  className?: string;
}

export interface AriaGridRowProps {
  item: Node<any>;
  state: GridState<any, any>;
  children: React.ReactNode;
  className?: string;
}

export interface AriaGridHeaderProps {
  column: Node<any>;
  state: GridState<any, any>;
  className?: string;
  sortConfig?: SortConfig[];
  onSort?: (column: string) => void;
}
