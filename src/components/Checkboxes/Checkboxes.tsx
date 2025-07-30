import React, { forwardRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import { useNHSTheme } from '../NHSThemeProvider';
import { CheckboxesProps } from './Checkboxes.types';
import {
  getFieldsetStyles,
  getLegendStyles,
  getHintStyles,
  getErrorMessageStyles,
  getCheckboxItemStyles,
  getCheckboxLabelStyles,
  getCheckboxLabelBeforeStyles,
  getCheckboxLabelAfterStyles,
  getCheckboxFocusStyles,
  getCheckboxItemHintStyles,
  getConditionalContentStyles,
} from './Checkboxes.styles';
import './Checkboxes.css';

/**
 * Generate CSS for checkbox pseudo-elements using design tokens
 */
const generateCheckboxCSS = (
  theme: any,
  componentId: string,
  size: 'default' | 'small',
  hasError: boolean
) => {
  const beforeStyles = getCheckboxLabelBeforeStyles(theme, { size, disabled: false, hasError });
  const afterStyles = getCheckboxLabelAfterStyles(theme, { size, disabled: false, hasError });
  const focusStyles = getCheckboxFocusStyles(theme);
  
  return `
    .${componentId} .nhsuk-checkboxes__label::before {
      content: "";
      position: ${beforeStyles.position};
      top: ${beforeStyles.top}px;
      left: ${beforeStyles.left};
      width: ${beforeStyles.width}px;
      height: ${beforeStyles.height}px;
      border: ${beforeStyles.border};
      background: ${beforeStyles.background};
      border-radius: ${beforeStyles.borderRadius};
      box-sizing: border-box;
    }
    
    .${componentId} .nhsuk-checkboxes__label::after {
      content: "";
      position: ${afterStyles.position};
      top: ${afterStyles.top}px;
      left: ${afterStyles.left}px;
      width: ${afterStyles.width}px;
      height: ${afterStyles.height}px;
      transform: ${afterStyles.transform};
      border: ${afterStyles.border};
      border-width: ${afterStyles.borderWidth};
      border-top-color: ${afterStyles.borderTopColor};
      border-color: ${afterStyles.borderColor};
      opacity: ${afterStyles.opacity};
      background: ${afterStyles.background};
      box-sizing: ${afterStyles.boxSizing};
    }
    
    .${componentId} .nhsuk-checkboxes__input:checked + .nhsuk-checkboxes__label::after {
      opacity: 1;
    }
    
    .${componentId} .nhsuk-checkboxes__input:focus + .nhsuk-checkboxes__label::before {
      outline: ${focusStyles.outline};
      outline-offset: ${focusStyles.outlineOffset};
      box-shadow: ${focusStyles.boxShadow};
    }
  `;
};

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
export const Checkboxes = forwardRef<HTMLFieldSetElement, CheckboxesProps>(
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
    const theme = useNHSTheme();
    const [selectedValues, setSelectedValues] = useState<string[]>(
      items.filter(item => item.checked).map(item => item.value)
    );
    const [conditionalStates, setConditionalStates] = useState<Record<string, boolean>>(
      Object.fromEntries(items.filter(item => item.checked).map(item => [item.value, true]))
    );

    // Generate unique component ID for CSS scoping
    const componentId = `checkboxes-${name}-${Math.random().toString(36).substr(2, 9)}`;

    // Generate IDs
    const finalIdPrefix = idPrefix || name;
    const hintId = hint ? `${finalIdPrefix}-hint` : undefined;
    const errorId = errorMessage ? `${finalIdPrefix}-error` : undefined;
    const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

    const hasConditional = items.some(item => item.conditional);
    const hasError = !!errorMessage;
    const size = small ? 'small' : 'default';

    // Inject CSS for pseudo-elements
    useEffect(() => {
      const styleId = `${componentId}-styles`;
      const existingStyle = document.getElementById(styleId);
      
      if (existingStyle) {
        existingStyle.remove();
      }
      
      const css = generateCheckboxCSS(theme, componentId, size, hasError);
      const styleElement = document.createElement('style');
      styleElement.id = styleId;
      styleElement.textContent = css;
      document.head.appendChild(styleElement);
      
      return () => {
        const style = document.getElementById(styleId);
        if (style) {
          style.remove();
        }
      };
    }, [theme, componentId, size, hasError]);

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

    // Get styles from design tokens
    const fieldsetStyles = getFieldsetStyles();
    const legendStyles = legend ? getLegendStyles(theme, legendSize, isPageHeading) : {};
    const hintStyles = hint ? getHintStyles(theme) : {};
    const errorStyles = errorMessage ? getErrorMessageStyles(theme) : {};
    const conditionalContentStyles = getConditionalContentStyles(theme);

    // Render each checkbox item with its conditional content (if any)
    const renderItems = () => {
      return items.map((item, index) => {
        const itemId = `${idPrefix || name}-${index + 1}`;
        const conditionalId = `${itemId}-conditional`;
        const isChecked = selectedValues.includes(item.value);
        const isDisabled = item.disabled || false;

        const itemStyles = getCheckboxItemStyles(theme, { disabled: isDisabled });
        const labelStyles = getCheckboxLabelStyles(theme, { size, disabled: isDisabled, hasError });
        const hintStyles = item.hint ? getCheckboxItemHintStyles(theme, size) : {};

        return (
          <React.Fragment key={item.value}>
            <div 
              className={clsx(
                'nhsuk-checkboxes__item',
                {
                  'nhsuk-checkboxes__item--conditional': !!item.conditional
                }
              )}
              style={itemStyles}
            >
              <input
                className="nhsuk-checkboxes__input"
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
                className="nhsuk-label nhsuk-checkboxes__label" 
                htmlFor={itemId}
                style={labelStyles}
              >
                {item.text}
              </label>
              {item.hint && (
                <div 
                  id={`${itemId}-hint`} 
                  className="nhsuk-hint nhsuk-checkboxes__hint"
                  style={hintStyles}
                >
                  {item.hint}
                </div>
              )}
            </div>
            {item.conditional && (
              <div 
                className={clsx(
                  'nhsuk-checkboxes__conditional',
                  {
                    'nhsuk-checkboxes__conditional--hidden': !conditionalStates[item.value]
                  }
                )}
                id={conditionalId}
                style={conditionalContentStyles}
              >
                {item.conditional}
              </div>
            )}
          </React.Fragment>
        );
      });
    };

    return (
      <div 
        className={clsx(
          'nhsuk-form-group',
          componentId,
          {
            'nhsuk-form-group--error': hasError,
          }
        )}
        {...attributes}
      >
        <fieldset
          ref={ref}
          className={clsx(
            'nhsuk-fieldset',
            fieldsetAttributes.className
          )}
          style={{...fieldsetStyles, ...fieldsetAttributes.style}}
          aria-describedby={describedBy}
          {...fieldsetAttributes}
        >
          {legend && (
            <legend 
              className={clsx(
                'nhsuk-fieldset__legend',
                {
                  'nhsuk-fieldset__legend--xl': legendSize === 'xl',
                  'nhsuk-fieldset__legend--l': legendSize === 'l',
                  'nhsuk-fieldset__legend--m': legendSize === 'm',
                  'nhsuk-fieldset__legend--s': legendSize === 's',
                }
              )}
              style={legendStyles}
            >
              {isPageHeading ? <h1>{legend}</h1> : legend}
            </legend>
          )}
          
          {hint && (
            <div 
              id={hintId} 
              className="nhsuk-hint"
              style={hintStyles}
            >
              {hint}
            </div>
          )}
          
          {errorMessage && (
            <div 
              id={errorId} 
              className="nhsuk-error-message"
              style={errorStyles}
            >
              <span className="nhsuk-u-visually-hidden">Error:</span> {errorMessage}
            </div>
          )}
          
          <div 
            className={clsx(
              'nhsuk-checkboxes',
              {
                'nhsuk-checkboxes--small': small,
                'nhsuk-checkboxes--conditional': hasConditional
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

Checkboxes.displayName = 'Checkboxes';

export default Checkboxes;
