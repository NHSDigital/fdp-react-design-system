import React from 'react';
export type Brand = 'nhs' | 'fdp';
interface BrandContextValue {
    brand: Brand;
    setBrand: (b: Brand) => void;
}
export interface BrandThemeProviderProps {
    brand?: Brand;
    scope?: 'document' | 'local';
    children: React.ReactNode;
}
/**
 * BrandThemeProvider sets `data-brand` either on documentElement (default)
 * or on a local wrapper to enable subtree branding. NHS remains default.
 */
export declare function BrandThemeProvider({ brand, scope, children }: BrandThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useBrand(): BrandContextValue;
export {};
