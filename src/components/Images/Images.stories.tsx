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

export const WithCaption: Story = {
  args: {
    caption: 'A doctor taking a patient\'s pulse during a routine check-up',
  },
  parameters: {
    docs: {
      description: {
        story: 'An image with a descriptive caption below it. Use captions to provide additional context or attribution.',
      },
    },
  },
};

export const WithHtmlCaption: Story = {
  args: {
    caption: 'A doctor taking a patient\'s pulse. <a href="https://www.nhs.uk">Learn more about routine check-ups</a>.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Captions can contain HTML markup such as links or formatting.',
      },
    },
  },
};

export const ResponsiveImage: Story = {
  args: {
    srcset: 'https://assets.nhs.uk/prod/images/A_1018_doctor-getting-pulse_1018_doctor-getting-pulse_620088932_FinalCopyright.2e16d0ba.fill-320x320.jpg 320w, https://assets.nhs.uk/prod/images/A_1018_doctor-getting-pulse_1018_doctor-getting-pulse_620088932_FinalCopyright.2e16d0ba.fill-540x540.jpg 540w, https://assets.nhs.uk/prod/images/A_1018_doctor-getting-pulse_1018_doctor-getting-pulse_620088932_FinalCopyright.2e16d0ba.fill-768x768.jpg 768w',
    sizes: '(max-width: 320px) 100vw, (max-width: 540px) 540px, 768px',
    caption: 'This image uses responsive sizing to deliver the optimal image for each screen size',
  },
  parameters: {
    docs: {
      description: {
        story: 'A responsive image that loads different sizes based on the user\'s screen size and device capabilities.',
      },
    },
  },
};

export const MedicalDiagram: Story = {
  args: {
    src: 'https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-540x540.jpg',
    alt: 'Diagram showing symptoms of allergic conjunctivitis including red, itchy, watery eyes',
    caption: 'Common symptoms of allergic conjunctivitis include red, itchy and watery eyes',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of using images for medical diagrams with descriptive alt text and captions.',
      },
    },
  },
};

export const MultipleImages: Story = {
  render: () => (
    <div>
      <Images
        src="https://assets.nhs.uk/prod/images/A_1018_doctor-getting-pulse_1018_doctor-getting-pulse_620088932_FinalCopyright.2e16d0ba.fill-540x540.jpg"
        alt="A doctor taking a patient's pulse"
        caption="Step 1: Doctor takes patient's pulse"
      />
      <Images
        src="https://assets.nhs.uk/prod/images/S_1017_allergic-conjunctivitis_M15.2e16d0ba.fill-540x540.jpg"
        alt="Medical professional examining patient's eyes"
        caption="Step 2: Examination of symptoms"
      />
      <Images
        src="https://assets.nhs.uk/prod/images/A_1018_doctor-getting-pulse_1018_doctor-getting-pulse_620088932_FinalCopyright.2e16d0ba.fill-540x540.jpg"
        alt="Patient receiving treatment"
        caption="Step 3: Treatment administration"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple images displayed together. Note that subsequent images have their top margin removed for better spacing.',
      },
    },
  },
};

export const DecorativeImage: Story = {
  args: {
    src: 'https://assets.nhs.uk/prod/images/A_1018_doctor-getting-pulse_1018_doctor-getting-pulse_620088932_FinalCopyright.2e16d0ba.fill-540x540.jpg',
    alt: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'A decorative image with empty alt text. Only use empty alt text for purely decorative images that don\'t add information.',
      },
    },
  },
};

export const CustomClassName: Story = {
  args: {
    caption: 'Image with custom styling applied',
    className: 'custom-image-class',
  },
  parameters: {
    docs: {
      description: {
        story: 'An image with additional CSS classes for custom styling.',
      },
    },
  },
};
