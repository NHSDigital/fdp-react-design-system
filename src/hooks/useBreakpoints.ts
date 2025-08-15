import * as React from 'react';

/**
 * NHS FDP breakpoint map (keep in sync with SCSS tokens)
 * Consider future auto-generation from design tokens.
 */
export const NHS_FDP_BREAKPOINTS = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});

export type BreakpointKey = keyof typeof NHS_FDP_BREAKPOINTS;

/** Utility: get current window width safely */
function getViewportWidth(): number {
  if (typeof window === 'undefined') return NHS_FDP_BREAKPOINTS.small;
  return window.innerWidth || document.documentElement.clientWidth || 0;
}

/**
 * Hook returning live breakpoint matches and helpers.
 */
export function useNhsFdpBreakpoints() {
  const [width, setWidth] = React.useState<number>(getViewportWidth());

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const handle = () => setWidth(getViewportWidth());
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  const up = React.useCallback((key: BreakpointKey) => width >= NHS_FDP_BREAKPOINTS[key], [width]);
  const down = React.useCallback((key: BreakpointKey) => width < NHS_FDP_BREAKPOINTS[key], [width]);
  const between = React.useCallback((min: BreakpointKey, max: BreakpointKey) => {
    return width >= NHS_FDP_BREAKPOINTS[min] && width < NHS_FDP_BREAKPOINTS[max];
  }, [width]);

  return {
    width,
    up,
    down,
    between,
    /** Raw numeric values */
    values: NHS_FDP_BREAKPOINTS
  };
}

/**
 * Convenience hook to choose a layout value based on breakpoints.
 * Provide an ordered array of [minWidth,value] pairs or an object keyed by breakpoint.
 */
export function useResponsiveValue<T>(map: { base: T } & Partial<Record<BreakpointKey, T>>): T {
  const { width, values } = useNhsFdpBreakpoints();
  let current: T = map.base;
  const order: BreakpointKey[] = ['small','medium','large','xlarge','xxlarge'];
  for (const key of order) {
    const bp = values[key];
    if (width >= bp && map[key] !== undefined) current = map[key]!;
  }
  return current;
}
