/**
 * NHS Frutiger Font Configuration
 *
 * This module provides utilities for configuring and loading NHS Frutiger fonts.
 * It includes both official NHS font URLs and development fallbacks.
 */
export interface FontConfig {
    /** Base URL for font files */
    fontPath: string;
    /** Whether to include font-face declarations */
    includeFontFace: boolean;
    /** Whether to use development fallbacks when Frutiger is not available */
    useFallbacks: boolean;
    /** Custom font weights to load */
    fontWeights?: Array<400 | 600>;
}
export declare const DEFAULT_FONT_CONFIG: FontConfig;
/**
 * Font files required for Frutiger W01
 */
export declare const FRUTIGER_FONT_FILES: {
    normal: {
        woff2: string;
        woff: string;
        ttf: string;
        eot: string;
    };
    bold: {
        woff2: string;
        woff: string;
        ttf: string;
        eot: string;
    };
};
/**
 * Generates CSS @font-face declarations for Frutiger fonts
 */
export declare function generateFrutigerFontFace(config?: Partial<FontConfig>): string;
/**
 * Preload Frutiger fonts for better performance
 */
export declare function preloadFrutigerFonts(config?: Partial<FontConfig>): void;
/**
 * Font stack with proper fallbacks
 */
export declare const NHS_FONT_STACK = "\"Frutiger W01\", Arial, Helvetica, sans-serif";
/**
 * Development fallback font stack (when Frutiger is not available)
 */
export declare const NHS_FALLBACK_FONT_STACK = "Arial, Helvetica, sans-serif";
/**
 * Check if Frutiger fonts are loaded
 */
export declare function checkFrutigerLoaded(): Promise<boolean>;
/**
 * Hook for React applications to manage font loading state
 */
export declare function useFrutigerFonts(config?: Partial<FontConfig>): {
    fontsLoaded: any;
    fontsError: any;
};
