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
import { WidthUtilities } from '@fergusbisset/nhs-fdp-design-system';

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

export const TabletOnlyWidths: Story = {
  render: () => (
    <WidthUtilities>
      <div style={{ maxWidth: '800px' }}>
        <h2>Tablet-Only Width Constraints</h2>
        <p>These utilities only apply width constraints from tablet breakpoint and above.</p>
        
        <WidthDemo 
          className="nhsuk-u-width-two-thirds-tablet" 
          label="Two Thirds (Tablet Only)"
          description="100% on mobile, 66.67% from tablet+"
        />
        
        <WidthDemo 
          className="nhsuk-u-width-one-half-tablet" 
          label="One Half (Tablet Only)"
          description="100% on mobile, 50% from tablet+"
        />
        
        <WidthDemo 
          className="nhsuk-u-width-one-third-tablet" 
          label="One Third (Tablet Only)"
          description="100% on mobile, 33.33% from tablet+"
        />
      </div>
    </WidthUtilities>
  ),
};

export const FormInputWidths: Story = {
  render: () => (
    <WidthUtilities>
      <div style={{ maxWidth: '600px' }}>
        <h2>Form Input Width Examples</h2>
        <p>Common patterns for constraining form input widths based on expected content length.</p>
        
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            NHS Number (10 digits)
          </label>
          <input 
            type="text" 
            className="nhsuk-u-width-one-third" 
            placeholder="123 456 7890"
            style={{ 
              padding: '8px 12px', 
              border: '2px solid #d1d5db', 
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#626a73' }}>
            Using <code>nhsuk-u-width-one-third</code>
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Date of Birth
          </label>
          <input 
            type="date" 
            className="nhsuk-u-width-one-quarter" 
            style={{ 
              padding: '8px 12px', 
              border: '2px solid #d1d5db', 
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#626a73' }}>
            Using <code>nhsuk-u-width-one-quarter</code>
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Full Name
          </label>
          <input 
            type="text" 
            className="nhsuk-u-width-two-thirds" 
            placeholder="Enter your full name"
            style={{ 
              padding: '8px 12px', 
              border: '2px solid #d1d5db', 
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#626a73' }}>
            Using <code>nhsuk-u-width-two-thirds</code>
          </p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Comments or Additional Information
          </label>
          <textarea 
            className="nhsuk-u-width-full" 
            rows={4}
            placeholder="Please provide any additional information..."
            style={{ 
              padding: '8px 12px', 
              border: '2px solid #d1d5db', 
              borderRadius: '4px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#626a73' }}>
            Using <code>nhsuk-u-width-full</code>
          </p>
        </div>
      </div>
    </WidthUtilities>
  ),
};

export const ReadingWidth: Story = {
  render: () => (
    <WidthUtilities>
      <div style={{ maxWidth: '1000px' }}>
        <h2>Reading Width Utility</h2>
        <p>The reading width utility constrains text to an optimal line length for readability.</p>
        
        <div style={{ marginBottom: '32px' }}>
          <h3>Without Reading Width (Hard to Read)</h3>
          <div style={{ background: '#f8f9fa', padding: '16px', border: '1px solid #e9ecef' }}>
            <p style={{ margin: 0 }}>
              This paragraph spans the full width of its container, which can make it difficult to read when the container is very wide. Long lines of text require more eye movement and can cause readers to lose their place when moving from the end of one line to the beginning of the next. This is particularly problematic on large screens where containers can become extremely wide.
            </p>
          </div>
        </div>

        <div>
          <h3>With Reading Width (Optimal Readability)</h3>
          <div style={{ background: '#f8f9fa', padding: '16px', border: '1px solid #e9ecef' }}>
            <p className="nhsuk-u-reading-width" style={{ margin: 0 }}>
              This paragraph uses the reading width utility (nhsuk-u-reading-width) to constrain the line length to approximately 30em, which provides optimal readability. The text flows naturally and is easy to follow, regardless of the container width. This is the recommended approach for body text content.
            </p>
          </div>
          <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#626a73' }}>
            Using <code>nhsuk-u-reading-width</code> (max-width: 30em)
          </p>
        </div>

        <div style={{ marginTop: '32px' }}>
          <h3>Multiple Paragraphs with Reading Width</h3>
          <div style={{ background: '#f8f9fa', padding: '16px', border: '1px solid #e9ecef' }}>
            <div className="nhsuk-u-reading-width">
              <p>The reading width utility is particularly useful for articles, blog posts, and other long-form content where readability is paramount.</p>
              
              <p>It can be applied to individual paragraphs or to a container that holds multiple paragraphs, ensuring consistent line lengths throughout your content.</p>
              
              <p>This makes it easier for users to consume information, especially important in healthcare contexts where clear communication is critical.</p>
            </div>
          </div>
        </div>
      </div>
    </WidthUtilities>
  ),
};

export const ProgrammaticUsage: Story = {
  render: () => (
    <WidthUtilities>
      <div style={{ maxWidth: '800px' }}>
        <h2>Programmatic Class Generation</h2>
        <p>Using helper functions to generate width classes dynamically.</p>
        
        {WIDTH_FRACTIONS.map((fraction) => (
          <WidthDemo 
            key={fraction}
            className={getWidthClass.width(fraction)}
            label={`getWidthClass.width('${fraction}')`}
            description={`Generates: ${getWidthClass.width(fraction)}`}
          />
        ))}
        
        <h3>Tablet-Only Variants</h3>
        
        <WidthDemo 
          className={getWidthClass.widthTablet('one-half')}
          label={`getWidthClass.widthTablet('one-half')`}
          description={`Generates: ${getWidthClass.widthTablet('one-half')}`}
        />
        
        <WidthDemo 
          className={getWidthClass.widthTablet('two-thirds')}
          label={`getWidthClass.widthTablet('two-thirds')`}
          description={`Generates: ${getWidthClass.widthTablet('two-thirds')}`}
        />
      </div>
    </WidthUtilities>
  ),
};

export const DebugMode: Story = {
  args: {
    debug: true,
  },
  render: (args) => (
    <WidthUtilities {...args}>
      <div style={{ maxWidth: '800px' }}>
        <h2>Debug Mode</h2>
        <p>Debug mode shows visual indicators for width utilities to help with development.</p>
        
        <WidthDemo 
          className="nhsuk-u-width-one-half" 
          label="Half Width (with debug indicators)"
          description="Shows outline and class name overlay"
        />
        
        <WidthDemo 
          className="nhsuk-u-width-two-thirds" 
          label="Two Thirds Width (with debug indicators)"
          description="Resize window to see responsive behavior"
        />
        
        <div className="nhsuk-u-reading-width" style={{ background: '#f8f9fa', padding: '16px', marginTop: '16px' }}>
          <p style={{ margin: 0 }}>
            This text uses the reading width utility and shows the special orange debug styling.
          </p>
        </div>
      </div>
    </WidthUtilities>
  ),
};

export const RealWorldExample: Story = {
  render: () => (
    <WidthUtilities>
      <div style={{ maxWidth: '800px' }}>
        <h2>Real-World Usage Example</h2>
        <p>A typical patient registration form showing various width utilities in context.</p>
        
        <form style={{ background: '#f8f9fa', padding: '24px', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0, marginBottom: '24px' }}>Patient Registration</h3>
          
          <div style={{ display: 'grid', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Title
              </label>
              <select 
                className="nhsuk-u-width-one-quarter" 
                style={{ padding: '8px 12px', border: '2px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
              >
                <option>Mr</option>
                <option>Mrs</option>
                <option>Ms</option>
                <option>Dr</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Full Name
              </label>
              <input 
                type="text" 
                className="nhsuk-u-width-two-thirds" 
                placeholder="Enter your full name"
                style={{ padding: '8px 12px', border: '2px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
              />
            </div>

            <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr 1fr' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Date of Birth
                </label>
                <input 
                  type="date" 
                  className="nhsuk-u-width-full" 
                  style={{ padding: '8px 12px', border: '2px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  NHS Number
                </label>
                <input 
                  type="text" 
                  className="nhsuk-u-width-full" 
                  placeholder="123 456 7890"
                  style={{ padding: '8px 12px', border: '2px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Phone Number
              </label>
              <input 
                type="tel" 
                className="nhsuk-u-width-one-half" 
                placeholder="07123 456789"
                style={{ padding: '8px 12px', border: '2px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Email Address
              </label>
              <input 
                type="email" 
                className="nhsuk-u-width-two-thirds" 
                placeholder="your.email@example.com"
                style={{ padding: '8px 12px', border: '2px solid #d1d5db', borderRadius: '4px', fontSize: '16px' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Address
              </label>
              <textarea 
                className="nhsuk-u-width-three-quarters" 
                rows={3}
                placeholder="Enter your full address"
                style={{ padding: '8px 12px', border: '2px solid #d1d5db', borderRadius: '4px', fontSize: '16px', resize: 'vertical' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Additional Information
              </label>
              <div className="nhsuk-u-reading-width">
                <textarea 
                  className="nhsuk-u-width-full" 
                  rows={4}
                  placeholder="Any additional medical information, allergies, or special requirements..."
                  style={{ padding: '8px 12px', border: '2px solid #d1d5db', borderRadius: '4px', fontSize: '16px', resize: 'vertical' }}
                />
                <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#626a73' }}>
                  This field is wrapped in a reading-width container for optimal readability of longer text.
                </p>
              </div>
            </div>
          </div>

          <button 
            type="submit"
            style={{ 
              marginTop: '24px',
              background: '#005eb8', 
              color: 'white', 
              border: 'none', 
              padding: '12px 24px', 
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Submit Registration
          </button>
        </form>
      </div>
    </WidthUtilities>
  ),
};
