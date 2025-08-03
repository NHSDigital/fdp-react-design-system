/**
 * Sort Status Control Component Types
 */

import { ReactNode } from 'react';

/**
 * Individual sort configuration for a column
 */
export interface SortConfig {
  /** Unique identifier for the sort column */
  id: string;
  /** Display label for the sort column */
  label: string;
  /** Sort direction - ascending or descending */
  direction: 'asc' | 'desc';
  /** Priority order for multi-column sorting (0 = highest priority) */
  priority: number;
}

/**
 * Props for the SortStatusControl component
 */
export interface SortStatusControlProps {
  /** Current sort configuration array */
  sortConfig: SortConfig[];
  /** Callback when sort configuration changes */
  onSortChange: (newSortConfig: SortConfig[]) => void;
  /** Optional CSS class name for styling */
  className?: string;
  /** Optional description text when no sorts are active */
  emptyDescription?: ReactNode;
  /** Optional description text when sorts are active */
  activeDescription?: ReactNode;
  /** Show/hide the reset button */
  showReset?: boolean;
  /** Show/hide the help text */
  showHelp?: boolean;
  /** Maximum number of sorts allowed */
  maxSorts?: number;
  /** Disable all interactions */
  disabled?: boolean;
  /** ARIA label for the sort status region */
  ariaLabel?: string;
  /** Additional ARIA describedby IDs */
  ariaDescribedBy?: string;
}

/**
 * Internal event handlers for sort operations
 */
export interface SortStatusHandlers {
  /** Toggle sort direction for a specific sort */
  handleDirectionToggle: (sortId: string) => void;
  /** Move a sort up in priority */
  handleMoveUp: (sortId: string) => void;
  /** Move a sort down in priority */
  handleMoveDown: (sortId: string) => void;
  /** Remove a sort from the configuration */
  handleRemove: (sortId: string) => void;
  /** Reset all sorts */
  handleReset: () => void;
}

/**
 * Helper type for sort direction labels
 */
export type SortDirectionLabel = {
  asc: string;
  desc: string;
};

/**
 * Default sort direction labels
 */
export const DEFAULT_DIRECTION_LABELS: SortDirectionLabel = {
  asc: '↑',
  desc: '↓'
};

/**
 * Utility type for creating new sort configs
 */
export type CreateSortConfig = Omit<SortConfig, 'priority'>;

/**
 * Utility function type for sorting the sort configs by priority
 */
export type SortConfigSorter = (configs: SortConfig[]) => SortConfig[];

/**
 * Helper function to create a new sort config
 */
export function createSortConfig(
  id: string,
  label: string,
  direction: 'asc' | 'desc' = 'asc'
): CreateSortConfig {
  return { id, label, direction };
}

/**
 * Helper function to sort configs by priority
 */
export const sortByPriority: SortConfigSorter = (configs) =>
  [...configs].sort((a, b) => a.priority - b.priority);

/**
 * Helper function to reassign priorities after reordering
 */
export function reassignPriorities(configs: SortConfig[]): SortConfig[] {
  return configs.map((config, index) => ({
    ...config,
    priority: index
  }));
}

/**
 * Helper function to validate sort configuration
 */
export function validateSortConfig(config: SortConfig): boolean {
  return (
    typeof config.id === 'string' &&
    config.id.trim().length > 0 &&
    typeof config.label === 'string' &&
    config.label.trim().length > 0 &&
    (config.direction === 'asc' || config.direction === 'desc') &&
    typeof config.priority === 'number' &&
    config.priority >= 0
  );
}

/**
 * Helper function to find max priority in config array
 */
export function getMaxPriority(configs: SortConfig[]): number {
  return configs.length > 0 ? Math.max(...configs.map(c => c.priority)) : -1;
}

/**
 * Helper function to check if a sort can move up
 */
export function canMoveUp(sortId: string, configs: SortConfig[]): boolean {
  const sort = configs.find(c => c.id === sortId);
  return sort ? sort.priority > 0 : false;
}

/**
 * Helper function to check if a sort can move down
 */
export function canMoveDown(sortId: string, configs: SortConfig[]): boolean {
  const sort = configs.find(c => c.id === sortId);
  const maxPriority = getMaxPriority(configs);
  return sort ? sort.priority < maxPriority : false;
}
