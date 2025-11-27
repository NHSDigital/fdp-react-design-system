// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { WidthUtilities, getWidthClass, WIDTH_FRACTIONS } from './WidthUtilities';

const meta: Meta<typeof WidthUtilities> = {
  title: 'Utilities/WidthUtilities',
  component: WidthUtilities,
  parameters: {
    docs: {
      description: {
        component: `
The WidthUtilities component provides NHS-compliant width utility classes independent of the grid system.

## Features

- **Fractional Widths**: Standard fractions (full, three-quarters, two-thirds, one-half, one-third, one-quarter)
- **Responsive Behavior**: Full width on mobile, fractional width on tablet+
- **Tablet-Only Variants**: Width constraints only apply from tablet breakpoint
- **Reading Width**: Optimal line length for text content
- **Grid Independent**: Can be used on any element, not just grid columns

## Usage

\`\`\`tsx
import { WidthUtilities } from '@nhsdigital/nhs-fdp-design-system';

// Static widths (responsive by default)
<input className="nhsuk-u-width-one-half" />
<div className="nhsuk-u-width-two-thirds">Content</div>

// Tablet-only constraints
<input className="nhsuk-u-width-one-third-tablet" />

// Reading width for text
<div className="nhsuk-u-reading-width">
  Long text content that needs optimal line length...
</div>

// Programmatic usage
<div className={getWidthClass.width('one-half')}>Half width</div>
\`\`\`

## Available Widths

- **Full**: 100%
- **Three-quarters**: 75% (tablet+), 100% (mobile)
- **Two-thirds**: 66.67% (tablet+), 100% (mobile)
- **One-half**: 50% (tablet+), 100% (mobile)
- **One-third**: 33.33% (tablet+), 100% (mobile)
- **One-quarter**: 25% (tablet+), 100% (mobile)

## Width Classes

### Standard (responsive)
- \`nhsuk-u-width-{fraction}\` - Full width mobile, fractional tablet+

### Tablet-only
- \`nhsuk-u-width-{fraction}-tablet\` - Full width mobile, fractional tablet+

### Special
- \`nhsuk-u-reading-width\` - Optimal reading line length (30em)
        `,
      },
    },
  },
  argTypes: {
    debug: {
      control: 'boolean',
      description: 'Enable debug mode to visualize width utilities',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for demonstrating widths
const WidthDemo: React.FC<{
  className: string;
  label: string;
  description?: string;
}> = ({ className, label, description }) => (
  <div style={{ marginBottom: '24px' }}>
    <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold' }}>
      {label}
    </h4>
    {description && (
      <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#626a73' }}>
        {description}
      </p>
    )}
    <div 
      className={className}
      style={{ 
        background: '#005eb8', 
        color: 'white', 
        padding: '12px', 
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold'
      }}
    >
      {className}
    </div>
  </div>
);

export const Overview: Story = {
  render: () => (
    <WidthUtilities>
      <div style={{ maxWidth: '800px' }}>
        <h2>Width Utilities Overview</h2>
        <p>These utilities control element width independent of the grid system.</p>
        
        <WidthDemo 
          className="nhsuk-u-width-full" 
          label="Full Width"
          description="Always 100% width"
        />
        
        <WidthDemo 
          className="nhsuk-u-width-three-quarters" 
          label="Three Quarters"
          description="75% on tablet+, 100% on mobile"
        />
        
        <WidthDemo 
          className="nhsuk-u-width-two-thirds" 
          label="Two Thirds"
          description="66.67% on tablet+, 100% on mobile"
        />
        
        <WidthDemo 
          className="nhsuk-u-width-one-half" 
          label="One Half"
          description="50% on tablet+, 100% on mobile"
        />
        
        <WidthDemo 
          className="nhsuk-u-width-one-third" 
          label="One Third"
          description="33.33% on tablet+, 100% on mobile"
        />
        
        <WidthDemo 
          className="nhsuk-u-width-one-quarter" 
          label="One Quarter"
          description="25% on tablet+, 100% on mobile"
        />
      </div>
    </WidthUtilities>
  ),
};
