// Deprecated wrapper kept for backward compatibility. Preferred import path:
// import { useNavigationSplitNextUrlSync } from '@fergusbisset/nhs-fdp-design-system/nextjs'
// This wrapper avoids static imports of next/navigation and delegates to the
// real implementation only when available.
// (React not required directly in wrapper)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function tryLoad<T = any>(mod: string): T | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
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
 * useNavigationSplitNextUrlSync
 * Integrates NavigationSplitView state with the Next.js App Router.
 * Keeps selection + drill (three-column) state in the query string using
 * router.replace (default) or router.push. Scroll is suppressed by default.
 */
export function useNavigationSplitNextUrlSync<ID = string>(options: UseNavigationSplitNextUrlSyncOptions = {}) {
  const impl = tryLoad('@fergusbisset/nhs-fdp-design-system/dist/src/nextjs/useNavigationSplitNextUrlSync.js')
    || tryLoad('@fergusbisset/nhs-fdp-design-system/src/nextjs/useNavigationSplitNextUrlSync');
  if (impl && typeof impl.useNavigationSplitNextUrlSync === 'function') {
  // Invoke underlying implementation (loss of generic inference acceptable for wrapper)
  return (impl.useNavigationSplitNextUrlSync as (o: UseNavigationSplitNextUrlSyncOptions)=>any)(options);
  }
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn('[useNavigationSplitNextUrlSync] Loaded legacy wrapper without Next.js context. Switch to importing from /nextjs entry for full functionality.');
  }
  return {
    selectedId: undefined as ID | undefined,
    drilledIn: false,
    setSelectedId: () => {},
    setDrilledIn: () => {}
  } as const;
}

export type UseNavigationSplitNextUrlSyncReturn<ID = string> = ReturnType<typeof useNavigationSplitNextUrlSync<ID>>;
