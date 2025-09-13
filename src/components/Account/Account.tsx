import React from "react";
import classNames from "classnames";
import "./Account.scss";
import { AccountProps, AccountItem } from "./Account.types";

/**
 * Account Component for NHS Design System
 *
 * A standalone component that handles user account navigation,
 * extracted from the Header component for better modularity.
 */
export const Account: React.FC<AccountProps> = ({
	ariaLabel = "Account",
	items = [],
	className,
	variant = "default",
}) => {
	// Don't render if no items provided
	if (!items || items.length === 0) {
		return null;
	}

	// Render account item - following NHS.UK structure exactly
	const renderAccountItem = (item: AccountItem) => {
		const iconContent = item.icon ? (
			<svg
				className="nhsuk-icon nhsuk-icon__user"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				aria-hidden="true"
				focusable="false"
				role="img"
				aria-label={item.icon === true ? "User" : undefined}
			>
				<path d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" />
			</svg>
		) : null;

		const textContent = item.html ? (
			<span dangerouslySetInnerHTML={{ __html: item.html }} />
		) : (
			item.text
		);

		const content = (
			<>
				{iconContent}
				{textContent}
			</>
		);

		if (item.href) {
			return (
				<a
					className="nhsuk-account__link nhsuk-header__account-link"
					href={item.href}
				>
					{content}
				</a>
			);
		}

		if (item.action) {
			return (
				<form
					className="nhsuk-account__form"
					action={item.action}
					method={item.method || "post"}
				>
					<button className="nhsuk-account__button" type="submit" role="button">
						{content}
					</button>
				</form>
			);
		}

		// Fallback for items without href or action
		return <span>{content}</span>;
	};

	return (
		<nav
			className={classNames(
				"nhsuk-account",
				{
					"nhsuk-account--white": variant === "white",
				},
				className
			)}
			aria-label={ariaLabel}
		>
			<ul className="nhsuk-account__list">
				{items.map(
					(item, index) =>
						item && (
							<li
								key={index}
								className={classNames(
									"nhsuk-account__item nhsuk-header__account-item",
									item.className
								)}
							>
								{renderAccountItem(item)}
							</li>
						)
				)}
			</ul>
		</nav>
	);
};

export default Account;
