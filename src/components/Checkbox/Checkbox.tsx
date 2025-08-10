import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
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
export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  checked,
  defaultChecked = false,
  disabled = false,
  value = 'true',
  hint,
  errorMessage,
  className,
  children,
  onChange,
  onBlur,
  onFocus,
  attributes,
  ...props
}) => {
  // Handle both controlled and uncontrolled modes
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const checkedValue = isControlled ? checked : internalChecked;

  // Update internal state when defaultChecked changes (for uncontrolled mode)
  useEffect(() => {
    if (!isControlled) {
      setInternalChecked(defaultChecked);
    }
  }, [defaultChecked, isControlled]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    
    // Update internal state for uncontrolled mode
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    
    // Call onChange with boolean value
    onChange?.(newChecked, event);
  };

  // Generate IDs for accessibility
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = errorMessage ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  const formGroupClasses = classNames(
    'nhsuk-form-group',
    {
      'nhsuk-form-group--error': !!errorMessage,
    },
    className
  );

  return (
    <div className={formGroupClasses} {...props}>
      <div className="nhsuk-checkboxes">
        <div className="nhsuk-checkboxes__item">
          <input
            className="nhsuk-checkboxes__input"
            id={id}
            name={name || id}
            type="checkbox"
            value={value}
            checked={checkedValue}
            disabled={disabled}
            onChange={handleChange}
            onBlur={onBlur}
            onFocus={onFocus}
            aria-describedby={describedBy}
            {...attributes}
          />
          <label className="nhsuk-checkboxes__label" htmlFor={id}>
            {children}
          </label>
          {hint && (
            <div id={hintId} className="nhsuk-checkboxes__hint">
              {hint}
            </div>
          )}
          {errorMessage && (
            <div id={errorId} className="nhsuk-error-message nhsuk-checkboxes__error">
              <span className="nhsuk-u-visually-hidden">Error:</span> {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
