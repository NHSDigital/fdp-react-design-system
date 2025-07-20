import { CSSProperties } from 'react';
import { NHSTheme } from '../../../packages/nhs-fdp/dist/react/theme/NHSThemeProvider';
import { ButtonVariant, ButtonStyleProps } from './Button.types';

/**
 * Get base button styles using NHS design tokens
 */
export const getButtonStyles = (
  theme: NHSTheme,
  { size, fullWidth, disabled }: ButtonStyleProps
): CSSProperties => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return {
    // Base button styles from tokens
    fontFamily: `"${theme.font.FontFamilyBase}", Arial, Helvetica, sans-serif`,
    fontWeight: theme.button.ButtonTypographyWeight,
    borderWidth: theme.button.ButtonBorderWidth,
    borderStyle: 'solid',
    borderRadius: theme.button.ButtonBorderRadius,
    textDecoration: 'none',
    textAlign: 'center' as const,
    verticalAlign: 'top',
    cursor: disabled ? 'not-allowed' : 'pointer',
    userSelect: 'none' as const,
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    display: 'inline-block',
    position: 'relative' as const,
    
    // Responsive sizing using tokens
    fontSize: isMobile ? theme.font.FontSize19Mobile : theme.font.FontSize19Tablet,
    lineHeight: theme.font.FontLineHeightBase,
    
    // Size-specific styles
    ...(size === 'small' && {
      fontSize: isMobile ? theme.font.FontSize16Mobile : theme.font.FontSize16Tablet,
      paddingTop: theme.spacing.Spacing1,
      paddingBottom: theme.spacing.Spacing1,
      paddingLeft: theme.spacing.Spacing3,
      paddingRight: theme.spacing.Spacing3,
    }),
    
    ...(size === 'default' && {
      paddingTop: isMobile 
        ? theme.button.ButtonSpacingPaddingVerticalMobile 
        : theme.button.ButtonSpacingPaddingVerticalDesktop,
      paddingBottom: isMobile 
        ? theme.button.ButtonSpacingPaddingVerticalMobile 
        : theme.button.ButtonSpacingPaddingVerticalDesktop,
      paddingLeft: isMobile 
        ? theme.button.ButtonSpacingPaddingHorizontalMobile 
        : theme.button.ButtonSpacingPaddingHorizontalDesktop,
      paddingRight: isMobile 
        ? theme.button.ButtonSpacingPaddingHorizontalMobile 
        : theme.button.ButtonSpacingPaddingHorizontalDesktop,
      minHeight: isMobile 
        ? theme.size.SizeButtonMinHeightMobile 
        : theme.size.SizeButtonMinHeightDesktop,
    }),
    
    ...(size === 'large' && {
      fontSize: isMobile ? theme.font.FontSize22Mobile : theme.font.FontSize22Tablet,
      paddingTop: theme.spacing.Spacing4,
      paddingBottom: theme.spacing.Spacing4,
      paddingLeft: theme.spacing.Spacing5,
      paddingRight: theme.spacing.Spacing5,
    }),
    
    // Full width
    ...(fullWidth && {
      width: '100%',
    }),
    
    // Disabled state
    ...(disabled && {
      pointerEvents: 'none' as const,
      opacity: 0.6,
    }),
    
    // Transitions
    transition: theme.transition.TransitionButtonDefault,
  };
};

/**
 * Get variant-specific button styles using NHS design tokens
 */
export const getButtonVariantStyles = (
  theme: NHSTheme,
  variant: ButtonVariant,
  disabled: boolean
): CSSProperties => {
  const variantStyles: Record<ButtonVariant, CSSProperties> = {
    primary: {
      backgroundColor: disabled 
        ? theme.button.ButtonPrimaryBackgroundDisabled 
        : theme.button.ButtonPrimaryBackgroundDefault,
      color: disabled 
        ? theme.button.ButtonPrimaryTextDisabled 
        : theme.button.ButtonPrimaryTextDefault,
      borderColor: theme.button.ButtonPrimaryBorderDefault,
      boxShadow: `0 ${theme.button.ButtonShadowSize} 0 ${theme.color.ColorButtonPrimaryShadow}`,
    },
    
    secondary: {
      backgroundColor: theme.button.ButtonSecondaryBackgroundSolid,
      color: theme.button.ButtonSecondaryTextDefault,
      borderColor: theme.button.ButtonSecondaryBorderDefault,
      boxShadow: `0 ${theme.button.ButtonShadowSize} 0 ${theme.color.ColorButtonSecondaryShadow}`,
    },
    
    reverse: {
      backgroundColor: theme.color.ColorButtonReverseBackground,
      color: theme.color.ColorButtonReverseText,
      borderColor: theme.color.ColorButtonReverseBackground,
      boxShadow: `0 ${theme.button.ButtonShadowSize} 0 ${theme.color.ColorButtonReverseShadow}`,
    },
    
    warning: {
      backgroundColor: theme.color.ColorButtonWarningBackground,
      color: theme.color.ColorButtonPrimaryText, // White text
      borderColor: theme.color.ColorButtonWarningBackground,
      boxShadow: `0 ${theme.button.ButtonShadowSize} 0 ${theme.color.ColorButtonWarningShadow}`,
    },
    
    login: {
      backgroundColor: theme.color.ColorButtonLoginBackground,
      color: theme.color.ColorButtonPrimaryText, // White text
      borderColor: theme.color.ColorButtonLoginBackground,
      boxShadow: `0 ${theme.button.ButtonShadowSize} 0 ${theme.color.ColorButtonLoginShadow}`,
    },
  };

  return variantStyles[variant];
};
