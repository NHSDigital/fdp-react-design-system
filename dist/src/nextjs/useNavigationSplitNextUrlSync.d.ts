export interface UseNavigationSplitNextUrlSyncOptions {
    paramSelected?: string;
    paramDrill?: string;
    /** Navigation method for updates (default replace to avoid history spam) */
    method?: 'replace' | 'push';
}
export declare function useNavigationSplitNextUrlSync<ID = string>(options?: UseNavigationSplitNextUrlSyncOptions): {
    readonly selectedId: ID | undefined;
    readonly drilledIn: false;
    readonly setSelectedId: () => void;
    readonly setDrilledIn: () => void;
} | {
    readonly selectedId: NonNullable<ID> | undefined;
    readonly drilledIn: boolean;
    readonly setSelectedId: (id: ID | undefined) => void;
    readonly setDrilledIn: (d: boolean) => void;
};
export type UseNavigationSplitNextUrlSyncReturn<ID = string> = ReturnType<typeof useNavigationSplitNextUrlSync<ID>>;
