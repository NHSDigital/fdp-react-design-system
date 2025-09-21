import * as React from "react";
import {
	NavigationSplitViewProps,
	NavigationSplitItem,
} from "./NavigationSplitView.types";
import "./NavigationSplitView.scss";
import { BackLink } from "../BackLink/BackLink";
import { useNavigationSplitUrlSync } from "../../hooks/useNavigationSplitUrlSync";
import { ChevronLeftIcon, ChevronRightIcon } from "./components/Icons";
import { ContentHeader } from "./components/ContentHeader";
import { NavigationCollection } from "./components/NavigationCollection";
import { useEffectiveLayout } from "./hooks/useEffectiveLayout";
import { useCollapsibleNav } from "./hooks/useCollapsibleNav";


// (Deprecated internal) Previous responsive layout helper removed in favour of hydration-safe inline logic.

/**
 * NavigationSplitView Component
 * Mobile-first master-detail navigation similar to SwiftUI NavigationSplitView.
 */
export function NavigationSplitView<
	ID = string,
	T extends NavigationSplitItem<ID> = NavigationSplitItem<ID>,
>(props: NavigationSplitViewProps<ID, T>) {
	const {
		items,
		selectedId: controlledSelectedId,
		defaultSelectedId,
		onSelectionChange,
		renderItemContent,
		renderContent,
		renderSecondaryContent,
		forceLayout,
		animated = true,
		backLabel = "Back",
		nextLabel = "Next",
		isLoading = false,
		emptyState,
		a11y,
		className,
		getId = (i: any) => i.id,
		orientation = "vertical",
		autoEnableThirdColumn = true,
		onDrillChange,
		navigationInstructions = "Use arrow keys to navigate, Enter to open.",
		initialFocus = "first",
		skipFocusOnSelect = false,
		skipAnnouncements = false,
		onFocusChange,
		syncUrl = false,
		urlParamSelected = "nsv",
		urlParamDrill = "nsvDrill",
		urlSyncDebounceMs = 0,
		lazySecondary = false,
		navFooter,
		collapsibleNav = false,
		navInitiallyCollapsed = false,
		onNavCollapseChange,
		collapseToggleLabelShow = "Show navigation",
		collapseToggleLabelHide = "Hide navigation",
		collapseToggleIconShow,
		collapseToggleIconHide,
		persistNavCollapsed,
		navCollapsedStorageKey = "nsvCollapsed",
		navCollapsedUrlParam = "nsvCollapsed",
		autoContentHeader,
		contentHeaderLevel = 2,
		renderContentHeader,
		contentSubheader,
		secondarySubheader,
	} = props;

	// Layout evaluation with hydration-safe gating
	const { effectiveLayout, hydrated, isAtLeastMedium } = useEffectiveLayout(
		forceLayout,
		autoEnableThirdColumn,
		!!renderSecondaryContent
	);

	// URL sync integration (optional)
	const urlSync = useNavigationSplitUrlSync<ID>({
		enabled: syncUrl,
		paramSelected: urlParamSelected,
		paramDrill: urlParamDrill,
	});

	// Selection state (controlled/uncontrolled) initialised from URL if present
	const [uncontrolledSelected, setUncontrolledSelected] = React.useState<
		ID | undefined
	>(() =>
		urlSync.selectedId !== undefined ? urlSync.selectedId : defaultSelectedId
	);
	const selectedId =
		controlledSelectedId !== undefined
			? controlledSelectedId
			: uncontrolledSelected;
	const selectedItem = items.find((i) => getId(i) === selectedId);

	// Track fresh selection to enable one-time animation without re-triggering on unrelated re-renders
	const [justSelectedId, setJustSelectedId] = React.useState<ID | undefined>(
		undefined
	);
	React.useEffect(() => {
		if (selectedId === undefined) return;
		setJustSelectedId(selectedId);
		const t = setTimeout(() => setJustSelectedId(undefined), 220); // longer than CSS 140ms to ensure completion
		return () => clearTimeout(t);
	}, [selectedId]);

	const rootRef = React.useRef<HTMLDivElement | null>(null);
	const contentPaneRef = React.useRef<HTMLDivElement | null>(null);
	const secondaryPaneRef = React.useRef<HTMLDivElement | null>(null);
	const navPaneRef = React.useRef<HTMLDivElement | null>(null);

	// Pane-level keyboard navigation state (child element indices within panes)
	const [paneNavState, setPaneNavState] = React.useState<{
		contentIndex: number;
		secondaryIndex: number;
	}>(() => ({ contentIndex: 0, secondaryIndex: 0 }));

	// Container focus mode: user is navigating between pane containers (nav/content/secondary) before "entering" a pane
	const [paneFocusMode, setPaneFocusMode] = React.useState<
		"containers" | "nav" | "content" | "secondary"
	>(() => "nav");
	const [containerIndex, setContainerIndex] = React.useState(0); // 0=nav,1=content,2=secondary (if present)

	const getPaneOrder = () => {
		return [
			navPaneRef.current,
			contentPaneRef.current,
			secondaryPaneRef.current,
		].filter(Boolean) as HTMLElement[];
	};

	const focusContainerByIndex = (idx: number) => {
		const order = getPaneOrder();
		const clamped = Math.max(0, Math.min(idx, order.length - 1));
		focusEl(order[clamped]);
		setContainerIndex(clamped);
	};

	const getFocusableElements = React.useCallback(
		(root: HTMLElement | null | undefined) => {
			if (!root) return [] as HTMLElement[];
			const selector =
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
			return Array.from(root.querySelectorAll<HTMLElement>(selector)).filter(
				(el) => !el.hasAttribute("disabled") && el.tabIndex !== -1
			);
		},
		[]
	);

	// Helper to focus without scrolling the page (prevents jump-to-top on state changes)
	const focusEl = React.useCallback((el?: HTMLElement | null) => {
		if (!el) return;
		try {
			(el as any).focus({ preventScroll: true });
		} catch {
			el.focus();
		}
	}, []);

	const focusContentElement = React.useCallback(
		(idx: number) => {
			const els = getFocusableElements(contentPaneRef.current);
			if (!els.length) {
				focusEl(contentPaneRef.current);
				return;
			}
			const clamped = Math.max(0, Math.min(idx, els.length - 1));
			const targetElement = els[clamped];

			// Try multiple focus attempts to overcome interference
			targetElement.focus();

			// Verify focus and retry if needed
			setTimeout(() => {
				if (document.activeElement !== targetElement) {
					targetElement.focus();

					// Final check with click fallback
					setTimeout(() => {
						if (document.activeElement !== targetElement) {
							targetElement.click();
						}
					}, 10);
				}
			}, 10);

			setPaneNavState((p) => ({ ...p, contentIndex: clamped }));

			// Add escape key listener to the focused element
			const handleChildEscape = (e: KeyboardEvent) => {
				if (e.key === "Escape") {
					e.preventDefault();
					e.stopPropagation();
					// Return focus to content pane container
					focusEl(contentPaneRef.current);
					// Remove this listener
					targetElement.removeEventListener("keydown", handleChildEscape);
				}
			};

			// Clean up any existing listeners first
			els.forEach((el) => {
				const existingHandler = (el as any)._escapeHandler;
				if (existingHandler) {
					el.removeEventListener("keydown", existingHandler);
				}
			});
			// Add listener to the focused element and store reference for cleanup
			(targetElement as any)._escapeHandler = handleChildEscape;
			targetElement.addEventListener("keydown", handleChildEscape);
		},
		[getFocusableElements]
	);

	const focusSecondaryElement = React.useCallback(
		(idx: number) => {
			const els = getFocusableElements(secondaryPaneRef.current);
			if (!els.length) {
				focusEl(secondaryPaneRef.current);
				return;
			}
			const clamped = Math.max(0, Math.min(idx, els.length - 1));
			const targetElement = els[clamped];
			targetElement.focus();
			// Retry focus if something stole it (matches content pane reliability logic)
			setTimeout(() => {
				if (document.activeElement !== targetElement) {
					targetElement.focus();
					setTimeout(() => {
						if (document.activeElement !== targetElement) {
							targetElement.click();
						}
					}, 10);
				}
			}, 10);
			setPaneNavState((p) => ({ ...p, secondaryIndex: clamped }));

			// Add escape key listener to the focused element
			const handleChildEscape = (e: KeyboardEvent) => {
				if (e.key === "Escape") {
					e.preventDefault();
					e.stopPropagation();
					focusEl(secondaryPaneRef.current);
					targetElement.removeEventListener("keydown", handleChildEscape);
				}
			};
			// Clean existing stored escape handlers
			els.forEach((el) => {
				const existing = (el as any)._escapeHandler;
				if (existing) el.removeEventListener("keydown", existing);
			});
			(targetElement as any)._escapeHandler = handleChildEscape;
			targetElement.addEventListener("keydown", handleChildEscape);
		},
		[getFocusableElements]
	);

	// Root keydown handler implementing container-enter/exit model + intra-pane navigation
	const onRootKeyDown = (e: React.KeyboardEvent) => {
		if (e.defaultPrevented) return;
		const key = e.key;
		const target = e.target as HTMLElement;
		const inNav = !!listRef.current && listRef.current.contains(target);
		const inContent =
			!!contentPaneRef.current && contentPaneRef.current.contains(target);
		const inSecondary =
			!!secondaryPaneRef.current && secondaryPaneRef.current.contains(target);
		const hasSecondary = !!secondaryPaneRef.current;
		const isContainer =
			target === navPaneRef.current ||
			target === contentPaneRef.current ||
			target === secondaryPaneRef.current;
		const isMobileDetail =
			detailActive &&
			(effectiveLayout === "list" || effectiveLayout === "cards");
		const inContentHeader =
			inContent && !!target.closest(".nhs-navigation-split-view__header");

		// Container mode transitions (Left/Right to move between pane containers, Enter to enter)
		if (paneFocusMode === "containers" && isContainer) {
			if (key === "ArrowRight") {
				e.preventDefault();
				const order = getPaneOrder();
				const next = Math.min(order.length - 1, containerIndex + 1);
				focusContainerByIndex(next);
				return;
			}
			if (key === "ArrowLeft") {
				e.preventDefault();
				const prev = Math.max(0, containerIndex - 1);
				focusContainerByIndex(prev);
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
				// Enter the focused pane
				if (target === navPaneRef.current) {
					setPaneFocusMode("nav");
					// focus current selected or first nav item
					if (listRef.current) {
						const nodes = Array.from(
							listRef.current.querySelectorAll("[data-nav-item]")
						) as HTMLElement[];
						(nodes[focusedIndex >= 0 ? focusedIndex : 0] || nodes[0])?.focus();
					}
				} else if (target === contentPaneRef.current) {
					setPaneFocusMode("content");
					focusContentElement(paneNavState.contentIndex);
				} else if (target === secondaryPaneRef.current) {
					setPaneFocusMode("secondary");
					focusSecondaryElement(paneNavState.secondaryIndex);
				}
				return;
			}
			// Ignore other keys in containers mode
			return;
		}

		// Escape from pane child navigation back to nav pane
		if (key === "Escape") {
			if (paneFocusMode === "content" || paneFocusMode === "secondary") {
				// If we're focused on a child element within content/secondary panes, return to nav
				if (inContent || inSecondary) {
					e.preventDefault();
					setPaneFocusMode("nav");
					if (listRef.current) {
						const nodes = Array.from(
							listRef.current.querySelectorAll("[data-nav-item]")
						) as HTMLElement[];
						const candidate = nodes[focusedIndex >= 0 ? focusedIndex : 0];
						setTimeout(() => candidate?.focus(), 10);
					}
				}
				// If we're focused on the pane container itself, also return to nav
				else if (
					target === contentPaneRef.current ||
					target === secondaryPaneRef.current
				) {
					e.preventDefault();
					setPaneFocusMode("nav");
					if (listRef.current) {
						const nodes = Array.from(
							listRef.current.querySelectorAll("[data-nav-item]")
						) as HTMLElement[];
						const candidate = nodes[focusedIndex >= 0 ? focusedIndex : 0];
						setTimeout(() => candidate?.focus(), 10);
					}
				}
			}
			return;
		}

		// Enter key when focused on pane containers - enter the pane to navigate child elements
		if (key === "Enter" || key === " ") {
			// Don't interfere with interactive elements' own Enter/Space handling
			const isInteractiveElement = target.matches(
				'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
			);
			if (isInteractiveElement) {
				// Let the interactive element handle its own Enter/Space
				return;
			}

			if (target === contentPaneRef.current && paneFocusMode === "content") {
				e.preventDefault();
				e.stopPropagation(); // Stop the event from bubbling to other handlers
				// Enter content pane child navigation
				const contentElements = getFocusableElements(contentPaneRef.current);
				if (contentElements.length > 0) {
					// Use a longer delay to ensure no other handlers interfere
					setTimeout(() => {
						focusContentElement(paneNavState.contentIndex);
					}, 50);
				}
				return;
			}
			if (
				target === secondaryPaneRef.current &&
				paneFocusMode === "secondary"
			) {
				e.preventDefault();
				e.stopPropagation(); // Stop the event from bubbling to other handlers
				// Enter secondary pane child navigation
				const secondaryElements = getFocusableElements(
					secondaryPaneRef.current
				);
				if (secondaryElements.length > 0) {
					setTimeout(() => {
						focusSecondaryElement(paneNavState.secondaryIndex);
					}, 50);
				}
				return;
			}
		}

		// Horizontal intra-header navigation on mobile detail: allow Left/Right to move between header focusables instead of pane switching.
		if (
			isMobileDetail &&
			inContentHeader &&
			!isContainer &&
			(key === "ArrowRight" || key === "ArrowLeft")
		) {
			const all = getFocusableElements(contentPaneRef.current).filter((el) =>
				el.closest(".nhs-navigation-split-view__header")
			);
			if (all.length > 1) {
				const currentIndex = all.indexOf(target as HTMLElement);
				if (currentIndex >= 0) {
					const dir = key === "ArrowRight" ? 1 : -1;
					const next = (currentIndex + dir + all.length) % all.length;
					e.preventDefault();
					all[next].focus();
					return; // Stop before pane switching logic
				}
			}
		}

		// ArrowRight: nav → content → secondary
		if (key === "ArrowRight") {
			if (inNav || paneFocusMode === "nav") {
				// Move from nav pane to content pane
				e.preventDefault();
				setPaneFocusMode("content");
				// Focus the content pane container to show focus ring
				setTimeout(() => focusEl(contentPaneRef.current), 10);
				return;
			}
			if (inContent || paneFocusMode === "content") {
				// Move from content pane to secondary pane (if available)
				if (hasSecondary) {
					e.preventDefault();
					setPaneFocusMode("secondary");
					// Focus the secondary pane container to show focus ring
					setTimeout(() => focusEl(secondaryPaneRef.current), 10);
				}
				return;
			}
		}

		// ArrowLeft: secondary → content → nav
		if (key === "ArrowLeft") {
			if (inSecondary || paneFocusMode === "secondary") {
				// Move from secondary pane back to content pane
				e.preventDefault();
				setPaneFocusMode("content");
				// Focus the content pane container to show focus ring
				setTimeout(() => focusEl(contentPaneRef.current), 10);
				return;
			}
			if (inContent || paneFocusMode === "content") {
				// Move from content pane back to nav pane
				e.preventDefault();
				setPaneFocusMode("nav");
				if (listRef.current) {
					const nodes = Array.from(
						listRef.current.querySelectorAll("[data-nav-item]")
					) as HTMLElement[];
					const candidate = nodes[focusedIndex >= 0 ? focusedIndex : 0];
					setTimeout(() => focusEl(candidate), 10);
				}
				return;
			}
		}

		// Home/End shortcuts for quick pane jumping
		if (key === "Home") {
			// Jump to nav pane retaining nav focus index
			if (!inNav) {
				e.preventDefault();
				setPaneFocusMode("nav");
				if (listRef.current) {
					const nodes = Array.from(
						listRef.current.querySelectorAll("[data-nav-item]")
					) as HTMLElement[];
					const candidate =
						nodes[focusedIndex >= 0 ? focusedIndex : 0] || nodes[0];
					setTimeout(() => focusEl(candidate), 10);
				}
			}
		}
		if (key === "End") {
			// Jump to last available pane (secondary if present else content)
			const targetPane = hasSecondary
				? secondaryPaneRef.current
				: contentPaneRef.current;
			if (targetPane && !targetPane.contains(target)) {
				e.preventDefault();
				if (hasSecondary) {
					setPaneFocusMode("secondary");
					setTimeout(() => focusEl(secondaryPaneRef.current), 10);
				} else {
					setPaneFocusMode("content");
					setTimeout(() => focusEl(contentPaneRef.current), 10);
				}
			}
		}

		// ArrowDown/ArrowUp for within-pane navigation
		if (key === "ArrowDown" || key === "ArrowUp") {
			// If focused on content pane container, enter child navigation on ArrowDown
			if (target === contentPaneRef.current && key === "ArrowDown") {
				e.preventDefault();
				const contentElements = getFocusableElements(contentPaneRef.current);
				if (contentElements.length > 0) {
					focusContentElement(0); // Start from first element
				}
				return;
			}
			// If focused on secondary pane container, enter child navigation on ArrowDown
			if (target === secondaryPaneRef.current && key === "ArrowDown") {
				e.preventDefault();
				const secondaryElements = getFocusableElements(
					secondaryPaneRef.current
				);
				if (secondaryElements.length > 0) {
					focusSecondaryElement(0); // Start from first element
				}
				return;
			}
			// If focused on child elements within content pane, navigate between them
			if (inContent) {
				const els = getFocusableElements(contentPaneRef.current);
				if (els.length) {
					e.preventDefault();
					const dir = key === "ArrowDown" ? 1 : -1;
					const next =
						(paneNavState.contentIndex + dir + els.length) % els.length;
					focusContentElement(next);
				}
			}
			// If focused on child elements within secondary pane, navigate between them
			else if (inSecondary) {
				const els = getFocusableElements(secondaryPaneRef.current);
				if (els.length) {
					e.preventDefault();
					const dir = key === "ArrowDown" ? 1 : -1;
					const next =
						(paneNavState.secondaryIndex + dir + els.length) % els.length;
					focusSecondaryElement(next);
				}
			}
		}
	};

	// Track detail active state for mobile slide animation
	const detailActive =
		!!selectedItem &&
		(effectiveLayout === "list" || effectiveLayout === "cards");

	// Determine auto content header rendering across breakpoints
	const autoHeaderConfig = React.useMemo(() => {
		if (autoContentHeader === undefined) {
			return { mobile: true, tablet: false, desktop: false };
		}
		if (autoContentHeader === true) {
			return { mobile: true, tablet: true, desktop: true };
		}
		if (autoContentHeader === false) {
			return { mobile: false, tablet: false, desktop: false };
		}
		return {
			mobile:
				autoContentHeader.mobile !== undefined
					? autoContentHeader.mobile
					: true,
			tablet: autoContentHeader.tablet || false,
			desktop: autoContentHeader.desktop || false,
		};
	}, [autoContentHeader]);

	// Breakpoint buckets for header logic (reuse breakpoint hook 'up')
	const isTabletRange = hydrated && isAtLeastMedium && effectiveLayout !== "three-column";
	const isDesktopRange = hydrated && effectiveLayout === "three-column";

	// Header visibility:
	// 1. Original behaviour when a selection exists according to per-breakpoint config.
	// 2. Additionally: persist a header shell (to host ForwardLink) whenever a tertiary pane is available but not yet visible.
	const tertiaryAvailable = !!renderSecondaryContent;
	const tertiaryVisible = effectiveLayout === "three-column";
	// Inline tertiary (secondary pane content) activation when below desktop width
	const [tertiaryInlineActive, setTertiaryInlineActive] = React.useState(false);
	// Reset inline tertiary when desktop three-column becomes available
	React.useEffect(() => {
		if (tertiaryVisible && tertiaryInlineActive) setTertiaryInlineActive(false);
	}, [tertiaryVisible, tertiaryInlineActive]);

	// Update focus mode when tertiary inline becomes active (user clicked Next button)
	React.useEffect(() => {
		if (tertiaryInlineActive && !tertiaryVisible) {
			setPaneFocusMode("secondary");
			setContainerIndex(2); // Secondary pane is index 2

			// Focus the secondary pane container
			setTimeout(() => {
				focusEl(secondaryPaneRef.current);
			}, 50);
		}
	}, [tertiaryInlineActive, tertiaryVisible]);

	// Update focus mode when going back from tertiary inline (user clicked Back button)
	React.useEffect(() => {
		if (
			!tertiaryInlineActive &&
			!tertiaryVisible &&
			paneFocusMode === "secondary"
		) {
			setPaneFocusMode("content");
			setContainerIndex(1); // Content pane is index 1
			// Focus the content pane container
			setTimeout(() => {
				focusEl(contentPaneRef.current);
			}, 50);
		}
	}, [tertiaryInlineActive, tertiaryVisible, paneFocusMode]);

	const baseHeaderCondition =
		!!selectedItem &&
		((detailActive && autoHeaderConfig.mobile) ||
			(!detailActive && isTabletRange && autoHeaderConfig.tablet) ||
			(!detailActive && isDesktopRange && autoHeaderConfig.desktop));

	const showHeader = baseHeaderCondition || (tertiaryAvailable && !tertiaryVisible);

	const headerContext: "mobile" | "tablet" | "desktop" = detailActive
		? "mobile"
		: isTabletRange
			? "tablet"
			: "desktop";

	// Keep URL in sync with selection and drill state (two vs three column) without adding history entries
	React.useEffect(() => {
		if (!syncUrl) return;
		const drilled = effectiveLayout === "three-column";
		let cancelled = false;
		const apply = () => {
			if (cancelled) return;
			if (urlSync.selectedId !== selectedId)
				urlSync.setSelectedId(selectedId as any);
			if (urlSync.drilledIn !== drilled) urlSync.setDrilledIn(drilled);
		};
		if (urlSyncDebounceMs && urlSyncDebounceMs > 0) {
			const t = setTimeout(apply, urlSyncDebounceMs);
			return () => {
				cancelled = true;
				clearTimeout(t);
			};
		} else {
			apply();
		}
	}, [syncUrl, urlSync, selectedId, effectiveLayout, urlSyncDebounceMs]);

	// Respond to back/forward navigation (popstate) by re-parsing params
	React.useEffect(() => {
		if (!syncUrl) return;
		const handler = () => {
			const sp = new URLSearchParams(window.location.search);
			const sel = sp.get(urlParamSelected) as ID | null;
			const drill = sp.get(urlParamDrill) === "1";
			setUncontrolledSelected(sel === null ? undefined : sel);
			// Only adjust layout if not forcibly controlled from props
			if (!forceLayout && drill && renderSecondaryContent) {
				// rely on autoEnableThirdColumn logic at xlarge or force immediate? we just leave; up() will handle when width qualifies
			}
		};
		window.addEventListener("popstate", handler);
		return () => window.removeEventListener("popstate", handler);
	}, [
		syncUrl,
		urlParamSelected,
		urlParamDrill,
		forceLayout,
		renderSecondaryContent,
	]);

	const lastFocusedIndexRef = React.useRef(0);
	// Ref to store buffered typeahead state { buffer: accumulated chars; last: timestamp }
	const typeaheadRef = React.useRef<{ buffer: string; last: number } | null>(
		null
	);
	const handleSelect = React.useCallback(
		(id: ID, item: T) => {
			// Avoid redundant state updates (which were causing highlight flicker) if the item is already selected
			if (id === selectedId) return;
			if (controlledSelectedId === undefined) setUncontrolledSelected(id);
			onSelectionChange?.(id, item);
		},
		[controlledSelectedId, onSelectionChange, selectedId]
	);

	// When entering detail view on mobile/card layouts move focus into content pane
	React.useEffect(() => {
		if (!skipFocusOnSelect && detailActive && contentPaneRef.current) {
			const t = setTimeout(() => focusEl(contentPaneRef.current), 30);
			return () => clearTimeout(t);
		}
	}, [detailActive, selectedId, skipFocusOnSelect]);

	// Keyboard navigation (basic roving focus in list)
	const listRef = React.useRef<HTMLUListElement | null>(null);
	const [focusedIndex, setFocusedIndex] = React.useState(() =>
		initialFocus === "first" ? 0 : -1
	);

	// Declarative roving focus: only focus the newly focused element; tabIndex handled during render
	React.useEffect(() => {
		if (focusedIndex < 0) return;
		if (!listRef.current) return;
		const nodes = Array.from(
			listRef.current.querySelectorAll("[data-nav-item]")
		) as HTMLElement[];
		const node = nodes[focusedIndex];
		if (node) {
			// Focus only if it isn't already focused to avoid unnecessary blur/focus cycles (reduces flicker)
			if (document.activeElement !== node) {
				focusEl(node);
			}
			lastFocusedIndexRef.current = focusedIndex;
			const item = items[focusedIndex];
			onFocusChange?.(
				item ? getId(item) : undefined,
				item as any,
				focusedIndex
			);
		}
	}, [focusedIndex, items, onFocusChange, getId]);

	const onKeyDownList = (e: React.KeyboardEvent) => {
		const forward = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
		const backward = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";

		// PRIORITY: Pane navigation - ArrowRight always moves to content pane when in vertical orientation
		if (e.key === "ArrowRight" && orientation === "vertical") {
			e.preventDefault();

			if (tertiaryInlineActive) {
				setPaneFocusMode("secondary");
				// Use setTimeout to ensure the DOM updates before focusing
				setTimeout(() => {
					focusEl(secondaryPaneRef.current);
				}, 10);
			} else {
				setPaneFocusMode("content");
				// Use setTimeout to ensure the DOM updates before focusing
				setTimeout(() => {
					// For now, always focus the content pane container directly
					// This ensures reliable focus transfer and visible focus ring
					focusEl(contentPaneRef.current);
				}, 10);
			}
			return;
		}

		// List navigation within the nav pane
		if (e.key === forward) {
			e.preventDefault();
			setFocusedIndex((i) => Math.min(items.length - 1, i + 1));
		} else if (e.key === backward) {
			e.preventDefault();
			setFocusedIndex((i) => Math.max(0, i - 1));
		} else if (e.key === "Home") {
			e.preventDefault();
			setFocusedIndex(0);
		} else if (e.key === "End") {
			e.preventDefault();
			setFocusedIndex(items.length - 1);
		} else if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			const item = items[focusedIndex];
			if (item && !item.disabled) handleSelect(getId(item), item as T);
		} else if (e.key.length === 1 && /[a-z0-9]/i.test(e.key)) {
			// Buffered typeahead (multi-character within time window) + cycling for same char sequences
			if (!typeaheadRef.current) typeaheadRef.current = { buffer: "", last: 0 };
			const now = Date.now();
			const timeout = 700; // ms window to accumulate buffer
			const lower = e.key.toLowerCase();
			if (now - typeaheadRef.current.last > timeout) {
				typeaheadRef.current.buffer = lower; // reset buffer
			} else {
				typeaheadRef.current.buffer += lower;
			}
			typeaheadRef.current.last = now;
			let buffer = typeaheadRef.current.buffer;
			// If buffer is repeating same char (e.g. 'ccc'), treat as cycling among items starting with that char
			const allSame = buffer.split("").every((ch: string) => ch === buffer[0]);
			const labels = items.map((it) =>
				String((it as any).label || "").toLowerCase()
			);
			let startIndex = 0;
			if (focusedIndex >= 0) {
				startIndex = (focusedIndex + 1) % items.length;
			}
			let matchIndex: number | undefined;
			const search = (prefix: string, cycleFromCurrent: boolean) => {
				const total = items.length;
				for (let offset = 0; offset < total; offset++) {
					const idx = ((cycleFromCurrent ? startIndex : 0) + offset) % total;
					const it = items[idx];
					if (!it.disabled && labels[idx].startsWith(prefix)) {
						return idx;
					}
				}
				return undefined;
			};
			if (allSame && buffer.length > 1) {
				// cycle to next item starting with single char after current focus
				matchIndex = search(buffer[0], true);
			} else {
				matchIndex = search(buffer, true);
				if (matchIndex === undefined && buffer.length > 1) {
					// Fallback: if no multi-char match, try last char only
					matchIndex = search(buffer[buffer.length - 1], true);
					if (matchIndex !== undefined) {
						// reduce buffer to last char so subsequent typing continues from there
						if (typeaheadRef.current)
							typeaheadRef.current.buffer = buffer[buffer.length - 1];
					}
				}
			}
			if (matchIndex !== undefined) setFocusedIndex(matchIndex);
		}
	};

	// Collapsible nav (>= medium) via hook
	const { collapsed: navCollapsed, toggle: toggleNav } = useCollapsibleNav({
		enabled: collapsibleNav,
		isAtLeastMedium,
		initiallyCollapsed: navInitiallyCollapsed,
		persist: persistNavCollapsed,
		storageKey: navCollapsedStorageKey,
		urlParam: navCollapsedUrlParam,
		onChange: onNavCollapseChange,
	});

	const rootClasses = [
		"nhs-navigation-split-view",
		animated ? "nhs-navigation-split-view--animated" : "",
		detailActive ? "nhs-navigation-split-view--detail-active" : "",
		effectiveLayout === "three-column"
			? "nhs-navigation-split-view--three-column"
			: "",
		collapsibleNav && isAtLeastMedium && navCollapsed
			? "nhs-navigation-split-view--nav-collapsed"
			: "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	// Live region for announcements
	const liveRef = React.useRef<HTMLDivElement | null>(null);
	React.useEffect(() => {
		if (skipAnnouncements) return;
		if (liveRef.current) {
			const msg = selectedItem
				? `Selected ${selectedItem.label}`
				: "Selection cleared";
			liveRef.current.textContent = msg;
		}
	}, [selectedItem, skipAnnouncements]);

	// Persist + restore nav focus when returning from detail
	React.useEffect(() => {
		if (!detailActive && selectedId == null && listRef.current) {
			const nodes = listRef.current.querySelectorAll("[data-nav-item]");
			const target = nodes[lastFocusedIndexRef.current] as
				| HTMLElement
				| undefined;
			focusEl(target);
		}
	}, [detailActive, selectedId]);

	// Drill change callback & live message
	const drilledIn = effectiveLayout === "three-column";
	const [secondaryMounted, setSecondaryMounted] = React.useState(false);
	React.useEffect(() => {
		if (drilledIn && !secondaryMounted) setSecondaryMounted(true);
	}, [drilledIn, secondaryMounted]);
	const prevDrillRef = React.useRef(drilledIn);
	React.useEffect(() => {
		if (prevDrillRef.current !== drilledIn) {
			onDrillChange?.(drilledIn);
			prevDrillRef.current = drilledIn;
		}
	}, [drilledIn, onDrillChange]);

    // (List/cards rendering moved into NavigationCollection component)

	return (
		<div
			ref={rootRef}
			className={rootClasses}
			aria-label={a11y?.rootLabel}
			data-layout={effectiveLayout}
			onKeyDown={onRootKeyDown}
		>
			<div className="nhs-navigation-split-view__body">
				<div
					className="nhs-navigation-split-view__panes"
					data-active-detail={detailActive || undefined}
					style={{ transform: detailActive ? "translateX(-100%)" : undefined }}
				>
					{/* Navigation Pane */}
					<div
						ref={navPaneRef}
						className="nhs-navigation-split-view__nav-pane"
						role="navigation"
						aria-label={a11y?.navigationLabel || "Items"}
						data-collapsed={navCollapsed || undefined}
						tabIndex={0}
					>
						{collapsibleNav && isAtLeastMedium && (
							<div className="nhs-navigation-split-view__nav-collapse">
								<button
									type="button"
									onClick={toggleNav}
									className="nhs-navigation-split-view__nav-collapse-btn"
									aria-label={
										navCollapsed
											? collapseToggleLabelShow
											: collapseToggleLabelHide
									}
									title={
										navCollapsed
											? collapseToggleLabelShow
											: collapseToggleLabelHide
									}
								>
									{/* Customisable icons with sensible fallbacks */}
									{navCollapsed
										? collapseToggleIconShow || <ChevronRightIcon />
										: collapseToggleIconHide || <ChevronLeftIcon />}
								</button>
							</div>
						)}
						<div className="nhs-navigation-split-view__nav-scroll">
							<NavigationCollection
								layout={effectiveLayout === "cards" ? "cards" : "list"}
								items={items as any}
								getId={getId as any}
								selectedId={selectedId as any}
								isLoading={isLoading}
								emptyState={emptyState}
								renderItemContent={renderItemContent as any}
								onSelect={(id, item, idx) => {
									lastFocusedIndexRef.current = idx;
									handleSelect(id as any, item as any);
								}}
								orientation={orientation}
								initialFocus={initialFocus}
								onFocusChange={onFocusChange as any}
								justSelectedId={justSelectedId as any}
								listRef={listRef as any}
								onKeyDownList={onKeyDownList}
								navigationInstructions={navigationInstructions}
								controlledFocusedIndex={focusedIndex}
							/>
						</div>
						{navFooter && (
							<div
								className="nhs-navigation-split-view__nav-footer"
								role="contentinfo"
							>
								{navFooter}
							</div>
						)}
					</div>

					{/* Content Pane */}
					<div
						ref={contentPaneRef}
						className="nhs-navigation-split-view__content-pane"
						role="region"
						aria-label={a11y?.contentLabel || "Content"}
						data-has-selection={!!selectedItem || undefined}
						tabIndex={0}
						style={{
							display:
								tertiaryInlineActive && !tertiaryVisible ? "none" : undefined,
						}}
					>
						{showHeader && (
							<ContentHeader
								show={showHeader}
								label={selectedItem ? (selectedItem as any).label : undefined}
								contentHeaderLevel={contentHeaderLevel}
								detailActive={detailActive}
								headerContext={headerContext}
								backLabel={backLabel}
								nextLabel={nextLabel}
								onBack={() => handleSelect(undefined as any, undefined as any)}
								onForward={() => setTertiaryInlineActive(true)}
								renderContentHeader={renderContentHeader as any}
								item={selectedItem as any}
								contentSubheader={contentSubheader as any}
								tertiaryInlineActive={tertiaryInlineActive}
							/>
						)}
						<div
							className="nhs-navigation-split-view__content-inner"
							style={{ padding: 32, flex: 1 }}
						>
							{renderContent(selectedItem)}
						</div>
					</div>

					{/* Secondary Pane (three-column on desktop OR inline mode at tablet) */}
					{(effectiveLayout === "three-column" &&
						(!lazySecondary || secondaryMounted)) ||
					(tertiaryInlineActive && !tertiaryVisible) ? (
						<div
							ref={secondaryPaneRef}
							className="nhs-navigation-split-view__secondary-pane"
							role="region"
							aria-label={a11y?.secondaryContentLabel || "Secondary"}
							tabIndex={0}
						>
							<div
								className="nhs-navigation-split-view__secondary-inner"
								style={{
									display: "flex",
									flexDirection: "column",
									flex: 1,
									minWidth: 0,
								}}
							>
								{/* Header for inline mode with back button */}
								{tertiaryInlineActive && !tertiaryVisible && (
									<div className="nhs-navigation-split-view__header">
										<div
											style={{
												display: "flex",
												alignItems: "center",
												width: "100%",
											}}
										>
											<div
												style={{
													display: "flex",
													alignItems: "center",
													gap: 0,
													flex: "1 1 auto",
													minWidth: 0,
												}}
											>
												<BackLink
													element="button"
													text={backLabel}
													style={{ marginRight: 16 }}
													onClick={() => setTertiaryInlineActive(false)}
												/>
												<div
													style={{
														display: "flex",
														flexDirection: "column",
														gap: 4,
														minWidth: 0,
													}}
												>
													<h2 style={{ marginLeft: 0, marginRight: 0 }}>
														{selectedItem &&
														typeof selectedItem === "object" &&
														"label" in selectedItem
															? selectedItem.label
															: String(selectedItem)}
													</h2>
												</div>
											</div>
										</div>
									</div>
								)}
								{selectedItem && secondarySubheader && (
									<div
										className="nhs-navigation-split-view__secondary-header"
										style={{
											padding: "16px 32px",
											borderBottom: "1px solid var(--nsplit-divider)",
										}}
									>
										{typeof secondarySubheader === "function"
											? secondarySubheader(selectedItem as any)
											: secondarySubheader}
									</div>
								)}
								<div style={{ padding: 32, flex: 1, minWidth: 0 }}>
									{renderSecondaryContent?.(selectedItem)}
								</div>
							</div>
						</div>
					) : null}
				</div>
				{/* Live regions */}
				<div
					ref={liveRef}
					aria-live="polite"
					aria-atomic="true"
					style={{
						position: "absolute",
						width: 1,
						height: 1,
						overflow: "hidden",
						clip: "rect(0 0 0 0)",
					}}
				/>
				<div
					aria-live="polite"
					style={{
						position: "absolute",
						width: 1,
						height: 1,
						overflow: "hidden",
						clip: "rect(0 0 0 0)",
					}}
				>
					{drilledIn
						? "Expanded to three column layout"
						: "In two column layout"}
				</div>
			</div>
		</div>
	);
}

NavigationSplitView.displayName = "NavigationSplitView";
