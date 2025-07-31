import { CSSProperties } from '../../../node_modules/react';
import { NHSTheme } from '../../../packages/nhs-fdp/dist/react/theme/NHSThemeProvider';
import { CheckboxStyleProps } from './Checkboxes.types';
/**
 * Get base fieldset styles using NHS design tokens
 */
export declare const getFieldsetStyles: () => CSSProperties;
/**
 * Get legend styles using NHS design tokens
 */
export declare const getLegendStyles: (theme: NHSTheme, legendSize?: "xl" | "l" | "m" | "s", isPageHeading?: boolean) => CSSProperties;
/**
 * Get hint text styles using NHS design tokens
 */
export declare const getHintStyles: (theme: NHSTheme) => CSSProperties;
/**
 * Get error message styles using NHS design tokens
 */
export declare const getErrorMessageStyles: (theme: NHSTheme) => CSSProperties;
/**
 * Get checkbox item container styles using NHS design tokens
 */
export declare const getCheckboxItemStyles: (_theme: NHSTheme, { disabled }: Pick<CheckboxStyleProps, "disabled">) => CSSProperties;
/**
 * Get checkbox input styles using NHS design tokens
 */
export declare const getCheckboxInputStyles: () => CSSProperties;
/**
 * Get checkbox label styles using NHS design tokens
 */
export declare const getCheckboxLabelStyles: (theme: NHSTheme, { size, disabled, hasError }: CheckboxStyleProps) => CSSProperties;
/**
 * Get checkbox label before pseudo-element styles (checkbox box) using NHS design tokens
 */
export declare const getCheckboxLabelBeforeStyles: (theme: NHSTheme, { size, hasError }: CheckboxStyleProps) => CSSProperties;
/**
 * Get checkbox label after pseudo-element styles (tick mark) using NHS design tokens
 */
export declare const getCheckboxLabelAfterStyles: (theme: NHSTheme, { size, hasError }: CheckboxStyleProps, checked?: boolean) => CSSProperties;
/**
 * Get checkbox focus styles using NHS design tokens
 */
export declare const getCheckboxFocusStyles: (theme: NHSTheme) => CSSProperties;
/**
 * Get checkbox item hint styles using NHS design tokens
 */
export declare const getCheckboxItemHintStyles: (theme: NHSTheme, size: "default" | "small") => CSSProperties;
