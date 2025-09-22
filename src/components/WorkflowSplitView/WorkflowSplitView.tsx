import { useCallback, useEffect, useRef, useState } from "react";
import type {
	WorkflowPaneConfig,
	WorkflowSplitViewProps,
} from "./WorkflowSplitView.types";
import { CardsScroller } from "./components/CardsScroller";
import { BreadcrumbsBar } from "./components/BreadcrumbsBar";
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

	// --- Debug logging ---
	// Toggle at runtime in dev tools with: window.__WSV_DEBUG_FOCUS = true/false
	const DEBUG_FOCUS: boolean =
		(typeof window !== "undefined" && !!(window as any).__WSV_DEBUG_FOCUS) || false;
	const dlog = (...args: any[]) => {
		if (DEBUG_FOCUS) {
			console.log("[WorkflowSplitView]", ...args);
		}
	};
	const focusSummary = () => {
		if (typeof document === "undefined") return {} as any;
		const ae = document.activeElement as HTMLElement | null;
		const role = ae?.getAttribute?.("role");
		return {
			activeTag: ae?.tagName,
			activeId: ae?.id,
			activeRole: role,
			activeClasses: ae?.className,
		};
	};

	const [uncontrolledId, setUncontrolledId] = useState<ID | undefined>(
		defaultStepId ?? (steps[0] ? getId(steps[0] as any) : undefined)
	);
	const activeId: ID | undefined = currentStepId ?? uncontrolledId;
	const currentIndex = steps.findIndex((s) => getId(s as any) === activeId);
	const current = currentIndex >= 0 ? steps[currentIndex] : steps[0];

	const navigateTo = (id: ID) => {
		dlog("navigateTo", String(id));
		if (currentStepId === undefined) setUncontrolledId(id);
		const step = steps.find((s) => getId(s as any) === id);
		if (step && onStepChange) onStepChange(id, step as any);
	};

	// Precompute breadcrumbs element (if provided) and a visibility flag
	const breadcrumbs = renderBreadcrumbs
		? renderBreadcrumbs({ steps, current, onNavigate: navigateTo })
		: (
			<BreadcrumbsBar
				steps={steps as any}
				currentIndex={Math.max(0, currentIndex)}
				onNavigate={(index) => navigateTo(getId(steps[index] as any))}
			/>
		);
	const showBreadcrumbs = true;

    // selection handled via navigateTo()

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
	const navActiveButtonIndexRef = useRef<number>(0);
	const ignoreNextClickRef = useRef(false);
	const ignoreNextNavItemActivationRef = useRef(false);
	const navBootstrapTimeoutRef = useRef<number | null>(null);

	const [paneFocusMode, setPaneFocusMode] = useState<
		"containers" | "nav" | "content" | "secondary"
	>("nav");
	const paneFocusModeRef = useRef<"containers" | "nav" | "content" | "secondary">("nav");
	useEffect(() => {
		paneFocusModeRef.current = paneFocusMode;
	}, [paneFocusMode]);
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
		dlog("focusEl", { to: el.tagName, id: (el as HTMLElement).id, class: (el as HTMLElement).className });
	}, []);

	// More robust content focusing: do it now and once more after paint
	const focusContentSoon = useCallback(() => {
		const target = () => contentPaneRef.current;
		let attempts = 0;
		const tick = () => {
			const el = target();
			if (el && document.activeElement !== el) {
				focusEl(el);
			}
			attempts += 1;
			if (attempts < 6 && document.activeElement !== target()) {
				setTimeout(tick, 0);
			}
		};
		// immediate and scheduled attempts
		dlog("focusContentSoon:start", { attempts });
		tick();
		if (typeof queueMicrotask === "function") queueMicrotask(tick);
		requestAnimationFrame(tick);
	}, [focusEl]);

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

	// Blur activeElement if it's inside the given root
	const blurActiveIfInside = (root: HTMLElement | null | undefined, label?: string) => {
		if (!root) return;
		const ae = (typeof document !== "undefined" ? (document.activeElement as HTMLElement | null) : null);
		if (ae && root.contains(ae)) {
			try {
				ae.blur();
				dlog("blurActiveIfInside", { label, root: root.getAttribute("aria-label") || root.tagName });
			} catch {}
		}
	};

	// Blur current focus if it's within the primary nav to avoid bouncing back after activation
	const blurActiveIfInNav = () => {
		const ae = (typeof document !== "undefined" ? (document.activeElement as HTMLElement | null) : null);
		if (ae && navPaneRef.current && navPaneRef.current.contains(ae)) {
			try {
				ae.blur();
				dlog("blurActiveIfInNav: blurred active element inside nav");
			} catch {}
		}
	};

	const focusContainerByIndex = (idx: number) => {
		const order = getPaneOrder();
		const clamped = Math.max(0, Math.min(idx, order.length - 1));
		dlog("focusContainerByIndex", { idx, clamped });
		focusEl(order[clamped]);
		setContainerIndex(clamped);
	};

	// Robustly focus a nav item button by index (defaults to current navFocusedIndex)
	const focusNavItemSoon = useCallback(
		(index?: number) => {
			let attempts = 0;
			const pickIndex = index ?? navFocusedIndex;
			const target = () => {
				const list = navListRef.current;
				if (!list) return null as HTMLElement | null;
				const nodes = Array.from(list.querySelectorAll<HTMLElement>("[data-nav-item]"));
				return nodes[pickIndex] || nodes[0] || null;
			};
			const tick = () => {
				// If we've moved out of nav mode, abort any further focusing of nav items
				if (paneFocusModeRef.current !== "nav") {
					dlog("focusNavItemSoon: abort (mode changed)", { mode: paneFocusModeRef.current });
					return;
				}
				const el = target();
				if (el && document.activeElement !== el) {
					focusEl(el);
				}
				attempts += 1;
				if (attempts < 6 && document.activeElement !== el) {
					setTimeout(tick, 0);
				}
			};
			dlog("focusNavItemSoon:start", { index: pickIndex, ...focusSummary() });
			tick();
			if (typeof queueMicrotask === "function") queueMicrotask(tick);
			requestAnimationFrame(tick);
		},
		[focusEl, navFocusedIndex]
	);

	// Enter containers mode by default on desktop, unless a preselected view is provided.
	useEffect(() => {
		if (!hydrated) return;
		if (breakpoint === "desktop") {
			if (preselectedView) {
				setPaneFocusMode("nav");
				setContainerIndex(0);
				// Do not auto-focus a nav item; avoid stealing focus during early user interaction
				dlog("init: desktop preselected → mode=nav", { containerIndex: 0 });
			} else {
				setPaneFocusMode("containers");
				setContainerIndex(0);
				dlog("init: desktop default → mode=containers", { containerIndex: 0 });
			}
		} else {
			setPaneFocusMode("nav");
			dlog("init: non-desktop → mode=nav");
		}
	}, [hydrated, breakpoint, preselectedView]);

	// Clear any pending nav bootstrapping on unmount
	useEffect(() => {
		return () => {
			if (navBootstrapTimeoutRef.current != null) {
				clearTimeout(navBootstrapTimeoutRef.current);
				navBootstrapTimeoutRef.current = null;
				dlog("cleanup: cleared nav bootstrap timeout");
			}
		};
	}, []);

	// Keep navFocusedIndex in sync with the selected step
	useEffect(() => {
		const idx = Math.max(0, currentIndex);
		setNavFocusedIndex(idx);
		dlog("sync navFocusedIndex with currentIndex", { currentIndex, navFocusedIndex: idx });
	}, [currentIndex]);

	// Log paneFocusMode transitions
	useEffect(() => {
		dlog("paneFocusMode →", paneFocusMode, focusSummary());
	}, [paneFocusMode]);

	const onRootKeyDown = (e: React.KeyboardEvent) => {
		if (!(hydrated && breakpoint === "desktop")) return; // desktop grid only
		const key = e.key;
		const target = e.target as HTMLElement;
		// Editable field guard: ignore arrow/home/end inside text inputs, textareas, selects, or contenteditable
		const tag = target.tagName.toLowerCase();
		const isEditableTag = tag === "input" || tag === "textarea" || tag === "select";
		const role = target.getAttribute("role");
		const isAriaTextbox = role === "textbox" || role === "searchbox" || role === "combobox";
		const contentEditable = target.getAttribute("contenteditable");
		const isEditable = isEditableTag || isAriaTextbox || (contentEditable && contentEditable !== "false");
		dlog("onRootKeyDown", { key, tag, role, isEditable, paneFocusMode, containerIndex, ...focusSummary() });
		if (isEditable && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(key)) {
			return; // let native behavior proceed
		}
		const inNav = !!navListRef.current && navListRef.current.contains(target);
		const inContent = !!contentPaneRef.current && contentPaneRef.current.contains(target);
		const inSecondary = !!secondaryPaneRef.current && secondaryPaneRef.current.contains(target);
		const isContainer = target === navPaneRef.current || target === contentPaneRef.current || target === secondaryPaneRef.current;
		const hasSecondary = !!secondaryPaneRef.current;

		// Container focus model: when a pane container itself has focus, allow roving
		if (isContainer) {
			// First handle special-cases that also update paneFocusMode for correct ring styling
			if (key === "ArrowLeft" && target === contentPaneRef.current) {
				// From content container directly to the active nav item
				e.preventDefault();
				dlog("container: ArrowLeft on content container → nav item");
				setPaneFocusMode("nav");
				blurActiveIfInside(contentPaneRef.current, "from-content");
				navActiveButtonIndexRef.current = navFocusedIndex;
				focusNavItemSoon(navFocusedIndex);
				return;
			}
			if (key === "ArrowRight" && target === navPaneRef.current) {
				// From nav container to content container
				e.preventDefault();
				dlog("container: ArrowRight on nav container → content");
				setPaneFocusMode("content");
				blurActiveIfInside(navPaneRef.current, "from-nav");
				focusContentSoon();
				return;
			}
			if (key === "ArrowLeft" && target === secondaryPaneRef.current) {
				// From secondary container to content container
				e.preventDefault();
				dlog("container: ArrowLeft on secondary container → content");
				setPaneFocusMode("content");
				blurActiveIfInside(secondaryPaneRef.current, "from-secondary");
				focusContentSoon();
				return;
			}

			// Generic container roving (does not change mode)
			if (key === "ArrowRight") {
				e.preventDefault();
				dlog("container: ArrowRight → next container");
				blurActiveIfInside(target as HTMLElement, "container-roving");
				focusContainerByIndex(containerIndex + 1);
				return;
			}
			if (key === "ArrowLeft") {
				e.preventDefault();
				dlog("container: ArrowLeft → prev container");
				blurActiveIfInside(target as HTMLElement, "container-roving");
				focusContainerByIndex(containerIndex - 1);
				return;
			}
			if (key === "Home") {
				e.preventDefault();
				dlog("container: Home → first container");
				blurActiveIfInside(target as HTMLElement, "container-roving");
				focusContainerByIndex(0);
				return;
			}
			if (key === "End") {
				e.preventDefault();
				dlog("container: End → last container");
				blurActiveIfInside(target as HTMLElement, "container-roving");
				focusContainerByIndex(getPaneOrder().length - 1);
				return;
			}
			if (key === "Enter" || key === " ") {
				e.preventDefault();
				if (target === navPaneRef.current) {
					setPaneFocusMode("nav");
					dlog("container: Enter/Space on nav → focus nav item", { navFocusedIndex });
					navActiveButtonIndexRef.current = navFocusedIndex;
					ignoreNextNavItemActivationRef.current = true;
					ignoreNextClickRef.current = true;
					focusNavItemSoon(navFocusedIndex);
				} else if (target === contentPaneRef.current) {
					setPaneFocusMode("content");
					// Blur the content container before focusing its first child (descend)
					blurActiveIfInside(contentPaneRef.current, "descend-content");
					const els = getFocusableElements(contentPaneRef.current);
					dlog("container: Enter/Space on content → focus first focusable", { count: els.length });
					(els[0] || contentPaneRef.current)?.focus();
				} else if (target === secondaryPaneRef.current) {
					setPaneFocusMode("secondary");
					// Blur the secondary container before focusing its first child (descend)
					blurActiveIfInside(secondaryPaneRef.current, "descend-secondary");
					const els = getFocusableElements(secondaryPaneRef.current);
					dlog("container: Enter/Space on secondary → focus first focusable", { count: els.length });
					(els[0] || secondaryPaneRef.current)?.focus();
				}
				return;
			}
		}

		// Escape: ascend to the pane container (containers mode)
		if (key === "Escape") {
			if (inContent || inSecondary) {
				e.preventDefault();
				setPaneFocusMode("containers");
				dlog("Escape: from", inContent ? "content" : "secondary", "→ containers (focus container)");
				if (inContent) blurActiveIfInside(contentPaneRef.current, "escape-ascend");
				if (inSecondary) blurActiveIfInside(secondaryPaneRef.current, "escape-ascend");
				if (inContent) setTimeout(() => focusEl(contentPaneRef.current), 10);
				if (inSecondary) setTimeout(() => focusEl(secondaryPaneRef.current), 10);
				return;
			}
			if (inNav) {
				e.preventDefault();
				setPaneFocusMode("containers");
				dlog("Escape: from nav → containers (focus nav container)");
				blurActiveIfInNav();
				focusEl(navPaneRef.current);
				return;
			}
			if (isContainer) {
				e.preventDefault();
				setPaneFocusMode("containers");
				dlog("Escape: on container (stay in containers)");
				return; // keep focus on the container
			}
		}

		// Enter content/secondary when focused on their containers (even outside containers mode)
		if (key === "Enter" || key === " ") {
			if (target === contentPaneRef.current && paneFocusMode === "content") {
				e.preventDefault();
				blurActiveIfInside(contentPaneRef.current, "descend-content");
				const els = getFocusableElements(contentPaneRef.current);
				dlog("Enter/Space on content container in content mode");
				(els[0] || contentPaneRef.current)?.focus();
				return;
			}
			if (target === secondaryPaneRef.current && paneFocusMode === "secondary") {
				e.preventDefault();
				blurActiveIfInside(secondaryPaneRef.current, "descend-secondary");
				const els = getFocusableElements(secondaryPaneRef.current);
				dlog("Enter/Space on secondary container in secondary mode");
				(els[0] || secondaryPaneRef.current)?.focus();
				return;
			}
		}

		// Move between containers with Left/Right from within lists/panes
		if (key === "ArrowRight") {
			if (inNav || paneFocusMode === "nav") {
				e.preventDefault();
				setPaneFocusMode("content");
				dlog("ArrowRight: from nav → content (focus content)");
				blurActiveIfInside(navPaneRef.current, "from-nav");
				focusContentSoon();
				return;
			}
			if (inContent || paneFocusMode === "content") {
				if (hasSecondary) {
					e.preventDefault();
					setPaneFocusMode("secondary");
					dlog("ArrowRight: from content → secondary (focus secondary)");
					blurActiveIfInside(contentPaneRef.current, "from-content");
					setTimeout(() => focusEl(secondaryPaneRef.current), 10);
				}
				return;
			}
		}
		if (key === "ArrowLeft") {
			if (inSecondary || paneFocusMode === "secondary") {
				e.preventDefault();
				dlog("ArrowLeft: from secondary → content (focus content)");
				blurActiveIfInside(secondaryPaneRef.current, "from-secondary");
				focusContentSoon();
				return;
			}
			if (inContent || paneFocusMode === "content") {
				e.preventDefault();
				setPaneFocusMode("nav");
				dlog("ArrowLeft: from content → nav (focus nav item)", { navFocusedIndex });
				navActiveButtonIndexRef.current = navFocusedIndex;
				blurActiveIfInside(contentPaneRef.current, "from-content");
				focusNavItemSoon(navFocusedIndex);
				return;
			}
		}

		// Fallback: Activate current nav item on Enter/Space anywhere inside the nav pane
		if ((key === "Enter" || key === " ") && (inNav || paneFocusMode === "nav")) {
			e.preventDefault();
			const list = navListRef.current;
			const nodes = list ? (Array.from(list.querySelectorAll("[data-nav-item]")) as HTMLElement[]) : [];
			let idx = navActiveButtonIndexRef.current ?? navFocusedIndex;
			if (nodes.length) {
				const ae = document.activeElement as HTMLElement | null;
				const idxFromAe = ae ? nodes.indexOf(ae) : -1;
				if (idxFromAe >= 0) idx = idxFromAe;
			}
			idx = Math.max(0, Math.min(idx, nodes.length - 1));
			setNavFocusedIndex(idx);
			navActiveButtonIndexRef.current = idx;
			dlog("Root: Enter/Space activate from nav context", { idx });
			navigateTo(getId(steps[idx] as any));
			setPaneFocusMode("content");
			paneFocusModeRef.current = "content";
			ignoreNextClickRef.current = true;
			blurActiveIfInNav();
			focusContentSoon();
			return;
		}

		// NOTE: Home/End are handled when a pane container itself has focus (see isContainer block above).
		// Do not override Home/End within interactive regions like the nav listbox; preserve native/ARIA expected behavior there.
	};

	// PrimaryNav component encapsulating keyboard roving and activation
	const PrimaryNav = () => {
		const onKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
			if (!navListRef.current) return;
			const nodes = Array.from(navListRef.current.querySelectorAll<HTMLElement>("[data-nav-item]"));
			if (!nodes.length) return;
			if (e.key === "ArrowDown") {
				e.preventDefault();
				e.stopPropagation();
				ignoreNextNavItemActivationRef.current = false;
				setPaneFocusMode("nav");
				const base = navActiveButtonIndexRef.current ?? navFocusedIndex;
				const next = Math.min(nodes.length - 1, base + 1);
				setNavFocusedIndex(next);
				navActiveButtonIndexRef.current = next;
				focusNavItemSoon(next);
				dlog("PrimaryNav: ArrowDown", { from: base, to: next });
			} else if (e.key === "ArrowUp") {
				e.preventDefault();
				e.stopPropagation();
				ignoreNextNavItemActivationRef.current = false;
				setPaneFocusMode("nav");
				const base = navActiveButtonIndexRef.current ?? navFocusedIndex;
				const prev = Math.max(0, base - 1);
				setNavFocusedIndex(prev);
				navActiveButtonIndexRef.current = prev;
				focusNavItemSoon(prev);
				dlog("PrimaryNav: ArrowUp", { from: base, to: prev });
			} else if (e.key === "Home") {
				e.preventDefault();
				e.stopPropagation();
				ignoreNextNavItemActivationRef.current = false;
				const first = 0;
				setNavFocusedIndex(first);
				navActiveButtonIndexRef.current = first;
				focusNavItemSoon(first);
				dlog("PrimaryNav: Home", { to: first });
			} else if (e.key === "End") {
				e.preventDefault();
				e.stopPropagation();
				ignoreNextNavItemActivationRef.current = false;
				const last = nodes.length - 1;
				setNavFocusedIndex(last);
				navActiveButtonIndexRef.current = last;
				focusNavItemSoon(last);
				dlog("PrimaryNav: End", { to: last });
			}
		};

		const onKeyUp = (_e: React.KeyboardEvent<HTMLUListElement>) => {
			// no-op; activation handled on keydown by clicking the focused button
		};

		const onKeyDownCapture = (e: React.KeyboardEvent<HTMLUListElement>) => {
			if (e.key !== "Enter" && e.key !== " ") return;
			if (!navListRef.current) return;
			const nodes = Array.from(navListRef.current.querySelectorAll<HTMLElement>("[data-nav-item]"));
			if (!nodes.length) return;
			e.preventDefault();
			// Determine index from event target if possible, else use roving index
			let idx = -1;
			const target = e.target as HTMLElement | null;
			const button = target?.closest?.("[data-nav-item]") as HTMLElement | null;
			if (button) {
				idx = nodes.indexOf(button);
			}
			if (idx < 0) {
				idx = navActiveButtonIndexRef.current ?? navFocusedIndex;
			}
			idx = Math.max(0, Math.min(idx, nodes.length - 1));
			setNavFocusedIndex(idx);
			navActiveButtonIndexRef.current = idx;
			dlog("PrimaryNav: Enter/Space activate (capture)", { idx });
			navigateTo(getId(steps[idx] as any));
			setPaneFocusMode("content");
			paneFocusModeRef.current = "content";
			ignoreNextClickRef.current = true; // swallow synthetic click after keyboard activation
			if (navBootstrapTimeoutRef.current != null) {
				clearTimeout(navBootstrapTimeoutRef.current);
				navBootstrapTimeoutRef.current = null;
			}
			blurActiveIfInNav();
			focusContentSoon();
		};

		const onClickList = (e: React.MouseEvent<HTMLUListElement>) => {
			// Safety net: if a click happens on a nav item button but its handler didn't run,
			// handle activation here via event delegation.
			if (e.defaultPrevented) return;
			if (ignoreNextClickRef.current) {
				// Let the button handler consume this synthetic click
				return;
			}
			const target = e.target as HTMLElement | null;
			if (!target) return;
			const button = target.closest("[data-nav-item]") as HTMLButtonElement | null;
			if (!button || !navListRef.current || !navListRef.current.contains(button)) return;
			const nodes = Array.from(navListRef.current.querySelectorAll<HTMLElement>("[data-nav-item]"));
			const idx = nodes.indexOf(button);
			if (idx < 0) return;
			setNavFocusedIndex(idx);
			navActiveButtonIndexRef.current = idx;
			dlog("PrimaryNav: click delegate activate", { idx });
			navigateTo(getId(steps[idx] as any));
			setPaneFocusMode("content");
			blurActiveIfInNav();
			if (navBootstrapTimeoutRef.current != null) {
				clearTimeout(navBootstrapTimeoutRef.current);
				navBootstrapTimeoutRef.current = null;
			}
			focusContentSoon();
		};

		return (
			<ul
				ref={navListRef}
				className="nhsfdp-primary-nav"
				role="listbox"
				aria-activedescendant={String(getId(steps[Math.max(0, navFocusedIndex)] as any))}
				onKeyDownCapture={onKeyDownCapture}
				onKeyDown={onKeyDown}
				onKeyUp={onKeyUp}
				onClick={onClickList}
			>
				{steps.map((s, i) => {
					const id = getId(s as any);
					const isCurrent = i === currentIndex;
					const focused = paneFocusMode === "nav" && i === navFocusedIndex;
					return (
						<li id={String(id)} key={String(id)} role="option" aria-selected={isCurrent}>
							<button
								data-nav-item
								tabIndex={focused ? 0 : -1}
								type="button"
								className={
									"nhsfdp-primary-nav__item" +
									(isCurrent ? " is-current" : "") +
									(focused ? " is-focused" : "")
								}
								aria-current={isCurrent ? "step" : undefined}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										if (ignoreNextNavItemActivationRef.current) {
											ignoreNextNavItemActivationRef.current = false;
											return;
										}
										navActiveButtonIndexRef.current = i;
										ignoreNextClickRef.current = true;
										dlog("NavItem: onKeyDown activate", { i, id: String(getId(steps[i] as any)) });
										navigateTo(getId(steps[i] as any));
										setPaneFocusMode("content");
										paneFocusModeRef.current = "content";
										if (navBootstrapTimeoutRef.current != null) {
											clearTimeout(navBootstrapTimeoutRef.current);
											navBootstrapTimeoutRef.current = null;
										}
										blurActiveIfInNav();
										focusContentSoon();
									}
								}}
								onKeyUp={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										if (ignoreNextNavItemActivationRef.current) {
											ignoreNextNavItemActivationRef.current = false;
											return;
										}
										navActiveButtonIndexRef.current = i;
										dlog("NavItem: onKeyUp activate (fallback)", { i, id: String(getId(steps[i] as any)) });
										navigateTo(getId(steps[i] as any));
										setPaneFocusMode("content");
										paneFocusModeRef.current = "content";
										if (navBootstrapTimeoutRef.current != null) {
											clearTimeout(navBootstrapTimeoutRef.current);
											navBootstrapTimeoutRef.current = null;
										}
										blurActiveIfInNav();
										focusContentSoon();
									}
								}}
								onClick={(e) => {
									if (ignoreNextClickRef.current) {
										ignoreNextClickRef.current = false;
										e.preventDefault();
										dlog("NavItem: ignore synthetic click after keyboard activation", { i });
										return;
									}
									setNavFocusedIndex(i);
									navActiveButtonIndexRef.current = i;
									dlog("NavItem: onClick select", { i, id: String(id) });
									navigateTo(id);
									setPaneFocusMode("content");
									paneFocusModeRef.current = "content";
									if (navBootstrapTimeoutRef.current != null) {
										clearTimeout(navBootstrapTimeoutRef.current);
										navBootstrapTimeoutRef.current = null;
									}
									blurActiveIfInNav();
									focusContentSoon();
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
			role="grid"
			aria-rowcount={1}
			aria-colcount={(cfg.showPrimaryNav ? 1 : 0) + 1 + (cfg.showSecondaryNav ? 1 : 0)}
			aria-label="Workflow layout"
		>
			<div className="nhsfdp-workflow-body" role="row">
				{cfg.showPrimaryNav && (
					<aside
						ref={navPaneRef as any}
						className={
							"nhsfdp-pane primary-nav" +
							(paneFocusMode === "nav" ? " is-active-pane" : "")
						}
						aria-label="Primary navigation"
						role="gridcell"
						tabIndex={0}
					>
						<section role="complementary" aria-label="Primary navigation">
							<PrimaryNav />
						</section>
					</aside>
				)}
				<main
					ref={contentPaneRef as any}
					className={
						"nhsfdp-pane content" +
						(paneFocusMode === "content" ? " is-active-pane" : "")
					}
					aria-live="polite"
					role="gridcell"
					tabIndex={0}
				>
					{showBreadcrumbs ? breadcrumbs : null}
					<div role="main">
						{renderStepContent(current as any)}
					</div>
				</main>
				{cfg.showSecondaryNav &&
					(renderSecondaryNav || renderSecondaryContent) && (
						<aside
							ref={secondaryPaneRef as any}
							className={
								"nhsfdp-pane secondary-nav" +
								(paneFocusMode === "secondary" ? " is-active-pane" : "")
							}
							aria-label="Secondary navigation"
							role="gridcell"
							tabIndex={0}
						>
							<section role="complementary" aria-label="Secondary navigation">
								{renderSecondaryNav?.(current as any)}
								{renderSecondaryContent?.(current as any)}
							</section>
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
