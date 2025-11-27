import * as React from "react";
import { mapButtonProps } from "../../mapping/button";
import type { ButtonAsButtonProps, ButtonAsLinkProps } from "./Button";
import { ButtonVariant, ButtonSize } from "./Button.types";
import "./Button.scss";

/**
 * Server-first Button component
 * - Pure render: no client state, no browser APIs, no event wiring
 * - Emits stable markup and behaviour contract (data-module, data-prevent-double-click)
 * - Behaviours can enhance this markup on the client (progressive enhancement)
 */
export type ButtonServerProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const ButtonServer = React.forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	ButtonServerProps
>(function ButtonServer(props, ref) {
	const {
		children,
		variant = ButtonVariant.Primary,
		size = ButtonSize.Default,
		fullWidth = false,
		className = "",
		preventDoubleClick = false,
		...rest
	} = props as ButtonServerProps & {
		children: React.ReactNode;
	};

	const model = mapButtonProps({
		variant,
		size,
		fullWidth,
		className,
		href: "href" in (rest as any) ? (rest as any).href : undefined,
		preventDoubleClick,
	});

	// Render as anchor when href is provided
	if ("href" in (rest as any) && (rest as any).href) {
		const anchorProps = rest as ButtonAsLinkProps as any;
		const {
			id,
			style,
			title,
			["aria-label"]: ariaLabel,
			["aria-describedby"]: ariaDescribedBy,
			["aria-labelledby"]: ariaLabelledBy,
			tabIndex,
			...anchorRest
		} = anchorProps;

		return (
			<a
				ref={ref as React.Ref<HTMLAnchorElement>}
				href={anchorProps.href}
				target={anchorProps.target}
				rel={anchorProps.rel}
				className={model.classes}
				role="button"
				draggable="false"
				data-module="nhs-button"
				{...(preventDoubleClick && { "data-prevent-double-click": "true" })}
				// Pass-through common attributes explicitly for clarity
				id={id}
				style={style}
				title={title}
				aria-label={ariaLabel}
				aria-describedby={ariaDescribedBy}
				aria-labelledby={ariaLabelledBy}
				tabIndex={tabIndex}
				{...anchorRest}
			>
				{children}
			</a>
		);
	}

	// Otherwise render as native button
	const buttonProps = rest as ButtonAsButtonProps as any;
	const {
		id,
		style,
		title,
		["aria-label"]: ariaLabel,
		["aria-describedby"]: ariaDescribedBy,
		["aria-labelledby"]: ariaLabelledBy,
		tabIndex,
		name,
		value: valueProp,
		form,
		formAction,
		formEncType,
		formMethod,
		formNoValidate,
		formTarget,
		autoFocus,
		type,
		disabled,
		...buttonRest
	} = buttonProps;

	return (
		<button
			ref={ref as React.Ref<HTMLButtonElement>}
			type={type || "button"}
			disabled={disabled}
			className={model.classes}
			data-module="nhs-button"
			{...(preventDoubleClick && { "data-prevent-double-click": "true" })}
			id={id}
			style={style}
			title={title}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedBy}
			aria-labelledby={ariaLabelledBy}
			tabIndex={tabIndex}
			name={name}
			value={valueProp}
			form={form}
			formAction={formAction}
			formEncType={formEncType}
			formMethod={formMethod}
			formNoValidate={formNoValidate}
			formTarget={formTarget}
			autoFocus={autoFocus}
			{...buttonRest}
		>
			{children}
		</button>
	);
});

ButtonServer.displayName = "ButtonServer";

export default ButtonServer;
