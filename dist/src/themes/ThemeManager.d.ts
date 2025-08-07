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
export declare const lightTheme: ThemeTokens;
export declare const darkTheme: ThemeTokens;
export type ThemeName = 'light' | 'dark';
export declare const themes: Record<ThemeName, ThemeTokens>;
/**
 * Theme Manager class for handling dynamic theme switching
 */
export declare class ThemeManager {
    private currentTheme;
    private readonly rootElement;
    constructor(rootElement?: HTMLElement);
    /**
     * Initialize theme based on user preference or system preference
     */
    private initializeTheme;
    /**
     * Set the active theme
     */
    setTheme(themeName: ThemeName): void;
    /**
     * Toggle between light and dark themes
     */
    toggleTheme(): void;
    /**
     * Get the current theme name
     */
    getCurrentTheme(): ThemeName;
    /**
     * Get the current theme tokens
     */
    getCurrentTokens(): ThemeTokens;
    /**
     * Apply theme tokens as CSS custom properties
     */
    private applyThemeToDOM;
    /**
     * Get a token value for the current theme
     */
    getToken(path: string): string | undefined;
    /**
     * Create a themed component style object
     */
    createThemedStyles(styleMap: Record<string, string>): Record<string, string>;
}
export declare const themeManager: ThemeManager;
export declare function useTheme(): {
    theme: ThemeName;
    tokens: ThemeTokens;
    setTheme: (themeName: ThemeName) => void;
    toggleTheme: () => void;
    getToken: (path: string) => string | undefined;
};
export default themeManager;
