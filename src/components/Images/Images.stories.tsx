// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Images } from './Images';

const meta = {
  title: 'NHS/Components/Images',
  component: Images,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Images component for displaying responsive images with optional captions.

## When to use this component

Use the images component to display images in a consistent way across your NHS service.

### Key features:
- **Responsive sizing**: Images are 2/3 width on desktop, full width on mobile
- **Optional captions**: Add descriptive text below images
- **Responsive images**: Support for srcset and sizes attributes
- **Consistent styling**: NHS-compliant borders and spacing
- **Accessibility**: Proper semantic structure with figure/figcaption

## Accessibility

The images component follows accessibility best practices:
- Uses semantic \`<figure>\` and \`<figcaption>\` elements
- Requires alt text for all images
- Supports empty alt text for decorative images
- Caption text is properly associated with the image
        `,
      },
    },
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'The source location of the image (required)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    alt: {
      control: 'text', 
      description: 'The alt text of the image (required for accessibility)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    caption: {
      control: 'text',
      description: 'Optional caption text for the image',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    sizes: {
      control: 'text',
      description: 'A list of screen sizes for responsive images',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    srcset: {
      control: 'text',
      description: 'A list of image source URLs and their respective sizes',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the image container',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    src: 'https://assets.nhs.uk/prod/images/A_1018_doctor-getting-pulse_1018_doctor-getting-pulse_620088932_FinalCopyright.2e16d0ba.fill-540x540.jpg',
    alt: 'A doctor taking a patient\'s pulse',
  },
} satisfies Meta<typeof Images>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'A basic image without a caption. This is the most common use case.',
      },
    },
  },
};
