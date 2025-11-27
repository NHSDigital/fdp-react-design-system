import type { ComponentSchema } from '../../schemas/componentMeta';

export const TagSchema: ComponentSchema = {
  name: 'Tag',
  category: 'meta',
  since: '0.1.1',
  a11yNotes: [
    'Close button (when closable) is a native button with aria-label "Remove".'
  ],
  props: [
    { name: 'text', type: 'string', description: 'Plain text content' },
    { name: 'html', type: 'string', description: 'HTML string content (overrides text)'} ,
    { name: 'children', type: 'ReactNode|string', description: 'Children content (highest precedence)' },
    { name: 'color', type: "'default'|'white'|'grey'|'green'|'aqua-green'|'blue'|'purple'|'pink'|'red'|'orange'|'yellow'", defaultValue: 'default', description: 'Visual color variant', enum: ['default','white','grey','green','aqua-green','blue','purple','pink','red','orange','yellow'] },
    { name: 'noBorder', type: 'boolean', defaultValue: 'false', description: 'Removes border style' },
    { name: 'closable', type: 'boolean', defaultValue: 'false', description: 'Displays close (×) control' },
    { name: 'onClose', type: '() => void', description: 'Callback when close button clicked' },
    { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables close interaction' },
    { name: 'className', type: 'string', description: 'Additional CSS classes' }
  ]
};

export default TagSchema;
