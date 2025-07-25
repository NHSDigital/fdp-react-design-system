import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button/Button';
import { AriaButton } from './AriaButton';

const meta: Meta = {
  title: 'Components/Button Comparison',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Button vs AriaButton Comparison

This comparison shows the differences between our original Button component and the new AriaButton component built with React Aria.

## Key Differences

### Original Button
- Uses standard HTML button with custom event handling
- Manual focus management
- Custom accessibility implementation
- Styled with CSS-in-JS (styles object)

### AriaButton (React Aria)
- Built on React Aria Components foundation
- Automatic accessibility features (ARIA attributes, keyboard handling)
- Enhanced focus management with focus-visible support
- Better press state handling
- Styled with CSS classes
- Superior screen reader support
- Automatic touch gesture support

## When to Use Which

**Use AriaButton when:**
- You need maximum accessibility compliance
- Building complex interactive patterns
- Working with screen readers extensively
- Need advanced keyboard navigation
- Want automatic focus management

**Use Button when:**
- You need the existing styling system
- Working with legacy code
- Simple use cases where accessibility is already handled elsewhere

## Migration

AriaButton is designed as a drop-in replacement for most Button use cases. The main differences:
- \`onClick\` becomes \`onPress\`
- \`disabled\` becomes \`isDisabled\`
- Automatic accessibility enhancements
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const VisualComparison: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
      <div>
        <h3>Original Button</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="warning">Warning Button</Button>
          <Button variant="primary" disabled>Disabled Button</Button>
        </div>
      </div>
      
      <div>
        <h3>AriaButton (React Aria)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <AriaButton variant="primary">Primary Button</AriaButton>
          <AriaButton variant="secondary">Secondary Button</AriaButton>
          <AriaButton variant="warning">Warning Button</AriaButton>
          <AriaButton variant="primary" isDisabled>Disabled Button</AriaButton>
        </div>
      </div>
    </div>
  ),
};

export const AccessibilityComparison: Story = {
  parameters: {
    docs: {
      description: {
        story: `
## Accessibility Testing

Try these interactions to see the differences:

1. **Tab Navigation**: Notice the improved focus indicators on AriaButton
2. **Screen Reader**: AriaButton provides better screen reader announcements
3. **Keyboard**: Both support Enter/Space, but AriaButton has better state management
4. **Touch**: AriaButton has optimized touch interactions

**Instructions:**
- Use Tab to navigate between buttons
- Press Enter or Space to activate
- Try using a screen reader if available
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
      <div>
        <h3>Original Button - Accessibility</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Button 
            variant="primary"
            onClick={() => console.log('Original button clicked')}
          >
            Test Keyboard Navigation
          </Button>
          <Button 
            variant="secondary"
            onClick={() => console.log('Original secondary clicked')}
          >
            Test Focus States
          </Button>
        </div>
      </div>
      
      <div>
        <h3>AriaButton - Enhanced Accessibility</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <AriaButton 
            variant="primary"
            onPress={() => console.log('Aria button pressed')}
          >
            Test Keyboard Navigation
          </AriaButton>
          <AriaButton 
            variant="secondary"
            onPress={() => console.log('Aria secondary pressed')}
          >
            Test Focus States
          </AriaButton>
        </div>
      </div>
    </div>
  ),
};

export const InteractionStates: Story = {
  parameters: {
    docs: {
      description: {
        story: `
## Interaction States Comparison

Compare how each button handles different interaction states:

- **Hover**: Move mouse over buttons
- **Focus**: Tab to focus buttons  
- **Press**: Click and hold to see pressed state
- **Disabled**: Compare disabled state behavior
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
      <div>
        <h3>Original Button States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Button variant="primary">Hover me</Button>
          <Button variant="primary">Tab to focus</Button>
          <Button variant="primary">Click and hold</Button>
          <Button variant="primary" disabled>Disabled state</Button>
        </div>
      </div>
      
      <div>
        <h3>AriaButton States (Enhanced)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <AriaButton variant="primary">Hover me</AriaButton>
          <AriaButton variant="primary">Tab to focus</AriaButton>
          <AriaButton variant="primary">Click and hold</AriaButton>
          <AriaButton variant="primary" isDisabled>Disabled state</AriaButton>
        </div>
      </div>
    </div>
  ),
};

export const CodeComparison: Story = {
  parameters: {
    docs: {
      description: {
        story: `
## Code Usage Comparison

### Original Button
\`\`\`tsx
<Button 
  variant="primary"
  size="default"
  disabled={false}
  onClick={(e) => handleClick(e)}
>
  Click me
</Button>
\`\`\`

### AriaButton (React Aria)
\`\`\`tsx
<AriaButton 
  variant="primary"
  size="default"
  isDisabled={false}
  onPress={(e) => handlePress(e)}
>
  Click me
</AriaButton>
\`\`\`

### Key API Differences
- \`onClick\` → \`onPress\` (React Aria event handling)
- \`disabled\` → \`isDisabled\` (React Aria naming convention)
- Enhanced accessibility automatically included
- Better TypeScript support with React Aria types
        `,
      },
    },
  },
  render: () => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>See the documentation above for code examples</p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Button variant="primary">Original Button</Button>
        <AriaButton variant="primary">AriaButton</AriaButton>
      </div>
    </div>
  ),
};
