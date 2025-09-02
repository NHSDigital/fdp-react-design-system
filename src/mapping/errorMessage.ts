export interface ErrorMessageInputProps {
  id?: string;
  className?: string;
  visuallyHiddenText?: string;
}

export interface NormalisedErrorMessageModel {
  classes: string;
  id?: string;
  visuallyHiddenText: string;
}

export function mapErrorMessageProps(input: ErrorMessageInputProps): NormalisedErrorMessageModel {
  const classes = ['nhsuk-error-message', input.className || ''].filter(Boolean).join(' ');
  return {
    classes,
    id: input.id,
    visuallyHiddenText: input.visuallyHiddenText ?? 'Error:'
  };
}
