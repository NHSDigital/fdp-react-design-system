export declare function useCollapsibleNav(args: {
    enabled: boolean;
    isAtLeastMedium: boolean;
    initiallyCollapsed: boolean;
    persist?: "localStorage" | "url" | "both";
    storageKey: string;
    urlParam: string;
    onChange?: (collapsed: boolean) => void;
}): {
    collapsed: boolean;
    toggle: () => void;
};
