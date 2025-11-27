import type { ComponentSchema } from '../../schemas/componentMeta';

export const HeadingSchema: ComponentSchema = {
  name: 'Heading',
  category: 'typography',
  since: '0.1.1',
  a11yNotes: [
    'Allows separation of visual size from semantic level to maintain proper document outline.'
  ],
  props: [
    { name: 'level', type: '1|2|3|4|5|6', description: 'Semantic heading level (h1-h6); auto-derived from size if omitted' },
    { name: 'size', type: "'xs'|'s'|'m'|'l'|'xl'|'xxl'", description: 'Visual size variant' },
    { name: 'className', type: 'string', description: 'Additional CSS classes' },
    { name: 'text', type: 'string', description: 'Plain text content' },
    { name: 'html', type: 'string', description: 'HTML content (unsafe unless trusted); ignored if children provided' },
    { name: 'children', type: 'ReactNode|string', description: 'Explicit node content overrides text/html' },
    { name: 'marginBottom', type: 'string', description: 'Custom CSS margin-bottom value' }
  ]
};

export default HeadingSchema;
