import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Label } from './Label';

describe('Label', () => {
  it('renders basic label correctly', () => {
    render(<Label htmlFor="test-input">Test Label</Label>);
    
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'test-input');
  });

  it('applies correct default classes', () => {
    render(<Label htmlFor="test-input">Test Label</Label>);
    
    const label = screen.getByText('Test Label');
    expect(label).toHaveClass('nhsuk-label');
  });

  it('renders as label element by default', () => {
    render(<Label htmlFor="test-input">Test Label</Label>);
    
    const label = screen.getByText('Test Label');
    expect(label.tagName).toBe('LABEL');
  });

  it('renders text content correctly', () => {
    render(<Label htmlFor="test-input">Email address</Label>);
    
    expect(screen.getByText('Email address')).toBeInTheDocument();
  });

  describe('Size variants', () => {
    it('applies extra large size class', () => {
      render(<Label htmlFor="test-input" size="xl">Extra Large Label</Label>);
      
      const label = screen.getByText('Extra Large Label');
      expect(label).toHaveClass('nhsuk-label--xl');
    });

    it('applies large size class', () => {
      render(<Label htmlFor="test-input" size="l">Large Label</Label>);
      
      const label = screen.getByText('Large Label');
      expect(label).toHaveClass('nhsuk-label--l');
    });

    it('does not apply size class for default medium size', () => {
      render(<Label htmlFor="test-input" size="m">Medium Label</Label>);
      
      const label = screen.getByText('Medium Label');
      expect(label).not.toHaveClass('nhsuk-label--m');
      expect(label).toHaveClass('nhsuk-label');
    });

    it('applies small size class', () => {
      render(<Label htmlFor="test-input" size="s">Small Label</Label>);
      
      const label = screen.getByText('Small Label');
      expect(label).toHaveClass('nhsuk-label--s');
    });

    it('uses medium size by default when no size specified', () => {
      render(<Label htmlFor="test-input">Default Label</Label>);
      
      const label = screen.getByText('Default Label');
      expect(label).not.toHaveClass('nhsuk-label--xl');
      expect(label).not.toHaveClass('nhsuk-label--l');
      expect(label).not.toHaveClass('nhsuk-label--m');
      expect(label).not.toHaveClass('nhsuk-label--s');
      expect(label).toHaveClass('nhsuk-label');
    });
  });

  describe('Page heading variant', () => {
    it('renders as h1 when isPageHeading is true', () => {
      render(<Label htmlFor="test-input" isPageHeading>Page Heading Label</Label>);
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Page Heading Label');
      expect(heading.tagName).toBe('H1');
    });

    it('includes nested label wrapper for page headings', () => {
      render(<Label htmlFor="test-input" isPageHeading>Page Heading Label</Label>);
      
      const heading = screen.getByRole('heading', { level: 1 });
      const nestedLabel = heading.querySelector('.nhsuk-label-wrapper');
      expect(nestedLabel).toBeInTheDocument();
      expect(nestedLabel).toHaveAttribute('for', 'test-input');
      expect(nestedLabel).toHaveTextContent('Page Heading Label');
    });

    it('does not apply htmlFor to h1 element when isPageHeading is true', () => {
      render(<Label htmlFor="test-input" isPageHeading>Page Heading Label</Label>);
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).not.toHaveAttribute('for');
    });

    it('applies correct classes to page heading', () => {
      render(<Label htmlFor="test-input" isPageHeading>Page Heading Label</Label>);
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('nhsuk-label');
    });

    it('applies size classes to page heading', () => {
      render(<Label htmlFor="test-input" isPageHeading size="xl">Page Heading Label</Label>);
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('nhsuk-label--xl');
    });
  });

  describe('Custom styling', () => {
    it('applies custom className', () => {
      render(<Label htmlFor="test-input" className="custom-label">Custom Label</Label>);
      
      const label = screen.getByText('Custom Label');
      expect(label).toHaveClass('custom-label');
    });

    it('combines custom className with NHS classes', () => {
      render(<Label htmlFor="test-input" className="custom-label" size="l">Custom Label</Label>);
      
      const label = screen.getByText('Custom Label');
      expect(label).toHaveClass('custom-label');
      expect(label).toHaveClass('nhsuk-label');
      expect(label).toHaveClass('nhsuk-label--l');
    });

    it('combines custom className with page heading classes', () => {
      render(<Label htmlFor="test-input" className="custom-heading" isPageHeading>Custom Heading</Label>);
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('custom-heading');
      expect(heading).toHaveClass('nhsuk-label');
    });
  });

  describe('Content rendering', () => {
    it('renders ReactNode children correctly', () => {
      render(
        <Label htmlFor="test-input">
          <span>Complex</span> <strong>Label</strong> Content
        </Label>
      );
      
      expect(screen.getByText('Complex')).toBeInTheDocument();
      expect(screen.getByText('Label')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders nested elements in children', () => {
      render(
        <Label htmlFor="test-input">
          Label with <em>emphasis</em> and <code>code</code>
        </Label>
      );
      
      const label = screen.getByText(/Label with/);
      expect(label).toBeInTheDocument();
      expect(screen.getByText('emphasis')).toBeInTheDocument();
      expect(screen.getByText('code')).toBeInTheDocument();
    });

    it('handles empty children gracefully', () => {
      render(<Label htmlFor="test-input">{''}</Label>);
      
      const label = document.querySelector('label[for="test-input"]');
      expect(label).toBeInTheDocument();
      expect(label).toHaveTextContent('');
    });
  });

  describe('Accessibility', () => {
    it('properly associates with form controls via htmlFor', () => {
      render(
        <div>
          <Label htmlFor="email-input">Email Address</Label>
          <input id="email-input" type="email" />
        </div>
      );
      
      const label = screen.getByText('Email Address');
      const input = screen.getByRole('textbox');
      
      expect(label).toHaveAttribute('for', 'email-input');
      expect(input).toHaveAttribute('id', 'email-input');
    });

    it('maintains accessibility when used as page heading', () => {
      render(
        <div>
          <Label htmlFor="main-input" isPageHeading>Main Form Heading</Label>
          <input id="main-input" type="text" />
        </div>
      );
      
      const heading = screen.getByRole('heading', { level: 1 });
      const nestedLabel = heading.querySelector('.nhsuk-label-wrapper');
      const input = screen.getByRole('textbox');
      
      expect(nestedLabel).toHaveAttribute('for', 'main-input');
      expect(input).toHaveAttribute('id', 'main-input');
    });

    it('works without htmlFor attribute', () => {
      render(<Label>Standalone Label</Label>);
      
      const label = screen.getByText('Standalone Label');
      expect(label).toBeInTheDocument();
      expect(label).not.toHaveAttribute('for');
    });
  });

  describe('Additional HTML attributes', () => {
    it('passes through additional props to label element', () => {
      render(
        <Label 
          htmlFor="test-input" 
          data-testid="custom-label"
          aria-label="Custom aria label"
        >
          Test Label
        </Label>
      );
      
      const label = screen.getByText('Test Label');
      expect(label).toHaveAttribute('data-testid', 'custom-label');
      expect(label).toHaveAttribute('aria-label', 'Custom aria label');
    });

    it('passes through additional props to h1 element when isPageHeading', () => {
      render(
        <Label 
          htmlFor="test-input" 
          isPageHeading
          data-testid="custom-heading"
          aria-label="Custom heading aria label"
        >
          Heading Label
        </Label>
      );
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveAttribute('data-testid', 'custom-heading');
      expect(heading).toHaveAttribute('aria-label', 'Custom heading aria label');
    });
  });

  describe('Edge cases', () => {
    it('handles special characters in content', () => {
      const specialText = 'Label with "quotes", <tags>, & symbols: £€$¥';
      render(<Label htmlFor="test-input">{specialText}</Label>);
      
      expect(screen.getByText(specialText)).toBeInTheDocument();
    });

    it('handles numeric children', () => {
      render(<Label htmlFor="test-input">{42}</Label>);
      
      expect(screen.getByText('42')).toBeInTheDocument();
    });

    it('handles boolean-like content', () => {
      render(<Label htmlFor="test-input">true</Label>);
      
      expect(screen.getByText('true')).toBeInTheDocument();
    });

    it('handles very long label text', () => {
      const longText = 'This is a very long label text that might wrap to multiple lines in certain layouts and should still be properly associated with its form control and maintain all accessibility features according to NHS design standards';
      render(<Label htmlFor="test-input">{longText}</Label>);
      
      expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it('handles unicode characters', () => {
      const unicodeText = 'Label with émojis 🏥 and ünicode characters';
      render(<Label htmlFor="test-input">{unicodeText}</Label>);
      
      expect(screen.getByText(unicodeText)).toBeInTheDocument();
    });
  });

  describe('Integration scenarios', () => {
    it('works with multiple form controls', () => {
      render(
        <div>
          <Label htmlFor="first-name">First Name</Label>
          <input id="first-name" type="text" />
          
          <Label htmlFor="last-name">Last Name</Label>
          <input id="last-name" type="text" />
          
          <Label htmlFor="email">Email</Label>
          <input id="email" type="email" />
        </div>
      );
      
      expect(screen.getByText('First Name')).toHaveAttribute('for', 'first-name');
      expect(screen.getByText('Last Name')).toHaveAttribute('for', 'last-name');
      expect(screen.getByText('Email')).toHaveAttribute('for', 'email');
    });

    it('maintains correct structure during re-renders', () => {
      const { rerender } = render(
        <Label htmlFor="dynamic-input" size="m">Original Label</Label>
      );
      
      let label = screen.getByText('Original Label');
      expect(label).toHaveClass('nhsuk-label');
      expect(label).not.toHaveClass('nhsuk-label--l');
      
      // Re-render with different props
      rerender(
        <Label htmlFor="dynamic-input" size="l">Updated Label</Label>
      );
      
      label = screen.getByText('Updated Label');
      expect(label).toHaveClass('nhsuk-label--l');
    });

    it('switches correctly between regular and page heading modes', () => {
      const { rerender } = render(
        <Label htmlFor="mode-input">Regular Label</Label>
      );
      
      let element = screen.getByText('Regular Label');
      expect(element.tagName).toBe('LABEL');
      
      // Re-render as page heading
      rerender(
        <Label htmlFor="mode-input" isPageHeading>Heading Label</Label>
      );
      
      element = screen.getByRole('heading', { level: 1 });
      expect(element.tagName).toBe('H1');
      expect(element).toHaveTextContent('Heading Label');
    });
  });
});
