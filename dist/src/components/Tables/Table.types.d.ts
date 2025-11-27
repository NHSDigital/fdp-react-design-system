import { HTMLAttributes, ReactNode } from 'react';
export interface TableCellData {
    text?: string;
    html?: string;
    /** Optional React node content (takes precedence over html/text) */
    node?: ReactNode;
    /**
     * Code content to render. If provided (and no `node` / `html`), the cell will render
     * either an inline <code> element (single line) or a <pre><code> block (multi‑line or array).
     * Accepts a string (can include newlines) or an array of lines.
     */
    code?: string | string[];
    /** Optional language hint (for downstream syntax highlighting hooks). */
    codeLanguage?: string;
    /** Optional additional className for the <code> element. */
    codeClassName?: string;
    /** Disable automatic syntax highlighting for this cell (even if codeLanguage present). */
    disableHighlight?: boolean;
    format?: string;
    classes?: string;
    colspan?: number;
    rowspan?: number;
    attributes?: Record<string, string>;
    header?: string;
}
export interface TableHeaderCellType extends TableCellData {
    formatter?: string;
}
export interface TableProps extends HTMLAttributes<HTMLTableElement> {
    /**
     * Array of header cell objects for the table head
     */
    head?: TableHeaderCellType[];
    /**
     * Array of row arrays containing cell data
     */
    rows?: TableCellData[][];
    /**
     * Caption text for the table
     */
    caption?: string;
    /**
     * Size of the caption text
     */
    captionSize?: 's' | 'm' | 'l' | 'xl';
    /**
     * Table heading text
     */
    heading?: string;
    /**
     * Heading level for semantic HTML
     */
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Whether the first cell in each row should be treated as a header
     */
    firstCellIsHeader?: boolean;
    /**
     * Additional classes to apply to the table
     */
    classes?: string;
    /**
     * Additional classes to apply to the panel wrapper
     */
    panelClasses?: string;
    /**
     * Additional classes to apply to the table element
     */
    tableClasses?: string;
    /**
     * Whether to apply responsive styling
     */
    responsive?: boolean;
    /**
     * Whether to apply panel styling (border and padding)
     */
    panel?: boolean;
    /**
     * Test ID for testing purposes
     */
    'data-testid'?: string;
    /**
     * Additional attributes to apply to the table element
     */
    attributes?: Record<string, string>;
    /**
     * Declarative column configuration. When provided alongside `data`, the table head and rows
     * will be auto-generated unless `head` / `rows` are explicitly passed (explicit wins).
     */
    columns?: TableColumn[];
    /** Row objects/records used with `columns` to auto-generate cell content. */
    data?: any[];
    /** When true, visually hides the caption (still available to assistive tech). */
    visuallyHiddenCaption?: boolean;
}
export interface TableCaptionProps {
    children: ReactNode;
    /** Optional size modifier mapping to nhsuk caption classes */
    size?: 's' | 'm' | 'l' | 'xl';
    className?: string;
}
export interface TableBodyRowProps extends HTMLAttributes<HTMLTableRowElement> {
    /** When true, applies responsive role mappings (used internally by <Table/>) */
    responsive?: boolean;
}
export interface TableHeaderCellComponentProps extends TableHeaderCellType {
    /** Apply responsive role semantics */
    responsive?: boolean;
    /** Render element type (defaults to th) */
    as?: 'th' | 'td';
}
export interface TableDataCellComponentProps extends TableCellData {
    /** Treat as row header cell (renders th scope="row") */
    rowHeader?: boolean;
    /** Apply responsive role semantics */
    responsive?: boolean;
}
export interface TableColumn {
    /** Unique key for column (used to pick value from row when no accessor provided). */
    key: string;
    /** Column header text (renders in <th>). */
    title: string;
    /** Optional formatter key mapping to existing format styling (e.g. 'numeric'). */
    format?: string;
    /** Custom accessor to derive raw value (overrides key lookup). */
    accessor?: (row: any, rowIndex: number) => any;
    /**
     * Optional render function. Return:
     * - TableCellData (rich object)
     * - ReactNode / string (will be wrapped)
     */
    render?: (value: any, row: any, rowIndex: number, column: TableColumn) => TableCellData | ReactNode | string | number | null | undefined;
    /** Additional classes for header cell */
    headerClasses?: string;
    /** Additional classes for data cells */
    cellClasses?: string;
    /** Pass-through attributes for header <th> */
    headerAttributes?: Record<string, string>;
    /** Pass-through attributes for data <td> */
    cellAttributes?: Record<string, string>;
    /** Mark cells in this column as row headers (<th scope="row">). Useful for first column when not using global firstCellIsHeader. */
    rowHeader?: boolean;
}
