// Pure mapping logic for Button. Converts external props to a normalised model
// used by both React & Nunjucks renderers (future).

export interface ButtonInputProps {
  variant?: string;
  size?: string;
  fullWidth?: boolean;
  className?: string;
  preventDoubleClick?: boolean;
  href?: string;
}

export interface NormalisedButtonModel {
  tag: 'button' | 'a';
  classes: string;
  data: Record<string, string>;
  attrs: Record<string, any>;
  preventDoubleClick: boolean;
}

export function mapButtonProps(input: ButtonInputProps): NormalisedButtonModel {
  const variant = input.variant || 'primary';
  const size = input.size || 'default';
  const fullWidth = !!input.fullWidth;
  const classes = [
    'nhs-aria-button',
    `nhs-aria-button--${variant}`,
    size !== 'default' ? `nhs-aria-button--${size}` : '',
    fullWidth ? 'nhs-aria-button--full-width' : '',
    input.className || ''
  ].filter(Boolean).join(' ');

  const tag = input.href ? 'a' : 'button';
  return {
    tag,
    classes,
    data: { module: 'nhs-button' },
    attrs: input.href ? { href: input.href, role: 'button' } : { type: 'button' },
    preventDoubleClick: !!input.preventDoubleClick
  };
}
