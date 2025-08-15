// PRUNE: KEEP_ALL (Expanded static header stories for variant & state coverage)
import type { Meta, StoryObj } from '@storybook/react';
import { HeaderStatic } from './HeaderStatic';

const meta: Meta<typeof HeaderStatic> = {
  title: 'NHS/Components/Header/HeaderStatic',
  component: HeaderStatic,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The **HeaderStatic** component provides true Server-Side Rendering (SSR) compatibility with zero React hooks and CSS-only responsive behavior.

## True SSR Compatibility
- **Zero React hooks**: No useState, useRef, useEffect, or useCallback
- **Pure HTML/CSS**: Fully functional without JavaScript
- **No hydration required**: Works immediately on server render
- **CSS-only responsive**: Uses media queries and CSS for responsive behavior
- **No client-side state**: All behavior handled through CSS and HTML

## Key Features
- **Native HTML elements**: Uses \`<details>\` for CSS-only dropdowns
- **Media query responsive**: Automatic mobile/desktop layout switching
- **Print-friendly**: Optimized styles for print media
- **Accessibility first**: Full keyboard and screen reader support
- **Performance optimized**: Zero JavaScript overhead

## Responsive Strategy
- **Mobile (<768px)**: Vertical navigation list, no "More" button needed
- **Desktop (≥768px)**: Horizontal navigation with CSS-only "More" dropdown
- **Overflow handling**: \`maxVisibleItems\` prop controls when "More" appears
- **No-JS fallback**: Graceful degradation when JavaScript is disabled

## vs Other Header Components
- **HeaderStatic**: True SSR, zero hooks, CSS-only responsive (this component)
- **HeaderSSR**: SSR-safe with hooks, client-side overflow detection
- **Header**: Full client-side with complex responsive logic

## Usage
Perfect for:
- True SSR applications
- High-performance scenarios
- No-JavaScript environments
- Progressive web apps
- Static site generation

## Technical Implementation
- Uses HTML \`<details>\` element for native dropdown behavior
- CSS media queries handle responsive breakpoints
- No JavaScript event listeners or state management
- Server renders complete functional component
- Client receives fully working header immediately
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
    maxVisibleItems: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: 'Maximum navigation items visible before showing "More" dropdown'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

export default meta;
type Story = StoryObj<typeof HeaderStatic>;

// Shared baseline args
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
  parameters: { docs: { description: { story: 'Default static header. Renders identically on server & client.' } } }
};

export const WhiteVariant: Story = {
  args: { ...baseArgs, variant: 'white' },
  parameters: { docs: { description: { story: 'White variant for dark / brand backgrounds (CSS-only responsive).' } } }
};

export const OrganisationVariant: Story = {
  args: { ...baseArgs, variant: 'organisation' },
  parameters: { docs: { description: { story: 'Organisation variant – static, no JS required.' } } }
};

export const WithSearch: Story = {
  args: { ...baseArgs, search: { action: '/search', placeholder: 'Search services' } },
  parameters: { docs: { description: { story: 'Static header including a search form.' } } }
};

export const WithAccountMenu: Story = {
  args: { ...baseArgs, account: { items: [ { href: '/profile', text: 'Your profile', icon: true }, { action: '/logout', method: 'post', text: 'Sign out' } ] } },
  parameters: { docs: { description: { story: 'Static header with account menu (pure HTML/CSS dropdown).' } } }
};

export const WithLongNavigationOverflow: Story = {
  args: {
    ...baseArgs,
    maxVisibleItems: 4,
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
  parameters: { docs: { description: { story: 'Demonstrates CSS-only overflow with <details> based “More” group (maxVisibleItems=4).' } } }
};

export const WithEverything: Story = {
  args: {
    ...baseArgs,
    variant: 'organisation',
    maxVisibleItems: 5,
    search: { action: '/search', placeholder: 'Search' },
    account: { items: [ { href: '/profile', text: 'Jane Doe', icon: true }, { href: '/settings', text: 'Settings' }, { action: '/logout', method: 'post', text: 'Sign out' } ] }
  },
  parameters: { docs: { description: { story: 'Organisation variant + search + account + overflow threshold (static).' } } }
};

export const Gallery: Story = {
  parameters: { docs: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div><strong>Default</strong><HeaderStatic {...(Default.args as any)} /></div>
      <div style={{ background: '#005eb8', padding: '8px' }}><strong style={{ color: 'white' }}>White</strong><HeaderStatic {...(WhiteVariant.args as any)} /></div>
      <div><strong>Organisation</strong><HeaderStatic {...(OrganisationVariant.args as any)} /></div>
      <div><strong>With Search</strong><HeaderStatic {...(WithSearch.args as any)} /></div>
      <div><strong>With Account</strong><HeaderStatic {...(WithAccountMenu.args as any)} /></div>
      <div><strong>Overflow</strong><HeaderStatic {...(WithLongNavigationOverflow.args as any)} /></div>
      <div><strong>Everything</strong><HeaderStatic {...(WithEverything.args as any)} /></div>
    </div>
  )
};
