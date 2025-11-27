import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DateInput } from './DateInput';

describe('DateInput', () => {
  it('renders successfully', () => {
    render(<DateInput id="test-date" />);
    expect(screen.getByLabelText('Day')).toBeInTheDocument();
    expect(screen.getByLabelText('Month')).toBeInTheDocument();
    expect(screen.getByLabelText('Year')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<DateInput id="test-date" className="custom-class" />);
    const component = screen.getByTestId('date-input') || document.querySelector('.nhsuk-date-input');
    expect(component).toHaveClass('custom-class');
    expect(component).toHaveClass('nhsuk-date-input');
  });

  it('renders with correct input types and attributes', () => {
    render(<DateInput id="test-date" />);
    
    const dayInput = screen.getByLabelText('Day');
    const monthInput = screen.getByLabelText('Month');
    const yearInput = screen.getByLabelText('Year');
    
    expect(dayInput).toHaveAttribute('type', 'text');
    expect(dayInput).toHaveAttribute('inputmode', 'numeric');
    expect(dayInput).toHaveAttribute('pattern', '[0-9]*');
    expect(dayInput).toHaveClass('nhsuk-input--width-2');
    
    expect(monthInput).toHaveAttribute('type', 'text');
    expect(monthInput).toHaveAttribute('inputmode', 'numeric');
    expect(monthInput).toHaveClass('nhsuk-input--width-2');
    
    expect(yearInput).toHaveAttribute('type', 'text');
    expect(yearInput).toHaveAttribute('inputmode', 'numeric');
    expect(yearInput).toHaveClass('nhsuk-input--width-4');
  });

  it('renders with custom values', () => {
    const values = { day: '15', month: '06', year: '2024' };
    render(<DateInput id="test-date" values={values} />);
    
    expect(screen.getByDisplayValue('15')).toBeInTheDocument();
    expect(screen.getByDisplayValue('06')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2024')).toBeInTheDocument();
  });

  it('renders with fieldset when provided', () => {
    const fieldset = {
      legend: 'Date of birth'
    };
    
    render(<DateInput id="test-date" fieldset={fieldset} />);
    expect(screen.getByText('Date of birth')).toBeInTheDocument();
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('renders with hint when provided', () => {
    const hint = {
      text: 'For example, 31 3 1980'
    };
    
    render(<DateInput id="test-date" hint={hint} />);
    expect(screen.getByText('For example, 31 3 1980')).toBeInTheDocument();
  });

  it('renders with error message when provided', () => {
    const errorMessage = {
      text: 'Enter a valid date'
    };
    
    render(<DateInput id="test-date" errorMessage={errorMessage} />);
    expect(screen.getByText('Enter a valid date')).toBeInTheDocument();
  });
});