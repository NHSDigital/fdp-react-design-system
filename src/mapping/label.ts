export interface LabelInputProps {
  size?: 'xl'|'l'|'m'|'s';
  isPageHeading?: boolean;
  className?: string;
  htmlFor?: string;
}

export interface NormalisedLabelModel {
  tag: 'label' | 'h1';
  classes: string;
  size: string;
  htmlFor?: string;
  isPageHeading: boolean;
}

export function mapLabelProps(input: LabelInputProps): NormalisedLabelModel {
  const size = input.size || 'm';
  const classes = [
    'nhsuk-label',
    size !== 'm' ? `nhsuk-label--${size}` : '',
    input.className || ''
  ].filter(Boolean).join(' ');
  return {
    tag: input.isPageHeading ? 'h1' : 'label',
    classes,
    size,
    htmlFor: input.isPageHeading ? undefined : input.htmlFor,
    isPageHeading: !!input.isPageHeading
  };
}
