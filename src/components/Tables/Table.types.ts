import { HTMLAttributes, ReactNode } from 'react';

export interface TableCellData {
  text?: string;
  html?: string;
  /** Optional React node content (takes precedence over html/text) */
  node?: ReactNode;
  format?: string;
  classes?: string;
  colspan?: number;
  rowspan?: number;
  attributes?: Record<string, string>;
  header?: string; // For responsive tables - column header text
}

export interface TableHeaderCell extends TableCellData {
  formatter?: string;
}

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  /**
   * Array of header cell objects for the table head
   */
  head?: TableHeaderCell[];
  
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
}
