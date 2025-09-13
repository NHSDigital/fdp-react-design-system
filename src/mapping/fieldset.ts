export type FieldsetLegendSize = 'xl' | 'l' | 'm' | 's';

export interface FieldsetLegendInput {
  size?: FieldsetLegendSize;
  className?: string;
  isPageHeading?: boolean;
}

export interface FieldsetInputProps {
  className?: string;
  describedBy?: string;
  legend?: FieldsetLegendInput;
}

export interface NormalisedFieldsetModel {
  fieldsetClasses: string;
  legendClasses?: string;
  legendIsPageHeading: boolean;
  describedBy?: string;
}

export function mapFieldsetProps(input: FieldsetInputProps): NormalisedFieldsetModel {
  const fieldsetClasses = ['nhsuk-fieldset', input.className || ''].filter(Boolean).join(' ');
  const legendClasses = input.legend
    ? [
        'nhsuk-fieldset__legend',
        input.legend.size ? `nhsuk-fieldset__legend--${input.legend.size}` : '',
        input.legend.className || '',
      ]
        .filter(Boolean)
        .join(' ')
    : undefined;
  return {
    fieldsetClasses,
    legendClasses,
    legendIsPageHeading: !!input.legend?.isPageHeading,
    describedBy: input.describedBy,
  };
}
