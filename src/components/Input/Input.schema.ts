import type { ComponentSchema } from '../../schemas/componentMeta';

export const InputSchema: ComponentSchema = {
  name: 'Input',
  category: 'form',
  since: '0.1.1',
  a11yNotes: [
    'Supports aria-describedby for associating hint and error message text.',
    'Range variant exposes current/min/max values for assistive clarity when labels enabled.'
  ],
  props: [
    { name: 'id', type: 'string', required: true, description: 'Unique id' },
    { name: 'name', type: 'string', required: true, description: 'Form field name' },
    { name: 'type', type: "'text'|'email'|'password'|'tel'|'url'|'search'|'number'|'range'", defaultValue: 'text', description: 'Input type' },
    { name: 'value', type: 'string', description: 'Controlled value' },
    { name: 'defaultValue', type: 'string', description: 'Uncontrolled default value' },
    { name: 'placeholder', type: 'string', description: 'Placeholder text' },
    { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disabled state' },
    { name: 'readOnly', type: 'boolean', defaultValue: 'false', description: 'Read-only state' },
    { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Required indicator' },
    { name: 'hasError', type: 'boolean', defaultValue: 'false', description: 'Error style' },
    { name: 'describedBy', type: 'string', description: 'Space-separated ids of hint/error elements' },
    { name: 'className', type: 'string', description: 'Additional CSS classes' },
    { name: 'width', type: "'full'|'20'|'10'|'5'|'4'|'3'|'2'", defaultValue: 'full', description: 'Width variant (non-range only)' },
    { name: 'inputMode', type: "'text'|'email'|'tel'|'url'|'numeric'|'decimal'|'search'", description: 'Input mode hint for soft keyboards' },
    { name: 'autoComplete', type: 'string', description: 'Autocomplete attribute' },
    { name: 'maxLength', type: 'number', description: 'Max length' },
    { name: 'minLength', type: 'number', description: 'Min length' },
    { name: 'pattern', type: 'string', description: 'Validation pattern' },
    { name: 'step', type: 'string|number', description: 'Step (number/range)' },
    { name: 'min', type: 'string|number', description: 'Min value (number/range)' },
    { name: 'max', type: 'string|number', description: 'Max value (number/range)' },
    { name: 'showValueLabels', type: 'boolean', defaultValue: 'false', description: 'Show min/max labels (range)' },
    { name: 'showCurrentValue', type: 'boolean', defaultValue: 'false', description: 'Show current value label (range)' },
    { name: 'valueLabels', type: '{ min?: string; max?: string; current?: string }', description: 'Custom range label text' }
  ]
};

export default InputSchema;
