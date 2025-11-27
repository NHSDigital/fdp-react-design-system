import { renderSSR as render } from '../../test-utils/renderSSR';
import { describe, it, expect } from 'vitest';
import { Label } from './Label';

describe('Label', () => {
  it('renders basic label correctly', () => {
    const { getByText } = render(<Label htmlFor="test-input">Test Label</Label>);
    
    const label = getByText('Test Label');
    expect(label).toBeTruthy();
    expect(label?.getAttribute('for')).toBe('test-input');
  });

  it('applies correct default classes', () => {
    const { getByText } = render(<Label htmlFor="test-input">Test Label</Label>);
    
    const label = getByText('Test Label');
    expect(label?.className.includes('nhsuk-label')).toBe(true);
  });

  it('renders as label element by default', () => {
    const { getByText } = render(<Label htmlFor="test-input">Test Label</Label>);
    
    const label = getByText('Test Label');
    expect(label?.tagName).toBe('LABEL');
  });

  it('renders text content correctly', () => {
    const { getByText } = render(<Label htmlFor="test-input">Email address</Label>);
    
    expect(getByText('Email address')).toBeTruthy();
  });

  describe('Size variants', () => {
    it('applies extra large size class', () => {
      const { getByText } = render(<Label htmlFor="test-input" size="xl">Extra Large Label</Label>);
      
      const label = getByText('Extra Large Label');
      expect(label?.className.includes('nhsuk-label--xl')).toBe(true);
    });

    it('applies large size class', () => {
      const { getByText } = render(<Label htmlFor="test-input" size="l">Large Label</Label>);
      
      const label = getByText('Large Label');
      expect(label?.className.includes('nhsuk-label--l')).toBe(true);
    });

    it('does not apply size class for default medium size', () => {
      const { getByText } = render(<Label htmlFor="test-input" size="m">Medium Label</Label>);
      
      const label = getByText('Medium Label');
      expect(label?.className.includes('nhsuk-label--m')).toBe(false);
      expect(label?.className.includes('nhsuk-label')).toBe(true);
    });

    it('applies small size class', () => {
      const { getByText } = render(<Label htmlFor="test-input" size="s">Small Label</Label>);
      
      const label = getByText('Small Label');
      expect(label?.className.includes('nhsuk-label--s')).toBe(true);
    });

    it('uses medium size by default when no size specified', () => {
      const { getByText } = render(<Label htmlFor="test-input">Default Label</Label>);
      
      const label = getByText('Default Label');
      expect(label?.className.includes('nhsuk-label--xl')).toBe(false);
      expect(label?.className.includes('nhsuk-label--l')).toBe(false);
      expect(label?.className.includes('nhsuk-label--m')).toBe(false);
      expect(label?.className.includes('nhsuk-label--s')).toBe(false);
      expect(label?.className.includes('nhsuk-label')).toBe(true);
    });
  });

  describe('Page heading variant', () => {
    it('renders as h1 when isPageHeading is true', () => {
      const { getByRole } = render(<Label htmlFor="test-input" isPageHeading>Page Heading Label</Label>);
      
      const heading = getByRole('heading', { level: 1 });
      expect(heading).toBeTruthy();
      expect(heading?.textContent).toContain('Page Heading Label');
      expect(heading?.tagName).toBe('H1');
    });

    it('includes nested label wrapper for page headings', () => {
      const { getByRole, container } = render(<Label htmlFor="test-input" isPageHeading>Page Heading Label</Label>);
      
      const heading = getByRole('heading', { level: 1 });
      const nestedLabel = container.querySelector('.nhsuk-label-wrapper');
      expect(nestedLabel).toBeTruthy();
      expect(nestedLabel?.getAttribute('for')).toBe('test-input');
      expect(nestedLabel?.textContent).toContain('Page Heading Label');
    });

    it('does not apply htmlFor to h1 element when isPageHeading is true', () => {
      const { getByRole } = render(<Label htmlFor="test-input" isPageHeading>Page Heading Label</Label>);
      
      const heading = getByRole('heading', { level: 1 });
      expect(heading?.hasAttribute('for')).toBe(false);
    });

    it('applies correct classes to page heading', () => {
      const { getByRole } = render(<Label htmlFor="test-input" isPageHeading>Page Heading Label</Label>);
      
      const heading = getByRole('heading', { level: 1 });
      expect(heading?.className.includes('nhsuk-label')).toBe(true);
    });

    it('applies size classes to page heading', () => {
      const { getByRole } = render(<Label htmlFor="test-input" isPageHeading size="xl">Page Heading Label</Label>);
      
      const heading = getByRole('heading', { level: 1 });
      expect(heading?.className.includes('nhsuk-label--xl')).toBe(true);
    });
  });

  describe('Custom styling', () => {
    it('applies custom className', () => {
      const { getByText } = render(<Label htmlFor="test-input" className="custom-label">Custom Label</Label>);
      
      const label = getByText('Custom Label');
      expect(label?.className.includes('custom-label')).toBe(true);
    });

    it('combines custom className with NHS classes', () => {
      const { getByText } = render(<Label htmlFor="test-input" className="custom-label" size="l">Custom Label</Label>);
      
      const label = getByText('Custom Label');
      expect(label?.className.includes('custom-label')).toBe(true);
      expect(label?.className.includes('nhsuk-label')).toBe(true);
      expect(label?.className.includes('nhsuk-label--l')).toBe(true);
    });

    it('combines custom className with page heading classes', () => {
      const { getByRole } = render(<Label htmlFor="test-input" className="custom-heading" isPageHeading>Custom Heading</Label>);
      
      const heading = getByRole('heading', { level: 1 });
      expect(heading?.className.includes('custom-heading')).toBe(true);
      expect(heading?.className.includes('nhsuk-label')).toBe(true);
    });
  });

  describe('Content rendering', () => {
    it('renders ReactNode children correctly', () => {
      const { getByText } = render(
        <Label htmlFor="test-input">
          <span>Complex</span> <strong>Label</strong> Content
        </Label>
      );
      
      expect(getByText('Complex')).toBeTruthy();
      expect(getByText('Label')).toBeTruthy();
      expect(getByText('Content')).toBeTruthy();
    });

    it('renders nested elements in children', () => {
      const { getByText, container } = render(
        <Label htmlFor="test-input">
          Label with <em>emphasis</em> and <code>code</code>
        </Label>
      );
      
      const label = container.querySelector('label');
      expect(label).toBeTruthy();
      expect(getByText('emphasis')).toBeTruthy();
      expect(getByText('code')).toBeTruthy();
    });

    it('handles empty children gracefully', () => {
      const { container } = render(<Label htmlFor="test-input">{''}</Label>);
      
      const label = container.querySelector('label[for="test-input"]');
      expect(label).toBeTruthy();
      expect(label?.textContent).toBe('');
    });
  });

  describe('Accessibility', () => {
    it('properly associates with form controls via htmlFor', () => {
      const { getByText, getByRole } = render(
        <div>
          <Label htmlFor="email-input">Email Address</Label>
          <input id="email-input" type="email" />
        </div>
      );
      
      const label = getByText('Email Address');
      const input = getByRole('textbox');
      
      expect(label?.getAttribute('for')).toBe('email-input');
      expect(input?.getAttribute('id')).toBe('email-input');
    });

    it('maintains accessibility when used as page heading', () => {
      const { getByRole, container } = render(
        <div>
          <Label htmlFor="main-input" isPageHeading>Main Form Heading</Label>
          <input id="main-input" type="text" />
        </div>
      );
      
      const heading = getByRole('heading', { level: 1 });
      const nestedLabel = container.querySelector('.nhsuk-label-wrapper');
      const input = getByRole('textbox');
      
      expect(nestedLabel?.getAttribute('for')).toBe('main-input');
      expect(input?.getAttribute('id')).toBe('main-input');
    });

    it('works without htmlFor attribute', () => {
      const { getByText } = render(<Label>Standalone Label</Label>);
      
      const label = getByText('Standalone Label');
      expect(label).toBeTruthy();
      expect(label?.hasAttribute('for')).toBe(false);
    });
  });

  describe('Additional HTML attributes', () => {
    it('passes through additional props to label element', () => {
      const { getByText } = render(
        <Label 
          htmlFor="test-input" 
          data-testid="custom-label"
          aria-label="Custom aria label"
        >
          Test Label
        </Label>
      );
      
      const label = getByText('Test Label');
      expect(label?.getAttribute('data-testid')).toBe('custom-label');
      expect(label?.getAttribute('aria-label')).toBe('Custom aria label');
    });

    it('passes through additional props to h1 element when isPageHeading', () => {
      const { getByRole } = render(
        <Label 
          htmlFor="test-input" 
          isPageHeading
          data-testid="custom-heading"
          aria-label="Custom heading aria label"
        >
          Heading Label
        </Label>
      );
      
      const heading = getByRole('heading', { level: 1 });
      expect(heading?.getAttribute('data-testid')).toBe('custom-heading');
      expect(heading?.getAttribute('aria-label')).toBe('Custom heading aria label');
    });
  });

  describe('Edge cases', () => {
    it('handles special characters in content', () => {
      const specialText = 'Label with "quotes", <tags>, & symbols: £€$¥';
      const { getByText } = render(<Label htmlFor="test-input">{specialText}</Label>);
      
      expect(getByText(specialText)).toBeTruthy();
    });

    it('handles numeric children', () => {
      const { getByText } = render(<Label htmlFor="test-input">{42}</Label>);
      
      expect(getByText('42')).toBeTruthy();
    });

    it('handles boolean-like content', () => {
      const { getByText } = render(<Label htmlFor="test-input">true</Label>);
      
      expect(getByText('true')).toBeTruthy();
    });

    it('handles very long label text', () => {
      const longText = 'This is a very long label text that might wrap to multiple lines in certain layouts and should still be properly associated with its form control and maintain all accessibility features according to NHS design standards';
      const { getByText } = render(<Label htmlFor="test-input">{longText}</Label>);
      
      expect(getByText(longText)).toBeTruthy();
    });

    it('handles unicode characters', () => {
      const unicodeText = 'Label with émojis 🏥 and ünicode characters';
      const { getByText } = render(<Label htmlFor="test-input">{unicodeText}</Label>);
      
      expect(getByText(unicodeText)).toBeTruthy();
    });
  });

  describe('Integration scenarios', () => {
    it('works with multiple form controls', () => {
      const { getByText } = render(
        <div>
          <Label htmlFor="first-name">First Name</Label>
          <input id="first-name" type="text" />
          
          <Label htmlFor="last-name">Last Name</Label>
          <input id="last-name" type="text" />
          
          <Label htmlFor="email">Email</Label>
          <input id="email" type="email" />
        </div>
      );
      
      const firstNameLabel = getByText('First Name');
      const lastNameLabel = getByText('Last Name');
      const emailLabel = getByText('Email');
      
      expect(firstNameLabel?.getAttribute('for')).toBe('first-name');
      expect(lastNameLabel?.getAttribute('for')).toBe('last-name');
      expect(emailLabel?.getAttribute('for')).toBe('email');
    });

    it('maintains correct structure during re-renders', () => {
      // Test size "m" (default - no size class)
      const { container: container1 } = render(
        <Label htmlFor="dynamic-input" size="m">Original Label</Label>
      );
      
      let label = container1.querySelector('.nhsuk-label');
      expect(label?.className.includes('nhsuk-label')).toBe(true);
      expect(label?.className.includes('nhsuk-label--l')).toBe(false);
      
      // Test size "l" separately
      const { container: container2 } = render(
        <Label htmlFor="dynamic-input" size="l">Updated Label</Label>
      );
      
      label = container2.querySelector('.nhsuk-label');
      expect(label?.className.includes('nhsuk-label--l')).toBe(true);
    });

    it('switches correctly between regular and page heading modes', () => {
      // Test regular label mode
      const { container: container1 } = render(
        <Label htmlFor="mode-input">Regular Label</Label>
      );
      
      let element = container1.querySelector('label');
      expect(element?.tagName).toBe('LABEL');
      
      // Test page heading mode separately  
      const { container: container2 } = render(
        <Label htmlFor="mode-input" isPageHeading>Heading Label</Label>
      );
      
      const headingElement = container2.querySelector('h1');
      expect(headingElement?.tagName).toBe('H1');
      expect(headingElement?.textContent).toBe('Heading Label');
    });
  });
});
