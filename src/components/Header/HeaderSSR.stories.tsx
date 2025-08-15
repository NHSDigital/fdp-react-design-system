// PRUNE: KEEP_ALL (Expanded SSR header stories for variant & state coverage)
import type { Meta, StoryObj } from '@storybook/react';
import { HeaderSSR } from './HeaderSSR';

const meta: Meta<typeof HeaderSSR> = {
  title: 'NHS/Components/Header/HeaderSSR',
  component: HeaderSSR,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The **HeaderSSR** component is a simplified, SSR-optimized version of the Header component designed specifically for server-side rendering scenarios and fallback contexts.

## SSR-First Design
- **Server-compatible**: No browser APIs called during initial render
- **Progressive enhancement**: Basic functionality without JavaScript, enhanced with client-side features
- **Simplified overflow logic**: Uses NHS Design System gutters but with minimal complexity
- **Graceful fallback**: All navigation items accessible even without JavaScript

## Key Differences from Main Header
- Simplified overflow calculation (no complex caching or ResizeObserver)
- Basic window resize handling instead of media query listeners
- Reduced state management for better SSR compatibility
- Focus on reliability over advanced features

## Features
- NHS branding with official logo
- Responsive navigation with simplified overflow detection
- Search functionality
- Account management integration
- Full accessibility support with ARIA navigation
- Progressive enhancement pattern

## Usage Guidelines
- Use as fallback component for SSR scenarios
- Ideal for simpler implementations that need reliable SSR
- Accounts for NHS Design System gutters (16px mobile, 32px desktop)
- Provides console logging for debugging overflow calculations

## Accessibility
- Uses semantic HTML5 header element
- Proper ARIA navigation landmarks
- Keyboard accessible menu toggle
- Screen reader friendly hidden labels
- Focus indicators for all interactive elements
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'white', 'organisation'],
      description: 'Header color variant'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

export default meta;
type Story = StoryObj<typeof HeaderSSR>;

const baseArgs = {
  service: { text: 'NHS Service', href: '/' },
  navigation: {
    items: [
      { href: '/', text: 'Home', current: true },
      { href: '/services', text: 'Services' },
      { href: '/guidance', text: 'Guidance' },
      { href: '/resources', text: 'Resources' },
      { href: '/about', text: 'About' }
    ]
  }
};

export const Default: Story = {
  args: { ...baseArgs },
  parameters: { docs: { description: { story: 'Default SSR header (simplified overflow logic).' } } }
};

export const WhiteVariant: Story = {
  args: { ...baseArgs, variant: 'white' },
  parameters: { docs: { description: { story: 'White variant with SSR-safe rendering.' } } }
};

export const OrganisationVariant: Story = {
  args: { ...baseArgs, variant: 'organisation' },
  parameters: { docs: { description: { story: 'Organisation variant – SSR optimized component.' } } }
};

export const WithSearch: Story = {
  args: { ...baseArgs, search: { action: '/search', placeholder: 'Search NHS' } },
  parameters: { docs: { description: { story: 'SSR header with progressive-enhanced search.' } } }
};

export const WithAccountMenu: Story = {
  args: { ...baseArgs, account: { items: [ { href: '/profile', text: 'Your profile', icon: true }, { href: '/settings', text: 'Settings' }, { action: '/logout', method: 'post', text: 'Sign out' } ] } },
  parameters: { docs: { description: { story: 'SSR header with account integration.' } } }
};

export const WithLongNavigationOverflow: Story = {
  args: {
    ...baseArgs,
    navigation: {
      items: [
        { href: '/', text: 'Home', current: true },
        { href: '/appointments', text: 'Appointments' },
        { href: '/results', text: 'Test results' },
        { href: '/medicines', text: 'Medicines' },
        { href: '/messages', text: 'Messages' },
        { href: '/conditions', text: 'Conditions' },
        { href: '/settings', text: 'Settings' },
        { href: '/support', text: 'Support' }
      ]
    }
  },
  parameters: { docs: { description: { story: 'Demonstrates simplified overflow calculation under SSR.' } } }
};

export const WithEverything: Story = {
  args: {
    ...baseArgs,
    variant: 'organisation',
    search: { action: '/search', placeholder: 'Search services' },
    account: { items: [ { href: '/profile', text: 'Jane Doe', icon: true }, { href: '/settings', text: 'Settings' }, { action: '/logout', method: 'post', text: 'Sign out' } ] }
  },
  parameters: { docs: { description: { story: 'Organisation variant with search + account (SSR).' } } }
};

export const Gallery: Story = {
  parameters: { docs: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div><strong>Default</strong><HeaderSSR {...(Default.args as any)} /></div>
      <div style={{ background: '#005eb8', padding: '8px' }}><strong style={{ color: 'white' }}>White</strong><HeaderSSR {...(WhiteVariant.args as any)} /></div>
      <div><strong>Organisation</strong><HeaderSSR {...(OrganisationVariant.args as any)} /></div>
      <div><strong>With Search</strong><HeaderSSR {...(WithSearch.args as any)} /></div>
      <div><strong>With Account</strong><HeaderSSR {...(WithAccountMenu.args as any)} /></div>
      <div><strong>Overflow</strong><HeaderSSR {...(WithLongNavigationOverflow.args as any)} /></div>
      <div><strong>Everything</strong><HeaderSSR {...(WithEverything.args as any)} /></div>
    </div>
  )
};
