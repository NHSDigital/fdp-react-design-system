import * as React from 'react';
import classNames from 'classnames';
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
export const ButtonSSR = React.forwardRef<HTMLButtonElement, ButtonSSRProps>(
  ({ 
    variant = ButtonVariant.Primary, 
    size = ButtonSize.Default, 
    fullWidth = false, 
    className, 
    children, 
    disabled,
    type = 'button',
    ...rest 
  }, ref) => {
    const buttonClasses = classNames(
      'nhs-aria-button',
      `nhs-aria-button--${variant}`,
      {
        [`nhs-aria-button--${size}`]: size !== 'default',
        'nhs-aria-button--full-width': fullWidth,
        'nhs-aria-button--disabled': disabled,
      },
      className
    );

    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

ButtonSSR.displayName = 'ButtonSSR';

export default ButtonSSR;
