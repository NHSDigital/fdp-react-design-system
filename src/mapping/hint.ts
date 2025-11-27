export interface HintInputProps {
  className?: string;
  id?: string;
}

export interface NormalisedHintModel {
  classes: string;
  id?: string;
}

export function mapHintProps(input: HintInputProps): NormalisedHintModel {
  const classes = [
    'nhsuk-hint',
    input.className || ''
  ].filter(Boolean).join(' ');
  return { classes, id: input.id };
}
