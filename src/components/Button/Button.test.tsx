import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Test Button</Button>);
    
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('nhs-aria-button');
    expect(button).toHaveClass('nhs-aria-button--primary');
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button--secondary');
    
    rerender(<Button variant="warning">Warning</Button>);
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button--warning');
    
    rerender(<Button variant="reverse">Reverse</Button>);
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button--reverse');
    
    rerender(<Button variant="login">Login</Button>);
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button--login');
  });

  it('applies size classes correctly', () => {
    const { rerender } = render(<Button size="small">Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button--small');
    
    rerender(<Button size="large">Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button--large');
    
    // Default size should not have a size class
    rerender(<Button size="default">Default</Button>);
    expect(screen.getByRole('button')).not.toHaveClass('nhs-aria-button--small');
    expect(screen.getByRole('button')).not.toHaveClass('nhs-aria-button--large');
  });

  it('applies full width class when specified', () => {
    render(<Button fullWidth>Full Width</Button>);
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button--full-width');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
    expect(screen.getByRole('button')).toHaveClass('nhs-aria-button');
  });

  it('handles onPress events', async () => {
    const user = userEvent.setup();
    const mockOnPress = vi.fn();
    
    render(<Button onPress={mockOnPress}>Clickable</Button>);
    const button = screen.getByRole('button');
    
    await user.click(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('supports keyboard interactions', async () => {
    const user = userEvent.setup();
    const mockOnPress = vi.fn();
    
    render(<Button onPress={mockOnPress}>Keyboard</Button>);
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
    
    render(<Button isDisabled onPress={mockOnPress}>Disabled</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('data-disabled');
    
    // Should not respond to clicks when disabled
    await user.click(button);
    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    
    render(<Button ref={ref}>Ref Test</Button>);
    
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement));
  });

  it('passes through additional props', () => {
    render(
      <Button 
        data-testid="custom-button"
        aria-label="Custom label"
      >
        Props Test
      </Button>
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('data-testid', 'custom-button');
    expect(button).toHaveAttribute('aria-label', 'Custom label');
  });

  it('supports different button types', () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('maintains accessibility with complex content', () => {
    render(
      <Button>
        <span>Complex</span> <strong>Content</strong>
      </Button>
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Complex Content');
  });

  it('supports focus-visible behavior', async () => {
    const user = userEvent.setup();
    
    render(<Button>Focus Test</Button>);
    const button = screen.getByRole('button');
    
    // Tab navigation should trigger focus-visible
    await user.tab();
    expect(button).toHaveFocus();
    
    // React Aria automatically handles focus-visible data attribute
    // The component itself doesn't need to manage this
  });
});
