import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSSR } from './ButtonSSR';

const meta: Meta<typeof ButtonSSR> = {
  title: 'NHS/Components/ButtonSSR',
  component: ButtonSSR,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The NHS ButtonSSR component is a server-side rendering safe version of the Button component. It provides the same visual styling and basic functionality as the main Button component, but without React Aria Components dependencies to avoid "createContext only works in Client Components" errors.

## SSR-Safe Features

- **Zero React hooks**: No useState, useEffect, or other client-side APIs
- **No createContext dependencies**: Safe for Next.js App Router and server components
- **Standard HTML button**: Uses native \`<button>\` element with NHS styling
- **TypeScript support**: Full type safety with ButtonSSRProps
- **Smaller bundle**: Significantly smaller than the full Button component

## When to Use

- **Server-side rendering**: Next.js App Router server components
- **Static generation**: When you need buttons in statically generated pages
- **Bundle size optimization**: When you don't need full React Aria features
- **SSR-first applications**: Applications prioritizing server-side rendering

## Limitations

This SSR-safe version doesn't include:
- Advanced React Aria accessibility features
- Press state management
- Touch gesture support
- Focus management beyond standard HTML button behavior

For full accessibility features in client components, use the regular Button component.

## Usage

\`\`\`tsx
// SSR-safe import
import { ButtonSSR } from '@nhs-fdp/design-system/ssr';

// Or aliased as Button from SSR bundle
import { Button } from '@nhs-fdp/design-system/ssr';

// Basic usage
<ButtonSSR variant="primary">Continue</ButtonSSR>

// With all props
<ButtonSSR 
  variant="secondary" 
  size="large"
  fullWidth
  disabled
  onClick={() => console.log('Clicked!')}
>
  Click me
</ButtonSSR>
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
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'reverse', 'warning', 'login'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'The size of the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take the full width of its container',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    children: {
      control: 'text',
      description: 'The button content',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'The type of button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonSSR>;

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

export const Block: Story = {
  args: {
    variant: 'primary',
    children: 'Full width button',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled button',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <ButtonSSR variant="primary">Primary</ButtonSSR>
      <ButtonSSR variant="secondary">Secondary</ButtonSSR>
      <ButtonSSR variant="reverse">Reverse</ButtonSSR>
      <ButtonSSR variant="warning">Warning</ButtonSSR>
      <ButtonSSR variant="login">Login</ButtonSSR>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants displayed together.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
      <ButtonSSR variant="primary" size="small">Small</ButtonSSR>
      <ButtonSSR variant="primary" size="default">Default</ButtonSSR>
      <ButtonSSR variant="primary" size="large">Large</ButtonSSR>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button sizes displayed together.',
      },
    },
  },
};

export const WithClickHandler: Story = {
  args: {
    variant: 'primary',
    children: 'Click me!',
    onClick: () => alert('ButtonSSR clicked! This works in SSR environments.'),
  },
  parameters: {
    docs: {
      description: {
        story: 'ButtonSSR with a click handler. Uses standard HTML button onClick event.',
      },
    },
  },
};

export const SubmitButton: Story = {
  render: () => (
    <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted with ButtonSSR!'); }}>
      <ButtonSSR type="submit" variant="primary">
        Submit Form
      </ButtonSSR>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ButtonSSR used as a submit button in a form. Perfect for SSR forms.',
      },
    },
  },
};
