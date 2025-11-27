// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { SpacingUtilities, getSpacingClass } from './SpacingUtilities';

const meta: Meta<typeof SpacingUtilities> = {
  title: 'Utilities/SpacingUtilities',
  component: SpacingUtilities,
  parameters: {
    docs: {
      description: {
        component: `
The SpacingUtilities component provides NHS-compliant spacing utility classes using design tokens.

## Features

- **Static Spacing**: Fixed spacing values that don't change across breakpoints
- **Responsive Spacing**: Spacing that adapts between mobile and tablet/desktop
- **All Directions**: Margin and padding for all sides (top, right, bottom, left)
- **Design Token Based**: Uses NHS FDP design tokens for consistency
- **Debug Mode**: Visual indicators to help understand spacing

## Usage

The utility classes are automatically available once the component is imported:

\`\`\`tsx
import { SpacingUtilities } from '@nhsdigital/fdp-design-system';

// Static spacing
<div className="nhsuk-u-margin-4">Margin on all sides</div>
<div className="nhsuk-u-padding-top-2">Padding only on top</div>

// Responsive spacing (8px mobile → 16px tablet+)
<div className="nhsuk-u-margin-responsive-3">Responsive margin</div>

// Programmatic class generation
<div className={getSpacingClass.margin(4)}>Generated class</div>
\`\`\`

## Spacing Scale

- **0**: 0px
- **1**: 4px  
- **2**: 8px
- **3**: 16px (8px mobile → 16px tablet for responsive)
- **4**: 24px (16px mobile → 24px tablet for responsive)
- **5**: 32px (24px mobile → 32px tablet for responsive)
- **6**: 40px (32px mobile → 40px tablet for responsive)
- **7**: 48px (40px mobile → 48px tablet for responsive)
- **8**: 56px (48px mobile → 56px tablet for responsive)
- **9**: 64px (56px mobile → 64px tablet for responsive)

## Available Classes

### Static Spacing
- \`nhsuk-u-margin-{0-9}\` - All sides
- \`nhsuk-u-margin-{top|right|bottom|left}-{0-9}\` - Specific sides
- \`nhsuk-u-padding-{0-9}\` - All sides  
- \`nhsuk-u-padding-{top|right|bottom|left}-{0-9}\` - Specific sides

### Responsive Spacing
- \`nhsuk-u-margin-responsive-{0-9}\` - All sides
- \`nhsuk-u-margin-{top|right|bottom|left}-responsive-{0-9}\` - Specific sides
- \`nhsuk-u-padding-responsive-{0-9}\` - All sides
- \`nhsuk-u-padding-{top|right|bottom|left}-responsive-{0-9}\` - Specific sides
        `,
      },
    },
  },
  argTypes: {
    debug: {
      control: 'boolean',
      description: 'Enable debug mode to visualize spacing utilities',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component to demonstrate spacing
const SpacingDemo: React.FC<{
  children: React.ReactNode;
  className?: string;
  label: string;
}> = ({ children, className, label }) => (
  <div style={{ marginBottom: '16px' }}>
    <p style={{ margin: '0 0 8px 0', fontWeight: 'bold', fontSize: '14px' }}>
      {label}
    </p>
    <div style={{ border: '1px dashed #ccc', padding: '8px', position: 'relative' }}>
      <div className={className} style={{ background: '#f0f4f8', minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  </div>
);

export const Overview: Story = {
  render: () => (
    <SpacingUtilities>
      <div style={{ maxWidth: '800px' }}>
        <h2>NHS Spacing Utilities Overview</h2>
        <p>This demonstrates the various spacing utilities available in the NHS FDP Design System.</p>
        
        <h3>Static Margin Utilities</h3>
        <SpacingDemo label="nhsuk-u-margin-2 (8px)" className="nhsuk-u-margin-2">
          <span>8px margin on all sides</span>
        </SpacingDemo>
        
        <SpacingDemo label="nhsuk-u-margin-4 (24px)" className="nhsuk-u-margin-4">
          <span>24px margin on all sides</span>
        </SpacingDemo>
        
        <SpacingDemo label="nhsuk-u-margin-top-6 (40px)" className="nhsuk-u-margin-top-6">
          <span>40px margin only on top</span>
        </SpacingDemo>

        <h3>Static Padding Utilities</h3>
        <SpacingDemo label="nhsuk-u-padding-3 (16px)" className="nhsuk-u-padding-3">
          <span>16px padding on all sides</span>
        </SpacingDemo>
        
        <SpacingDemo label="nhsuk-u-padding-5 (32px)" className="nhsuk-u-padding-5">
          <span>32px padding on all sides</span>
        </SpacingDemo>
        
        <SpacingDemo label="nhsuk-u-padding-bottom-4 (24px)" className="nhsuk-u-padding-bottom-4">
          <span>24px padding only on bottom</span>
        </SpacingDemo>
      </div>
    </SpacingUtilities>
  ),
};
