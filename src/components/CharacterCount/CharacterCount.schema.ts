import type { ComponentSchema } from '../../schemas/componentMeta';

export const CharacterCountSchema: ComponentSchema = {
  name: 'CharacterCount',
  props: [
    { name: 'id', type: 'string', required: true, description: 'Unique id for textarea and message association' },
    { name: 'name', type: 'string', required: true, description: 'Name attribute for textarea' },
    { name: 'value', type: 'string', required: false, description: 'Current value (controlled)' },
    { name: 'defaultValue', type: 'string', required: false, description: 'Initial value (uncontrolled)' },
    { name: 'rows', type: 'number', required: false, defaultValue: '5', description: 'Textarea rows' },
    { name: 'maxLength', type: 'number', required: false, description: 'Maximum characters' },
    { name: 'maxWords', type: 'number', required: false, description: 'Maximum words (alternative to maxLength)' },
    { name: 'threshold', type: 'number', required: false, defaultValue: '75', description: 'Threshold percentage to show counter' },
    { name: 'className', type: 'string', required: false, description: 'Wrapper extra classes' },
    { name: 'countMessageClasses', type: 'string', required: false, description: 'Extra classes for message element' },
    { name: 'hasError', type: 'boolean', required: false, description: 'Force error styling' },
    { name: 'describedBy', type: 'string', required: false, description: 'aria-describedby ids' },
  ]
};

export default CharacterCountSchema;