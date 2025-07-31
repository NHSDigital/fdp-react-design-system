import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'Components/Header/Responsive Navigation',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Test the responsive navigation behavior of the NHS Header component. Resize the browser to see the mobile menu in action.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'white', 'organisation'],
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FullNavigation: Story = {
  args: {
    service: {
      text: 'NHS App',
      href: '/',
    },
    search: {
      action: '/search',
      placeholder: 'Search NHS App',
    },
    account: {
      items: [
        {
          href: '/profile',
          text: 'Your NHS account',
          icon: true,
        },
        {
          action: '/logout',
          method: 'post',
          text: 'Sign out',
        },
      ],
    },
    navigation: {
      items: [
        { href: '/', text: 'Home', current: true },
        { href: '/health', text: 'Your health' },
        { href: '/appointments', text: 'Appointments' },
        { href: '/messages', text: 'Messages' },
        { href: '/medicines', text: 'Medicines' },
        { href: '/test-results', text: 'Test results' },
        { href: '/more', text: 'More' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with full navigation that demonstrates responsive behavior. On desktop, all items are visible. On mobile or when items overflow, a "More" menu toggle appears.',
      },
    },
  },
};

export const ManyNavigationItems: Story = {
  args: {
    service: {
      text: 'NHS Services Portal',
      href: '/',
    },
    search: {
      action: '/search',
      placeholder: 'Search NHS services',
    },
    navigation: {
      items: [
        { href: '/', text: 'Home', current: true },
        { href: '/appointments', text: 'Appointments' },
        { href: '/prescriptions', text: 'Prescriptions' },
        { href: '/test-results', text: 'Test results' },
        { href: '/health-records', text: 'Health records' },
        { href: '/vaccinations', text: 'Vaccinations' },
        { href: '/organ-donation', text: 'Organ donation' },
        { href: '/data-sharing', text: 'Data sharing' },
        { href: '/find-services', text: 'Find services' },
        { href: '/book-appointment', text: 'Book appointment' },
        { href: '/repeat-prescription', text: 'Repeat prescription' },
        { href: '/view-medical-record', text: 'View medical record' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with many navigation items to test overflow behavior. The menu toggle should appear automatically when items don\'t fit in the available space.',
      },
    },
  },
};

export const DesktopOverflowNavigation: Story = {
  name: 'Desktop Navigation (with More Dropdown)',
  args: {
    logo: { href: '#' },
    service: {
      text: 'NHS Digital Service Manual',
      href: '#'
    },
    search: {
      placeholder: 'Search the NHS website'
    },
    navigation: {
      items: [
        {
          href: '#',
          text: 'Health A to Z'
        },
        {
          href: '#',
          text: 'Live Well'
        },
        {
          href: '#',
          text: 'Mental health'
        },
        {
          href: '#',
          text: 'Care and support'
        },
        {
          href: '#',
          text: 'Pregnancy',
          active: true
        },
        {
          href: '#',
          text: 'NHS services'
        }
      ]
    }
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
    docs: {
      description: {
        story: 'Desktop view should show navigation items with a "More" dropdown (with chevron icon) that appears when items overflow. The chevron should be properly aligned and rotated 90 degrees, rotating to 270 degrees when open.'
      }
    }
  }
};

export const TabletNavigation: Story = {
  args: {
    service: {
      text: 'NHS App',
      href: '/',
    },
    navigation: {
      items: [
        { href: '/', text: 'Home', current: true },
        { href: '/health', text: 'Your health' },
        { href: '/appointments', text: 'Appointments' },
        { href: '/messages', text: 'Messages' },
        { href: '/medicines', text: 'Medicines' },
        { href: '/test-results', text: 'Test results' },
      ],
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Header behavior on tablet devices. Some items may still be visible depending on the available space.',
      },
    },
  },
};

export const JustifiedNavigation: Story = {
  args: {
    service: {
      text: 'NHS Service',
      href: '/',
    },
    navigation: {
      justified: true,
      items: [
        { href: '/', text: 'Home', current: true },
        { href: '/services', text: 'Services' },
        { href: '/appointments', text: 'Appointments' },
        { href: '/contact', text: 'Contact' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation with justified layout that distributes items evenly across the available space on large screens.',
      },
    },
  },
};

export const OverflowNavigation: Story = {
  args: {
    service: {
      text: 'NHS Digital Services',
      href: '/',
    },
    search: {
      action: '/search',
      placeholder: 'Search NHS services',
    },
    navigation: {
      items: [
        { href: '/', text: 'Home', current: true },
        { href: '/health-a-z', text: 'Health A to Z' },
        { href: '/live-well', text: 'Live Well' },
        { href: '/mental-health', text: 'Mental health' },
        { href: '/care-support', text: 'Care and support' },
        { href: '/pregnancy', text: 'Pregnancy' },
        { href: '/nhs-services', text: 'NHS services' },
        { href: '/conditions', text: 'Conditions and treatments' },
        { href: '/medicines', text: 'Medicines A to Z' },
        { href: '/appointments', text: 'Book appointments' },
        { href: '/test-results', text: 'View test results' },
        { href: '/prescriptions', text: 'Repeat prescriptions' },
        { href: '/organ-donation', text: 'Organ donation' },
        { href: '/coronavirus', text: 'Coronavirus (COVID-19)' },
        { href: '/vaccines', text: 'Vaccinations' },
        { href: '/screening', text: 'NHS screening' },
        { href: '/data-security', text: 'Data and security' },
        { href: '/feedback', text: 'Feedback' },
        { href: '/about', text: 'About the NHS' },
        { href: '/contact', text: 'Contact us' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: `
**Overflow Navigation Testing**

This story tests the header navigation with many menu items to demonstrate the overflow behavior:

**Desktop Behavior:**
- Navigation items are displayed horizontally
- When items exceed available space, overflow items are moved to the "More" dropdown menu
- The "More" button appears with a chevron icon that rotates when opened
- Menu background should be NHS blue with white text

**Mobile/Tablet Behavior:**  
- All navigation items are shown in the hamburger menu
- Mobile shows hamburger (☰) icon that changes to close (✕) when opened
- Menu slides down from the navigation bar

**Testing Instructions:**
1. **Desktop**: Resize browser width to see items move in/out of overflow menu
2. **Mobile**: Use mobile viewport to test hamburger menu functionality
3. **Tablet**: Test intermediate breakpoint behavior

**Expected Overflow Sequence (as screen gets smaller):**
1. All items visible inline
2. "More" button appears, last items move to dropdown
3. More items move to dropdown as space decreases
4. Mobile breakpoint: All items in hamburger menu
        `,
      },
    },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const OverflowNavigationMobile: Story = {
  args: {
    ...OverflowNavigation.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Mobile view of the overflow navigation - all items should be accessible via the hamburger menu.',
      },
    },
  },
};

export const OverflowNavigationTablet: Story = {
  args: {
    ...OverflowNavigation.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: 'Tablet view of the overflow navigation - some items visible inline, others in overflow menu.',
      },
    },
  },
};

export const ExtremeLongNavigation: Story = {
  args: {
    service: {
      text: 'NHS Research & Development Portal',
      href: '/',
    },
    navigation: {
      items: [
        { href: '/', text: 'Dashboard', current: true },
        { href: '/clinical-trials', text: 'Clinical Trials Management' },
        { href: '/research-governance', text: 'Research Governance & Ethics' },
        { href: '/participant-recruitment', text: 'Participant Recruitment Portal' },
        { href: '/data-analytics', text: 'Clinical Data Analytics Suite' },
        { href: '/biobank-management', text: 'Biobank Sample Management' },
        { href: '/regulatory-compliance', text: 'Regulatory Compliance Framework' },
        { href: '/collaboration-hub', text: 'Multi-site Collaboration Hub' },
        { href: '/funding-applications', text: 'Research Funding Applications' },
        { href: '/publication-management', text: 'Publication & Dissemination' },
        { href: '/intellectual-property', text: 'Intellectual Property Management' },
        { href: '/quality-assurance', text: 'Quality Assurance & Monitoring' },
        { href: '/training-certification', text: 'Training & Certification Portal' },
        { href: '/equipment-resources', text: 'Equipment & Resource Booking' },
        { href: '/international-partnerships', text: 'International Research Partnerships' },
        { href: '/patient-public-involvement', text: 'Patient & Public Involvement (PPI)' },
        { href: '/health-economics', text: 'Health Economics & Outcomes Research' },
        { href: '/digital-health-innovation', text: 'Digital Health Innovation Hub' },
        { href: '/genomics-precision-medicine', text: 'Genomics & Precision Medicine' },
        { href: '/ai-machine-learning', text: 'AI & Machine Learning Research' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: `
**Extreme Navigation Test**

This story tests the navigation component with extremely long menu item names and many items to stress-test the overflow behavior:

**Features Tested:**
- Very long navigation item text
- Large number of menu items (20+)
- Text wrapping and truncation behavior
- Performance with many DOM elements
- Overflow menu scrolling if needed

**Use Cases:**
- Complex administrative portals
- Research management systems  
- Multi-service NHS applications
- Enterprise-level navigation structures

This helps ensure the component remains usable even with complex navigation requirements.
        `,
      },
    },
  },
};
