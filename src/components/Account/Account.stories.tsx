// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Account } from './Account';

const meta: Meta<typeof Account> = {
  title: 'Components/Account',
  component: Account,
  parameters: {
    layout: 'padded',
  },
  // Removed 'autodocs' tag; dedicated docs page exists
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
