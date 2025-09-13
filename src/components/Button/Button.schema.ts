import type { ComponentSchema } from '../../schemas/componentMeta';

export const ButtonSchema: ComponentSchema = {
  name: 'Button',
  category: 'form',
  since: '0.1.1',
  a11yNotes: [
    'Supports keyboard activation (Enter / Space) on links rendered with role=button.',
    'Provides data attributes for state styling (pressed, focused, hovered, disabled).'
  ],
  props: [
    {
      name: 'variant',
      type: "'primary' | 'secondary' | 'reverse' | 'warning' | 'login'",
      defaultValue: 'primary',
      description: 'Visual style variant',
      enum: ['primary', 'secondary', 'reverse', 'warning', 'login'],
    },
    {
      name: 'size',
      type: "'default' | 'small' | 'large'",
      defaultValue: 'default',
      description: 'Size variant',
      enum: ['default', 'small', 'large'],
    },
    { name: 'fullWidth', type: 'boolean', defaultValue: 'false', description: 'Expands to full container width' },
    { name: 'preventDoubleClick', type: 'boolean', defaultValue: 'false', description: 'Prevents accidental double submissions' },
    { name: 'href', type: 'string', description: 'Render as link when provided' },
    { name: 'target', type: 'string', description: 'Anchor target when rendering as link' },
    { name: 'rel', type: 'string', description: 'Anchor rel when rendering as link' },
    { name: 'aria-disabled', type: "'true' | 'false'", description: 'Use for disabling anchor links (no native disabled on <a>)' },
    { name: 'type', type: "'button' | 'submit' | 'reset'", defaultValue: 'button', description: 'Button type attribute (button only)' },
    { name: 'disabled', type: 'boolean', description: 'Disables the button (button element only)' },
    { name: 'children', type: 'ReactNode|string', required: true, description: 'Button content (text or nodes). For macros, use `text` or `html`.' },
    { name: 'className', type: 'string', description: 'Additional CSS classes' }
  ]
};

export default ButtonSchema;
