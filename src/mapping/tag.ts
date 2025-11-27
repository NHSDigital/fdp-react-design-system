export interface TagInputProps {
  color?: string;
  noBorder?: boolean;
  closable?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface NormalisedTagModel {
  classes: string;
  showClose: boolean;
  disabled: boolean;
}

export function mapTagProps(input: TagInputProps): NormalisedTagModel {
  const { color = 'default', noBorder, closable, disabled, className } = input;
  const classes = [
    'nhsuk-tag',
    color !== 'default' ? `nhsuk-tag--${color}` : '',
    noBorder ? 'nhsuk-tag--no-border' : '',
    closable ? 'nhsuk-tag--closable' : '',
    disabled ? 'nhsuk-tag--disabled' : '',
    className || ''
  ].filter(Boolean).join(' ');
  return { classes, showClose: !!closable, disabled: !!disabled };
}
