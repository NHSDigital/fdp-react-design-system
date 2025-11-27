import type { ComponentSchema } from '../../schemas/componentMeta';

export const DetailsSchema: ComponentSchema = {
  name: 'Details',
  category: 'content',
  since: '0.1.1',
  a11yNotes: [
    'Uses native <details> and <summary> elements for disclosure.',
    'Summary is focusable; body content announced when expanded.'
  ],
  props: [
    { name: 'summaryText', type: 'string', description: 'Text for the summary (clickable)' },
    { name: 'summaryHtml', type: 'string', description: 'HTML for the summary (overrides summaryText)' },
    { name: 'text', type: 'string', description: 'Text content for the details body' },
    { name: 'html', type: 'string', description: 'HTML content for the details body (overrides text)' },
    { name: 'open', type: 'boolean', defaultValue: 'false', description: 'Whether the details is open by default' },
    { name: 'className', type: 'string', description: 'Additional CSS classes' },
    { name: 'id', type: 'string', description: 'Unique identifier' }
  ]
};

export default DetailsSchema;
