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

export const DEFAULT_FONT_CONFIG: FontConfig = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: true,
  useFallbacks: true,
  fontWeights: [400, 600]
};

/**
 * Font files required for Frutiger W01
 */
export const FRUTIGER_FONT_FILES = {
  normal: {
    woff2: "FrutigerLTW01-55Roman.woff2",
    woff: "FrutigerLTW01-55Roman.woff",
    ttf: "FrutigerLTW01-55Roman.ttf",
    eot: "FrutigerLTW01-55Roman.eot"
  },
  bold: {
    woff2: "FrutigerLTW01-65Bold.woff2", 
    woff: "FrutigerLTW01-65Bold.woff",
    ttf: "FrutigerLTW01-65Bold.ttf",
    eot: "FrutigerLTW01-65Bold.eot"
  }
};

/**
 * Generates CSS @font-face declarations for Frutiger fonts
 */
export function generateFrutigerFontFace(config: Partial<FontConfig> = {}): string {
  const { fontPath, fontWeights } = { ...DEFAULT_FONT_CONFIG, ...config };
  
  const fontFaceDeclarations: string[] = [];
  
  if (fontWeights?.includes(400)) {
    fontFaceDeclarations.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${fontPath}${FRUTIGER_FONT_FILES.normal.eot}?#iefix") format("eot"),
       url("${fontPath}${FRUTIGER_FONT_FILES.normal.woff2}") format("woff2"),
       url("${fontPath}${FRUTIGER_FONT_FILES.normal.woff}") format("woff"),
       url("${fontPath}${FRUTIGER_FONT_FILES.normal.ttf}") format("truetype");
  src: url("${fontPath}${FRUTIGER_FONT_FILES.normal.eot}");
}`);
  }
  
  if (fontWeights?.includes(600)) {
    fontFaceDeclarations.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${fontPath}${FRUTIGER_FONT_FILES.bold.eot}?#iefix") format("eot"),
       url("${fontPath}${FRUTIGER_FONT_FILES.bold.woff2}") format("woff2"),
       url("${fontPath}${FRUTIGER_FONT_FILES.bold.woff}") format("woff"),
       url("${fontPath}${FRUTIGER_FONT_FILES.bold.ttf}") format("truetype");
  src: url("${fontPath}${FRUTIGER_FONT_FILES.bold.eot}");
}`);
  }
  
  return fontFaceDeclarations.join('\n');
}

/**
 * Preload Frutiger fonts for better performance
 */
export function preloadFrutigerFonts(config: Partial<FontConfig> = {}): void {
  if (typeof document === 'undefined') return; // SSR safety
  
  const { fontPath, fontWeights } = { ...DEFAULT_FONT_CONFIG, ...config };
  
  const preloadFonts = [
    // Preload the most important formats (woff2 first, then woff)
    ...(fontWeights?.includes(400) ? [
      { href: `${fontPath}${FRUTIGER_FONT_FILES.normal.woff2}`, as: 'font', type: 'font/woff2' },
      { href: `${fontPath}${FRUTIGER_FONT_FILES.normal.woff}`, as: 'font', type: 'font/woff' }
    ] : []),
    ...(fontWeights?.includes(600) ? [
      { href: `${fontPath}${FRUTIGER_FONT_FILES.bold.woff2}`, as: 'font', type: 'font/woff2' },
      { href: `${fontPath}${FRUTIGER_FONT_FILES.bold.woff}`, as: 'font', type: 'font/woff' }
    ] : [])
  ];
  
  preloadFonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font.href;
    link.as = font.as;
    link.type = font.type;
    link.crossOrigin = 'anonymous'; // Required for font preloading
    document.head.appendChild(link);
  });
}

/**
 * Font stack with proper fallbacks
 */
export const NHS_FONT_STACK = '"Frutiger W01", Arial, Helvetica, sans-serif';

/**
 * Development fallback font stack (when Frutiger is not available)
 */
export const NHS_FALLBACK_FONT_STACK = 'Arial, Helvetica, sans-serif';

/**
 * Check if Frutiger fonts are loaded
 */
export async function checkFrutigerLoaded(): Promise<boolean> {
  if (typeof document === 'undefined' || !document.fonts) return false;
  
  try {
    await document.fonts.load('1em "Frutiger W01"');
    return document.fonts.check('1em "Frutiger W01"');
  } catch {
    return false;
  }
}

/**
 * Hook for React applications to manage font loading state
 */
export function useFrutigerFonts(config: Partial<FontConfig> = {}) {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  const [fontsError, setFontsError] = React.useState(false);
  
  React.useEffect(() => {
    // Preload fonts
    preloadFrutigerFonts(config);
    
    // Check if fonts are loaded
    checkFrutigerLoaded()
      .then(loaded => {
        setFontsLoaded(loaded);
        if (!loaded) {
          console.warn('NHS Frutiger fonts not loaded. Using fallback fonts.');
        }
      })
      .catch(() => {
        setFontsError(true);
        console.warn('Error checking NHS Frutiger font loading. Using fallback fonts.');
      });
  }, []);
  
  return { fontsLoaded, fontsError };
}

// React import (will be resolved by bundler)
declare const React: any;
