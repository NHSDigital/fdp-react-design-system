// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'NHS/Components/Header/Responsive Navigation',
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
