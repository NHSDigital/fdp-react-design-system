import * as React from "react";

export interface WorkflowStep<ID = string> {
	id: ID;
	label: string;
	description?: string;
	icon?: React.ReactNode;
	/**
	 * Optional ordered sections within this step. When provided, the component can
	 * show a per-step secondary navigation (right pane) and render sectioned content.
	 * If not provided, the step is treated as a single-content step as today.
	 */
	sections?: WorkflowSection<ID>[];
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
	renderStepContent: (step: T | undefined, section?: WorkflowSection<ID>) => React.ReactNode; // main content pane (optionally receives the active section)
	renderSecondaryContent?: (step: T | undefined, section?: WorkflowSection<ID>) => React.ReactNode; // optional tertiary pane
	renderSecondaryNav?: (step: T | undefined, sections?: WorkflowSection<ID>[], activeSection?: WorkflowSection<ID>, onSelectSection?: (sectionId: ID) => void) => React.ReactNode; // optional per-step secondary nav UI; if omitted and step.sections exist, a default minimal nav may be rendered by the component

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

	// Section selection (controlled/uncontrolled)
	/**
	 * Controlled: the id of the current section for the active step.
	 * If omitted, the component may manage section state internally per step using
	 * defaultSectionIdForStep or the first section as a fallback.
	 */
	currentSectionId?: ID;
	/**
	 * Uncontrolled default selector: given a step, return the default section id.
	 * If not provided, the first section is used when available.
	 */
	defaultSectionIdForStep?: (step: T) => ID | undefined;
	/**
	 * Notifies when the active section changes within the current step.
	 */
	onSectionChange?: (sectionId: ID, section: WorkflowSection<ID> | undefined, step: T | undefined) => void;

	// Behaviour & appearance
	className?: string;
	getId?: (step: T) => ID;
	animated?: boolean;
	collapsiblePrimaryNav?: boolean;
	navInitiallyCollapsed?: boolean;
	onPrimaryNavCollapseChange?: (collapsed: boolean) => void;

	/**
	 * Optional predicate provided by consumers to declare whether the current step is complete.
	 * When provided, the component can use this to influence mobile/tablet controls visibility
	 * or disabled state. It is not used to block programmatic navigation.
	 */
	isStepComplete?: (step: T | undefined) => boolean;
	/**
	 * Optional override to control whether the mobile top controls (Back/Next) are shown.
	 * If omitted, defaults to a function that returns isStepComplete?.(currentStep) when provided,
	 * otherwise true (always show controls).
	 */
	showMobileControls?: (step: T | undefined) => boolean;

	/**
	 * Opt-in: render the grid layout on tablet breakpoints (medium) instead of the mobile sliding pattern.
	 * Defaults to false to preserve existing behavior. When true, tablet behaves like desktop grid
	 * wherever paneConfig.panes > 1 for the current step.
	 */
	enableTabletGrid?: boolean;
}

/**
 * A section within a workflow step. IDs share the same type as step IDs for simplicity,
 * but can be a distinct type when using generics with a union, e.g., ID = string | number.
 */
export interface WorkflowSection<ID = string> {
	id: ID;
	label: string;
	description?: string;
	icon?: React.ReactNode;
	/**
	 * Optional hint or guidance content specific to this section.
	 * Consumers can render this in the content or secondary pane.
	 */
	guidance?: React.ReactNode;
}
