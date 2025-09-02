# Header (Unified)

The design system now ships a single unified `Header` component that supports SSR and progressive enhancement. Legacy variants `HeaderStatic` and `HeaderSSR` have been removed; their responsibilities are consolidated into `Header` plus the optional behaviour layer (`/behaviours`) that adds responsive overflow ("More" menu) when JavaScript is available.

## Key Characteristics

| Capability | Support |
|------------|---------|
| SSR Safe Markup | ✅ (pure render path, no direct DOM APIs) |
| Works Without JS | ✅ (all navigation items rendered; no JS-only controls required) |
| Progressive Enhancement | ✅ (overflow measurement inserts "More" menu via behaviour script) |
| Accessible Navigation | ✅ (roles, aria-current, keyboard focus styles) |
| Theming / Variants | ✅ (`default`, `white`, `organisation`) |

## Overflow Behaviour

The automatic "More" menu is not part of the React component tree. Instead, include the behaviours bundle once in your app:

```ts
import '@fergusbisset/nhs-fdp-design-system/behaviours';
```

This auto-initialises and measures header navigation width, moving overflowing items into a generated dropdown. Without JS, all items remain visible (no loss of functionality).

## Shared Features

All header components provide:

- **NHS Branding**: Official NHS logo with proper branding guidelines
- **Flexible Navigation**: Support for main navigation items with current page indicators
- **Search Integration**: Built-in search functionality with accessibility support
- **Account Management**: User account navigation with icons and actions
- **Organisation Support**: Special variant for NHS trusts and health organizations
- **Responsive Design**: Mobile-first design with appropriate navigation
- **Accessibility**: Full ARIA support, keyboard navigation, and screen reader compatibility
- **Design Tokens**: Complete integration with NHS design token system

## Usage

```tsx
import { Header } from '@nhs-fdp/design-system';

// Basic header
<Header />

// Full-featured header
<Header
  service={{
    text: 'NHS App',
    href: '/'
  }}
  search={{
    action: '/search',
    placeholder: 'Search NHS App'
  }}
  account={{
    items: [
      {
        href: '/profile',
        text: 'Your NHS account',
        icon: true
      },
      {
        action: '/logout',
        method: 'post',
        text: 'Sign out'
      }
    ]
  }}
  navigation={{
    items: [
      { href: '/', text: 'Home', current: true },
      { href: '/health', text: 'Your health' },
      { href: '/appointments', text: 'Appointments' }
    ]
  }}
/>
```

## Variants

### Default Variant

Standard NHS blue header with white text - the most common configuration.

### White Variant

White background header with blue text, used for specific design contexts.

```tsx
<Header variant="white" />
```

### Organisation Variant

Special configuration for NHS trusts and health organizations with custom branding.

```tsx
<Header
  variant="organisation"
  organisation={{
    name: 'NHS Foundation Trust',
    split: 'Royal Free London',
    descriptor: 'Part of NHS Digital'
  }}
/>
```

## Props

### Core Props

- `variant`: `'default' | 'white' | 'organisation'` - Header color scheme
- `className`: Additional CSS classes
- `containerClasses`: Classes for the container element

### Logo Configuration

- `logo.href`: Logo link URL
- `logo.src`: Custom logo image source
- `logo.ariaLabel`: Logo accessibility label

### Service Configuration

- `service.text`: Service name text
- `service.href`: Service name link URL

### Navigation Configuration

- `navigation.items`: Array of navigation items
- `navigation.justified`: Distribute items evenly on desktop
- `navigation.white`: White navigation variant
- `navigation.ariaLabel`: Navigation accessibility label

### Account Configuration

- `account.items`: Array of account items
- `account.ariaLabel`: Account section accessibility label

### Search Configuration

- `search.action`: Search form action URL
- `search.placeholder`: Search input placeholder
- `search.visuallyHiddenLabel`: Search accessibility label

## Accessibility Features

- **Semantic HTML**: Uses proper `<header>`, `<nav>`, and `<search>` elements
- **ARIA Navigation**: Proper navigation landmarks and labels
- **Current Page Indicators**: `aria-current` attributes for navigation state
- **Keyboard Navigation**: Full keyboard accessibility including menu toggle
- **Screen Reader Support**: Hidden labels and proper focus management
- **Focus Indicators**: Clear visual focus states for all interactive elements

## Design Token Integration

The Header component uses NHS design tokens for:

- **Colors**: Primary NHS blue, white, and semantic colors
- **Typography**: NHS font family, sizes, and weights
- **Spacing**: Consistent padding, margins, and gaps
- **Focus States**: Standard NHS focus indicators
- **Responsive Breakpoints**: Mobile-first responsive behavior

## Implementation Notes

### Link Combination Logic

When the logo and service name have the same `href`, they are automatically combined into a single link to avoid duplicate navigation targets.

### Responsive Behavior

- Navigation items automatically collapse into a menu on smaller screens
- Search and account sections stack vertically on mobile
- Typography scales appropriately across breakpoints

### Menu Toggle

The responsive menu toggle is automatically hidden until navigation items overflow the available space.

## Testing

The component includes comprehensive tests covering:

- Basic rendering and variants
- Navigation functionality
- Search integration
- Account management
- Accessibility attributes
- Responsive behavior
- Menu toggle functionality

Run tests with:

```bash
npm test -- Header.test.tsx
```

## Storybook Stories

The Header component includes 12 Storybook stories demonstrating:

- Default usage
- All variants and configurations
- Real-world NHS service examples
- Accessibility features
- Mobile responsive behavior

View stories with:

```bash
npm run storybook
```

## Migration from NHS UK Frontend

This component replaces the original NHS UK Frontend header with:

- TypeScript support and type safety
- Enhanced accessibility
- Design token integration
- Improved responsive behavior
- React component architecture
- Comprehensive testing

The API is designed to be familiar to users of the original NHS UK Frontend while providing modern React patterns and enhanced functionality.
