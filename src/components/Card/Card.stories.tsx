// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardGroup, CardGroupItem } from './Card';

const meta: Meta<typeof Card> = {
  title: 'NHS/Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Card component is a versatile container for grouping related content and actions.
It follows NHS design guidelines and supports multiple variants for different use cases.

## Features
- Multiple variants (default, feature, clickable, secondary, primary)
- Accessibility compliant with proper headings and ARIA attributes
- Responsive design with design tokens
- Support for images, custom content, and interactive states

## Usage
Cards are perfect for displaying preview content, organizing information into digestible chunks,
and creating clickable content areas that lead to more detailed pages.

Note: For medical guidance cards (care cards), use the separate CareCard component.
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'feature', 'clickable', 'secondary', 'primary'],
      description: 'The visual variant of the card'
    },
    heading: {
      control: 'text',
      description: 'Card heading text'
    },
    headingLevel: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Semantic heading level for accessibility'
    },
    description: {
      control: 'text',
      description: 'Card description text'
    },
    href: {
      control: 'text',
      description: 'URL for clickable cards'
    },
    imgURL: {
      control: 'text',
      description: 'Image URL for card with image'
    },
    imgAlt: {
      control: 'text',
      description: 'Alt text for card image'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

// Basic card stories
export const Default: Story = {
  args: {
    heading: 'Introduction to care and support',
    description: 'A quick guide for people who have care and support needs and their carers'
  }
};
