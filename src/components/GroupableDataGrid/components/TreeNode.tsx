/**
 * TreeNode Component
 * 
 * Individual tree node row for hierarchical data display
 * Part of GroupableDataGrid component
 */

import React from 'react';
import classNames from 'classnames';
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
 * Chevron icon for tree node expander
 */
const ExpanderIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 4L10 8L6 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Render cell value based on column definition
 */
function renderCellValue<T>(item: T, column: ColumnDefinition): React.ReactNode {
  const value = (item as any)[column.key];
  
  // Use custom renderer if provided
  if (column.render) {
    return column.render(item);
  }
  
  // Default rendering
  if (value === null || value === undefined) {
    return '—';
  }
  
  return String(value);
}

/**
 * TreeNode Component
 */
export const TreeNode = <T extends any = any>({
  context,
  columns,
  customRenderer,
  isFocused = false,
  onKeyDown,
  onExpanderClick,
  tabIndex = -1,
  'data-testid': testId,
}: TreeNodeProps<T>): React.ReactElement => {
  const { node, depth, isExpanded, toggleExpansion, hasChildren, aggregations } = context;

  // Use custom renderer if provided
  if (customRenderer) {
    return (
      <tr
        className={classNames('tree-node', {
          'tree-node--expanded': isExpanded,
          'tree-node--focused': isFocused,
          'tree-node--has-children': hasChildren,
        })}
        role="row"
        aria-expanded={hasChildren ? isExpanded : undefined}
        aria-level={depth + 1}
        tabIndex={tabIndex}
        onKeyDown={onKeyDown}
        data-testid={testId}
        data-node-id={node.id}
      >
        <td colSpan={columns.length} className="tree-node__cell tree-node__cell--custom">
          {customRenderer(context)}
        </td>
      </tr>
    );
  }

  // Default renderer
  return (
    <tr
      className={classNames('tree-node', {
        'tree-node--expanded': isExpanded,
        'tree-node--focused': isFocused,
        'tree-node--has-children': hasChildren,
      })}
      role="row"
      aria-expanded={hasChildren ? isExpanded : undefined}
      aria-level={depth + 1}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
      data-testid={testId}
      data-node-id={node.id}
    >
      {columns.map((column, columnIndex) => {
        const isFirstColumn = columnIndex === 0;
        
        return (
          <td
            key={column.key}
            className={classNames('tree-node__cell', {
              'tree-node__cell--first': isFirstColumn,
              [`tree-node__cell--depth-${depth}`]: isFirstColumn,
            })}
            role="gridcell"
          >
            {isFirstColumn && (
              <>
                {/* Expander button or placeholder */}
                {hasChildren ? (
                  <button
                    type="button"
                    className={classNames('tree-node__expander', {
                      'tree-node__expander--expanded': isExpanded,
                    })}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onExpanderClick) {
                        onExpanderClick();
                      } else {
                        toggleExpansion();
                      }
                    }}
                    aria-label={isExpanded ? 'Collapse node' : 'Expand node'}
                    tabIndex={-1}
                  >
                    <ExpanderIcon />
                  </button>
                ) : (
                  <span className="tree-node__expander tree-node__expander--placeholder" />
                )}
              </>
            )}
            
            {/* Cell content */}
            <span className="tree-node__content">
              {renderCellValue(node.data, column)}
            </span>
            
            {/* Show aggregations for first column if available */}
            {isFirstColumn && aggregations && Object.keys(aggregations).length > 0 && (
              <span className="tree-node__aggregation-hint" title="Has aggregated data from children">
                {' '}({Object.keys(aggregations).length} agg)
              </span>
            )}
          </td>
        );
      })}
    </tr>
  );
};

TreeNode.displayName = 'TreeNode';

export default TreeNode;
