import { AssuranceResult } from "./SPCConstants";
export interface AssuranceIconProps {
    status: AssuranceResult;
    size?: number;
    ariaLabel?: string;
    dropShadow?: boolean;
    /** When true apply a diagonal colour wash instead of solid white interior */
    gradientWash?: boolean;
    colourOverride?: string;
    letterOverride?: string;
    showTrendLines?: boolean;
    "data-testid"?: string;
}
export declare const SPCAssuranceIcon: {
    ({ status, size, ariaLabel, dropShadow, colourOverride, gradientWash, letterOverride, showTrendLines, ...rest }: AssuranceIconProps & Record<string, unknown>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
