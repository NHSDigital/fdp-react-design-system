/**
 * Font Loading Utilities
 *
 * Utilities to help with loading NHS Frutiger fonts and detecting font loading states
 */
export interface FontLoadingState {
    isLoaded: boolean;
    isLoading: boolean;
    error: string | null;
}
/**
 * Check if Frutiger fonts are loaded
 */
export declare function checkFrutigerLoaded(): Promise<boolean>;
/**
 * Preload Frutiger fonts with proper error handling
 */
export declare function preloadFrutigerFonts(): Promise<FontLoadingState>;
/**
 * Get the appropriate font stack based on loading state
 */
export declare function getFontStack(fontsLoaded?: boolean): string;
/**
 * Create CSS for font-face declarations
 */
export declare function createFontFaceCSS(): string;
/**
 * Inject font CSS directly into the document
 */
export declare function injectFontCSS(): void;
