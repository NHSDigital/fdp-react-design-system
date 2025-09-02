import type { ComponentSchema } from '../../schemas/componentMeta';

export const ErrorMessageSchema: ComponentSchema = {
  name: 'ErrorMessage',
  category: 'form',
  since: '0.1.1',
  a11yNotes: [
    'Includes visually hidden prefix text (default "Error:") to aid screen reader users.'
  ],
  props: [
    { name: 'id', type: 'string', description: 'HTML id attribute' },
    { name: 'className', type: 'string', description: 'Additional CSS classes' },
    { name: 'visuallyHiddenText', type: 'string', defaultValue: 'Error:', description: 'Prefix announced to screen readers' },
    { name: 'children', type: 'ReactNode|string', required: true, description: 'Error message content' }
  ]
};

export default ErrorMessageSchema;
