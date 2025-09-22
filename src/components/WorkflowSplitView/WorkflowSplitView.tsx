import { useCallback, useEffect, useRef, useState } from "react";
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

	// Determine if a specific view is preselected by the consumer
	// If so, on desktop we want to start in "nav" focus mode with the current item focused
	const preselectedView =
		currentStepId !== undefined ||
		(defaultStepId !== undefined && steps.length > 0 && defaultStepId !== getId(steps[0] as any));

	// --- Keyboard navigation (desktop grid) ---
	const rootRef = useRef<HTMLDivElement | null>(null);
	const navPaneRef = useRef<HTMLElement | null>(null);
	const contentPaneRef = useRef<HTMLElement | null>(null);
	const secondaryPaneRef = useRef<HTMLElement | null>(null);
	const navListRef = useRef<HTMLUListElement | null>(null);

	const [paneFocusMode, setPaneFocusMode] = useState<
		"containers" | "nav" | "content" | "secondary"
	>("nav");
	const [containerIndex, setContainerIndex] = useState(0); // 0=nav,1=content,2=secondary
	const [navFocusedIndex, setNavFocusedIndex] = useState(() =>
		Math.max(0, currentIndex)
	);

	const focusEl = useCallback((el?: HTMLElement | null) => {
		if (!el) return;
		try {
			(el as any).focus({ preventScroll: true });
		} catch {
			el.focus();
		}
	}, []);

	const getFocusableElements = useCallback((root: HTMLElement | null) => {
		if (!root) return [] as HTMLElement[];
		const selector =
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
		return Array.from(root.querySelectorAll<HTMLElement>(selector)).filter(
			(el) => !el.hasAttribute("disabled") && el.tabIndex !== -1
		);
	}, []);

	const getPaneOrder = () =>
		[
			navPaneRef.current as HTMLElement | null,
			contentPaneRef.current as HTMLElement | null,
			secondaryPaneRef.current as HTMLElement | null,
		].filter(Boolean) as HTMLElement[];

	const focusContainerByIndex = (idx: number) => {
		const order = getPaneOrder();
		const clamped = Math.max(0, Math.min(idx, order.length - 1));
		focusEl(order[clamped]);
		setContainerIndex(clamped);
	};

	// Enter containers mode by default on desktop, unless a preselected view is provided.
	useEffect(() => {
		if (!hydrated) return;
		if (breakpoint === "desktop") {
			if (preselectedView) {
				setPaneFocusMode("nav");
				setContainerIndex(0);
				// Focus current nav item once the list is available
				setTimeout(() => {
					const nodes = navListRef.current
						? (Array.from(
								navListRef.current.querySelectorAll("[data-nav-item]")
						  ) as HTMLElement[])
						: [];
					const idx = Math.max(0, currentIndex);
					(nodes[idx] || nodes[0])?.focus();
				}, 0);
			} else {
				setPaneFocusMode("containers");
				setContainerIndex(0);
			}
		} else {
			setPaneFocusMode("nav");
		}
	}, [hydrated, breakpoint, preselectedView, currentIndex]);

	// Keep navFocusedIndex in sync with the selected step
	useEffect(() => {
		const idx = Math.max(0, currentIndex);
		setNavFocusedIndex(idx);
	}, [currentIndex]);

	const onRootKeyDown = (e: React.KeyboardEvent) => {
		if (!(hydrated && breakpoint === "desktop")) return; // desktop grid only
		const key = e.key;
		const target = e.target as HTMLElement;
		const inNav = !!navListRef.current && navListRef.current.contains(target);
		const inContent = !!contentPaneRef.current && contentPaneRef.current.contains(target);
		const inSecondary = !!secondaryPaneRef.current && secondaryPaneRef.current.contains(target);
		const isContainer =
			target === navPaneRef.current ||
			target === contentPaneRef.current ||
			target === secondaryPaneRef.current;
		const hasSecondary = !!secondaryPaneRef.current;

		// Container focus model
		if (paneFocusMode === "containers" && isContainer) {
			if (key === "ArrowRight") {
				e.preventDefault();
				focusContainerByIndex(containerIndex + 1);
				return;
			}
			if (key === "ArrowLeft") {
				e.preventDefault();
				focusContainerByIndex(containerIndex - 1);
				return;
			}
			if (key === "Home") {
				e.preventDefault();
				focusContainerByIndex(0);
				return;
			}
			if (key === "End") {
				e.preventDefault();
				focusContainerByIndex(getPaneOrder().length - 1);
				return;
			}
			if (key === "Enter" || key === " ") {
				e.preventDefault();
				if (target === navPaneRef.current) {
					setPaneFocusMode("nav");
					// focus current nav item
					const nodes = navListRef.current
						? (Array.from(
								navListRef.current.querySelectorAll("[data-nav-item]")
						  ) as HTMLElement[])
						: [];
					(nodes[navFocusedIndex] || nodes[0])?.focus();
				} else if (target === contentPaneRef.current) {
					setPaneFocusMode("content");
					const els = getFocusableElements(contentPaneRef.current);
					(els[0] || contentPaneRef.current)?.focus();
				} else if (target === secondaryPaneRef.current) {
					setPaneFocusMode("secondary");
					const els = getFocusableElements(secondaryPaneRef.current);
					(els[0] || secondaryPaneRef.current)?.focus();
				}
				return;
			}
		}

		// Escape: return to nav list
		if (key === "Escape") {
			if (inContent || inSecondary || isContainer) {
				e.preventDefault();
				setPaneFocusMode("nav");
				const nodes = navListRef.current
					? (Array.from(
							navListRef.current.querySelectorAll("[data-nav-item]")
					  ) as HTMLElement[])
					: [];
				const candidate = nodes[navFocusedIndex] || nodes[0];
				setTimeout(() => focusEl(candidate), 10);
			}
			return;
		}

		// Enter content/secondary when focused on their containers (even outside containers mode)
		if (key === "Enter" || key === " ") {
			if (target === contentPaneRef.current && paneFocusMode === "content") {
				e.preventDefault();
				const els = getFocusableElements(contentPaneRef.current);
				(els[0] || contentPaneRef.current)?.focus();
				return;
			}
			if (target === secondaryPaneRef.current && paneFocusMode === "secondary") {
				e.preventDefault();
				const els = getFocusableElements(secondaryPaneRef.current);
				(els[0] || secondaryPaneRef.current)?.focus();
				return;
			}
		}

		// Move between containers with Left/Right from within lists/panes
		if (key === "ArrowRight") {
			if (inNav || paneFocusMode === "nav") {
				e.preventDefault();
				setPaneFocusMode("content");
				setTimeout(() => focusEl(contentPaneRef.current), 10);
				return;
			}
			if (inContent || paneFocusMode === "content") {
				if (hasSecondary) {
					e.preventDefault();
					setPaneFocusMode("secondary");
					setTimeout(() => focusEl(secondaryPaneRef.current), 10);
				}
				return;
			}
		}
		if (key === "ArrowLeft") {
			if (inSecondary || paneFocusMode === "secondary") {
				e.preventDefault();
				setPaneFocusMode("content");
				setTimeout(() => focusEl(contentPaneRef.current), 10);
				return;
			}
			if (inContent || paneFocusMode === "content") {
				e.preventDefault();
				setPaneFocusMode("nav");
				const nodes = navListRef.current
					? (Array.from(
							navListRef.current.querySelectorAll("[data-nav-item]")
					  ) as HTMLElement[])
					: [];
				const candidate = nodes[navFocusedIndex] || nodes[0];
				setTimeout(() => focusEl(candidate), 10);
				return;
			}
		}

		// Home/End shortcuts globally: jump to first/last pane container
		if (key === "Home") {
			e.preventDefault();
			setPaneFocusMode("containers");
			focusContainerByIndex(0);
			return;
		}
		if (key === "End") {
			e.preventDefault();
			setPaneFocusMode("containers");
			focusContainerByIndex(getPaneOrder().length - 1);
			return;
		}
	};

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

	// Default primary nav with keyboard navigation (Up/Down + Enter)
	const PrimaryNav = () => {
		const onKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
			const nodes = navListRef.current
				? (Array.from(navListRef.current.querySelectorAll("[data-nav-item]")) as HTMLElement[])
				: [];
			if (!nodes.length) return;
			if (e.key === "ArrowDown") {
				e.preventDefault();
				setPaneFocusMode("nav");
				setNavFocusedIndex((i) => {
					const next = Math.min(nodes.length - 1, i + 1);
					setTimeout(() => nodes[next]?.focus(), 0);
					return next;
				});
			} else if (e.key === "ArrowUp") {
				e.preventDefault();
				setPaneFocusMode("nav");
				setNavFocusedIndex((i) => {
					const prev = Math.max(0, i - 1);
					setTimeout(() => nodes[prev]?.focus(), 0);
					return prev;
				});
			} else if (e.key === "Home") {
				e.preventDefault();
				setNavFocusedIndex(0);
				setTimeout(() => nodes[0]?.focus(), 0);
			} else if (e.key === "End") {
				e.preventDefault();
				const last = nodes.length - 1;
				setNavFocusedIndex(last);
				setTimeout(() => nodes[last]?.focus(), 0);
			} else if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				const idx = navFocusedIndex;
				const step = steps[idx];
				if (step) {
					navigateTo(getId(step as any));
					// After selection, move to content pane container
					setPaneFocusMode("content");
					setTimeout(() => focusEl(contentPaneRef.current), 10);
				}
			}
		};

		return (
			<ul
				ref={navListRef}
				className="nhsfdp-primary-nav"
				role="listbox"
				aria-activedescendant={String(getId(steps[Math.max(0, navFocusedIndex)] as any))}
				onKeyDown={onKeyDown}
			>
				{steps.map((s, i) => {
					const id = getId(s as any);
					const isCurrent = i === currentIndex;
					const focused = i === navFocusedIndex;
					return (
						<li id={String(id)} key={String(id)} role="option" aria-selected={isCurrent}>
							<button
								data-nav-item
								tabIndex={focused ? 0 : -1}
								type="button"
								className={
									"nhsfdp-primary-nav__item" + (isCurrent ? " is-current" : "")
								}
								aria-current={isCurrent ? "step" : undefined}
								onClick={() => {
									setNavFocusedIndex(i);
									navigateTo(id);
								}}
							>
								{(s as any).label}
							</button>
						</li>
					);
				})}
			</ul>
		);
	};

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
		<div
			className={"nhsfdp-workflow-grid panes-" + (cfg.panes ?? 2)}
			onKeyDown={onRootKeyDown}
			ref={rootRef}
		>
			<div className="nhsfdp-workflow-body">
				{cfg.showPrimaryNav && (
					<aside
						ref={navPaneRef as any}
						className="nhsfdp-pane primary-nav"
						aria-label="Primary navigation"
						tabIndex={0}
					>
						<PrimaryNav />
					</aside>
				)}
				<main
					ref={contentPaneRef as any}
					className="nhsfdp-pane content"
					aria-live="polite"
					tabIndex={0}
				>
					{showBreadcrumbs ? breadcrumbs : null}
					{renderStepContent(current as any)}
				</main>
				{cfg.showSecondaryNav &&
					(renderSecondaryNav || renderSecondaryContent) && (
						<aside
							ref={secondaryPaneRef as any}
							className="nhsfdp-pane secondary-nav"
							aria-label="Secondary navigation"
							tabIndex={0}
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
