import { render, screen } from '@testing-library/react';
import { Hint } from './Hint';

describe('Hint', () => {
  it('renders basic hint correctly', () => {
    render(<Hint>This is a hint message</Hint>);
    
    const hint = screen.getByText('This is a hint message');
    expect(hint).toBeInTheDocument();
  });

  it('renders as div element', () => {
    render(<Hint>Test hint</Hint>);
    
    const hint = screen.getByText('Test hint');
    expect(hint.tagName).toBe('DIV');
  });

  it('applies correct default classes', () => {
    render(<Hint>Test hint</Hint>);
    
    const hint = screen.getByText('Test hint');
    expect(hint).toHaveClass('nhsuk-hint');
  });

  it('applies id attribute when provided', () => {
    render(<Hint id="test-hint">Test hint</Hint>);
    
    const hint = screen.getByText('Test hint');
    expect(hint).toHaveAttribute('id', 'test-hint');
  });

  it('does not apply id attribute when not provided', () => {
    render(<Hint>Test hint</Hint>);
    
    const hint = screen.getByText('Test hint');
    expect(hint).not.toHaveAttribute('id');
  });

  describe('Content rendering', () => {
    it('renders text content correctly', () => {
      render(<Hint>Enter your email address</Hint>);
      
      expect(screen.getByText('Enter your email address')).toBeInTheDocument();
    });

    it('renders ReactNode children correctly', () => {
      render(
        <Hint>
          <span>Complex</span> <strong>hint</strong> content with <em>formatting</em>
        </Hint>
      );
      
      expect(screen.getByText('Complex')).toBeInTheDocument();
      expect(screen.getByText('hint')).toBeInTheDocument();
      expect(screen.getByText('content with')).toBeInTheDocument();
      expect(screen.getByText('formatting')).toBeInTheDocument();
    });

    it('renders nested elements in children', () => {
      render(
        <Hint>
          Hint with <a href="#link">link</a> and <code>code</code> elements
        </Hint>
      );
      
      const hint = screen.getByText(/Hint with/);
      expect(hint).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'link' })).toBeInTheDocument();
      expect(screen.getByText('code')).toBeInTheDocument();
    });

    it('handles multiple paragraphs', () => {
      render(
        <Hint>
          <p>First paragraph of hint text.</p>
          <p>Second paragraph with more information.</p>
        </Hint>
      );
      
      expect(screen.getByText('First paragraph of hint text.')).toBeInTheDocument();
      expect(screen.getByText('Second paragraph with more information.')).toBeInTheDocument();
    });

    it('handles empty content gracefully', () => {
      render(<Hint>{''}</Hint>);
      
      const hint = document.querySelector('.nhsuk-hint');
      expect(hint).toBeInTheDocument();
      expect(hint).toHaveTextContent('');
    });
  });

  describe('Custom styling', () => {
    it('applies custom className', () => {
      render(<Hint className="custom-hint">Custom hint</Hint>);
      
      const hint = screen.getByText('Custom hint');
      expect(hint).toHaveClass('custom-hint');
    });

    it('combines custom className with NHS classes', () => {
      render(<Hint className="custom-hint">NHS hint</Hint>);
      
      const hint = screen.getByText('NHS hint');
      expect(hint).toHaveClass('custom-hint');
      expect(hint).toHaveClass('nhsuk-hint');
    });

    it('handles multiple custom classes', () => {
      render(<Hint className="custom-hint additional-class">Multiple classes</Hint>);
      
      const hint = screen.getByText('Multiple classes');
      expect(hint).toHaveClass('custom-hint');
      expect(hint).toHaveClass('additional-class');
      expect(hint).toHaveClass('nhsuk-hint');
    });
  });

  describe('Accessibility', () => {
    it('can be referenced by form controls via aria-describedby', () => {
      render(
        <div>
          <label htmlFor="email">Email</label>
          <Hint id="email-hint">Enter your email address</Hint>
          <input id="email" type="email" aria-describedby="email-hint" />
        </div>
      );
      
      const hint = screen.getByText('Enter your email address');
      const input = screen.getByRole('textbox');
      
      expect(hint).toHaveAttribute('id', 'email-hint');
      expect(input).toHaveAttribute('aria-describedby', 'email-hint');
    });

    it('provides semantic meaning through class names', () => {
      render(<Hint id="semantic-hint">This provides additional context</Hint>);
      
      const hint = screen.getByText('This provides additional context');
      expect(hint).toHaveClass('nhsuk-hint');
    });

    it('works with screen readers through proper markup', () => {
      render(<Hint id="screen-reader-hint">Screen reader accessible hint</Hint>);
      
      const hint = document.getElementById('screen-reader-hint');
      expect(hint).toBeInTheDocument();
      expect(hint).toHaveTextContent('Screen reader accessible hint');
    });
  });

  describe('Additional HTML attributes', () => {
    it('passes through additional props', () => {
      render(
        <Hint 
          data-testid="custom-hint"
          aria-label="Custom aria label"
        >
          Test hint
        </Hint>
      );
      
      const hint = screen.getByText('Test hint');
      expect(hint).toHaveAttribute('data-testid', 'custom-hint');
      expect(hint).toHaveAttribute('aria-label', 'Custom aria label');
    });

    it('supports data attributes', () => {
      render(
        <Hint 
          data-component="hint"
          data-variant="form-helper"
        >
          Data attribute hint
        </Hint>
      );
      
      const hint = screen.getByText('Data attribute hint');
      expect(hint).toHaveAttribute('data-component', 'hint');
      expect(hint).toHaveAttribute('data-variant', 'form-helper');
    });
  });

  describe('Edge cases', () => {
    it('handles special characters in content', () => {
      const specialText = 'Hint with "quotes", <tags>, & symbols: £€$¥';
      render(<Hint>{specialText}</Hint>);
      
      expect(screen.getByText(specialText)).toBeInTheDocument();
    });

    it('handles numeric children', () => {
      render(<Hint>{42}</Hint>);
      
      expect(screen.getByText('42')).toBeInTheDocument();
    });

    it('handles boolean-like content', () => {
      render(<Hint>true</Hint>);
      
      expect(screen.getByText('true')).toBeInTheDocument();
    });

    it('handles very long hint text', () => {
      const longText = 'This is a very long hint text that provides extensive guidance and information to help users understand what is expected in the associated form field and how to provide the correct information according to NHS standards and requirements for data collection and validation purposes';
      render(<Hint>{longText}</Hint>);
      
      expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it('handles unicode characters', () => {
      const unicodeText = 'Hint with émojis 🏥 and ünicode characters';
      render(<Hint>{unicodeText}</Hint>);
      
      expect(screen.getByText(unicodeText)).toBeInTheDocument();
    });

    it('handles HTML entities', () => {
      render(<Hint>Less than &lt; and greater than &gt; symbols</Hint>);
      
      expect(screen.getByText(/Less than < and greater than > symbols/)).toBeInTheDocument();
    });
  });

  describe('Integration scenarios', () => {
    it('works with form fields', () => {
      render(
        <div>
          <label htmlFor="password">Password</label>
          <Hint id="password-hint">Must be at least 8 characters</Hint>
          <input 
            id="password" 
            type="password" 
            aria-describedby="password-hint"
          />
        </div>
      );
      
      const hint = screen.getByText('Must be at least 8 characters');
      const input = screen.getByLabelText('Password');
      
      expect(hint).toHaveAttribute('id', 'password-hint');
      expect(input).toHaveAttribute('aria-describedby', 'password-hint');
    });

    it('works with multiple hints for complex forms', () => {
      render(
        <div>
          <label htmlFor="username">Username</label>
          <Hint id="username-hint">Choose a unique username</Hint>
          <input 
            id="username" 
            type="text" 
            aria-describedby="username-hint"
          />
          
          <label htmlFor="email">Email</label>
          <Hint id="email-hint">We'll never share your email</Hint>
          <input 
            id="email" 
            type="email" 
            aria-describedby="email-hint"
          />
        </div>
      );
      
      expect(screen.getByText('Choose a unique username')).toHaveAttribute('id', 'username-hint');
      expect(screen.getByText("We'll never share your email")).toHaveAttribute('id', 'email-hint');
    });

    it('maintains correct structure during re-renders', () => {
      const { rerender } = render(
        <Hint id="dynamic-hint">Original hint text</Hint>
      );
      
      let hint = screen.getByText('Original hint text');
      expect(hint).toHaveClass('nhsuk-hint');
      expect(hint).toHaveAttribute('id', 'dynamic-hint');
      
      // Re-render with different content
      rerender(
        <Hint id="dynamic-hint">Updated hint text</Hint>
      );
      
      hint = screen.getByText('Updated hint text');
      expect(hint).toHaveClass('nhsuk-hint');
      expect(hint).toHaveAttribute('id', 'dynamic-hint');
    });

    it('works with conditional rendering', () => {
      const { rerender } = render(
        <div>
          <label htmlFor="conditional-input">Input</label>
          <input id="conditional-input" type="text" />
        </div>
      );
      
      // Initially no hint
      expect(screen.queryByText('Conditional hint')).not.toBeInTheDocument();
      
      // Re-render with hint
      rerender(
        <div>
          <label htmlFor="conditional-input">Input</label>
          <Hint id="conditional-hint">Conditional hint</Hint>
          <input 
            id="conditional-input" 
            type="text" 
            aria-describedby="conditional-hint"
          />
        </div>
      );
      
      expect(screen.getByText('Conditional hint')).toBeInTheDocument();
    });
  });

  describe('Content variations', () => {
    it('handles list content', () => {
      render(
        <Hint>
          <ul>
            <li>First requirement</li>
            <li>Second requirement</li>
            <li>Third requirement</li>
          </ul>
        </Hint>
      );
      
      expect(screen.getByText('First requirement')).toBeInTheDocument();
      expect(screen.getByText('Second requirement')).toBeInTheDocument();
      expect(screen.getByText('Third requirement')).toBeInTheDocument();
    });

    it('handles mixed content types', () => {
      render(
        <Hint>
          <p>Primary instruction text.</p>
          <ul>
            <li>Requirement one</li>
            <li>Requirement two</li>
          </ul>
          <p>Additional <strong>important</strong> information.</p>
        </Hint>
      );
      
      expect(screen.getByText('Primary instruction text.')).toBeInTheDocument();
      expect(screen.getByText('Requirement one')).toBeInTheDocument();
      expect(screen.getByText('Requirement two')).toBeInTheDocument();
      expect(screen.getByText('important')).toBeInTheDocument();
    });
  });
});
