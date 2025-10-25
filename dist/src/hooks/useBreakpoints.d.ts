/**
 * NHS FDP breakpoint map (keep in sync with SCSS tokens)
 * Consider future auto-generation from design tokens.
 */
export declare const NHS_FDP_BREAKPOINTS: Readonly<{
    small: 320;
    smallMax: 767;
    medium: 768;
    large: 1025;
    xlarge: 1200;
    xxlarge: 1440;
}>;
export type BreakpointKey = keyof typeof NHS_FDP_BREAKPOINTS;
/**
 * Hook returning live breakpoint matches and helpers.
 */
export declare function useNhsFdpBreakpoints(): {
    width: number;
    up: (key: BreakpointKey) => boolean;
    down: (key: BreakpointKey) => boolean;
    between: (min: BreakpointKey, max: BreakpointKey) => boolean;
    /** Raw numeric values */
    values: Readonly<{
        small: 320;
        smallMax: 767;
        medium: 768;
        large: 1025;
        xlarge: 1200;
        xxlarge: 1440;
    }>;
};
/**
 * Convenience hook to choose a layout value based on breakpoints.
 * Provide an ordered array of [minWidth,value] pairs or an object keyed by breakpoint.
 */
export declare function useResponsiveValue<T>(map: {
    base: T;
} & Partial<Record<BreakpointKey, T>>): T;
