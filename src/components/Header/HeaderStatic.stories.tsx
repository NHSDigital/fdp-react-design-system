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

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The default static header with NHS branding. This renders identically on server and client with zero JavaScript.'
      }
    }
  }
};

export const TrueSSRDemo: Story = {
  args: {
    service: {
      text: 'NHS Digital Services',
      href: '/'
    },
    search: {
      action: '/search',
      placeholder: 'Search NHS services',
      visuallyHiddenLabel: 'Search NHS Digital Services',
      visuallyHiddenButton: 'Search'
    },
    account: {
      ariaLabel: 'Account management',
      items: [
        {
          href: '/profile',
          text: 'My profile',
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
    },
    maxVisibleItems: 5
  },
  parameters: {
    docs: {
      description: {
        story: `
**True Server-Side Rendering Demo**

This story demonstrates a header that is genuinely SSR-compatible:

### Zero JavaScript Requirements:
- **No React hooks** - Component uses only props and JSX
- **CSS-only responsive** - Media queries handle all responsive behavior
- **Native HTML dropdowns** - Uses \`<details>\` element for "More" functionality
- **Works without hydration** - Fully functional on server render

### SSR Testing Instructions:
1. **Disable JavaScript** completely in browser DevTools
2. **Resize viewport** - Notice responsive behavior still works
3. **Click "More" button** - Native \`<details>\` dropdown works without JS
4. **Print preview** - Optimized print styles active
5. **Keyboard navigation** - Full accessibility without JavaScript

### Key Benefits:
- **Instant load**: No JavaScript to download or execute
- **SEO optimized**: Search engines see complete functional header
- **Accessibility first**: Works with all assistive technologies
- **Performance**: Zero runtime JavaScript overhead
- **Reliability**: No hydration mismatches or client-side failures

### Technical Details:
- Server renders complete functional component
- Client receives working header immediately
- CSS handles all responsive breakpoints
- Native HTML elements provide interaction
- \`maxVisibleItems={5}\` demonstrates overflow handling

This is truly SSR-compatible - the server and client render identical, functional markup.
        `
      }
    }
  }
};

export const ResponsiveOverflowTest: Story = {
  args: {
    service: {
      text: 'NHS Responsive Test',
      href: '/'
    },
    search: {
      action: '/search',
      placeholder: 'Search'
    },
    navigation: {
      ariaLabel: 'Test navigation',
      items: [
        {
          href: '/',
          text: 'Home',
          current: true
        },
        {
          href: '/services',
          text: 'Services'
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
          text: 'Family health management'
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
          text: 'Accessibility preferences'
        }
      ]
    },
    maxVisibleItems: 4
  },
  parameters: {
    docs: {
      description: {
        story: `
**CSS-Only Responsive Overflow Test**

This story tests the pure CSS responsive behavior with a lower \`maxVisibleItems\` threshold:

### CSS-Only Features:
- **\`maxVisibleItems={4}\`** - Only 4 items visible before "More" dropdown
- **Mobile behavior** - All items shown vertically, no "More" button
- **Desktop behavior** - Horizontal layout with "More" dropdown for overflow
- **Native dropdown** - HTML \`<details>\` element provides click functionality

### Testing Instructions:
1. **Start at desktop width** - See horizontal layout with "More" button
2. **Click "More"** - Native dropdown opens (no JavaScript required)
3. **Resize to mobile** - Layout switches to vertical, "More" button disappears
4. **Check mobile view** - All items accessible without dropdown
5. **Disable JavaScript** - Everything still works perfectly

### CSS Implementation:
- \`@media (max-width: 767px)\` - Mobile layout rules
- \`@media (min-width: 768px)\` - Desktop layout rules
- \`details\` element - Native dropdown behavior
- \`flex-direction\` - Responsive layout switching
- \`display: none/flex\` - "More" button visibility

This demonstrates true CSS-only responsive behavior without any JavaScript dependencies.
        `
      }
    }
  }
};

export const AccessibilityTest: Story = {
  args: {
    service: {
      text: 'NHS Accessibility',
      href: '/'
    },
    account: {
      ariaLabel: 'User account',
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
      ariaLabel: 'Main site navigation',
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
          href: '/accessibility',
          text: 'Accessibility settings'
        }
      ]
    },
    maxVisibleItems: 3
  },
  parameters: {
    docs: {
      description: {
        story: `
**Accessibility Without JavaScript Test**

This story focuses on accessibility features that work without any JavaScript:

### Native Accessibility Features:
- **Semantic HTML** - Uses proper \`<header>\`, \`<nav>\`, \`<ul>\` structure
- **ARIA landmarks** - \`role="banner"\` and \`aria-label\` attributes
- **Current page indication** - \`aria-current="page"\` for active items
- **Keyboard navigation** - Tab, Enter, Space work with native elements
- **Screen reader support** - All content accessible to assistive technology

### Testing Accessibility:
1. **Tab navigation** - Use Tab key to navigate through all interactive elements
2. **Screen reader** - Test with NVDA, JAWS, or VoiceOver
3. **Keyboard only** - Navigate using only keyboard (no mouse)
4. **Focus indicators** - Visual focus indicators on all interactive elements
5. **Color contrast** - Meets WCAG AA standards

### Accessibility Benefits:
- **No hydration delays** - Accessibility works immediately on page load
- **Reliable focus management** - Native HTML focus behavior
- **Screen reader compatibility** - Standard semantic markup
- **High contrast support** - CSS-based focus indicators
- **Keyboard accessibility** - Native keyboard event handling

This header is fully accessible without requiring any JavaScript to function.
        `
      }
    }
  }
};

export const NoJavaScriptTest: Story = {
  args: {
    service: {
      text: 'NHS No-JS Test',
      href: '/'
    },
    search: {
      action: '/search',
      placeholder: 'Search NHS services'
    },
    navigation: {
      ariaLabel: 'Navigation',
      items: [
        {
          href: '/',
          text: 'Home'
        },
        {
          href: '/services',
          text: 'Services'
        },
        {
          href: '/about',
          text: 'About'
        },
        {
          href: '/contact',
          text: 'Contact'
        },
        {
          href: '/help',
          text: 'Help'
        },
        {
          href: '/feedback',
          text: 'Feedback'
        }
      ]
    },
    maxVisibleItems: 3
  },
  parameters: {
    docs: {
      description: {
        story: `
**No JavaScript Required Test**

This story specifically tests functionality when JavaScript is completely disabled:

### No-JS Instructions:
1. **Disable JavaScript** in your browser's developer tools
2. **Reload the page** to see server-rendered state
3. **Try all interactions** - everything should work
4. **Resize viewport** - responsive behavior still active
5. **Use keyboard navigation** - Tab, Enter, Space all work

### What Works Without JS:
- ✅ **Navigation links** - All links clickable
- ✅ **Search form** - Form submission works
- ✅ **Responsive layout** - CSS media queries active
- ✅ **More dropdown** - Native \`<details>\` element works
- ✅ **Accessibility** - Full keyboard and screen reader support
- ✅ **Focus indicators** - CSS focus styles active

### Progressive Enhancement:
This component follows true progressive enhancement principles:
- **Base layer**: Fully functional HTML/CSS
- **Enhancement layer**: (None needed - already complete)
- **JavaScript layer**: (Optional future enhancements)

The header is a complete, functional component without any JavaScript requirements.
        `
      }
    }
  }
};
