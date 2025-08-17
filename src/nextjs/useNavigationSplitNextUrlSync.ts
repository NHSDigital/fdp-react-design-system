// Next.js (App Router) specific URL sync hook for NavigationSplitView
// This file is only bundled when importing from the /nextjs entry.
// It assumes a Next.js environment where `next/navigation` exists.
import * as React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export interface UseNavigationSplitNextUrlSyncOptions {
  paramSelected?: string;
  paramDrill?: string;
  /** Navigation method for updates (default replace to avoid history spam) */
  method?: 'replace' | 'push';
}

export function useNavigationSplitNextUrlSync<ID = string>(options: UseNavigationSplitNextUrlSyncOptions = {}) {
  const { paramSelected = 'nsv', paramDrill = 'nsvDrill', method = 'replace' } = options;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

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
