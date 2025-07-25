import React from 'react';
import { AriaButton } from './AriaButton';

/**
 * Examples demonstrating various AriaButton usage patterns
 */
export const AriaButtonExamples: React.FC = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px' }}>
      <h2>AriaButton Examples</h2>
      
      <section style={{ marginBottom: '2rem' }}>
        <h3>Basic Usage</h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <AriaButton variant="primary">
            Continue
          </AriaButton>
          <AriaButton variant="secondary">
            Find out more
          </AriaButton>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3>All Variants</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
          <AriaButton variant="primary">Primary Action</AriaButton>
          <AriaButton variant="secondary">Secondary Action</AriaButton>
          <AriaButton variant="login">Login Button</AriaButton>
          <AriaButton variant="warning">Delete Item</AriaButton>
          <div style={{ background: '#005eb8', padding: '0.5rem', borderRadius: '4px' }}>
            <AriaButton variant="reverse">Reverse Button</AriaButton>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3>Sizes</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <AriaButton variant="primary" size="small">Small</AriaButton>
          <AriaButton variant="primary" size="default">Default</AriaButton>
          <AriaButton variant="primary" size="large">Large</AriaButton>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3>States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
          <AriaButton 
            variant="primary"
            onPress={() => alert('Button pressed!')}
          >
            Interactive Button
          </AriaButton>
          <AriaButton variant="primary" isDisabled>
            Disabled Button
          </AriaButton>
          <AriaButton variant="primary" fullWidth>
            Full Width Button
          </AriaButton>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3>Advanced Usage</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
          <AriaButton 
            variant="primary"
            onPress={() => console.log('Form submitted')}
            type="submit"
            aria-label="Submit the form"
          >
            Submit Form
          </AriaButton>
          
          <AriaButton 
            variant="warning"
            onPress={() => {
              if (confirm('Are you sure you want to delete this item?')) {
                console.log('Item deleted');
              }
            }}
          >
            Delete with Confirmation
          </AriaButton>
        </div>
      </section>

      <section>
        <h3>Accessibility Features</h3>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          Try these interactions to experience the enhanced accessibility:
        </p>
        <ul style={{ marginBottom: '1rem', color: '#666' }}>
          <li>Use <kbd>Tab</kbd> to navigate between buttons</li>
          <li>Use <kbd>Enter</kbd> or <kbd>Space</kbd> to activate buttons</li>
          <li>Notice the focus indicators when using keyboard navigation</li>
          <li>Try using a screen reader for announcements</li>
        </ul>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <AriaButton 
            variant="primary"
            onPress={() => console.log('First button')}
          >
            First Button
          </AriaButton>
          <AriaButton 
            variant="secondary"
            onPress={() => console.log('Second button')}
          >
            Second Button
          </AriaButton>
          <AriaButton 
            variant="primary"
            isDisabled
          >
            Disabled (Skipped)
          </AriaButton>
          <AriaButton 
            variant="warning"
            onPress={() => console.log('Last button')}
          >
            Last Button
          </AriaButton>
        </div>
      </section>
    </div>
  );
};
