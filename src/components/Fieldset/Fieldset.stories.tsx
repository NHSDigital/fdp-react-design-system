// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Fieldset } from './Fieldset';
import ParityBlock, { toNunjucksMacro } from '../../storybook/ParityBlock';
import fieldsetStaticHtml from '../../../docs/static-html/Fieldset.html?raw';

const meta: Meta<typeof Fieldset> = {
  title: 'NHS/Components/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS Fieldset component groups related form controls with an optional legend that acts as a heading for the group.

## Features

- **Accessibility**: Proper semantic fieldset and legend markup
- **Design token integration**: Uses NHS color, spacing, and typography tokens
- **Flexible legends**: Support for different sizes and page heading options
- **Screen reader support**: Proper ARIA attributes and semantic structure

## Usage

\`\`\`tsx
import { Fieldset } from '@nhs-fdp/design-system';

// Basic usage
<Fieldset legend={{ text: 'Contact details' }}>
  {/* Form controls */}
</Fieldset>

// As page heading
<Fieldset 
  legend={{ 
    text: 'What is your address?', 
    size: 'xl', 
    isPageHeading: true 
  }}
>
  {/* Form controls */}
</Fieldset>
\`\`\`

## Accessibility

- Uses semantic \`fieldset\` and \`legend\` elements
- Supports ARIA describedBy for additional context
- Legend can act as page heading when appropriate
- Screen reader compatible with proper markup
        `,
      },
    },
  },
  argTypes: {
    legend: {
      control: 'object',
      description: 'Legend configuration for the fieldset',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    describedBy: {
      control: 'text',
      description: 'ID(s) of elements that describe this fieldset',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  args: {
    legend: {
      text: 'Contact details'
    },
    // Keep live preview simple
    children: (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <label className="nhsuk-label" htmlFor="email">Email address</label>
          <input className="nhsuk-input" id="email" name="email" type="email" />
        </div>
        <div>
          <label className="nhsuk-label" htmlFor="phone">Phone number</label>
          <input className="nhsuk-input" id="phone" name="phone" type="tel" />
        </div>
      </div>
    ),
  },
};

export const Parity: Story = {
  name: 'Parity: React | Nunjucks | Static HTML',
  args: {
    legend: { text: 'Contact details', size: 'l' },
  },
  render: (args) => {
    const props: Record<string, unknown> = { legend: args.legend };
    return (
      <ParityBlock macroCode={toNunjucksMacro('fieldset', props)} staticHtml={fieldsetStaticHtml}>
        <Fieldset {...args}>
          <div>
            <label className="nhsuk-label" htmlFor="postcode">Postcode</label>
            <input className="nhsuk-input" id="postcode" name="postcode" type="text" />
          </div>
        </Fieldset>
      </ParityBlock>
    );
  },
};

export const AsPageHeading: Story = {
  args: {
    legend: { text: 'What is your address?', size: 'xl', isPageHeading: true },
    children: (
      <div>
        <div style={{ marginBottom: '20px' }}>
          <label className="nhsuk-label" htmlFor="address-line-1">Address line 1</label>
          <input className="nhsuk-input" id="address-line-1" name="address-line-1" type="text" />
        </div>
        <div>
          <label className="nhsuk-label" htmlFor="postcode">Postcode</label>
          <input className="nhsuk-input" id="postcode" name="postcode" type="text" />
        </div>
      </div>
    ),
  },
};
