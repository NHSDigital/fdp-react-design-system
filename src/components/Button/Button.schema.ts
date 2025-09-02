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
    { name: 'variant', type: "'primary' | 'secondary' | 'warning' | 'inverse'", defaultValue: 'primary', description: 'Visual style variant', enum: ['primary','secondary','warning','inverse'] },
    { name: 'size', type: "'default' | 'small'", defaultValue: 'default', description: 'Size variant' },
    { name: 'fullWidth', type: 'boolean', defaultValue: 'false', description: 'Expands to full container width' },
    { name: 'preventDoubleClick', type: 'boolean', defaultValue: 'false', description: 'Prevents accidental double submissions' },
    { name: 'href', type: 'string', description: 'Render as link when provided' },
    { name: 'children', type: 'ReactNode|string', required: true, description: 'Button content' },
    { name: 'className', type: 'string', description: 'Additional CSS classes' }
  ]
};

export default ButtonSchema;
