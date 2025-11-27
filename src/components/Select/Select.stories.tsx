// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import ParityBlock, { toNunjucksMacro } from '../../storybook/ParityBlock';
import selectStaticHtml from '../../../docs/static-html/Select.html?raw';

const meta: Meta<typeof Select> = {
  title: 'NHS/Components/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS Select component provides a dropdown selection interface following NHS design guidelines with design token integration.

## Features

- **Dropdown selection**: Single and multiple selection support
- **Custom arrow styling**: NHS-styled dropdown arrow using SVG
- **Error state handling**: Visual error indicators with proper styling
- **Accessibility**: Screen reader support with proper ARIA attributes
- **Design token integration**: Uses NHS color, spacing, and typography tokens
- **Responsive design**: Adapts to different screen sizes

## Usage

\`\`\`tsx
import { Select } from '@nhs-fdp/design-system';

// Basic usage
<Select 
  id="country" 
  name="country" 
  options={[
    { value: 'uk', label: 'United Kingdom' },
    { value: 'us', label: 'United States' },
  ]}
/>

// With error state
<Select 
  id="region" 
  name="region" 
  hasError 
  describedBy="region-error"
  options={options}
/>

// Multiple selection
<Select 
  id="languages" 
  name="languages" 
  multiple 
  options={languageOptions}
/>
\`\`\`

## Accessibility

- Proper ARIA attributes for screen readers
- Error state indication with visual and semantic markup
- Keyboard navigation support (arrow keys, Enter, Escape)
- Focus indicators meeting WCAG contrast requirements
        `,
      },
    },
  },
  argTypes: {
    hasError: {
      control: 'boolean',
      description: 'Whether the select is in an error state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the select is required',
    },
    multiple: {
      control: 'boolean',
      description: 'Whether multiple options can be selected',
    },
    size: {
      control: 'number',
      description: 'Number of visible options (for multiple select)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const basicOptions = [
  { value: '', text: 'Please select an option' },
  { value: 'england', text: 'England' },
  { value: 'scotland', text: 'Scotland' },
  { value: 'wales', text: 'Wales' },
  { value: 'northern-ireland', text: 'Northern Ireland' },
];

const healthConditions = [
  { value: '', text: 'Select a condition' },
  { value: 'diabetes', text: 'Diabetes' },
  { value: 'hypertension', text: 'High Blood Pressure' },
  { value: 'asthma', text: 'Asthma' },
  { value: 'arthritis', text: 'Arthritis' },
  { value: 'depression', text: 'Depression' },
  { value: 'anxiety', text: 'Anxiety' },
];

const appointmentTimes = [
  { value: '', text: 'Select preferred time' },
  { value: '09:00', text: '9:00 AM' },
  { value: '10:00', text: '10:00 AM' },
  { value: '11:00', text: '11:00 AM' },
  { value: '14:00', text: '2:00 PM' },
  { value: '15:00', text: '3:00 PM' },
  { value: '16:00', text: '4:00 PM' },
];

export const Default: Story = {
  args: {
    id: 'select-default',
    name: 'select-default',
    options: basicOptions,
  },
};

export const Parity: Story = {
  name: 'Parity: React | Nunjucks | Static HTML',
  args: {
    id: 'country',
    name: 'country',
    options: basicOptions,
  },
  render: (args) => {
    const props: Record<string, unknown> = { id: args.id, name: args.name, options: args.options };
    const keys = ['value','defaultValue','ariaLabel','disabled','required','hasError','describedBy','multiple','size','autoComplete'];
    for (const k of keys) if ((args as any)[k] !== undefined) (props as any)[k] = (args as any)[k];
    return (
      <ParityBlock macroCode={toNunjucksMacro('select', props)} staticHtml={selectStaticHtml}>
        <Select {...args} />
      </ParityBlock>
    );
  },
};

export const WithError: Story = {
  args: {
    id: 'region',
    name: 'region',
    hasError: true,
    describedBy: 'region-error',
    options: basicOptions,
  },
};

export const Disabled: Story = {
  args: {
    id: 'country-disabled',
    name: 'country-disabled',
    disabled: true,
    options: basicOptions,
  },
};

export const Required: Story = {
  args: {
    id: 'country-required',
    name: 'country-required',
    required: true,
    options: basicOptions,
  },
};

export const Multiple: Story = {
  args: {
    id: 'languages',
    name: 'languages',
    multiple: true,
    size: 4,
    options: [
      { value: 'en', text: 'English' },
      { value: 'cy', text: 'Welsh' },
      { value: 'gd', text: 'Scottish Gaelic' },
      { value: 'ga', text: 'Irish' },
    ],
  },
};

export const WithAriaLabel: Story = {
  args: {
    id: 'no-visible-label',
    name: 'no-visible-label',
    ariaLabel: 'Select an option',
    options: basicOptions,
  },
};
