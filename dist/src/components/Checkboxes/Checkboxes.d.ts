import { default as React } from 'react';
import { CheckboxesProps } from './Checkboxes.types';
/**
 * NHS Checkboxes Component
 *
 * A checkboxes component that follows NHS design guidelines and uses the NHS design tokens.
 * Supports multiple selection, hints, error messages, conditional content, and small variant.
 *
 * @example
 * ```tsx
 * <Checkboxes
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
export declare const Checkboxes: React.ForwardRefExoticComponent<CheckboxesProps & React.RefAttributes<HTMLFieldSetElement>>;
export default Checkboxes;
