import { render, fireEvent } from '../../test-utils/ServerRenderer';
import { describe, it, expect } from 'vitest';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders basic textarea correctly', () => {
    const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" />);
    
    const result = getByRole('textbox');
    expect(textarea).toBeTruthy();
    expect(textarea?.getAttribute('id')).toBe('message');
    expect(textarea?.getAttribute('name')).toBe('message');
  });

  it('applies correct default classes', () => {
    const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" />);
    
    const result = getByRole('textbox');
    expect(textarea?.className).toContain('nhsuk-textarea');
  });

  it('handles controlled component with value prop', () => {
    const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" value="Test content" />);
    
    const result = getByRole('textbox');
    expect(textarea).toHaveValue('Test content');
  });

  it('handles uncontrolled component with defaultValue', () => {
    const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" defaultValue="Initial content" />);
    
    const result = getByRole('textbox');
    expect(textarea).toHaveValue('Initial content');
  });

  it('displays placeholder text', () => {
    const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" placeholder="Enter your message here" />);
    
    const result = getByRole('textbox');
    expect(textarea?.getAttribute('placeholder')).toBe('Enter your message here');
  });

  it('handles text input changes correctly', () => {
    const handleChange = vi.fn();
    const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" onChange={handleChange} />);
    
    const result = getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'New text content' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({
        value: 'New text content'
      })
    }));
  });

  it('calls onFocus and onBlur handlers', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(
      <Textarea 
        id="message" 
        name="message" 
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
    
    const result = getByRole('textbox');
    fireEvent.focus(textarea);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    
    fireEvent.blur(textarea);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDown handler', () => {
    const handleKeyDown = vi.fn();
    const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" onKeyDown={handleKeyDown} />);
    
    const result = getByRole('textbox');
    fireEvent.keyDown(textarea, { key: 'Enter' });
    
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
    expect(handleKeyDown).toHaveBeenCalledWith(expect.objectContaining({
      key: 'Enter'
    }));
  });

  describe('Disabled and readonly states', () => {
    it('handles disabled state', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" disabled />);
      
      const result = getByRole('textbox');
      expect(textarea).toBeDisabled();
    });

    it('handles readonly state', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" readOnly />);
      
      const result = getByRole('textbox');
      expect(textarea?.getAttribute('readonly');
    });
  });

  describe('Required attribute')?.toBe(() => {
    it('applies required attribute when required prop is true', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" required />);
      
      const result = getByRole('textbox');
      expect(textarea?.getAttribute('required');
    });

    it('does not apply required attribute by default')?.toBe(() => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" />);
      
      const result = getByRole('textbox');
      expect(textarea).not.getAttribute('required');
    });
  });

  describe('Error state')?.toBe(() => {
    it('applies error class when hasError is true', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" hasError />);
      
      const result = getByRole('textbox');
      expect(textarea?.className).toContain('nhsuk-textarea--error');
    });

    it('does not apply error class by default', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" />);
      
      const result = getByRole('textbox');
      expect(textarea).not.className?.toContain('nhsuk-textarea--error');
      expect(textarea?.className).toContain('nhsuk-textarea');
    });
  });

  describe('Dimensions and constraints', () => {
    it('applies rows attribute', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" rows={10} />);
      
      const result = getByRole('textbox');
      expect(textarea?.getAttribute('rows')).toBe('10');
    });

    it('applies default rows when not specified', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" />);
      
      const result = getByRole('textbox');
      expect(textarea?.getAttribute('rows')).toBe('5');
    });

    it('applies cols attribute', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" cols={40} />);
      
      const result = getByRole('textbox');
      expect(textarea?.getAttribute('cols')).toBe('40');
    });

    it('applies maxLength constraint', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" maxLength={100} />);
      
      const result = getByRole('textbox');
      expect(textarea?.getAttribute('maxlength')).toBe('100');
    });

    it('applies minLength constraint', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" minLength={10} />);
      
      const result = getByRole('textbox');
      expect(textarea?.getAttribute('minlength')).toBe('10');
    });
  });

  describe('Text wrapping', () => {
    it('applies wrap attribute with hard value', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" wrap="hard" />);
      
      const result = getByRole('textbox');
      expect(textarea?.getAttribute('wrap')).toBe('hard');
    });

    it('applies default soft wrap when not specified', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" />);
      
      const result = getByRole('textbox');
      expect(textarea?.getAttribute('wrap')).toBe('soft');
    });

    it('applies wrap off value', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" wrap="off" />);
      
      const result = getByRole('textbox');
      expect(textarea?.getAttribute('wrap')).toBe('off');
    });
  });

  describe('Resize options', () => {
    it('applies resize none class', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" resize="none" />);
      
      const result = getByRole('textbox');
      expect(textarea?.className).toContain('nhsuk-textarea--resize-none');
    });

    it('applies resize both class', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" resize="both" />);
      
      const result = getByRole('textbox');
      expect(textarea?.className).toContain('nhsuk-textarea--resize-both');
    });

    it('applies resize horizontal class', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" resize="horizontal" />);
      
      const result = getByRole('textbox');
      expect(textarea?.className).toContain('nhsuk-textarea--resize-horizontal');
    });

    it('does not apply resize class for default vertical', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" resize="vertical" />);
      
      const result = getByRole('textbox');
      expect(textarea).not.className?.toContain('nhsuk-textarea--resize-vertical');
      expect(textarea?.className).toContain('nhsuk-textarea');
    });
  });

  describe('Accessibility', () => {
    it('applies describedBy attribute when provided', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" describedBy="message-error" />);
      
      const result = getByRole('textbox');
      expect(textarea?.getAttribute('aria-describedby')).toBe('message-error');
    });

    it('has proper textbox role', () => {
      render(<Textarea id="message" name="message" />);
      
      expect(getByRole('textbox')).toBeTruthy();
    });
  });

  describe('AutoComplete', () => {
    it('applies autoComplete attribute when provided', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" autoComplete="off" />);
      
      const result = getByRole('textbox');
      expect(textarea?.getAttribute('autocomplete')).toBe('off');
    });
  });

  describe('Spell check', () => {
    it('applies spellCheck attribute when true', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" spellCheck={true} />);
      
      const result = getByRole('textbox');
      expect(textarea?.getAttribute('spellcheck')).toBe('true');
    });

    it('applies spellCheck attribute when false', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" spellCheck={false} />);
      
      const result = getByRole('textbox');
      expect(textarea?.getAttribute('spellcheck')).toBe('false');
    });
  });

  describe('Custom styling', () => {
    it('applies custom className', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" className="custom-textarea" />);
      
      const result = getByRole('textbox');
      expect(textarea?.className).toContain('custom-textarea');
    });

    it('combines custom className with NHS classes', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" className="custom-textarea" hasError />);
      
      const result = getByRole('textbox');
      expect(textarea?.className).toContain('custom-textarea');
      expect(textarea?.className).toContain('nhsuk-textarea');
      expect(textarea?.className).toContain('nhsuk-textarea--error');
    });
  });

  describe('User interaction', () => {
    it('allows typing text', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" />);
      
      const result = getByRole('textbox');
      fireEvent.change(textarea, { target: { value: 'Hello, this is a test message.' } });
      
      expect(textarea).toHaveValue('Hello, this is a test message.');
    });

    it('handles multiline text correctly', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" />);
      
      const result = getByRole('textbox');
      const multilineText = 'Line 1\nLine 2\nLine 3';
      fireEvent.change(textarea, { target: { value: multilineText } });
      
      expect(textarea).toHaveValue(multilineText);
    });

    it('respects maxLength constraint during typing', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" maxLength={10} />);
      
      const result = getByRole('textbox');
      expect(textarea?.getAttribute('maxlength')).toBe('10');
    });
  });

  describe('Focus management', () => {
    it('can be focused programmatically', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" />);
      
      const result = getByRole('textbox');
      textarea.focus();
      
      expect(textarea).toHaveFocus();
    });

    it('maintains focus during typing', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" />);
      
      const result = getByRole('textbox');
      textarea.focus();
      fireEvent.change(textarea, { target: { value: 'Typing...' } });
      
      expect(textarea).toHaveFocus();
    });
  });

  describe('Edge cases', () => {
    it('handles empty value correctly', () => {
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" value="" />);
      
      const result = getByRole('textbox');
      expect(textarea).toHaveValue('');
    });

    it('handles special characters in text', () => {
      const specialText = 'Text with "quotes", <tags>, & symbols: £€$¥';
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" defaultValue={specialText} />);
      
      const result = getByRole('textbox');
      expect(textarea).toHaveValue(specialText);
    });

    it('handles very long text content', () => {
      const longText = 'a'.repeat(1000);
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" defaultValue={longText} />);
      
      const result = getByRole('textbox');
      expect(textarea).toHaveValue(longText);
    });

    it('handles unicode characters', () => {
      const unicodeText = 'Hello 🏥 NHS 👩‍⚕️ Üñíçødé';
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(<Textarea id="message" name="message" defaultValue={unicodeText} />);
      
      const result = getByRole('textbox');
      expect(textarea).toHaveValue(unicodeText);
    });
  });

  describe('Form integration', () => {
    it('works correctly in forms', () => {
      const handleSubmit = vi.fn();
      
      const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(
        <form onSubmit={handleSubmit}>
          <Textarea id="message" name="message" required />
          <button type="submit">Submit</button>
        </form>
      );
      
      const result = getByRole('textbox');
      const submitButton = getByRole('button', { name: 'Submit' });
      
      // Add some text
      fireEvent.change(textarea, { target: { value: 'Form message content' } });
      expect(textarea).toHaveValue('Form message content');
      
      // Form should be submittable
      fireEvent.click(submitButton);
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it('maintains state correctly during re-renders', () => {
      const { rerender } = render(
        <Textarea id="message" name="message" value="Initial text" />
      );
      
      let textarea = getByRole('textbox');
      expect(textarea).toHaveValue('Initial text');
      
      // Re-render with different value
      rerender(
        <Textarea id="message" name="message" value="Updated text" />
      );
      
      textarea = getByRole('textbox');
      expect(textarea).toHaveValue('Updated text');
    });
  });
});
