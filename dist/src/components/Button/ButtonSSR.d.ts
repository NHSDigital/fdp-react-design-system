import * as React from 'react';
import { ButtonVariant, ButtonSize } from './Button.types';
import './Button.scss';
/**
 * SSR-Safe Button Component
 *
 * This is a simplified version of the Button component that works in SSR environments.
 * It doesn't use react-aria-components to avoid createContext dependencies.
 *
 * For full accessibility features and interactions, use the regular Button component
 * in client-side environments.
 */
export interface ButtonSSRProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
    /**
     * The visual style variant of the button
     */
    variant?: ButtonVariant;
    /**
     * The size of the button
     */
    size?: ButtonSize;
    /**
     * Whether the button should take the full width of its container
     */
    fullWidth?: boolean;
    /**
     * Additional CSS classes to apply
     */
    className?: string;
    /**
     * The button content
     */
    children: React.ReactNode;
}
/**
 * SSR-Safe Button Component
 */
export declare const ButtonSSR: React.ForwardRefExoticComponent<ButtonSSRProps & React.RefAttributes<HTMLButtonElement>>;
export default ButtonSSR;
