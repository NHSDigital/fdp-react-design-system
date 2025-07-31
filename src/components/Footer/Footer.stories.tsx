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

export const WithCustomCopyright: Story = {
  args: {
    links: defaultLinks,
    copyright: '© Crown copyright',
  },
};

export const MultiColumn: Story = {
  args: {
    links: [
      { URL: '/about-us', label: 'About NHS' },
      { URL: '/careers', label: 'Careers' },
      { URL: '/news', label: 'News' },
    ],
    linksColumn2: [
      { URL: '/services', label: 'Services' },
      { URL: '/conditions', label: 'Health A-Z' },
      { URL: '/medicines', label: 'Medicines A-Z' },
    ],
    linksColumn3: [
      { URL: '/live-well', label: 'Live Well' },
      { URL: '/mental-health', label: 'Mental health' },
      { URL: '/care-and-support', label: 'Care and support' },
    ],
  },
};

export const WithMetaLinks: Story = {
  args: {
    links: [
      { URL: '/about-us', label: 'About NHS' },
      { URL: '/careers', label: 'Careers' },
      { URL: '/news', label: 'News' },
    ],
    linksColumn2: [
      { URL: '/services', label: 'Services' },
      { URL: '/conditions', label: 'Health A-Z' },
      { URL: '/medicines', label: 'Medicines A-Z' },
    ],
    metaLinks: [
      { URL: '/privacy-policy', label: 'Privacy policy' },
      { URL: '/cookies', label: 'Cookies' },
      { URL: '/accessibility', label: 'Accessibility statement' },
    ],
  },
};

export const WithExternalLinks: Story = {
  args: {
    links: [
      { URL: '/privacy-policy', label: 'Privacy policy' },
      { URL: '/cookies', label: 'Cookies' },
      { URL: 'https://www.gov.uk', label: 'GOV.UK', newWindow: true },
      { URL: 'https://www.nhs.uk', label: 'NHS website', newWindow: true },
    ],
  },
};

export const MinimalFooter: Story = {
  args: {
    copyright: '© NHS Foundation Trust',
  },
};
