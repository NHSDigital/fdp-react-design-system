import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Expander } from '../Expander';

describe('Expander (SSR)', () => {
  describe('content precedence', () => {
    it('prioritises children over html and text', () => {
      const { getByText, queryByText } = renderSSR(
        <Expander summaryText="Summary" text="fallback" html="<p>html</p>">
          <p>child</p>
        </Expander>
      );
      expect(getByText('child')).toBeTruthy();
      expect(queryByText('fallback')).toBeNull();
      expect(queryByText('html')).toBeNull();
    });
    it('prioritises summaryHtml over summaryText', () => {
      const { queryByText, container } = renderSSR(
        <Expander summaryText="wrong" summaryHtml="<strong>right</strong>" text="Content" />
      );
      expect(queryByText('wrong')).toBeNull();
      const strong = container.querySelector('strong');
      expect(strong?.textContent).toBe('right');
    });
    it('prioritises html over text', () => {
      const { queryByText, getByText } = renderSSR(
        <Expander summaryText="Summary" text="fallback" html="<p>preferred</p>" />
      );
      expect(queryByText('fallback')).toBeNull();
      expect(getByText('preferred')).toBeTruthy();
    });
  });

  describe('attributes', () => {
    it('closed by default', () => {
      const { container } = renderSSR(<Expander summaryText="Summary" text="Content" />);
      const details = container.querySelector('details');
      expect(details?.hasAttribute('open')).toBe(false);
    });
    it('open when open prop true', () => {
      const { container } = renderSSR(<Expander summaryText="Summary" text="Content" open />);
      const details = container.querySelector('details');
      expect(details?.hasAttribute('open')).toBe(true);
    });
    it('applies id, className and extra props', () => {
      const { container, getByTestId } = renderSSR(
        <Expander id="custom-id" className="extra" data-testid="exp" summaryText="Summary" text="Content" aria-label="Custom" />
      );
      const details = container.querySelector('details');
      expect(details?.id).toBe('custom-id');
      expect(details?.className).toContain('nhsuk-expander');
      expect(details?.className).toContain('extra');
      expect(getByTestId('exp').getAttribute('aria-label')).toBe('Custom');
    });
  });

  describe('structure & a11y', () => {
    it('renders summary and content wrappers', () => {
      const { container } = renderSSR(<Expander summaryText="Summary" text="Content" />);
      const details = container.querySelector('details');
      const summary = details?.querySelector('summary');
      expect(details?.tagName.toLowerCase()).toBe('details');
      expect(summary?.tagName.toLowerCase()).toBe('summary');
      expect(container.querySelector('.nhsuk-details__summary-text')?.textContent).toContain('Summary');
      expect(container.querySelector('.nhsuk-details__text')?.textContent).toContain('Content');
    });
  });

  describe('edge cases', () => {
    it('handles empty summary', () => {
      const { container } = renderSSR(<Expander summaryText="" text="Content" />);
      expect(container.querySelector('.nhsuk-details__summary-text')?.textContent).toBe('');
    });
    it('handles empty content', () => {
      const { container } = renderSSR(<Expander summaryText="Summary" text="" />);
      expect(container.querySelector('.nhsuk-details__text')).toBeTruthy();
    });
    it('handles missing content props', () => {
      const { container } = renderSSR(<Expander summaryText="Summary" />);
      expect(container.querySelector('.nhsuk-details__text')).toBeTruthy();
    });
  });
});
