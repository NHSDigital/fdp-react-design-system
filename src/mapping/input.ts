export interface InputMapperProps {
  id: string;
  name: string;
  type?: string;
  hasError?: boolean;
  width?: string;
  className?: string;
  range?: {
    isRange: boolean;
    showValueLabels: boolean;
    showCurrentValue: boolean;
  };
}

export interface NormalisedInputModel {
  classes: string;
  isRange: boolean;
}

export function mapInputProps(p: InputMapperProps): NormalisedInputModel {
  const type = p.type || 'text';
  const isRange = type === 'range';
  const classes = [
    'nhsuk-input',
    p.hasError ? 'nhsuk-input--error' : '',
    isRange ? 'nhsuk-input--range' : '',
    (!isRange && p.width && p.width !== 'full') ? `nhsuk-input--width-${p.width}` : '',
    p.className || ''
  ].filter(Boolean).join(' ');
  return { classes, isRange };
}
