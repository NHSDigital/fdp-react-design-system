// PRUNE: KEEP_ALL  (This file intentionally contains multiple stories for documentation & visual regression.)
// Expanded Button stories demonstrating variants, sizes, states, and behaviors.
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'NHS/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The NHS Button component provides excellent accessibility support with native HTML elements. It follows NHS design guidelines and includes:

## Features

- **Full keyboard navigation**: Tab, Enter, and Space key support
- **Screen reader compatibility**: Proper ARIA labels and descriptions
- **Focus management**: Smart focus handling and focus-visible support
- **Press state management**: Visual and behavioral press states
- **Hover interactions**: Enhanced hover states with animations
- **Touch support**: Optimized for touch interactions

## Usage

\`\`\`tsx
import { Button } from '@nhs-fdp/design-system';

// Basic usage
<Button variant="primary">Continue</Button>

// With all props
<Button 
  variant="secondary" 
  size="large"
  fullWidth
  disabled
  onClick={() => console.log('Clicked!')}
>
  Click me
</Button>
\`\`\`

## Background Guidelines

### Light Backgrounds
- **Primary**: Green button for main actions
- **Secondary**: Blue outlined button for secondary actions  
- **Login**: Blue button for authentication

### Dark Backgrounds (NHS Blue, etc.)
- **Reverse**: White button that works on dark backgrounds

### Special Cases
- **Warning**: Red button for destructive actions

## Native Accessibility

This component uses native HTML elements to provide:
- Automatic ARIA attributes
- Keyboard event handling
- Focus management
- Press state detection
- Touch gesture support
- Screen reader announcements
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'reverse', 'warning', 'login'],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    fullWidth: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Variant stories
export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary action' },
};

export const PrimaryDisabled: Story = {
  args: { variant: 'primary', children: 'Primary disabled', disabled: true } as any,
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary action' },
};

export const SecondaryDisabled: Story = {
  args: { variant: 'secondary', children: 'Secondary disabled', disabled: true } as any,
};

export const Reverse: Story = {
  args: { variant: 'reverse', children: 'Reverse on dark BG' },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Warning: Story = {
  args: { variant: 'warning', children: 'Destructive action' },
};

export const Login: Story = {
  args: { variant: 'login', children: 'Login' },
};

// Size stories
export const LargePrimary: Story = {
  args: { variant: 'primary', size: 'large', children: 'Large primary' },
};

export const SmallSecondary: Story = {
  args: { variant: 'secondary', size: 'small', children: 'Small secondary' },
};

// Layout & width
export const FullWidth: Story = {
  args: { variant: 'primary', fullWidth: true, children: 'Full width button' },
  parameters: { layout: 'padded' },
};

// Link rendering
export const AsLink: Story = {
  args: { variant: 'secondary', href: '#next', children: 'Anchor link button' },
};

// Double‑click prevention demonstration
export const PreventDoubleClick: Story = {
  args: { variant: 'primary', preventDoubleClick: true, children: 'Submit (1s lockout)' },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates preventDoubleClick — clicking rapidly will only trigger first activation for 1 second.',
      },
    },
  },
};

// Composite gallery (for visual scan of main variants) – hidden from docs table.
export const Gallery: Story = {
  parameters: { docs: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-start' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="reverse">Reverse</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="login">Login</Button>
      <Button variant="primary" size="small">Small</Button>
      <Button variant="primary" size="large">Large</Button>
      <Button variant="secondary" disabled>Disabled</Button>
      <Button variant="primary" fullWidth style={{ maxWidth: 200 }}>Full width (200px container)</Button>
      <Button variant="primary" preventDoubleClick>Prevent dbl‑click</Button>
    </div>
  ),
};
