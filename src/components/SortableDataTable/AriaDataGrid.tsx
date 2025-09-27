import React, { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { AriaDataGridProps, NullsPosition } from './AriaDataGridTypes';
import { buildMultiComparator } from './sortUtils';
import './AriaTabsDataGrid.scss';

type NavigationMode = 'browse' | 'navigate';
type FocusArea = 'headers' | 'cells';

/**
 * ARIA-compliant Data Grid Component
 * Provides comprehensive keyboard navigation and ARIA compliance for data tables
 * Following react-aria patterns with hierarchical navigation
 */
export const AriaDataGrid = React.forwardRef<HTMLTableElement, AriaDataGridProps>(
  ({
    data,
    columns,
    sortConfig,
    onSort,
    sortingOptions,
    selectedRowIndex,
    onRowSelect,
    id,
    testId,
    ariaLabel,
    ariaLabelledby,
    ariaDescribedby,
    className,
    tableClassName,
    bordered = false,
    striped = false,
    responsive = false,
    tableType = 'default',
  }, forwardedRef) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const headerRowRef = useRef<HTMLTableRowElement>(null);
  const tbodyRef = useRef<HTMLTableSectionElement>(null);

  // Merge forwarded ref with internal ref
  React.useImperativeHandle(forwardedRef, () => tableRef.current!, []);

  // Navigation state following react-aria patterns
  const [focusedRowIndex, setFocusedRowIndex] = useState<number>(0);
  const [focusedColumnIndex, setFocusedColumnIndex] = useState<number>(0);
  const [focusArea, setFocusArea] = useState<FocusArea>('headers');
  const [navigationMode, setNavigationMode] = useState<NavigationMode>('browse');

  const columnCount = columns.length;
  const rowCount = data.length;

    // Sort the data based on the current sort configuration
  const sortedData = useMemo(() => {
    if (!sortConfig || sortConfig.length === 0) return data;
  const comparator = buildMultiComparator(columns as any, sortConfig, NullsPosition.Last, sortingOptions);
    return [...data].sort(comparator);
  }, [data, sortConfig, columns, sortingOptions]);

  // Focus a specific cell and scroll it into view
  const focusCell = useCallback((rowIndex: number, colIndex: number) => {
    setTimeout(() => {
      const targetCell = tableRef.current?.querySelector(
        `tbody tr:nth-child(${rowIndex + 1}) td:nth-child(${colIndex + 1})`
      );
      if (targetCell) {
        (targetCell as HTMLElement).focus();
        // Check if scrollIntoView is available (may not be in test environments)
        if (typeof targetCell.scrollIntoView === 'function') {
          targetCell.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
          });
        }
      }
    }, 0);
  }, []);

  // Focus a specific header and scroll it into view
  const focusHeader = useCallback((colIndex: number) => {
    setTimeout(() => {
      const headerCell = tableRef.current?.querySelector(`th:nth-child(${colIndex + 1})`);
      if (headerCell) {
        (headerCell as HTMLElement).focus();
        // Check if scrollIntoView is available (may not be in test environments)
        if (typeof headerCell.scrollIntoView === 'function') {
          headerCell.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
          });
        }
      }
    }, 0);
  }, []);

  // Handle sorting when header is activated
  const handleSort = useCallback((columnKey: string) => {
    onSort?.(columnKey);
  }, [onSort]);

  // Handle row selection
  const handleRowSelect = useCallback((rowIndex: number) => {
    onRowSelect?.(rowIndex);
  }, [onRowSelect]);

  // React-aria style hierarchical keyboard navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    const { key } = event;

    switch (key) {
      case 'Enter':
        event.preventDefault();
        
        if (focusArea === 'headers' && navigationMode === 'browse') {
          // Enter from header browse -> navigate within headers
          setNavigationMode('navigate');
          focusHeader(focusedColumnIndex);
        } else if (focusArea === 'headers' && navigationMode === 'navigate') {
          // Enter on a header -> sort the column
          const currentColumn = columns[focusedColumnIndex];
          if (currentColumn) {
            handleSort(currentColumn.key);
          }
        } else if (focusArea === 'cells' && navigationMode === 'browse') {
          // Enter from row browse -> navigate within that row
          setNavigationMode('navigate');
          focusCell(focusedRowIndex, focusedColumnIndex);
        } else if (focusArea === 'cells' && navigationMode === 'navigate') {
          // Enter on a cell -> select the row
          handleRowSelect(focusedRowIndex);
        }
        break;
        
      case 'Escape':
        event.preventDefault();
        
        if (focusArea === 'headers' && navigationMode === 'navigate') {
          // Escape from header navigation -> header browse
          setNavigationMode('browse');
        } else if (focusArea === 'cells' && navigationMode === 'navigate') {
          // Escape from cell navigation -> row browse
          setNavigationMode('browse');
        }
        break;
        
      case 'ArrowLeft':
        event.preventDefault();
        if (navigationMode === 'navigate' || (navigationMode === 'browse' && focusArea === 'headers')) {
          if (focusArea === 'headers') {
            const newIndex = Math.max(0, focusedColumnIndex - 1);
            setFocusedColumnIndex(newIndex);
            focusHeader(newIndex);
          } else if (focusArea === 'cells') {
            const newIndex = Math.max(0, focusedColumnIndex - 1);
            setFocusedColumnIndex(newIndex);
            focusCell(focusedRowIndex, newIndex);
          }
        }
        break;
        
      case 'ArrowRight':
        event.preventDefault();
        if (navigationMode === 'navigate' || (navigationMode === 'browse' && focusArea === 'headers')) {
          if (focusArea === 'headers') {
            const newIndex = Math.min(columnCount - 1, focusedColumnIndex + 1);
            setFocusedColumnIndex(newIndex);
            focusHeader(newIndex);
          } else if (focusArea === 'cells') {
            const newIndex = Math.min(columnCount - 1, focusedColumnIndex + 1);
            setFocusedColumnIndex(newIndex);
            focusCell(focusedRowIndex, newIndex);
          }
        }
        break;
        
      case 'ArrowUp':
        event.preventDefault();
        if (focusArea === 'cells') {
          if (navigationMode === 'browse') {
            // Browse mode: move to previous row
            const newIndex = Math.max(0, focusedRowIndex - 1);
            setFocusedRowIndex(newIndex);
            focusCell(newIndex, 0);
            setFocusedColumnIndex(0);
          } else if (navigationMode === 'navigate') {
            // Navigate mode: move to previous row in same column
            if (focusedRowIndex > 0) {
              const newIndex = focusedRowIndex - 1;
              setFocusedRowIndex(newIndex);
              focusCell(newIndex, focusedColumnIndex);
            } else {
              // Move back to headers
              setFocusArea('headers');
              setNavigationMode('browse');
              focusHeader(focusedColumnIndex);
            }
          }
        }
        break;
        
      case 'ArrowDown':
        event.preventDefault();
        if (focusArea === 'headers' && navigationMode === 'browse') {
          // From headers browse mode, move to first row browse mode
          setFocusArea('cells');
          setFocusedRowIndex(0);
          setFocusedColumnIndex(0);
          focusCell(0, 0);
        } else if (focusArea === 'cells') {
          const maxRowIndex = rowCount - 1;
          if (navigationMode === 'browse') {
            // Browse mode: move to next row
            const newIndex = Math.min(maxRowIndex, focusedRowIndex + 1);
            setFocusedRowIndex(newIndex);
            focusCell(newIndex, 0);
            setFocusedColumnIndex(0);
          } else if (navigationMode === 'navigate') {
            // Navigate mode: move to next row in same column
            if (focusedRowIndex < maxRowIndex) {
              const newIndex = focusedRowIndex + 1;
              setFocusedRowIndex(newIndex);
              focusCell(newIndex, focusedColumnIndex);
            }
          }
        }
        break;

      case 'Home':
        event.preventDefault();
        if (focusArea === 'headers') {
          setFocusedColumnIndex(0);
          focusHeader(0);
        } else if (focusArea === 'cells') {
          if (event.ctrlKey) {
            // Ctrl+Home: go to first cell
            setFocusedRowIndex(0);
            setFocusedColumnIndex(0);
            focusCell(0, 0);
          } else {
            // Home: go to first column in current row
            setFocusedColumnIndex(0);
            focusCell(focusedRowIndex, 0);
          }
        }
        break;

      case 'End':
        event.preventDefault();
        if (focusArea === 'headers') {
          const lastIndex = columnCount - 1;
          setFocusedColumnIndex(lastIndex);
          focusHeader(lastIndex);
        } else if (focusArea === 'cells') {
          if (event.ctrlKey) {
            // Ctrl+End: go to last cell
            const lastRow = rowCount - 1;
            const lastCol = columnCount - 1;
            setFocusedRowIndex(lastRow);
            setFocusedColumnIndex(lastCol);
            focusCell(lastRow, lastCol);
          } else {
            // End: go to last column in current row
            const lastCol = columnCount - 1;
            setFocusedColumnIndex(lastCol);
            focusCell(focusedRowIndex, lastCol);
          }
        }
        break;

      case ' ':
        event.preventDefault();
        if (focusArea === 'headers' && navigationMode === 'navigate') {
          // Space on header -> sort
          const currentColumn = columns[focusedColumnIndex];
          if (currentColumn) {
            handleSort(currentColumn.key);
          }
        } else if (focusArea === 'cells' && navigationMode === 'navigate') {
          // Space on cell -> select row
          handleRowSelect(focusedRowIndex);
        }
        break;
    }
  }, [
    focusArea,
    navigationMode,
    focusedColumnIndex,
    focusedRowIndex,
    columnCount,
    rowCount,
    columns,
    focusCell,
    focusHeader,
    handleSort,
    handleRowSelect
  ]);

  // Initialize keyboard navigation
  useEffect(() => {
    const table = tableRef.current;
    if (table) {
      table.addEventListener('keydown', handleKeyDown as any);
      return () => table.removeEventListener('keydown', handleKeyDown as any);
    }
  }, [handleKeyDown]);

  const tableClasses = classNames(
    'nhsuk-table',
    tableClassName,
    {
      'nhsuk-table--responsive': responsive,
      'nhsuk-table--bordered': bordered,
      'nhsuk-table--striped': striped,
      'nhsuk-table--compact': tableType === 'compact',
    },
    className
  );

  return (
    <table
      ref={tableRef}
      className={tableClasses}
      id={id}
      data-testid={testId}
      role="grid"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      tabIndex={0}
    >
      <thead className="nhsuk-table__head" role="rowgroup">
        <tr ref={headerRowRef} role="row">
          {columns.map((column, colIndex) => {
            const sortInfo = sortConfig?.find(config => config.key === column.key);
            const isSorted = !!sortInfo;
            const isFocused = focusArea === 'headers' && focusedColumnIndex === colIndex;

            return (
              <th
                key={column.key}
                className={classNames('sortable-header', {
                  'sortable-header--focused': isFocused
                })}
                role="columnheader"
                tabIndex={isFocused ? 0 : -1}
                onClick={() => handleSort(column.key)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSort(column.key);
                  }
                }}
                aria-sort={isSorted ? (sortInfo?.direction === 'asc' ? 'ascending' : 'descending') : 'none'}
              >
                <div className="header-content">
                  <span className="header-label">
                    {column.label}
                  </span>
                  {isSorted && (
                    <span className="sort-indicator" aria-hidden="true">
                      {sortConfig && sortConfig.length > 1 && (
                        <span className="sort-priority">
                          {sortConfig.findIndex(config => config.key === column.key) + 1}
                        </span>
                      )}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="currentColor"
                        className="sort-arrow"
                      >
                        {sortInfo?.direction === 'asc' ? (
                          <path d="M6 2L2 8h8L6 2z" />
                        ) : (
                          <path d="M6 10L2 4h8L6 10z" />
                        )}
                      </svg>
                    </span>
                  )}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody ref={tbodyRef} className="nhsuk-table__body" role="rowgroup">
        {sortedData.map((row, rowIndex) => {
          const isSelected = selectedRowIndex === rowIndex;
          const isRowFocused = focusArea === 'cells' && focusedRowIndex === rowIndex;
          
          return (
            <tr
              key={rowIndex}
              role="row"
              className={classNames('data-row', {
                'data-row--selected': isSelected,
                'data-row--focused': isRowFocused
              })}
              aria-selected={isSelected}
            >
              {columns.map((column, colIndex) => {
                const value = column.tableRenderer ? column.tableRenderer(row) : 
                             column.render ? column.render(row) : row[column.key];
                const isCellFocused = focusArea === 'cells' && 
                                    focusedRowIndex === rowIndex && 
                                    focusedColumnIndex === colIndex;

                // Handle boolean values with accessible text
                const renderValue = () => {
                  if (typeof value === 'boolean') {
                    return (
                      <>
                        <span aria-hidden="true">{value ? '✓' : '✗'}</span>
                        <span className="sr-only">{value ? 'Yes' : 'No'}</span>
                      </>
                    );
                  }
                  return String(value ?? '');
                };

                return (
                  <td
                    key={column.key}
                    role="gridcell"
                    className={classNames('data-cell', {
                      'data-cell--focused': isCellFocused
                    })}
                    tabIndex={isCellFocused ? 0 : -1}
                    onClick={() => handleRowSelect(rowIndex)}
                  >
                    {renderValue()}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
});

AriaDataGrid.displayName = 'AriaDataGrid';

export default AriaDataGrid;
