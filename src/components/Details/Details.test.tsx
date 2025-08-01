import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Details } from './Details';
import { describe, it, expect } from 'vitest';

describe('Details', () => {
  describe('Basic functionality', () => {
    it('should render with summary text', () => {
      render(<Details summaryText="More information" text="This is the hidden content" />);
      
      expect(screen.getByText('More information')).toBeInTheDocument();
      expect(screen.getByText('This is the hidden content')).toBeInTheDocument();
    });

    it('should render with summary HTML', () => {
      render(
        <Details
          summaryHtml="<strong>More</strong> information"
          text="This is the hidden content"
        />
      );
      
      expect(screen.getByText('information')).toBeInTheDocument();
      expect(screen.getByRole('strong')).toHaveTextContent('More');
    });

    it('should render with HTML content', () => {
      render(
        <Details
          summaryText="More information"
          html="<p>This is a <strong>paragraph</strong></p>"
        />
      );
      
      expect(screen.getByText('paragraph')).toBeInTheDocument();
      expect(screen.getByRole('strong')).toHaveTextContent('paragraph');
    });

    it('should render with children content', () => {
      render(
        <Details summaryText="More information">
          <p>This is child content</p>
        </Details>
      );
      
      expect(screen.getByText('This is child content')).toBeInTheDocument();
    });

    it('should prioritize children over html and text props', () => {
      render(
        <Details
          summaryText="More information"
          text="This should not appear"
          html="<p>This should also not appear</p>"
        >
          <p>This is child content</p>
        </Details>
      );
      
      expect(screen.getByText('This is child content')).toBeInTheDocument();
      expect(screen.queryByText('This should not appear')).not.toBeInTheDocument();
      expect(screen.queryByText('This should also not appear')).not.toBeInTheDocument();
    });

    it('should prioritize summaryHtml over summaryText', () => {
      render(
        <Details
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
        <Details
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
      render(<Details summaryText="Summary" text="Content" />);
      
      const details = screen.getByRole('group');
      expect(details).not.toHaveAttribute('open');
    });

    it('should be open when open prop is true', () => {
      render(<Details summaryText="Summary" text="Content" open />);
      
      const details = screen.getByRole('group');
      expect(details).toHaveAttribute('open');
    });

    it('should apply custom id', () => {
      render(<Details id="custom-id" summaryText="Summary" text="Content" />);
      
      const details = screen.getByRole('group');
      expect(details).toHaveAttribute('id', 'custom-id');
    });

    it('should apply custom className', () => {
      render(<Details className="custom-class" summaryText="Summary" text="Content" />);
      
      const details = screen.getByRole('group');
      expect(details).toHaveClass('nhsuk-details', 'custom-class');
    });

    it('should apply additional props', () => {
      render(
        <Details
          summaryText="Summary"
          text="Content"
          data-testid="details-element"
          aria-label="Custom label"
        />
      );
      
      const details = screen.getByTestId('details-element');
      expect(details).toHaveAttribute('aria-label', 'Custom label');
    });
  });

  describe('Interaction', () => {
    it('should toggle open state when clicked', () => {
      render(<Details summaryText="Summary" text="Content" />);
      
      const details = screen.getByRole('group');
      const summary = screen.getByText('Summary');
      
      expect(details).not.toHaveAttribute('open');
      
      fireEvent.click(summary);
      expect(details).toHaveAttribute('open');
      
      fireEvent.click(summary);
      expect(details).not.toHaveAttribute('open');
    });

    it('should be accessible via keyboard', () => {
      render(<Details summaryText="Summary" text="Content" />);
      
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
      render(<Details summaryText="Summary" text="Content" />);
      
      const details = screen.getByRole('group');
      const summary = details.querySelector('summary');
      
      expect(details.tagName.toLowerCase()).toBe('details');
      expect(summary?.tagName.toLowerCase()).toBe('summary');
    });

    it('should have correct content structure', () => {
      render(<Details summaryText="Summary" text="Content" />);
      
      const summaryText = document.querySelector('.nhsuk-details__summary-text');
      const detailsText = document.querySelector('.nhsuk-details__text');
      
      expect(summaryText).toHaveTextContent('Summary');
      expect(detailsText).toHaveTextContent('Content');
    });
  });

  describe('Error handling', () => {
    it('should handle empty summary gracefully', () => {
      render(<Details summaryText="" text="Content" />);
      
      const summaryElement = document.querySelector('.nhsuk-details__summary-text');
      expect(summaryElement).toHaveTextContent('');
    });

    it('should handle empty content gracefully', () => {
      render(<Details summaryText="Summary" text="" />);
      
      const detailsText = document.querySelector('.nhsuk-details__text');
      expect(detailsText).toHaveTextContent('');
    });

    it('should handle missing content props gracefully', () => {
      render(<Details summaryText="Summary" />);
      
      const detailsText = document.querySelector('.nhsuk-details__text');
      expect(detailsText).toBeInTheDocument();
    });
  });

  describe('Ref forwarding', () => {
    it('should forward ref to details element', () => {
      const ref = React.createRef<HTMLDetailsElement>();
      render(<Details ref={ref} summaryText="Summary" text="Content" />);
      
      expect(ref.current).toBeInstanceOf(HTMLDetailsElement);
      expect(ref.current?.tagName.toLowerCase()).toBe('details');
    });
  });
});
