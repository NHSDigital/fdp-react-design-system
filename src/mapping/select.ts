export interface SelectInputProps {
  hasError?: boolean;
  className?: string;
}

export interface NormalisedSelectModel {
  classes: string;
}

export function mapSelectProps(input: SelectInputProps): NormalisedSelectModel {
  const classes = [
    'nhsuk-select',
    input.hasError ? 'nhsuk-select--error' : '',
    input.className || '',
  ].filter(Boolean).join(' ');
  return { classes };
}
