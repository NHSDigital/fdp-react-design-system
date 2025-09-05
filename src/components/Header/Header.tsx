import React, { useState, useEffect } from "react";
import { HeaderProps } from "./Header.types";
import { renderHeaderMarkup } from "./Header.render";

/**
 * SSR-compatible Header Component with Progressive Enhancement
 *
 * This component is designed to work with Next.js SSR by:
 * 1. Rendering a functional header on the server
 * 2. Progressively enhancing with responsive overflow handling on the client
 * 3. Providing fallback navigation that works without JavaScript
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
	// SSR-safe state initialization
	const [menuOpen, setMenuOpen] = useState(false);
	// These state flags are now purely for transitional compatibility while
	// the behaviour layer manages overflow & dropdown distribution outside React.
	// Overflow now handled entirely by behaviour layer (no React-managed More button)
	const [showMoreButton] = useState(false);
	const [visibleItems] = useState<number>(navigation?.items?.length || 0);
	const [dropdownVisible, setDropdownVisible] = useState(false); // retained for a11y closing timing
	const [isClient, setIsClient] = useState(false); // Track if we're on client side

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

	// Overflow measurement & distribution now handled by behaviour layer (headerBehaviour.ts)
	// Client component keeps only minimal dropdown visibility state.

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
		}
	);
};
