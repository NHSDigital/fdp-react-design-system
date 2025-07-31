import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'NHS/Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'The breadcrumb component shows users where they are in the website hierarchy and helps them navigate back to parent pages.',
      },
    },
  },
  argTypes: {
    labelText: {
      control: 'text',
      description: 'Aria label for the navigation',
    },
    reverse: {
      control: 'boolean',
      description: 'Whether to use reverse color scheme (for dark backgrounds)',
    },
    classes: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { text: 'Home', href: '#' },
      { text: 'Health A-Z', href: '#' },
      { text: 'Mental health', href: '#' },
    ],
  },
};

export const SimpleNavigation: Story = {
  args: {
    items: [
      { text: 'Home', href: '/' },
      { text: 'Services', href: '/services' },
    ],
  },
};

export const DeepNavigation: Story = {
  args: {
    items: [
      { text: 'Home', href: '/' },
      { text: 'Health A-Z', href: '/conditions' },
      { text: 'Mental health', href: '/mental-health' },
      { text: 'Depression', href: '/mental-health/depression' },
      { text: 'Treatment options', href: '/mental-health/depression/treatment' },
    ],
  },
};

export const WithDirectHref: Story = {
  args: {
    href: '/back-to-section',
    text: 'Section Home',
  },
};

export const Reverse: Story = {
  args: {
    items: [
      { text: 'Home', href: '/' },
      { text: 'Health A-Z', href: '/conditions' },
      { text: 'Mental health', href: '/mental-health' },
    ],
    reverse: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const CustomLabel: Story = {
  args: {
    items: [
      { text: 'Home', href: '/' },
      { text: 'Services', href: '/services' },
      { text: 'Find a service', href: '/services/find' },
    ],
    labelText: 'Page navigation',
  },
};

export const WithItemAttributes: Story = {
  args: {
    items: [
      { text: 'Home', href: '/', attributes: { 'data-tracking': 'breadcrumb-home' } },
      { text: 'Health A-Z', href: '/conditions', attributes: { 'data-tracking': 'breadcrumb-health' } },
      { text: 'Mental health', href: '/mental-health', attributes: { 'data-tracking': 'breadcrumb-mental-health' } },
    ],
  },
};
