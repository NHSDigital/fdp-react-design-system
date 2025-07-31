import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../src/components/Footer/Footer';

/**
 * Enhanced Footer stories for visual testing
 * Includes comprehensive test scenarios for visual comparison
 */

const meta: Meta<typeof Footer> = {
  title: 'Visual Testing/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Footer component stories optimized for visual testing against NHS UK reference implementation.',
      },
    },
    // Visual testing parameters
    visual: {
      // Reference component info for comparison
      nhsukReference: 'footer',
      variants: ['default', 'multiColumn'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '200px', background: '#f0f4f5', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Visual test scenarios that match NHS UK reference variants
export const Default: Story = {
  args: {
    links: [
      { text: 'NHS sites', href: '#' },
      { text: 'NHS App', href: '#' },
      { text: 'About us', href: '#' },
      { text: 'Contact us', href: '#' },
      { text: 'Profile editor login', href: '#' },
    ],
    copyright: '© Crown copyright',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default footer configuration matching NHS UK reference implementation.',
      },
    },
  },
};

export const MultiColumn: Story = {
  args: {
    links: [
      { text: 'NHS sites', href: '#' },
      { text: 'NHS App', href: '#' },
      { text: 'About us', href: '#' },
      { text: 'Contact us', href: '#' },
      { text: 'Profile editor login', href: '#' },
      { text: 'Site map', href: '#' },
    ],
    copyright: '© Crown copyright',
    classes: 'nhsuk-footer__list--three-columns',
  },
  parameters: {
    docs: {
      description: {
        story: 'Multi-column footer layout matching NHS UK three-column reference.',
      },
    },
  },
};

export const WithCopyright: Story = {
  args: {
    links: [
      { text: 'NHS sites', href: '#' },
      { text: 'NHS App', href: '#' },
      { text: 'About us', href: '#' },
      { text: 'Contact us', href: '#' },
    ],
    copyright: '© Crown copyright',
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer with copyright text for visual comparison testing.',
      },
    },
  },
};

// Interactive state testing
export const InteractiveStates: Story = {
  args: {
    links: [
      { text: 'NHS sites', href: '#' },
      { text: 'NHS App', href: '#' },
      { text: 'About us', href: '#' },
    ],
    copyright: '© Crown copyright',
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer for testing interactive states (hover, focus, active).',
      },
    },
    // Add pseudo-states for Chromatic
    pseudo: {
      hover: ['a:first-of-type'],
      focus: ['a:nth-of-type(2)'],
      active: ['a:last-of-type'],
    },
  },
};

// Responsive testing
export const ResponsiveMobile: Story = {
  args: {
    links: [
      { text: 'NHS sites', href: '#' },
      { text: 'NHS App', href: '#' },
      { text: 'About us', href: '#' },
      { text: 'Contact us', href: '#' },
    ],
    copyright: '© Crown copyright',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Footer component at mobile viewport for responsive testing.',
      },
    },
  },
};

export const ResponsiveTablet: Story = {
  args: {
    links: [
      { text: 'NHS sites', href: '#' },
      { text: 'NHS App', href: '#' },
      { text: 'About us', href: '#' },
      { text: 'Contact us', href: '#' },
    ],
    copyright: '© Crown copyright',
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Footer component at tablet viewport for responsive testing.',
      },
    },
  },
};

// Accessibility testing
export const AccessibilityTest: Story = {
  args: {
    links: [
      { text: 'NHS sites', href: '#nhs-sites' },
      { text: 'NHS App', href: '#nhs-app' },
      { text: 'About us', href: '#about' },
    ],
    copyright: '© Crown copyright',
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'link-in-text-block',
            enabled: true,
          },
        ],
      },
    },
    docs: {
      description: {
        story: 'Footer with proper accessibility attributes for a11y testing.',
      },
    },
  },
};

// High contrast mode testing
export const HighContrast: Story = {
  args: {
    links: [
      { text: 'NHS sites', href: '#' },
      { text: 'NHS App', href: '#' },
      { text: 'About us', href: '#' },
    ],
    copyright: '© Crown copyright',
  },
  decorators: [
    (Story) => (
      <div 
        style={{ 
          minHeight: '200px', 
          background: '#000000', 
          filter: 'contrast(200%)',
          padding: '20px' 
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Footer in high contrast mode for accessibility testing.',
      },
    },
  },
};
