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
}
export interface SortConfig {
    key: string;
    direction: 'asc' | 'desc';
}
export type TableType = 'default' | 'responsive' | 'compact';
export interface AriaDataGridProps {
    data: Record<string, any>[];
    columns: AriaDataGridColumn[];
    sortConfig?: SortConfig[];
    onSort?: (columnKey: string) => void;
    onSortChange?: (newSortConfig: SortConfig[]) => void;
    selectedRowIndex?: number;
    onRowSelect?: (rowIndex: number) => void;
    id?: string;
    testId?: string;
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    className?: string;
    tableClassName?: string;
    bordered?: boolean;
    striped?: boolean;
    responsive?: boolean;
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
