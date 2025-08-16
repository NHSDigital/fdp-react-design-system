import * as React from 'react';
const { forwardRef, useCallback, useState } = React;
import { ButtonVariant, ButtonSize } from './Button.types';
import './Button.scss';

/**
 * Base props for NHS Button component
 */
interface BaseButtonProps {
	/**
	 * The variant of the button
	 * @default 'primary'
	 */
	variant?: ButtonVariant;
	
	/**
	 * The size of the button
	 * @default 'default'
	 */
	size?: ButtonSize;
	
	/**
	 * Whether the button should take up the full width of its container
	 * @default false
	 */
	fullWidth?: boolean;
	
	/**
	 * Additional CSS class names
	 */
	className?: string;
	
	/**
	 * Button content
	 */
	children: React.ReactNode;
	
	/**
	 * Prevent double click submissions (adds debouncing)
	 * @default false
	 */
	preventDoubleClick?: boolean;
}

/**
 * Props when rendering as button element (no href)
 */
export interface ButtonAsButtonProps extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
	/**
	 * Button type
	 * @default 'button'
	 */
	type?: 'button' | 'submit' | 'reset';
}

/**
 * Props when rendering as anchor element (with href)
 */
export interface ButtonAsLinkProps extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps | 'role' | 'type'> {
	/**
	 * When provided, renders as anchor link instead of button
	 */
	href: string;
	
	/**
	 * Link target
	 */
	target?: string;
	
	/**
	 * Link rel attribute
	 */
	rel?: string;
	
	/**
	 * Use aria-disabled for anchor elements (no native disabled support)
	 * Use disabled prop instead for button elements
	 */
	'aria-disabled'?: 'true' | 'false';
}

/**
 * NHS Button Component
 * 
 * A button component that provides excellent accessibility out of the box 
 * while following NHS design guidelines. Based on NHS.UK button patterns.
 * 
 * Features:
 * - Full keyboard navigation support (Enter and Space key activation)
 * - Screen reader compatibility
 * - Focus management
 * - Proper ARIA attributes
 * - Double-click prevention
 * - Support for button and link variants
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="default">
 *	 Continue
 * </Button>
 * 
 * <Button href="/next-page" variant="secondary">
 *	 Go to next page
 * </Button>
 * ```
 */

// Implementation function
function ButtonComponent(
	props: ButtonAsButtonProps | ButtonAsLinkProps,
	ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>
): React.ReactElement {
	const {
		children,
		variant = 'primary',
		size = 'default',
		fullWidth = false,
		className = '',
		preventDoubleClick = false,
		...rest
	} = props;

	// State for interactive data attributes (replaces React Aria state management)
	const [isPressed, setIsPressed] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	// Build CSS classes
	const classes = [
		'nhs-aria-button',
		`nhs-aria-button--${variant}`,
		size !== 'default' ? `nhs-aria-button--${size}` : '',
		fullWidth ? 'nhs-aria-button--full-width' : '',
		className
	].filter(Boolean).join(' ');

	// Build data attributes for styling (replaces React Aria data attributes)
	const isDisabled = 'disabled' in rest ? rest.disabled : rest['aria-disabled'] === 'true';
	const dataAttributes = {
		...(isPressed && { 'data-pressed': 'true' }),
		...(isHovered && { 'data-hovered': 'true' }),
		...(isFocused && { 'data-focused': 'true' }),
		...(isDisabled && { 'data-disabled': 'true' })
	};

	// Event handlers for state management
	const handleMouseDown = useCallback(() => !isDisabled && setIsPressed(true), [isDisabled]);
	const handleMouseUp = useCallback(() => setIsPressed(false), []);
	const handleMouseEnter = useCallback(() => !isDisabled && setIsHovered(true), [isDisabled]);
	const handleMouseLeave = useCallback(() => {
		setIsHovered(false);
		setIsPressed(false); // Reset pressed state when leaving
	}, []);
	const handleFocus = useCallback(() => setIsFocused(true), []);
	const handleBlur = useCallback(() => setIsFocused(false), []);

	// Handle keyboard navigation (Space key support for buttons and links with role="button")
	const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLElement>) => {
		// Handle space bar activation for button role elements
		if (event.key === ' ' && ('href' in rest || event.currentTarget.getAttribute('role') === 'button')) {
			event.preventDefault();
			(event.currentTarget as HTMLElement).click();
		}
	}, [rest]);

	// Handle click with double-click prevention
	const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
		// Double-click prevention logic (following NHS.UK pattern)
		if (preventDoubleClick) {
			const target = event.currentTarget as HTMLElement;
			const isAlreadyProcessing = target.getAttribute('data-processing') === 'true';
			
			if (isAlreadyProcessing) {
				event.preventDefault();
				return;
			}
			
			// Mark as processing
			target.setAttribute('data-processing', 'true');
			
			// Clear processing state after 1 second
			setTimeout(() => {
				target.removeAttribute('data-processing');
			}, 1000);
		}
	}, [preventDoubleClick]);

	// Render as anchor link if href is provided
	if ('href' in rest && rest.href) {
		const { id, style, title, ['aria-label']: ariaLabel, ['aria-describedby']: ariaDescribedBy, ['aria-labelledby']: ariaLabelledBy, tabIndex, ...anchorRest } = rest as ButtonAsLinkProps as any;
		const anchorProps = rest as ButtonAsLinkProps;
		return (
			<a
				ref={ref as React.Ref<HTMLAnchorElement>}
				href={anchorProps.href}
				target={anchorProps.target}
				rel={anchorProps.rel}
				className={classes}
				role="button"
				draggable="false"
				data-module="nhs-button"
				{...dataAttributes}
				{...(preventDoubleClick && { 'data-prevent-double-click': 'true' })}
				{...anchorRest}
				onKeyDown={(event) => {
					anchorProps.onKeyDown?.(event);
					handleKeyDown(event);
				}}
				onClick={(event) => {
					anchorProps.onClick?.(event);
					handleClick(event);
				}}
				onMouseDown={(event) => {
					anchorProps.onMouseDown?.(event);
					handleMouseDown();
				}}
				onMouseUp={(event) => {
					anchorProps.onMouseUp?.(event);
					handleMouseUp();
				}}
				onMouseEnter={(event) => {
					anchorProps.onMouseEnter?.(event);
					handleMouseEnter();
				}}
				onMouseLeave={(event) => {
					anchorProps.onMouseLeave?.(event);
					handleMouseLeave();
				}}
				onFocus={(event) => {
					anchorProps.onFocus?.(event);
					handleFocus();
				}}
				onBlur={(event) => {
					anchorProps.onBlur?.(event);
					handleBlur();
				}}
				// Note: anchor links don't support disabled, but we can simulate it with aria-disabled
				aria-disabled={anchorProps['aria-disabled']}
				{...(anchorProps['aria-disabled'] === 'true' && { 'tabIndex': -1 })}
				// Extract relevant props excluding our custom ones
				id={id}
				style={style}
				title={title}
				aria-label={ariaLabel}
				aria-describedby={ariaDescribedBy}
				aria-labelledby={ariaLabelledBy}
				tabIndex={tabIndex}
			>
				{children}
			</a>
		);
	}

	// Render as button element
	const { id, style, title, ['aria-label']: ariaLabel, ['aria-describedby']: ariaDescribedBy, ['aria-labelledby']: ariaLabelledBy, tabIndex, name, value: valueProp, form, formAction, formEncType, formMethod, formNoValidate, formTarget, autoFocus, ...buttonRest } = rest as any as ButtonAsButtonProps;
	const buttonProps = rest as ButtonAsButtonProps;
	return (
		<button
			ref={ref as React.Ref<HTMLButtonElement>}
			type={buttonProps.type || 'button'}
			disabled={buttonProps.disabled}
			className={classes}
			data-module="nhs-button"
			{...dataAttributes}
			{...(preventDoubleClick && { 'data-prevent-double-click': 'true' })}
			{...(buttonProps.disabled && { 'aria-disabled': 'true' })}
			{...buttonRest}
			onKeyDown={(event) => {
				buttonProps.onKeyDown?.(event);
				handleKeyDown(event);
			}}
			onClick={(event) => {
				buttonProps.onClick?.(event);
				handleClick(event);
			}}
			onMouseDown={(event) => {
				buttonProps.onMouseDown?.(event);
				handleMouseDown();
			}}
			onMouseUp={(event) => {
				buttonProps.onMouseUp?.(event);
				handleMouseUp();
			}}
			onMouseEnter={(event) => {
				buttonProps.onMouseEnter?.(event);
				handleMouseEnter();
			}}
			onMouseLeave={(event) => {
				buttonProps.onMouseLeave?.(event);
				handleMouseLeave();
			}}
			onFocus={(event) => {
				buttonProps.onFocus?.(event);
				handleFocus();
			}}
			onBlur={(event) => {
				buttonProps.onBlur?.(event);
				handleBlur();
			}}
			// Extract relevant props
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
		>
			{children}
		</button>
	);
}

// Define overloaded function signatures 
interface ButtonComponent {
	(props: ButtonAsButtonProps & { ref?: React.Ref<HTMLButtonElement> }): React.ReactElement;
	(props: ButtonAsLinkProps & { ref?: React.Ref<HTMLAnchorElement> }): React.ReactElement;
	displayName?: string;
}

export const Button = forwardRef(ButtonComponent) as ButtonComponent;
Button.displayName = 'Button';

// Export union type for compatibility
export type NHSButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export default Button;
