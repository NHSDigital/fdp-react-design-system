import * as React from 'react';
import { NavigationSplitLayoutMode } from '../components/NavigationSplitView/NavigationSplitView.types';

export interface UseNavigationSplitDrillOptions {
  /** Start with automatic responsive layout (undefined) or a forced mode */
  initialLayout?: NavigationSplitLayoutMode | undefined;
  /** When drilling out from three-column, fallback target (defaults to two-column) */
  fallbackLayout?: Exclude<NavigationSplitLayoutMode, 'three-column'>;
}

export interface UseNavigationSplitDrillResult {
  /** Pass as forceLayout to NavigationSplitView */
  forceLayout: NavigationSplitLayoutMode | undefined;
  /** Set layout explicitly */
  setLayout: React.Dispatch<React.SetStateAction<NavigationSplitLayoutMode | undefined>>;
  /** Drill into third column (sets forceLayout to 'three-column') */
  drillIn: () => void;
  /** Drill back (returns to fallback layout) */
  drillOut: () => void;
  /** Toggle between fallback and three-column */
  toggle: () => void;
  /** True when in three-column layout */
  isDrilledIn: boolean;
}

/**
 * Convenience hook to manage drilling into/out of the third column.
 * Wraps a simple piece of state controlling the `forceLayout` prop.
 */
export function useNavigationSplitDrill(options: UseNavigationSplitDrillOptions = {}): UseNavigationSplitDrillResult {
  const { initialLayout = undefined, fallbackLayout = 'two-column' } = options;
  const [forceLayout, setLayout] = React.useState<NavigationSplitLayoutMode | undefined>(initialLayout);

  const drillIn = React.useCallback(() => setLayout('three-column'), []);
  const drillOut = React.useCallback(() => setLayout(prev => prev === 'three-column' ? fallbackLayout : prev), [fallbackLayout]);
  const toggle = React.useCallback(() => setLayout(prev => prev === 'three-column' ? fallbackLayout : 'three-column'), [fallbackLayout]);

  return {
    forceLayout,
    setLayout,
    drillIn,
    drillOut,
    toggle,
    isDrilledIn: forceLayout === 'three-column'
  };
}
