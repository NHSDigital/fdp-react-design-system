import React, { useState, useCallback, useRef, useEffect } from "react";
import classNames from "classnames";
import { HeaderSearchProps, SearchQuery } from "./HeaderSearch.types";
import "./HeaderSearch.scss";

/**
 * HeaderSearch Component - Flexible Search Implementation
 *
 * Supports three modes:
 * 1. 'form' - Traditional form submission (SSR-friendly, default)
 * 2. 'controlled' - Full React controlled component with callbacks
 * 3. 'hybrid' - Form submission with optional client-side enhancement
 *
 * Examples:
 *
 * // SSR/Traditional form (default)
 * <HeaderSearch action="/search" />
 *
 * // Controlled React component
 * <HeaderSearch
 *   mode="controlled"
 *   value={searchQuery}
 *   callbacks={{ onChange: setSearchQuery, onSearch: handleSearch }}
 * />
 *
 * // Progressive enhancement
 * <HeaderSearch
 *   mode="hybrid"
 *   action="/search"
 *   callbacks={{ onSearch: handleClientSearch }}
 * />
 */
export const HeaderSearch: React.FC<HeaderSearchProps> = ({
	mode = "form",
	action = "/search",
	method = "get",
	name = "q",
	value,
	placeholder = "Search",
	visuallyHiddenLabel = "Search the NHS website",
	visuallyHiddenButton = "Search",
	className,
	disabled = false,
	callbacks = {},
	isLoading = false,
	showResults = false,
	results = [],
	formAttributes = {},
	inputAttributes = {},
	buttonAttributes = {},
	preventDefaultSubmit = false,
	debounceMs = 300,
	minQueryLength = 1,
}) => {
	// Internal state for uncontrolled mode
	const [internalValue, setInternalValue] = useState("");
	const [isFocused, setIsFocused] = useState(false);

	// Refs for debouncing and form handling
	const debounceRef = useRef<NodeJS.Timeout | undefined>(undefined);
	const formRef = useRef<HTMLFormElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	// Determine current value based on mode
	const isControlled = mode === "controlled" && value !== undefined;
	const currentValue = isControlled ? value : internalValue;

	// Debounced change handler
	const debouncedOnChange = useCallback(
		(query: string) => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}

			debounceRef.current = setTimeout(() => {
				if (callbacks.onChange && query.length >= minQueryLength) {
					callbacks.onChange(query);
				}
			}, debounceMs);
		},
		[callbacks.onChange, debounceMs, minQueryLength]
	);

	// Input change handler
	const handleInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = e.target.value;

			// Update internal state if not controlled
			if (!isControlled) {
				setInternalValue(newValue);
			}

			// Call debounced onChange for controlled/hybrid modes
			if (mode !== "form") {
				debouncedOnChange(newValue);
			}
		},
		[isControlled, mode, debouncedOnChange]
	);

	// Form submission handler
	const handleFormSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			const query = currentValue.trim();

			// Create search data
			const searchData: SearchQuery = {
				query,
				timestamp: Date.now(),
				formData: new FormData(e.currentTarget),
			};

			// Handle different modes
			if (
				mode === "controlled" ||
				(mode === "hybrid" && preventDefaultSubmit)
			) {
				e.preventDefault();

				if (callbacks.onSearch && query.length >= minQueryLength) {
					callbacks.onSearch(searchData);
				}
			} else if (mode === "hybrid" && callbacks.onSearch) {
				// Let form submit normally but also trigger callback
				if (query.length >= minQueryLength) {
					callbacks.onSearch(searchData);
				}
			}
			// For 'form' mode, let the browser handle submission naturally
		},
		[
			mode,
			currentValue,
			callbacks.onSearch,
			preventDefaultSubmit,
			minQueryLength,
		]
	);

	// Focus handlers
	const handleFocus = useCallback(() => {
		setIsFocused(true);
		callbacks.onFocus?.();
	}, [callbacks.onFocus]);

	const handleBlur = useCallback(() => {
		setIsFocused(false);
		callbacks.onBlur?.();
	}, [callbacks.onBlur]);

	// Clear search
	const handleClear = useCallback(() => {
		if (!isControlled) {
			setInternalValue("");
		}
		callbacks.onClear?.();
		inputRef.current?.focus();
	}, [isControlled, callbacks.onClear]);

	// Cleanup debounce on unmount
	useEffect(() => {
		return () => {
			if (debounceRef.current) {
				clearTimeout(debounceRef.current);
			}
		};
	}, []);

	// Search icon SVG - exact copy from NHS.UK
	const renderSearchIcon = () => (
		<svg
			className={classNames("nhsuk-icon nhsuk-icon__search", {
				"nhsuk-icon__search--loading": isLoading,
			})}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-hidden="true"
			focusable="false"
		>
			<path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" />
		</svg>
	);

	// Loading spinner for async operations
	const renderLoadingSpinner = () => (
		<svg
			className="nhsuk-icon nhsuk-icon__spinner"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			aria-hidden="true"
			focusable="false"
		>
			<circle
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="2"
				fill="none"
				strokeLinecap="round"
				strokeDasharray="31.416"
				strokeDashoffset="31.416"
			>
				<animate
					attributeName="stroke-dasharray"
					dur="2s"
					values="0 31.416;15.708 15.708;0 31.416"
					repeatCount="indefinite"
				/>
				<animate
					attributeName="stroke-dashoffset"
					dur="2s"
					values="0;-15.708;-31.416"
					repeatCount="indefinite"
				/>
			</circle>
		</svg>
	);

	// Clear button
	const renderClearButton = () => {
		if (!currentValue || mode === "form") return null;

		return (
			<button
				type="button"
				className="nhsuk-header__search-clear"
				onClick={handleClear}
				aria-label="Clear search"
			>
				<svg
					className="nhsuk-icon nhsuk-icon__close"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					aria-hidden="true"
					focusable="false"
				>
					<path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" />
				</svg>
			</button>
		);
	};

	// Results dropdown
	const renderResults = () => {
		if (!showResults || !results.length || !isFocused) return null;

		return (
			<div className="nhsuk-header__search-results" role="listbox">
				{results.map((result) => (
					<div
						key={result.id}
						className="nhsuk-header__search-result"
						role="option"
					>
						{result.href ? (
							<a
								href={result.href}
								className="nhsuk-header__search-result-link"
							>
								<span className="nhsuk-header__search-result-title">
									{result.title}
								</span>
								{result.description && (
									<span className="nhsuk-header__search-result-description">
										{result.description}
									</span>
								)}
							</a>
						) : (
							<button
								type="button"
								className="nhsuk-header__search-result-button"
								onClick={() =>
									callbacks.onSearch?.({
										query: result.title,
										timestamp: Date.now(),
									})
								}
							>
								<span className="nhsuk-header__search-result-title">
									{result.title}
								</span>
								{result.description && (
									<span className="nhsuk-header__search-result-description">
										{result.description}
									</span>
								)}
							</button>
						)}
					</div>
				))}
			</div>
		);
	};

	return (
		<div
			className={classNames("nhsuk-header__search", className, {
				"nhsuk-header__search--controlled": mode === "controlled",
				"nhsuk-header__search--hybrid": mode === "hybrid",
				"nhsuk-header__search--loading": isLoading,
				"nhsuk-header__search--focused": isFocused,
				"nhsuk-header__search--has-results": showResults && results.length > 0,
			})}
		>
			<form
				ref={formRef}
				className="nhsuk-header__search-form"
				id="search"
				action={mode !== "controlled" ? action : undefined}
				method={mode !== "controlled" ? method : undefined}
				role="search"
				onSubmit={handleFormSubmit}
				{...formAttributes}
			>
				<label className="nhsuk-u-visually-hidden" htmlFor="search-field">
					{visuallyHiddenLabel}
				</label>

				<div className="nhsuk-header__search-input-wrapper">
					<input
						ref={inputRef}
						className="nhsuk-header__search-input nhsuk-input"
						id="search-field"
						name={mode !== "controlled" ? name : undefined}
						type="search"
						placeholder={placeholder}
						autoComplete="off"
						value={currentValue}
						onChange={handleInputChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						disabled={disabled || isLoading}
						{...(showResults && results.length > 0
							? { "aria-expanded": true, "aria-haspopup": "listbox" }
							: {})}
						{...inputAttributes}
					/>
					{renderClearButton()}
				</div>

				<button
					className="nhsuk-header__search-submit"
					type="submit"
					disabled={
						disabled ||
						isLoading ||
						(mode !== "form" && currentValue.length < minQueryLength)
					}
					{...buttonAttributes}
				>
					{isLoading ? renderLoadingSpinner() : renderSearchIcon()}
					<span className="nhsuk-u-visually-hidden">
						{isLoading ? "Searching..." : visuallyHiddenButton}
					</span>
				</button>
			</form>

			{renderResults()}
		</div>
	);
};
