import type { ComponentSchema } from '../../schemas/componentMeta';

export const DateInputSchema: ComponentSchema = {
  name: 'DateInput',
  category: 'form',
  since: '0.1.1',
  a11yNotes: [
    'Groups day/month/year inputs with shared hint/error via describedBy.',
    'Field-level validation errors (client side state in React) are not present in initial SSR/macro output.'
  ],
  props: [
    { name: 'id', type: 'string', required: true, description: 'Root id used as prefix for generated input IDs and hint/error IDs' },
    { name: 'className', type: 'string', description: 'Additional classes for the date input wrapper' },
    { name: 'items', type: 'Array<{ name: string; label?: string; value?: string; classes?: string; id?: string; inputmode?: string; autocomplete?: string; pattern?: string }>', description: 'Explicit configuration of day/month/year items (fallback defaults applied when omitted)' },
    { name: 'namePrefix', type: 'string', description: 'Prefix to wrap submitted field names e.g. prefix[day]' },
    { name: 'values', type: '{ day?: string; month?: string; year?: string }', description: 'Initial values for each field' },
    { name: 'fieldset', type: '{ legend?: string; classes?: string; describedBy?: string }', description: 'Optional fieldset wrapper and legend text' },
    { name: 'hint', type: '{ text?: string; html?: string; classes?: string }', description: 'Hint configuration (before error message)' },
    { name: 'errorMessage', type: '{ text?: string; html?: string; classes?: string }', description: 'Group level error message (adds error state styles)' }
  ]
};

export default DateInputSchema;
