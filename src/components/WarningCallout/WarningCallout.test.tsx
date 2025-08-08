import { describe, it, expect } from 'vitest';
import { ServerRenderer } from '../../test-utils/ServerRenderer';
import { WarningCallout } from './WarningCallout';

describe('WarningCallout', () => {
  describe('Basic Rendering', () => {
    it('renders successfully with heading', () => {
      const container = ServerRenderer.render(<WarningCallout heading="Test Warning" />);
      const getByRole = (role: string, options?: any) => ServerRenderer.getByRole(container, role, options);
      expect(getByRole('heading')).toBeTruthy();
    });

    it('applies correct CSS classes', () => {
      const container = ServerRenderer.render(<WarningCallout heading="Test Warning" data-testid="warning-callout" />);
      const component = container.querySelector('[data-testid="warning-callout"]');
      expect(component!.className.includes('nhsuk-warning-callout')).toBeTruthy();
    });

    it('renders with custom className', () => {
      const container = ServerRenderer.render(
        <WarningCallout 
          heading="Test Warning" 
          className="custom-warning" 
          data-testid="warning-callout" 
        />
      );
      const component = container.querySelector('[data-testid="warning-callout"]');
      expect(component!.className.includes('nhsuk-warning-callout')).toBeTruthy();
      expect(component!.className.includes('custom-warning')).toBeTruthy();
    });
  });

  describe('Heading Levels', () => {
    it('renders h3 by default', () => {
      render(<WarningCallout heading="Default Heading" />);
      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveClass('nhsuk-warning-callout__label');
    });

    it('renders with custom heading level', () => {
      render(<WarningCallout heading="Custom Heading" headingLevel={2} />);
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveClass('nhsuk-warning-callout__label');
    });

    it('supports all heading levels', () => {
      const levels = [1, 2, 3, 4, 5, 6] as const;
      
      levels.forEach((level) => {
        const { unmount } = render(
          <WarningCallout heading={`Heading Level ${level}`} headingLevel={level} />
        );
        expect(screen.getByRole('heading', { level })).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe('Heading Content and Accessibility', () => {
    it('prepends "Important:" when heading does not contain "important"', () => {
      render(<WarningCallout heading="Check your details" />);
      const heading = screen.getByRole('heading');
      
      // Should have visually hidden "Important:" prefix
      expect(heading).toHaveTextContent('Important: Check your details');
      
      // Check for role="text" wrapper
      const textWrapper = heading.querySelector('[role="text"]');
      expect(textWrapper).toBeInTheDocument();
      
      // Check for visually hidden span
      const visuallyHidden = heading.querySelector('.nhsuk-u-visually-hidden');
      expect(visuallyHidden).toHaveTextContent('Important:');
    });

    it('does not prepend "Important:" when heading already contains "important"', () => {
      render(<WarningCallout heading="Important information" />);
      const heading = screen.getByRole('heading');
      
      // Should just have the heading text plus a colon
      expect(heading).toHaveTextContent('Important information:');
      
      // Should not have role="text" wrapper
      const textWrapper = heading.querySelector('[role="text"]');
      expect(textWrapper).not.toBeInTheDocument();
      
      // Should have visually hidden colon
      const visuallyHidden = heading.querySelector('.nhsuk-u-visually-hidden');
      expect(visuallyHidden).toHaveTextContent(':');
    });

    it('handles "Important" case insensitively', () => {
      const variations = [
        'Important notice',
        'IMPORTANT notice',
        'This is important',
        'ImPoRtAnT information'
      ];

      variations.forEach((heading, index) => {
        const { unmount } = render(
          <WarningCallout heading={heading} data-testid={`warning-${index}`} />
        );
        
        const headingElement = screen.getByRole('heading');
        
        // Should have colon, not "Important:" prefix
        expect(headingElement).toHaveTextContent(`${heading}:`);
        
        // Should not have role="text" wrapper
        const textWrapper = headingElement.querySelector('[role="text"]');
        expect(textWrapper).not.toBeInTheDocument();
        
        unmount();
      });
    });
  });

  describe('Content Rendering', () => {
    it('renders text content', () => {
      const text = 'This is important warning text';
      render(<WarningCallout heading="Warning" text={text} />);
      expect(screen.getByText(text)).toBeInTheDocument();
    });

    it('renders HTML content', () => {
      const html = '<p>This is <strong>HTML</strong> content</p>';
      render(<WarningCallout heading="Warning" html={html} />);
      expect(screen.getByText(/This is/)).toBeInTheDocument();
      expect(screen.getByText('HTML').tagName).toBe('STRONG');
    });

    it('renders children content', () => {
      render(
        <WarningCallout heading="Warning">
          <p>This is children content</p>
          <a href="/link">Important link</a>
        </WarningCallout>
      );
      expect(screen.getByText('This is children content')).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Important link' })).toBeInTheDocument();
    });

    it('prioritizes children over HTML and text', () => {
      render(
        <WarningCallout 
          heading="Warning" 
          text="Text content"
          html="<p>HTML content</p>"
        >
          <p>Children content</p>
        </WarningCallout>
      );
      
      expect(screen.getByText('Children content')).toBeInTheDocument();
      expect(screen.queryByText('Text content')).not.toBeInTheDocument();
      expect(screen.queryByText('HTML content')).not.toBeInTheDocument();
    });

    it('prioritizes HTML over text', () => {
      render(
        <WarningCallout 
          heading="Warning" 
          text="Text content"
          html="<p>HTML content</p>"
        />
      );
      
      expect(screen.getByText('HTML content')).toBeInTheDocument();
      expect(screen.queryByText('Text content')).not.toBeInTheDocument();
    });

    it('renders with heading only when no content provided', () => {
      render(<WarningCallout heading="Warning only" data-testid="warning" />);
      const warning = screen.getByTestId('warning');
      expect(screen.getByRole('heading')).toBeInTheDocument();
      
      // Should only contain the heading
      const paragraphs = warning.querySelectorAll('p');
      expect(paragraphs).toHaveLength(0);
    });

    it('wraps text in paragraph element', () => {
      render(<WarningCallout heading="Warning" text="Text content" />);
      const paragraph = screen.getByText('Text content');
      expect(paragraph.tagName).toBe('P');
    });
  });

  describe('HTML Attributes', () => {
    it('passes through additional HTML attributes', () => {
      render(
        <WarningCallout 
          heading="Warning" 
          id="custom-warning"
          role="alert"
          aria-live="polite"
          data-testid="warning"
        />
      );
      
      const warning = screen.getByTestId('warning');
      expect(warning).toHaveAttribute('id', 'custom-warning');
      expect(warning).toHaveAttribute('role', 'alert');
      expect(warning).toHaveAttribute('aria-live', 'polite');
    });

    it('supports data attributes', () => {
      render(
        <WarningCallout 
          heading="Warning" 
          data-module="warning-callout"
          data-track="true"
          data-testid="warning"
        />
      );
      
      const warning = screen.getByTestId('warning');
      expect(warning).toHaveAttribute('data-module', 'warning-callout');
      expect(warning).toHaveAttribute('data-track', 'true');
    });
  });

  describe('Accessibility', () => {
    it('has correct ARIA structure', () => {
      render(<WarningCallout heading="Check your details" />);
      
      const heading = screen.getByRole('heading');
      expect(heading).toBeInTheDocument();
      
      // Should be accessible by assistive technology
      expect(heading).toHaveAccessibleName(/important.*check your details/i);
    });

    it('provides context for screen readers with visually hidden text', () => {
      render(<WarningCallout heading="Complete your application" />);
      
      const visuallyHidden = document.querySelector('.nhsuk-u-visually-hidden');
      expect(visuallyHidden).toBeInTheDocument();
      expect(visuallyHidden).toHaveTextContent('Important:');
    });

    it('maintains semantic heading structure', () => {
      render(
        <div>
          <h1>Page Title</h1>
          <WarningCallout heading="Important Notice" headingLevel={2} />
          <h3>Section</h3>
        </div>
      );
      
      const headings = screen.getAllByRole('heading');
      expect(headings[0].tagName).toBe('H1');
      expect(headings[1].tagName).toBe('H2');
      expect(headings[2].tagName).toBe('H3');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty heading gracefully', () => {
      render(<WarningCallout heading="" data-testid="warning" />);
      const warning = screen.getByTestId('warning');
      expect(warning).toBeInTheDocument();
      
      const heading = screen.getByRole('heading');
      expect(heading).toHaveTextContent('Important:');
    });

    it('handles special characters in heading', () => {
      const specialHeading = 'Important: Check & verify "details" <now>';
      render(<WarningCallout heading={specialHeading} />);
      // Note: The component properly escapes HTML entities in JSX
      expect(screen.getByRole('heading')).toHaveTextContent(specialHeading + ':');
    });

    it('handles HTML content with complex structure', () => {
      const complexHTML = `
        <div>
          <p>First paragraph</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
          <p>Last paragraph</p>
        </div>
      `;
      
      render(<WarningCallout heading="Warning" html={complexHTML} />);
      expect(screen.getByText('First paragraph')).toBeInTheDocument();
      expect(screen.getByText('List item 1')).toBeInTheDocument();
      expect(screen.getByText('Last paragraph')).toBeInTheDocument();
    });
  });
});
