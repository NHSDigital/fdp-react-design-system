import { renderSSR as render } from '../../test-utils/renderSSR';
import { describe, it, expect, vi } from 'vitest';
import { InsetText } from './InsetText';

describe('InsetText', () => {
  it('renders with text prop', () => {
    const { getByText } = render(<InsetText text="This is inset text content" />);
    
    expect(getByText('This is inset text content')).toBeTruthy();
  });

  it('applies correct default classes', () => {
    const { getByText } = render(<InsetText text="Test content" />);
    
    const result = getByText('Test content').closest('.nhsuk-inset-text');
    expect(result!.className.includes('nhsuk-inset-text')).toBeTruthy();
  });

  it('applies custom className', () => {
    const { getByText } = render(<InsetText className="custom-inset" text="Test content" />);
    
    const result = getByText('Test content').closest('.nhsuk-inset-text');
    expect(result!.className.includes('nhsuk-inset-text')).toBeTruthy();
    expect(result!.className.includes('custom-inset')).toBeTruthy();
  });

  it('applies id attribute when provided', () => {
    const { getByText } = render(<InsetText id="test-inset" text="Test content" />);
    
    const result = getByText('Test content').closest('.nhsuk-inset-text');
    expect(result!.getAttribute('id')).toBe('test-inset');
  });

  describe('Content rendering', () => {
    it('renders text content in a paragraph', () => {
      const { getByText } = render(<InsetText text="Test inset text" />);
      
      const result = getByText('Test inset text');
      expect(result!.tagName).toBe('P');
    });

    it('renders html content with dangerouslySetInnerHTML', () => {
      const { getByText, container } = render(<InsetText html="<p>HTML <strong>content</strong> test</p>" />);
      
      const insetText = container.querySelector('.nhsuk-inset-text');
      expect(insetText!.innerHTML.includes('<p>HTML <strong>content</strong> test</p>')).toBeTruthy();
      expect(getByText('content')).toBeTruthy();
    });

    it('prioritizes children over html and text', () => {
      const { getByText, queryByText } = render(
        <InsetText 
          text="Text content"
          html="<p>HTML content</p>"
        >
          <p>Children content</p>
        </InsetText>
      );
      
      expect(getByText('Children content')).toBeTruthy();
      expect(queryByText('Text content')).toBe(null);
      expect(queryByText('HTML content')).toBe(null);
    });
  });

  describe('HTML content variations', () => {
    it('handles multiple paragraphs in html', () => {
      const htmlContent = '<p>First paragraph</p><p>Second paragraph</p>';
      const { getByText } = render(<InsetText html={htmlContent} />);
      
      expect(getByText('First paragraph')).toBeTruthy();
      expect(getByText('Second paragraph')).toBeTruthy();
    });

    it('handles links in html content', () => {
      const htmlContent = '<p>Visit the <a href="https://nhs.uk">NHS website</a> for more information</p>';
      const { getByRole } = render(<InsetText html={htmlContent} />);
      
      const result = getByRole('link');
      expect(result).toBeTruthy();
      expect(result!.getAttribute('href')).toBe('https://nhs.uk');
    });
  });
});
