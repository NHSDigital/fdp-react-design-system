import type { Meta, StoryObj } from '@storybook/react';
import { Account } from './Account';

const meta: Meta<typeof Account> = {
  title: 'Components/Account',
  component: Account,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'white'],
      description: 'Visual variant for different contexts',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for the account navigation',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        text: 'John Smith',
        href: '/profile',
        icon: true,
      },
      {
        text: 'Settings',
        href: '/settings',
      },
      {
        text: 'Sign out',
        action: '/logout',
        method: 'post',
      },
    ],
  },
};

export const WithIcon: Story = {
  args: {
    items: [
      {
        text: 'Dr. Sarah Wilson',
        href: '/profile',
        icon: true,
      },
      {
        text: 'My Dashboard',
        href: '/dashboard',
      },
      {
        text: 'Messages',
        href: '/messages',
      },
      {
        text: 'Logout',
        action: '/logout',
        method: 'post',
      },
    ],
  },
};

export const SimpleNavigation: Story = {
  args: {
    items: [
      {
        text: 'Dashboard',
        href: '/dashboard',
      },
      {
        text: 'Profile',
        href: '/profile',
      },
      {
        text: 'Settings',
        href: '/settings',
      },
    ],
  },
};

export const WhiteVariant: Story = {
  args: {
    variant: 'white',
    items: [
      {
        text: 'Admin User',
        href: '/admin',
        icon: true,
      },
      {
        text: 'System Settings',
        href: '/admin/settings',
      },
      {
        text: 'Sign Out',
        action: '/admin/logout',
        method: 'post',
      },
    ],
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      {
        text: 'Profile',
        href: '/profile',
        icon: true,
      },
    ],
  },
};

export const WithCustomHTML: Story = {
  args: {
    items: [
      {
        html: '<strong>Dr. John</strong> <em>Smith</em>',
        href: '/profile',
        icon: true,
      },
      {
        html: 'Sign <u>out</u>',
        action: '/logout',
        method: 'post',
      },
    ],
  },
};
