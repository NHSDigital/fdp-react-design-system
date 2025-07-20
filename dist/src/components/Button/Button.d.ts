import { ButtonProps } from './Button.types';
/**
 * NHS Button Component
 *
 * A button component that follows NHS design guidelines and uses the NHS design tokens.
 * Supports multiple variants including primary, secondary, reverse, warning, and login.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="default">
 *   Continue
 * </Button>
 * ```
 */
export declare const Button: import('react').ForwardRefExoticComponent<ButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
export default Button;
