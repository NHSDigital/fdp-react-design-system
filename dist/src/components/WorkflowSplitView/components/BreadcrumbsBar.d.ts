import * as React from "react";
import type { WorkflowStep } from "../WorkflowSplitView.types";
export type BreadcrumbsBarProps<T> = {
    steps: WorkflowStep<T>[];
    currentIndex: number;
    onNavigate?: (index: number) => void;
    renderLabel?: (step: WorkflowStep<T>, index: number) => React.ReactNode;
    ariaLabel?: string;
    className?: string;
};
export declare function BreadcrumbsBar<T>({ steps, currentIndex, onNavigate, renderLabel, ariaLabel, className, }: BreadcrumbsBarProps<T>): import("react/jsx-runtime").JSX.Element;
