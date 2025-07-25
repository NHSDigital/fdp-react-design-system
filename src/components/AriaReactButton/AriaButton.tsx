import React, { forwardRef } from 'react';
import { Button as ReactAriaButton, ButtonProps as ReactAriaButtonProps } from 'react-aria-components';
import { ButtonVariant, ButtonSize } from '../Button/Button.types';
import './AriaButton.scss';

/**
 * Props for the NHS Button component built with React Aria
 */
export interface NHSAriaButtonProps extends Omit<ReactAriaButtonProps, 'className'> {
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
}

/**
 * NHS Button Component with React Aria
 * 
 * A button component built with React Aria that provides excellent accessibility
 * out of the box while following NHS design guidelines.
 * 
 * Features:
 * - Full keyboard navigation support
 * - Screen reader compatibility
 * - Focus management
 * - Proper ARIA attributes
 * - Press state management
 * 
 * @example
 * ```tsx
 * <AriaButton variant="primary" size="default">
 *	 Continue
 * </AriaButton>
 * ```
 */
export const AriaButton = forwardRef<HTMLButtonElement, NHSAriaButtonProps>(
	({
		children,
		variant = 'primary',
		size = 'default',
		fullWidth = false,
		className = '',
		...rest
	},
		ref
	) => {
		// Build CSS classes
		const classes = [
			'nhs-aria-button',
			`nhs-aria-button--${variant}`,
			size !== 'default' ? `nhs-aria-button--${size}` : '',
			fullWidth ? 'nhs-aria-button--full-width' : '',
			className
		].filter(Boolean).join(' ');

		return (
			<ReactAriaButton
			ref={ref}
			className={classes}
			{...rest}
			>
			{children}
			</ReactAriaButton>
		);
	}
);

AriaButton.displayName = 'AriaButton';

export default AriaButton;
