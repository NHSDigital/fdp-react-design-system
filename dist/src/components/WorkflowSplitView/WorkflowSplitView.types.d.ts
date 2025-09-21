import * as React from "react";
export interface WorkflowStep<ID = string> {
    id: ID;
    label: string;
    description?: string;
    icon?: React.ReactNode;
}
export type WorkflowBreakpoint = "mobile" | "tablet" | "desktop";
export interface WorkflowPaneConfig {
    panes?: 1 | 2 | 3;
    showPrimaryNav?: boolean;
    showSecondaryNav?: boolean;
}
export interface WorkflowSplitViewProps<ID = string, T extends WorkflowStep<ID> = WorkflowStep<ID>> {
    steps: T[];
    currentStepId?: ID;
    defaultStepId?: ID;
    onStepChange?: (id: ID, step: T) => void;
    renderStepCard?: (step: T) => React.ReactNode;
    renderStepContent: (step: T | undefined) => React.ReactNode;
    renderSecondaryContent?: (step: T | undefined) => React.ReactNode;
    renderSecondaryNav?: (step: T | undefined) => React.ReactNode;
    layoutForStep?: (args: {
        step: T;
        index: number;
        breakpoint: WorkflowBreakpoint;
    }) => WorkflowPaneConfig;
    renderBreadcrumbs?: (args: {
        steps: T[];
        current: T | undefined;
        onNavigate: (id: ID) => void;
    }) => React.ReactNode;
    className?: string;
    getId?: (step: T) => ID;
    animated?: boolean;
    collapsiblePrimaryNav?: boolean;
    navInitiallyCollapsed?: boolean;
    onPrimaryNavCollapseChange?: (collapsed: boolean) => void;
}
