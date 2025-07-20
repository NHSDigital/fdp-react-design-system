import { ButtonHTMLAttributes } from 'react';
/**
 * Button variants following NHS design guidelines
 */
export type ButtonVariant = 'primary' | 'secondary' | 'reverse' | 'warning' | 'login';
/**
 * Button sizes
 */
export type ButtonSize = 'small' | 'default' | 'large';
/**
 * Props for the NHS Button component
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
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
     * Whether the button is disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether the button should take full width of its container
     * @default false
     */
    fullWidth?: boolean;
    /**
     * The button content
     */
    children: React.ReactNode;
    /**
     * Additional CSS class names
     */
    className?: string;
    /**
     * Inline styles
     */
    style?: React.CSSProperties;
}
/**
 * Internal props for styling functions
 */
export interface ButtonStyleProps {
    size: ButtonSize;
    fullWidth: boolean;
    disabled: boolean;
}
