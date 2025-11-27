import { useState, useEffect } from 'react';
import { FontLoadingState, checkFrutigerLoaded, preloadFrutigerFonts, injectFontCSS } from '../styles/font-loader';

/**
 * Hook to manage NHS Frutiger font loading state
 */
export function useFrutigerFonts(): FontLoadingState & { fontFamily: string } {
  const [state, setState] = useState<FontLoadingState>({
    isLoaded: false,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    let mounted = true;

    async function loadFonts() {
      try {
        // Inject font CSS if not already present
        injectFontCSS();
        
        // First check if fonts are already loaded
        const alreadyLoaded = await checkFrutigerLoaded();
        
        if (alreadyLoaded) {
          if (mounted) {
            setState({
              isLoaded: true,
              isLoading: false,
              error: null
            });
          }
          return;
        }

        // If not loaded, try to preload them
        const result = await preloadFrutigerFonts();
        
        if (mounted) {
          setState({
            isLoaded: result.isLoaded,
            isLoading: false,
            error: result.error
          });
        }

        // Log warning if fonts failed to load
        if (!result.isLoaded) {
          console.warn('NHS Frutiger fonts could not be loaded. Using fallback fonts.');
        }

      } catch (error) {
        if (mounted) {
          setState({
            isLoaded: false,
            isLoading: false,
            error: error instanceof Error ? error.message : 'Font loading failed'
          });
        }
      }
    }

    loadFonts();

    return () => {
      mounted = false;
    };
  }, []);

  // Return font family based on loading state
  const fontFamily = state.isLoaded 
    ? '"Frutiger W01", Arial, Helvetica, sans-serif'
    : 'Arial, Helvetica, sans-serif';

  return {
    ...state,
    fontFamily
  };
}
