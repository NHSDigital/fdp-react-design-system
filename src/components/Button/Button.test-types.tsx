import React from 'react';
import { Button } from './Button';

// Test the discriminated union types work correctly
const TestButtonTypes: React.FC = () => {
  return (
    <div>
      {/* Button element - should compile */}
      <Button variant="primary">Button Element</Button>
      <Button variant="secondary" type="submit">Submit Button</Button>
      <Button variant="primary" disabled>Disabled Button</Button>
      <Button variant="primary" onClick={() => console.log('clicked')}>
        Click Me
      </Button>
      
      {/* Link element - should compile */}
      <Button href="/page" variant="primary">Link Button</Button>
      <Button href="/page" variant="secondary" target="_blank" rel="noopener">
        External Link
      </Button>
      <Button href="/page" variant="primary" aria-disabled="true">
        Disabled Link
      </Button>
      <Button href="/page" variant="primary" onClick={() => console.log('link clicked')}>
        Clickable Link
      </Button>
      
      {/* Test full width and sizes */}
      <Button variant="primary" fullWidth>Full Width Button</Button>
      <Button href="/page" variant="primary" fullWidth>Full Width Link</Button>
      <Button variant="primary" size="small">Small Button</Button>
      <Button href="/page" variant="primary" size="large">Large Link</Button>
    </div>
  );
};

export default TestButtonTypes;
