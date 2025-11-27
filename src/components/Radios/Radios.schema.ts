import type { ComponentSchema } from '../../schemas/componentMeta';

export const RadiosSchema: ComponentSchema = {
  name: 'Radios',
  category: 'form',
  since: '0.1.1',
  a11yNotes: [
    'Keyboard arrow navigation cycles through options.',
    'Conditional content container is hidden with --hidden class when inactive.',
  ],
  props: [
    { name: 'name', type: 'string', required: true, description: 'Group name' },
    { name: 'value', type: 'string', description: 'Controlled selected value' },
    { name: 'defaultValue', type: 'string', description: 'Uncontrolled initial value' },
    { name: 'hasError', type: 'boolean', defaultValue: 'false', description: 'Error style' },
    { name: 'describedBy', type: 'string', description: 'aria-describedby id list' },
    { name: 'className', type: 'string', description: 'Extra CSS classes' },
    { name: 'size', type: "'normal'|'small'", defaultValue: 'normal', description: 'Size variant' },
    { name: 'inline', type: 'boolean', defaultValue: 'false', description: 'Inline layout' },
    { name: 'options', type: 'Array<{ value: string; text: string; hint?: string; disabled?: boolean; conditional?: any }>', required: true, description: 'Radio options' }
  ]
};

export default RadiosSchema;
