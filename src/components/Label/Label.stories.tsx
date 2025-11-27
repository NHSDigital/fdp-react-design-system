// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import labelStaticHtml from '../../../docs/static-html/Label.html?raw';
import ParityBlock, { toNunjucksMacro } from '../../storybook/ParityBlock';

const meta: Meta<typeof Label> = {
  title: 'NHS/Components/Label',
  component: Label,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS Label component provides form labels following NHS design guidelines with design token integration.

## Features

- **Size variants**: Extra large (xl), Large (l), Medium (m), and Small (s) text sizes
- **Semantic HTML**: Uses proper \`<label>\` element for accessibility
- **Design token integration**: Uses NHS typography and color tokens
- **Form association**: Links to form controls via \`htmlFor\` attribute
- **Responsive typography**: Adapts to different screen sizes

## Usage

\`\`\`tsx
import { Label } from '@nhs-fdp/design-system';

// Basic usage
<Label htmlFor="first-name">
  First name
</Label>

// With size variant
<Label htmlFor="page-title" size="xl">
  Page Title
</Label>

// Form label with input
<div>
  <Label htmlFor="email-address" size="m">
    Email address
  </Label>
  <Input id="email-address" name="email" type="email" />
</div>
\`\`\`

## Size Guidelines

- **XL (36px)**: Page headings, main form titles
- **L (22px)**: Section headings, important labels
- **M (19px)**: Standard form labels (default)
- **S (16px)**: Secondary labels, compact forms

## Accessibility

- Proper semantic \`<label>\` element
- Links to form controls via \`htmlFor\` attribute
- Screen reader compatible
- Focus follows NHS design system guidelines
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'l', 'm', 's'],
      description: 'Size variant of the label text',
    },
    htmlFor: {
      control: 'text',
      description: 'ID of the form control this label is for',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Default label',
    htmlFor: 'default-input',
  },
};

export const Parity: Story = {
  name: 'Parity: React | Nunjucks | Static HTML',
  args: {
    children: 'Full name',
    htmlFor: 'full-name',
    size: 'm',
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
    const props: Record<string, unknown> = {};
    if (args.size && args.size !== 'm') props.size = args.size;
    if (args.htmlFor) props.htmlFor = args.htmlFor;
    if (args.className) props.className = args.className;
    if (args.isPageHeading) props.isPageHeading = true;
    props.text = typeof args.children === 'string' ? args.children : 'Label';

    return (
      <ParityBlock
        macroCode={toNunjucksMacro('label', props)}
        staticHtml={labelStaticHtml}
      >
        <Label {...args} />
      </ParityBlock>
    );
  },
};
