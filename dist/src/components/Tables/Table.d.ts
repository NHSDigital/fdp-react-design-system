import React from "react";
import type { TableProps, TableCaptionProps, TableBodyRowProps, TableHeaderCellComponentProps, TableDataCellComponentProps } from "./Table.types";
import "./Table.scss";
export declare const fallbackHighlight: (code: string) => string;
export declare const highlightCode: (code: string, lang?: string, disable?: boolean) => any;
export declare const TableCaption: React.FC<TableCaptionProps>;
export declare const TableBodyRow: React.FC<TableBodyRowProps>;
export declare const TableHeaderCell: React.FC<TableHeaderCellComponentProps>;
export declare const TableCell: React.FC<TableDataCellComponentProps>;
export interface TableComposite extends React.FC<TableProps> {
    Caption: typeof TableCaption;
    BodyRow: typeof TableBodyRow;
    HeaderCell: typeof TableHeaderCell;
    Cell: typeof TableCell;
    Row: typeof TableBodyRow;
    TH: typeof TableHeaderCell;
}
declare const Table: TableComposite;
export default Table;
