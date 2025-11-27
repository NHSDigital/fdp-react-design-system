export interface HeadingInputProps {
  level?: 1|2|3|4|5|6;
  size?: 'xs'|'s'|'m'|'l'|'xl'|'xxl';
  className?: string;
  marginBottom?: string;
}

export interface NormalisedHeadingModel {
  tag: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6';
  classes: string;
  style: Record<string, any> | undefined;
}

function deriveLevel(size?: string): 1|2|3|4|5|6 {
  switch(size){
    case 'xxl':
    case 'xl': return 1;
    case 'l': return 2;
    case 'm': return 3;
    case 's': return 4;
    case 'xs': return 5;
    default: return 2;
  }
}

export function mapHeadingProps(input: HeadingInputProps): NormalisedHeadingModel {
  const level = input.level ?? deriveLevel(input.size);
  const classes = [
    'nhsuk-heading',
    input.size ? `nhsuk-heading--${input.size}` : '',
    input.className || ''
  ].filter(Boolean).join(' ');
  const style = input.marginBottom ? { marginBottom: input.marginBottom } : undefined;
  return { tag: `h${level}` as any, classes, style };
}
