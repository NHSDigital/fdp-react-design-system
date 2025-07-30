import { render, screen } from '@testing-library/react';
import { DateInput } from './DateInput';

describe('DateInput', () => {
  it('renders successfully', () => {
    render(<DateInput>Test content</DateInput>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<DateInput className="custom-class">Test</DateInput>);
    const component = screen.getByText('Test');
    expect(component).toHaveClass('custom-class');
    expect(component).toHaveClass('nhsuk-dateinput');
  });
});