import React, { useEffect } from 'react';
import { NHSThemeProvider as BaseThemeProvider, ThemeProviderProps } from '../../packages/nhs-fdp/dist/react/theme/NHSThemeProvider';
import { injectFontCSS } from '../styles/font-loader';
// Import fonts CSS to ensure it's bundled
import '../styles/fonts.css';

/**
 * Enhanced NHS Theme Provider that ensures fonts are loaded
 * 
 * This wrapper around the base theme provider ensures that:
 * 1. Font CSS is imported and bundled
 * 2. Font face declarations are injected if not already present
 * 3. Provides the same API as the base theme provider
 */
export const NHSThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  useEffect(() => {
    // Inject font CSS to ensure fonts are available
    injectFontCSS();
  }, []);

  return (
    <BaseThemeProvider theme={theme}>
      {children}
    </BaseThemeProvider>
  );
};

// Re-export everything else from the base theme provider
export * from '../../packages/nhs-fdp/dist/react/theme/NHSThemeProvider';
