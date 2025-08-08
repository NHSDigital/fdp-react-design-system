import type { Meta, StoryObj } from '@storybook/react';
import { HeaderSSRHydrationTest } from './HeaderSSR.hydration-test';

const meta: Meta<typeof HeaderSSRHydrationTest> = {
  title: 'NHS/Components/Header/HeaderSSR Hydration Test',
  component: HeaderSSRHydrationTest,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
This story demonstrates how the HeaderSSR component behaves during different hydration states:

## Hydration States

1. **SSR State**: Server-side rendered HTML with no CSS - plain styling
2. **HTML State**: Basic HTML loaded in browser, still no CSS  
3. **CSS State**: NHS design system CSS loaded - **NHS blue background appears**
4. **JS State**: Fully hydrated with any interactive JavaScript features

## Key Test Points

- ✅ **Blue background and white text should appear when CSS loads**
- ✅ **Logo should inherit white color via \`fill="currentcolor"\`**
- ✅ **All navigation items visible (no responsive hiding in SSR)**
- ✅ **Fully functional without JavaScript**

## Testing Instructions

1. Use the buttons to switch between hydration states
2. Notice that NHS styling only appears when "CSS Loaded" state is active
3. The component remains fully functional at all states
4. Logo and text color should be white against blue background once CSS loads

This demonstrates that HeaderSSR provides the expected NHS visual identity as soon as the CSS is loaded, regardless of JavaScript hydration status.
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof HeaderSSRHydrationTest>;

export const HydrationDemo: Story = {
  name: 'Hydration States Demo',
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing HeaderSSR behavior during different hydration states. Use the buttons to simulate the progression from server-side render to full hydration.'
      }
    }
  }
};

export const CSSLoadedState: Story = {
  name: 'CSS Loaded State (Expected Result)',
  parameters: {
    docs: {
      description: {
        story: 'This shows how the HeaderSSR should look once CSS is loaded - NHS blue background with white logo and text. This is the minimum acceptable visual state.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div>
        <div style={{ padding: '20px', backgroundColor: '#f0f4f5', fontFamily: 'system-ui, sans-serif' }}>
          <h3>✅ Expected Result: NHS Blue Background with White Text</h3>
          <p>This is how HeaderSSR should appear once CSS is loaded, even before JavaScript hydration.</p>
        </div>
        <Story />
      </div>
    )
  ]
};
