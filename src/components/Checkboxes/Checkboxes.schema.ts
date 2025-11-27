import type { ComponentSchema } from '../../schemas/componentMeta';

export const CheckboxesSchema: ComponentSchema = {
  name: 'Checkboxes',
  props: [
    { name: 'items', type: 'CheckboxItem[]', required: true, description: 'Array of checkbox items' },
    { name: 'name', type: 'string', required: true, description: 'Shared name attribute' },
    { name: 'idPrefix', type: 'string', description: 'ID prefix for fieldset and inputs' },
    { name: 'legend', type: 'string', description: 'Legend text' },
    { name: 'isPageHeading', type: 'boolean', description: 'Legend rendered as page heading' },
    { name: 'legendSize', type: '"xl"|"l"|"m"|"s"', description: 'Legend size' },
    { name: 'hint', type: 'string', description: 'Group hint text' },
    { name: 'errorMessage', type: 'string', description: 'Group error message' },
    { name: 'className', type: 'string', description: 'Extra wrapper classes' },
    { name: 'small', type: 'boolean', description: 'Small variant' },
  ]
};

export default CheckboxesSchema;