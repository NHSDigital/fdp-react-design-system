import type { ComponentSchema } from '../../schemas/componentMeta';

export const HintSchema: ComponentSchema = {
  name: 'Hint',
  category: 'typography',
  since: '0.1.1',
  a11yNotes: [
    'Provides supporting contextual help text associated with a form field or section.'
  ],
  props: [
    { name: 'id', type: 'string', description: 'HTML id attribute' },
    { name: 'className', type: 'string', description: 'Additional CSS classes' },
    { name: 'children', type: 'ReactNode|string', required: true, description: 'Hint content' }
  ]
};

export default HintSchema;
