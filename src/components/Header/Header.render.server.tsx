import React from "react";
// Mark React as used to satisfy TS noUnusedLocals while keeping import for classic JSX runtime
void React;
import classNames from "classnames";
import { HeaderProps, NavigationItem } from "./Header.types";
import { Account } from "../Account";
import { getBrandLogo, BrandKey, LogoVariant as LogoVariantEnum } from "../../assets/brand";
import "./Header.scss";
import "./Header.ssr.scss";

export interface RenderHeaderServerOptions {
	variant: "server";
	isClient: false;
	/** Optional brand provided by the caller (supports SSR BrandThemeProvider context). */
	brand?: 'nhs' | 'fdp';
}

export function renderHeaderMarkupServer(
	props: HeaderProps,
	{ isClient, brand: providedBrand }: RenderHeaderServerOptions
) {
	const {
		className,
		logo = {},
		service = {},
		serviceName,
		organisation,
		// NOTE: search component intentionally omitted in server render to avoid importing client hooks
		// search,
		account,
		navigation,
		containerClasses,
		variant: headerVariant = "default",
		attributes = {},
		maxVisibleItems: _maxVisibleItems, // deprecated (ignored)
		responsiveNavigation = true,
		// Consume logoVariant for server-side logo selection while preventing DOM leakage via ...rest
		logoVariant: logoVariantProp = LogoVariantEnum.Full,
		...rest
	} = props;

	// Prevent internal-only props leaking to DOM
	if ("maxVisibleItems" in (rest as any)) {
		delete (rest as any).maxVisibleItems;
	}

	// Map deprecated serviceName into service.text if provided
	const effectiveService = {
		...service,
		text: service?.text ?? serviceName,
	};

	const combineLogoAndServiceNameLinks =
		(effectiveService.href && !logo.href) ||
		(effectiveService.href && effectiveService.href === logo.href);
	const logoHref = combineLogoAndServiceNameLinks
		? effectiveService.href
		: logo.href;

	const headerClasses = classNames(
		"nhsuk-header",
		{
			"nhsuk-header--organisation":
				headerVariant === "organisation" || organisation,
			"nhsuk-header--white": headerVariant === "white",
		},
		className
	);
	const containerClass = classNames(
		"nhsuk-header__container",
		containerClasses
	);
	const navigationClasses = classNames(
		"nhsuk-header__navigation",
		{
			"nhsuk-header__navigation--white": navigation?.white,
			"nhsuk-header__navigation--justified": navigation?.justified,
		},
		navigation?.className
	);

	// Resolve brand for SSR: prefer explicit option provided by HeaderServer via BrandThemeProvider; default to NHS
	const brand: 'nhs' | 'fdp' = providedBrand === 'fdp' ? 'fdp' : 'nhs';

	const renderNHSLogo = () => (
		<svg
			className="nhsuk-header__logo"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 200 80"
			height="40"
			width="100"
			focusable="false"
			role="img"
			aria-label={logo.ariaLabel || "NHS"}
		>
			<title>{logo.ariaLabel || "NHS"}</title>
			<path
				fill="#fff"
				d="M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
			/>
		</svg>
	);

		const renderServiceLogo = () => {
			// Prefer explicit logo.src when provided
			if (logo.src) {
				return (
					<img
						className="nhsuk-header__organisation-logo"
						src={logo.src}
						width="280"
						alt={logo.ariaLabel || (brand === 'fdp' ? 'FDP' : 'NHS')}
					/>
				);
			}

			// Brand-aware default: show FDP logo when brand scope is FDP; otherwise NHS logo SVG
			if (brand === 'fdp') {
				const fdpLogo = getBrandLogo(BrandKey.FDP, logoVariantProp);
				if (fdpLogo?.src) {
					return (
						<img
							className="nhsuk-header__organisation-logo"
							src={fdpLogo.src}
							data-logo-variant={logoVariantProp}
							width="280"
							alt={fdpLogo.ariaLabel || 'FDP'}
						/>
					);
				}
			}

			return renderNHSLogo();
		};
	const renderOrganisationName = () =>
		organisation ? (
			<>
				<span className="nhsuk-header__organisation-name">
					{organisation.name}
					{organisation.split && (
						<span className="nhsuk-header__organisation-name-split">
							{" "}
							{organisation.split}
						</span>
					)}
				</span>
				{organisation.descriptor && (
					<span className="nhsuk-header__organisation-name-descriptor">
						{organisation.descriptor}
					</span>
				)}
			</>
		) : null;
	const renderServiceName = (text?: string, href?: string) =>
		text ? (
			href ? (
				<a className="nhsuk-header__service-name" href={href}>
					{text}
				</a>
			) : (
				<span className="nhsuk-header__service-name">{text}</span>
			)
		) : null;
	const renderNavigationLinkContent = (item: NavigationItem) =>
		item.active || item.current ? (
			<strong className="nhsuk-header__navigation-item-current-fallback">
				{item.html ? (
					<span dangerouslySetInnerHTML={{ __html: item.html }} />
				) : (
					item.text
				)}
			</strong>
		) : item.html ? (
			<span dangerouslySetInnerHTML={{ __html: item.html }} />
		) : (
			item.text
		);

	// Server variant: render all items in main list, let JS handle overflow
	// This avoids reflow when hydrating (no need to move items from dropdown to main list)

	return (
		<>
			<header
				className={headerClasses}
				role="banner"
				data-module="nhsuk-header"
				{...attributes}
				{...rest}
			>
			<div className={containerClass}>
				<div className="nhsuk-header__service">
					{logoHref ? (
						<a className="nhsuk-header__service-logo" href={logoHref}>
							{renderServiceLogo()}
							{renderOrganisationName()}
							{combineLogoAndServiceNameLinks &&
								renderServiceName(effectiveService.text)}
						</a>
					) : (
						<>
							{renderServiceLogo()}
							{renderOrganisationName()}
							{combineLogoAndServiceNameLinks &&
								renderServiceName(effectiveService.text)}
						</>
					)}
					{effectiveService.text &&
						!combineLogoAndServiceNameLinks &&
						renderServiceName(effectiveService.text, effectiveService.href)}
				</div>
				{/* Search omitted in server renderer to avoid client hooks */}
				<Account
					{...account}
					variant={headerVariant === "white" ? "white" : "default"}
				/>
			</div>
			{navigation && navigation.items && navigation.items.length > 0 && (
				<nav
					className={navigationClasses}
					aria-label={navigation.ariaLabel || "Menu"}
					data-ssr-hydrating={!isClient ? "true" : undefined}
				>
					<div
						className={classNames(
							"nhsuk-header__navigation-container",
							"nhsuk-width-container",
							{
								"nhsuk-header__navigation-container--ssr": !isClient,
							},
							containerClasses
						)}
					>
						<ul className="nhsuk-header__navigation-list">
							{navigation.items.map((item, index) => (
								<li
									key={index}
									className={classNames(
										"nhsuk-header__navigation-item",
										{
											"nhsuk-header__navigation-item--current":
												item.active || item.current,
										},
										item.className
									)}
									{...(item.attributes || {})}
								>
									<a
										className="nhsuk-header__navigation-link"
										href={item.href}
										{...(item.active || item.current
											? { "aria-current": item.current ? "page" : "true" }
											: {})}
									>
										{renderNavigationLinkContent(item)}
									</a>
								</li>
							))}
						</ul>
					</div>
				</nav>
			)}
			</header>
			{/* SSR-safe behaviour initialization: inline script runs only in browser */}
			<script
				type="module"
				dangerouslySetInnerHTML={{
					__html: `
						(function() {
							if (typeof window === 'undefined') return;
							
							// Find the header element (previous sibling of this script)
							var script = document.currentScript;
							var header = script && script.previousElementSibling;
							
							if (!header || !header.classList.contains('nhsuk-header')) return;
							
							// Wait for DOM ready and behaviour module to be available
							function initHeader() {
								// Dynamic import for behaviour module
								import('@fergusbisset/nhs-fdp-design-system/behaviours')
									.then(function(mod) {
										if (mod && mod.initHeaders) {
											mod.initHeaders(header);
											console.log('NHS Header behaviour initialized (SSR)');
										}
									})
									.catch(function(err) {
										console.warn('Failed to initialize header behaviour:', err);
									});
							}
							
							// Initialize after DOM is ready
							if (document.readyState === 'loading') {
								document.addEventListener('DOMContentLoaded', initHeader);
							} else {
								// DOM already loaded (e.g., dynamic insertion)
								setTimeout(initHeader, 0);
							}
						})();
					`.trim()
				}}
			/>
		</>
	);
}
