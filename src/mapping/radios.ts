export interface RadiosInputProps {
  hasError?: boolean;
  inline?: boolean;
  size?: 'normal' | 'small';
  className?: string;
  describedBy?: string;
}

export interface NormalisedRadiosModel {
  classes: string;
  describedBy?: string;
}

export function mapRadiosProps(input: RadiosInputProps): NormalisedRadiosModel {
  const classes = [
    'nhsuk-radios',
    input.hasError ? 'nhsuk-radios--error' : '',
    input.size === 'small' ? 'nhsuk-radios--small' : '',
    input.inline ? 'nhsuk-radios--inline' : '',
    input.className || '',
  ].filter(Boolean).join(' ');
  return { classes, describedBy: input.describedBy };
}
