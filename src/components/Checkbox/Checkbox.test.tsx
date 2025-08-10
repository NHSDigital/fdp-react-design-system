import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly with basic props', () => {
    render(
      <Checkbox id="test-checkbox">
        Test checkbox label
      </Checkbox>
    );
    
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText('Test checkbox label')).toBeInTheDocument();
  });

  it('handles controlled mode correctly', () => {
    const handleChange = jest.fn();
    
    render(
      <Checkbox 
        id="controlled-checkbox" 
        checked={false}
        onChange={handleChange}
      >
        Controlled checkbox
      </Checkbox>
    );
    
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
    
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
  });

  it('handles uncontrolled mode correctly', () => {
    render(
      <Checkbox 
        id="uncontrolled-checkbox" 
        defaultChecked={true}
      >
        Uncontrolled checkbox
      </Checkbox>
    );
    
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
    
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  it('displays hint text when provided', () => {
    render(
      <Checkbox 
        id="checkbox-with-hint" 
        hint="This is a helpful hint"
      >
        Checkbox with hint
      </Checkbox>
    );
    
    expect(screen.getByText('This is a helpful hint')).toBeInTheDocument();
  });

  it('displays error message when provided', () => {
    render(
      <Checkbox 
        id="checkbox-with-error" 
        errorMessage="This field is required"
      >
        Checkbox with error
      </Checkbox>
    );
    
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(
      <Checkbox 
        id="disabled-checkbox" 
        disabled={true}
      >
        Disabled checkbox
      </Checkbox>
    );
    
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.disabled).toBe(true);
  });

  it('has correct accessibility attributes', () => {
    render(
      <Checkbox 
        id="accessible-checkbox" 
        hint="Helpful hint"
        errorMessage="Error message"
      >
        Accessible checkbox
      </Checkbox>
    );
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-describedby');
    
    const describedBy = checkbox.getAttribute('aria-describedby');
    expect(describedBy).toContain('accessible-checkbox-hint');
    expect(describedBy).toContain('accessible-checkbox-error');
  });
});
