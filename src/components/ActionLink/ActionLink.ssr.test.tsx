import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { ActionLink } from './ActionLink';

describe('ActionLink (SSR)', () => {
  it('renders link with href', () => {
    const { container, getByText } = renderSSR(<ActionLink text="Go" href="/go" />);
    expect(getByText('Go')).toBeTruthy();
    expect(container.querySelector('a')?.getAttribute('href')).toBe('/go');
  });
  it('adds new window attrs', () => {
    const { container } = renderSSR(<ActionLink text="Ext" href="https://x" openInNewWindow />);
    const a = container.querySelector('a');
    expect(a?.getAttribute('target')).toBe('_blank');
    expect(a?.getAttribute('rel')).toBe('noopener noreferrer');
  });
  it('applies custom className', () => {
    const { container } = renderSSR(<ActionLink text="C" href="/c" className="extra" />);
    expect(container.querySelector('a')?.className).toContain('extra');
  });
});
