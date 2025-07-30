import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { CharacterCount } from './CharacterCount';

describe('CharacterCount', () => {
  it('renders successfully', () => {
    render(<CharacterCount id="test-char-count" name="symptoms" maxLength={100} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('You can enter up to 100 characters')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<CharacterCount id="test-char-count" name="symptoms" maxLength={100} className="custom-class" />);
    const component = screen.getByTestId('character-count');
    expect(component).toHaveClass('custom-class');
    expect(component).toHaveClass('nhsuk-character-count');
  });

  it('updates character count on input when threshold reached', () => {
    render(<CharacterCount id="test-char-count" name="symptoms" maxLength={100} threshold={10} />);
    const textarea = screen.getByRole('textbox');
    
    fireEvent.change(textarea, { target: { value: 'Hello world' } }); // 11 chars, over 10% threshold
    expect(screen.getByText('You have 89 characters remaining')).toBeInTheDocument();
  });

  it('shows over limit warning', () => {
    render(<CharacterCount id="test-char-count" name="symptoms" maxLength={10} />);
    const textarea = screen.getByRole('textbox');
    
    fireEvent.change(textarea, { target: { value: 'This is a very long text' } });
    expect(screen.getByText('You have 14 characters too many')).toBeInTheDocument();
  });

  it('renders with custom threshold', () => {
    render(<CharacterCount id="test-char-count" name="symptoms" maxLength={100} threshold={50} />);
    const component = screen.getByTestId('character-count') || document.querySelector('.nhsuk-character-count');
    expect(component).toHaveAttribute('data-threshold', '50');
  });

  it('renders with textarea name and id', () => {
    render(<CharacterCount id="test-char-count" name="user-feedback" maxLength={100} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('name', 'user-feedback');
    expect(textarea).toHaveAttribute('id', 'test-char-count');
  });

  it('calls onChange when text changes', () => {
    const handleChange = vi.fn();
    render(
      <CharacterCount 
        id="test-char-count" 
        name="symptoms" 
        maxLength={100} 
        onChange={handleChange}
      />
    );
    
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'Test input' } });
    
    expect(handleChange).toHaveBeenCalled();
  });
});