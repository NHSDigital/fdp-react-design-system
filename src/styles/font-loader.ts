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
export async function checkFrutigerLoaded(): Promise<boolean> {
  if (typeof document === 'undefined' || !document.fonts) {
    return false;
  }
  
  try {
    // Load and check multiple font weights
    const fonts = [
      document.fonts.load('1em "Frutiger W01"'),
      document.fonts.load('600 1em "Frutiger W01"'),
    ];
    
    await Promise.all(fonts);
    
    // Check if fonts are available
    return document.fonts.check('1em "Frutiger W01"') && 
           document.fonts.check('600 1em "Frutiger W01"');
  } catch {
    return false;
  }
}

/**
 * Preload Frutiger fonts with proper error handling
 */
export async function preloadFrutigerFonts(): Promise<FontLoadingState> {
  if (typeof document === 'undefined') {
    return { isLoaded: false, isLoading: false, error: 'SSR environment' };
  }

  try {
    // Create link elements for preloading fonts
    const fontFiles = [
      {
        href: 'https://assets.nhs.uk/fonts/FrutigerLTW01-55Roman.woff2',
        type: 'font/woff2'
      },
      {
        href: 'https://assets.nhs.uk/fonts/FrutigerLTW01-65Bold.woff2',
        type: 'font/woff2'
      }
    ];

    const preloadPromises = fontFiles.map(font => {
      return new Promise<void>((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = font.type;
        link.href = font.href;
        link.crossOrigin = 'anonymous';
        
        link.onload = () => resolve();
        link.onerror = () => reject(new Error(`Failed to preload ${font.href}`));
        
        document.head.appendChild(link);
      });
    });

    await Promise.all(preloadPromises);
    
    // Now check if fonts are loaded
    const isLoaded = await checkFrutigerLoaded();
    
    return {
      isLoaded,
      isLoading: false,
      error: isLoaded ? null : 'Fonts preloaded but not detected as available'
    };
  } catch (error) {
    console.warn('Font preloading failed:', error);
    return {
      isLoaded: false,
      isLoading: false,
      error: error instanceof Error ? error.message : 'Unknown font loading error'
    };
  }
}

/**
 * Get the appropriate font stack based on loading state
 */
export function getFontStack(fontsLoaded: boolean = false): string {
  if (fontsLoaded) {
    return '"Frutiger W01", Arial, Helvetica, sans-serif';
  }
  
  // Fallback font stack when Frutiger is not available
  return 'Arial, Helvetica, sans-serif';
}

/**
 * Create CSS for font-face declarations
 */
export function createFontFaceCSS(): string {
  return `
    @font-face {
      font-display: swap;
      font-family: "Frutiger W01";
      font-style: normal;
      font-weight: 400;
      src: url("https://assets.nhs.uk/fonts/FrutigerLTW01-55Roman.woff2") format("woff2"),
           url("https://assets.nhs.uk/fonts/FrutigerLTW01-55Roman.woff") format("woff");
    }
    
    @font-face {
      font-display: swap;
      font-family: "Frutiger W01";
      font-style: normal;
      font-weight: 600;
      src: url("https://assets.nhs.uk/fonts/FrutigerLTW01-65Bold.woff2") format("woff2"),
           url("https://assets.nhs.uk/fonts/FrutigerLTW01-65Bold.woff") format("woff");
    }
  `;
}

/**
 * Inject font CSS directly into the document
 */
export function injectFontCSS(): void {
  if (typeof document === 'undefined') return;
  
  // Check if already injected
  if (document.getElementById('nhs-fonts')) return;
  
  const style = document.createElement('style');
  style.id = 'nhs-fonts';
  style.textContent = createFontFaceCSS();
  document.head.appendChild(style);
}
