import React, { useState, useEffect, useRef, useCallback } from "react";
import { HeaderProps } from "./Header.types";
import { renderHeaderMarkup } from "./Header.render";
import { useBrand } from "../../themes/BrandThemeProvider";
import { HeaderSearch } from "../HeaderSearch";

/**
 * SSR-compatible Header Component with Progressive Enhancement
 *
 * This component is designed to work with Next.js SSR by:
 * 1. Rendering a functional header on the server
 * 2. Progressively enhancing with responsive overflow handling on the client
 * 3. Providing fallback navigation that works without JavaScript
 * 
 * The component self-initializes its behaviour on mount via headerBehaviour.
 */
export const Header: React.FC<HeaderProps> = ({
	className,
	logo = {},
	service = {},
	organisation,
	search,
	account,
	navigation,
	containerClasses,
	variant = "default",
	attributes = {},
	...props
}) => {
	// SSR-safe state initialization & client overflow management
	const [menuOpen, setMenuOpen] = useState(false);
	const [showMoreButton, setShowMoreButton] = useState(false);
	const [visibleItems, setVisibleItems] = useState<number>(navigation?.items?.length || 0);
	const [dropdownVisible, setDropdownVisible] = useState(false); // retained for a11y closing timing
	const [isClient, setIsClient] = useState(false); // Track if we're on client side

	// Refs for measurement
	const navContainerRef = useRef<HTMLDivElement>(null!);
	const navListRef = useRef<HTMLUListElement>(null!);
	const computingRef = useRef(false);

	// Simple initialization effect - runs once
	useEffect(() => {
		if (typeof window === "undefined") return;

		setIsClient(true);
		// initialization effect retained for potential future logic (was isInitialized)
	}, []); // Run once on mount

	// SSR-safe escape key handler
	useEffect(() => {
		// Only run on client side
		if (typeof document === "undefined") return;

		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === "Escape" && menuOpen) {
				setMenuOpen(false);
			}
		};

		if (menuOpen) {
			document.addEventListener("keydown", handleEscapeKey);
			return () => document.removeEventListener("keydown", handleEscapeKey);
		}
	}, [menuOpen]);

	// Prototype element width cache for the More button (computed once per session unless font/layout changes)
	const moreButtonWidthRef = useRef<number | null>(null);

	// Measure available space & determine how many nav items fit (excluding the potential More button)
	const recomputeLayout = useCallback(() => {
		if (!isClient) return; // only run on client
		if (!navigation?.items || navigation.items.length === 0) return;
		if (computingRef.current) return;
		const container = navContainerRef.current;
		const list = navListRef.current;
		if (!container || !list) return;
		computingRef.current = true;
		// Add measuring class so hidden items participate in layout width without flashing
		container.classList.add("nhsuk-header__navigation-container--measuring");

		const containerWidth = container.clientWidth;
		const children = Array.from(list.children) as HTMLLIElement[];
		if (!children.length) {
			container.classList.remove("nhsuk-header__navigation-container--measuring");
			computingRef.current = false;
			return;
		}

		// Compute dynamic reserve using a hidden prototype button if not already measured (accounts for font changes)
		if (moreButtonWidthRef.current == null) {
			const proto = document.createElement("button");
			proto.type = "button";
			proto.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype";
			proto.style.position = "absolute";
			proto.style.visibility = "hidden";
			proto.style.pointerEvents = "none";
			proto.innerHTML = '<span>More</span>';
			container.appendChild(proto);
			moreButtonWidthRef.current = proto.getBoundingClientRect().width || 104; // fallback
			container.removeChild(proto);
		}
		const reserve = moreButtonWidthRef.current + 16; // add a small breathing space gutter

		let used = 0;
		let fit = 0;
		const style = window.getComputedStyle(container);
		const paddingLeft = parseFloat(style.paddingLeft) || 0;
		const paddingRight = parseFloat(style.paddingRight) || 0;
		let padding = paddingLeft + paddingRight;
		for (const child of children) {
			const width = child.getBoundingClientRect().width;
			if (used + width + reserve + padding > containerWidth) break;
			used += width;
			fit += 1;
		}

		const nextShow = fit < navigation.items.length;
		const nextVisible = nextShow ? fit : navigation.items.length;
		// Only update state if changed to avoid extra observer cycles & flicker
		setShowMoreButton(prev => (prev === nextShow ? prev : nextShow));
		setVisibleItems(prev => (prev === nextVisible ? prev : nextVisible));
		container.classList.remove("nhsuk-header__navigation-container--measuring");
		computingRef.current = false;
	}, [isClient, navigation?.items]);

	// Attach ResizeObserver to container for responsive recalculation
	useEffect(() => {
		if (!isClient) return;
		const container = navContainerRef.current;
		if (!container) return;

		let frame: number | null = null;
		const schedule = () => {
			if (frame != null) return;
			frame = window.requestAnimationFrame(() => {
				frame = null;
				recomputeLayout();
			});
		};

		// Initial computation after hydration
		recomputeLayout();

		// Observe size changes
		const ro = new ResizeObserver(() => schedule());
		ro.observe(container);

		// Also observe list in case internal wrapping affects intrinsic width without container size change
		if (navListRef.current) ro.observe(navListRef.current);

		return () => {
			if (frame != null) window.cancelAnimationFrame(frame);
			ro.disconnect();
		};
	}, [isClient, recomputeLayout]);

	// Recompute when navigation length changes
	useEffect(() => {
		if (!isClient) return;
		recomputeLayout();
	}, [navigation?.items?.length, isClient, recomputeLayout]);

	const toggleMenu = (event?: React.MouseEvent) => {
		if (event) {
			event.preventDefault();
			event.stopPropagation();
		}

		const newMenuState = !menuOpen;
		setMenuOpen(newMenuState);

		// Behaviour layer now controls DOM injection of dropdown; we track visible state for accessibility if needed.
		setDropdownVisible(newMenuState);
	};

	// NHS Logo SVG - exact copy from NHS.UK
	// Markup helpers removed; now handled in shared renderer
	const brandCtx = (() => {
		try {
			return useBrand();
		} catch {
			return undefined;
		}
	})();
	return renderHeaderMarkup(
		{
			className,
			logo,
			service,
			organisation,
			search,
			account,
			navigation,
			containerClasses,
			variant,
			attributes,
			...props,
		},
		{
			variant: "client",
			isClient,
			menuOpen,
			showMoreButton,
			visibleItems,
			dropdownVisible,
			toggleMenu,
			navContainerRef,
			navListRef,
			// Provide interactive search node for client build only
			searchNode: search ? <HeaderSearch {...search} /> : null,
			brand: brandCtx?.brand,
		}
	);
};
