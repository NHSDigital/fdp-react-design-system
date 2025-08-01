import { render, screen } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders basic error message correctly', () => {
    render(<ErrorMessage>This field is required</ErrorMessage>);
    
    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders as span element', () => {
    render(<ErrorMessage>Test error</ErrorMessage>);
    
    const errorMessage = screen.getByText('Test error');
    expect(errorMessage.tagName).toBe('SPAN');
  });

  it('applies correct default classes', () => {
    render(<ErrorMessage>Test error</ErrorMessage>);
    
    const errorMessage = screen.getByText('Test error');
    expect(errorMessage).toHaveClass('nhsuk-error-message');
  });

  it('applies id attribute when provided', () => {
    render(<ErrorMessage id="test-error">Test error</ErrorMessage>);
    
    const errorMessage = screen.getByText('Test error');
    expect(errorMessage).toHaveAttribute('id', 'test-error');
  });

  it('does not apply id attribute when not provided', () => {
    render(<ErrorMessage>Test error</ErrorMessage>);
    
    const errorMessage = screen.getByText('Test error');
    expect(errorMessage).not.toHaveAttribute('id');
  });

  describe('Visually hidden prefix', () => {
    it('includes default "Error:" prefix for screen readers', () => {
      render(<ErrorMessage>Invalid email format</ErrorMessage>);
      
      const visuallyHiddenText = document.querySelector('.nhsuk-u-visually-hidden');
      expect(visuallyHiddenText).toBeInTheDocument();
      expect(visuallyHiddenText).toHaveTextContent('Error:');
    });

    it('allows custom visually hidden text', () => {
      render(<ErrorMessage visuallyHiddenText="Validation error:">Invalid input</ErrorMessage>);
      
      const visuallyHiddenText = document.querySelector('.nhsuk-u-visually-hidden');
      expect(visuallyHiddenText).toHaveTextContent('Validation error:');
    });

    it('allows empty visually hidden text', () => {
      render(<ErrorMessage visuallyHiddenText="">No prefix error</ErrorMessage>);
      
      const visuallyHiddenText = document.querySelector('.nhsuk-u-visually-hidden');
      expect(visuallyHiddenText).toHaveTextContent('');
    });

    it('maintains space after visually hidden text', () => {
      render(<ErrorMessage visuallyHiddenText="Problem">Space test</ErrorMessage>);
      
      const visuallyHiddenText = document.querySelector('.nhsuk-u-visually-hidden');
      expect(visuallyHiddenText).toHaveTextContent('Problem');
    });
  });

  describe('Content rendering', () => {
    it('renders text content correctly', () => {
      render(<ErrorMessage>Password must be at least 8 characters</ErrorMessage>);
      
      expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument();
    });

    it('renders ReactNode children correctly', () => {
      render(
        <ErrorMessage>
          <span>Complex</span> <strong>error</strong> content with <em>formatting</em>
        </ErrorMessage>
      );
      
      expect(screen.getByText('Complex')).toBeInTheDocument();
      expect(screen.getByText('error')).toBeInTheDocument();
      expect(screen.getByText('content with')).toBeInTheDocument();
      expect(screen.getByText('formatting')).toBeInTheDocument();
    });

    it('renders nested elements in children', () => {
      render(
        <ErrorMessage>
          Error with <a href="#help">help link</a> and <code>code</code> elements
        </ErrorMessage>
      );
      
      const errorMessage = screen.getByText(/Error with/);
      expect(errorMessage).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'help link' })).toBeInTheDocument();
      expect(screen.getByText('code')).toBeInTheDocument();
    });

    it('handles multiple paragraphs', () => {
      render(
        <ErrorMessage>
          <p>First error explanation.</p>
          <p>Second paragraph with more details.</p>
        </ErrorMessage>
      );
      
      expect(screen.getByText('First error explanation.')).toBeInTheDocument();
      expect(screen.getByText('Second paragraph with more details.')).toBeInTheDocument();
    });

    it('handles empty content gracefully', () => {
      render(<ErrorMessage>{''}</ErrorMessage>);
      
      const errorMessage = document.querySelector('.nhsuk-error-message');
      expect(errorMessage).toBeInTheDocument();
      
      // Should still have the visually hidden prefix
      const visuallyHiddenText = document.querySelector('.nhsuk-u-visually-hidden');
      expect(visuallyHiddenText).toHaveTextContent('Error:');
    });
  });

  describe('Custom styling', () => {
    it('applies custom className', () => {
      render(<ErrorMessage className="custom-error">Custom error</ErrorMessage>);
      
      const errorMessage = screen.getByText('Custom error');
      expect(errorMessage).toHaveClass('custom-error');
    });

    it('combines custom className with NHS classes', () => {
      render(<ErrorMessage className="custom-error">NHS error</ErrorMessage>);
      
      const errorMessage = screen.getByText('NHS error');
      expect(errorMessage).toHaveClass('custom-error');
      expect(errorMessage).toHaveClass('nhsuk-error-message');
    });

    it('handles multiple custom classes', () => {
      render(<ErrorMessage className="custom-error additional-class">Multiple classes</ErrorMessage>);
      
      const errorMessage = screen.getByText('Multiple classes');
      expect(errorMessage).toHaveClass('custom-error');
      expect(errorMessage).toHaveClass('additional-class');
      expect(errorMessage).toHaveClass('nhsuk-error-message');
    });
  });

  describe('Accessibility', () => {
    it('can be referenced by form controls via aria-describedby', () => {
      render(
        <div>
          <label htmlFor="email">Email</label>
          <ErrorMessage id="email-error">Invalid email format</ErrorMessage>
          <input id="email" type="email" aria-describedby="email-error" />
        </div>
      );
      
      const errorMessage = screen.getByText('Invalid email format');
      const input = screen.getByRole('textbox');
      
      expect(errorMessage).toHaveAttribute('id', 'email-error');
      expect(input).toHaveAttribute('aria-describedby', 'email-error');
    });

    it('provides semantic meaning through class names', () => {
      render(<ErrorMessage id="semantic-error">This provides error context</ErrorMessage>);
      
      const errorMessage = screen.getByText('This provides error context');
      expect(errorMessage).toHaveClass('nhsuk-error-message');
    });

    it('includes visually hidden text for screen readers', () => {
      render(<ErrorMessage>Screen reader accessible error</ErrorMessage>);
      
      const visuallyHiddenText = document.querySelector('.nhsuk-u-visually-hidden');
      expect(visuallyHiddenText).toBeInTheDocument();
      expect(visuallyHiddenText).toHaveClass('nhsuk-u-visually-hidden');
    });

    it('works with multiple error messages', () => {
      render(
        <div>
          <ErrorMessage id="error-1">First error message</ErrorMessage>
          <ErrorMessage id="error-2">Second error message</ErrorMessage>
        </div>
      );
      
      expect(screen.getByText('First error message')).toHaveAttribute('id', 'error-1');
      expect(screen.getByText('Second error message')).toHaveAttribute('id', 'error-2');
    });
  });

  describe('Additional HTML attributes', () => {
    it('passes through additional props', () => {
      render(
        <ErrorMessage 
          data-testid="custom-error"
          aria-label="Custom aria label"
        >
          Test error
        </ErrorMessage>
      );
      
      const errorMessage = screen.getByText('Test error');
      expect(errorMessage).toHaveAttribute('data-testid', 'custom-error');
      expect(errorMessage).toHaveAttribute('aria-label', 'Custom aria label');
    });

    it('supports data attributes', () => {
      render(
        <ErrorMessage 
          data-component="error-message"
          data-severity="high"
        >
          Data attribute error
        </ErrorMessage>
      );
      
      const errorMessage = screen.getByText('Data attribute error');
      expect(errorMessage).toHaveAttribute('data-component', 'error-message');
      expect(errorMessage).toHaveAttribute('data-severity', 'high');
    });
  });

  describe('Edge cases', () => {
    it('handles special characters in content', () => {
      const specialText = 'Error with "quotes", <tags>, & symbols: £€$¥';
      render(<ErrorMessage>{specialText}</ErrorMessage>);
      
      expect(screen.getByText(specialText)).toBeInTheDocument();
    });

    it('handles numeric children', () => {
      render(<ErrorMessage>{404}</ErrorMessage>);
      
      expect(screen.getByText('404')).toBeInTheDocument();
    });

    it('handles boolean-like content', () => {
      render(<ErrorMessage>false</ErrorMessage>);
      
      expect(screen.getByText('false')).toBeInTheDocument();
    });

    it('handles very long error text', () => {
      const longText = 'This is a very long error message that provides extensive details about what went wrong and how to fix it according to NHS standards and requirements for error messaging and user guidance in digital services';
      render(<ErrorMessage>{longText}</ErrorMessage>);
      
      expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it('handles unicode characters', () => {
      const unicodeText = 'Error with émojis ❌ and ünicode characters';
      render(<ErrorMessage>{unicodeText}</ErrorMessage>);
      
      expect(screen.getByText(unicodeText)).toBeInTheDocument();
    });

    it('handles HTML entities', () => {
      render(<ErrorMessage>Less than &lt; and greater than &gt; symbols</ErrorMessage>);
      
      expect(screen.getByText(/Less than < and greater than > symbols/)).toBeInTheDocument();
    });
  });

  describe('Integration scenarios', () => {
    it('works with form validation', () => {
      render(
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
      
      const errorMessage = screen.getByText('Password is too weak');
      const input = screen.getByLabelText('Password');
      
      expect(errorMessage).toHaveAttribute('id', 'password-error');
      expect(input).toHaveAttribute('aria-describedby', 'password-error');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('works with multiple error messages for complex validation', () => {
      render(
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
      
      expect(screen.getByText('Username is required')).toHaveAttribute('id', 'username-error-1');
      expect(screen.getByText('Username must be unique')).toHaveAttribute('id', 'username-error-2');
    });

    it('maintains correct structure during re-renders', () => {
      const { rerender } = render(
        <ErrorMessage id="dynamic-error">Original error message</ErrorMessage>
      );
      
      let errorMessage = screen.getByText('Original error message');
      expect(errorMessage).toHaveClass('nhsuk-error-message');
      expect(errorMessage).toHaveAttribute('id', 'dynamic-error');
      
      // Re-render with different content
      rerender(
        <ErrorMessage id="dynamic-error">Updated error message</ErrorMessage>
      );
      
      errorMessage = screen.getByText('Updated error message');
      expect(errorMessage).toHaveClass('nhsuk-error-message');
      expect(errorMessage).toHaveAttribute('id', 'dynamic-error');
    });

    it('works with conditional error display', () => {
      const { rerender } = render(
        <div>
          <label htmlFor="conditional-input">Input</label>
          <input id="conditional-input" type="text" />
        </div>
      );
      
      // Initially no error
      expect(screen.queryByText('Conditional error')).not.toBeInTheDocument();
      
      // Re-render with error
      rerender(
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
      
      expect(screen.getByText('Conditional error')).toBeInTheDocument();
    });
  });

  describe('Content variations', () => {
    it('handles list content for multiple errors', () => {
      render(
        <ErrorMessage>
          <ul>
            <li>Password must be at least 8 characters</li>
            <li>Password must contain a number</li>
            <li>Password must contain a special character</li>
          </ul>
        </ErrorMessage>
      );
      
      expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument();
      expect(screen.getByText('Password must contain a number')).toBeInTheDocument();
      expect(screen.getByText('Password must contain a special character')).toBeInTheDocument();
    });

    it('handles mixed content types', () => {
      render(
        <ErrorMessage>
          <p>There are several issues with your input:</p>
          <ul>
            <li>Field is required</li>
            <li>Format is invalid</li>
          </ul>
          <p>Please correct these <strong>errors</strong> and try again.</p>
        </ErrorMessage>
      );
      
      expect(screen.getByText('There are several issues with your input:')).toBeInTheDocument();
      expect(screen.getByText('Field is required')).toBeInTheDocument();
      expect(screen.getByText('Format is invalid')).toBeInTheDocument();
      expect(screen.getByText('errors')).toBeInTheDocument();
    });

    it('handles error with action links', () => {
      render(
        <ErrorMessage>
          Invalid format. <a href="#help">Learn more about valid formats</a>.
        </ErrorMessage>
      );
      
      expect(screen.getByText(/Invalid format\./)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Learn more about valid formats' })).toBeInTheDocument();
    });
  });
});
