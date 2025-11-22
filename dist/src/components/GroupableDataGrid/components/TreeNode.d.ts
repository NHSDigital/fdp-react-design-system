/**
 * TreeNode Component
 *
 * Individual tree node row for hierarchical data display
 * Part of GroupableDataGrid component
 */
import React from 'react';
import { TreeNodeContext } from '../GroupableDataGrid.types';
import { ColumnDefinition } from '../../SortableDataTable/AriaDataGridTypes';
export interface TreeNodeProps<T = any> {
    /** Tree node context with metadata and controls */
    context: TreeNodeContext<T>;
    /** Column definitions for rendering cells */
    columns: ColumnDefinition[];
    /** Custom renderer for the tree node */
    customRenderer?: (context: TreeNodeContext<T>) => React.ReactNode;
    /** Whether this node should receive keyboard focus */
    isFocused?: boolean;
    /** Keyboard event handler */
    onKeyDown?: (event: React.KeyboardEvent) => void;
    /** Click handler for expansion toggle */
    onExpanderClick?: () => void;
    /** Tab index for keyboard navigation */
    tabIndex?: number;
    /** Test ID */
    'data-testid'?: string;
}
/**
 * TreeNode Component
 */
export declare const TreeNode: {
    <T extends unknown = any>({ context, columns, customRenderer, isFocused, onKeyDown, onExpanderClick, tabIndex, "data-testid": testId, }: TreeNodeProps<T>): React.ReactElement;
    displayName: string;
};
export default TreeNode;
