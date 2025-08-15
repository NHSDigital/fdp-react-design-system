// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
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
