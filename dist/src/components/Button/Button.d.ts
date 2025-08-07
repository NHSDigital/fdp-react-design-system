import * as React from 'react';
import { ButtonProps as ReactButtonProps } from 'react-aria-components';
import { ButtonVariant, ButtonSize } from './Button.types';
import './Button.scss';
/**
 * Props for the NHS Button component built with React Aria
 */
export interface NHSButtonProps extends Omit<ReactButtonProps, 'className'> {
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
 * <Button variant="primary" size="default">
 *	 Continue
 * </Button>
 * ```
 */
export declare const Button: React.ForwardRefExoticComponent<NHSButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
