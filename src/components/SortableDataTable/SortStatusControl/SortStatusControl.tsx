/**
 * Sort Status Control Component
 * 
 * Displays and manages sort configuration for data tables with interactive tags
 * allowing users to view, reorder, toggle direction, and remove sorts.
 */

import React, { useCallback, useMemo, useRef } from 'react';
import { Button } from '../../Button/Button';
import { Tag } from '../../Tag/Tag';
import { TagColor } from '../../Tag/Tag.types';
import { SortConfig } from '../AriaDataGridTypes';
import './SortStatusControl.scss';

/**
 * Column definition for labeling sorts
 */
export interface SortColumn {
  key: string;
  label: string;
}

/**
 * Props for the SortStatusControl component
 */
export interface SortStatusControlProps {
  /** Current sort configuration array */
  sortConfig: SortConfig[];
  /** Available columns for labeling sorts */
  columns: SortColumn[];
  /** Callback when sort configuration changes */
  onSortChange: (newSortConfig: SortConfig[]) => void;
  /** Optional CSS class name for styling */
  className?: string;
  /** Optional description text when no sorts are active */
  emptyDescription?: React.ReactNode;
  /** Optional description text when sorts are active */
  activeDescription?: React.ReactNode;
  /** Show/hide the reset button */
  showReset?: boolean;
  /** Show/hide the help text */
  showHelp?: boolean;
  /** Disable all interactions */
  disabled?: boolean;
  /** ARIA label for the sort status region */
  ariaLabel?: string;
  /** Additional ARIA describedby IDs */
  ariaDescribedBy?: string;
}

export const SortStatusControl: React.FC<SortStatusControlProps> = ({
  sortConfig,
  columns,
  onSortChange,
  className = '',
  emptyDescription = 'No sorting applied',
  activeDescription,
  showReset = true,
  showHelp = true,
  disabled = false,
  ariaLabel = 'Sort configuration',
  ariaDescribedBy
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Drag and drop state
  const draggedItem = useRef<string | null>(null);
  const draggedOverItem = useRef<string | null>(null);

  // Handle drag start
  const handleDragStart = useCallback((e: React.DragEvent, key: string) => {
    if (disabled) return;
    draggedItem.current = key;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', key);
  }, [disabled]);

  // Handle drag over
  const handleDragOver = useCallback((e: React.DragEvent, key: string) => {
    if (disabled || draggedItem.current === key) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    draggedOverItem.current = key;
  }, [disabled]);

  // Handle drop
  const handleDrop = useCallback((e: React.DragEvent, targetKey: string) => {
    if (disabled) return;
    e.preventDefault();
    
    const sourceKey = draggedItem.current;
    if (!sourceKey || sourceKey === targetKey) return;

    const sourceIndex = sortConfig.findIndex(config => config.key === sourceKey);
    const targetIndex = sortConfig.findIndex(config => config.key === targetKey);
    
    if (sourceIndex !== -1 && targetIndex !== -1) {
      const newConfig = [...sortConfig];
      const [draggedConfig] = newConfig.splice(sourceIndex, 1);
      newConfig.splice(targetIndex, 0, draggedConfig);
      onSortChange(newConfig);
    }

    // Reset drag state
    draggedItem.current = null;
    draggedOverItem.current = null;
  }, [disabled, sortConfig, onSortChange]);

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    draggedItem.current = null;
    draggedOverItem.current = null;
  }, []);

  // Helper function to get column label by key
  const getColumnLabel = useCallback((key: string): string => {
    const column = columns.find(col => col.key === key);
    return column ? column.label : key;
  }, [columns]);

  // Get priority color based on index (matching the sort priority colors)
  const getPriorityColor = useCallback((index: number): TagColor => {
    const colorMap: TagColor[] = ['red', 'orange', 'blue', 'aqua-green', 'grey'];
    return colorMap[index] || 'grey';
  }, []);

  // Handle direction toggle for a specific sort
  const handleDirectionToggle = useCallback((sortKey: string) => {
    if (disabled) return;
    
    const updatedConfig = sortConfig.map(config =>
      config.key === sortKey
        ? { ...config, direction: config.direction === 'asc' ? 'desc' as const : 'asc' as const }
        : config
    );
    onSortChange(updatedConfig);
  }, [sortConfig, onSortChange, disabled]);

  // Handle removing a sort
  const handleRemove = useCallback((sortKey: string) => {
    if (disabled) return;
    
    const filteredConfig = sortConfig.filter(config => config.key !== sortKey);
    onSortChange(filteredConfig);
  }, [sortConfig, onSortChange, disabled]);

  // Handle resetting all sorts
  const handleReset = useCallback(() => {
    if (disabled) return;
    onSortChange([]);
  }, [onSortChange, disabled]);

  // Generate description text
  const getSortDescription = (): React.ReactNode => {
    if (sortConfig.length === 0) {
      return emptyDescription;
    }

    if (activeDescription) {
      return activeDescription;
    }

    const sortDescriptions = sortConfig.map((sort, index) => {
      const direction = sort.direction === 'asc' ? 'ascending' : 'descending';
      return `${index + 1}. ${getColumnLabel(sort.key)} (${direction})`;
    });

    if (sortDescriptions.length === 1) {
      return `Sorted by: ${sortDescriptions[0]}`;
    } else if (sortDescriptions.length === 2) {
      return `Sorted by: ${sortDescriptions.join(' and ')}`;
    } else {
      const lastItem = sortDescriptions.pop();
      return `Sorted by: ${sortDescriptions.join(', ')}, and ${lastItem}`;
    }
  };

  // Build ARIA describedby
  const describedBy = useMemo(() => {
    const ids = ['sort-description'];
    if (showHelp) ids.push('sort-help');
    if (ariaDescribedBy) ids.push(ariaDescribedBy);
    return ids.join(' ');
  }, [showHelp, ariaDescribedBy]);

  // If no sorts active, show empty state
  if (sortConfig.length === 0) {
    return (
      <div className={`sort-status-control ${className}`}>
        {/* Screen reader description */}
        <div 
          className="sort-status-control__description"
          id="sort-description"
          aria-live="polite"
        >
          {emptyDescription}
        </div>
        
        {/* Help text */}
        {showHelp && (
          <div className="sort-status-control__help" id="sort-help">
            <small>
              Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort.
            </small>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`sort-status-control ${className}`}>
      {/* Screen reader description */}
      <div 
        className="sort-status-control__description sort-status-control__description--active"
        id="sort-description"
        aria-live="polite"
      >
        { getSortDescription() }
      </div>
		  <div className="sort-status-container">
			{/* Sort tags container */}
			<div 
				ref={containerRef}
				className="sort-status-control__tags"
				role="list"
				aria-label={ariaLabel}
				aria-describedby={describedBy}
			>
				{ sortConfig.map((config, index) => (
					<div
						key={config.key}
						className="sort-status-control__tag-container"
						role="listitem"
						draggable={!disabled}
						onDragStart={(e) => handleDragStart(e, config.key)}
						onDragOver={(e) => handleDragOver(e, config.key)}
						onDrop={(e) => handleDrop(e, config.key)}
						onDragEnd={handleDragEnd}
						onClick={() => handleDirectionToggle(config.key)}
						style={{ cursor: disabled ? 'default' : 'pointer' }}
						title={disabled ? '' : `Click to toggle sort direction. Currently ${config.direction === 'asc' ? 'ascending' : 'descending'}`}
						data-key={config.key}
					>
						<Tag
							color={getPriorityColor(index)}
							className="sort-status-control__tag"
							closable
							onClose={() => handleRemove(config.key)}
							disabled={disabled}
						>
							<div className="sort-status-control__tag-content">
								{/* Drag handle */}
								<div className="sort-status-control__drag-handle" title="Drag to reorder">
										⋮⋮
								</div>

								{/* Priority number */}
								<div className={`sort-status-control__priority-badge sort-priority sort-priority--priority-${index + 1}`}>
										{index + 1}
								</div>

								{/* Column label */}
								<span className="sort-status-control__tag-label">
										{getColumnLabel(config.key)}
								</span>

								{/* Direction toggle button */}
								<button
									type="button"
									className="sort-status-control__direction-button"
									onClick={(e) => {
										e.stopPropagation(); // Prevent tag click handler from firing
										handleDirectionToggle(config.key);
									}}
									disabled={disabled}
									aria-label={`Toggle sort direction for ${getColumnLabel(config.key)}. Currently ${config.direction === 'asc' ? 'ascending' : 'descending'}`}
									title="Click to toggle between ascending and descending"
								>
									<span className={`sort-status-control__direction-icon sort-status-control__direction-icon--${config.direction}`}>
										<svg 
											className={`nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${config.direction}`}
											xmlns="http://www.w3.org/2000/svg" 
											viewBox="0 0 24 24" 
											aria-hidden="true" 
											focusable="false"
										>
											<path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" />
										</svg>
									</span>
								</button>
							</div>
						</Tag>
					</div>
				))}
			</div>
			{/* Reset button */}
			{showReset && (
				<div className="sort-status-control__actions">
					<Button
						variant="secondary"
						onClick={handleReset}
						      disabled={disabled}
						aria-label="Reset all sorting"
						className="sort-status-control__reset-button"
					>
						Clear All Sorts
					</Button>
				</div>
			)}
	  </div>

      {/* Instructions for users */}
      {showHelp && (
        <div className="sort-status-control__help" id="sort-help">
          <small>
            Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort.
          </small>
        </div>
      )}
    </div>
  );
};
