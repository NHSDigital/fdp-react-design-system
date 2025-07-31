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

export const WithImage: Story = {
  args: {
    heading: 'Card with Image',
    description: 'This card includes an image at the top',
    imgURL: 'https://via.placeholder.com/300x200?text=NHS+Card+Image',
    imgAlt: 'NHS card example image'
  }
};

export const WithCustomContent: Story = {
  args: {
    heading: 'Card with Custom Content'
  },
  render: (args) => (
    <Card {...args}>
      <p>This card contains custom content instead of just a description.</p>
      <ul>
        <li>Custom list item 1</li>
        <li>Custom list item 2</li>
        <li>Custom list item 3</li>
      </ul>
      <p>You can include any React content here.</p>
    </Card>
  )
};

// Clickable card stories
export const Clickable: Story = {
  args: {
    variant: 'clickable',
    heading: 'Find out about care and support services',
    description: 'Advice about care and support services, including residential care and getting help at home',
    href: '#'
  }
};

export const ClickableWithImage: Story = {
  args: {
    variant: 'clickable',
    heading: 'Clickable Card with Image',
    description: 'This clickable card includes an image',
    href: '#',
    imgURL: 'https://via.placeholder.com/300x200?text=Clickable+Card',
    imgAlt: 'Clickable card example'
  }
};

// Feature card stories
export const Feature: Story = {
  args: {
    variant: 'feature',
    heading: 'Feature heading',
    description: 'Feature card description that follows below the heading'
  }
};

// Primary card with icon
export const Primary: Story = {
  args: {
    variant: 'primary',
    heading: 'Primary card',
    description: 'Primary card with arrow icon'
  }
};

// Secondary card (minimal)
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    heading: 'Secondary card',
    description: 'Minimal card with bottom border only'
  }
};

// Card group stories
export const CardGroupStory: Story = {
  name: 'Card Group',
  render: () => (
    <CardGroup>
      <CardGroupItem>
        <Card
          variant="clickable"
          heading="Find advice"
          description="Get help with everyday tasks and maintaining independence"
          href="#"
        />
      </CardGroupItem>
      <CardGroupItem>
        <Card
          variant="clickable"
          heading="Managing money"
          description="Includes help with benefits, paying for care and managing debt"
          href="#"
        />
      </CardGroupItem>
      <CardGroupItem>
        <Card
          variant="clickable"
          heading="Care and support"
          description="Includes care at home, care homes and day centres"
          href="#"
        />
      </CardGroupItem>
    </CardGroup>
  )
};

export const CardGroupWithImages: Story = {
  name: 'Card Group with Images',
  render: () => (
    <CardGroup>
      <CardGroupItem>
        <Card
          variant="clickable"
          heading="Health A-Z"
          description="Comprehensive health information and advice"
          href="#"
          imgURL="https://via.placeholder.com/300x150?text=Health+A-Z"
          imgAlt="Health A-Z illustration"
        />
      </CardGroupItem>
      <CardGroupItem>
        <Card
          variant="clickable"
          heading="Live Well"
          description="Advice to help you live a healthier lifestyle"
          href="#"
          imgURL="https://via.placeholder.com/300x150?text=Live+Well"
          imgAlt="Live Well illustration"
        />
      </CardGroupItem>
      <CardGroupItem>
        <Card
          variant="clickable"
          heading="Mental Health"
          description="Support and information about mental health"
          href="#"
          imgURL="https://via.placeholder.com/300x150?text=Mental+Health"
          imgAlt="Mental Health illustration"
        />
      </CardGroupItem>
    </CardGroup>
  )
};

// Accessibility example
export const AccessibilityExample: Story = {
  name: 'Accessibility Features',
  render: () => (
    <div>
      <Card
        heading="Accessibility Example"
        headingLevel={3}
        description="This card demonstrates accessibility features"
        aria-label="Example card with accessibility features"
        aria-describedby="accessibility-description"
      />
      <div id="accessibility-description" className="nhsuk-u-visually-hidden">
        This card shows how to use proper ARIA attributes for screen readers
      </div>
    </div>
  )
};
