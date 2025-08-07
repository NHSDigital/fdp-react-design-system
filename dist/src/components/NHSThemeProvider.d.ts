import React from 'react';
import { ThemeProviderProps } from '../../packages/nhs-fdp/dist/react/theme/NHSThemeProvider';
import '../styles/fonts.css';
/**
 * Enhanced NHS Theme Provider that ensures fonts are loaded
 *
 * This wrapper around the base theme provider ensures that:
 * 1. Font CSS is imported and bundled
 * 2. Font face declarations are injected if not already present
 * 3. Provides the same API as the base theme provider
 */
export declare const NHSThemeProvider: React.FC<ThemeProviderProps>;
export * from '../../packages/nhs-fdp/dist/react/theme/NHSThemeProvider';
