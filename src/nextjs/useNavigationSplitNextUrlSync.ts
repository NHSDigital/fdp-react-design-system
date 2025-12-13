/**
 * @deprecated This hook is deprecated and will be removed in a future version.
 * 
 * Use the framework-agnostic `useNavigationSplitUrlSync` instead:
 * ```ts
 * import { useNavigationSplitUrlSync } from '@nhsdigital/fdp-design-system';
 * ```
 * 
 * If you need Next.js App Router integration, create your own wrapper in your app:
 * ```tsx
 * // app/hooks/useNavigationSplitNextUrlSync.ts
 * "use client";
 * import { useSearchParams, usePathname, useRouter } from 'next/navigation';
 * import { useCallback } from 'react';
 * 
 * export function useNavigationSplitNextUrlSync<ID = string>(options: {
 *   paramSelected?: string;
 *   paramDrill?: string;
 *   method?: 'replace' | 'push';
 * } = {}) {
 *   const { paramSelected = 'nsv', paramDrill = 'nsvDrill', method = 'replace' } = options;
 *   const searchParams = useSearchParams();
 *   const pathname = usePathname();
 *   const router = useRouter();
 * 
 *   const selectedId = (searchParams.get(paramSelected) as ID | null) || undefined;
 *   const drilledIn = searchParams.get(paramDrill) === '1';
 * 
 *   const update = useCallback((nextSelected: ID | undefined, nextDrilled: boolean) => {
 *     const sp = new URLSearchParams(searchParams.toString());
 *     if (nextSelected) sp.set(paramSelected, String(nextSelected)); else sp.delete(paramSelected);
 *     sp.set(paramDrill, nextDrilled ? '1' : '0');
 *     const url = `${pathname}?${sp.toString()}`;
 *     method === 'push' ? router.push(url, { scroll: false }) : router.replace(url, { scroll: false });
 *   }, [searchParams, pathname, router, method, paramSelected, paramDrill]);
 * 
 *   return {
 *     selectedId,
 *     drilledIn,
 *     setSelectedId: (id: ID | undefined) => update(id, drilledIn),
 *     setDrilledIn: (d: boolean) => update(selectedId, d)
 *   } as const;
 * }
 * ```
 */
import * as React from 'react';

// Dynamically (optionally) load next/navigation so the library can build
// without Next.js installed (optional peer). We intentionally avoid a
// static import because Vite's optional peer plugin rewrites it and
// Rollup then verifies named exports that won't exist when Next is absent.
// Using a guarded require keeps this entry tree‑shakable for non‑Next
// consumers while still providing full behaviour in a Next environment.

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

/**
 * @deprecated Use `useNavigationSplitUrlSync` from the main entry instead.
 * This Next.js-specific hook will be removed in a future version.
 */
export function useNavigationSplitNextUrlSync<ID = string>(options: UseNavigationSplitNextUrlSyncOptions = {}) {
  const { paramSelected = 'nsv', paramDrill = 'nsvDrill', method = 'replace' } = options;

  // Emit deprecation warning once per session
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        '[useNavigationSplitNextUrlSync] DEPRECATED: This hook will be removed in a future version. ' +
        'Use useNavigationSplitUrlSync from the main entry, or create your own Next.js wrapper in your app. ' +
        'See the JSDoc comments for migration guidance.'
      );
    }
  }, []);

  if (!useSearchParams || !usePathname || !useRouter) {
    if (process.env.NODE_ENV !== 'production') {
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
