import type { WorkflowBreakpoint, WorkflowPaneConfig } from "../WorkflowSplitView.types";
export declare function useWorkflowLayout<T>(args: {
    step: T | undefined;
    index: number;
    layoutForStep?: (a: {
        step: T;
        index: number;
        breakpoint: WorkflowBreakpoint;
    }) => WorkflowPaneConfig;
}): {
    hydrated: boolean;
    breakpoint: WorkflowBreakpoint;
    isTablet: boolean;
    isDesktop: boolean;
    paneConfig: WorkflowPaneConfig;
};
