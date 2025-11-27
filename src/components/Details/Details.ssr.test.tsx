import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Details } from './Details';

describe('Details (SSR)', () => {
  describe('Content rendering', () => {
    it('renders summaryText + text content', () => {
      const { getByText } = renderSSR(<Details summaryText="More information" text="This is the hidden content" />);
      expect(getByText('More information')).toBeTruthy();
      expect(getByText('This is the hidden content')).toBeTruthy();
    });
    it('renders summaryHtml precedence', () => {
      const { container, getByText } = renderSSR(<Details summaryHtml="<strong>More</strong> information" text="Hidden" />);
      expect(getByText('information')).toBeTruthy();
      expect(container.querySelector('strong')?.textContent).toBe('More');
    });
    it('renders html content precedence over text', () => {
      const { container, getByText } = renderSSR(<Details summaryText="Summary" html="<p>This is a <strong>paragraph</strong></p>" />);
      expect(getByText('paragraph')).toBeTruthy();
      expect(container.querySelector('strong')?.textContent).toBe('paragraph');
    });
    it('prioritises children over text/html props', () => {
      const { getByText, queryByText } = renderSSR(
        <Details summaryText="Summary" text="No" html="<p>No</p>"><p>Yes Child</p></Details>
      );
      expect(getByText('Yes Child')).toBeTruthy();
      expect(queryByText('No')).toBeNull();
    });
    it('prioritises summaryHtml over summaryText', () => {
      const { queryByText, container } = renderSSR(<Details summaryText="No" summaryHtml="<strong>Yes</strong>" text="Content" />);
      expect(queryByText('No')).toBeNull();
      expect(container.querySelector('strong')?.textContent).toBe('Yes');
    });
  });
  describe('Attributes & structure', () => {
    it('is open when open prop true', () => {
      const { container } = renderSSR(<Details summaryText="Summary" text="Content" open />);
      expect(container.querySelector('details')?.hasAttribute('open')).toBe(true);
    });
    it('applies id and className', () => {
      const { container } = renderSSR(<Details id="custom-id" className="extra" summaryText="Summary" text="Content" />);
      const el = container.querySelector('details');
      expect(el?.getAttribute('id')).toBe('custom-id');
      expect(el?.className).toContain('nhsuk-details');
      expect(el?.className).toContain('extra');
    });
    it('forwards arbitrary props', () => {
      const { getByTestId } = renderSSR(<Details data-testid="det" aria-label="Label" summaryText="Summary" text="Content" />);
      expect(getByTestId('det').getAttribute('aria-label')).toBe('Label');
    });
  });
  describe('Accessibility', () => {
    it('has correct semantic elements', () => {
      const { container } = renderSSR(<Details summaryText="Summary" text="Content" />);
      const details = container.querySelector('details');
      const summary = details?.querySelector('summary');
      expect(details?.tagName.toLowerCase()).toBe('details');
      expect(summary?.tagName.toLowerCase()).toBe('summary');
    });
  });
  describe('Edge cases', () => {
    it('handles empty summary', () => {
      const { container } = renderSSR(<Details summaryText="" text="Content" />);
      expect(container.querySelector('summary')?.textContent?.trim()).toBe('');
    });
    it('handles empty content', () => {
      const { container } = renderSSR(<Details summaryText="Summary" text="" />);
      expect(container.querySelector('details')).toBeTruthy();
    });
    it('handles missing content', () => {
      const { container } = renderSSR(<Details summaryText="Summary" />);
      expect(container.querySelector('details')).toBeTruthy();
    });
  });
});
