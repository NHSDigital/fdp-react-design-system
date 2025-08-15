// Next.js specific URL sync hook for NavigationSplitView
// NOTE: This file assumes a Next.js App Router environment (>=13.4).
// It intentionally lives outside the default index export to avoid pulling
// next/navigation into non-Next consumers. Import from the /nextjs entry.

import * as React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

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
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

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
