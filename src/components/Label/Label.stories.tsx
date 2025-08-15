// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

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
