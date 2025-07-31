import type { Meta, StoryObj } from '@storybook/react';
import { Checkboxes } from './Checkboxes';
import { CheckboxItem } from './Checkboxes.types';

const meta: Meta<typeof Checkboxes> = {
  title: 'NHS/Components/Checkboxes',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Comparison between runtime styled checkboxes and CSS-based checkboxes',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems: CheckboxItem[] = [
  { value: 'email', text: 'Email', hint: 'We\'ll send you updates by email' },
  { value: 'phone', text: 'Phone', hint: 'We\'ll call you during business hours' },
  { 
    value: 'text', 
    text: 'Text message', 
    conditional: (
      <div className="nhs-form-group">
        <label className="nhs-label" htmlFor="mobile">
          Mobile phone number
        </label>
        <input className="nhs-input nhs-u-width-two-thirds" id="mobile" name="mobile" type="text" />
      </div>
    )
  },
];

export const RuntimeStyled: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '24px', color: '#005eb8' }}>Runtime Styled (Current Approach)</h2>
      <Checkboxes
        name="contact-runtime"
        legend="How would you like to be contacted?"
        hint="Select all options that apply to you"
        items={mockItems}
      />
    </div>
  ),
};

export const CSSBased: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '24px', color: '#005eb8' }}>CSS-Based (New Approach)</h2>
      <Checkboxes
        name="contact-css"
        legend="How would you like to be contacted?"
        hint="Select all options that apply to you"
        items={mockItems}
      />
    </div>
  ),
};

export const SideBySideComparison: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '1200px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', color: '#005eb8', fontSize: '22px' }}>Runtime Styled</h3>
        <div style={{ 
          padding: '16px', 
          border: '2px solid #f0f4f5', 
          borderRadius: '4px',
          marginBottom: '16px'
        }}>
          <Checkboxes
            name="contact-runtime-compare"
            legend="How would you like to be contacted?"
            hint="Select all options that apply to you"
            items={mockItems}
            small={false}
          />
        </div>
        <div style={{ fontSize: '14px', color: '#4c6272' }}>
          <strong>Pros:</strong>
          <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
            <li>Dynamic theming at runtime</li>
            <li>Full TypeScript support</li>
            <li>Easy conditional logic</li>
          </ul>
          <strong style={{ marginTop: '12px', display: 'block' }}>Cons:</strong>
          <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
            <li>Larger bundle size</li>
            <li>Runtime performance overhead</li>
            <li>Complex CSS injection</li>
          </ul>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '16px', color: '#005eb8', fontSize: '22px' }}>CSS-Based</h3>
        <div style={{ 
          padding: '16px', 
          border: '2px solid #e8f7ff', 
          borderRadius: '4px',
          marginBottom: '16px'
        }}>
          <Checkboxes
            name="contact-css-compare"
            legend="How would you like to be contacted?"
            hint="Select all options that apply to you"
            items={mockItems}
            small={false}
          />
        </div>
        <div style={{ fontSize: '14px', color: '#4c6272' }}>
          <strong>Pros:</strong>
          <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
            <li>Smaller bundle size</li>
            <li>Better performance</li>
            <li>Standard CSS approach</li>
            <li>Better DevTools experience</li>
          </ul>
          <strong style={{ marginTop: '12px', display: 'block' }}>Cons:</strong>
          <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
            <li>Less dynamic flexibility</li>
            <li>Build-time compilation needed</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

export const PerformanceTest: Story = {
  render: () => {
    const manyItems: CheckboxItem[] = Array.from({ length: 20 }, (_, i) => ({
      value: `option-${i + 1}`,
      text: `Option ${i + 1}`,
      hint: i % 3 === 0 ? `This is hint text for option ${i + 1}` : undefined,
    }));

    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
        <div>
          <h3 style={{ marginBottom: '16px', color: '#005eb8' }}>Runtime Styled (20 items)</h3>
          <Checkboxes
            name="performance-runtime"
            legend="Performance test with many items"
            items={manyItems}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: '16px', color: '#005eb8' }}>CSS-Based (20 items)</h3>
          <Checkboxes
            name="performance-css"
            legend="Performance test with many items"
            items={manyItems}
          />
        </div>
      </div>
    );
  },
};
