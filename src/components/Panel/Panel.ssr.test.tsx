import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Panel } from './Panel';

describe('Panel (SSR)', () => {
  it('renders heading html variant', () => {
    const { html } = renderSSR(<Panel headingHtml="<strong>Bold</strong>" />);
    expect(html).toContain('<strong>Bold</strong>');
    expect(html).toContain('nhsuk-panel');
  });

  it('renders body text paragraph', () => {
    const { html } = renderSSR(<Panel bodyText="Body" />);
    expect(html).toContain('<p>Body</p>');
  });
});
