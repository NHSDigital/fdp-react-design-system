import * as React from 'react';

interface Options {
  enabled?: boolean;
  paramSelected?: string;
  paramDrill?: string;
}

/**
 * Simple hook to read & write NavigationSplitView state to URL query parameters.
 * Designed for client-side apps (no SSR guarantee for initial parse fallback).
 */
export function useNavigationSplitUrlSync<ID = string>(options: Options = {}) {
  const { enabled = true, paramSelected = 'nsv', paramDrill = 'nsvDrill' } = options;
  const [selectedId, setSelectedId] = React.useState<ID | undefined>(() => {
    if (typeof window === 'undefined' || !enabled) return undefined;
    const sp = new URLSearchParams(window.location.search);
    return sp.get(paramSelected) as any as ID | undefined;
  });
  const [drilledIn, setDrilledIn] = React.useState<boolean>(() => {
    if (typeof window === 'undefined' || !enabled) return false;
    const sp = new URLSearchParams(window.location.search);
    return sp.get(paramDrill) === '1';
  });

  // Push changes (replaceState so we don't spam history)
  React.useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;
    const sp = new URLSearchParams(window.location.search);
    if (selectedId) sp.set(paramSelected, String(selectedId)); else sp.delete(paramSelected);
    sp.set(paramDrill, drilledIn ? '1' : '0');
    const newUrl = `${window.location.pathname}?${sp.toString()}${window.location.hash}`;
    window.history.replaceState(null, '', newUrl);
  }, [selectedId, drilledIn, enabled, paramSelected, paramDrill]);

  return { selectedId, setSelectedId, drilledIn, setDrilledIn } as const;
}
