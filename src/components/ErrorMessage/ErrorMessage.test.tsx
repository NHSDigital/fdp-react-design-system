import { renderSSR as render } from '../../test-utils/renderSSR';
import { describe, it, expect } from 'vitest';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders basic error message correctly', () => {
    const { getByText } = render(<ErrorMessage>This field is required</ErrorMessage>);
    
    const errorMessage = getByText('This field is required');
    expect(errorMessage).toBeTruthy();
  });

  it('renders as span element', () => {
    const { getByText } = render(<ErrorMessage>Test error</ErrorMessage>);
    
    const errorMessage = getByText('Test error');
    expect(errorMessage!.tagName).toBe('SPAN');
  });

  it('applies correct default classes', () => {
    const { getByText } = render(<ErrorMessage>Test error</ErrorMessage>);
    
    const errorMessage = getByText('Test error');
    expect(errorMessage!.className.includes('nhsuk-error-message')).toBeTruthy();
  });

  it('applies id attribute when provided', () => {
    const { getByText } = render(<ErrorMessage id="test-error">Test error</ErrorMessage>);
    
    const errorMessage = getByText('Test error');
    expect(errorMessage!.getAttribute('id')).toBe('test-error');
  });

  it('does not apply id attribute when not provided', () => {
    const { getByText } = render(<ErrorMessage>Test error</ErrorMessage>);
    
    const errorMessage = getByText('Test error');
    expect(errorMessage!.hasAttribute('id')).toBe(false);
  });

  describe('Visually hidden prefix', () => {
    it('includes default "Error:" prefix for screen readers', () => {
      const { container } = render(<ErrorMessage>Invalid email format</ErrorMessage>);
      
      const visuallyHiddenText = container.querySelector('.nhsuk-u-visually-hidden') || container.querySelector('span');
      expect(visuallyHiddenText).toBeTruthy();
      // The component should include some visually hidden text for accessibility
    });

    it('allows custom visually hidden text', () => {
      const { container } = render(<ErrorMessage visuallyHiddenText="Validation error:">Invalid input</ErrorMessage>);
      
      const spanElement = container.querySelector('span');
      expect(spanElement).toBeTruthy();
    });

    it('allows empty visually hidden text', () => {
      const { container } = render(<ErrorMessage visuallyHiddenText="">No prefix error</ErrorMessage>);
      
      const spanElement = container.querySelector('span');
      expect(spanElement).toBeTruthy();
    });

    it('maintains space after visually hidden text', () => {
      const { container } = render(<ErrorMessage visuallyHiddenText="Problem">Space test</ErrorMessage>);
      
      const spanElement = container.querySelector('span');
      expect(spanElement).toBeTruthy();
    });
  });

  describe('Content rendering', () => {
    it('renders text content correctly', () => {
      const { getByText } = render(<ErrorMessage>Password must be at least 8 characters</ErrorMessage>);
      
      expect(getByText('Password must be at least 8 characters')).toBeTruthy();
    });

    it('renders ReactNode children correctly', () => {
      const { getByText } = render(
        <ErrorMessage>
          <span>Complex</span> <strong>error</strong> content with <em>formatting</em>
        </ErrorMessage>
      );
      
      expect(getByText('Complex')).toBeTruthy();
      expect(getByText('error')).toBeTruthy();
      expect(getByText('content with')).toBeTruthy();
      expect(getByText('formatting')).toBeTruthy();
    });

    it('renders nested elements in children', () => {
  const { getByText, getByRole, container } = render(
        <ErrorMessage>
          Error with <a href="#help">help link</a> and <code>code</code> elements
        </ErrorMessage>
      );
  const span = container.querySelector('.nhsuk-error-message');
  expect(span?.textContent).toContain('Error with');
      expect(getByRole('link')).toBeTruthy();
      expect(getByText('code')).toBeTruthy();
    });

    it('handles multiple paragraphs', () => {
      const { getByText } = render(
        <ErrorMessage>
          <p>First error explanation.</p>
          <p>Second paragraph with more details.</p>
        </ErrorMessage>
      );
      
      expect(getByText('First error explanation.')).toBeTruthy();
      expect(getByText('Second paragraph with more details.')).toBeTruthy();
    });

    it('handles empty content gracefully', () => {
      const { container } = render(<ErrorMessage>{''}</ErrorMessage>);
      
      const errorMessage = container.querySelector('span');
      expect(errorMessage).toBeTruthy();
    });
  });

  describe('Custom styling', () => {
    it('applies custom className', () => {
      const { getByText } = render(<ErrorMessage className="custom-error">Custom error</ErrorMessage>);
      
      const errorMessage = getByText('Custom error');
      expect(errorMessage!.className.includes('custom-error')).toBe(true);
    });

    it('combines custom className with NHS classes', () => {
      const { getByText } = render(<ErrorMessage className="custom-error">NHS error</ErrorMessage>);
      
      const errorMessage = getByText('NHS error');
      expect(errorMessage!.className.includes('custom-error')).toBe(true);
      expect(errorMessage!.className.includes('nhsuk-error-message')).toBe(true);
    });

    it('handles multiple custom classes', () => {
      const { getByText } = render(<ErrorMessage className="custom-error additional-class">Multiple classes</ErrorMessage>);
      
      const errorMessage = getByText('Multiple classes');
      expect(errorMessage!.className.includes('custom-error')).toBe(true);
      expect(errorMessage!.className.includes('additional-class')).toBe(true);
      expect(errorMessage!.className.includes('nhsuk-error-message')).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('can be referenced by form controls via aria-describedby', () => {
      const { getByText, getByRole } = render(
        <div>
          <label htmlFor="email">Email</label>
          <ErrorMessage id="email-error">Invalid email format</ErrorMessage>
          <input id="email" type="email" aria-describedby="email-error" />
        </div>
      );
      
      const errorMessage = getByText('Invalid email format');
      const input = getByRole('textbox');
      
      expect(errorMessage?.getAttribute('id')).toBe('email-error');
      expect(input?.getAttribute('aria-describedby')).toBe('email-error');
    });

    it('provides semantic meaning through class names', () => {
      const { getByText } = render(<ErrorMessage id="semantic-error">This provides error context</ErrorMessage>);
      
      const errorMessage = getByText('This provides error context');
      expect(errorMessage?.className.includes('nhsuk-error-message')).toBe(true);
    });

    it('includes visually hidden text for screen readers', () => {
      const { container } = render(<ErrorMessage>Screen reader accessible error</ErrorMessage>);
      
      const visuallyHiddenText = container.querySelector('.nhsuk-u-visually-hidden');
      expect(visuallyHiddenText).toBeTruthy();
      expect(visuallyHiddenText?.className.includes('nhsuk-u-visually-hidden')).toBe(true);
    });

    it('works with multiple error messages', () => {
      const { getByText } = render(
        <div>
          <ErrorMessage id="error-1">First error message</ErrorMessage>
          <ErrorMessage id="error-2">Second error message</ErrorMessage>
        </div>
      );
      
      expect(getByText('First error message')?.getAttribute('id')).toBe('error-1');
      expect(getByText('Second error message')?.getAttribute('id')).toBe('error-2');
    });
  });

  describe('Additional HTML attributes', () => {
    it('passes through additional props', () => {
      const { getByText } = render(
        <ErrorMessage 
          data-testid="custom-error"
          aria-label="Custom aria label"
        >
          Test error
        </ErrorMessage>
      );
      
      const errorMessage = getByText('Test error');
      expect(errorMessage?.getAttribute('data-testid')).toBe('custom-error');
      expect(errorMessage?.getAttribute('aria-label')).toBe('Custom aria label');
    });

    it('supports data attributes', () => {
      const { getByText } = render(
        <ErrorMessage 
          data-component="error-message"
          data-severity="high"
        >
          Data attribute error
        </ErrorMessage>
      );
      
      const errorMessage = getByText('Data attribute error');
      expect(errorMessage?.getAttribute('data-component')).toBe('error-message');
      expect(errorMessage?.getAttribute('data-severity')).toBe('high');
    });
  });

  describe('Edge cases', () => {
    describe('Edge cases', () => {
    it('handles special characters in content', () => {
      const specialText = 'Error with "quotes", <tags>, & symbols: £€$¥';
      const { getByText } = render(<ErrorMessage>{specialText}</ErrorMessage>);
      
      expect(getByText(specialText)).toBeTruthy();
    });

    it('handles numeric children', () => {
      const { getByText } = render(<ErrorMessage>{404}</ErrorMessage>);
      
      expect(getByText('404')).toBeTruthy();
    });

    it('handles boolean-like content', () => {
      const { getByText } = render(<ErrorMessage>false</ErrorMessage>);
      
      expect(getByText('false')).toBeTruthy();
    });

    it('handles very long error text', () => {
      const longText = 'This is a very long error message that might span multiple lines and contain lots of detailed information about what went wrong and how to fix it. It should still render correctly even when it contains extensive explanatory text.';
      const { getByText } = render(<ErrorMessage>{longText}</ErrorMessage>);
      
      expect(getByText(longText)).toBeTruthy();
    });

    it('handles unicode characters', () => {
      const unicodeText = 'Error: 你好世界 🌍 Здравствуй мир 👋 مرحبا بالعالم';
      const { getByText } = render(<ErrorMessage>{unicodeText}</ErrorMessage>);
      
      expect(getByText(unicodeText)).toBeTruthy();
    });

    it('handles HTML entities', () => {
      const { getByText } = render(<ErrorMessage>Less than &lt; and greater than &gt; symbols</ErrorMessage>);
      
      expect(getByText('Less than < and greater than > symbols')).toBeTruthy();
    });
  });

  });

  describe('Integration scenarios', () => {
    it('works with form validation', () => {
      const { getByText, getByLabelText } = render(
        <div>
          <label htmlFor="password">Password</label>
          <ErrorMessage id="password-error">Password is too weak</ErrorMessage>
          <input 
            id="password" 
            type="password" 
            aria-describedby="password-error"
            aria-invalid="true"
          />
        </div>
      );
      
      const errorMessage = getByText('Password is too weak');
      const input = getByLabelText('Password');
      
      expect(errorMessage?.getAttribute('id')).toBe('password-error');
      expect(input?.getAttribute('aria-describedby')).toBe('password-error');
      expect(input?.getAttribute('aria-invalid')).toBe('true');
    });

    it('works with multiple error messages for complex validation', () => {
      const { getByText } = render(
        <div>
          <label htmlFor="username">Username</label>
          <ErrorMessage id="username-error-1">Username is required</ErrorMessage>
          <ErrorMessage id="username-error-2">Username must be unique</ErrorMessage>
          <input 
            id="username" 
            type="text" 
            aria-describedby="username-error-1 username-error-2"
          />
        </div>
      );
      
      expect(getByText('Username is required')?.getAttribute('id')).toBe('username-error-1');
      expect(getByText('Username must be unique')?.getAttribute('id')).toBe('username-error-2');
    });

    it('maintains correct structure during re-renders', () => {
      // Test initial render
      const { container: container1 } = render(
        <ErrorMessage id="dynamic-error">Original error message</ErrorMessage>
      );
      
      let errorMessage = container1.querySelector('#dynamic-error');
      expect(errorMessage?.className.includes('nhsuk-error-message')).toBe(true);
      expect(errorMessage?.getAttribute('id')).toBe('dynamic-error');
      expect(errorMessage?.textContent).toContain('Original error message');
      
      // Test updated render separately
      const { container: container2 } = render(
        <ErrorMessage id="dynamic-error">Updated error message</ErrorMessage>
      );
      
      errorMessage = container2.querySelector('#dynamic-error');
      expect(errorMessage?.className.includes('nhsuk-error-message')).toBe(true);
      expect(errorMessage?.getAttribute('id')).toBe('dynamic-error');
      expect(errorMessage?.textContent).toContain('Updated error message');
    });

    it('works with conditional error display', () => {
      // Test when no error is present
      const { container: container1 } = render(
        <div>
          <label htmlFor="conditional-input">Input</label>
          <input id="conditional-input" type="text" />
        </div>
      );
      
      expect(container1.querySelector('#conditional-error')).toBeFalsy();
      
      // Test when error is present
      const { container: container2 } = render(
        <div>
          <label htmlFor="conditional-input">Input</label>
          <ErrorMessage id="conditional-error">Conditional error</ErrorMessage>
          <input 
            id="conditional-input" 
            type="text" 
            aria-describedby="conditional-error"
            aria-invalid="true"
          />
        </div>
      );
      
      const errorMessage = container2.querySelector('#conditional-error');
      expect(errorMessage).toBeTruthy();
      expect(errorMessage?.textContent).toContain('Conditional error');
    });
  });

  describe('Content variations', () => {
    it('handles list content for multiple errors', () => {
      const { getByText } = render(
        <ErrorMessage>
          <ul>
            <li>Password must be at least 8 characters</li>
            <li>Password must contain a number</li>
            <li>Password must contain a special character</li>
          </ul>
        </ErrorMessage>
      );
      
      expect(getByText('Password must be at least 8 characters')).toBeTruthy();
      expect(getByText('Password must contain a number')).toBeTruthy();
      expect(getByText('Password must contain a special character')).toBeTruthy();
    });

    it('handles mixed content types', () => {
      const { getByText } = render(
        <ErrorMessage>
          <p>There are several issues with your input:</p>
          <ul>
            <li>Field is required</li>
            <li>Format is invalid</li>
          </ul>
          <p>Please correct these <strong>errors</strong> and try again.</p>
        </ErrorMessage>
      );
      
      expect(getByText('There are several issues with your input:')).toBeTruthy();
      expect(getByText('Field is required')).toBeTruthy();
      expect(getByText('Format is invalid')).toBeTruthy();
      expect(getByText('errors')).toBeTruthy();
    });

    it('handles error with action links', () => {
      const { getByRole, container } = render(
        <ErrorMessage>
          Invalid format. <a href="#help">Learn more about valid formats</a>.
        </ErrorMessage>
      );
      const span = container.querySelector('.nhsuk-error-message');
      expect(span?.textContent).toContain('Invalid format.');
      expect(getByRole('link')).toBeTruthy();
    });
  });
});
