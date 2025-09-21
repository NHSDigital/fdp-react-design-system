import { NavigationSplitLayoutMode } from "../NavigationSplitView.types";
export declare function useEffectiveLayout(forceLayout: NavigationSplitLayoutMode | undefined, autoEnableThirdColumn: boolean, hasSecondary: boolean): {
    effectiveLayout: NavigationSplitLayoutMode;
    hydrated: boolean;
    isAtLeastMedium: boolean;
    isAtLeastXlarge: boolean;
};
