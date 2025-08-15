// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { TabItem } from './Tabs.types';
import { useFrutigerFonts } from '../../hooks/useFrutigerFonts';

const meta: Meta<typeof Tabs> = {
  title: 'NHS/Content/Tabs',
  component: Tabs,
  decorators: [
    (Story) => {
      const { fontFamily } = useFrutigerFonts();
      return (
        <div style={{ fontFamily }}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
NHS Tabs component for organizing related content into separate, navigable views.

Tabs are used to organize and structure content in a way that reduces cognitive load and allows users to focus on one section at a time while maintaining easy access to other related sections.

## When to use
- To organize large amounts of related content
- When users need to switch between different views of the same data
- For settings or configuration pages with multiple categories
- To break up long forms into logical sections

## When not to use
- For primary navigation (use header navigation instead)
- When all content should be visible at once
- For step-by-step processes (use a stepper component instead)
- When there are only 2 tabs (consider other layout options)

## Accessibility
- Full keyboard navigation with arrow keys, Home, and End
- ARIA attributes for screen reader support
- Focus management and visual focus indicators
- Semantic HTML structure with proper roles
        `,
      },
    },
  },
  argTypes: {
    items: {
      description: 'Array of tab items with id, label, and content',
      control: false,
    },
    defaultActiveTab: {
      description: 'ID of the initially active tab (uncontrolled mode)',
      control: 'text',
    },
    activeTab: {
      description: 'ID of the currently active tab (controlled mode)',
      control: 'text',
    },
    onTabChange: {
      description: 'Callback function when active tab changes',
      action: 'tab changed',
    },
    className: {
      description: 'Additional CSS classes',
      control: 'text',
    },
    id: {
      description: 'HTML id attribute',
      control: 'text',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample tab items for stories
const basicTabItems: TabItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    content: (
      <div>
        <h3>Overview Information</h3>
        <p>This is the overview tab content. It contains general information about the topic.</p>
        <ul>
          <li>Key point 1</li>
          <li>Key point 2</li>
          <li>Key point 3</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'details',
    label: 'Details',
    content: (
      <div>
        <h3>Detailed Information</h3>
        <p>This tab contains more detailed information and specifications.</p>
        <p>You can include any React content here, including other components, forms, or complex layouts.</p>
      </div>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    content: (
      <div>
        <h3>Contact Information</h3>
        <p>Use this tab for contact details and location information.</p>
        <p><strong>Phone:</strong> 0300 123 1234</p>
        <p><strong>Email:</strong> info@example.nhs.uk</p>
      </div>
    ),
  },
];

const medicalTabItems: TabItem[] = [
  {
    id: 'symptoms',
    label: 'Symptoms',
    content: (
      <div>
        <h3>Common Symptoms</h3>
        <p>Check if you have any of these symptoms:</p>
        <ul>
          <li>Persistent cough</li>
          <li>Fever or high temperature</li>
          <li>Shortness of breath</li>
          <li>Loss of taste or smell</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'treatment',
    label: 'Treatment',
    content: (
      <div>
        <h3>Treatment Options</h3>
        <p>Available treatments include:</p>
        <ol>
          <li>Rest and hydration</li>
          <li>Over-the-counter medications</li>
          <li>Prescription treatments (if required)</li>
          <li>Follow-up care</li>
        </ol>
        <p>Always consult with a healthcare professional before starting any treatment.</p>
      </div>
    ),
  },
  {
    id: 'prevention',
    label: 'Prevention',
    content: (
      <div>
        <h3>Prevention Guidelines</h3>
        <p>Help prevent illness by:</p>
        <ul>
          <li>Washing hands regularly</li>
          <li>Maintaining social distance</li>
          <li>Wearing appropriate protection</li>
          <li>Following current health guidelines</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'resources',
    label: 'Resources',
    content: (
      <div>
        <h3>Additional Resources</h3>
        <p>Find more information:</p>
        <ul>
          <li><a href="#" onClick={(e) => e.preventDefault()}>NHS Health A-Z</a></li>
          <li><a href="#" onClick={(e) => e.preventDefault()}>Local health services</a></li>
          <li><a href="#" onClick={(e) => e.preventDefault()}>Emergency contacts</a></li>
        </ul>
      </div>
    ),
  },
];

/**
 * Default tabs example with three basic tabs
 */
export const Default: Story = {
  args: {
    items: basicTabItems,
  },
};
