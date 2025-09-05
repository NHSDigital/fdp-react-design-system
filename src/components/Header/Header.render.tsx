import React from "react";
import classNames from "classnames";
import { HeaderProps, NavigationItem } from "./Header.types";
import { Account } from "../Account";
import { HeaderSearch } from "../HeaderSearch";
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
	}: RenderHeaderOptions
) {
	const {
		className,
		logo = {},
		service = {},
		organisation,
		search,
		account,
		navigation,
		containerClasses,
		variant: headerVariant = "default",
		attributes = {},
		maxVisibleItems,
		...rest
	} = props;

	// Prevent internal-only props leaking to DOM
	if ("maxVisibleItems" in (rest as any)) {
		delete (rest as any).maxVisibleItems;
	}

	const combineLogoAndServiceNameLinks =
		(service.href && !logo.href) ||
		(service.href && service.href === logo.href);
	const logoHref = combineLogoAndServiceNameLinks ? service.href : logo.href;

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

	const renderServiceLogo = () =>
		logo.src ? (
			<img
				className="nhsuk-header__organisation-logo"
				src={logo.src}
				width="280"
				alt={logo.ariaLabel || "NHS"}
			/>
		) : (
			renderNHSLogo()
		);
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
			viewBox="0 0 12 7"
			aria-hidden="true"
			focusable="false"
		>
			<path d="M1.414 0 6 4.586 10.586 0 12 1.414 6 7 0 1.414 1.414 0Z" />
		</svg>
	);

	// Server variant fallback overflow handling:
	// If maxVisibleItems is provided (default 4) and navigation contains more items,
	// we pre-render a split: first N items in the main list, remaining in an always-visible
	// dropdown menu so that all navigation is accessible without JS. Once enhanced,
	// the client variant will recompute actual widths and may adjust.
	const serverTrigger = maxVisibleItems ?? 4; // threshold to decide if we collapse entirely into dropdown
	const serverHasOverflow =
		variant === "server" &&
		navigation?.items &&
		navigation.items.length > serverTrigger;
	// New behaviour: when overflow triggers on server we show NO primary items; everything appears in dropdown
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
								renderServiceName(service.text)}
						</a>
					) : (
						<>
							{renderServiceLogo()}
							{renderOrganisationName()}
							{combineLogoAndServiceNameLinks &&
								renderServiceName(service.text)}
						</>
					)}
					{service.text &&
						!combineLogoAndServiceNameLinks &&
						renderServiceName(service.text, service.href)}
				</div>
				{search && <HeaderSearch {...search} />}
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
					>
						<ul className="nhsuk-header__navigation-list">
							{(variant === "server"
								? serverPrimaryItems || []
								: (navigation?.items || []).slice(
										0,
										visibleItems ?? (navigation?.items?.length || 0)
									)
							).map((item, index) => (
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
							{variant === "client" &&
								showMoreButton &&
								visibleItems !== undefined &&
								navigation?.items &&
								visibleItems < navigation.items.length && (
									<li className="nhsuk-header__navigation-item nhsuk-header__navigation-item--more">
										<a
											className="nhsuk-header__navigation-button"
											id="toggle-more-menu"
											onClick={toggleMenu}
											type="button"
										>
											<span>More</span>
											{renderChevronIcon()}
										</a>
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
