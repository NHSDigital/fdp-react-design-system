# Account Component

A standalone Account component for the NHS Design System, providing user account navigation functionality.

## Overview

The Account component was extracted from the Header component to provide better modularity and reusability. It handles user account navigation with support for both links and form actions.

## Usage

```tsx
import { Account } from '@nhs-fdp/components';

// Basic usage with links
<Account
  items={[
    { text: 'Profile', href: '/profile', icon: true },
    { text: 'Settings', href: '/settings' },
    { text: 'Logout', action: '/logout', method: 'post' }
  ]}
/>

// With custom styling
<Account
  variant="white"
  className="custom-account"
  ariaLabel="User account navigation"
  items={accountItems}
/>
```

## Props

### AccountProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ariaLabel` | `string` | `"Account"` | ARIA label for the account navigation |
| `items` | `AccountItem[]` | `[]` | Array of account items to display |
| `className` | `string` | - | Additional CSS classes |
| `variant` | `'default' \| 'white'` | `'default'` | Visual variant for different contexts |

### AccountItem

| Prop | Type | Description |
|------|------|-------------|
| `href` | `string` | Link URL for navigation items |
| `action` | `string` | Form action URL for form submissions |
| `method` | `'get' \| 'post'` | HTTP method for form actions |
| `text` | `string` | Display text for the item |
| `html` | `string` | HTML content (overrides text) |
| `icon` | `boolean` | Whether to show the user icon |
| `className` | `string` | Additional CSS classes for the item |

## Variants

### Default

Standard blue background suitable for use in the main NHS header.

### White

Light grey background with blue text, suitable for use in white header variants.

## Accessibility

- Uses semantic `<nav>` element with proper ARIA labeling
- Supports keyboard navigation
- Follows NHS Design System focus styles
- Screen reader friendly with appropriate ARIA attributes

## Integration with Header

When used within the Header component, the Account component automatically inherits the appropriate variant styling based on the header's variant.

## Examples

### User Profile Account

```tsx
<Account
  items={[
    { 
      text: 'John Smith', 
      href: '/profile', 
      icon: true 
    },
    { 
      text: 'Sign out', 
      action: '/logout', 
      method: 'post' 
    }
  ]}
/>
```

### Simple Navigation

```tsx
<Account
  variant="white"
  items={[
    { text: 'Dashboard', href: '/dashboard' },
    { text: 'Messages', href: '/messages' },
    { text: 'Settings', href: '/settings' }
  ]}
/>
```
