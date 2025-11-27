import React from "react";
import classNames from "classnames";
import { HeaderProps, NavigationItem } from "./Header.types";
import { Account } from "../Account";
import { getBrandLogo, BrandKey, LogoVariant as LogoVariantEnum } from "../../assets/brand";
import "./Header.scss";
import "./Header.ssr.scss";

export interface RenderHeaderOptions {
	variant: "client" | "server";
	isClient: boolean;
	menuOpen?: boolean;
	showMoreButton?: boolean;
	visibleItems?: number;
	dropdownVisible?: boolean;
	toggleMenu?: (e?: React.MouseEvent) => void;
	navContainerRef?: React.RefObject<HTMLDivElement>;
	navListRef?: React.RefObject<HTMLUListElement>;
    /**
     * Optional pre-rendered search node. Used by the client Header to inject the
     * interactive HeaderSearch without importing it in this SSR-shared module.
     */
    searchNode?: React.ReactNode;
    /** Optional brand provided by the caller (supports local scope). */
	brand?: 'nhs' | 'fdp';
}

export function renderHeaderMarkup(
	props: HeaderProps,
	{
		variant,
		isClient,
		menuOpen = false,
		showMoreButton = false,
		visibleItems,
		dropdownVisible,
		toggleMenu,
		navContainerRef,
		navListRef,
		searchNode,
		brand: providedBrand,
	}: RenderHeaderOptions
) {
	const {
		className,
		logo = {},
		service = {},
		serviceName,
		organisation,
		search,
		account,
		navigation,
		containerClasses,
		variant: headerVariant = "default",
		attributes = {},
		fullWidth = false,
		maxVisibleItems, // deprecated (ignored)
			responsiveNavigation = true,
			logoVariant = LogoVariantEnum.Full,
			// Prevent leaking to DOM when ...rest is spread
			logoVariant: _logoVariant,
		...rest
	} = props;

	// Map deprecated serviceName into service.text if provided
	const effectiveService = {
		...service,
		text: service?.text ?? serviceName,
	};

	// Prevent internal-only props leaking to DOM
	if ("maxVisibleItems" in (rest as any)) {
		delete (rest as any).maxVisibleItems;
	}

	const combineLogoAndServiceNameLinks =
		(effectiveService.href && !logo.href) ||
		(effectiveService.href && effectiveService.href === logo.href);
	const logoHref = combineLogoAndServiceNameLinks ? effectiveService.href : logo.href;

	// Infer brand from document attribute (client only). Defaults to 'nhs' when absent/SSR.
	const inferBrand = (): 'nhs' | 'fdp' => {
		if (typeof document === 'undefined') return 'nhs';
		const attr = document.documentElement.getAttribute('data-brand');
		return attr === 'fdp' ? 'fdp' : 'nhs';
	};
	const brand = providedBrand ?? inferBrand();

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
		{
			"nhsuk-header__container--full-width": fullWidth && brand === 'nhs',
		},
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

		// Brand-aware default: show FDP logo in FDP brand scope; otherwise NHS logo SVG
				if (brand === 'fdp') {
					const fdpLogo = getBrandLogo(BrandKey.FDP, logoVariant);
			if (fdpLogo?.src) {
				return (
					<img
						className="nhsuk-header__organisation-logo"
						src={fdpLogo.src}
						data-logo-variant={logoVariant}
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
	const renderChevronIcon = () => (
		<svg
			className="nhsuk-icon nhsuk-icon__chevron-down"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-hidden="true"
			focusable="false"
		>
			<path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" />
		</svg>
	);

	// Server-only minimal search form markup to avoid importing HeaderSearch (which uses hooks)
	const renderServerSearch = () => {
		if (!search) return null;
		const {
			action = "/search",
			method = "get",
			name = "q",
			placeholder = "Search",
			visuallyHiddenLabel = "Search the NHS website",
			visuallyHiddenButton = "Search",
			formAttributes = {},
			inputAttributes = {},
			buttonAttributes = {},
			className: searchClassName,
		} = search as any;

		return (
			<div className={classNames('nhsuk-header__search', searchClassName)}>
				<form
					className="nhsuk-header__search-form"
					id="search"
					action={action}
					method={method}
					role="search"
					{...formAttributes}
				>
					<label className="nhsuk-u-visually-hidden" htmlFor="search-field">
						{visuallyHiddenLabel}
					</label>
					<div className="nhsuk-header__search-input-wrapper">
						<input
							className="nhsuk-header__search-input nhsuk-input"
							id="search-field"
							name={name}
							type="search"
							placeholder={placeholder}
							autoComplete="off"
							{...inputAttributes}
						/>
					</div>
					<button className="nhsuk-header__search-submit" type="submit" {...buttonAttributes}>
						<span className="nhsuk-u-visually-hidden">{visuallyHiddenButton}</span>
					</button>
				</form>
			</div>
		);
	};

	// Server variant fallback overflow handling (boolean-based)
	// If responsiveNavigation is false, we render everything in dropdown (no primary items)
	// This avoids brittle numeric thresholds server-side.
	const serverHasOverflow = variant === "server" && navigation?.items && !responsiveNavigation;
	const serverPrimaryItems = serverHasOverflow ? [] : navigation?.items;
	const serverOverflowItems = serverHasOverflow ? navigation!.items! : [];

	return (
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
				{/* Inject client search node when provided (client build only); otherwise render minimal server form */}
				{variant === 'client' ? (searchNode ?? null) : renderServerSearch()}
				<Account
					{...account}
					variant={headerVariant === "white" ? "white" : "default"}
				/>
			</div>
			{navigation && navigation.items && navigation.items.length > 0 && (
				<nav
					className={navigationClasses}
					aria-label={navigation.ariaLabel || "Menu"}
				>
					<div
						className={classNames(
							"nhsuk-header__navigation-container",
							"nhsuk-width-container",
							{
								"nhsuk-header__navigation-container--initializing":
									isClient && variant === "client",
								"nhsuk-header__navigation-container--ssr": !isClient,
							},
							containerClasses
						)}
						ref={variant === "client" ? navContainerRef : undefined}
					>
						<ul
							className="nhsuk-header__navigation-list"
							ref={variant === "client" ? navListRef : undefined}
						>
							{(variant === "server" ? serverPrimaryItems || [] : navigation?.items || []).map((item, index) => (
								<li
									key={index}
									className={classNames(
										"nhsuk-header__navigation-item",
										{
											"nhsuk-header__navigation-item--current":
												item.active || item.current,
											"nhsuk-header__navigation-item--hidden":
												variant === "client" &&
												showMoreButton &&
												visibleItems !== undefined &&
												index >= (visibleItems ?? 0),
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
							{variant === "client" &&
								showMoreButton &&
								visibleItems !== undefined && (
									<li className="nhsuk-header__navigation-item nhsuk-header__navigation-item--more">
										<button
											className="nhsuk-header__navigation-button"
											id="toggle-more-menu"
											type="button"
											aria-haspopup="true"
											aria-expanded={menuOpen ? "true" : "false"}
											aria-controls="nhsuk-header-more-menu"
											onClick={toggleMenu}
										>
											<span>More</span>
											{renderChevronIcon()}
										</button>
									</li>
								)}
						</ul>
					</div>
				</nav>
			)}
			{variant === "client" &&
				isClient &&
				navigation &&
				navigation.items &&
				navigation.items.length > 0 &&
				menuOpen &&
				dropdownVisible && (
					<div
						className="nhsuk-header__dropdown-menu"
						hidden={!dropdownVisible}
						id="nhsuk-header-more-menu"
					>
						<ul className="nhsuk-header__dropdown-list">
							{navigation.items.slice(visibleItems ?? 0).map((item, index) => (
								<li
									key={`overflow-${(visibleItems ?? 0) + index}`}
									className={classNames("nhsuk-header__dropdown-item", {
										"nhsuk-header__dropdown-item--current":
											item.active || item.current,
									})}
								>
									<a
										className="nhsuk-header__dropdown-link"
										href={item.href}
										{...(item.active || item.current
											? { "aria-current": item.current ? "page" : "true" }
											: {})}
										onClick={() => {
											toggleMenu?.();
										}}
									>
										{renderNavigationLinkContent(item)}
									</a>
								</li>
							))}
						</ul>
					</div>
				)}
			{variant === "server" &&
				serverHasOverflow &&
				serverOverflowItems.length > 0 && (
					<div className="nhsuk-header__dropdown-menu" data-ssr-overflow="true">
						<ul className="nhsuk-header__dropdown-list">
							{serverOverflowItems.map((item, index) => (
								<li
									key={`overflow-server-${index}`}
									className={classNames("nhsuk-header__dropdown-item", {
										"nhsuk-header__dropdown-item--current":
											item.active || item.current,
									})}
								>
									<a
										className="nhsuk-header__dropdown-link"
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
				)}
		</header>
	);
}
