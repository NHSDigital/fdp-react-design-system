# AriaButton Component

A React Aria-powered button component that provides excellent accessibility support while following NHS design guidelines.

## Features

- **Full Accessibility**: Built on React Aria Components with automatic ARIA attributes, keyboard navigation, and screen reader support
- **NHS Design System**: Follows NHS design guidelines with proper colors, typography, and spacing
- **Enhanced Interactions**: Advanced hover, focus, and press states with smooth animations
- **Type Safety**: Full TypeScript support with proper type definitions
- **CSS-Based Styling**: Clean CSS architecture with CSS custom properties and utility classes

## Installation

```bash
npm install react-aria-components
```

## Usage

```tsx
import { AriaButton } from '@nhs-fdp/design-system';

// Basic usage
<AriaButton variant="primary">Continue</AriaButton>

// With all features
<AriaButton 
  variant="secondary"
  size="large"
  fullWidth
  onPress={() => console.log('Pressed!')}
>
  Find out more
</AriaButton>

// Disabled state
<AriaButton variant="warning" isDisabled>
  Cannot delete
</AriaButton>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'reverse' \| 'warning' \| 'login'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'default' \| 'large'` | `'default'` | Button size |
| `fullWidth` | `boolean` | `false` | Whether button should take full container width |
| `isDisabled` | `boolean` | `false` | Whether button is disabled |
| `onPress` | `(e: PressEvent) => void` | - | Handler called when button is pressed |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Button content |

All other props from React Aria's `ButtonProps` are supported.

## Variants

### Primary
Green button for main actions (NHS Green)
```tsx
<AriaButton variant="primary">Continue</AriaButton>
```

### Secondary  
Blue outlined button for secondary actions
```tsx
<AriaButton variant="secondary">Find out more</AriaButton>
```

### Reverse
White button for dark backgrounds (NHS Blue, etc.)
```tsx
<AriaButton variant="reverse">Start now</AriaButton>
```

### Warning
Red button for destructive actions
```tsx
<AriaButton variant="warning">Delete item</AriaButton>
```

### Login
Blue button specifically for authentication
```tsx
<AriaButton variant="login">Sign in</AriaButton>
```

## Accessibility Features

The AriaButton component provides superior accessibility out of the box:

### Keyboard Navigation
- **Tab**: Navigate to button
- **Enter/Space**: Activate button  
- **Escape**: Remove focus (when appropriate)

### Screen Reader Support
- Proper button role and state announcements
- Disabled state communicated to assistive technology
- Content properly announced

### Focus Management
- Visible focus indicators only when navigating with keyboard
- Focus trapping and restoration as needed
- Smooth focus transitions

### Touch Support
- Optimized touch target sizes (minimum 44px)
- Touch gesture recognition
- Proper touch feedback

## Comparison with Standard Button

| Feature | Standard Button | AriaButton |
|---------|----------------|------------|
| Accessibility | Manual implementation | Automatic with React Aria |
| Keyboard Handling | Custom event handlers | Built-in keyboard support |
| Focus Management | Basic focus styles | Advanced focus-visible handling |
| Screen Readers | Manual ARIA attributes | Comprehensive screen reader support |
| Touch Support | Basic touch events | Optimized touch gestures |
| Press States | CSS hover/active | Advanced press state detection |

## Styling

The component uses CSS classes for styling:

```css
.nhs-aria-button { /* Base styles */ }
.nhs-aria-button--primary { /* Primary variant */ }
.nhs-aria-button--large { /* Large size */ }
.nhs-aria-button[data-pressed] { /* Press state */ }
.nhs-aria-button[data-hovered] { /* Hover state */ }
.nhs-aria-button[data-focus-visible] { /* Keyboard focus */ }
```

## React Aria Integration

This component leverages React Aria Components for:
- Automatic accessibility attributes
- Cross-platform event handling  
- Advanced interaction states
- Screen reader optimization
- Keyboard navigation patterns

## Testing

The component includes comprehensive tests covering:
- Rendering with various props
- Event handling (press, keyboard)
- Accessibility attributes
- Focus management
- Disabled states
- CSS class application

Run tests:
```bash
npm test AriaButton
```

## Examples

See the Storybook documentation for interactive examples:
- Basic usage examples
- Accessibility demonstrations  
- Comparison with standard Button
- All variants and sizes
- Interactive state demonstrations
