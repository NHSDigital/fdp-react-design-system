import { forwardRef } from 'react';
import { useNHSTheme } from '../NHSThemeProvider';
import { ButtonProps } from './Button.types';
import { getButtonStyles, getButtonVariantStyles } from './Button.styles';
import './Button.css';

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
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'default',
      disabled = false,
      fullWidth = false,
      type = 'button',
      className = '',
      style = {},
      onClick,
      ...rest
    },
    ref
  ) => {
    const theme = useNHSTheme();
    
    const baseStyles = getButtonStyles(theme, { size, fullWidth, disabled });
    const variantStyles = getButtonVariantStyles(theme, variant, disabled);
    
    const combinedStyles = {
      ...baseStyles,
      ...variantStyles,
      ...style,
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`nhs-button nhs-button--${variant} ${size !== 'default' ? `nhs-button--${size}` : ''} ${fullWidth ? 'nhs-button--full-width' : ''} ${disabled ? 'nhs-button--disabled' : ''} ${className}`.trim()}
        style={combinedStyles}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
