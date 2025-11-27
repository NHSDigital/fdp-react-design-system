import React, { useState, ReactNode } from 'react';
import classNames from 'classnames';
import { CheckboxesProps, CheckboxConditionalProps } from './Checkboxes.types';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import { Fieldset } from '../Fieldset/Fieldset';
import './Checkboxes.scss';
import { mapCheckboxesProps } from '../../mapping/checkboxes';

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
export const Checkboxes: React.FC<CheckboxesProps> = ({
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
  fieldsetAttributes,
  attributes,
  ...props
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(
    items.filter(item => item.checked).map(item => item.value)
  );

  // Generate IDs
  const finalIdPrefix = idPrefix || name;
  const hintId = hint ? `${finalIdPrefix}-hint` : undefined;
  const errorId = errorMessage ? `${finalIdPrefix}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  const handleCheckboxChange = (value: string, checked: boolean) => {
    let newValues: string[];
    
    if (checked) {
      newValues = [...selectedValues, value];
    } else {
      newValues = selectedValues.filter(v => v !== value);
    }
    
    setSelectedValues(newValues);
    
    onChange?.(newValues);
  };

  // Render each checkbox item with its conditional content (if any)
  const renderItems = () => {
    return items.map((item, index) => {
      const itemId = `${finalIdPrefix}-${index + 1}`;
      const conditionalId = `${itemId}-conditional`;
      const isChecked = selectedValues.includes(item.value);
      const isDisabled = item.disabled || false;

      return (
        <div key={item.value} className="nhsuk-checkboxes__item">
          <input
            className="nhsuk-checkboxes__input"
            id={itemId}
            name={name}
            type="checkbox"
            value={item.value}
            checked={isChecked}
            disabled={isDisabled}
            onChange={(e) => handleCheckboxChange(item.value, e.target.checked)}
            aria-describedby={item.hint ? `${itemId}-hint` : describedBy}
            {...(item.conditional && {
              'aria-controls': conditionalId,
              'aria-expanded': isChecked ? 'true' : 'false'
            })}
            {...item.attributes}
          />
          <label className="nhsuk-checkboxes__label" htmlFor={itemId}>
            {item.text}
          </label>
          {item.hint && (
            <div id={`${itemId}-hint`} className="nhsuk-checkboxes__hint">
              {item.hint}
            </div>
          )}
          {item.conditional && (
            <div
              className={classNames('nhsuk-checkboxes__conditional', {
                'nhsuk-checkboxes__conditional--hidden': !isChecked,
              })}
              id={conditionalId}
            >
              {typeof item.conditional === 'object' && 
               item.conditional !== null && 
               'label' in item.conditional && 
               'id' in item.conditional && 
               'name' in item.conditional ? (
                <div style={{ marginTop: '16px' }}>
                  {(item.conditional as CheckboxConditionalProps).label && (
                    <Label htmlFor={(item.conditional as CheckboxConditionalProps).id}>
                      {(item.conditional as CheckboxConditionalProps).label}
                    </Label>
                  )}
                  <Input {...(item.conditional as CheckboxConditionalProps)} />
                </div>
              ) : (
                item.conditional as ReactNode
              )}
            </div>
          )}
        </div>
      );
    });
  };

  const { classes: checkboxesClasses, formGroupClasses } = mapCheckboxesProps({ small, className, hasError: !!errorMessage });

  return (
    <div className={formGroupClasses} {...attributes} {...props}>
      <Fieldset
        legend={legend ? {
          text: legend,
          isPageHeading,
          size: legendSize
        } : undefined}
        describedBy={describedBy}
        {...fieldsetAttributes}
      >
        {hint && (
          <div id={hintId} className="nhsuk-hint">
            {hint}
          </div>
        )}
        
        {errorMessage && (
          <div id={errorId} className="nhsuk-error-message">
            <span className="nhsuk-u-visually-hidden">Error:</span> {errorMessage}
          </div>
        )}
        
        <div className={checkboxesClasses}>
          {renderItems()}
        </div>
      </Fieldset>
    </div>
  );
};

Checkboxes.displayName = 'Checkboxes';

export default Checkboxes;
