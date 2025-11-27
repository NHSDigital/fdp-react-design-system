import React from 'react';
import { Button } from './Button';

/**
 * Examples demonstrating various Button usage patterns
 */
export const ButtonExamples: React.FC = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px' }}>
      <h2>Button Examples</h2>
      
      <section style={{ marginBottom: '2rem' }}>
        <h3>Basic Usage</h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <Button variant="primary">
            Continue
          </Button>
          <Button variant="secondary">
            Find out more
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3>All Variants</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary Action</Button>
          <Button variant="login">Login Button</Button>
          <Button variant="warning">Delete Item</Button>
          <div style={{ background: '#005eb8', padding: '0.5rem', borderRadius: '4px' }}>
            <Button variant="reverse">Reverse Button</Button>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3>Sizes</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="primary" size="small">Small</Button>
          <Button variant="primary" size="default">Default</Button>
          <Button variant="primary" size="large">Large</Button>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3>States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
          <Button 
            variant="primary"
            onClick={() => alert('Button clicked!')}
          >
            Interactive Button
          </Button>
          <Button variant="primary" disabled>
            Disabled Button
          </Button>
          <Button variant="primary" fullWidth>
            Full Width Button
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3>Advanced Usage</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
          <Button 
            variant="primary"
            onClick={() => console.log('Form submitted')}
            type="submit"
            aria-label="Submit the form"
          >
            Submit Form
          </Button>
          
          <Button 
            variant="warning"
            onClick={() => {
              if (confirm('Are you sure you want to delete this item?')) {
                console.log('Item deleted');
              }
            }}
          >
            Delete with Confirmation
          </Button>
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
          <Button 
            variant="primary"
            onClick={() => console.log('First button')}
          >
            First Button
          </Button>
          <Button 
            variant="secondary"
            onClick={() => console.log('Second button')}
          >
            Second Button
          </Button>
          <Button 
            variant="primary"
            disabled
          >
            Disabled (Skipped)
          </Button>
          <Button 
            variant="warning"
            onClick={() => console.log('Last button')}
          >
            Last Button
          </Button>
        </div>
      </section>
    </div>
  );
};
