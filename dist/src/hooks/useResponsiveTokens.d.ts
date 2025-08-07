import React from 'react';
export type DensityMode = 'compact' | 'comfortable' | 'spacious';
export type ContrastMode = 'normal' | 'high';
export type MotionMode = 'normal' | 'reduced';
export type BrandVariant = 'nhs-england' | 'nhs-scotland' | 'nhs-wales';
export interface ResponsiveTokenValue {
    mobile: string;
    tablet: string;
    desktop: string;
}
export interface DynamicTokensState {
    density: DensityMode;
    contrast: ContrastMode;
    motion: MotionMode;
    brand: BrandVariant;
}
export interface ResponsiveTokensManager {
    density: DensityMode;
    contrast: ContrastMode;
    motion: MotionMode;
    brand: BrandVariant;
    setDensity: (mode: DensityMode) => void;
    setContrast: (mode: ContrastMode) => void;
    setMotion: (mode: MotionMode) => void;
    setBrand: (variant: BrandVariant) => void;
    getResponsiveToken: (tokenPath: string) => ResponsiveTokenValue | string;
    applySystemPreferences: () => void;
    resetToDefaults: () => void;
}
/**
 * Hook for managing responsive and dynamic design tokens
 *
 * Features:
 * - Density modes (compact, comfortable, spacious)
 * - Contrast preferences (normal, high contrast)
 * - Motion preferences (normal, reduced motion)
 * - Brand variants (NHS England, Scotland, Wales)
 * - Responsive token values (mobile, tablet, desktop)
 * - System preference detection
 */
export declare function useResponsiveTokens(): ResponsiveTokensManager;
/**
 * Higher-order component for providing responsive token context
 */
export declare function withResponsiveTokens<P extends object>(WrappedComponent: React.ComponentType<P>): React.ComponentType<P>;
export default useResponsiveTokens;
