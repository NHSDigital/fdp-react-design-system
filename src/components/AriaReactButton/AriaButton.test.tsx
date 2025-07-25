import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { AriaButton } from './AriaButton';

describe('AriaButton', () => {
  it('renders with default props', () => {
    render(<AriaButton>Test Button</AriaButton>);
    
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('nhs-aria-button');
    expect(button).toHaveClass('nhs-aria-button--primary');
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<AriaButton variant="secondary">Secondary</AriaButton>);
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button--secondary');
    
    rerender(<AriaButton variant="warning">Warning</AriaButton>);
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button--warning');
    
    rerender(<AriaButton variant="reverse">Reverse</AriaButton>);
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button--reverse');
    
    rerender(<AriaButton variant="login">Login</AriaButton>);
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button--login');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<AriaButton size="small">Small</AriaButton>);
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button--small');
    
    rerender(<AriaButton size="large">Large</AriaButton>);
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button--large');
    
    // Default size should not have a size class
    rerender(<AriaButton size="default">Default</AriaButton>);
    expect(screen.getByRole('button')).not.toHaveClass('nhs-aria-button--small');
    expect(screen.getByRole('button')).not.toHaveClass('nhs-aria-button--large');
  });

  it('applies full width class when specified', () => {
    render(<AriaButton fullWidth>Full Width</AriaButton>);
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button--full-width');
  });

  it('applies custom className', () => {
    render(<AriaButton className="custom-class">Custom</AriaButton>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button');
  });

  it('handles onPress events', async () => {
    const user = userEvent.setup();
    const mockOnPress = vi.fn();
    
    render(<AriaButton onPress={mockOnPress}>Clickable</AriaButton>);
    const button = screen.getByRole('button');
    
    await user.click(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('supports keyboard interactions', async () => {
    const user = userEvent.setup();
    const mockOnPress = vi.fn();
    
    render(<AriaButton onPress={mockOnPress}>Keyboard</AriaButton>);
    const button = screen.getByRole('button');
    
    // Focus the button
    button.focus();
    expect(button).toHaveFocus();
    
    // Press Enter
    await user.keyboard('{Enter}');
    expect(mockOnPress).toHaveBeenCalledTimes(1);
    
    // Press Space
    await user.keyboard(' ');
    expect(mockOnPress).toHaveBeenCalledTimes(2);
  });

  it('handles disabled state correctly', async () => {
    const user = userEvent.setup();
    const mockOnPress = vi.fn();
    
    render(<AriaButton isDisabled onPress={mockOnPress}>Disabled</AriaButton>);
    const button = screen.getByRole('button');
    
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-disabled');
    
    // Should not respond to clicks when disabled
    await user.click(button);
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    
    render(<AriaButton ref={ref}>Ref Test</AriaButton>);
    
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it('passes through additional props', () => {
    render(
      <AriaButton 
        data-testid="custom-button"
        aria-label="Custom label"
      >
        Props Test
      </AriaButton>
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('data-testid', 'custom-button');
    expect(button).toHaveAttribute('aria-label', 'Custom label');
  });

  it('supports different button types', () => {
    render(<AriaButton type="submit">Submit</AriaButton>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('maintains accessibility with complex content', () => {
    render(
      <AriaButton>
        <span>Complex</span> <strong>Content</strong>
      </AriaButton>
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Complex Content');
  });

  it('supports focus-visible behavior', async () => {
    const user = userEvent.setup();
    
    render(<AriaButton>Focus Test</AriaButton>);
    const button = screen.getByRole('button');
    
    // Tab navigation should trigger focus-visible
    await user.tab();
    expect(button).toHaveFocus();
    
    // React Aria automatically handles focus-visible data attribute
    // The component itself doesn't need to manage this
  });
});
