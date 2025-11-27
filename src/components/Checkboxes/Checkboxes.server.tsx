import React from 'react';
void React; // ensure identifier exists for JSX classic runtime edge-cases
import classNames from 'classnames';
import { CheckboxesProps, CheckboxConditionalProps } from './Checkboxes.types';
import { Label } from '../Label/Label';
import { Fieldset } from '../Fieldset/Fieldset';
import { InputServer as Input } from '../Input/Input.server';
import './Checkboxes.scss';
import { mapCheckboxesProps } from '../../mapping/checkboxes';

/**
 * CheckboxesServer – Pure server-only renderer (no hooks).
 *
 * Notes:
 * - Does not attach event handlers; server components should not emit functions.
 * - Conditional content visibility is derived from initial `checked` flags.
 * - Adds `data-nhs-behaviour="checkboxes"` to enable progressive enhancement when JS is present.
 */
export function CheckboxesServer(props: CheckboxesProps) {
  const {
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
    // Strip interactive handler in server variant
    onChange: _onChange,
    fieldsetAttributes,
    attributes,
    ...rest
  } = props;

  const finalIdPrefix = idPrefix || name;
  const hintId = hint ? `${finalIdPrefix}-hint` : undefined;
  const errorId = errorMessage ? `${finalIdPrefix}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  const { classes: checkboxesClasses, formGroupClasses } = mapCheckboxesProps({ small, className, hasError: !!errorMessage });

  return (
    <div className={formGroupClasses} {...attributes} {...rest}>
      <Fieldset
        legend={legend ? { text: legend, isPageHeading, size: legendSize } : undefined}
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

        <div className={checkboxesClasses} data-nhs-behaviour="checkboxes">
          {items.map((item, index) => {
            const itemId = `${finalIdPrefix}-${index + 1}`;
            const conditionalId = `${itemId}-conditional`;
            const isChecked = !!item.checked;
            const isDisabled = !!item.disabled;

            return (
              <div key={item.value} className="nhsuk-checkboxes__item">
                <input
                  className="nhsuk-checkboxes__input"
                  id={itemId}
                  name={name}
                  type="checkbox"
                  value={item.value}
                  {...(isChecked ? { defaultChecked: true } : {})}
                  disabled={isDisabled}
                  aria-describedby={item.hint ? `${itemId}-hint` : describedBy}
                  {...(item.conditional && {
                    'aria-controls': conditionalId,
                    'aria-expanded': isChecked ? 'true' : 'false',
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
                    data-nhs-checkboxes-conditional
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
                      item.conditional as React.ReactNode
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Fieldset>
    </div>
  );
}

export default CheckboxesServer;
