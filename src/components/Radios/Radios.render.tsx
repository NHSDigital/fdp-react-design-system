import React, { ReactNode } from "react";
import classNames from "classnames";
import { RadiosProps, RadioConditionalProps } from "./Radios.types";
import { Label } from "../Label/Label";
import { Fieldset } from "../Fieldset/Fieldset";
import "./Radios.scss";
import { mapRadiosProps } from "../../mapping/radios";
import type { InputProps } from "../Input/Input.types";

// Pure render function used by both client (interactive) and server (static) variants.
// The caller supplies: selectedValue (string), event handlers (possibly no-ops for server),
// and flags controlling whether runtime behaviours should be activated.
export interface RenderRadiosOptions {
	variant: "client" | "server";
	selectedValue: string;
	enableBehaviourAttr?: boolean; // whether to include data-nhs-behaviour attribute
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
	handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	itemsRef?: React.MutableRefObject<HTMLInputElement[]>; // only for client roving focus
  /** Input component to use for conditional content; injected to avoid importing client Input in SSR. */
  InputComponent: React.ComponentType<InputProps>;
}

export function renderRadiosMarkup(
	props: RadiosProps,
	{
		variant,
		selectedValue,
		enableBehaviourAttr,
		handleChange,
		handleBlur,
		handleFocus,
		handleKeyDown,
		itemsRef,
    InputComponent,
	}: RenderRadiosOptions
) {
	// Remove user-supplied form event handlers so they are only bound to inputs, not the wrapper
	const {
		onChange: _omitOnChange,
		onBlur: _omitOnBlur,
		onFocus: _omitOnFocus,
		...safeProps
	} = props as any;
	const {
		name,
		hasError = false,
		describedBy,
		className,
		size = "normal",
		inline = false,
		options,
		...rest
	} = safeProps;

	const { classes: radiosClasses, describedBy: mappedDescribedBy } =
		mapRadiosProps({ hasError, size, inline, className, describedBy });

	return (
		<Fieldset>
			<div
				className={radiosClasses}
				{...rest}
				{...(enableBehaviourAttr ? { "data-nhs-behaviour": "radios" } : {})}
			>
				{options.map((option: any, index: number) => {
					const radioId = `${name}-${index}`;
					const conditionalId = option.conditional
						? `${radioId}-conditional`
						: undefined;
					const isSelected = selectedValue === option.value;
					return (
						<div key={option.value} className="nhsuk-radios__item">
							<input
								className="nhsuk-radios__input"
								id={radioId}
								name={name}
								type="radio"
								value={option.value}
								disabled={option.disabled}
								{...(variant === "client"
									? {
											checked: isSelected,
											onChange: handleChange,
											onBlur: handleBlur,
											onFocus: handleFocus,
											onKeyDown: handleKeyDown,
											ref: (el: HTMLInputElement) => {
												if (el && itemsRef) itemsRef.current[index] = el;
											},
										}
									: {
											defaultChecked: isSelected,
											"data-nhs-radios-input": true,
										})}
								aria-describedby={mappedDescribedBy}
							/>
							<label className="nhsuk-radios__label" htmlFor={radioId}>
								{option.text}
							</label>
							{option.hint && (
								<div className="nhsuk-radios__hint">{option.hint}</div>
							)}
							{option.conditional && (
								<div
									className={classNames("nhsuk-radios__conditional", {
										"nhsuk-radios__conditional--hidden": !isSelected,
									})}
									id={conditionalId}
									{...(variant === "server"
										? { "data-nhs-radios-conditional": true }
										: {})}
								>
									{typeof option.conditional === "object" &&
									option.conditional !== null &&
									"label" in option.conditional &&
									"id" in option.conditional &&
									"name" in option.conditional ? (
										<div style={{ marginTop: "16px" }}>
											{(option.conditional as RadioConditionalProps).label && (
												<Label
													htmlFor={
														(option.conditional as RadioConditionalProps).id
													}
												>
													{(option.conditional as RadioConditionalProps).label}
												</Label>
											)}
											<InputComponent
												{...(option.conditional as RadioConditionalProps)}
											/>
										</div>
									) : (
										(option.conditional as ReactNode)
									)}
								</div>
							)}
						</div>
					);
				})}
			</div>
		</Fieldset>
	);
}
