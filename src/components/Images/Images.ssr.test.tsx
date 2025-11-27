import { describe, it, expect } from 'vitest';
import { renderSSR } from '../../test-utils/renderSSR';
import { Images } from './Images';

describe('Images (SSR)', () => {
  it('renders basic figure and img', () => {
    const { html } = renderSSR(<Images src="a.jpg" alt="Alt" />);
    expect(html).toContain('<figure');
    expect(html).toContain('<img');
    expect(html).toContain('Alt');
  });

  it('includes caption html', () => {
    const { html } = renderSSR(<Images src="a.jpg" alt="Alt" caption="Caption <strong>bold</strong>" />);
    expect(html).toContain('Caption <strong>bold</strong>');
  });
});
