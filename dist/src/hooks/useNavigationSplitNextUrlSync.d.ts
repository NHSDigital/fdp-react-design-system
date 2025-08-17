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
export declare function useNavigationSplitNextUrlSync<ID = string>(options?: UseNavigationSplitNextUrlSyncOptions): any;
export type UseNavigationSplitNextUrlSyncReturn<ID = string> = ReturnType<typeof useNavigationSplitNextUrlSync<ID>>;
