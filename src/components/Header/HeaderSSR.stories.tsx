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

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The default header with NHS branding. This is the standard configuration used across most NHS digital services.'
      }
    }
  }
};

export const SSRDemo: Story = {
  args: {
    service: {
      text: 'NHS Portal',
      href: '/'
    },
    search: {
      action: '/search',
      placeholder: 'Search NHS Portal',
      visuallyHiddenLabel: 'Search the NHS Portal',
      visuallyHiddenButton: 'Search'
    },
    account: {
      ariaLabel: 'Account menu',
      items: [
        {
          href: '/profile',
          text: 'My account',
          icon: true
        },
        {
          action: '/logout',
          method: 'post',
          text: 'Sign out'
        }
      ]
    },
    navigation: {
      ariaLabel: 'Main navigation',
      items: [
        {
          href: '/',
          text: 'Dashboard',
          current: true
        },
        {
          href: '/appointments',
          text: 'Appointments'
        },
        {
          href: '/prescriptions',
          text: 'Prescriptions'
        },
        {
          href: '/health-records',
          text: 'Health records'
        },
        {
          href: '/messages',
          text: 'Messages'
        },
        {
          href: '/test-results',
          text: 'Test results'
        },
        {
          href: '/family-health',
          text: 'Family health'
        },
        {
          href: '/immunisations',
          text: 'Immunisations'
        },
        {
          href: '/organ-donation',
          text: 'Organ donation'
        },
        {
          href: '/emergency-contacts',
          text: 'Emergency contacts'
        }
      ]
    }
  },
  parameters: {
    docs: {
      description: {
        story: `
**Server-Side Rendering (SSR) Demo**

This story demonstrates the Header component's SSR compatibility with progressive enhancement:

### Key SSR Features:
- **Full navigation rendered on server** - All navigation items are available even without JavaScript
- **Progressive enhancement** - Client-side JavaScript adds responsive overflow detection
- **No layout shift** - Smooth transition from server-rendered state to client-enhanced state
- **Accessibility first** - Full keyboard navigation and screen reader support work without JavaScript

### Testing SSR Behavior:
1. **Disable JavaScript** in browser devtools to see server-only behavior
2. **Resize the viewport** - Notice how overflow detection works on the client
3. **Check console logs** for overflow calculations and breakpoint changes
4. **Keyboard navigation** works in both SSR and enhanced modes

### Technical Implementation:
- Uses \`isClient\` state to differentiate server vs client rendering
- SSR renders all navigation items with fallback classes
- Client enhancement adds simplified overflow detection with NHS gutter calculations
- Basic window resize handling for reliable performance
- Console logging shows "SSR Header overflow check" for debugging

This simplified approach ensures reliability while maintaining the core responsive navigation functionality.
        `
      }
    }
  }
};

export const SimplifiedOverflowTest: Story = {
  args: {
    service: {
      text: 'NHS SSR Portal',
      href: '/'
    },
    search: {
      action: '/search',
      placeholder: 'Search NHS Portal'
    },
    account: {
      ariaLabel: 'Account',
      items: [
        {
          href: '/profile',
          text: 'My account'
        },
        {
          href: '/logout',
          text: 'Sign out'
        }
      ]
    },
    navigation: {
      ariaLabel: 'Primary navigation',
      items: [
        {
          href: '/',
          text: 'Dashboard',
          current: true
        },
        {
          href: '/appointments',
          text: 'Book appointments'
        },
        {
          href: '/prescriptions',
          text: 'Repeat prescriptions'
        },
        {
          href: '/health-records',
          text: 'View health records'
        },
        {
          href: '/messages',
          text: 'Secure messages'
        },
        {
          href: '/test-results',
          text: 'Test results'
        },
        {
          href: '/family-health',
          text: 'Family health'
        },
        {
          href: '/immunisations',
          text: 'Immunisation history'
        },
        {
          href: '/organ-donation',
          text: 'Organ donation status'
        },
        {
          href: '/emergency-contacts',
          text: 'Emergency contacts'
        },
        {
          href: '/accessibility',
          text: 'Accessibility settings'
        },
        {
          href: '/data-sharing',
          text: 'Data sharing preferences'
        }
      ]
    }
  },
  parameters: {
    docs: {
      description: {
        story: `
**Simplified Overflow Logic Test**

This story tests the simplified overflow calculation logic designed specifically for the SSR component:

### Simplified Features:
- **NHS Design System gutters**: Accounts for 16px mobile, 32px desktop margins
- **Basic overflow detection**: Simplified calculation without complex caching
- **Console debugging**: Shows "SSR Header overflow check" with gutter calculations
- **Responsive more button**: 80px mobile, 100px desktop width estimation
- **Window resize handling**: Basic debounced resize listener (250ms)

### Test Instructions:
1. **Open browser console** to see simplified overflow calculations
2. **Resize viewport** slowly to see breakpoint transitions
3. **Compare with main Header** component to see the simplified approach
4. **Check mobile vs desktop** gutter calculations in console logs

### Key Differences from Main Header:
- No media query listeners (just window.innerWidth check)
- No ResizeObserver (basic window resize only)
- No complex breakpoint change tracking
- Simplified state management for better SSR compatibility
- Console logs prefixed with "SSR Header" for easy identification

This approach prioritizes reliability and SSR compatibility over advanced features.
        `
      }
    }
  }
};