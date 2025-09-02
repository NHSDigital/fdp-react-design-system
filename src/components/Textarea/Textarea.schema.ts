import type { ComponentSchema } from '../../schemas/componentMeta';

export const TextareaSchema: ComponentSchema = {
  name: 'Textarea',
  category: 'form',
  since: '0.1.1',
  a11yNotes: [
    'Supports aria-describedby for associating hint and error message text.',
    'Label element should reference textarea id for accessible name.',
  ],
  props: [
    { name: 'id', type: 'string', required: true, description: 'Unique id' },
    { name: 'name', type: 'string', required: true, description: 'Form field name' },
    { name: 'value', type: 'string', description: 'Controlled value' },
    { name: 'defaultValue', type: 'string', description: 'Uncontrolled default value' },
    { name: 'placeholder', type: 'string', description: 'Placeholder text' },
    { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disabled state' },
    { name: 'readOnly', type: 'boolean', defaultValue: 'false', description: 'Read-only state' },
    { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Required indicator' },
    { name: 'hasError', type: 'boolean', defaultValue: 'false', description: 'Error style' },
    { name: 'describedBy', type: 'string', description: 'Space-separated ids of hint/error elements' },
    { name: 'className', type: 'string', description: 'Additional CSS classes' },
    { name: 'rows', type: 'number', defaultValue: '5', description: 'Visible text lines (rows)' },
    { name: 'cols', type: 'number', description: 'Visible character widths (cols)' },
    { name: 'maxLength', type: 'number', description: 'Max length' },
    { name: 'minLength', type: 'number', description: 'Min length' },
    { name: 'wrap', type: "'hard'|'soft'|'off'", defaultValue: 'soft', description: 'Wrapping mode' },
    { name: 'resize', type: "'none'|'both'|'horizontal'|'vertical'", defaultValue: 'vertical', description: 'Resize capability (applies modifier class)' },
    { name: 'autoComplete', type: 'string', description: 'Autocomplete attribute' },
    { name: 'spellCheck', type: 'boolean', description: 'Spell check attribute' }
  ]
};

export default TextareaSchema;
