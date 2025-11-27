// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import inputStaticHtml from '../../../docs/static-html/Input.html?raw';
import ParityBlock, { toNunjucksMacro } from '../../storybook/ParityBlock';

const meta: Meta<typeof Input> = {
  title: 'NHS/Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS Input component provides text inputs, number inputs, and range sliders that follow NHS design guidelines.

## Range Input (Slider)

The range input type creates an NHS-styled slider with the following features:
- NHS blue theme with proper contrast
- Accessible focus states with NHS yellow outline  
- Optional value labels (min/max)
- Current value display
- Disabled and error states
- Smooth hover and active animations

## Usage

\`\`\`tsx
// Basic range input
<Input
  id="age-range"
  name="age"
  type="range"
  min="18"
  max="100"
  defaultValue="30"
/>

// Range with labels and current value
<Input
  id="satisfaction"
  name="satisfaction"
  type="range"
  min="1"
  max="10"
  defaultValue="7"
  showValueLabels
  showCurrentValue
  valueLabels={{
    min: "Very Dissatisfied",
    max: "Very Satisfied", 
    current: "Your rating:"
  }}
/>
\`\`\`
        `
      }
    }
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url', 'search', 'number', 'range'],
    },
    width: {
      control: 'select',
      options: ['full', '20', '10', '5', '4', '3', '2'],
    },
    hasError: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    showValueLabels: {
      control: 'boolean',
    },
    showCurrentValue: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: 'input-default',
    name: 'input-default',
    placeholder: 'Enter text here',
  },
};

export const Parity: Story = {
  name: 'Parity: React | Nunjucks | Static HTML',
  args: {
    id: 'age-range',
    name: 'age',
    type: 'range',
    min: '18',
    max: '100',
    defaultValue: '30',
    showValueLabels: true,
    showCurrentValue: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story:
          'Side-by-side view: React live render, Nunjucks macro invocation (code), and the canonical Static HTML snippet (generated).',
      },
    },
  },
  render: (args) => {
    const props: Record<string, unknown> = {
      id: args.id,
      name: args.name,
      type: args.type,
    };
    const keys = [
      'min','max','step','defaultValue','value','width','hasError','disabled','readOnly','required','describedBy','inputMode','autoComplete','maxLength','minLength','pattern','showValueLabels','showCurrentValue'
    ];
    for (const k of keys) if ((args as any)[k] !== undefined) (props as any)[k] = (args as any)[k];
    if ((args as any).valueLabels) (props as any).valueLabels = (args as any).valueLabels;

    return (
      <ParityBlock
        macroCode={toNunjucksMacro('input', props)}
        staticHtml={inputStaticHtml}
      >
        <Input {...args} />
      </ParityBlock>
    );
  },
};
