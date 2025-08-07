import React from 'react';
import { TableProps } from './Table.types';
import './Table.scss';
/**
 * Table component for displaying structured data
 *
 * Features:
 * - Responsive design with mobile-friendly stacked layout
 * - Accessible table structure with proper headers
 * - Support for complex cell types (headers, numeric, spans)
 * - Optional panel wrapper with heading
 * - Customizable caption and styling
 *
 * @param props - Table component props
 * @returns JSX element
 */
declare const Table: React.FC<TableProps>;
export default Table;
