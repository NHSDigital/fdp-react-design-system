import * as React from "react";
import type { WorkflowStep } from "../WorkflowSplitView.types";
export type CardsScrollerProps<T> = {
    steps: WorkflowStep<T>[];
    currentIndex: number;
    onNavigate?: (index: number) => void;
    renderCard: (step: WorkflowStep<T>, index: number, isCurrent: boolean) => React.ReactNode;
    className?: string;
    ariaLabel?: string;
};
export declare function CardsScroller<T>({ steps, currentIndex, onNavigate, renderCard, className, ariaLabel, }: CardsScrollerProps<T>): import("react/jsx-runtime").JSX.Element;
