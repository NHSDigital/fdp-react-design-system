/**
 * Advanced Token Calculation System
 * Handles mathematical relationships, auto-contrast, and derived token values
 */
export interface TokenCalculationOptions {
    darkenAmount?: number;
    lightenAmount?: number;
    fadeAmount?: number;
    tintAmount?: number;
    contrastRatio?: number;
    preferredTextColor?: 'light' | 'dark' | 'auto';
    scaleRatio?: number;
    baseUnit?: number;
}
export declare class TokenCalculator {
    private static instance;
    static getInstance(): TokenCalculator;
    /**
     * Darken a color by a percentage
     */
    darken(color: string, amount?: number): string;
    /**
     * Lighten a color by a percentage
     */
    lighten(color: string, amount?: number): string;
    /**
     * Fade a color by reducing opacity
     */
    fade(color: string, amount?: number): string;
    /**
     * Tint a color by mixing with white
     */
    tint(color: string, amount?: number): string;
    /**
     * Calculate optimal contrast color (black or white) for a background
     */
    autoContrast(backgroundColor: string, options?: TokenCalculationOptions): string;
    /**
     * Calculate a color that meets specific contrast requirements
     */
    calculateContrastColor(backgroundColor: string, targetContrast?: number, baseColor?: string): string;
    /**
     * Calculate modular spacing scale
     */
    calculateSpacingScale(baseUnit?: number, ratio?: number, steps?: number): number[];
    /**
     * Calculate fluid spacing value for CSS clamp()
     */
    calculateFluidSpacing(minValue: number, maxValue: number, minViewport?: number, maxViewport?: number): string;
    /**
     * Calculate type scale based on ratio
     */
    calculateTypeScale(baseSize?: number, ratio?: number, steps?: number): number[];
    /**
     * Calculate optimal line height for font size
     */
    calculateLineHeight(fontSize: number): number;
    /**
     * Resolve calculated token values from token definitions
     */
    resolveCalculatedToken(tokenValue: string, tokenRegistry: Record<string, any>): string;
    /**
     * Resolve token references like {semantic.intent.primary}
     */
    private resolveTokenReference;
}
export declare const tokenCalculator: TokenCalculator;
export declare const darken: (color: string, amount?: number) => string, lighten: (color: string, amount?: number) => string, fade: (color: string, amount?: number) => string, tint: (color: string, amount?: number) => string, autoContrast: (backgroundColor: string, options?: TokenCalculationOptions) => string, calculateContrastColor: (backgroundColor: string, targetContrast?: number, baseColor?: string) => string, calculateSpacingScale: (baseUnit?: number, ratio?: number, steps?: number) => number[], calculateFluidSpacing: (minValue: number, maxValue: number, minViewport?: number, maxViewport?: number) => string, calculateTypeScale: (baseSize?: number, ratio?: number, steps?: number) => number[], calculateLineHeight: (fontSize: number) => number, resolveCalculatedToken: (tokenValue: string, tokenRegistry: Record<string, any>) => string;
