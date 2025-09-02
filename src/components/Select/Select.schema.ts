import type { ComponentSchema } from '../../schemas/componentMeta';

export const SelectSchema: ComponentSchema = {
  name: 'Select',
  category: 'form',
  since: '0.1.1',
  a11yNotes: [
    'Supports aria-describedby for associating hint and error message text.',
    'Accepts aria-label when external visible label is not present.',
    'Multiple selection variant sets multiple/size attributes.'
  ],
  props: [
    { name: 'id', type: 'string', required: true, description: 'Unique id' },
    { name: 'name', type: 'string', required: true, description: 'Form field name' },
    { name: 'ariaLabel', type: 'string', description: 'Accessible label when separate label element not used' },
    { name: 'value', type: 'string', description: 'Controlled value' },
    { name: 'defaultValue', type: 'string', description: 'Uncontrolled default value' },
    { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disabled state' },
    { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Required indicator' },
    { name: 'hasError', type: 'boolean', defaultValue: 'false', description: 'Error style' },
    { name: 'describedBy', type: 'string', description: 'Space-separated ids of hint/error elements' },
    { name: 'className', type: 'string', description: 'Additional CSS classes' },
    { name: 'multiple', type: 'boolean', defaultValue: 'false', description: 'Multiple selection allowed' },
    { name: 'size', type: 'number', description: 'Visible option count (for multiple)' },
    { name: 'autoComplete', type: 'string', description: 'Autocomplete attribute' },
    { name: 'options', type: 'Array<{ value: string; text: string; disabled?: boolean; selected?: boolean }>', description: 'Inline options array (alternative to body content)' }
  ]
};

export default SelectSchema;
