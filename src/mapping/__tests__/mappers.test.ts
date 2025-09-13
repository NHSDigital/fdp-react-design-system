import { describe, it, expect } from 'vitest';
import { mapFieldsetProps } from '../fieldset';
import { mapTextareaProps } from '../textarea';
import { mapSelectProps } from '../select';
import { mapRadiosProps } from '../radios';
import { mapCheckboxesProps } from '../checkboxes';

describe('mapping utilities', () => {
  it('mapFieldsetProps computes classes and legend heading', () => {
    const model = mapFieldsetProps({
      className: 'extra',
      describedBy: 'hint-id',
      legend: { size: 'l', className: 'legend-extra', isPageHeading: true },
    });
    expect(model.fieldsetClasses).toContain('nhsuk-fieldset');
    expect(model.fieldsetClasses).toContain('extra');
    expect(model.legendClasses).toContain('nhsuk-fieldset__legend--l');
    expect(model.legendClasses).toContain('legend-extra');
    expect(model.legendIsPageHeading).toBe(true);
    expect(model.describedBy).toBe('hint-id');
  });

  it('mapTextareaProps toggles error and resize classes', () => {
    const def = mapTextareaProps({});
    expect(def.classes).toContain('nhsuk-textarea');
    expect(def.classes).not.toContain('nhsuk-textarea--error');
    expect(def.classes).not.toContain('nhsuk-textarea--resize-');

    const err = mapTextareaProps({ hasError: true });
    expect(err.classes).toContain('nhsuk-textarea--error');

    const horiz = mapTextareaProps({ resize: 'horizontal' });
    expect(horiz.classes).toContain('nhsuk-textarea--resize-horizontal');
  });

  it('mapSelectProps includes error class when hasError', () => {
    expect(mapSelectProps({}).classes).toBe('nhsuk-select');
    expect(mapSelectProps({ hasError: true }).classes).toContain('nhsuk-select--error');
  });

  it('mapRadiosProps composes inline/small/error correctly', () => {
    const base = mapRadiosProps({});
    expect(base.classes).toContain('nhsuk-radios');

    const all = mapRadiosProps({ hasError: true, inline: true, size: 'small', className: 'x', describedBy: 'd' });
    expect(all.classes).toContain('nhsuk-radios--error');
    expect(all.classes).toContain('nhsuk-radios--inline');
    expect(all.classes).toContain('nhsuk-radios--small');
    expect(all.classes).toContain('x');
    expect(all.describedBy).toBe('d');
  });

  it('mapCheckboxesProps returns container and form group classes', () => {
    const model = mapCheckboxesProps({ small: true, className: 'x', hasError: true });
    expect(model.classes).toContain('nhsuk-checkboxes');
    expect(model.classes).toContain('nhsuk-checkboxes--small');
    expect(model.classes).toContain('x');
    expect(model.formGroupClasses).toContain('nhsuk-form-group');
    expect(model.formGroupClasses).toContain('nhsuk-form-group--error');
  });
});
