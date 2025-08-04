/**
 * Sort Status Control Component
 * 
 * Displays and manages sort configuration for data tables with interactive tags
 * allowing users to view, reorder, toggle direction, and remove sorts.
 */

import React, { useCallback, useMemo } from 'react';
import { Button } from '../Button/Button';
import { Tag } from '../Tag/Tag';
import { 
  SortStatusControlProps, 
  DEFAULT_DIRECTION_LABELS,
  sortByPriority,
  reassignPriorities,
  canMoveUp,
  canMoveDown
} from './SortStatusControlTypes';
import './SortStatusControl.scss';

export const SortStatusControl: React.FC<SortStatusControlProps> = ({
  sortConfig,
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
  // Sort the configuration by priority for display
  const sortedConfig = useMemo(() => sortByPriority(sortConfig), [sortConfig]);

  // Handle direction toggle for a specific sort
  const handleDirectionToggle = useCallback((sortId: string) => {
    if (disabled) return;
    
    const updatedConfig = sortConfig.map(config =>
      config.id === sortId
        ? { ...config, direction: config.direction === 'asc' ? 'desc' as const : 'asc' as const }
        : config
    );
    onSortChange(updatedConfig);
  }, [sortConfig, onSortChange, disabled]);

  // Handle moving a sort up in priority (lower priority number)
  const handleMoveUp = useCallback((sortId: string) => {
    if (disabled) return;
    
    const sortIndex = sortConfig.findIndex(c => c.id === sortId);
    if (sortIndex <= 0) return; // Can't move up if already first or not found
    
    const newConfig = [...sortConfig];
    [newConfig[sortIndex], newConfig[sortIndex - 1]] = [newConfig[sortIndex - 1], newConfig[sortIndex]];
    onSortChange(reassignPriorities(newConfig));
  }, [sortConfig, onSortChange, disabled]);

  // Handle moving a sort down in priority (higher priority number)
  const handleMoveDown = useCallback((sortId: string) => {
    if (disabled) return;
    
    const sortIndex = sortConfig.findIndex(c => c.id === sortId);
    if (sortIndex >= sortConfig.length - 1 || sortIndex === -1) return; // Can't move down if already last or not found
    
    const newConfig = [...sortConfig];
    [newConfig[sortIndex], newConfig[sortIndex + 1]] = [newConfig[sortIndex + 1], newConfig[sortIndex]];
    onSortChange(reassignPriorities(newConfig));
  }, [sortConfig, onSortChange, disabled]);

  // Handle removing a sort
  const handleRemove = useCallback((sortId: string) => {
    if (disabled) return;
    
    const filteredConfig = sortConfig.filter(config => config.id !== sortId);
    onSortChange(reassignPriorities(filteredConfig));
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

    const sortDescriptions = sortedConfig.map((sort, index) => {
      const direction = sort.direction === 'asc' ? 'ascending' : 'descending';
      return `${index + 1}. ${sort.label} (${direction})`;
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
      <div className={`sort-status-control sort-status-control--empty ${className}`}>
        <div 
          className="sort-status-control__description"
          id="sort-description"
          aria-live="polite"
        >
          {getSortDescription()}
        </div>
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
        {getSortDescription()}
      </div>

      {/* Sort tags container */}
      <div 
        className="sort-status-control__tags"
        role="list"
        aria-label={ariaLabel}
        aria-describedby={describedBy}
      >
        <div className="sort-status-control__tags-label">
          Current sorting:
        </div>
        
        {sortedConfig.map((config) => (
          <div
            key={config.id}
            className="sort-status-control__tag-container"
            role="listitem"
          >
            <Tag
              text=""
              color="blue"
              className="sort-status-control__tag"
              closable
              onClose={() => handleRemove(config.id)}
              disabled={disabled}
            >
              <div className="sort-status-control__tag-content">
                <span className="sort-status-control__tag-priority">
                  {config.priority + 1}
                </span>
                <span className="sort-status-control__tag-label">
                  {config.label}
                </span>
                <button
                  type="button"
                  className="sort-status-control__tag-direction"
                  onClick={() => handleDirectionToggle(config.id)}
                  disabled={disabled}
                  aria-label={`Toggle sort direction for ${config.label}. Currently ${config.direction === 'asc' ? 'ascending' : 'descending'}`}
                  title="Click to toggle between ascending and descending"
                >
                  {config.direction === 'asc' ? DEFAULT_DIRECTION_LABELS.asc : DEFAULT_DIRECTION_LABELS.desc}
                </button>
                <div className="sort-status-control__tag-actions">
                  <button
                    type="button"
                    className="sort-status-control__move-button"
                    onClick={() => handleMoveUp(config.id)}
                    disabled={disabled || !canMoveUp(config.id, sortConfig)}
                    aria-label={`Move ${config.label} sort up in priority`}
                    title="Move up in priority"
                  >
                    ▲
                  </button>
                  <button
                    type="button"
                    className="sort-status-control__move-button"
                    onClick={() => handleMoveDown(config.id)}
                    disabled={disabled || !canMoveDown(config.id, sortConfig)}
                    aria-label={`Move ${config.label} sort down in priority`}
                    title="Move down in priority"
                  >
                    ▼
                  </button>
                </div>
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
            isDisabled={disabled}
            aria-label="Reset all sorting"
            className="sort-status-control__reset-button"
          >
            Clear All Sorts
          </Button>
        </div>
      )}

      {/* Instructions for users */}
      {showHelp && (
        <div className="sort-status-control__help" id="sort-help">
          <small>
            Click {DEFAULT_DIRECTION_LABELS.asc}/{DEFAULT_DIRECTION_LABELS.desc} to toggle ascending/descending. 
            Use ▲/▼ to change sort priority. Click × to remove a sort.
          </small>
        </div>
      )}
    </div>
  );
};
