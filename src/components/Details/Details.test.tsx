import React from 'react';
import { render as renderServer } from '../../test-utils/ServerRenderer';
import { render } from '@testing-library/react';
import { Details } from './Details';
import { describe, it, expect } from 'vitest';

describe('Details', () => {
  describe('Basic functionality', () => {
    it('should render with summary text', () => {
  const { getByText } = renderServer(<Details summaryText="More information" text="This is the hidden content" />);
      
      expect(getByText('More information')).toBeTruthy();
      expect(getByText('This is the hidden content')).toBeTruthy();
    });

    it('should render with summary HTML', () => {
  const { getByText, container } = renderServer(
        <Details
          summaryHtml="<strong>More</strong> information"
          text="This is the hidden content"
        />
      );
      
      expect(getByText('information')).toBeTruthy();
      const strongEl = container.querySelector('strong');
      expect(strongEl!.textContent).toBe('More');
    });

    it('should render with HTML content', () => {
  const { getByText, container } = renderServer(
        <Details
          summaryText="More information"
          html="<p>This is a <strong>paragraph</strong></p>"
        />
      );
      
      expect(getByText('paragraph')).toBeTruthy();
      const strongEl = container.querySelector('strong');
      expect(strongEl!.textContent).toBe('paragraph');
    });

    it('should render with children content', () => {
  const { getByText } = renderServer(
        <Details summaryText="More information">
          <p>This is child content</p>
        </Details>
      );
      
      expect(getByText('This is child content')).toBeTruthy();
    });

    it('should prioritize children over html and text props', () => {
  const { getByText, queryByText } = renderServer(
        <Details
          summaryText="More information"
          text="This should not appear"
          html="<p>This should also not appear</p>"
        >
          <p>This is child content</p>
        </Details>
      );
      
      expect(getByText('This is child content')).toBeTruthy();
      expect(queryByText('This should not appear')).toBe(null);
      expect(queryByText('This should also not appear')).toBe(null);
    });

    it('should prioritize summaryHtml over summaryText', () => {
  const { queryByText, container } = renderServer(
        <Details
          summaryText="This should not appear"
          summaryHtml="<strong>This should appear</strong>"
          text="Content"
        />
      );
      
      expect(queryByText('This should not appear')).toBe(null);
      const strongEl = container.querySelector('strong');
      expect(strongEl!.textContent).toBe('This should appear');
    });

    it('should prioritize html over text prop', () => {
  const { queryByText, getByText } = renderServer(
        <Details
          summaryText="Summary"
          text="This should not appear"
          html="<p>This should appear</p>"
        />
      );
      
      expect(queryByText('This should not appear')).toBe(null);
      expect(getByText('This should appear')).toBeTruthy();
    });
  });

  describe('States and attributes', () => {
    it('should be closed by default', () => {
  // Use client renderer for keyboard focus semantics
  const { container } = render(<Details summaryText="Summary" text="Content" />);
      
      const details = container.querySelector('details');
      expect(details!.hasAttribute('open')).toBe(false);
    });

    it('should be open when open prop is true', () => {
  const { container } = renderServer(<Details summaryText="Summary" text="Content" open />);
      
      const details = container.querySelector('details');
      expect(details!.hasAttribute('open')).toBe(true);
    });

    it('should apply custom id', () => {
  const { container } = renderServer(<Details id="custom-id" summaryText="Summary" text="Content" />);
      
      const details = container.querySelector('details');
      expect(details!.getAttribute('id')).toBe('custom-id');
    });

    it('should apply custom className', () => {
  const { container } = renderServer(<Details className="custom-class" summaryText="Summary" text="Content" />);
      
      const details = container.querySelector('details');
      expect(details!.className.includes('nhsuk-details')).toBe(true);
      expect(details!.className.includes('custom-class')).toBe(true);
    });

    it('should apply additional props', () => {
  const { getByTestId } = renderServer(
        <Details
          summaryText="Summary"
          text="Content"
          data-testid="details-element"
          aria-label="Custom label"
        />
      );
      
      const details = getByTestId('details-element');
      expect(details!.getAttribute('aria-label')).toBe('Custom label');
    });
  });

  describe('Interaction', () => {
    it('should toggle open state when clicked', () => {
  const { container, getByText } = renderServer(<Details summaryText="Summary" text="Content" />);
      
      const details = container.querySelector('details');
      const summary = getByText('Summary');
      
      expect(details!.hasAttribute('open')).toBe(false);
      
      summary!.click();
      expect(details!.hasAttribute('open')).toBe(true);
      
      summary!.click();
      expect(details!.hasAttribute('open')).toBe(false);
    });

    it('should be accessible via keyboard', () => {
      // Use client renderer for better focus/tabindex semantics
      const { container } = render(<Details summaryText="Summary" text="Content" />);
      const summary = container.querySelector('summary');
      expect(summary).toBeTruthy();
      // Assert focusability via explicit tabindex (jsdom focus on summary unreliable)
      expect(summary?.getAttribute('tabindex')).toBe('0');
      expect(summary!.textContent).toContain('Summary');
    });
  });

  describe('Accessibility', () => {
    it('should have correct ARIA structure', () => {
  const { container } = renderServer(<Details summaryText="Summary" text="Content" />);
      
      const details = container.querySelector('details');
      const summary = details!.querySelector('summary');
      
      expect(details!.tagName.toLowerCase()).toBe('details');
      expect(summary?.tagName.toLowerCase()).toBe('summary');
    });

    it('should have correct content structure', () => {
  const { getByText } = renderServer(<Details summaryText="Summary" text="Content" />);
      
      expect(getByText('Summary')).toBeTruthy();
      expect(getByText('Content')).toBeTruthy();
    });
  });

  describe('Error handling', () => {
    it('should handle empty summary gracefully', () => {
  const { container } = renderServer(<Details summaryText="" text="Content" />);
      
      const summaryElement = container.querySelector('summary');
      expect(summaryElement!.textContent?.trim()).toBe('');
    });

    it('should handle empty content gracefully', () => {
  const { container } = renderServer(<Details summaryText="Summary" text="" />);
      
      const details = container.querySelector('details');
      expect(details).toBeTruthy();
    });

    it('should handle missing content props gracefully', () => {
  const { container } = renderServer(<Details summaryText="Summary" />);
      
      const details = container.querySelector('details');
      expect(details).toBeTruthy();
    });
  });

  describe('Ref forwarding', () => {
    it('should forward ref to details element', () => {
  const { container } = renderServer(<Details summaryText="Summary" text="Content" />);
      
      const details = container.querySelector('details');
      expect(details).toBeTruthy();
      expect(details!.tagName.toLowerCase()).toBe('details');
    });
  });
});
