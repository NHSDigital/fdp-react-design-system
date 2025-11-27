import type { ComponentSchema } from '../../schemas/componentMeta';

export const PanelSchema: ComponentSchema = {
  name: 'Panel',
  category: 'content',
  since: '0.1.1',
  props: [
    { name: 'id', type: 'string', description: 'Unique identifier' },
    { name: 'className', type: 'string', description: 'Additional CSS classes' },
    { name: 'headingText', type: 'string', description: 'Heading text (ignored if headingHtml is provided)' },
    { name: 'headingHtml', type: 'string', description: 'Heading HTML (overrides headingText)' },
    { name: 'headingLevel', type: '1|2|3|4|5|6', defaultValue: '2', description: 'Heading level to render for the heading' },
    { name: 'bodyText', type: 'string', description: 'Body text (ignored if bodyHtml is provided)' },
    { name: 'bodyHtml', type: 'string', description: 'Body HTML (overrides bodyText)' }
  ]
};

export default PanelSchema;
