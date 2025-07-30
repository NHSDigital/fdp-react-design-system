import { render, screen } from '@testing-library/react';
import { CharacterCount } from './CharacterCount';

describe('CharacterCount', () => {
  it('renders successfully', () => {
    render(<CharacterCount>Test content</CharacterCount>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<CharacterCount className="custom-class">Test</CharacterCount>);
    const component = screen.getByText('Test');
    expect(component).toHaveClass('custom-class');
    expect(component).toHaveClass('nhsuk-charactercount');
  });
});