import type { ComponentSchema } from '../../schemas/componentMeta';

export const FieldsetSchema: ComponentSchema = {
  name: 'Fieldset',
  category: 'form',
  since: '0.1.1',
  a11yNotes: [
    'Wraps related form controls with an accessible legend.',
    'Legend can optionally render as an h1 for page-level grouping when isPageHeading is true.'
  ],
  props: [
    { name: 'children', type: 'ReactNode|string', required: true, description: 'Fieldset content (form controls and supporting markup)' },
    { name: 'legend', type: '{ text?: string; html?: string; className?: string; size?: "xl"|"l"|"m"|"s"; isPageHeading?: boolean }', description: 'Legend configuration (text or HTML plus optional size & page heading role)' },
    { name: 'className', type: 'string', description: 'Additional CSS classes for the fieldset' },
    { name: 'describedBy', type: 'string', description: 'Space-separated list of element IDs that describe the fieldset' }
  ]
};

export default FieldsetSchema;
