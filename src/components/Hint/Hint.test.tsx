import { renderSSR as render } from '../../test-utils/renderSSR';
import { describe, it, expect } from 'vitest';
import { Hint } from './Hint';

describe('Hint', () => {
  it('renders basic hint correctly', () => {
    const { getByText } = render(<Hint>This is a hint message</Hint>);
    
    const hint = getByText('This is a hint message');
    expect(hint).toBeTruthy();
  });

  it('renders as div element', () => {
    const { getByText } = render(<Hint>Test hint</Hint>);
    
    const hint = getByText('Test hint');
    expect(hint?.tagName).toBe('DIV');
  });

  it('applies correct default classes', () => {
    const { getByText } = render(<Hint>Test hint</Hint>);
    
    const hint = getByText('Test hint');
    expect(hint?.className).toContain('nhsuk-hint');
  });

  it('applies id attribute when provided', () => {
    const { getByText } = render(<Hint id="test-hint">Test hint</Hint>);
    
    const hint = getByText('Test hint');
    expect(hint?.getAttribute('id')).toBe('test-hint');
  });

  it('does not apply id attribute when not provided', () => {
    const { getByText } = render(<Hint>Test hint</Hint>);
    
    const hint = getByText('Test hint');
    expect(hint?.getAttribute('id')).toBeNull();
  });

  describe('Content rendering', () => {
    it('renders text content correctly', () => {
      const { getByText } = render(<Hint>Simple text hint</Hint>);
      
      expect(getByText('Simple text hint')).toBeTruthy();
    });

    it('renders ReactNode children correctly', () => {
      const { getByText } = render(
        <Hint>
          <span>Complex hint with</span> <strong>nested elements</strong>
        </Hint>
      );
      
      expect(getByText('Complex hint with')).toBeTruthy();
      expect(getByText('nested elements')).toBeTruthy();
    });

    it('renders nested elements in children', () => {
      const { getByText } = render(
        <Hint>
          Text with <em>emphasis</em> and <strong>strong</strong> elements
        </Hint>
      );
      
      expect(getByText('emphasis')).toBeTruthy();
      expect(getByText('strong')).toBeTruthy();
    });

    it('handles multiple paragraphs', () => {
      const { getByText } = render(
        <Hint>
          <p>First paragraph of hint text.</p>
          <p>Second paragraph with more information.</p>
        </Hint>
      );
      
      expect(getByText('First paragraph of hint text.')).toBeTruthy();
      expect(getByText('Second paragraph with more information.')).toBeTruthy();
    });

    it('handles empty content gracefully', () => {
      const { container } = render(<Hint>{''}</Hint>);
      const hint = container.querySelector('.nhsuk-hint');
      expect(hint).toBeTruthy();
      expect(hint?.textContent).toBe('');
    });
  });

  describe('Custom styling', () => {
    it('applies custom className', () => {
      const { getByText } = render(<Hint className="custom-hint">Custom hint</Hint>);
      
      const hint = getByText('Custom hint');
      expect(hint?.className).toContain('custom-hint');
    });

    it('combines custom className with NHS classes', () => {
      const { getByText } = render(<Hint className="custom-hint">NHS hint</Hint>);
      
      const hint = getByText('NHS hint');
      expect(hint?.className).toContain('custom-hint');
      expect(hint?.className).toContain('nhsuk-hint');
    });

    it('handles multiple custom classes', () => {
      const { getByText } = render(<Hint className="custom-hint additional-class">Multiple classes</Hint>);
      
      const hint = getByText('Multiple classes');
      expect(hint?.className).toContain('custom-hint');
      expect(hint?.className).toContain('additional-class');
      expect(hint?.className).toContain('nhsuk-hint');
    });
  });

  describe('Accessibility', () => {
    it('can be referenced by form controls via aria-describedby', () => {
      const { getByText, getByRole } = render(
        <div>
          <Hint id="email-hint">Enter your email address</Hint>
          <input type="email" aria-describedby="email-hint" />
        </div>
      );
      
      const hint = getByText('Enter your email address');
      const input = getByRole('textbox');
      
      expect(hint?.getAttribute('id')).toBe('email-hint');
      expect(input?.getAttribute('aria-describedby')).toBe('email-hint');
    });

    it('provides semantic meaning through class names', () => {
      const { getByText } = render(<Hint id="semantic-hint">This provides additional context</Hint>);
      
      const hint = getByText('This provides additional context');
      expect(hint?.className).toContain('nhsuk-hint');
    });

    it('works with screen readers through proper markup', () => {
      const { container } = render(<Hint id="screen-reader-hint">Screen reader accessible hint</Hint>);
      const hint = container.querySelector('#screen-reader-hint');
      expect(hint).toBeTruthy();
      expect(hint?.textContent).toBe('Screen reader accessible hint');
    });
  });

  describe('Additional HTML attributes', () => {
    it('passes through additional props', () => {
      const { getByText } = render(
        <Hint 
          data-testid="custom-hint"
          aria-label="Custom aria label"
        >
          Test hint
        </Hint>
      );
      
      const hint = getByText('Test hint');
      expect(hint?.getAttribute('data-testid')).toBe('custom-hint');
      expect(hint?.getAttribute('aria-label')).toBe('Custom aria label');
    });

    it('supports data attributes', () => {
      const { getByText } = render(
        <Hint 
          data-component="hint"
          data-variant="form-helper"
        >
          Data attribute hint
        </Hint>
      );
      
      const hint = getByText('Data attribute hint');
      expect(hint?.getAttribute('data-component')).toBe('hint');
      expect(hint?.getAttribute('data-variant')).toBe('form-helper');
    });
  });

  describe('Edge cases', () => {
    it('handles special characters in content', () => {
      const specialText = 'Special characters: @#$%^&*()';
      const { getByText } = render(<Hint>{specialText}</Hint>);
      
      expect(getByText(specialText)).toBeTruthy();
    });

    it('handles numeric children', () => {
      const { getByText } = render(<Hint>{42}</Hint>);
      
      expect(getByText('42')).toBeTruthy();
    });

    it('handles boolean-like content', () => {
      const { getByText } = render(<Hint>true</Hint>);
      
      expect(getByText('true')).toBeTruthy();
    });

    it('handles very long hint text', () => {
      const longText = 'This is a very long hint text that exceeds normal length expectations and should still render correctly without any issues in the component structure or layout.';
      const { getByText } = render(<Hint>{longText}</Hint>);
      
      expect(getByText(longText)).toBeTruthy();
    });

    it('handles unicode characters', () => {
      const unicodeText = 'Unicode: 你好 🌟 ñáéíóú';
      const { getByText } = render(<Hint>{unicodeText}</Hint>);
      
      expect(getByText(unicodeText)).toBeTruthy();
    });

    it('handles HTML entities', () => {
      const { container } = render(<Hint>Less than &lt; and greater than &gt; symbols</Hint>);
      
      // HTML entities should be rendered as actual characters
      expect(container.textContent).toContain('Less than < and greater than > symbols');
    });
  });

  describe('Integration scenarios', () => {
    it('works with form fields', () => {
      const { getByLabelText, container } = render(
        <div>
          <label htmlFor="password">Password</label>
          <Hint id="password-hint">Must be at least 8 characters long</Hint>
          <input id="password" type="password" aria-describedby="password-hint" />
        </div>
      );
      const hint = container.querySelector('#password-hint');
      const input = getByLabelText('Password');
      
      expect(hint?.getAttribute('id')).toBe('password-hint');
      expect(input?.getAttribute('aria-describedby')).toBe('password-hint');
    });

    it('works with multiple hints for complex forms', () => {
      const { getByText } = render(
        <div>
          <Hint id="username-hint">Choose a unique username</Hint>
          <input type="text" aria-describedby="username-hint" />
          
          <Hint id="email-hint">We'll never share your email</Hint>
          <input type="email" aria-describedby="email-hint" />
        </div>
      );
      
      const usernameHint = getByText('Choose a unique username');
      const emailHint = getByText("We'll never share your email");
      expect(usernameHint?.getAttribute('id')).toBe('username-hint');
      expect(emailHint?.getAttribute('id')).toBe('email-hint');
    });

    it('maintains correct structure during re-renders', () => {
      const { getByText } = render(
        <Hint id="dynamic-hint">Original hint text</Hint>
      );
      
      let hint = getByText('Original hint text');
      expect(hint?.className).toContain('nhsuk-hint');
      expect(hint?.getAttribute('id')).toBe('dynamic-hint');
      
      // Re-render with different content
      const { container: updatedContainer } = render(
        <Hint id="dynamic-hint">Updated hint text</Hint>
      );
      
      hint = updatedContainer.querySelector('#dynamic-hint') as HTMLElement;
      expect(hint?.getAttribute('id')).toBe('dynamic-hint');
    });

    it('works with conditional rendering', () => {
      let showHint = false;
      
      const { queryByText, container } = render(
        <div>
          {showHint && <Hint>Conditional hint</Hint>}
        </div>
      );
      
      // Initially no hint
      expect(queryByText('Conditional hint')).not.toBeTruthy();
      
      // Re-render with hint
      showHint = true;
      const { getByText } = render(
        <div>
          {showHint && <Hint>Conditional hint</Hint>}
        </div>
      );
      
      expect(getByText('Conditional hint')).toBeTruthy();
    });
  });

  describe('Content variations', () => {
    it('handles list content', () => {
      const { getByText } = render(
        <Hint>
          Password requirements:
          <ul>
            <li>First requirement</li>
            <li>Second requirement</li>
            <li>Third requirement</li>
          </ul>
        </Hint>
      );
      
      expect(getByText('First requirement')).toBeTruthy();
      expect(getByText('Second requirement')).toBeTruthy();
      expect(getByText('Third requirement')).toBeTruthy();
    });

    it('handles mixed content types', () => {
      const { getByText } = render(
        <Hint>
          Primary instruction text.
          <ul>
            <li>Requirement one</li>
            <li>Requirement two</li>
          </ul>
          <p>Additional paragraph information.</p>
        </Hint>
      );
      
      expect(getByText('Primary instruction text.')).toBeTruthy();
      expect(getByText('Requirement one')).toBeTruthy();
      expect(getByText('Requirement two')).toBeTruthy();
      expect(getByText('Additional paragraph information.')).toBeTruthy();
    });
  });
});
