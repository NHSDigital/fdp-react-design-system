// Next.js specific URL sync hook for NavigationSplitView
// NOTE: This file assumes a Next.js App Router environment (>=13.4).
// It intentionally lives outside the default index export to avoid pulling
// next/navigation into non-Next consumers. Import from the /nextjs entry.

import * as React from 'react';
// NOTE: The `next/navigation` import is safe for declaration build because we ship
// a lightweight ambient shim (`src/types/next-navigation-shim.d.ts`) when Next.js
// isn't installed. In a real Next.js app the real types override the shim.
// Import as namespace so missing named exports in an optional peer stub don't cause build failure
// (Vite optional peer dep plugin can supply an empty object). We then feature-detect below.
import * as nextNavigation from 'next/navigation';

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
  const { paramSelected = 'nsv', paramDrill = 'nsvDrill', method = 'replace' } = options;
  // Pull potential hooks off namespace (may be undefined if next/navigation absent)
  const useSearchParamsFn: any = (nextNavigation as any).useSearchParams;
  const usePathnameFn: any = (nextNavigation as any).usePathname;
  const useRouterFn: any = (nextNavigation as any).useRouter;

  // If any are missing we provide a safe fallback object so consumers that mistakenly
  // invoke this hook outside Next.js don't crash the build. We also warn in dev.
  const missing = !(useSearchParamsFn && usePathnameFn && useRouterFn);
  if (missing) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn('[useNavigationSplitNextUrlSync] next/navigation not available – returning inert URL sync helpers. Ensure you import from the nextjs entry within a Next.js App Router project.');
    }
    return {
      selectedId: undefined as ID | undefined,
      drilledIn: false,
      setSelectedId: () => {},
      setDrilledIn: () => {}
    } as const;
  }

  const searchParams = useSearchParamsFn();
  const pathname = usePathnameFn();
  const router = useRouterFn();

  // Derive current state from URL
  const selectedId = searchParams.get(paramSelected) as ID | null | undefined || undefined;
  const drilledIn = searchParams.get(paramDrill) === '1';

  const update = React.useCallback((nextSelected: ID | undefined, nextDrilled: boolean) => {
    const sp = new URLSearchParams(searchParams.toString());
    if (nextSelected) sp.set(paramSelected, String(nextSelected)); else sp.delete(paramSelected);
    sp.set(paramDrill, nextDrilled ? '1' : '0');
    const qs = sp.toString();
    const url = qs ? `${pathname}?${qs}` : pathname;
    const nav = method === 'push' ? router.push : router.replace;
    nav(url, { scroll: false });
  }, [searchParams, pathname, router, method, paramSelected, paramDrill]);

  return {
    selectedId,
    drilledIn,
    setSelectedId: (id: ID | undefined) => update(id, drilledIn),
    setDrilledIn: (d: boolean) => update(selectedId, d)
  } as const;
}

export type UseNavigationSplitNextUrlSyncReturn<ID = string> = ReturnType<typeof useNavigationSplitNextUrlSync<ID>>;
