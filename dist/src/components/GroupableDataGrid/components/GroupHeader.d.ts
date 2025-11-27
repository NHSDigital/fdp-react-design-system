/**
 * GroupHeader Component
 *
 * Expandable row header for grouped data with aggregations
 * Part of GroupableDataGrid component
 */
import React from 'react';
import { GroupHeaderContext } from '../GroupableDataGrid.types';
export interface GroupHeaderProps<T = any> {
    /** Group header context with metadata and controls */
    context: GroupHeaderContext<T>;
    /** Number of columns in the table */
    columnCount: number;
    /** Custom renderer for the group header */
    customRenderer?: (context: GroupHeaderContext<T>) => React.ReactNode;
    /** Whether this group header should receive keyboard focus */
    isFocused?: boolean;
    /** Keyboard event handler */
    onKeyDown?: (event: React.KeyboardEvent) => void;
    /** Click handler for expansion toggle */
    onClick?: () => void;
    /** Tab index for keyboard navigation */
    tabIndex?: number;
    /** Test ID */
    'data-testid'?: string;
}
/**
 * GroupHeader Component
 */
export declare const GroupHeader: {
    <T extends unknown = any>({ context, columnCount, customRenderer, isFocused, onKeyDown, onClick, tabIndex, "data-testid": testId, }: GroupHeaderProps<T>): React.ReactElement;
    displayName: string;
};
export default GroupHeader;
