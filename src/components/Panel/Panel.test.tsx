import { render, screen } from '@testing-library/react';
import { Panel } from './Panel';

describe('Panel', () => {
  it('renders basic panel with heading and body text', () => {
    render(
      <Panel 
        headingText="Test Panel Heading"
        bodyText="This is test panel body text"
      />
    );
    
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Test Panel Heading');
    expect(screen.getByText('This is test panel body text')).toBeInTheDocument();
  });

  it('applies correct default classes', () => {
    render(<Panel headingText="Test">Test content</Panel>);
    
    const panel = screen.getByText('Test content').closest('.nhsuk-panel');
    expect(panel).toHaveClass('nhsuk-panel');
  });

  it('applies custom className', () => {
    render(<Panel className="custom-panel" headingText="Test">Content</Panel>);
    
    const panel = screen.getByText('Content').closest('.nhsuk-panel');
    expect(panel).toHaveClass('nhsuk-panel');
    expect(panel).toHaveClass('custom-panel');
  });

  it('applies id attribute when provided', () => {
    render(<Panel id="test-panel" headingText="Test">Content</Panel>);
    
    const panel = screen.getByText('Content').closest('.nhsuk-panel');
    expect(panel).toHaveAttribute('id', 'test-panel');
  });

  describe('Heading rendering', () => {
    it('renders h1 when headingLevel is 1', () => {
      render(<Panel headingText="Level 1 Heading" headingLevel={1} />);
      
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Level 1 Heading');
    });

    it('renders h2 by default', () => {
      render(<Panel headingText="Default Heading" />);
      
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Default Heading');
    });

    it('renders h3 when headingLevel is 3', () => {
      render(<Panel headingText="Level 3 Heading" headingLevel={3} />);
      
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Level 3 Heading');
    });

    it('renders h6 when headingLevel is 6', () => {
      render(<Panel headingText="Level 6 Heading" headingLevel={6} />);
      
      expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent('Level 6 Heading');
    });

    it('renders headingHtml with dangerouslySetInnerHTML', () => {
      render(<Panel headingHtml="<strong>Bold</strong> Heading" headingLevel={2} />);
      
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading.innerHTML).toBe('<strong>Bold</strong> Heading');
    });

    it('prioritizes headingHtml over headingText', () => {
      render(
        <Panel 
          headingText="Text Heading"
          headingHtml="<em>HTML</em> Heading"
          headingLevel={2}
        />
      );
      
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading.innerHTML).toBe('<em>HTML</em> Heading');
      expect(heading).not.toHaveTextContent('Text Heading');
    });

    it('applies correct heading class', () => {
      render(<Panel headingText="Test Heading" />);
      
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toHaveClass('nhsuk-panel__heading');
    });
  });

  describe('Body rendering', () => {
    it('renders bodyText in a paragraph', () => {
      render(<Panel bodyText="Test body text" />);
      
      const body = document.querySelector('.nhsuk-panel__body');
      expect(body).toBeInTheDocument();
      expect(body?.querySelector('p')).toHaveTextContent('Test body text');
    });

    it('renders bodyHtml with dangerouslySetInnerHTML', () => {
      render(<Panel bodyHtml="<p>HTML <strong>body</strong> content</p>" />);
      
      const body = document.querySelector('.nhsuk-panel__body');
      expect(body?.innerHTML).toBe('<p>HTML <strong>body</strong> content</p>');
    });

    it('prioritizes children over bodyHtml and bodyText', () => {
      render(
        <Panel 
          bodyText="Text body"
          bodyHtml="<p>HTML body</p>"
        >
          <p>Children content</p>
        </Panel>
      );
      
      const body = document.querySelector('.nhsuk-panel__body');
      expect(body).toHaveTextContent('Children content');
      expect(body).not.toHaveTextContent('Text body');
      expect(body?.innerHTML).not.toContain('HTML body');
    });

    it('prioritizes bodyHtml over bodyText', () => {
      render(
        <Panel 
          bodyText="Text body"
          bodyHtml="<div>HTML body</div>"
        />
      );
      
      const body = document.querySelector('.nhsuk-panel__body');
      expect(body?.innerHTML).toBe('<div>HTML body</div>');
      expect(body).not.toHaveTextContent('Text body');
    });

    it('applies correct body class', () => {
      render(<Panel bodyText="Test body" />);
      
      const body = document.querySelector('.nhsuk-panel__body');
      expect(body).toHaveClass('nhsuk-panel__body');
    });
  });

  describe('Content variations', () => {
    it('renders only heading when no body content provided', () => {
      render(<Panel headingText="Only Heading" />);
      
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Only Heading');
      expect(document.querySelector('.nhsuk-panel__body')).not.toBeInTheDocument();
    });

    it('renders only body when no heading provided', () => {
      render(<Panel bodyText="Only body content" />);
      
      expect(screen.queryByRole('heading')).not.toBeInTheDocument();
      expect(screen.getByText('Only body content')).toBeInTheDocument();
    });

    it('renders children with complex React nodes', () => {
      render(
        <Panel headingText="Complex Content">
          <p>First paragraph</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
          <p>Second paragraph with <strong>bold</strong> text</p>
        </Panel>
      );
      
      expect(screen.getByText('First paragraph')).toBeInTheDocument();
      expect(screen.getByText('List item 1')).toBeInTheDocument();
      expect(screen.getByText('List item 2')).toBeInTheDocument();
      expect(screen.getByText(/Second paragraph with/)).toBeInTheDocument();
      expect(screen.getByText('bold')).toBeInTheDocument();
    });

    it('handles empty panel gracefully', () => {
      render(<Panel />);
      
      const panel = document.querySelector('.nhsuk-panel');
      expect(panel).toBeInTheDocument();
      expect(panel?.children.length).toBe(0);
    });
  });

  describe('Additional HTML attributes', () => {
    it('passes through additional props', () => {
      render(
        <Panel 
          headingText="Test"
          data-testid="custom-panel"
          aria-label="Test panel"
        >
          Content
        </Panel>
      );
      
      const panel = screen.getByTestId('custom-panel');
      expect(panel).toHaveAttribute('aria-label', 'Test panel');
    });

    it('supports data attributes', () => {
      render(
        <Panel 
          headingText="Test"
          data-component="panel"
          data-variant="default"
        >
          Content
        </Panel>
      );
      
      const panel = screen.getByText('Content').closest('.nhsuk-panel');
      expect(panel).toHaveAttribute('data-component', 'panel');
      expect(panel).toHaveAttribute('data-variant', 'default');
    });
  });

  describe('Edge cases', () => {
    it('handles special characters in text content', () => {
      const specialText = 'Panel with "quotes", <brackets>, & symbols: £€$¥';
      render(<Panel headingText={specialText} bodyText={specialText} />);
      
      expect(screen.getByRole('heading')).toHaveTextContent(specialText);
      expect(screen.getByText(specialText)).toBeInTheDocument();
    });

    it('handles very long content', () => {
      const longText = 'This is a very long panel content that spans multiple lines and contains extensive information about a particular topic in the NHS digital service guidelines and best practices for user interface design';
      render(<Panel headingText="Long Content Test" bodyText={longText} />);
      
      expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it('handles unicode characters', () => {
      const unicodeText = 'Panel with émojis 💊 and ünicode characters';
      render(<Panel headingText={unicodeText} bodyText={unicodeText} />);
      
      expect(screen.getByRole('heading')).toHaveTextContent(unicodeText);
      expect(screen.getAllByText(unicodeText)).toHaveLength(2);
    });

    it('handles HTML entities in text props', () => {
      render(<Panel headingText="Less than &lt; and greater than &gt;" />);
      
      expect(screen.getByRole('heading')).toHaveTextContent('Less than < and greater than >');
    });
  });

  describe('Accessibility', () => {
    it('maintains proper heading hierarchy', () => {
      render(
        <div>
          <h1>Page Title</h1>
          <Panel headingText="Panel Heading" headingLevel={2}>
            Panel content
          </Panel>
        </div>
      );
      
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Page Title');
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Panel Heading');
    });

    it('supports ARIA labeling', () => {
      render(
        <Panel 
          headingText="Accessible Panel"
          aria-labelledby="panel-heading"
          role="region"
        >
          Panel content
        </Panel>
      );
      
      const panel = screen.getByRole('region');
      expect(panel).toHaveAttribute('aria-labelledby', 'panel-heading');
    });

    it('works with screen readers', () => {
      render(
        <Panel 
          headingText="Important Information"
          bodyText="This panel contains critical health information."
        />
      );
      
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(screen.getByText('This panel contains critical health information.')).toBeInTheDocument();
    });
  });
});
