import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { InsetText } from './InsetText';

// SSR tests

describe('InsetText (SSR)', () => {
  it('renders text prop into paragraph', () => {
    const { container } = renderSSR(<InsetText text="SSR text" />);
    const p = container.querySelector('.nhsuk-inset-text p');
    expect(p?.textContent).toBe('SSR text');
  });

  it('renders html prop with markup', () => {
    const { container } = renderSSR(<InsetText html="<p>HTML <strong>bold</strong></p>" />);
    const strong = container.querySelector('strong');
    expect(strong?.textContent).toBe('bold');
  });

  it('renders children over text/html', () => {
    const { container } = renderSSR(<InsetText text="x" html="<p>y</p>"><span>Child</span></InsetText>);
    expect(container.querySelector('.nhsuk-inset-text')?.textContent).toBe('Child');
  });
});
