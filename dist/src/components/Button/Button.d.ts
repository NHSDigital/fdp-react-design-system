import * as React from "react";
import { ButtonVariant, ButtonSize } from "./Button.types";
import "./Button.scss";
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
    type?: "button" | "submit" | "reset";
}
/**
 * Props when rendering as anchor element (with href)
 */
export interface ButtonAsLinkProps extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps | "role" | "type"> {
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
    "aria-disabled"?: "true" | "false";
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
declare function ButtonComponent(props: ButtonAsButtonProps | ButtonAsLinkProps, ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>): React.ReactElement;
interface ButtonComponent {
    (props: ButtonAsButtonProps & {
        ref?: React.Ref<HTMLButtonElement>;
    }): React.ReactElement;
    (props: ButtonAsLinkProps & {
        ref?: React.Ref<HTMLAnchorElement>;
    }): React.ReactElement;
    displayName?: string;
}
export declare const Button: ButtonComponent;
export type NHSButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;
export default Button;
