import React from 'react';
void React; // ensure identifier exists for JSX classic runtime edge-cases
import { InputProps } from './Input.types';
import { mapInputProps } from "../../mapping/input";
import "./Input.scss";
/**
 * InputServer – Pure server-only renderer (no hooks).
 *
 * Notes:
 * - Does not attach event handlers; server components should not emit functions.
 * - For range inputs, computes an initial display value but does not manage state.
 */
export function InputServer(props: InputProps) {
	const {
		id,
		name,
		type = "text",
		value,
		defaultValue,
		placeholder,
		disabled = false,
		readOnly = false,
		required = false,
		hasError = false,
		describedBy,
		className,
		width = "full",
		inputMode,
		autoComplete,
		maxLength,
		minLength,
		pattern,
		step,
		min,
		max,
		showValueLabels = false,
		showCurrentValue = false,
		valueLabels,
		// Strip interactive handlers in server variant
		onChange: _onChange,
		onBlur: _onBlur,
		onFocus: _onFocus,
		onKeyDown: _onKeyDown,
		...rest
	} = props;

	const { classes: inputClasses, isRange } = mapInputProps({
		id,
		name,
		type,
		hasError,
		width,
		className,
	});

	const commonProps = {
		id,
		name,
		type,
		placeholder,
		disabled,
		readOnly,
		required,
		"aria-describedby": describedBy,
		inputMode,
		autoComplete,
		maxLength,
		minLength,
		pattern,
		step,
		min,
		max,
		...rest,
	} as const;

	if (isRange) {
		const initialDisplay = (value ??
			defaultValue ??
			(typeof min !== "undefined" ? String(min) : "0")) as string;
		const rangeInput = (
			<input
				className={inputClasses}
				{...(value !== undefined ? { value } : {})}
				{...(value === undefined && defaultValue !== undefined
					? { defaultValue }
					: {})}
				data-current-value={initialDisplay}
				{...commonProps}
			/>
		);

		return (
			<div className="nhsuk-input-range-wrapper">
				{showValueLabels ? (
					<div className="nhsuk-input-range-labels">
						<span className="nhsuk-input-range-label nhsuk-input-range-label--min">
							{valueLabels?.min || min || "0"}
						</span>
						{rangeInput}
						<span className="nhsuk-input-range-label nhsuk-input-range-label--max">
							{valueLabels?.max || max || "100"}
						</span>
					</div>
				) : (
					rangeInput
				)}
				{showCurrentValue && (
					<div className="nhsuk-input-range-current-value">
						<span className="nhsuk-input-range-current-label">
							{valueLabels?.current || "Current value:"}{" "}
							<strong>{initialDisplay}</strong>
						</span>
					</div>
				)}
			</div>
		);
	}

	return (
		<input
			className={inputClasses}
			{...(value !== undefined ? { value } : {})}
			{...(value === undefined && defaultValue !== undefined
				? { defaultValue }
				: {})}
			{...commonProps}
		/>
	);
}
