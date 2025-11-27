// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'NHS/Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The footer component displays links and copyright information at the bottom of pages.',
      },
    },
  },
  argTypes: {
    copyright: {
      control: 'text',
      description: 'Copyright text to display',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
    containerClasses: {
      control: 'text',
      description: 'Additional CSS classes for the container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

const defaultLinks = [
  { URL: '/privacy-policy', label: 'Privacy policy' },
  { URL: '/cookies', label: 'Cookies' },
  { URL: '/contact-us', label: 'Contact us' },
  { URL: '/site-map', label: 'Site map' },
  { URL: '/accessibility', label: 'Accessibility' },
];

export const Default: Story = {
  args: {
    links: defaultLinks,
  },
};
