// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSSR } from './ButtonSSR';
import { ButtonVariant } from './Button.types';

const meta: Meta<typeof ButtonSSR> = {
  title: 'NHS/Components/ButtonSSR',
  component: ButtonSSR,
  tags: ['hidden', 'deprecated'],
  parameters: {
    layout: 'centered',
    // Hide from sidebar and Chromatic by default; retained only for legacy reference
    docsOnly: true,
    options: { showPanel: false },
    chromatic: { disableSnapshot: true, disable: true },
    docs: {
      description: {
  component: `
The NHS ButtonSSR component is a server-side rendering safe version of the Button component. It provides the same visual styling and basic functionality as the main Button component, but without React Aria Components dependencies to avoid "createContext only works in Client Components" errors.

⚠️ Deprecated: ButtonSSR has been superseded by the server-first ButtonServer component. Please migrate to ButtonServer for SSR-safe rendering. This story is hidden from the sidebar and Chromatic.

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
// Preferred SSR-safe import (server-first)
import { ButtonServer } from '@nhs-fdp/design-system/ssr';

// Basic usage
<ButtonServer variant="primary">Continue</ButtonServer>

// With typical props
<ButtonServer 
  variant="secondary" 
  size="large"
  fullWidth
  preventDoubleClick
>
  Click me
</ButtonServer>
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
    variant: ButtonVariant.Primary,
    children: 'Continue',
  },
};
