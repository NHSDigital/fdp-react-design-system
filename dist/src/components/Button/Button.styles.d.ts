import { CSSProperties } from 'react';
import { NHSTheme } from '../../../packages/nhs-fdp/dist/react/theme/NHSThemeProvider';
import { ButtonVariant, ButtonStyleProps } from './Button.types';
/**
 * Get base button styles using NHS design tokens
 */
export declare const getButtonStyles: (theme: NHSTheme, { size, fullWidth, disabled }: ButtonStyleProps) => CSSProperties;
/**
 * Get variant-specific button styles using NHS design tokens
 */
export declare const getButtonVariantStyles: (theme: NHSTheme, variant: ButtonVariant, disabled: boolean) => CSSProperties;
