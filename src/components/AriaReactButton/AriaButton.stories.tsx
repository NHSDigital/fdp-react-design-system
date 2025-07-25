import type { Meta, StoryObj } from '@storybook/react';
import { AriaButton } from './AriaButton';

const meta: Meta<typeof AriaButton> = {
  title: 'Components/AriaButton',
  component: AriaButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The NHS AriaButton component is built with React Aria Components to provide excellent accessibility support out of the box. It follows NHS design guidelines and includes:

## Features

- **Full keyboard navigation**: Tab, Enter, and Space key support
- **Screen reader compatibility**: Proper ARIA labels and descriptions
- **Focus management**: Smart focus handling and focus-visible support
- **Press state management**: Visual and behavioral press states
- **Hover interactions**: Enhanced hover states with animations
- **Touch support**: Optimized for touch interactions

## Usage

\`\`\`tsx
import { AriaButton } from '@nhs-fdp/design-system';

// Basic usage
<AriaButton variant="primary">Continue</AriaButton>

// With all props
<AriaButton 
  variant="secondary" 
  size="large"
  fullWidth
  isDisabled
  onPress={() => console.log('Pressed!')}
>
  Click me
</AriaButton>
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

## React Aria Benefits

This component leverages React Aria to provide:
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
    isDisabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AriaButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Continue',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Find out more',
  },
};

export const Reverse: Story = {
  args: {
    variant: 'reverse',
    children: 'Start now',
  },
  parameters: {
    backgrounds: { default: 'nhs-blue' },
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Delete item',
  },
};

export const Login: Story = {
  args: {
    variant: 'login',
    children: 'Sign in',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large button',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full width button',
  },
  parameters: {
    layout: 'padded',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    isDisabled: true,
    children: 'Disabled button',
  },
};

export const Interactive: Story = {
  args: {
    variant: 'primary',
    children: 'Click me!',
    onPress: () => alert('Button pressed!'),
  },
};

export const AllVariants: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <AriaButton variant="primary">Primary Button</AriaButton>
      <AriaButton variant="secondary">Secondary Button</AriaButton>
      <AriaButton variant="login">Login Button</AriaButton>
      <AriaButton variant="warning">Warning Button</AriaButton>
      <div style={{ background: '#005eb8', padding: '1rem', borderRadius: '4px' }}>
        <AriaButton variant="reverse">Reverse Button</AriaButton>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <AriaButton variant="primary" size="small">Small</AriaButton>
      <AriaButton variant="primary" size="default">Default</AriaButton>
      <AriaButton variant="primary" size="large">Large</AriaButton>
    </div>
  ),
};

export const AccessibilityDemo: Story = {
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
This story demonstrates the accessibility features of the AriaButton component:

- **Keyboard Navigation**: Try using Tab to navigate between buttons, and Enter/Space to activate them
- **Screen Reader**: Screen readers will announce the button text and state
- **Focus Indicators**: Notice the focus outline when navigating with keyboard
- **Press States**: Visual feedback when buttons are pressed
- **Disabled State**: Disabled buttons are properly marked as inaccessible
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <h3>Keyboard Navigation Test</h3>
      <p>Try using Tab, Enter, and Space keys:</p>
      
      <AriaButton 
        variant="primary" 
        onPress={() => console.log('First button pressed')}
      >
        First Button
      </AriaButton>
      
      <AriaButton 
        variant="secondary"
        onPress={() => console.log('Second button pressed')}
      >
        Second Button
      </AriaButton>
      
      <AriaButton 
        variant="primary"
        isDisabled
      >
        Disabled Button (skip with Tab)
      </AriaButton>
      
      <AriaButton 
        variant="warning"
        onPress={() => console.log('Last button pressed')}
      >
        Last Button
      </AriaButton>
    </div>
  ),
};
