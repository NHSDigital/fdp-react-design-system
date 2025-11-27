import React from "react";
void React; // ensure identifier exists for JSX classic runtime edge-cases
import classNames from "classnames";
import "./DateInput.scss";
import type { DateInputProps, DateInputItem } from "./DateInput.types";
import { InputServer as Input } from "../Input/Input.server";
import { Hint } from "../Hint";
import { ErrorMessage } from "../ErrorMessage";
import { Label } from "../Label";
import { Fieldset } from "../Fieldset/Fieldset";

/**
 * DateInputServer – Pure server-only renderer (no hooks, no event handlers).
 *
 * Renders the same semantic markup as the interactive DateInput, but without
 * client-side state/validation. Suitable for SSR-only usage or progressive enhancement.
 */
export function DateInputServer({
	id,
	className,
	items,
	namePrefix,
	values = {},
	fieldset,
	hint,
	errorMessage,
	// strip interactive props
	onChange: _onChange,
	...props
}: DateInputProps) {

	const defaultItems: DateInputItem[] = [
		{
			name: "day",
			classes: "nhsuk-input--width-2",
			inputmode: "numeric",
			pattern: "[0-9]*",
		},
		{
			name: "month",
			classes: "nhsuk-input--width-2",
			inputmode: "numeric",
			pattern: "[0-9]*",
		},
		{
			name: "year",
			classes: "nhsuk-input--width-4",
			inputmode: "numeric",
			pattern: "[0-9]*",
		},
	];

	const dateInputItems = items || defaultItems;

	// Generate describedBy chain from hint/error sections
	let describedBy = fieldset?.describedBy || "";
	const hintId = hint ? `${id}-hint` : "";
	const errorId = errorMessage ? `${id}-error` : "";
	
	if (hintId) describedBy = describedBy ? `${describedBy} ${hintId}` : hintId;
	if (errorId)
		describedBy = describedBy ? `${describedBy} ${errorId}` : errorId;

	const formGroupClasses = classNames("nhsuk-form-group", {
		"nhsuk-form-group--error": Boolean(errorMessage),
	});

	const dateInputClasses = classNames("nhsuk-date-input", className);

	const renderInputs = () => (
		<>
			{hint && (
				<Hint id={hintId} className={hint.classes}>
					{hint.html ? (
						<span dangerouslySetInnerHTML={{ __html: hint.html }} />
					) : (
						hint.text
					)}
				</Hint>
			)}

			{errorMessage && (
				<ErrorMessage id={errorId} className={errorMessage.classes}>
					{errorMessage.html ? (
						<span dangerouslySetInnerHTML={{ __html: errorMessage.html }} />
					) : (
						errorMessage.text
					)}
				</ErrorMessage>
			)}

			<div
				className={dateInputClasses}
				id={id}
				data-testid="date-input"
				{...props}
			>
				{dateInputItems.map((item) => {
					const inputId = item.id || `${id}-${item.name}`;
					const inputName = namePrefix
						? `${namePrefix}[${item.name}]`
						: item.name;
					const labelText =
						item.label ||
						item.name.charAt(0).toUpperCase() + item.name.slice(1);
					const valueForField = (values as any)[item.name] as
						| string
						| undefined;

					return (
						<div key={item.name} className="nhsuk-date-input__item">
							<Label htmlFor={inputId} className="nhsuk-date-input__label">
								{labelText}
							</Label>
							<Input
								id={inputId}
								name={inputName}
								defaultValue={valueForField}
								className={classNames("nhsuk-date-input__input", item.classes)}
								inputMode={item.inputmode}
								autoComplete={item.autocomplete}
								pattern={item.pattern}
								aria-describedby={describedBy || undefined}
							/>
						</div>
					);
				})}
			</div>
		</>
	);

	return (
		<div className={formGroupClasses}>
			{fieldset ? (
				<Fieldset
					className={fieldset.classes}
					legend={fieldset.legend ? { text: fieldset.legend } : undefined}
					describedBy={describedBy || undefined}
				>
					{renderInputs()}
				</Fieldset>
			) : (
				renderInputs()
			)}
		</div>
	);
}

export default DateInputServer;
