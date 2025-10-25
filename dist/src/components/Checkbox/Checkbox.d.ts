import React from 'react';
import './Checkbox.scss';
import { CheckboxProps } from './Checkbox.types';
/**
 * Single Checkbox Component
 *
 * A single checkbox component that follows NHS design guidelines for boolean selections.
 * Perfect for single consent checkboxes, toggles, and boolean preferences.
 *
 * @example
 * ```tsx
 * // Controlled checkbox
 * <Checkbox
 *   id="agree-terms"
 *   checked={agreed}
 *   onChange={(checked) => setAgreed(checked)}
 * >
 *   I agree to the terms and conditions
 * </Checkbox>
 *
 * // Uncontrolled checkbox with hint
 * <Checkbox
 *   id="newsletter"
 *   defaultChecked={false}
 *   hint="We'll send you updates about your health records"
 * >
 *   Subscribe to email updates
 * </Checkbox>
 * ```
 */
export declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
