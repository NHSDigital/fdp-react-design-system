import * as React from 'react';
interface Options {
    enabled?: boolean;
    paramSelected?: string;
    paramDrill?: string;
}
/**
 * Simple hook to read & write NavigationSplitView state to URL query parameters.
 * Designed for client-side apps (no SSR guarantee for initial parse fallback).
 */
export declare function useNavigationSplitUrlSync<ID = string>(options?: Options): {
    readonly selectedId: ID | undefined;
    readonly setSelectedId: React.Dispatch<React.SetStateAction<ID | undefined>>;
    readonly drilledIn: boolean;
    readonly setDrilledIn: React.Dispatch<React.SetStateAction<boolean>>;
};
export {};
