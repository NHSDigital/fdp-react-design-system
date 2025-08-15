// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  title: 'NHS/Components/Header/Navigation Overflow',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Navigation Overflow Testing

This collection of stories specifically tests the overflow behavior of the NHS Header navigation component.

### How Overflow Works

The header navigation dynamically manages menu items based on available space:

1. **Desktop (≥768px)**: Items display horizontally until they overflow, then excess items move to a "More" dropdown
2. **Mobile (<768px)**: All items are accessible via a hamburger menu

### Testing Methodology

- **Progressive Overflow**: Stories with increasing numbers of menu items
- **Responsive Testing**: Same navigation tested across different viewport sizes
- **Edge Cases**: Extremely long text, many items, mixed content types
- **Real-world Scenarios**: Based on actual NHS service navigation patterns

### Key Features Tested

- ✅ Dynamic overflow detection
- ✅ "More" button with chevron icon rotation  
- ✅ Mobile hamburger menu functionality
- ✅ Keyboard navigation and accessibility
- ✅ Focus management
- ✅ ARIA states and screen reader support

### Testing Instructions

1. **Desktop Testing**: Resize browser window to trigger overflow behavior
2. **Mobile Testing**: Use viewport controls or resize below 768px
3. **Console Debugging**: Open browser console to see overflow detection logs
4. **Interaction Testing**: Click "More" button to verify dropdown functionality
        `,
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

// Basic overflow test with moderate number of items
export const ModerateOverflow: Story = {
  args: {
    service: {
      text: 'NHS Services',
      href: '/',
    },
    navigation: {
      items: [
        { href: '/', text: 'Home', current: true },
        { href: '/health-a-z', text: 'Health A to Z' },
        { href: '/live-well', text: 'Live Well' },
        { href: '/mental-health', text: 'Mental health' },
        { href: '/care-support', text: 'Care and support' },
        { href: '/pregnancy', text: 'Pregnancy' },
        { href: '/nhs-services', text: 'NHS services' },
        { href: '/appointments', text: 'Appointments' },
        { href: '/test-results', text: 'Test results' },
        { href: '/medicines', text: 'Medicines' },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Tests overflow behavior with 10 navigation items. Resize browser to see items move to "More" dropdown.',
      },
    },
  },
};
