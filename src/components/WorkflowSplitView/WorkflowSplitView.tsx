import { useState } from "react";
import type {
	WorkflowPaneConfig,
	WorkflowSplitViewProps,
} from "./WorkflowSplitView.types";
import { BreadcrumbsBar } from "./components/BreadcrumbsBar";
import { CardsScroller } from "./components/CardsScroller";
import { useWorkflowLayout } from "./hooks/useWorkflowLayout";
import "./WorkflowSplitView.scss";
import { BackLink } from "../BackLink/BackLink";
import { ForwardLink } from "../BackLink/ForwardLink";
// Grid/Row/Column intentionally not used per request; layout uses component's own CSS grid

export function WorkflowSplitView<ID = string>(
	props: WorkflowSplitViewProps<ID>
) {
	const {
		steps,
		currentStepId,
		defaultStepId,
		onStepChange,
		layoutForStep,
		renderStepCard,
		renderStepContent,
		renderSecondaryContent,
		renderSecondaryNav,
		renderBreadcrumbs,
		className,
		getId = (s) => (s as any).id as ID,
	} = props;

	const [uncontrolledId, setUncontrolledId] = useState<ID | undefined>(
		defaultStepId ?? (steps[0] ? getId(steps[0] as any) : undefined)
	);
	const activeId: ID | undefined = currentStepId ?? uncontrolledId;
	const currentIndex = steps.findIndex((s) => getId(s as any) === activeId);
	const current = currentIndex >= 0 ? steps[currentIndex] : steps[0];

	const navigateTo = (id: ID) => {
		if (currentStepId === undefined) setUncontrolledId(id);
		const step = steps.find((s) => getId(s as any) === id);
		if (step && onStepChange) onStepChange(id, step as any);
	};

	const { hydrated, breakpoint, paneConfig } = useWorkflowLayout({
		step: current as any,
		index: currentIndex,
		layoutForStep: layoutForStep as any,
	});

	// Only show breadcrumbs on desktop; mobile and tablet use the simplified pattern
	const showBreadcrumbs = hydrated && breakpoint === "desktop";

	const breadcrumbs = renderBreadcrumbs ? (
		renderBreadcrumbs({ steps, current, onNavigate: navigateTo })
	) : (
		<BreadcrumbsBar
			steps={steps as any}
			currentIndex={Math.max(0, currentIndex)}
			onNavigate={(i) => navigateTo(getId(steps[i] as any))}
		/>
	);

	// Default primary nav (vertical list of steps)
	const PrimaryNav = () => (
		<ul className="nhsfdp-primary-nav" role="list">
			{steps.map((s, i) => {
				const id = getId(s as any);
				const isCurrent = i === currentIndex;
				return (
					<li key={String(id)}>
						<button
							type="button"
							className={
								"nhsfdp-primary-nav__item" + (isCurrent ? " is-current" : "")
							}
							aria-current={isCurrent ? "step" : undefined}
							onClick={() => navigateTo(id)}
						>
							{(s as any).label}
						</button>
					</li>
				);
			})}
		</ul>
	);

	// Render helpers
	const renderMobile = () => {
		const idx = Math.max(0, currentIndex);
		const hasPrev = idx > 0;
		const hasNext = idx < steps.length - 1;
		return (
			<div className="nhsfdp-workflow-mobile">
				{/* On tablet, show breadcrumbs above the mobile controls; keep hidden on mobile */}
				{breakpoint === "tablet" ? breadcrumbs : null}
				<div className="nhsfdp-mobile-controls" aria-label="Step navigation">
					{hasPrev ? (
						<BackLink
							element="button"
							text="Back"
							onClick={() => navigateTo(getId(steps[idx - 1] as any))}
						/>
					) : (
						// Keep space to avoid layout shift when back is not available
						<BackLink element="button" text="Back" aria-hidden="true" style={{ visibility: "hidden" }} />
					)}
					{hasNext ? (
						<ForwardLink
							element="button"
							text="Next"
							onClick={() => navigateTo(getId(steps[idx + 1] as any))}
						/>
					) : (
						// Keep space to avoid layout shift when next is not available
						<ForwardLink element="button" text="Next" aria-hidden="true" style={{ visibility: "hidden" }} />
					)}
				</div>
				<CardsScroller
					steps={steps as any}
					currentIndex={idx}
					onNavigate={(i) => navigateTo(getId(steps[i] as any))}
					renderCard={(s) =>
						renderStepCard
							? renderStepCard(s as any)
							: renderStepContent(s as any)
					}
				/>
			</div>
		);
	};

	const renderTabletDesktop = (cfg: WorkflowPaneConfig) => (
		<div className={"nhsfdp-workflow-grid panes-" + (cfg.panes ?? 2)}>
			<div className="nhsfdp-workflow-body">
				{cfg.showPrimaryNav && (
					<aside
						className="nhsfdp-pane primary-nav"
						aria-label="Primary navigation"
					>
						<PrimaryNav />
					</aside>
				)}
				<main className="nhsfdp-pane content" aria-live="polite">
					{showBreadcrumbs ? breadcrumbs : null}
					{renderStepContent(current as any)}
				</main>
				{cfg.showSecondaryNav &&
					(renderSecondaryNav || renderSecondaryContent) && (
						<aside
							className="nhsfdp-pane secondary-nav"
							aria-label="Secondary navigation"
						>
							{renderSecondaryNav?.(current as any)}
							{renderSecondaryContent?.(current as any)}
						</aside>
					)}
			</div>
		</div>
	);

	if (!hydrated) {
		// SSR-safe: render a minimal single-pane structure
		return (
			<div className={"nhsfdp-workflow " + (className ?? "")}>
				<div className="nhsfdp-workflow-body">
					<main className="nhsfdp-pane content">
						{/* If a custom breadcrumbs renderer is provided, include it server-side */}
						{renderBreadcrumbs
							? renderBreadcrumbs({ steps, current, onNavigate: navigateTo })
							: null}
						{current ? renderStepContent(current as any) : null}
					</main>
				</div>
			</div>
		);
	}

	// Use the mobile sliding-panels pattern for both mobile and tablet breakpoints,
	// and also when a step explicitly declares a single pane.
	if (breakpoint === "mobile" || breakpoint === "tablet" || (paneConfig.panes ?? 1) === 1) {
		return (
			<div className={"nhsfdp-workflow " + (className ?? "")}>
				{renderMobile()}
			</div>
		);
	}

	return (
		<div className={"nhsfdp-workflow " + (className ?? "")}>
			{renderTabletDesktop(paneConfig)}
		</div>
	);
}

export default WorkflowSplitView;
