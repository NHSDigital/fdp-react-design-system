import type { ComponentSchema } from '../../schemas/componentMeta';

export const LabelSchema: ComponentSchema = {
  name: 'Label',
  category: 'form',
  since: '0.1.1',
  a11yNotes: [
    'Supports page heading mode by rendering an <h1> containing a nested <label> to retain association.'
  ],
  props: [
    { name: 'htmlFor', type: 'string', description: 'ID of associated form control' },
    { name: 'className', type: 'string', description: 'Additional CSS classes' },
    { name: 'isPageHeading', type: 'boolean', defaultValue: 'false', description: 'Render as page heading (h1 wrapper)' },
    { name: 'size', type: "'xl'|'l'|'m'|'s'", defaultValue: 'm', description: 'Size variant' },
    { name: 'children', type: 'ReactNode|string', required: true, description: 'Label content' }
  ]
};

export default LabelSchema;
