import * as React from "react";

export interface WorkflowStep<ID = string> {
	id: ID;
	label: string;
	description?: string;
	icon?: React.ReactNode;
}

export type WorkflowBreakpoint = "mobile" | "tablet" | "desktop";

export interface WorkflowPaneConfig {
	panes?: 1 | 2 | 3; // how many panes visible overall (content is always one of them)
	showPrimaryNav?: boolean; // left nav (steps)
	showSecondaryNav?: boolean; // right-side secondary nav (per-step subsections)
}

export interface WorkflowSplitViewProps<
	ID = string,
	T extends WorkflowStep<ID> = WorkflowStep<ID>,
> {
	steps: T[];
	currentStepId?: ID;
	defaultStepId?: ID;
	onStepChange?: (id: ID, step: T) => void;

	// Renderers
	renderStepCard?: (step: T) => React.ReactNode; // mobile cards scroller
	renderStepContent: (step: T | undefined) => React.ReactNode; // main content pane
	renderSecondaryContent?: (step: T | undefined) => React.ReactNode; // optional tertiary pane
	renderSecondaryNav?: (step: T | undefined) => React.ReactNode; // optional per-step secondary nav UI

	// Layout control per step per breakpoint
	layoutForStep?: (args: {
		step: T;
		index: number;
		breakpoint: WorkflowBreakpoint;
	}) => WorkflowPaneConfig;

	// Breadcrumbs
	renderBreadcrumbs?: (args: {
		steps: T[];
		current: T | undefined;
		onNavigate: (id: ID) => void;
	}) => React.ReactNode;

	// Behaviour & appearance
	className?: string;
	getId?: (step: T) => ID;
	animated?: boolean;
	collapsiblePrimaryNav?: boolean;
	navInitiallyCollapsed?: boolean;
	onPrimaryNavCollapseChange?: (collapsed: boolean) => void;
}
