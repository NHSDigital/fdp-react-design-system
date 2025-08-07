import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './index';

const meta: Meta<typeof Hero> = {
  title: 'NHS/Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The NHS Hero component creates a prominent banner section, typically used at the top of pages. It supports both text-only and image background variants with automatic responsive styling.

## Features

- **Blue background with white text** by default following NHS branding
- **Optional background image** with overlay for enhanced visual impact
- **Responsive design** with mobile-first approach
- **Configurable heading levels** (H1-H6) for proper semantic structure
- **Accessibility-compliant markup** with proper ARIA support
- **Support for custom HTML content** or React children
- **Flexible content options** - text, HTML, or React children

## Usage

\`\`\`tsx
import { Hero } from '@nhs-fdp/design-system';

// Basic text hero
<Hero 
  heading="We're here for you"
  text="The NHS website - your health, your choice"
/>

// Hero with image background
<Hero 
  heading="Get help with mental health"
  text="Find advice and support to help you deal with mental health issues"
  imageURL="/path/to/hero-image.jpg"
/>

// Hero with custom content
<Hero heading="Find a service">
  <p>Use our service finder to locate NHS services near you.</p>
  <a href="/services" className="nhsuk-button">Find services</a>
</Hero>
\`\`\`

## Accessibility

- Uses semantic heading elements (H1-H6)
- Maintains proper color contrast ratios
- Supports screen readers with appropriate markup
- Keyboard navigation friendly
- High contrast mode compatible

## Design Guidelines

The Hero component follows NHS design principles:
- NHS Blue (#005eb8) background for brand consistency
- White text for optimal contrast
- Responsive typography scaling
- Proper spacing using NHS spacing tokens
        `,
      },
    },
  },
  argTypes: {
    heading: {
      control: 'text',
      description: 'The main heading text to display',
    },
    headingLevel: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'The heading level (1-6), defaults to 1',
    },
    text: {
      control: 'text',
      description: 'Plain text content to display below the heading',
    },
    html: {
      control: 'text',
      description: 'HTML content to display below the heading (use with caution)',
    },
    imageURL: {
      control: 'text',
      description: 'Background image URL for hero with image variant',
    },
    headingClasses: {
      control: 'text',
      description: 'Additional CSS classes for the heading element',
    },
    containerClasses: {
      control: 'text',
      description: 'Additional CSS classes for the container element',
    },
    classes: {
      control: 'text',
      description: 'Additional CSS classes for the hero section element',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    heading: "We're here for you",
    text: "The NHS website - your health, your choice",
  },
};

export const WithSubtitle: Story = {
  args: {
    heading: "Find NHS services",
    text: "Search for NHS services near you, including GPs, hospitals, dentists, and pharmacies.",
  },
};

export const HeadingOnly: Story = {
  args: {
    heading: "NHS Digital Services",
  },
};

export const WithCustomContent: Story = {
  args: {
    heading: "Book appointments online",
    children: (
      <div>
        <p>Save time by booking and managing your appointments online through the NHS App.</p>
        <p>Available 24/7 for your convenience.</p>
      </div>
    ),
  },
};

export const WithImageBackground: Story = {
  args: {
    heading: "Mental health support",
    text: "Get help and advice for mental health issues. Find support services, self-help resources, and professional guidance.",
    imageURL: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
  },
};

export const WithImageBackgroundLongContent: Story = {
  args: {
    heading: "Coronavirus (COVID-19)",
    imageURL: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    children: (
      <div>
        <p>Get the latest information about coronavirus, including symptoms, testing, vaccines, and what to do if you have COVID-19.</p>
        <p>Stay informed with trusted NHS guidance and support.</p>
      </div>
    ),
  },
};

export const ImageOnly: Story = {
  args: {
    imageURL: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
  },
  name: "Image Background Only",
};

export const DifferentHeadingLevels: Story = {
  args: {
    heading: "Health and wellbeing",
    headingLevel: 2,
    text: "This hero uses an H2 heading instead of the default H1",
  },
};

export const WithHTMLContent: Story = {
  args: {
    heading: "Emergency services",
    html: "<p><strong>Call 999</strong> for life-threatening emergencies.</p><p>Call <strong>111</strong> for urgent medical help when it's not life-threatening.</p>",
  },
};

export const LongHeading: Story = {
  args: {
    heading: "Complete guide to staying healthy and managing your wellbeing throughout your life",
    text: "From birth to old age, find comprehensive health information, advice, and services to help you live a healthier life.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Hero 
        heading="Default Hero"
        text="Basic hero with heading and text"
      />
      <Hero 
        heading="Hero with Image"
        text="Hero component with background image"
        imageURL="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
      />
      <Hero 
        heading="Heading Only"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Overview of different Hero component variants',
      },
    },
  },
};

// Example with NHS-style content
export const NHSExample: Story = {
  args: {
    heading: "Your health, your NHS",
    children: (
      <div>
        <p>Access NHS services online, find health information you can trust, and get support when you need it most.</p>
        <div style={{ marginTop: '1rem' }}>
          <a href="#" className="nhsuk-button nhsuk-button--reverse" style={{ 
            display: 'inline-block',
            backgroundColor: 'white',
            color: '#005eb8',
            textDecoration: 'none',
            padding: '12px 24px',
            borderRadius: '4px',
            fontWeight: 'bold',
            border: '2px solid white'
          }}>
            Find services near you
          </a>
        </div>
      </div>
    ),
  },
};
