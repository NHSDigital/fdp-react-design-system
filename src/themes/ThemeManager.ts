// Advanced Theme Management System for NHS FDP Design System
// This provides dynamic theme switching and CSS custom property management

import React from 'react';

export interface ThemeTokens {
  intent: {
    primary: string;
    secondary: string;
    warning: string;
    success: string;
    neutral: string;
    info: string;
  };
  surface: {
    background: {
      primary: string;
      secondary: string;
      elevated: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      inverse: string;
    };
    border: {
      default: string;
      subtle: string;
      strong: string;
    };
  };
}

// Theme definitions with calculated values
export const lightTheme: ThemeTokens = {
  intent: {
    primary: '#007f3b',      // NHS Green
    secondary: '#005eb8',    // NHS Blue
    warning: '#d5281b',      // NHS Red
    success: '#007f3b',      // NHS Green
    neutral: '#4c6272',      // Grey 1
    info: '#005eb8'          // NHS Blue
  },
  surface: {
    background: {
      primary: '#ffffff',     // White
      secondary: '#f0f4f5',   // Grey 5
      elevated: '#ffffff'     // White
    },
    text: {
      primary: '#212b32',     // NHS Black
      secondary: '#4c6272',   // Grey 1
      tertiary: '#768692',    // Grey 2
      inverse: '#ffffff'      // White
    },
    border: {
      default: '#d8dde0',     // Grey 4
      subtle: '#f0f4f5',      // Grey 5
      strong: '#768692'       // Grey 2
    }
  }
};

export const darkTheme: ThemeTokens = {
  intent: {
    primary: '#4ab86b',      // Lighter NHS Green (lighten 20%)
    secondary: '#4d8fd4',    // Lighter NHS Blue (lighten 25%)
    warning: '#e85a4f',      // Lighter NHS Red (lighten 15%)
    success: '#4ab86b',      // Lighter NHS Green
    neutral: '#aeb7bd',      // Grey 3
    info: '#4d8fd4'          // Lighter NHS Blue
  },
  surface: {
    background: {
      primary: '#1a2328',     // Darker NHS Black (darken 5%)
      secondary: '#2a343a',   // Lighter NHS Black (lighten 8%)
      elevated: '#35424a'     // More lighter NHS Black (lighten 12%)
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.95)',  // 95% white
      secondary: 'rgba(255, 255, 255, 0.8)', // 80% white
      tertiary: 'rgba(255, 255, 255, 0.6)',  // 60% white
      inverse: '#212b32'      // NHS Black
    },
    border: {
      default: 'rgba(255, 255, 255, 0.2)',   // 20% white
      subtle: 'rgba(255, 255, 255, 0.1)',    // 10% white
      strong: 'rgba(255, 255, 255, 0.4)'     // 40% white
    }
  }
};

export type ThemeName = 'light' | 'dark';

export const themes: Record<ThemeName, ThemeTokens> = {
  light: lightTheme,
  dark: darkTheme
};

/**
 * Theme Manager class for handling dynamic theme switching
 */
export class ThemeManager {
  private currentTheme: ThemeName = 'light';
  private readonly rootElement: HTMLElement;
  
  constructor(rootElement: HTMLElement = document.documentElement) {
    this.rootElement = rootElement;
    this.initializeTheme();
  }

  /**
   * Initialize theme based on user preference or system preference
   */
  private initializeTheme(): void {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('nhs-fdp-theme') as ThemeName;
    if (savedTheme && savedTheme in themes) {
      this.setTheme(savedTheme);
      return;
    }

    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme(prefersDark ? 'dark' : 'light');
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (!localStorage.getItem('nhs-fdp-theme')) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
  }

  /**
   * Set the active theme
   */
  public setTheme(themeName: ThemeName): void {
    if (!(themeName in themes)) {
      console.warn(`Theme "${themeName}" not found. Available themes:`, Object.keys(themes));
      return;
    }

    this.currentTheme = themeName;
    this.applyThemeToDOM(themes[themeName]);
    this.rootElement.setAttribute('data-theme', themeName);
    localStorage.setItem('nhs-fdp-theme', themeName);
    
    // Dispatch theme change event
    window.dispatchEvent(new CustomEvent('themechange', { 
      detail: { theme: themeName, tokens: themes[themeName] }
    }));
  }

  /**
   * Toggle between light and dark themes
   */
  public toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  /**
   * Get the current theme name
   */
  public getCurrentTheme(): ThemeName {
    return this.currentTheme;
  }

  /**
   * Get the current theme tokens
   */
  public getCurrentTokens(): ThemeTokens {
    return themes[this.currentTheme];
  }

  /**
   * Apply theme tokens as CSS custom properties
   */
  private applyThemeToDOM(themeTokens: ThemeTokens): void {
    const style = this.rootElement.style;
    
    // Intent tokens
    style.setProperty('--nhs-intent-primary', themeTokens.intent.primary);
    style.setProperty('--nhs-intent-secondary', themeTokens.intent.secondary);
    style.setProperty('--nhs-intent-warning', themeTokens.intent.warning);
    style.setProperty('--nhs-intent-success', themeTokens.intent.success);
    style.setProperty('--nhs-intent-neutral', themeTokens.intent.neutral);
    style.setProperty('--nhs-intent-info', themeTokens.intent.info);

    // Surface background tokens
    style.setProperty('--nhs-surface-bg-primary', themeTokens.surface.background.primary);
    style.setProperty('--nhs-surface-bg-secondary', themeTokens.surface.background.secondary);
    style.setProperty('--nhs-surface-bg-elevated', themeTokens.surface.background.elevated);

    // Surface text tokens
    style.setProperty('--nhs-surface-text-primary', themeTokens.surface.text.primary);
    style.setProperty('--nhs-surface-text-secondary', themeTokens.surface.text.secondary);
    style.setProperty('--nhs-surface-text-tertiary', themeTokens.surface.text.tertiary);
    style.setProperty('--nhs-surface-text-inverse', themeTokens.surface.text.inverse);

    // Surface border tokens
    style.setProperty('--nhs-surface-border-default', themeTokens.surface.border.default);
    style.setProperty('--nhs-surface-border-subtle', themeTokens.surface.border.subtle);
    style.setProperty('--nhs-surface-border-strong', themeTokens.surface.border.strong);
  }

  /**
   * Get a token value for the current theme
   */
  public getToken(path: string): string | undefined {
    const pathParts = path.split('.');
    let current: any = this.getCurrentTokens();
    
    for (const part of pathParts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        return undefined;
      }
    }
    
    return typeof current === 'string' ? current : undefined;
  }

  /**
   * Create a themed component style object
   */
  public createThemedStyles(styleMap: Record<string, string>): Record<string, string> {
    const themedStyles: Record<string, string> = {};
    
    for (const [property, tokenPath] of Object.entries(styleMap)) {
      const tokenValue = this.getToken(tokenPath);
      if (tokenValue) {
        themedStyles[property] = tokenValue;
      }
    }
    
    return themedStyles;
  }
}

// Export singleton instance for convenience
export const themeManager = new ThemeManager();

// React hook for theme integration
export function useTheme() {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeName>(themeManager.getCurrentTheme());
  
  React.useEffect(() => {
    const handleThemeChange = (event: CustomEvent) => {
      setCurrentTheme(event.detail.theme);
    };
    
    window.addEventListener('themechange', handleThemeChange as EventListener);
    return () => window.removeEventListener('themechange', handleThemeChange as EventListener);
  }, []);

  return {
    theme: currentTheme,
    tokens: themes[currentTheme],
    setTheme: themeManager.setTheme.bind(themeManager),
    toggleTheme: themeManager.toggleTheme.bind(themeManager),
    getToken: themeManager.getToken.bind(themeManager)
  };
}

export default themeManager;
