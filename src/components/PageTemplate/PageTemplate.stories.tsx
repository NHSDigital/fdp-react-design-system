import type { Meta, StoryObj } from '@storybook/react';
import { PageTemplate } from './PageTemplate';
import { DashboardSummaryGrid } from '../DashboardSummaryGrid';

const meta: Meta<typeof PageTemplate> = {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The PageTemplate component provides a complete page layout following NHS Service Manual guidance.

## Features

- **Complete Page Structure**: Includes SkipLink, Header, WidthContainer, MainWrapper, Grid, and Footer
- **Clean Component Composition**: Uses the structure: \`<SkipLink/><Header/><WidthContainer><MainWrapper><Row><Column><Heading /></></></></><Footer />\`
- **Flexible Layout**: Configurable column widths and wrapper sizes
- **NHS Compliance**: Follows NHS design patterns and accessibility guidelines
- **Header Integration**: Convenient props for service, navigation, search, and account configuration

## When to Use

Use PageTemplate when you want a complete, consistent page layout without having to compose multiple layout components manually. Perfect for:

- Service pages with standard NHS layout
- Content pages with consistent structure
- Dashboard-style applications
- Any page requiring NHS-compliant layout

## Alternative: WidthContainer

For simpler layouts, you can use the standalone \`WidthContainer\` component which provides just the NHS-standard page width container.
        `,
      },
    },
  },
  argTypes: {
    pageTitle: {
      control: 'text',
      description: 'Main page title/heading',
    },
    columnWidth: {
      control: { type: 'select' },
      options: ['one-quarter', 'one-third', 'one-half', 'two-thirds', 'three-quarters', 'full'],
      description: 'Column width for main content area',
    },
    mainWrapperSize: {
      control: { type: 'select' },
      options: ['default', 'large', 'small'],
      description: 'Size variant for MainWrapper',
    },
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = () => (
  <div>
    <p>This is the main content area of your page. You can include any content here such as:</p>
    <ul>
      <li>Forms and input components</li>
      <li>Content sections</li>
      <li>Data tables and charts</li>
      <li>Navigation and action buttons</li>
    </ul>
    <p>The PageTemplate handles all the layout structure, so you can focus on your content.</p>
  </div>
);

export const Default: Story = {
  args: {
    pageTitle: 'NHS Digital Service',
    service: {
      text: 'NHS App',
      href: '/',
    },
    children: <SampleContent />,
  },
};

export const WithNavigation: Story = {
  args: {
    pageTitle: 'Manage your health',
    service: {
      text: 'NHS App',
      href: '/',
    },
    navigation: {
      items: [
        { text: 'Home', href: '/', current: true },
        { text: 'Appointments', href: '/appointments' },
        { text: 'Messages', href: '/messages' },
        { text: 'Prescriptions', href: '/prescriptions' },
      ],
    },
    children: <SampleContent />,
  },
};

export const FullWidth: Story = {
  args: {
    pageTitle: 'Dashboard',
    columnWidth: 'full',
    mainWrapperSize: 'large',
    service: {
      text: 'NHS Digital Dashboard',
      href: '/',
    },
    navigation: {
      items: [
        { text: 'Overview', href: '/', current: true },
        { text: 'Analytics', href: '/analytics' },
        { text: 'Reports', href: '/reports' },
      ],
    },
    children: (
      <div>
        <DashboardSummaryGrid
          cards={[
            { title: 'Patient Records', value: '1,247' },
            { title: 'Appointments Today', value: '89' },
            { title: 'Active Prescriptions', value: '342' },
            { title: 'Staff On Duty', value: '156' },
          ]}
        />
        <p>This full-width layout is perfect for dashboards and data-heavy applications.</p>
      </div>
    ),
  },
};

export const WithAccount: Story = {
  args: {
    pageTitle: 'Your NHS account',
    service: {
      text: 'NHS App',
      href: '/',
    },
    navigation: {
      items: [
        { text: 'Home', href: '/' },
        { text: 'Health records', href: '/records', current: true },
        { text: 'Appointments', href: '/appointments' },
      ],
    },
    account: {
      items: [
        { text: 'Profile', href: '/profile', icon: true },
        { text: 'Settings', href: '/settings' },
        { text: 'Sign out', href: '/signout' },
      ],
    },
    children: (
      <div>
        <p>Welcome to your NHS account. Here you can manage your health records, appointments, and personal information.</p>
        <h2>Recent activity</h2>
        <ul>
          <li>Appointment booked for 15 March 2024</li>
          <li>Prescription collected</li>
          <li>Health record updated</li>
        </ul>
      </div>
    ),
  },
};

export const CustomFooter: Story = {
  args: {
    pageTitle: 'NHS Trust Portal',
    service: {
      text: 'Royal Free London',
      href: '/',
    },
    footerProps: {
      links: [
        { URL: '/privacy', label: 'Privacy policy' },
        { URL: '/accessibility', label: 'Accessibility' },
        { URL: '/terms', label: 'Terms and conditions' },
        { URL: '/contact', label: 'Contact us' },
      ],
      copyright: '© Royal Free London NHS Foundation Trust',
    },
    children: (
      <div>
        <p>Welcome to the Royal Free London NHS Foundation Trust portal.</p>
        <p>Access your services, information, and resources from this central hub.</p>
      </div>
    ),
  },
};
