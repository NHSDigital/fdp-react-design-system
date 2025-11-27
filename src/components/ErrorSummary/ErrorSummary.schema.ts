import type { ComponentSchema } from '../../schemas/componentMeta';

export const ErrorSummarySchema: ComponentSchema = {
  name: 'ErrorSummary',
  category: 'form',
  since: '0.1.1',
  a11yNotes: [
    'Focuses programmatically on mount in React; macro/static render initial markup without auto-focus (handled by enhancement script if added).',
    'Provides role="alert" and an H2 title with aria-labelledby for screen reader context.'
  ],
  props: [
    { name: 'titleText', type: 'string', defaultValue: '"There is a problem"', description: 'Summary title text (ignored if titleHtml provided)' },
    { name: 'titleHtml', type: 'string', description: 'Raw HTML for title (takes precedence over titleText)' },
    { name: 'descriptionText', type: 'string', description: 'Description text (ignored if descriptionHtml or children provided)' },
    { name: 'descriptionHtml', type: 'string', description: 'Description HTML (takes precedence over descriptionText unless children provided)' },
    { name: 'errorList', type: 'Array<{ text?: string; html?: string; href?: string; attributes?: Record<string, any> }>', required: true, description: 'List of error items displayed under the description' },
    { name: 'className', type: 'string', description: 'Additional CSS classes for root container' },
    { name: 'children', type: 'ReactNode|string', description: 'Custom description content (overrides descriptionText/Html)' }
  ]
};

export default ErrorSummarySchema;
