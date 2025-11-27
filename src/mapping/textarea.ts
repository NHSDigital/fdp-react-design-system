export interface TextareaInputProps {
  hasError?: boolean;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  className?: string;
  describedBy?: string;
}

export interface NormalisedTextareaModel {
  classes: string;
  describedBy?: string;
}

export function mapTextareaProps(input: TextareaInputProps): NormalisedTextareaModel {
  const resize = input.resize ?? 'vertical';
  const classes = [
    'nhsuk-textarea',
    input.hasError ? 'nhsuk-textarea--error' : '',
    resize !== 'vertical' ? `nhsuk-textarea--resize-${resize}` : '',
    input.className || '',
  ].filter(Boolean).join(' ');
  return { classes, describedBy: input.describedBy };
}
