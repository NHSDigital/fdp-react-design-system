import type { ComponentSchema } from '../../schemas/componentMeta';

export const InsetTextSchema: ComponentSchema = {
  name: 'InsetText',
  category: 'content',
  since: '0.1.1',
  props: [
    { name: 'text', type: 'string', description: 'Plain text content (ignored if html is provided)' },
    { name: 'html', type: 'string', description: 'HTML content (overrides text)' },
    { name: 'className', type: 'string', description: 'Additional CSS classes' }
  ]
};

export default InsetTextSchema;
