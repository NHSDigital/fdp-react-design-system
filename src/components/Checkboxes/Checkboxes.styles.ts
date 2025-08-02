import { CSSProperties } from 'react';
import { NHSTheme } from '../../../packages/nhs-fdp/dist/react/theme/NHSThemeProvider';
import { CheckboxStyleProps } from './Checkboxes.types';

/**
 * Get base fieldset styles using NHS design tokens
 */
export const getFieldsetStyles = (): CSSProperties => ({
  border: 'none',
  margin: 0,
  padding: 0,
  minWidth: 0,
});

/**
 * Get legend styles using NHS design tokens
 * SSR-compatible: Uses CSS custom properties for responsive font sizes
 */
export const getLegendStyles = (
  theme: NHSTheme,
  legendSize: 'xl' | 'l' | 'm' | 's' = 'l',
  isPageHeading: boolean = false
): CSSProperties => {
  // SSR-safe: Use tablet size as default, mobile handled by CSS classes or responsive design
  const sizeMap = {
    xl: {
      fontSize: theme.font.FontSize48Tablet,
      lineHeight: theme.font.FontLineHeightBase,
      fontWeight: theme.font.FontWeightBold,
    },
    l: {
      fontSize: theme.font.FontSize36Tablet,
      lineHeight: theme.font.FontLineHeightBase,
      fontWeight: theme.font.FontWeightBold,
    },
    m: {
      fontSize: theme.font.FontSize26Tablet,
      lineHeight: theme.font.FontLineHeightBase,
      fontWeight: theme.font.FontWeightBold,
    },
    s: {
      fontSize: theme.font.FontSize22Tablet,
      lineHeight: theme.font.FontLineHeightBase,
      fontWeight: theme.font.FontWeightBold,
    },
  };

  return {
    fontFamily: `"${theme.font.FontFamilyBase}", Arial, Helvetica, sans-serif`,
    color: theme.color.ColorTextPrimary,
    marginBottom: theme.spacing.Spacing3,
    display: 'block',
    width: '100%',
    ...sizeMap[legendSize],
    ...(isPageHeading && {
      marginTop: 0,
      marginBottom: theme.spacing.Spacing4,
    }),
  };
};

/**
 * Get hint text styles using NHS design tokens
 * SSR-compatible: Uses tablet size as default
 */
export const getHintStyles = (theme: NHSTheme): CSSProperties => {
  return {
    fontFamily: `"${theme.font.FontFamilyBase}", Arial, Helvetica, sans-serif`,
    fontSize: theme.font.FontSize16Tablet,
    lineHeight: theme.font.FontLineHeightBase,
    color: theme.color.ColorTextSecondary,
    marginBottom: theme.spacing.Spacing3,
    display: 'block',
  };
};

/**
 * Get error message styles using NHS design tokens
 * SSR-compatible: Uses tablet size as default
 */
export const getErrorMessageStyles = (theme: NHSTheme): CSSProperties => {
  return {
    fontFamily: `"${theme.font.FontFamilyBase}", Arial, Helvetica, sans-serif`,
    fontSize: theme.font.FontSize16Tablet,
    lineHeight: theme.font.FontLineHeightBase,
    color: theme.color.ColorError,
    fontWeight: theme.font.FontWeightBold,
    marginBottom: theme.spacing.Spacing3,
    display: 'block',
  };
};

/**
 * Get checkbox item container styles using NHS design tokens
 */
export const getCheckboxItemStyles = (
  _theme: NHSTheme,
  { disabled }: Pick<CheckboxStyleProps, 'disabled'>
): CSSProperties => ({
  position: 'relative' as const,
  display: 'block',
  marginBottom: 8, // NHS spacing-2 = 8px (exact NHS value)
  padding: 0,
  ...(disabled && {
    opacity: 0.5,
  }),
});

/**
 * Get checkbox input styles using NHS design tokens
 */
export const getCheckboxInputStyles = (): CSSProperties => ({
  cursor: 'pointer',
  position: 'absolute' as const,
  zIndex: 1,
  top: -2,
  left: -2,
  width: 44,
  height: 44,
  margin: 0,
  opacity: 0,
});

/**
 * Get checkbox label styles using NHS design tokens
 * SSR-compatible: Uses tablet size as default
 */
export const getCheckboxLabelStyles = (
  theme: NHSTheme,
  { size, disabled, hasError }: CheckboxStyleProps
): CSSProperties => {
  return {
    fontFamily: `"${theme.font.FontFamilyBase}", Arial, Helvetica, sans-serif`,
    fontSize: size === 'small' 
      ? theme.font.FontSize16Tablet
      : theme.font.FontSize19Tablet,
    lineHeight: theme.font.FontLineHeightBase,
    color: hasError ? theme.color.ColorError : theme.color.ColorTextPrimary,
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'block',
    position: 'relative' as const,
    minHeight: size === 'small' ? 34 : 40,
    paddingLeft: size === 'small' ? 34 : 50,
    paddingTop: size === 'small' ? 1 : 8,
    paddingBottom: size === 'small' ? 1 : 8,
    marginBottom: 0,
    touchAction: 'manipulation',
  };
};

/**
 * Get checkbox label before pseudo-element styles (checkbox box) using NHS design tokens
 */
export const getCheckboxLabelBeforeStyles = (
  theme: NHSTheme,
  { size, hasError }: CheckboxStyleProps
): CSSProperties => ({
  content: '""',
  position: 'absolute' as const,
  top: size === 'small' ? 1 : 0,
  left: 0,
  width: size === 'small' ? 24 : 40,
  height: size === 'small' ? 24 : 40,
  border: `2px solid ${hasError ? theme.color.ColorError : '#4c6272'}`, // NHS exact: 2px border, #4c6272 color
  background: 'transparent',
  borderRadius: 0,
});

/**
 * Get checkbox label after pseudo-element styles (tick mark) using NHS design tokens
 */
export const getCheckboxLabelAfterStyles = (
  theme: NHSTheme,
  { size, hasError }: CheckboxStyleProps,
  checked: boolean = false
): CSSProperties => {
  // NHS frontend tick positioning (exact values from nhsuk-frontend)
  let top, left, width, height;
  
  if (size === 'small') {
    // Small checkbox (24px box) - proportionally scaled from 40px
    top = 8; // 13px scaled down to 24px from 40px
    left = 6; // 10px scaled down to 24px from 40px
    width = 13; // 22px scaled down to 24px from 40px
    height = 6; // 10px scaled down to 24px from 40px
  } else {
    // Default checkbox (40px box) - exact NHS values
    top = 13;
    left = 10;
    width = 22;
    height = 10;
  }
  
  return {
    content: checked ? '""' : 'none',
    position: 'absolute' as const,
    top,
    left,
    width,
    height,
    transform: 'rotate(-45deg)',
    border: 'solid',
    borderWidth: '0 0 4px 4px', // NHS exact: 4px border width
    borderTopColor: 'transparent',
    borderColor: hasError ? theme.color.ColorError : theme.color.ColorTextPrimary,
    opacity: checked ? 1 : 0,
    background: 'transparent',
    boxSizing: 'border-box' as const,
  };
};

/**
 * Get checkbox focus styles using NHS design tokens
 */
export const getCheckboxFocusStyles = (theme: NHSTheme): CSSProperties => ({
  outline: `${theme.border.BorderWidthFormElementError} solid ${theme.color.ColorFocusBackground}`,
  outlineOffset: 0,
  boxShadow: `inset 0 0 0 ${theme.border.BorderWidthFormElement} ${theme.color.ColorFocusText}`,
});

/**
 * Get checkbox item hint styles using NHS design tokens
 * SSR-compatible: Uses tablet size as default
 */
export const getCheckboxItemHintStyles = (
  theme: NHSTheme,
  size: 'default' | 'small'
): CSSProperties => {
  return {
    fontFamily: `"${theme.font.FontFamilyBase}", Arial, Helvetica, sans-serif`,
    fontSize: theme.font.FontSize16Tablet,
    lineHeight: theme.font.FontLineHeightBase,
    color: theme.color.ColorTextSecondary,
    marginTop: theme.spacing.Spacing1,
    paddingLeft: size === 'small' ? 34 : 50,
  };
};
