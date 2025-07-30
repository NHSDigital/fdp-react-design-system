import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders with required props', () => {
    render(<Input id="test-input" name="test" />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'test-input');
    expect(input).toHaveAttribute('name', 'test');
  });

  it('renders with default type text', () => {
    render(<Input id="test-input" name="test" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('renders with specified type', () => {
    render(<Input id="test-input" name="test" type="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('renders with value', () => {
    render(<Input id="test-input" name="test" value="test value" />);
    const input = screen.getByDisplayValue('test value');
    expect(input).toBeInTheDocument();
  });

  it('renders with placeholder', () => {
    render(<Input id="test-input" name="test" placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });

  it('applies error class when hasError is true', () => {
    render(<Input id="test-input" name="test" hasError />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('nhsuk-input--error');
  });

  it('applies width class when width is specified', () => {
    render(<Input id="test-input" name="test" width="10" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('nhsuk-input--width-10');
  });

  it('handles disabled state', () => {
    render(<Input id="test-input" name="test" disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('handles readonly state', () => {
    render(<Input id="test-input" name="test" readOnly />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('readonly');
  });

  it('handles required state', () => {
    render(<Input id="test-input" name="test" required />);
    const input = screen.getByRole('textbox');
    expect(input).toBeRequired();
  });

  it('calls onChange when value changes', () => {
    const handleChange = vi.fn();
    render(<Input id="test-input" name="test" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('calls onFocus when input is focused', () => {
    const handleFocus = vi.fn();
    render(<Input id="test-input" name="test" onFocus={handleFocus} />);
    const input = screen.getByRole('textbox');
    
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('calls onBlur when input loses focus', () => {
    const handleBlur = vi.fn();
    render(<Input id="test-input" name="test" onBlur={handleBlur} />);
    const input = screen.getByRole('textbox');
    
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<Input id="test-input" name="test" className="custom-class" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-class');
    expect(input).toHaveClass('nhsuk-input');
  });

  it('sets aria-describedby when provided', () => {
    render(<Input id="test-input" name="test" describedBy="help-text" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'help-text');
  });
});
