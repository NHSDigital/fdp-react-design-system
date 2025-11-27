import React, { useState, useRef, useCallback } from 'react';
import { RadiosProps } from './Radios.types';
import { renderRadiosMarkup } from './Radios.render';
import { Input } from '../Input/Input';

export const Radios: React.FC<RadiosProps> = ({ value, defaultValue, onChange, onBlur, onFocus, ...rest }) => {
	const [selectedValue, setSelectedValue] = useState(value || defaultValue || '');
	const itemsRef = useRef<HTMLInputElement[]>([]);

	// Minimal guards: only emit change if value actually changed
	const lastValueRef = useRef<string | null>(selectedValue);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		if (newValue === lastValueRef.current) return; // ignore duplicate
		lastValueRef.current = newValue;
		setSelectedValue(newValue);
		onChange?.(event);
	};

	const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
		onFocus?.(event);
	};

	const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
		const { key } = event;
		if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(key)) return;
		event.preventDefault();
		const enabledRadios = itemsRef.current.filter(r => r && !r.disabled);
		const current = enabledRadios.indexOf(event.currentTarget);
		if (current === -1) return;
		let nextIndex = current;
		if (['ArrowDown', 'ArrowRight'].includes(key)) nextIndex = (current + 1) % enabledRadios.length;
		else if (['ArrowUp', 'ArrowLeft'].includes(key)) nextIndex = (current - 1 + enabledRadios.length) % enabledRadios.length;
		const nextRadio = enabledRadios[nextIndex];
		if (nextRadio) {
			nextRadio.focus();
			if (!nextRadio.checked) nextRadio.click();
		}
	}, []);

	return renderRadiosMarkup(
		{ value, defaultValue, onChange, onBlur, onFocus, ...rest },
		{
			variant: 'client',
			selectedValue,
			enableBehaviourAttr: false,
			handleChange,
			handleBlur: onBlur,
			handleFocus, // wrapped to suppress duplicate focus calls
			handleKeyDown,
			itemsRef,
			InputComponent: Input,
		}
	);
};

