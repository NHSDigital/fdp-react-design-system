export interface CheckboxesInputProps {
  small?: boolean;
  className?: string;
  hasError?: boolean;
}

export interface NormalisedCheckboxesModel {
  classes: string;
  formGroupClasses: string;
}

export function mapCheckboxesProps(input: CheckboxesInputProps): NormalisedCheckboxesModel {
  const classes = [
    'nhsuk-checkboxes',
    input.small ? 'nhsuk-checkboxes--small' : '',
    input.className || '',
  ].filter(Boolean).join(' ');
  const formGroupClasses = [
    'nhsuk-form-group',
    input.hasError ? 'nhsuk-form-group--error' : '',
  ].filter(Boolean).join(' ');
  return { classes, formGroupClasses };
}
