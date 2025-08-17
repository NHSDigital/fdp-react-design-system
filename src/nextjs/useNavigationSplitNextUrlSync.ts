// Next.js (App Router) specific URL sync hook for NavigationSplitView
// This file is only bundled when importing from the /nextjs entry.
// It assumes a Next.js environment where `next/navigation` exists.
import * as React from 'react';

// Dynamically (optionally) load next/navigation so the library can build
// without Next.js installed (optional peer). We intentionally avoid a
// static import because Vite's optional peer plugin rewrites it and
// Rollup then verifies named exports that won't exist when Next is absent.
// Using a guarded require keeps this entry tree‑shakable for non‑Next
// consumers while still providing full behaviour in a Next environment.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let nextNav: any | null = null;
try {
  // Use Function constructor to avoid bundlers trying to resolve at build.
  const req = (Function('return require'))();
  nextNav = req('next/navigation');
} catch {
  nextNav = null;
}

const useSearchParams = nextNav?.useSearchParams as (() => URLSearchParams) | undefined;
const usePathname = nextNav?.usePathname as (() => string) | undefined;
interface NextRouterLike { push: (url: string, opts?: { scroll?: boolean; shallow?: boolean }) => void; replace: (url: string, opts?: { scroll?: boolean; shallow?: boolean }) => void; }
const useRouter = nextNav?.useRouter as (() => NextRouterLike) | undefined;

export interface UseNavigationSplitNextUrlSyncOptions {
  paramSelected?: string;
  paramDrill?: string;
  /** Navigation method for updates (default replace to avoid history spam) */
  method?: 'replace' | 'push';
}

export function useNavigationSplitNextUrlSync<ID = string>(options: UseNavigationSplitNextUrlSyncOptions = {}) {
  const { paramSelected = 'nsv', paramDrill = 'nsvDrill', method = 'replace' } = options;

  if (!useSearchParams || !usePathname || !useRouter) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn('[useNavigationSplitNextUrlSync] next/navigation not available – returning inert helpers. Import this hook only within a Next.js App Router environment.');
    }
    return {
      selectedId: undefined as ID | undefined,
      drilledIn: false,
      setSelectedId: () => {},
      setDrilledIn: () => {}
    } as const;
  }

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const selectedId = (searchParams.get(paramSelected) as ID | null | undefined) || undefined;
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
