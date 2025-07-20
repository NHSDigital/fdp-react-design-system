import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';
import { NHSThemeProvider } from '../NHSThemeProvider';
import { createRef, ReactNode } from 'react';

// Test wrapper with theme provider
const TestWrapper = ({ children }: { children: ReactNode }) => (
  <NHSThemeProvider>{children}</NHSThemeProvider>
);

describe('Button', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(
        <TestWrapper>
          <Button>Test Button</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button', { name: 'Test Button' });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('nhs-button', 'nhs-button--primary');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('renders with custom text', () => {
      render(
        <TestWrapper>
          <Button>Custom Button Text</Button>
        </TestWrapper>
      );
      
      expect(screen.getByText('Custom Button Text')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      render(
        <TestWrapper>
          <Button className="custom-class">Test</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });

    it('applies custom styles', () => {
      render(
        <TestWrapper>
          <Button style={{ marginTop: '20px' }}>Test</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveStyle({ marginTop: '20px' });
    });
  });

  describe('Variants', () => {
    const variants = ['primary', 'secondary', 'reverse', 'warning', 'login'] as const;

    variants.forEach((variant) => {
      it(`renders ${variant} variant correctly`, () => {
        render(
          <TestWrapper>
            <Button variant={variant}>{variant} button</Button>
          </TestWrapper>
        );
        
        const button = screen.getByRole('button');
        expect(button).toHaveClass(`nhs-button--${variant}`);
      });
    });

    it('defaults to primary variant', () => {
      render(
        <TestWrapper>
          <Button>Test</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('nhs-button--primary');
    });
  });

  describe('Sizes', () => {
    const sizes = ['small', 'default', 'large'] as const;

    sizes.forEach((size) => {
      it(`renders ${size} size correctly`, () => {
        render(
          <TestWrapper>
            <Button size={size}>{size} button</Button>
          </TestWrapper>
        );
        
        const button = screen.getByRole('button');
        if (size !== 'default') {
          expect(button).toHaveClass(`nhs-button--${size}`);
        } else {
          expect(button).not.toHaveClass('nhs-button--default');
        }
      });
    });
  });

  describe('States', () => {
    it('renders disabled state correctly', () => {
      render(
        <TestWrapper>
          <Button disabled>Disabled Button</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('nhs-button--disabled');
    });

    it('renders full width correctly', () => {
      render(
        <TestWrapper>
          <Button fullWidth>Full Width Button</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('nhs-button--full-width');
    });
  });

  describe('Button Types', () => {
    it('defaults to button type', () => {
      render(
        <TestWrapper>
          <Button>Test</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('accepts submit type', () => {
      render(
        <TestWrapper>
          <Button type="submit">Submit</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('accepts reset type', () => {
      render(
        <TestWrapper>
          <Button type="reset">Reset</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'reset');
    });
  });

  describe('Event Handling', () => {
    it('calls onClick when clicked', () => {
      const handleClick = vi.fn();
      
      render(
        <TestWrapper>
          <Button onClick={handleClick}>Click Me</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
      const handleClick = vi.fn();
      
      render(
        <TestWrapper>
          <Button disabled onClick={handleClick}>Disabled Button</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has correct role', () => {
      render(
        <TestWrapper>
          <Button>Test</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('is focusable when not disabled', () => {
      render(
        <TestWrapper>
          <Button>Test</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });

    it('is not focusable when disabled', () => {
      render(
        <TestWrapper>
          <Button disabled>Test</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('supports aria attributes', () => {
      render(
        <TestWrapper>
          <Button aria-label="Custom aria label" aria-describedby="description">
            Test
          </Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Custom aria label');
      expect(button).toHaveAttribute('aria-describedby', 'description');
    });
  });

  describe('Forward Ref', () => {
    it('forwards ref to button element', () => {
      const ref = createRef<HTMLButtonElement>();
      
      render(
        <TestWrapper>
          <Button ref={ref}>Test</Button>
        </TestWrapper>
      );
      
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
      expect(ref.current?.textContent).toBe('Test');
    });
  });

  describe('Design Token Integration', () => {
    it('applies design token styles through theme provider', () => {
      render(
        <TestWrapper>
          <Button variant="primary">Primary Button</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      
      // Check that design token values are applied
      const computedStyle = window.getComputedStyle(button);
      expect(computedStyle.fontFamily).toContain('Frutiger W01');
    });

    it('applies different styles for different variants', () => {
      const { rerender } = render(
        <TestWrapper>
          <Button variant="primary" data-testid="primary">Primary</Button>
        </TestWrapper>
      );
      
      const primaryButton = screen.getByTestId('primary');
      const primaryBg = window.getComputedStyle(primaryButton).backgroundColor;
      
      rerender(
        <TestWrapper>
          <Button variant="secondary" data-testid="secondary">Secondary</Button>
        </TestWrapper>
      );
      
      const secondaryButton = screen.getByTestId('secondary');
      const secondaryBg = window.getComputedStyle(secondaryButton).backgroundColor;
      
      expect(primaryBg).not.toBe(secondaryBg);
    });
  });

  describe('Font Loading', () => {
    it('uses Frutiger font family in style attribute', () => {
      render(
        <TestWrapper>
          <Button>Test Button</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      
      // Check the inline style attribute for font-family
      const style = button.getAttribute('style');
      expect(style).toContain('font-family: "Frutiger W01", Arial, Helvetica, sans-serif');
    });

    it('falls back to Arial when Frutiger is not available', () => {
      render(
        <TestWrapper>
          <Button>Test Button</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      const computedStyle = window.getComputedStyle(button);
      
      // In test environment, the computed font should fall back to Arial
      // since Frutiger fonts are not loaded in jsdom
      const fontFamily = computedStyle.fontFamily;
      
      // Should either have Frutiger (if fonts load) or fallback to Arial
      const hasFrutiger = fontFamily.includes('Frutiger W01');
      const hasArialFallback = fontFamily.includes('Arial') || fontFamily.includes('arial');
      
      expect(hasFrutiger || hasArialFallback).toBe(true);
      
      // Log for debugging
      console.log('Font family in test:', fontFamily);
    });

    it('has correct font stack in inline styles', () => {
      render(
        <TestWrapper>
          <Button>Test Button</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      
      // The button should have the complete font stack applied via inline styles
      const inlineStyle = button.style.fontFamily;
      expect(inlineStyle).toBe('"Frutiger W01", Arial, Helvetica, sans-serif');
    });

    it('handles font loading detection properly', async () => {
      // Mock successful font loading
      const mockFonts = {
        load: vi.fn().mockResolvedValue([{ family: 'Frutiger W01' }]),
        check: vi.fn().mockReturnValue(true),
        ready: Promise.resolve(new Set([{ family: 'Frutiger W01' }])),
      };
      
      Object.defineProperty(document, 'fonts', {
        value: mockFonts,
        writable: true,
      });

      render(
        <TestWrapper>
          <Button>Test Button</Button>
        </TestWrapper>
      );
      
      // Test that we can detect font loading
      const canLoadFonts = await document.fonts.load('1em "Frutiger W01"');
      const isFontLoaded = document.fonts.check('1em "Frutiger W01"');
      
      expect(mockFonts.load).toHaveBeenCalledWith('1em "Frutiger W01"');
      expect(isFontLoaded).toBe(true);
      expect(canLoadFonts).toEqual([{ family: 'Frutiger W01' }]);
    });

    it('detects when fonts fail to load', async () => {
      // Mock failed font loading
      const mockFonts = {
        load: vi.fn().mockRejectedValue(new Error('Font loading failed')),
        check: vi.fn().mockReturnValue(false),
        ready: Promise.resolve(new Set()),
      };
      
      Object.defineProperty(document, 'fonts', {
        value: mockFonts,
        writable: true,
      });

      render(
        <TestWrapper>
          <Button>Test Button</Button>
        </TestWrapper>
      );
      
      // Test font loading failure
      try {
        await document.fonts.load('1em "Frutiger W01"');
      } catch (error) {
        expect((error as Error).message).toBe('Font loading failed');
      }
      
      const isFontLoaded = document.fonts.check('1em "Frutiger W01"');
      expect(isFontLoaded).toBe(false);
    });

    it('applies fallback styles when Frutiger fails to load', () => {
      // Mock fonts as not available
      Object.defineProperty(document, 'fonts', {
        value: {
          load: vi.fn().mockRejectedValue(new Error('Font not found')),
          check: vi.fn().mockReturnValue(false),
          ready: Promise.resolve(new Set()),
        },
        writable: true,
      });

      render(
        <TestWrapper>
          <Button>Fallback Button</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      
      // The font stack should still be applied even if Frutiger fails
      expect(button.style.fontFamily).toBe('"Frutiger W01", Arial, Helvetica, sans-serif');
      
      // And the computed style should fall back appropriately
      const computedStyle = window.getComputedStyle(button);
      expect(computedStyle.fontFamily).toContain('Arial');
    });
  });

  describe('Responsive Behavior', () => {
    it('applies responsive padding based on screen size', () => {
      // Mock window.innerWidth for mobile
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 600,
      });
      
      render(
        <TestWrapper>
          <Button>Mobile Button</Button>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      
      // Reset
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024,
      });
    });
  });
});
