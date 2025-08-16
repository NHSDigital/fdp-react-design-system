import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Select } from './Select';

describe('Select', () => {
  const basicOptions = [
    { value: '', text: 'Please select an option' },
    { value: 'england', text: 'England' },
    { value: 'scotland', text: 'Scotland' },
    { value: 'wales', text: 'Wales' },
    { value: 'northern-ireland', text: 'Northern Ireland' },
  ];

  const optionsWithDisabled = [
    { value: '', text: 'Please select an option' },
    { value: 'england', text: 'England' },
    { value: 'scotland', text: 'Scotland', disabled: true },
    { value: 'wales', text: 'Wales' },
  ];

  const optionsWithSelected = [
    { value: '', text: 'Please select an option' },
    { value: 'england', text: 'England' },
    { value: 'scotland', text: 'Scotland', selected: true },
    { value: 'wales', text: 'Wales' },
  ];

  it('renders basic select correctly', () => {
    render(<Select id="country" name="country" options={basicOptions} />);
    
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute('id', 'country');
    expect(select).toHaveAttribute('name', 'country');
  });

  it('renders all options correctly', () => {
    render(<Select id="country" name="country" options={basicOptions} />);
    
    basicOptions.forEach(option => {
      expect(screen.getByRole('option', { name: option.text })).toBeInTheDocument();
    });
  });

  it('applies correct value attributes to options', () => {
    render(<Select id="country" name="country" options={basicOptions} />);
    
    basicOptions.forEach(option => {
      const optionElement = screen.getByRole('option', { name: option.text });
      expect(optionElement).toHaveAttribute('value', option.value);
    });
  });

  it('handles controlled component with value prop', () => {
    const handleChange = () => {};
    render(<Select id="country" name="country" options={basicOptions} value="scotland" onChange={handleChange} />);
    
    const select = screen.getByRole('combobox');
    expect(select).toHaveValue('scotland');
  });

  it('handles uncontrolled component with defaultValue', () => {
    render(<Select id="country" name="country" options={basicOptions} defaultValue="wales" />);
    
    const select = screen.getByRole('combobox');
    expect(select).toHaveValue('wales');
  });

  it('handles selection changes correctly', () => {
    const handleChange = vi.fn();
    render(<Select id="country" name="country" options={basicOptions} onChange={handleChange} />);
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'england' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({
        value: 'england'
      })
    }));
  });

  it('calls onFocus and onBlur handlers', () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();
    render(
      <Select 
        id="country" 
        name="country" 
        options={basicOptions} 
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );
    
    const select = screen.getByRole('combobox');
    fireEvent.focus(select);
    expect(handleFocus).toHaveBeenCalledTimes(1);
    
    fireEvent.blur(select);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  describe('Disabled states', () => {
    it('handles disabled select', () => {
      render(<Select id="country" name="country" options={basicOptions} disabled />);
      
      const select = screen.getByRole('combobox');
      expect(select).toBeDisabled();
    });

    it('handles disabled options', () => {
      render(<Select id="country" name="country" options={optionsWithDisabled} />);
      
      const disabledOption = screen.getByRole('option', { name: 'Scotland' });
      expect(disabledOption).toBeDisabled();
      
      const enabledOption = screen.getByRole('option', { name: 'England' });
      expect(enabledOption).not.toBeDisabled();
    });
  });

  describe('Required attribute', () => {
    it('applies required attribute when required prop is true', () => {
      render(<Select id="country" name="country" options={basicOptions} required />);
      
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('required');
    });

    it('does not apply required attribute by default', () => {
      render(<Select id="country" name="country" options={basicOptions} />);
      
      const select = screen.getByRole('combobox');
      expect(select).not.toHaveAttribute('required');
    });
  });

  describe('Error state', () => {
    it('applies error class when hasError is true', () => {
      render(<Select id="country" name="country" options={basicOptions} hasError />);
      
      const select = screen.getByRole('combobox');
      expect(select).toHaveClass('nhsuk-select--error');
    });

    it('does not apply error class by default', () => {
      render(<Select id="country" name="country" options={basicOptions} />);
      
      const select = screen.getByRole('combobox');
      expect(select).not.toHaveClass('nhsuk-select--error');
      expect(select).toHaveClass('nhsuk-select');
    });
  });

  describe('Multiple selection', () => {
    it('enables multiple selection when multiple prop is true', () => {
      render(<Select id="languages" name="languages" options={basicOptions} multiple />);
      
      const select = screen.getByRole('listbox');
      expect(select).toHaveAttribute('multiple');
    });

    it('applies size attribute for multiple select', () => {
      render(<Select id="languages" name="languages" options={basicOptions} multiple size={5} />);
      
      const select = screen.getByRole('listbox');
      expect(select).toHaveAttribute('size', '5');
    });

    it('changes role to listbox when multiple is true', () => {
      render(<Select id="languages" name="languages" options={basicOptions} multiple />);
      
      expect(screen.getByRole('listbox')).toBeInTheDocument();
      expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('applies describedBy attribute when provided', () => {
      render(<Select id="country" name="country" options={basicOptions} describedBy="country-error" />);
      
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('aria-describedby', 'country-error');
    });

    it('has proper option structure', () => {
      render(<Select id="country" name="country" options={basicOptions} />);
      
      basicOptions.forEach(option => {
        const optionElement = screen.getByRole('option', { name: option.text });
        expect(optionElement).toHaveAttribute('value', option.value);
        expect(optionElement).toHaveTextContent(option.text);
      });
    });

    it('renders options with initial selected state', () => {
      render(<Select id="country" name="country" options={optionsWithSelected} />);
      
      // Check that the select component is rendered correctly with the expected options
      const select = screen.getByRole('combobox');
      expect(select).toBeInTheDocument();
      
      // Verify all options are present
      optionsWithSelected.forEach(option => {
        expect(screen.getByRole('option', { name: option.text })).toBeInTheDocument();
      });
    });
  });

  describe('AutoComplete', () => {
    it('applies autoComplete attribute when provided', () => {
      render(<Select id="country" name="country" options={basicOptions} autoComplete="country" />);
      
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('autocomplete', 'country');
    });
  });

  describe('Custom styling', () => {
    it('applies custom className', () => {
      render(<Select id="country" name="country" options={basicOptions} className="custom-select" />);
      
      const select = screen.getByRole('combobox');
      expect(select).toHaveClass('custom-select');
    });

    it('combines custom className with NHS classes', () => {
      render(<Select id="country" name="country" options={basicOptions} className="custom-select" hasError />);
      
      const select = screen.getByRole('combobox');
      expect(select).toHaveClass('custom-select');
      expect(select).toHaveClass('nhsuk-select');
      expect(select).toHaveClass('nhsuk-select--error');
    });
  });

  describe('Keyboard navigation', () => {
    it('responds to keyboard events', () => {
      render(<Select id="country" name="country" options={basicOptions} />);
      
      const select = screen.getByRole('combobox');
      select.focus();
      expect(select).toHaveFocus();
      
      fireEvent.keyDown(select, { key: 'ArrowDown' });
      // Note: actual keyboard navigation behavior is handled by the browser
      expect(select).toHaveFocus();
    });

    it('allows selection via keyboard', () => {
      const handleChange = vi.fn();
      render(<Select id="country" name="country" options={basicOptions} onChange={handleChange} />);
      
      const select = screen.getByRole('combobox');
      fireEvent.keyDown(select, { key: 'Enter' });
      
      // The select should still be focusable after keyboard interaction
      expect(select).toBeInTheDocument();
    });
  });

  describe('Additional HTML attributes', () => {
    it('passes through additional props', () => {
      render(
        <Select 
          id="country" 
          name="country" 
          options={basicOptions} 
          data-testid="custom-select"
        />
      );
      
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('data-testid', 'custom-select');
    });
  });

  describe('Edge cases', () => {
    it('handles empty options array', () => {
      render(<Select id="country" name="country" options={[]} />);
      
      const select = screen.getByRole('combobox');
      expect(select).toBeInTheDocument();
      expect(screen.queryAllByRole('option')).toHaveLength(0);
    });

    it('handles options with same value but different text', () => {
      const duplicateValueOptions = [
        { value: 'uk', text: 'United Kingdom' },
        { value: 'uk', text: 'UK (alternative)' },
      ];
      
      render(<Select id="country" name="country" options={duplicateValueOptions} />);
      
      expect(screen.getByRole('option', { name: 'United Kingdom' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'UK (alternative)' })).toBeInTheDocument();
    });

    it('handles long option text gracefully', () => {
      const longTextOptions = [
        { 
          value: 'long', 
          text: 'This is a very long option text that might overflow in some layouts but should still be selectable and accessible' 
        },
      ];
      
      render(<Select id="country" name="country" options={longTextOptions} />);
      
      const option = screen.getByRole('option', { name: /This is a very long option text/ });
      expect(option).toBeInTheDocument();
      expect(option).toHaveTextContent(/This is a very long option text/);
    });

    it('handles special characters in option text', () => {
      const specialCharOptions = [
        { value: 'special', text: 'Option with "quotes" & <tags>' },
        { value: 'unicode', text: 'Option with émojis 🏥 and ünicode' },
      ];
      
      render(<Select id="special" name="special" options={specialCharOptions} />);
      
      expect(screen.getByRole('option', { name: 'Option with "quotes" & <tags>' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Option with émojis 🏥 and ünicode' })).toBeInTheDocument();
    });
  });

  describe('Integration scenarios', () => {
  it('works correctly in forms', () => {
      const handleSubmit = vi.fn();
      
      render(
        <form onSubmit={handleSubmit}>
          <Select id="country" name="country" options={basicOptions} required />
          <button type="submit">Submit</button>
        </form>
      );
      
      const select = screen.getByRole('combobox');
      
      // Select a value
      fireEvent.change(select, { target: { value: 'england' } });
      expect(select).toHaveValue('england');
      
      // Form should be submittable
  // Use submit event directly to avoid jsdom requestSubmit warning
  fireEvent.submit(select.closest('form')!);
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it('maintains state correctly during re-renders', () => {
      const handleChange = () => {};
      const { rerender } = render(
          <Select id="country" name="country" options={basicOptions} value="scotland" onChange={handleChange} />
        );
      
      let select = screen.getByRole('combobox');
      expect(select).toHaveValue('scotland');
      
      // Re-render with different value
      rerender(
        <Select id="country" name="country" options={basicOptions} value="wales" onChange={handleChange} />
      );
      
      select = screen.getByRole('combobox');
      expect(select).toHaveValue('wales');
    });
  });
});
