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
import { SpacingUtilities } from '@fergusbisset/nhs-fdp-design-system';

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

export const ResponsiveSpacing: Story = {
  render: () => (
    <SpacingUtilities>
      <div style={{ maxWidth: '800px' }}>
        <h2>Responsive Spacing</h2>
        <p>These utilities change size between mobile and tablet/desktop breakpoints.</p>
        
        <SpacingDemo label="nhsuk-u-margin-responsive-3 (8px mobile → 16px tablet+)" className="nhsuk-u-margin-responsive-3">
          <span>Responsive margin - resize window to see changes</span>
        </SpacingDemo>
        
        <SpacingDemo label="nhsuk-u-margin-responsive-4 (16px mobile → 24px tablet+)" className="nhsuk-u-margin-responsive-4">
          <span>Responsive margin - larger scale</span>
        </SpacingDemo>
        
        <SpacingDemo label="nhsuk-u-padding-responsive-5 (24px mobile → 32px tablet+)" className="nhsuk-u-padding-responsive-5">
          <span>Responsive padding</span>
        </SpacingDemo>
        
        <SpacingDemo label="nhsuk-u-padding-top-responsive-6 (32px mobile → 40px tablet+)" className="nhsuk-u-padding-top-responsive-6">
          <span>Responsive top padding only</span>
        </SpacingDemo>
      </div>
    </SpacingUtilities>
  ),
};

export const SpacingScale: Story = {
  render: () => (
    <SpacingUtilities>
      <div style={{ maxWidth: '800px' }}>
        <h2>Complete Spacing Scale</h2>
        <p>Visual demonstration of all spacing values from 0-9.</p>
        
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((size) => {
          const spacingValues = {
            0: '0px',
            1: '4px',
            2: '8px', 
            3: '16px',
            4: '24px',
            5: '32px',
            6: '40px',
            7: '48px',
            8: '56px',
            9: '64px'
          };
          
          return (
            <SpacingDemo 
              key={size}
              label={`nhsuk-u-padding-${size} (${spacingValues[size as keyof typeof spacingValues]})`} 
              className={`nhsuk-u-padding-${size}`}
            >
              <span>Spacing scale {size}</span>
            </SpacingDemo>
          );
        })}
      </div>
    </SpacingUtilities>
  ),
};

export const DirectionalSpacing: Story = {
  render: () => (
    <SpacingUtilities>
      <div style={{ maxWidth: '800px' }}>
        <h2>Directional Spacing</h2>
        <p>Spacing applied to specific sides only.</p>
        
        <h3>Margin Directions</h3>
        <SpacingDemo label="nhsuk-u-margin-top-4" className="nhsuk-u-margin-top-4">
          <span>Top margin only</span>
        </SpacingDemo>
        
        <SpacingDemo label="nhsuk-u-margin-right-4" className="nhsuk-u-margin-right-4">
          <span>Right margin only</span>
        </SpacingDemo>
        
        <SpacingDemo label="nhsuk-u-margin-bottom-4" className="nhsuk-u-margin-bottom-4">
          <span>Bottom margin only</span>
        </SpacingDemo>
        
        <SpacingDemo label="nhsuk-u-margin-left-4" className="nhsuk-u-margin-left-4">
          <span>Left margin only</span>
        </SpacingDemo>

        <h3>Padding Directions</h3>
        <SpacingDemo label="nhsuk-u-padding-top-4" className="nhsuk-u-padding-top-4">
          <span>Top padding only</span>
        </SpacingDemo>
        
        <SpacingDemo label="nhsuk-u-padding-right-4" className="nhsuk-u-padding-right-4">
          <span>Right padding only</span>
        </SpacingDemo>
        
        <SpacingDemo label="nhsuk-u-padding-bottom-4" className="nhsuk-u-padding-bottom-4">
          <span>Bottom padding only</span>
        </SpacingDemo>
        
        <SpacingDemo label="nhsuk-u-padding-left-4" className="nhsuk-u-padding-left-4">
          <span>Left padding only</span>
        </SpacingDemo>
      </div>
    </SpacingUtilities>
  ),
};

export const ProgrammaticUsage: Story = {
  render: () => (
    <SpacingUtilities>
      <div style={{ maxWidth: '800px' }}>
        <h2>Programmatic Class Generation</h2>
        <p>Using the helper functions to generate spacing classes.</p>
        
        <SpacingDemo 
          label={`getSpacingClass.margin(3) → "${getSpacingClass.margin(3)}"`} 
          className={getSpacingClass.margin(3)}
        >
          <span>Generated margin class</span>
        </SpacingDemo>
        
        <SpacingDemo 
          label={`getSpacingClass.paddingTop(5) → "${getSpacingClass.paddingTop(5)}"`} 
          className={getSpacingClass.paddingTop(5)}
        >
          <span>Generated padding-top class</span>
        </SpacingDemo>
        
        <SpacingDemo 
          label={`getSpacingClass.marginResponsive(4) → "${getSpacingClass.marginResponsive(4)}"`} 
          className={getSpacingClass.marginResponsive(4)}
        >
          <span>Generated responsive margin class</span>
        </SpacingDemo>
        
        <SpacingDemo 
          label={`getSpacingClass.paddingBottomResponsive(6) → "${getSpacingClass.paddingBottomResponsive(6)}"`} 
          className={getSpacingClass.paddingBottomResponsive(6)}
        >
          <span>Generated responsive padding-bottom class</span>
        </SpacingDemo>
      </div>
    </SpacingUtilities>
  ),
};

export const DebugMode: Story = {
  args: {
    debug: true,
  },
  render: (args) => (
    <SpacingUtilities {...args}>
      <div style={{ maxWidth: '800px' }}>
        <h2>Debug Mode</h2>
        <p>Debug mode shows visual indicators for spacing utilities to help with development.</p>
        
        <SpacingDemo label="nhsuk-u-margin-4 (with debug indicators)" className="nhsuk-u-margin-4">
          <span>Margin with debug overlay</span>
        </SpacingDemo>
        
        <SpacingDemo label="nhsuk-u-padding-5 (with debug indicators)" className="nhsuk-u-padding-5">
          <span>Padding with debug overlay</span>
        </SpacingDemo>
        
        <SpacingDemo label="Multiple classes: nhsuk-u-margin-top-3 nhsuk-u-padding-4" className="nhsuk-u-margin-top-3 nhsuk-u-padding-4">
          <span>Multiple spacing utilities</span>
        </SpacingDemo>
      </div>
    </SpacingUtilities>
  ),
};

export const RealWorldExample: Story = {
  render: () => (
    <SpacingUtilities>
      <div style={{ maxWidth: '800px' }}>
        <h2>Real-World Usage Example</h2>
        <p>How spacing utilities might be used in a typical NHS form or content layout.</p>
        
        <div className="nhsuk-u-margin-bottom-responsive-6">
          <h3 className="nhsuk-u-margin-bottom-3">Patient Information Form</h3>
          
          <div className="nhsuk-u-margin-bottom-4">
            <label className="nhsuk-u-margin-bottom-2" style={{ display: 'block', fontWeight: 'bold' }}>
              Full Name
            </label>
            <input 
              type="text" 
              className="nhsuk-u-padding-2" 
              style={{ border: '2px solid #d1d5db', width: '100%', maxWidth: '400px' }}
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="nhsuk-u-margin-bottom-4">
            <label className="nhsuk-u-margin-bottom-2" style={{ display: 'block', fontWeight: 'bold' }}>
              NHS Number
            </label>
            <input 
              type="text" 
              className="nhsuk-u-padding-2" 
              style={{ border: '2px solid #d1d5db', width: '100%', maxWidth: '300px' }}
              placeholder="123 456 7890"
            />
            <div className="nhsuk-u-margin-top-1" style={{ fontSize: '14px', color: '#626a73' }}>
              This is a 10-digit number, like 485 777 3456
            </div>
          </div>
          
          <div className="nhsuk-u-margin-bottom-responsive-5">
            <h4 className="nhsuk-u-margin-bottom-2">Emergency Contact</h4>
            
            <div className="nhsuk-u-margin-bottom-3">
              <label className="nhsuk-u-margin-bottom-1" style={{ display: 'block', fontWeight: 'bold' }}>
                Contact Name
              </label>
              <input 
                type="text" 
                className="nhsuk-u-padding-2" 
                style={{ border: '2px solid #d1d5db', width: '100%', maxWidth: '400px' }}
              />
            </div>
            
            <div className="nhsuk-u-margin-bottom-3">
              <label className="nhsuk-u-margin-bottom-1" style={{ display: 'block', fontWeight: 'bold' }}>
                Phone Number
              </label>
              <input 
                type="tel" 
                className="nhsuk-u-padding-2" 
                style={{ border: '2px solid #d1d5db', width: '100%', maxWidth: '300px' }}
              />
            </div>
          </div>
          
          <button 
            className="nhsuk-u-padding-3 nhsuk-u-margin-top-4"
            style={{ 
              background: '#005eb8', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              fontWeight: 'bold'
            }}
          >
            Submit Form
          </button>
        </div>
      </div>
    </SpacingUtilities>
  ),
};
