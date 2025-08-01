import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Expander } from '../Expander';
import { describe, it, expect } from 'vitest';

describe('Expander', () => {
  describe('Basic functionality', () => {
    it('should render with summary text', () => {
      render(<Expander summaryText="More information" text="This is the hidden content" />);
      
      expect(screen.getByText('More information')).toBeInTheDocument();
      expect(screen.getByText('This is the hidden content')).toBeInTheDocument();
    });

    it('should render with summary HTML', () => {
      render(
        <Expander
          summaryHtml="<strong>More</strong> information"
          text="This is the hidden content"
        />
      );
      
      expect(screen.getByText('information')).toBeInTheDocument();
      expect(screen.getByRole('strong')).toHaveTextContent('More');
    });

    it('should render with HTML content', () => {
      render(
        <Expander
          summaryText="More information"
          html="<p>This is a <strong>paragraph</strong></p>"
        />
      );
      
      expect(screen.getByText('paragraph')).toBeInTheDocument();
      expect(screen.getByRole('strong')).toHaveTextContent('paragraph');
    });

    it('should render with children content', () => {
      render(
        <Expander summaryText="More information">
          <p>This is child content</p>
        </Expander>
      );
      
      expect(screen.getByText('This is child content')).toBeInTheDocument();
    });

    it('should prioritize children over html and text props', () => {
      render(
        <Expander
          summaryText="More information"
          text="This should not appear"
          html="<p>This should also not appear</p>"
        >
          <p>This is child content</p>
        </Expander>
      );
      
      expect(screen.getByText('This is child content')).toBeInTheDocument();
      expect(screen.queryByText('This should not appear')).not.toBeInTheDocument();
      expect(screen.queryByText('This should also not appear')).not.toBeInTheDocument();
    });

    it('should prioritize summaryHtml over summaryText', () => {
      render(
        <Expander
          summaryText="This should not appear"
          summaryHtml="<strong>This should appear</strong>"
          text="Content"
        />
      );
      
      expect(screen.queryByText('This should not appear')).not.toBeInTheDocument();
      expect(screen.getByRole('strong')).toHaveTextContent('This should appear');
    });

    it('should prioritize html over text prop', () => {
      render(
        <Expander
          summaryText="Summary"
          text="This should not appear"
          html="<p>This should appear</p>"
        />
      );
      
      expect(screen.queryByText('This should not appear')).not.toBeInTheDocument();
      expect(screen.getByText('This should appear')).toBeInTheDocument();
    });
  });

  describe('States and attributes', () => {
    it('should be closed by default', () => {
      render(<Expander summaryText="Summary" text="Content" />);
      
      const expander = screen.getByRole('group');
      expect(expander).not.toHaveAttribute('open');
    });

    it('should be open when open prop is true', () => {
      render(<Expander summaryText="Summary" text="Content" open />);
      
      const expander = screen.getByRole('group');
      expect(expander).toHaveAttribute('open');
    });

    it('should apply custom id', () => {
      render(<Expander id="custom-id" summaryText="Summary" text="Content" />);
      
      const expander = screen.getByRole('group');
      expect(expander).toHaveAttribute('id', 'custom-id');
    });

    it('should apply custom className', () => {
      render(<Expander className="custom-class" summaryText="Summary" text="Content" />);
      
      const expander = screen.getByRole('group');
      expect(expander).toHaveClass('nhsuk-expander', 'custom-class');
    });

    it('should apply additional props', () => {
      render(
        <Expander
          summaryText="Summary"
          text="Content"
          data-testid="expander-element"
          aria-label="Custom label"
        />
      );
      
      const expander = screen.getByTestId('expander-element');
      expect(expander).toHaveAttribute('aria-label', 'Custom label');
    });

    it('should always use expander class', () => {
      render(<Expander summaryText="Summary" text="Content" />);
      
      const expander = screen.getByRole('group');
      expect(expander).toHaveClass('nhsuk-expander');
    });
  });

  describe('Interaction', () => {
    it('should toggle open state when clicked', () => {
      render(<Expander summaryText="Summary" text="Content" />);
      
      const expander = screen.getByRole('group');
      const summary = screen.getByText('Summary');
      
      expect(expander).not.toHaveAttribute('open');
      
      fireEvent.click(summary);
      expect(expander).toHaveAttribute('open');
      
      fireEvent.click(summary);
      expect(expander).not.toHaveAttribute('open');
    });

    it('should be accessible via keyboard', () => {
      render(<Expander summaryText="Summary" text="Content" />);
      
      const summary = document.querySelector('summary');
      expect(summary).toBeInTheDocument();
      
      // Test that summary can receive focus
      summary?.focus();
      expect(summary).toHaveFocus();
      
      // Test that it's properly labeled for screen readers
      expect(summary).toHaveTextContent('Summary');
    });
  });

  describe('Accessibility', () => {
    it('should have correct ARIA structure', () => {
      render(<Expander summaryText="Summary" text="Content" />);
      
      const expander = screen.getByRole('group');
      const summary = expander.querySelector('summary');
      
      expect(expander.tagName.toLowerCase()).toBe('details');
      expect(summary?.tagName.toLowerCase()).toBe('summary');
    });

    it('should have correct content structure', () => {
      render(<Expander summaryText="Summary" text="Content" />);
      
      const summaryText = document.querySelector('.nhsuk-details__summary-text');
      const expanderText = document.querySelector('.nhsuk-details__text');
      
      expect(summaryText).toHaveTextContent('Summary');
      expect(expanderText).toHaveTextContent('Content');
    });
  });

  describe('Error handling', () => {
    it('should handle empty summary gracefully', () => {
      render(<Expander summaryText="" text="Content" />);
      
      const summaryElement = document.querySelector('.nhsuk-details__summary-text');
      expect(summaryElement).toHaveTextContent('');
    });

    it('should handle empty content gracefully', () => {
      render(<Expander summaryText="Summary" text="" />);
      
      const expanderText = document.querySelector('.nhsuk-details__text');
      expect(expanderText).toHaveTextContent('');
    });

    it('should handle missing content props gracefully', () => {
      render(<Expander summaryText="Summary" />);
      
      const expanderText = document.querySelector('.nhsuk-details__text');
      expect(expanderText).toBeInTheDocument();
    });
  });

  describe('Ref forwarding', () => {
    it('should forward ref to details element', () => {
      const ref = React.createRef<HTMLDetailsElement>();
      render(<Expander ref={ref} summaryText="Summary" text="Content" />);
      
      expect(ref.current).toBeInstanceOf(HTMLDetailsElement);
      expect(ref.current?.tagName.toLowerCase()).toBe('details');
    });
  });
});
