import { default as React } from 'react';
import { CheckboxesProps } from './Checkboxes.types';
/**
 * NHS Checkboxes Component (CSS-Based)
 *
 * A simplified checkboxes component that uses pre-compiled CSS instead of runtime styling.
 * This version is more performant and follows modern design system practices.
 *
 * @example
 * ```tsx
 * <CheckboxesCSS
 *   name="nationality"
 *   legend="What is your nationality?"
 *   items={[
 *     { value: 'british', text: 'British' },
 *     { value: 'irish', text: 'Irish' },
 *     { value: 'other', text: 'Other' }
 *   ]}
 * />
 * ```
 */
export declare const CheckboxesCSS: React.ForwardRefExoticComponent<CheckboxesProps & React.RefAttributes<HTMLFieldSetElement>>;
export default CheckboxesCSS;
