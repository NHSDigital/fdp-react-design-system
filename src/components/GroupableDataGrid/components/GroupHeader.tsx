/**
 * GroupHeader Component
 * 
 * Expandable row header for grouped data with aggregations
 * Part of GroupableDataGrid component
 */

import React from 'react';
import classNames from 'classnames';
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
 * Chevron icon for expansion indicator
 */
const ChevronIcon: React.FC = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M7 5L12 10L7 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * GroupHeader Component
 */
export const GroupHeader = <T extends any = any>({
  context,
  columnCount,
  customRenderer,
  isFocused = false,
  onKeyDown,
  onClick,
  tabIndex = -1,
  'data-testid': testId,
}: GroupHeaderProps<T>): React.ReactElement => {
  const { node, level, isExpanded, toggleExpansion, aggregations, totalCount } = context;

  // Use custom renderer if provided
  if (customRenderer) {
    return (
      <tr
        className={classNames('group-header', {
          'group-header--expanded': isExpanded,
          'group-header--focused': isFocused,
          [`group-header--level-${level + 1}`]: true,
        })}
        role="row"
        aria-expanded={isExpanded}
        aria-level={level + 1}
        tabIndex={tabIndex}
        onClick={onClick || toggleExpansion}
        onKeyDown={onKeyDown}
        data-testid={testId}
        data-node-id={node.id}
      >
        <td colSpan={columnCount} className="group-header__cell group-header__cell--custom">
          {customRenderer(context)}
        </td>
      </tr>
    );
  }

  // Default renderer
  const aggregationEntries = Object.entries(aggregations);
  const hasAggregations = aggregationEntries.length > 0;

  return (
    <tr
      className={classNames('group-header', {
        'group-header--expanded': isExpanded,
        'group-header--focused': isFocused,
        [`group-header--level-${level + 1}`]: true,
      })}
      role="row"
      aria-expanded={isExpanded}
      aria-level={level + 1}
      tabIndex={tabIndex}
      onClick={onClick || toggleExpansion}
      onKeyDown={onKeyDown}
      data-testid={testId}
      data-node-id={node.id}
    >
      {/* First cell: Icon + Label + Count */}
      <td
        className={classNames(
          'group-header__cell',
          'group-header__cell--first',
          `group-header__cell--indent-${level}`
        )}
      >
        <span
          className={classNames('group-header__icon', {
            'group-header__icon--expanded': isExpanded,
          })}
        >
          <ChevronIcon />
        </span>
        <span className="group-header__label">
          {node.label}
        </span>
        <span className="group-header__count">
          ({totalCount} {totalCount === 1 ? 'item' : 'items'})
        </span>
      </td>

      {/* Aggregation cells (if we have multiple columns and aggregations) */}
      {columnCount > 1 && hasAggregations && (
        <td
          className="group-header__cell group-header__cell--aggregations"
          colSpan={columnCount - 1}
        >
          <div className="group-header__aggregations">
            {aggregationEntries.map(([key, value], index) => {
              // Find the aggregation config to get formatting
              const displayValue = typeof value === 'object' && value !== null
                ? JSON.stringify(value)
                : String(value ?? '—');

              return (
                <div key={`${key}-${index}`} className="group-header__aggregation">
                  <span className="group-header__aggregation-label">{key}:</span>
                  <span className="group-header__aggregation-value">{displayValue}</span>
                </div>
              );
            })}
          </div>
        </td>
      )}

      {/* Fill remaining columns if no aggregations */}
      {columnCount > 1 && !hasAggregations && (
        <td colSpan={columnCount - 1} className="group-header__cell" />
      )}
    </tr>
  );
};

GroupHeader.displayName = 'GroupHeader';

export default GroupHeader;
