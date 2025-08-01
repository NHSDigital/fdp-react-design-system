import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InsetText } from './InsetText';

describe('InsetText', () => {
  it('renders with text prop', () => {
    render(<InsetText text="This is inset text content" />);
    
    expect(screen.getByText('This is inset text content')).toBeInTheDocument();
  });

  it('applies correct default classes', () => {
    render(<InsetText text="Test content" />);
    
    const insetText = screen.getByText('Test content').closest('.nhsuk-inset-text');
    expect(insetText).toHaveClass('nhsuk-inset-text');
  });

  it('applies custom className', () => {
    render(<InsetText className="custom-inset" text="Test">Test content</InsetText>);
    
    const insetText = screen.getByText('Test content').closest('.nhsuk-inset-text');
    expect(insetText).toHaveClass('nhsuk-inset-text');
    expect(insetText).toHaveClass('custom-inset');
  });

  it('applies id attribute when provided', () => {
    render(<InsetText id="test-inset" text="Test content" />);
    
    const insetText = screen.getByText('Test content').closest('.nhsuk-inset-text');
    expect(insetText).toHaveAttribute('id', 'test-inset');
  });

  describe('Content rendering', () => {
    it('renders text content in a paragraph', () => {
      render(<InsetText text="Test inset text" />);
      
      const paragraph = screen.getByText('Test inset text');
      expect(paragraph.tagName).toBe('P');
    });

    it('renders html content with dangerouslySetInnerHTML', () => {
      render(<InsetText html="<p>HTML <strong>content</strong> test</p>" />);
      
      const insetText = document.querySelector('.nhsuk-inset-text');
      expect(insetText?.innerHTML).toContain('<p>HTML <strong>content</strong> test</p>');
      expect(screen.getByText('content')).toBeInTheDocument();
    });

    it('prioritizes children over html and text', () => {
      render(
        <InsetText 
          text="Text content"
          html="<p>HTML content</p>"
        >
          <p>Children content</p>
        </InsetText>
      );
      
      expect(screen.getByText('Children content')).toBeInTheDocument();
      expect(screen.queryByText('Text content')).not.toBeInTheDocument();
      expect(screen.queryByText('HTML content')).not.toBeInTheDocument();
    });

    it('prioritizes html over text', () => {
      render(
        <InsetText 
          text="Text content"
          html="<div>HTML content</div>"
        />
      );
      
      expect(screen.getByText('HTML content')).toBeInTheDocument();
      expect(screen.queryByText('Text content')).not.toBeInTheDocument();
    });

    it('renders nothing when no content provided', () => {
      render(<InsetText />);
      
      const insetText = document.querySelector('.nhsuk-inset-text');
      expect(insetText).toBeInTheDocument();
      expect(insetText?.children.length).toBe(0);
    });

    it('renders children with complex React nodes', () => {
      render(
        <InsetText>
          <p>First paragraph</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
          <p>Second paragraph with <strong>bold</strong> text</p>
        </InsetText>
      );
      
      expect(screen.getByText('First paragraph')).toBeInTheDocument();
      expect(screen.getByText('List item 1')).toBeInTheDocument();
      expect(screen.getByText('List item 2')).toBeInTheDocument();
      expect(screen.getByText(/Second paragraph with/)).toBeInTheDocument();
      expect(screen.getByText('bold')).toBeInTheDocument();
    });
  });

  describe('HTML content variations', () => {
    it('handles multiple paragraphs in html', () => {
      const htmlContent = '<p>First paragraph</p><p>Second paragraph</p>';
      render(<InsetText html={htmlContent} />);
      
      expect(screen.getByText('First paragraph')).toBeInTheDocument();
      expect(screen.getByText('Second paragraph')).toBeInTheDocument();
    });

    it('handles lists in html content', () => {
      const htmlContent = '<ul><li>Item 1</li><li>Item 2</li></ul>';
      render(<InsetText html={htmlContent} />);
      
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('handles links in html content', () => {
      const htmlContent = '<p>Visit the <a href="https://nhs.uk">NHS website</a> for more information</p>';
      render(<InsetText html={htmlContent} />);
      
      const link = screen.getByRole('link', { name: 'NHS website' });
      expect(link).toHaveAttribute('href', 'https://nhs.uk');
    });

    it('handles emphasized text in html content', () => {
      const htmlContent = '<p>This is <strong>important</strong> and <em>emphasized</em> text</p>';
      render(<InsetText html={htmlContent} />);
      
      expect(screen.getByText('important')).toBeInTheDocument();
      expect(screen.getByText('emphasized')).toBeInTheDocument();
    });
  });

  describe('Additional HTML attributes', () => {
    it('passes through additional props', () => {
      render(
        <InsetText 
          text="Test"
          data-testid="custom-inset"
          aria-label="Test inset text"
        />
      );
      
      const insetText = screen.getByTestId('custom-inset');
      expect(insetText).toHaveAttribute('aria-label', 'Test inset text');
    });

    it('supports data attributes', () => {
      render(
        <InsetText 
          text="Test"
          data-component="inset-text"
          data-variant="default"
        />
      );
      
      const insetText = screen.getByText('Test').closest('.nhsuk-inset-text');
      expect(insetText).toHaveAttribute('data-component', 'inset-text');
      expect(insetText).toHaveAttribute('data-variant', 'default');
    });

    it('supports ARIA attributes', () => {
      render(
        <InsetText 
          text="Important information"
          role="note"
          aria-labelledby="section-heading"
        />
      );
      
      const insetText = screen.getByRole('note');
      expect(insetText).toHaveAttribute('aria-labelledby', 'section-heading');
    });
  });

  describe('Edge cases', () => {
    it('handles special characters in text content', () => {
      const specialText = 'Inset text with "quotes", <brackets>, & symbols: £€$¥';
      render(<InsetText text={specialText} />);
      
      expect(screen.getByText(specialText)).toBeInTheDocument();
    });

    it('handles very long content', () => {
      const longText = 'This is a very long inset text content that spans multiple lines and contains extensive information about a particular topic in the NHS digital service guidelines and best practices for user interface design';
      render(<InsetText text={longText} />);
      
      expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it('handles unicode characters', () => {
      const unicodeText = 'Inset text with émojis 🏥 and ünicode characters';
      render(<InsetText text={unicodeText} />);
      
      expect(screen.getByText(unicodeText)).toBeInTheDocument();
    });

    it('handles HTML entities in text props', () => {
      render(<InsetText text="Less than &lt; and greater than &gt;" />);
      
      expect(screen.getByText('Less than < and greater than >')).toBeInTheDocument();
    });

    it('handles empty string content', () => {
      render(<InsetText text="" />);
      
      const insetText = document.querySelector('.nhsuk-inset-text');
      expect(insetText).toBeInTheDocument();
      // Empty string means no content is rendered
      expect(insetText?.textContent).toBe('');
      expect(insetText?.querySelector('p')).toBeNull();
    });

    it('handles whitespace-only content', () => {
      render(<InsetText text="   " />);
      
      // Whitespace-only content still creates a paragraph element
      const insetText = document.querySelector('.nhsuk-inset-text');
      expect(insetText).toBeInTheDocument();
      const paragraph = insetText?.querySelector('p');
      expect(paragraph).toBeInTheDocument();
      // HTML normalizes consecutive whitespace to a single space
      expect(paragraph?.textContent).toBeTruthy();
    });
  });

  describe('Content structure', () => {
    it('wraps text content in a paragraph element', () => {
      render(<InsetText text="Test content" />);
      
      const paragraph = screen.getByText('Test content');
      expect(paragraph.tagName).toBe('P');
      expect(paragraph.parentElement).toHaveClass('nhsuk-inset-text');
    });

    it('renders html content in a div wrapper', () => {
      render(<InsetText html="<span>HTML content</span>" />);
      
      const insetText = document.querySelector('.nhsuk-inset-text');
      const wrapper = insetText?.querySelector('div');
      expect(wrapper).toBeInTheDocument();
      expect(wrapper?.innerHTML).toBe('<span>HTML content</span>');
    });

    it('renders children directly without wrapper', () => {
      render(
        <InsetText>
          <span data-testid="direct-child">Direct child</span>
        </InsetText>
      );
      
      const child = screen.getByTestId('direct-child');
      expect(child.parentElement).toHaveClass('nhsuk-inset-text');
    });
  });

  describe('Accessibility', () => {
    it('can be used with proper semantic markup', () => {
      render(
        <InsetText role="note" aria-label="Important note">
          <p>This is important information that users should be aware of.</p>
        </InsetText>
      );
      
      const note = screen.getByRole('note');
      expect(note).toHaveAttribute('aria-label', 'Important note');
      expect(note).toHaveTextContent('This is important information that users should be aware of.');
    });

    it('maintains text content structure for screen readers', () => {
      render(
        <InsetText>
          <p>First important point</p>
          <p>Second important point</p>
        </InsetText>
      );
      
      const paragraphs = screen.getAllByText(/important point/);
      expect(paragraphs).toHaveLength(2);
      paragraphs.forEach(p => expect(p.tagName).toBe('P'));
    });

    it('supports focus management', () => {
      render(<InsetText tabIndex={0} text="Focusable inset text" />);
      
      const insetText = screen.getByText('Focusable inset text').closest('.nhsuk-inset-text');
      expect(insetText).toHaveAttribute('tabIndex', '0');
    });
  });

  describe('Content with links', () => {
    it('renders links correctly in children', () => {
      render(
        <InsetText>
          <p>
            For more information, visit the{' '}
            <a href="https://nhs.uk" target="_blank" rel="noopener noreferrer">
              NHS website
            </a>
            .
          </p>
        </InsetText>
      );
      
      const link = screen.getByRole('link', { name: 'NHS website' });
      expect(link).toHaveAttribute('href', 'https://nhs.uk');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('preserves link functionality', () => {
      const handleClick = vi.fn();
      render(
        <InsetText>
          <p>
            <a href="#test" onClick={handleClick}>
              Test link
            </a>
          </p>
        </InsetText>
      );
      
      const link = screen.getByRole('link', { name: 'Test link' });
      link.click();
      expect(handleClick).toHaveBeenCalled();
    });
  });
});
