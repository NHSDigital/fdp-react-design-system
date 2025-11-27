import React, { forwardRef, useState, ReactNode } from 'react';
import clsx from 'clsx';
import { CheckboxesProps, CheckboxConditionalProps } from './Checkboxes.types';
import { Input } from '../Input/Input';

// Import the compiled CSS
//import '../../../dist/nhs-design-system.css';

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
export const CheckboxesCSS = forwardRef<HTMLFieldSetElement, CheckboxesProps>(
  (
    {
      items,
      name,
      idPrefix,
      legend,
      isPageHeading = false,
      legendSize = 'l',
      hint,
      errorMessage,
      className = '',
      small = false,
      onChange,
      fieldsetAttributes = {},
      attributes = {},
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(
      items.filter(item => item.checked).map(item => item.value)
    );
    const [conditionalStates, setConditionalStates] = useState<Record<string, boolean>>(
      Object.fromEntries(items.filter(item => item.checked).map(item => [item.value, true]))
    );

    // Generate IDs
    const finalIdPrefix = idPrefix || name;
    const hintId = hint ? `${finalIdPrefix}-hint` : undefined;
    const errorId = errorMessage ? `${finalIdPrefix}-error` : undefined;
    const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

    const hasConditional = items.some(item => item.conditional);
    const hasError = !!errorMessage;

    const handleCheckboxChange = (value: string, checked: boolean) => {
      let newValues: string[];
      
      if (checked) {
        newValues = [...selectedValues, value];
      } else {
        newValues = selectedValues.filter(v => v !== value);
      }
      
      setSelectedValues(newValues);
      setConditionalStates(prev => ({
        ...prev,
        [value]: checked
      }));
      
      onChange?.(newValues);
    };

    // Render each checkbox item with its conditional content (if any)
    const renderItems = () => {
      return items.map((item, index) => {
        const itemId = `${idPrefix || name}-${index + 1}`;
        const conditionalId = `${itemId}-conditional`;
        const isChecked = selectedValues.includes(item.value);
        const isDisabled = item.disabled || false;

        return (
          <React.Fragment key={item.value}>
            <div 
              className={clsx(
                'nhs-checkboxes__item',
                {
                  'nhs-checkboxes__item--conditional': !!item.conditional
                }
              )}
            >
              <input
                className="nhs-checkboxes__input"
                id={itemId}
                name={name}
                type="checkbox"
                value={item.value}
                checked={isChecked}
                disabled={isDisabled}
                onChange={(e) => handleCheckboxChange(item.value, e.target.checked)}
                aria-describedby={item.hint ? `${itemId}-hint` : undefined}
                {...(item.conditional && {
                  'aria-controls': conditionalId,
                  'aria-expanded': isChecked ? 'true' : 'false'
                })}
                {...item.attributes}
              />
              <label 
                className="nhs-checkboxes__label" 
                htmlFor={itemId}
              >
                {item.text}
              </label>
              {item.hint && (
                <div 
                  id={`${itemId}-hint`} 
                  className="nhs-checkboxes__hint"
                >
                  {item.hint}
                </div>
              )}
            </div>
            {item.conditional && (
              <div 
                className={clsx(
                  'nhs-checkboxes__conditional',
                  {
                    'nhs-checkboxes__conditional--hidden': !conditionalStates[item.value]
                  }
                )}
                id={conditionalId}
              >
                {typeof item.conditional === 'object' && 
                 item.conditional !== null && 
                 'label' in item.conditional && 
                 'id' in item.conditional && 
                 'name' in item.conditional ? (
                  <Input {...(item.conditional as CheckboxConditionalProps)} />
                ) : (
                  item.conditional as ReactNode
                )}
              </div>
            )}
          </React.Fragment>
        );
      });
    };

    return (
      <div 
        className={clsx(
          'nhs-form-group',
          {
            'nhs-form-group--error': hasError,
          }
        )}
        {...attributes}
      >
        <fieldset
          ref={ref}
          className={clsx(
            'nhs-fieldset',
            fieldsetAttributes.className
          )}
          aria-describedby={describedBy}
          {...fieldsetAttributes}
        >
          {legend && (
            <legend 
              className={clsx(
                'nhs-fieldset__legend',
                {
                  'nhs-fieldset__legend--xl': legendSize === 'xl',
                  'nhs-fieldset__legend--l': legendSize === 'l',
                  'nhs-fieldset__legend--m': legendSize === 'm',
                  'nhs-fieldset__legend--s': legendSize === 's',
                }
              )}
            >
              {isPageHeading ? <h1>{legend}</h1> : legend}
            </legend>
          )}
          
          {hint && (
            <div 
              id={hintId} 
              className="nhs-hint"
            >
              {hint}
            </div>
          )}
          
          {errorMessage && (
            <div 
              id={errorId} 
              className="nhs-error-message"
            >
              <span className="nhs-u-visually-hidden">Error:</span> {errorMessage}
            </div>
          )}
          
          <div 
            className={clsx(
              'nhs-checkboxes',
              {
                'nhs-checkboxes--small': small,
                'nhs-checkboxes--conditional': hasConditional
              },
              className
            )}
          >
            {renderItems()}
          </div>
        </fieldset>
      </div>
    );
  }
);

CheckboxesCSS.displayName = 'CheckboxesCSS';

export default CheckboxesCSS;
