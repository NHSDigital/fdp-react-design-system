import { render, screen, fireEvent } from '@testing-library/react';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders basic textarea correctly', () => {
    render(<Textarea id="message" name="message" />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('id', 'message');
    expect(textarea).toHaveAttribute('name', 'message');
  });

  it('applies correct default classes', () => {
    render(<Textarea id="message" name="message" />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('nhsuk-textarea');
  });

  it('handles controlled component with value prop', () => {
    render(<Textarea id="message" name="message" value="Test content" />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('Test content');
  });

  it('handles uncontrolled component with defaultValue', () => {
    render(<Textarea id="message" name="message" defaultValue="Initial content" />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('Initial content');
  });

  it('displays placeholder text', () => {
    render(<Textarea id="message" name="message" placeholder="Enter your message here" />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('placeholder', 'Enter your message here');
  });

  it('handles text input changes correctly', () => {
    const handleChange = vi.fn();
    render(<Textarea id="message" name="message" onChange={handleChange} />);
    
    const textarea = screen.getByRole('textbox');
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
    render(
      <Textarea 
        id="message" 
        name="message" 
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
    
    const textarea = screen.getByRole('textbox');
    fireEvent.focus(textarea);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    
    fireEvent.blur(textarea);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('calls onKeyDown handler', () => {
    const handleKeyDown = vi.fn();
    render(<Textarea id="message" name="message" onKeyDown={handleKeyDown} />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.keyDown(textarea, { key: 'Enter' });
    
    expect(handleKeyDown).toHaveBeenCalledTimes(1);
    expect(handleKeyDown).toHaveBeenCalledWith(expect.objectContaining({
      key: 'Enter'
    }));
  });

  describe('Disabled and readonly states', () => {
    it('handles disabled state', () => {
      render(<Textarea id="message" name="message" disabled />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeDisabled();
    });

    it('handles readonly state', () => {
      render(<Textarea id="message" name="message" readOnly />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('readonly');
    });
  });

  describe('Required attribute', () => {
    it('applies required attribute when required prop is true', () => {
      render(<Textarea id="message" name="message" required />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('required');
    });

    it('does not apply required attribute by default', () => {
      render(<Textarea id="message" name="message" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).not.toHaveAttribute('required');
    });
  });

  describe('Error state', () => {
    it('applies error class when hasError is true', () => {
      render(<Textarea id="message" name="message" hasError />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('nhsuk-textarea--error');
    });

    it('does not apply error class by default', () => {
      render(<Textarea id="message" name="message" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).not.toHaveClass('nhsuk-textarea--error');
      expect(textarea).toHaveClass('nhsuk-textarea');
    });
  });

  describe('Dimensions and constraints', () => {
    it('applies rows attribute', () => {
      render(<Textarea id="message" name="message" rows={10} />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('rows', '10');
    });

    it('applies default rows when not specified', () => {
      render(<Textarea id="message" name="message" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('rows', '5');
    });

    it('applies cols attribute', () => {
      render(<Textarea id="message" name="message" cols={40} />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('cols', '40');
    });

    it('applies maxLength constraint', () => {
      render(<Textarea id="message" name="message" maxLength={100} />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('maxlength', '100');
    });

    it('applies minLength constraint', () => {
      render(<Textarea id="message" name="message" minLength={10} />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('minlength', '10');
    });
  });

  describe('Text wrapping', () => {
    it('applies wrap attribute with hard value', () => {
      render(<Textarea id="message" name="message" wrap="hard" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('wrap', 'hard');
    });

    it('applies default soft wrap when not specified', () => {
      render(<Textarea id="message" name="message" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('wrap', 'soft');
    });

    it('applies wrap off value', () => {
      render(<Textarea id="message" name="message" wrap="off" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('wrap', 'off');
    });
  });

  describe('Resize options', () => {
    it('applies resize none class', () => {
      render(<Textarea id="message" name="message" resize="none" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('nhsuk-textarea--resize-none');
    });

    it('applies resize both class', () => {
      render(<Textarea id="message" name="message" resize="both" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('nhsuk-textarea--resize-both');
    });

    it('applies resize horizontal class', () => {
      render(<Textarea id="message" name="message" resize="horizontal" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('nhsuk-textarea--resize-horizontal');
    });

    it('does not apply resize class for default vertical', () => {
      render(<Textarea id="message" name="message" resize="vertical" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).not.toHaveClass('nhsuk-textarea--resize-vertical');
      expect(textarea).toHaveClass('nhsuk-textarea');
    });
  });

  describe('Accessibility', () => {
    it('applies describedBy attribute when provided', () => {
      render(<Textarea id="message" name="message" describedBy="message-error" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-describedby', 'message-error');
    });

    it('has proper textbox role', () => {
      render(<Textarea id="message" name="message" />);
      
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });
  });

  describe('AutoComplete', () => {
    it('applies autoComplete attribute when provided', () => {
      render(<Textarea id="message" name="message" autoComplete="off" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('autocomplete', 'off');
    });
  });

  describe('Spell check', () => {
    it('applies spellCheck attribute when true', () => {
      render(<Textarea id="message" name="message" spellCheck={true} />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('spellcheck', 'true');
    });

    it('applies spellCheck attribute when false', () => {
      render(<Textarea id="message" name="message" spellCheck={false} />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('spellcheck', 'false');
    });
  });

  describe('Custom styling', () => {
    it('applies custom className', () => {
      render(<Textarea id="message" name="message" className="custom-textarea" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('custom-textarea');
    });

    it('combines custom className with NHS classes', () => {
      render(<Textarea id="message" name="message" className="custom-textarea" hasError />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('custom-textarea');
      expect(textarea).toHaveClass('nhsuk-textarea');
      expect(textarea).toHaveClass('nhsuk-textarea--error');
    });
  });

  describe('User interaction', () => {
    it('allows typing text', () => {
      render(<Textarea id="message" name="message" />);
      
      const textarea = screen.getByRole('textbox');
      fireEvent.change(textarea, { target: { value: 'Hello, this is a test message.' } });
      
      expect(textarea).toHaveValue('Hello, this is a test message.');
    });

    it('handles multiline text correctly', () => {
      render(<Textarea id="message" name="message" />);
      
      const textarea = screen.getByRole('textbox');
      const multilineText = 'Line 1\nLine 2\nLine 3';
      fireEvent.change(textarea, { target: { value: multilineText } });
      
      expect(textarea).toHaveValue(multilineText);
    });

    it('respects maxLength constraint during typing', () => {
      render(<Textarea id="message" name="message" maxLength={10} />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('maxlength', '10');
    });
  });

  describe('Focus management', () => {
    it('can be focused programmatically', () => {
      render(<Textarea id="message" name="message" />);
      
      const textarea = screen.getByRole('textbox');
      textarea.focus();
      
      expect(textarea).toHaveFocus();
    });

    it('maintains focus during typing', () => {
      render(<Textarea id="message" name="message" />);
      
      const textarea = screen.getByRole('textbox');
      textarea.focus();
      fireEvent.change(textarea, { target: { value: 'Typing...' } });
      
      expect(textarea).toHaveFocus();
    });
  });

  describe('Edge cases', () => {
    it('handles empty value correctly', () => {
      render(<Textarea id="message" name="message" value="" />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveValue('');
    });

    it('handles special characters in text', () => {
      const specialText = 'Text with "quotes", <tags>, & symbols: £€$¥';
      render(<Textarea id="message" name="message" defaultValue={specialText} />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveValue(specialText);
    });

    it('handles very long text content', () => {
      const longText = 'a'.repeat(1000);
      render(<Textarea id="message" name="message" defaultValue={longText} />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveValue(longText);
    });

    it('handles unicode characters', () => {
      const unicodeText = 'Hello 🏥 NHS 👩‍⚕️ Üñíçødé';
      render(<Textarea id="message" name="message" defaultValue={unicodeText} />);
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveValue(unicodeText);
    });
  });

  describe('Form integration', () => {
    it('works correctly in forms', () => {
      const handleSubmit = vi.fn();
      
      render(
        <form onSubmit={handleSubmit}>
          <Textarea id="message" name="message" required />
          <button type="submit">Submit</button>
        </form>
      );
      
      const textarea = screen.getByRole('textbox');
      const submitButton = screen.getByRole('button', { name: 'Submit' });
      
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
      
      let textarea = screen.getByRole('textbox');
      expect(textarea).toHaveValue('Initial text');
      
      // Re-render with different value
      rerender(
        <Textarea id="message" name="message" value="Updated text" />
      );
      
      textarea = screen.getByRole('textbox');
      expect(textarea).toHaveValue('Updated text');
    });
  });
});
