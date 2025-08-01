import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { TabItem } from './Tabs.types';

const meta: Meta<typeof Tabs> = {
  title: 'NHS/Content/Tabs',
  component: Tabs,
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

/**
 * Tabs with a specific default active tab
 */
export const WithDefaultActiveTab: Story = {
  args: {
    items: basicTabItems,
    defaultActiveTab: 'details',
  },
  parameters: {
    docs: {
      description: {
        story: 'You can specify which tab should be active by default using the `defaultActiveTab` prop.',
      },
    },
  },
};

/**
 * Medical information tabs with four tabs
 */
export const MedicalInformation: Story = {
  args: {
    items: medicalTabItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of tabs used for organizing medical information into logical sections.',
      },
    },
  },
};

/**
 * Tabs with one disabled tab
 */
export const WithDisabledTab: Story = {
  args: {
    items: [
      ...basicTabItems,
      {
        id: 'disabled',
        label: 'Disabled Tab',
        content: <div>This content should not be accessible.</div>,
        disabled: true,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs can be disabled to prevent user interaction. Disabled tabs are skipped during keyboard navigation.',
      },
    },
  },
};

/**
 * Controlled tabs example
 */
export const Controlled: Story = {
  args: {
    items: basicTabItems,
    activeTab: 'contact',
  },
  parameters: {
    docs: {
      description: {
        story: 'Controlled tabs where the active tab is managed by the parent component. Use `activeTab` and `onTabChange` props.',
      },
    },
  },
};

/**
 * Tabs with rich content including forms and components
 */
export const WithRichContent: Story = {
  args: {
    items: [
      {
        id: 'form',
        label: 'Contact Form',
        content: (
          <div>
            <h3>Get in Touch</h3>
            <form>
              <div style={{ marginBottom: '16px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  style={{ width: '100%', padding: '8px', border: '1px solid #ccc' }}
                />
              </div>
              <button 
                type="button" 
                style={{ 
                  backgroundColor: '#005eb8', 
                  color: 'white', 
                  padding: '12px 24px', 
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        ),
      },
      {
        id: 'table',
        label: 'Data Table',
        content: (
          <div>
            <h3>Service Information</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f0f4f5' }}>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #d8dde0' }}>Service</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #d8dde0' }}>Available</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #d8dde0' }}>Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #d8dde0' }}>GP Services</td>
                  <td style={{ padding: '12px', border: '1px solid #d8dde0' }}>24/7</td>
                  <td style={{ padding: '12px', border: '1px solid #d8dde0' }}>111</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #d8dde0' }}>Emergency</td>
                  <td style={{ padding: '12px', border: '1px solid #d8dde0' }}>Always</td>
                  <td style={{ padding: '12px', border: '1px solid #d8dde0' }}>999</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #d8dde0' }}>Pharmacy</td>
                  <td style={{ padding: '12px', border: '1px solid #d8dde0' }}>Mon-Sat</td>
                  <td style={{ padding: '12px', border: '1px solid #d8dde0' }}>Local</td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        id: 'list',
        label: 'Resources',
        content: (
          <div>
            <h3>Helpful Resources</h3>
            <div style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
              <div style={{ padding: '16px', border: '1px solid #d8dde0', borderRadius: '4px' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#005eb8' }}>NHS App</h4>
                <p style={{ margin: '0 0 8px 0' }}>Access your health records and book appointments</p>
                <a href="#" onClick={(e) => e.preventDefault()}>Download now</a>
              </div>
              <div style={{ padding: '16px', border: '1px solid #d8dde0', borderRadius: '4px' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#005eb8' }}>Find a Service</h4>
                <p style={{ margin: '0 0 8px 0' }}>Locate nearby healthcare services</p>
                <a href="#" onClick={(e) => e.preventDefault()}>Search services</a>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs can contain any React content including forms, tables, and complex layouts.',
      },
    },
  },
};

/**
 * Two tabs only - minimal example
 */
export const TwoTabs: Story = {
  args: {
    items: [
      {
        id: 'tab1',
        label: 'Before',
        content: (
          <div>
            <h3>Before Treatment</h3>
            <p>What to expect before your appointment or treatment.</p>
            <ul>
              <li>Bring your NHS number</li>
              <li>Arrive 15 minutes early</li>
              <li>Bring a list of current medications</li>
            </ul>
          </div>
        ),
      },
      {
        id: 'tab2',
        label: 'After',
        content: (
          <div>
            <h3>After Treatment</h3>
            <p>What to do after your appointment or treatment.</p>
            <ul>
              <li>Follow the advice given</li>
              <li>Take medications as prescribed</li>
              <li>Book follow-up appointments if needed</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'While not recommended for most cases, tabs can work with just two items when the content is substantial.',
      },
    },
  },
};

/**
 * Many tabs example
 */
export const ManyTabs: Story = {
  args: {
    items: [
      {
        id: 'general',
        label: 'General',
        content: <div><h3>General Information</h3><p>Basic overview and general information.</p></div>,
      },
      {
        id: 'symptoms',
        label: 'Symptoms',
        content: <div><h3>Symptoms</h3><p>Detailed symptom information and guidance.</p></div>,
      },
      {
        id: 'causes',
        label: 'Causes',
        content: <div><h3>Causes</h3><p>What causes this condition and risk factors.</p></div>,
      },
      {
        id: 'diagnosis',
        label: 'Diagnosis',
        content: <div><h3>Diagnosis</h3><p>How the condition is diagnosed and what to expect.</p></div>,
      },
      {
        id: 'treatment',
        label: 'Treatment',
        content: <div><h3>Treatment</h3><p>Available treatment options and approaches.</p></div>,
      },
      {
        id: 'prevention',
        label: 'Prevention',
        content: <div><h3>Prevention</h3><p>How to prevent this condition or reduce risk.</p></div>,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with six tabs showing how the component handles multiple tabs gracefully.',
      },
    },
  },
};

/**
 * Custom styling example
 */
export const CustomStyling: Story = {
  args: {
    items: basicTabItems,
    className: 'custom-tabs',
    id: 'styled-tabs',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs with custom CSS classes and HTML attributes for styling and identification.',
      },
    },
  },
};
