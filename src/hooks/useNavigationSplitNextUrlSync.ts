/**
 * @deprecated This hook is deprecated and will be removed in a future version.
 * 
 * Use the framework-agnostic `useNavigationSplitUrlSync` instead:
 * ```ts
 * import { useNavigationSplitUrlSync } from '@nhsdigital/fdp-design-system';
 * ```
 * 
 * For Next.js App Router integration, create your own wrapper - see the
 * JSDoc in src/nextjs/useNavigationSplitNextUrlSync.ts for an example.
 */

function tryLoad<T = any>(mod: string): T | null {
  try {
    const req = (Function('return require'))();
    return req(mod);
  } catch {
    return null;
  }
}

export interface UseNavigationSplitNextUrlSyncOptions {
  paramSelected?: string;
  paramDrill?: string;
  /** Navigation method for updates (default replace to avoid history spam) */
  method?: 'replace' | 'push';
}

/**
 * @deprecated Use `useNavigationSplitUrlSync` from the main entry instead.
 * This Next.js-specific hook will be removed in a future version.
 * 
 * Integrates NavigationSplitView state with the Next.js App Router.
 * Keeps selection + drill (three-column) state in the query string using
 * router.replace (default) or router.push. Scroll is suppressed by default.
 */
export function useNavigationSplitNextUrlSync<ID = string>(options: UseNavigationSplitNextUrlSyncOptions = {}) {
  // Emit deprecation warning
  if (typeof console !== 'undefined' && process.env.NODE_ENV !== 'production') {
    console.warn(
      '[useNavigationSplitNextUrlSync] DEPRECATED: This hook will be removed in a future version. ' +
      'Use useNavigationSplitUrlSync from the main entry, or create your own Next.js wrapper.'
    );
  }

  const impl = tryLoad('@nhsdigital/fdp-design-system/dist/src/nextjs/useNavigationSplitNextUrlSync.js')
    || tryLoad('@nhsdigital/fdp-design-system/src/nextjs/useNavigationSplitNextUrlSync');
  if (impl && typeof impl.useNavigationSplitNextUrlSync === 'function') {
    // Invoke underlying implementation (loss of generic inference acceptable for wrapper)
    return (impl.useNavigationSplitNextUrlSync as (o: UseNavigationSplitNextUrlSyncOptions)=>any)(options);
  }
  if (process.env.NODE_ENV !== 'production') {
    console.warn('[useNavigationSplitNextUrlSync] Loaded legacy wrapper without Next.js context. Switch to using useNavigationSplitUrlSync from the main entry.');
  }
  return {
    selectedId: undefined as ID | undefined,
    drilledIn: false,
    setSelectedId: () => {},
    setDrilledIn: () => {}
  } as const;
}

export type UseNavigationSplitNextUrlSyncReturn<ID = string> = ReturnType<typeof useNavigationSplitNextUrlSync<ID>>;
