import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { WarningCallout } from './WarningCallout';

describe('WarningCallout (SSR)', () => {
  it('renders heading in SSR output', () => {
    const { getByRole } = renderSSR(<WarningCallout heading="Test Warning" />);
    expect(getByRole('heading')).toBeTruthy();
  });

  it('applies base CSS class in SSR output', () => {
    const { container } = renderSSR(<WarningCallout heading="Test Warning" data-testid="wc" />);
    const el = container.querySelector('[data-testid="wc"]');
    expect(el?.className).toContain('nhsuk-warning-callout');
  });

  it('supports custom className in SSR output', () => {
    const { container } = renderSSR(<WarningCallout heading="Test Warning" className="custom" data-testid="wc" />);
    const el = container.querySelector('[data-testid="wc"]');
    expect(el?.className).toContain('nhsuk-warning-callout');
    expect(el?.className).toContain('custom');
  });
});
